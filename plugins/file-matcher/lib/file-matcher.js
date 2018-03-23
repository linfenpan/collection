'use strict';
const Fs = require('fs');
const Path = require('path');

/**
 * 文件路径，是否目录
 * @return {Boolean}
*/
function isDirectory(filepath) {
  try {
    const stats = Fs.statSync(filepath);
    return stats.isDirectory();
  } catch (e) {
    return false;
  }
}

/**
 * @constructor
 * @example
 *  const matcher = new FileMatcher({ cwd: 寻址路径, deep[true]: 查找子目录吗, ignore: 忽略那些目录, cache[false]: 是否启动缓存模式, relative[true]: 返回相对路径 })
*/
class FileMatcher {
  constructor(opts) {
    this.opts = Object.assign({
      // 查找的根目录
      cwd: process.cwd(),
      // 是否搜查子目录
      deep: true,
      // 忽略目录下，匹配条件的目录 or 文件
      ignore: [/node_modules/],
      // 是否使用缓存模式，使用的话，每次 find 都从缓存去查找，不再需要遍历所有目录，提高效率
      cache: false,
      // 是否返回相对路径
      relative: true
    }, opts || {});

    // 如果是缓存实行，第一次 find 时，do something~
    this._cacheList = null;
  }

  // 获取缓存文件列表
  _getCacheList() {
    const self = this;
    if (!self._cacheList) {
      self._cacheList = self.find(/.+$/, { cwd: self.opts.cwd, relative: false, deep: true, cache: false });
    }
    return self._cacheList;
  }

  /**
   * 找寻匹配的文件列表
   * @param {Array<RegExp>} regexpList 匹配文件的正则列表
   * @param {String} rootpath 开始匹配的根路径
   * @return {Array<String>}
  */
  find(regexpList, params) {
    const self = this;
    const opts = this.opts;

    params = Object.assign({}, opts, params || {});
    const isFromCache = params.cache;
    const isRelative = params.relative;
    const isDeep = params.deep;
    const cwd = params.cwd;

    if (!Array.isArray(regexpList)) {
      regexpList = [regexpList];
    }

    let ignoreList = params.ignore;
    if (!Array.isArray(ignoreList)) {
      ignoreList = [ignoreList];
    }

    function formatFilepath(filepath) {
      if (isRelative) {
        filepath = Path.relative(cwd, filepath);
      }
      filepath = filepath.replace(/\\+/g, '/');
      return filepath;
    }

    function tryToPushToResult(result, filepath) {
      filepath = formatFilepath(filepath);
      if (self._isMatch(filepath, regexpList) && !self._isMatch(filepath, ignoreList)) {
        result.push(Path.normalize(filepath));
      }
    }

    function readFileList(dir, isDeep) {
      const result = [];

      if (!Fs.existsSync(dir)) {
        return result;
      }

      if (isDirectory(dir)) {
        // 目录，且不是被忽略的内容，才继续执行
        if (isDeep && !self._isMatch(dir, ignoreList)) {
          const fileList = Fs.readdirSync(dir);
          for (let i = 0, ilen = fileList.length; i < ilen; i++) {
            let filepath = Path.resolve(dir, fileList[i]);
            if (isDirectory(filepath)) {
              result.push.apply(result, readFileList(filepath, isDeep));
            } else {
              tryToPushToResult(result, filepath);
            }
          }
        }
      } else {
        tryToPushToResult(result, dir);
      }

      return result;
    }

    function readFromCache(dir, isDeep) {
      const result = [];

      if (isDirectory(dir)) {
        const fileList = self._getCacheList().filter(function(filepath) {
          return !/^\.\.[/\\]/.test(Path.relative(dir, filepath));
        });
        for (let i = 0, ilen = fileList.length; i < ilen; i++) {
          let filepath = fileList[i];
          if (isDeep) {
            tryToPushToResult(result, filepath);
          } else {
            // 排除掉非当前目录的文件
            if (Path.relative(dir, filepath).replace(/\\+/g, '/').indexOf('/') < 0) {
              tryToPushToResult(result, filepath);
            }
          }
        }
      } else {
        tryToPushToResult(result, dir);
      }

      return result;
    }

    return isFromCache ? readFromCache(cwd, isDeep) : readFileList(cwd, isDeep);
  }

  /**
   * 文件路径，是否匹配正则列表
   * @param {String} filepath 文件路径
   * @param {Array<RegExp>} regexpList 正则列表
   * @return {Boolean}
  */
  _isMatch(filepath, regexpList) {
    filepath = filepath.replace(/\\+/g, '/');

    if (!Array.isArray(regexpList)) {
      regexpList = [regexpList];
    }

    let isValid = false;
    for (let i = 0, ilen = regexpList.length; i < ilen; i++) {
      let reg = regexpList[i];
      if (reg.test(filepath)) {
        isValid = true;
        break;
      }
    }
    return isValid;
  }

}

module.exports = FileMatcher;
