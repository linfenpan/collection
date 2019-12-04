__all__ = ['run2src']

# Don't look below, you will not understand this Python code :) I don't.

from js2py.pyjs import *
# setting scope
var = Scope( JS_BUILTINS )
set_global_object(var)

# Code follows:
var.registers([u'run'])
@Js
def PyJsHoisted_run_(name, this, arguments, var=var):
    var = Scope({u'this':this, u'name':name, u'arguments':arguments}, var)
    var.registers([u'res', u'App', u'san', u'render', u'name'])
    var.put(u'san', var.get(u"this").get(u'san'))
    if (PyJsStrictEq(var.get(u'exports',throw=False).typeof(),Js(u'object')) and PyJsStrictEq(var.get(u'module',throw=False).typeof(),Js(u'object'))):
        var.put(u'san', var.get(u'module').get(u'exports'))
    @Js
    def PyJs_anonymous_250_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        return Js({u'name':Js(u'\u5475\u5475')})
    PyJs_anonymous_250_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_251_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        var.get(u"this").put(u'owner', Js(1.0))
    PyJs_anonymous_251_._set_name(u'anonymous')
    var.put(u'App', var.get(u'san').callprop(u'defineComponent', Js({u'template':Js(u'<div>            {{ name }}            <script>                window.xxx = 2;            </script>        </div>'),u'initData':PyJs_anonymous_250_,u'inited':PyJs_anonymous_251_})))
    var.put(u'render', var.get(u'san').callprop(u'compileToRenderer', var.get(u'App')))
    var.put(u'res', var.get(u'render')(Js({u'name':(var.get(u'name') or Js(u''))})))
    return var.get(u'res')
PyJsHoisted_run_.func_name = u'run'
var.put(u'run', PyJsHoisted_run_)
if PyJsStrictNeq(var.get(u'window',throw=False).typeof(),Js(u'undefined')):
    var.put(u'window', PyJsComma(Js(0.0), Js(None)))
@Js
def PyJs_anonymous_0_(root, this, arguments, var=var):
    var = Scope({u'this':this, u'root':root, u'arguments':arguments}, var)
    var.registers([u'readRelationalExpr', u'compileJSSource', u'noSetHTML', u'createNode', u'ieOldThan9', u'readTertiaryExpr', u'ANONYMOUS_CLASS_NAME', u'warnEventListenMethod', u'nodeOwnSimpleDispose', u'emptyPropWhenCreate', u'elementSourceCompiler', u'getANodeProp', u'elementDisposeChildren', u'createComponentLoader', u'decodeHTMLEntity', u'nodeOwnCreateStump', u'elementOwnToPhase', u'readString', u'elementOwnCreate', u'genElementChildren', u'splitStr2Obj', u'DEFAULT_FILTERS', u'svgPropHandler', u'TemplateNode', u'aNodeCompiler', u'nextTick', u'directiveParsers', u'componentCompilePreCode', u'TextNode', u'isBrowser', u'ieVersionMatch', u'readLogicalANDExpr', u'svgTags', u'evalArgs', u'elementOwnAttached', u'createDataTypesChecker', u'readIdent', u'autoCloseTags', u'inputOnCompositionStart', u'ENTITY_DECODE_MAP', u'integrateAttr', u'eventDeclarationListener', u'warnSetHTML', u'each', u'unionKeys', u'DOMChildrenWalker', u'compileComponent', u'elementOwnDispose', u'nextTasks', u'inputXPropOutputer', u'elementGetTransition', u'san4devtool', u'eachForData', u'elementPropHandlers', u'IfNode', u'integrateProp', u'parseExpr', u'kebab2camel', u'getXPath', u'createArrayOfChecker', u'createOneOfChecker', u'readMultiplicativeExpr', u'isOptionSelected', u'guidPrefix', u'stringifier', u'evalExpr', u'analInputCheckedState', u'extend', u'emitDevtool', u'elementLeave', u'elementUpdateChildren', u'nodeSBindUpdate', u'on', u'reverseElementChildren', u'createEl', u'regexpLiteral', u'dataCache', u'xPropOutputer', u'lifeCycleOwnIs', u'textUpdateProp', u'parseTemplate', u'serializeStumpEnd', u'createExactChecker', u'COMPONENT_RESERVED_MEMBERS', u'inputOnCompositionEnd', u'analyseExprDataHotspot', u'changeExprCompare', u'elementDispose', u'compileComponentSource', u'findMethod', u'guid', u'ExprType', u'getDataType', u'readEqualityExpr', u'DataChangeType', u'defaultElementPropHandler', u'contains', u'LifeCycle', u'trigger', u'delimRegCache', u'elementOwnDetach', u'createOneOfTypeChecker', u'createShapeChecker', u'Data', u'empty', u'getPropHandler', u'genComponentContextCode', u'ForNode', u'ComponentLoader', u'handleProp', u'dataCacheSource', u'changesIsInDataRef', u'createForDirectiveChild', u'serializeStump', u'createInstanceOfChecker', u'elementInitTagName', u'defaultElementPropHandlers', u'readCall', u'Walker', u'parseInterp', u'readAccessor', u'elementAttach', u'NodeType', u'changeExprCompareExprs', u'camelComponentBinds', u'un', u'createObjectOfChecker', u'nodeSBindInit', u'createReverseNode', u'root', u'isNativePromise', u'inherits', u'boolPropHandler', u'san', u'guidIndex', u'dataCacheClearly', u'readAdditiveExpr', u'createANode', u'analInputChecker', u'cloneDirectives', u'nextHandler', u'HTML_ATTR_PROP_MAP', u'createPrimaryTypeChecker', u'ie', u'readNumber', u'AsyncComponent', u'immutableSet', u'readLogicalORExpr', u'nodeDispose', u'isEndStump', u'Component', u'SlotNode', u'nodeOwnOnlyChildrenAttach', u'createChainableChecker', u'parseText', u'ForItemData', u'insertBefore', u'parseDirective', u'Element', u'compileExprSource', u'removeEl', u'isDataChangeByElement', u'DataTypes', u'elementOwnAttach', u'parseCall', u'readUnaryExpr', u'defineComponent', u'warn', u'bind', u'getNodePath', u'CompileSourceBuffer', u'componentPreheat', u'postProp', u'readParenthesizedExpr', u'rinseCondANode', u'elementOwnOnEl', u'createAccessor'])
    @Js
    def PyJsHoisted_readRelationalExpr_(walker, this, arguments, var=var):
        var = Scope({u'walker':walker, u'this':this, u'arguments':arguments}, var)
        var.registers([u'walker', u'expr', u'code'])
        var.put(u'expr', var.get(u'readAdditiveExpr')(var.get(u'walker')))
        var.get(u'walker').callprop(u'goUntil')
        var.put(u'code', var.get(u'walker').callprop(u'currentCode'))
        while 1:
            SWITCHED = False
            CONDITION = (var.get(u'code'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(60.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(62.0)):
                SWITCHED = True
                if PyJsStrictEq(var.get(u'walker').callprop(u'nextCode'),Js(61.0)):
                    var.put(u'code', Js(61.0), u'+')
                    var.get(u'walker').callprop(u'go', Js(1.0))
                return Js({u'type':Js(8.0),u'operator':var.get(u'code'),u'segs':Js([var.get(u'expr'), var.get(u'readAdditiveExpr')(var.get(u'walker'))])})
            SWITCHED = True
            break
        return var.get(u'expr')
    PyJsHoisted_readRelationalExpr_.func_name = u'readRelationalExpr'
    var.put(u'readRelationalExpr', PyJsHoisted_readRelationalExpr_)
    @Js
    def PyJsHoisted_compileJSSource_(ComponentClass, this, arguments, var=var):
        var = Scope({u'this':this, u'ComponentClass':ComponentClass, u'arguments':arguments}, var)
        var.registers([u'component', u'sourceBuffer', u'ComponentClass'])
        var.put(u'sourceBuffer', var.get(u'CompileSourceBuffer').create())
        var.get(u'sourceBuffer').callprop(u'addRendererStart')
        var.get(u'sourceBuffer').callprop(u'addRaw', var.get(u'componentCompilePreCode').callprop(u'toString').callprop(u'split', Js(u'\n')).callprop(u'slice', Js(1.0)).callprop(u'join', Js(u'\n')).callprop(u'replace', JsRegExp(u'/\\}\\s*$/'), Js(u'')))
        var.put(u'component', var.get(u'ComponentClass').create())
        var.get(u'compileComponentSource')(var.get(u'sourceBuffer'), var.get(u'component'))
        var.get(u'sourceBuffer').callprop(u'addRendererEnd')
        return var.get(u'sourceBuffer').callprop(u'toCode')
    PyJsHoisted_compileJSSource_.func_name = u'compileJSSource'
    var.put(u'compileJSSource', PyJsHoisted_compileJSSource_)
    @Js
    def PyJsHoisted_noSetHTML_(el, this, arguments, var=var):
        var = Scope({u'this':this, u'el':el, u'arguments':arguments}, var)
        var.registers([u'el'])
        return JsRegExp(u'/^(col|colgroup|frameset|style|table|tbody|tfoot|thead|tr|select)$/i').callprop(u'test', var.get(u'el').get(u'tagName'))
    PyJsHoisted_noSetHTML_.func_name = u'noSetHTML'
    var.put(u'noSetHTML', PyJsHoisted_noSetHTML_)
    @Js
    def PyJsHoisted_createNode_(aNode, parent, scope, this, arguments, var=var):
        var = Scope({u'this':this, u'scope':scope, u'aNode':aNode, u'arguments':arguments, u'parent':parent}, var)
        var.registers([u'parent', u'ComponentOrLoader', u'aNode', u'owner', u'scope', u'parentIsComponent'])
        var.put(u'parentIsComponent', PyJsStrictEq(var.get(u'parent').get(u'nodeType'),Js(5.0)))
        var.put(u'owner', (var.get(u'parent') if var.get(u'parentIsComponent') else (var.get(u'parent').get(u'childOwner') or var.get(u'parent').get(u'owner'))))
        var.put(u'scope', (var.get(u'scope') or (var.get(u'parent').get(u'data') if var.get(u'parentIsComponent') else (var.get(u'parent').get(u'childScope') or var.get(u'parent').get(u'scope')))))
        if var.get(u'aNode').get(u'textExpr'):
            return var.get(u'TextNode').create(var.get(u'aNode'), var.get(u'owner'), var.get(u'scope'), var.get(u'parent'))
        if var.get(u'aNode').get(u'directives').get(u'if'):
            return var.get(u'IfNode').create(var.get(u'aNode'), var.get(u'owner'), var.get(u'scope'), var.get(u'parent'))
        if var.get(u'aNode').get(u'directives').get(u'for'):
            return var.get(u'ForNode').create(var.get(u'aNode'), var.get(u'owner'), var.get(u'scope'), var.get(u'parent'))
        while 1:
            SWITCHED = False
            CONDITION = (var.get(u'aNode').get(u'tagName'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'slot')):
                SWITCHED = True
                return var.get(u'SlotNode').create(var.get(u'aNode'), var.get(u'owner'), var.get(u'scope'), var.get(u'parent'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'template')):
                SWITCHED = True
                return var.get(u'TemplateNode').create(var.get(u'aNode'), var.get(u'owner'), var.get(u'scope'), var.get(u'parent'))
            if True:
                SWITCHED = True
                var.put(u'ComponentOrLoader', (var.get(u'owner').callprop(u'getComponentType', var.get(u'aNode')) if var.get(u'owner').get(u'getComponentType') else var.get(u'owner').get(u'components').get(var.get(u'aNode').get(u'tagName'))))
                if var.get(u'ComponentOrLoader'):
                    def PyJs_LONG_84_(var=var):
                        return (var.get(u'ComponentOrLoader').create(Js({u'source':var.get(u'aNode'),u'owner':var.get(u'owner'),u'scope':var.get(u'scope'),u'parent':var.get(u'parent'),u'subTag':var.get(u'aNode').get(u'tagName')})) if PyJsStrictEq(var.get(u'ComponentOrLoader',throw=False).typeof(),Js(u'function')) else var.get(u'AsyncComponent').create(Js({u'source':var.get(u'aNode'),u'owner':var.get(u'owner'),u'scope':var.get(u'scope'),u'parent':var.get(u'parent'),u'subTag':var.get(u'aNode').get(u'tagName')}), var.get(u'ComponentOrLoader')))
                    return PyJs_LONG_84_()
            SWITCHED = True
            break
        return var.get(u'Element').create(var.get(u'aNode'), var.get(u'owner'), var.get(u'scope'), var.get(u'parent'))
    PyJsHoisted_createNode_.func_name = u'createNode'
    var.put(u'createNode', PyJsHoisted_createNode_)
    @Js
    def PyJsHoisted_readTertiaryExpr_(walker, this, arguments, var=var):
        var = Scope({u'walker':walker, u'this':this, u'arguments':arguments}, var)
        var.registers([u'walker', u'conditional', u'yesExpr'])
        var.put(u'conditional', var.get(u'readLogicalORExpr')(var.get(u'walker')))
        var.get(u'walker').callprop(u'goUntil')
        if PyJsStrictEq(var.get(u'walker').callprop(u'currentCode'),Js(63.0)):
            var.get(u'walker').callprop(u'go', Js(1.0))
            var.put(u'yesExpr', var.get(u'readTertiaryExpr')(var.get(u'walker')))
            var.get(u'walker').callprop(u'goUntil')
            if PyJsStrictEq(var.get(u'walker').callprop(u'currentCode'),Js(58.0)):
                var.get(u'walker').callprop(u'go', Js(1.0))
                return Js({u'type':Js(10.0),u'segs':Js([var.get(u'conditional'), var.get(u'yesExpr'), var.get(u'readTertiaryExpr')(var.get(u'walker'))])})
        return var.get(u'conditional')
    PyJsHoisted_readTertiaryExpr_.func_name = u'readTertiaryExpr'
    var.put(u'readTertiaryExpr', PyJsHoisted_readTertiaryExpr_)
    @Js
    def PyJsHoisted_warnEventListenMethod_(eventBind, owner, this, arguments, var=var):
        var = Scope({u'owner':owner, u'this':this, u'eventBind':eventBind, u'arguments':arguments}, var)
        var.registers([u'owner', u'paths', u'valid', u'eventBind', u'method'])
        var.put(u'valid', Js(True))
        var.put(u'method', var.get(u'owner'))
        @Js
        def PyJs_anonymous_123_(path, this, arguments, var=var):
            var = Scope({u'this':this, u'path':path, u'arguments':arguments}, var)
            var.registers([u'path'])
            if var.get(u'path').get(u'value').neg():
                return Js(False)
            var.put(u'method', var.get(u'method').get(var.get(u'path').get(u'value')))
            var.put(u'valid', var.get(u'method').neg().neg())
            return var.get(u'valid')
        PyJs_anonymous_123_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'eventBind').get(u'expr').get(u'name').get(u'paths'), PyJs_anonymous_123_)
        if var.get(u'valid').neg():
            var.put(u'paths', Js([]))
            @Js
            def PyJs_anonymous_124_(path, this, arguments, var=var):
                var = Scope({u'this':this, u'path':path, u'arguments':arguments}, var)
                var.registers([u'path'])
                var.get(u'paths').callprop(u'push', var.get(u'path').get(u'value'))
            PyJs_anonymous_124_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'eventBind').get(u'expr').get(u'name').get(u'paths'), PyJs_anonymous_124_)
            var.get(u'warn')((((var.get(u'eventBind').get(u'name')+Js(u' listen fail,"'))+var.get(u'paths').callprop(u'join', Js(u'.')))+Js(u'" not exist')))
    PyJsHoisted_warnEventListenMethod_.func_name = u'warnEventListenMethod'
    var.put(u'warnEventListenMethod', PyJsHoisted_warnEventListenMethod_)
    @Js
    def PyJsHoisted_nodeOwnSimpleDispose_(noDetach, this, arguments, var=var):
        var = Scope({u'noDetach':noDetach, u'this':this, u'arguments':arguments}, var)
        var.registers([u'noDetach'])
        var.get(u'elementDisposeChildren')(var.get(u"this").get(u'children'), var.get(u'noDetach'), Js(1.0))
        if var.get(u'noDetach').neg():
            var.get(u'removeEl')(var.get(u"this").get(u'el'))
        var.get(u'nodeDispose')(var.get(u"this"))
    PyJsHoisted_nodeOwnSimpleDispose_.func_name = u'nodeOwnSimpleDispose'
    var.put(u'nodeOwnSimpleDispose', PyJsHoisted_nodeOwnSimpleDispose_)
    @Js
    def PyJsHoisted_getANodeProp_(aNode, name, this, arguments, var=var):
        var = Scope({u'this':this, u'aNode':aNode, u'name':name, u'arguments':arguments}, var)
        var.registers([u'index', u'aNode', u'name'])
        var.put(u'index', var.get(u'aNode').get(u'hotspot').get(u'props').get(var.get(u'name')))
        if (var.get(u'index')!=var.get(u"null")):
            return var.get(u'aNode').get(u'props').get(var.get(u'index'))
    PyJsHoisted_getANodeProp_.func_name = u'getANodeProp'
    var.put(u'getANodeProp', PyJsHoisted_getANodeProp_)
    @Js
    def PyJsHoisted_elementDisposeChildren_(children, noDetach, noTransition, this, arguments, var=var):
        var = Scope({u'noDetach':noDetach, u'this':this, u'noTransition':noTransition, u'children':children, u'arguments':arguments}, var)
        var.registers([u'noDetach', u'noTransition', u'children', u'len'])
        var.put(u'len', (var.get(u'children') and var.get(u'children').get(u'length')))
        while (var.put(u'len',Js(var.get(u'len').to_number())-Js(1))+Js(1)):
            var.get(u'children').get(var.get(u'len')).callprop(u'dispose', var.get(u'noDetach'), var.get(u'noTransition'))
    PyJsHoisted_elementDisposeChildren_.func_name = u'elementDisposeChildren'
    var.put(u'elementDisposeChildren', PyJsHoisted_elementDisposeChildren_)
    @Js
    def PyJsHoisted_createComponentLoader_(options, this, arguments, var=var):
        var = Scope({u'this':this, u'options':options, u'arguments':arguments}, var)
        var.registers([u'load', u'fallback', u'placeholder', u'options'])
        var.put(u'placeholder', var.get(u'options').get(u'placeholder'))
        var.put(u'fallback', var.get(u'options').get(u'fallback'))
        var.put(u'load', (var.get(u'options') if PyJsStrictEq(var.get(u'options',throw=False).typeof(),Js(u'function')) else var.get(u'options').get(u'load')))
        return var.get(u'ComponentLoader').create(var.get(u'load'), var.get(u'placeholder'), var.get(u'fallback'))
    PyJsHoisted_createComponentLoader_.func_name = u'createComponentLoader'
    var.put(u'createComponentLoader', PyJsHoisted_createComponentLoader_)
    @Js
    def PyJsHoisted_decodeHTMLEntity_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'source'])
        @Js
        def PyJs_anonymous_26_(match, code, this, arguments, var=var):
            var = Scope({u'this':this, u'code':code, u'arguments':arguments, u'match':match}, var)
            var.registers([u'code', u'match'])
            return (var.get(u'ENTITY_DECODE_MAP').get(var.get(u'code')) or var.get(u'match'))
        PyJs_anonymous_26_._set_name(u'anonymous')
        @Js
        def PyJs_anonymous_27_(match, code, this, arguments, var=var):
            var = Scope({u'this':this, u'code':code, u'arguments':arguments, u'match':match}, var)
            var.registers([u'code', u'match'])
            return var.get(u'String').callprop(u'fromCharCode', var.get(u'parseInt')(var.get(u'code'), Js(16.0)))
        PyJs_anonymous_27_._set_name(u'anonymous')
        @Js
        def PyJs_anonymous_28_(match, code, this, arguments, var=var):
            var = Scope({u'this':this, u'code':code, u'arguments':arguments, u'match':match}, var)
            var.registers([u'code', u'match'])
            return var.get(u'String').callprop(u'fromCharCode', (+var.get(u'code')))
        PyJs_anonymous_28_._set_name(u'anonymous')
        return var.get(u'source').callprop(u'replace', JsRegExp(u'/&#([0-9]+);/g'), PyJs_anonymous_28_).callprop(u'replace', JsRegExp(u'/&#x([0-9a-f]+);/ig'), PyJs_anonymous_27_).callprop(u'replace', JsRegExp(u'/&([a-z]+);/ig'), PyJs_anonymous_26_)
    PyJsHoisted_decodeHTMLEntity_.func_name = u'decodeHTMLEntity'
    var.put(u'decodeHTMLEntity', PyJsHoisted_decodeHTMLEntity_)
    @Js
    def PyJsHoisted_nodeOwnCreateStump_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        var.get(u"this").put(u'el', (var.get(u"this").get(u'el') or var.get(u'document').callprop(u'createComment', var.get(u"this").get(u'id'))))
    PyJsHoisted_nodeOwnCreateStump_.func_name = u'nodeOwnCreateStump'
    var.put(u'nodeOwnCreateStump', PyJsHoisted_nodeOwnCreateStump_)
    @Js
    def PyJsHoisted_elementOwnToPhase_(name, this, arguments, var=var):
        var = Scope({u'this':this, u'name':name, u'arguments':arguments}, var)
        var.registers([u'name'])
        var.get(u"this").put(u'lifeCycle', (var.get(u'LifeCycle').get(var.get(u'name')) or var.get(u"this").get(u'lifeCycle')))
    PyJsHoisted_elementOwnToPhase_.func_name = u'elementOwnToPhase'
    var.put(u'elementOwnToPhase', PyJsHoisted_elementOwnToPhase_)
    @Js
    def PyJsHoisted_readString_(walker, this, arguments, var=var):
        var = Scope({u'walker':walker, u'this':this, u'arguments':arguments}, var)
        var.registers([u'walker', u'startCode', u'charCode', u'startIndex', u'literal'])
        var.put(u'startCode', var.get(u'walker').callprop(u'currentCode'))
        var.put(u'startIndex', var.get(u'walker').get(u'index'))
        pass
        class JS_CONTINUE_LABEL_77616c6b4c6f6f70(Exception): pass
        class JS_BREAK_LABEL_77616c6b4c6f6f70(Exception): pass
        try:
            while var.put(u'charCode', var.get(u'walker').callprop(u'nextCode')):
                try:
                    while 1:
                        SWITCHED = False
                        CONDITION = (var.get(u'charCode'))
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(92.0)):
                            SWITCHED = True
                            var.get(u'walker').callprop(u'go', Js(1.0))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, var.get(u'startCode')):
                            SWITCHED = True
                            var.get(u'walker').callprop(u'go', Js(1.0))
                            raise JS_BREAK_LABEL_77616c6b4c6f6f70("Breaked")
                        SWITCHED = True
                        break
                except JS_CONTINUE_LABEL_77616c6b4c6f6f70:
                    pass
        except JS_BREAK_LABEL_77616c6b4c6f6f70:
            pass
        var.put(u'literal', var.get(u'walker').callprop(u'cut', var.get(u'startIndex'), var.get(u'walker').get(u'index')))
        return Js({u'type':Js(1.0),u'value':var.get(u'Function').create((Js(u'return ')+var.get(u'literal')))()})
    PyJsHoisted_readString_.func_name = u'readString'
    var.put(u'readString', PyJsHoisted_readString_)
    @Js
    def PyJsHoisted_elementOwnCreate_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([u'sourceNode', u'isComponent', u'i', u'l', u'value', u'prop', u'key', u'props'])
        if var.get(u"this").get(u'lifeCycle').get(u'created').neg():
            var.put(u'isComponent', PyJsStrictEq(var.get(u"this").get(u'nodeType'),Js(5.0)))
            var.put(u'sourceNode', var.get(u"this").get(u'aNode').get(u'hotspot').get(u'sourceNode'))
            var.put(u'props', var.get(u"this").get(u'aNode').get(u'props'))
            if var.get(u'sourceNode'):
                var.get(u"this").put(u'el', var.get(u'sourceNode').callprop(u'cloneNode'))
                var.put(u'props', var.get(u"this").get(u'aNode').get(u'hotspot').get(u'dynamicProps'))
            else:
                var.get(u"this").put(u'el', var.get(u'createEl')(var.get(u"this").get(u'tagName')))
            for PyJsTemp in var.get(u"this").get(u'_sbindData'):
                var.put(u'key', PyJsTemp)
                if var.get(u"this").get(u'_sbindData').callprop(u'hasOwnProperty', var.get(u'key')):
                    var.get(u'getPropHandler')(var.get(u"this").get(u'tagName'), var.get(u'key')).callprop(u'prop', var.get(u"this").get(u'el'), var.get(u"this").get(u'_sbindData').get(var.get(u'key')), var.get(u'key'), var.get(u"this"))
            #for JS loop
            var.put(u'i', Js(0.0))
            var.put(u'l', var.get(u'props').get(u'length'))
            while (var.get(u'i')<var.get(u'l')):
                try:
                    var.put(u'prop', var.get(u'props').get(var.get(u'i')))
                    var.put(u'value', (var.get(u'evalExpr')(var.get(u'prop').get(u'expr'), var.get(u"this").get(u'data'), var.get(u"this")) if var.get(u'isComponent') else var.get(u'evalExpr')(var.get(u'prop').get(u'expr'), var.get(u"this").get(u'scope'), var.get(u"this").get(u'owner'))))
                    if (var.get(u'value') or var.get(u'emptyPropWhenCreate').get(var.get(u'prop').get(u'name')).neg()):
                        var.get(u'handleProp')(var.get(u"this"), var.get(u'value'), var.get(u'prop'))
                finally:
                        (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
            var.get(u"this").callprop(u'_toPhase', Js(u'created'))
    PyJsHoisted_elementOwnCreate_.func_name = u'elementOwnCreate'
    var.put(u'elementOwnCreate', PyJsHoisted_elementOwnCreate_)
    @Js
    def PyJsHoisted_genElementChildren_(element, parentEl, beforeEl, this, arguments, var=var):
        var = Scope({u'this':this, u'parentEl':parentEl, u'arguments':arguments, u'beforeEl':beforeEl, u'element':element}, var)
        var.registers([u'i', u'parentEl', u'beforeEl', u'element', u'child', u'aNodeChildren'])
        var.put(u'parentEl', (var.get(u'parentEl') or var.get(u'element').get(u'el')))
        var.put(u'aNodeChildren', var.get(u'element').get(u'aNode').get(u'children'))
        #for JS loop
        var.put(u'i', Js(0.0))
        while (var.get(u'i')<var.get(u'aNodeChildren').get(u'length')):
            try:
                var.put(u'child', var.get(u'createNode')(var.get(u'aNodeChildren').get(var.get(u'i')), var.get(u'element')))
                var.get(u'element').get(u'children').callprop(u'push', var.get(u'child'))
                var.get(u'child').callprop(u'attach', var.get(u'parentEl'), var.get(u'beforeEl'))
            finally:
                    (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
    PyJsHoisted_genElementChildren_.func_name = u'genElementChildren'
    var.put(u'genElementChildren', PyJsHoisted_genElementChildren_)
    @Js
    def PyJsHoisted_splitStr2Obj_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'source', u'result'])
        var.put(u'result', Js({}))
        @Js
        def PyJs_anonymous_3_(key, this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments, u'key':key}, var)
            var.registers([u'key'])
            var.get(u'result').put(var.get(u'key'), var.get(u'key'))
        PyJs_anonymous_3_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'source').callprop(u'split', Js(u',')), PyJs_anonymous_3_)
        return var.get(u'result')
    PyJsHoisted_splitStr2Obj_.func_name = u'splitStr2Obj'
    var.put(u'splitStr2Obj', PyJsHoisted_splitStr2Obj_)
    @Js
    def PyJsHoisted_TemplateNode_(aNode, owner, scope, parent, reverseWalker, this, arguments, var=var):
        var = Scope({u'reverseWalker':reverseWalker, u'aNode':aNode, u'arguments':arguments, u'parent':parent, u'owner':owner, u'scope':scope, u'this':this}, var)
        var.registers([u'me', u'reverseWalker', u'parent', u'aNode', u'owner', u'scope'])
        var.get(u"this").put(u'aNode', var.get(u'aNode'))
        var.get(u"this").put(u'owner', var.get(u'owner'))
        var.get(u"this").put(u'scope', var.get(u'scope'))
        var.get(u"this").put(u'parent', var.get(u'parent'))
        var.get(u"this").put(u'parentComponent', (var.get(u'parent') if PyJsStrictEq(var.get(u'parent').get(u'nodeType'),Js(5.0)) else var.get(u'parent').get(u'parentComponent')))
        var.get(u"this").put(u'id', var.get(u'guid')())
        var.get(u"this").put(u'lifeCycle', var.get(u'LifeCycle').get(u'start'))
        var.get(u"this").put(u'children', Js([]))
        if var.get(u'reverseWalker'):
            var.get(u"this").put(u'sel', var.get(u'document').callprop(u'createComment', var.get(u"this").get(u'id')))
            var.get(u'insertBefore')(var.get(u"this").get(u'sel'), var.get(u'reverseWalker').get(u'target'), var.get(u'reverseWalker').get(u'current'))
            var.put(u'me', var.get(u"this"))
            @Js
            def PyJs_anonymous_118_(aNodeChild, this, arguments, var=var):
                var = Scope({u'this':this, u'aNodeChild':aNodeChild, u'arguments':arguments}, var)
                var.registers([u'aNodeChild'])
                var.get(u'me').get(u'children').callprop(u'push', var.get(u'createReverseNode')(var.get(u'aNodeChild'), var.get(u'reverseWalker'), var.get(u'me')))
            PyJs_anonymous_118_._set_name(u'anonymous')
            var.get(u'each')(var.get(u"this").get(u'aNode').get(u'children'), PyJs_anonymous_118_)
            var.get(u"this").put(u'el', var.get(u'document').callprop(u'createComment', var.get(u"this").get(u'id')))
            var.get(u'insertBefore')(var.get(u"this").get(u'el'), var.get(u'reverseWalker').get(u'target'), var.get(u'reverseWalker').get(u'current'))
            var.get(u"this").callprop(u'_toPhase', Js(u'attached'))
    PyJsHoisted_TemplateNode_.func_name = u'TemplateNode'
    var.put(u'TemplateNode', PyJsHoisted_TemplateNode_)
    @Js
    def PyJsHoisted_nextTick_(fn, thisArg, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'fn':fn, u'thisArg':thisArg}, var)
        var.registers([u'fn', u'port', u'channel', u'thisArg'])
        if var.get(u'thisArg'):
            var.put(u'fn', var.get(u'bind')(var.get(u'fn'), var.get(u'thisArg')))
        var.get(u'nextTasks').callprop(u'push', var.get(u'fn'))
        if var.get(u'nextHandler'):
            return var.get('undefined')
        @Js
        def PyJs_anonymous_4_(this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments}, var)
            var.registers([u'i', u'tasks', u'l'])
            var.put(u'tasks', var.get(u'nextTasks').callprop(u'slice', Js(0.0)))
            var.put(u'nextTasks', Js([]))
            var.put(u'nextHandler', var.get(u"null"))
            #for JS loop
            var.put(u'i', Js(0.0))
            var.put(u'l', var.get(u'tasks').get(u'length'))
            while (var.get(u'i')<var.get(u'l')):
                try:
                    var.get(u'tasks').callprop(var.get(u'i'))
                finally:
                        (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        PyJs_anonymous_4_._set_name(u'anonymous')
        var.put(u'nextHandler', PyJs_anonymous_4_)
        if PyJsStrictEq(var.get(u'setImmediate',throw=False).typeof(),Js(u'function')):
            var.get(u'setImmediate')(var.get(u'nextHandler'))
        else:
            if PyJsStrictEq(var.get(u'MessageChannel',throw=False).typeof(),Js(u'function')):
                var.put(u'channel', var.get(u'MessageChannel').create())
                var.put(u'port', var.get(u'channel').get(u'port2'))
                var.get(u'channel').get(u'port1').put(u'onmessage', var.get(u'nextHandler'))
                var.get(u'port').callprop(u'postMessage', Js(1.0))
            else:
                if var.get(u'isNativePromise'):
                    var.get(u'Promise').callprop(u'resolve').callprop(u'then', var.get(u'nextHandler'))
                else:
                    var.get(u'setTimeout')(var.get(u'nextHandler'), Js(0.0))
    PyJsHoisted_nextTick_.func_name = u'nextTick'
    var.put(u'nextTick', PyJsHoisted_nextTick_)
    @Js
    def PyJsHoisted_componentCompilePreCode_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([u'escapeHTML', u'boolAttrFilter', u'HTML_ENTITY', u'stringifier', u'extend', u'contains', u'htmlFilterReplacer', u'attrFilter', u'stringLiteralize', u'each', u'$version', u'DEFAULT_FILTERS'])
        @Js
        def PyJsHoisted_escapeHTML_(source, this, arguments, var=var):
            var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
            var.registers([u'source'])
            if (var.get(u'source')==var.get(u"null")):
                return Js(u'')
            return var.get(u'String')(var.get(u'source')).callprop(u'replace', JsRegExp(u'/[&<>"\']/g'), var.get(u'htmlFilterReplacer'))
        PyJsHoisted_escapeHTML_.func_name = u'escapeHTML'
        var.put(u'escapeHTML', PyJsHoisted_escapeHTML_)
        @Js
        def PyJsHoisted_boolAttrFilter_(name, value, this, arguments, var=var):
            var = Scope({u'this':this, u'name':name, u'value':value, u'arguments':arguments}, var)
            var.registers([u'name', u'value'])
            if ((var.get(u'value') and PyJsStrictNeq(var.get(u'value'),Js(u'false'))) and PyJsStrictNeq(var.get(u'value'),Js(u'0'))):
                return (Js(u' ')+var.get(u'name'))
            return Js(u'')
        PyJsHoisted_boolAttrFilter_.func_name = u'boolAttrFilter'
        var.put(u'boolAttrFilter', PyJsHoisted_boolAttrFilter_)
        @Js
        def PyJsHoisted_extend_(target, source, this, arguments, var=var):
            var = Scope({u'this':this, u'source':source, u'target':target, u'arguments':arguments}, var)
            var.registers([u'source', u'target'])
            if var.get(u'source'):
                @Js
                def PyJs_anonymous_236_(key, this, arguments, var=var):
                    var = Scope({u'this':this, u'arguments':arguments, u'key':key}, var)
                    var.registers([u'key', u'value'])
                    var.put(u'value', var.get(u'source').get(var.get(u'key')))
                    if PyJsStrictNeq(var.get(u'value',throw=False).typeof(),Js(u'undefined')):
                        var.get(u'target').put(var.get(u'key'), var.get(u'value'))
                PyJs_anonymous_236_._set_name(u'anonymous')
                var.get(u'Object').callprop(u'keys', var.get(u'source')).callprop(u'forEach', PyJs_anonymous_236_)
            return var.get(u'target')
        PyJsHoisted_extend_.func_name = u'extend'
        var.put(u'extend', PyJsHoisted_extend_)
        @Js
        def PyJsHoisted_contains_(array, value, this, arguments, var=var):
            var = Scope({u'this':this, u'array':array, u'arguments':arguments, u'value':value}, var)
            var.registers([u'array', u'result', u'value'])
            pass
            @Js
            def PyJs_anonymous_237_(item, this, arguments, var=var):
                var = Scope({u'this':this, u'item':item, u'arguments':arguments}, var)
                var.registers([u'item'])
                var.put(u'result', PyJsStrictEq(var.get(u'item'),var.get(u'value')))
                return var.get(u'result').neg()
            PyJs_anonymous_237_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'array'), PyJs_anonymous_237_)
            return var.get(u'result')
        PyJsHoisted_contains_.func_name = u'contains'
        var.put(u'contains', PyJsHoisted_contains_)
        @Js
        def PyJsHoisted_htmlFilterReplacer_(c, this, arguments, var=var):
            var = Scope({u'this':this, u'c':c, u'arguments':arguments}, var)
            var.registers([u'c'])
            return var.get(u'HTML_ENTITY').get(var.get(u'c'))
        PyJsHoisted_htmlFilterReplacer_.func_name = u'htmlFilterReplacer'
        var.put(u'htmlFilterReplacer', PyJsHoisted_htmlFilterReplacer_)
        @Js
        def PyJsHoisted_attrFilter_(name, value, this, arguments, var=var):
            var = Scope({u'this':this, u'name':name, u'value':value, u'arguments':arguments}, var)
            var.registers([u'name', u'value'])
            if var.get(u'value'):
                return ((((Js(u' ')+var.get(u'name'))+Js(u'="'))+var.get(u'value'))+Js(u'"'))
            return Js(u'')
        PyJsHoisted_attrFilter_.func_name = u'attrFilter'
        var.put(u'attrFilter', PyJsHoisted_attrFilter_)
        @Js
        def PyJsHoisted_stringLiteralize_(source, this, arguments, var=var):
            var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
            var.registers([u'source'])
            return ((Js(u'"')+var.get(u'source'))+Js(u'"'))
        PyJsHoisted_stringLiteralize_.func_name = u'stringLiteralize'
        var.put(u'stringLiteralize', PyJsHoisted_stringLiteralize_)
        @Js
        def PyJsHoisted_each_(array, iterator, this, arguments, var=var):
            var = Scope({u'this':this, u'array':array, u'arguments':arguments, u'iterator':iterator}, var)
            var.registers([u'i', u'array', u'l', u'iterator'])
            if (var.get(u'array') and (var.get(u'array').get(u'length')>Js(0.0))):
                #for JS loop
                var.put(u'i', Js(0.0))
                var.put(u'l', var.get(u'array').get(u'length'))
                while (var.get(u'i')<var.get(u'l')):
                    try:
                        if PyJsStrictEq(var.get(u'iterator')(var.get(u'array').get(var.get(u'i')), var.get(u'i')),Js(False)):
                            break
                    finally:
                            (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        PyJsHoisted_each_.func_name = u'each'
        var.put(u'each', PyJsHoisted_each_)
        var.put(u'$version', Js(u'3.7.0'))
        pass
        pass
        pass
        var.put(u'HTML_ENTITY', Js({u'&':Js(u'&amp;'),u'<':Js(u'&lt;'),u'>':Js(u'&gt;'),u'"':Js(u'&quot;'),u"'":Js(u'&#39;')}))
        pass
        pass
        @Js
        def PyJs_anonymous_238_(source, this, arguments, var=var):
            var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
            var.registers([u'source'])
            if var.get(u'source').instanceof(var.get(u'Array')):
                return var.get(u'source').callprop(u'join', Js(u' '))
            return var.get(u'source')
        PyJs_anonymous_238_._set_name(u'anonymous')
        @Js
        def PyJs_anonymous_239_(source, this, arguments, var=var):
            var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
            var.registers([u'source', u'result'])
            if PyJsStrictEq(var.get(u'source',throw=False).typeof(),Js(u'object')):
                var.put(u'result', Js(u''))
                if var.get(u'source'):
                    @Js
                    def PyJs_anonymous_240_(key, this, arguments, var=var):
                        var = Scope({u'this':this, u'arguments':arguments, u'key':key}, var)
                        var.registers([u'key'])
                        var.put(u'result', (((var.get(u'key')+Js(u':'))+var.get(u'source').get(var.get(u'key')))+Js(u';')), u'+')
                    PyJs_anonymous_240_._set_name(u'anonymous')
                    var.get(u'Object').callprop(u'keys', var.get(u'source')).callprop(u'forEach', PyJs_anonymous_240_)
                return var.get(u'result')
            return (var.get(u'source') or Js(u''))
        PyJs_anonymous_239_._set_name(u'anonymous')
        @Js
        def PyJs_anonymous_241_(source, sep, this, arguments, var=var):
            var = Scope({u'this':this, u'source':source, u'arguments':arguments, u'sep':sep}, var)
            var.registers([u'source', u'sep'])
            return ((var.get(u'sep')+var.get(u'source')) if var.get(u'source') else Js(u''))
        PyJs_anonymous_241_._set_name(u'anonymous')
        var.put(u'DEFAULT_FILTERS', Js({u'url':var.get(u'encodeURIComponent'),u'_class':PyJs_anonymous_238_,u'_style':PyJs_anonymous_239_,u'_sep':PyJs_anonymous_241_}))
        pass
        pass
        pass
        @Js
        def PyJs_anonymous_242_(source, this, arguments, var=var):
            var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
            var.registers([u'source', u'result', u'prefixComma'])
            pass
            var.put(u'result', Js(u'{'))
            @Js
            def PyJs_anonymous_243_(key, this, arguments, var=var):
                var = Scope({u'this':this, u'arguments':arguments, u'key':key}, var)
                var.registers([u'key'])
                if PyJsStrictEq(var.get(u'source').get(var.get(u'key')).typeof(),Js(u'undefined')):
                    return var.get('undefined')
                if var.get(u'prefixComma'):
                    var.put(u'result', Js(u','), u'+')
                var.put(u'prefixComma', Js(1.0))
                var.put(u'result', ((var.get(u'stringLiteralize')(var.get(u'key'))+Js(u':'))+var.get(u'stringifier').callprop(u'any', var.get(u'source').get(var.get(u'key')))), u'+')
            PyJs_anonymous_243_._set_name(u'anonymous')
            var.get(u'Object').callprop(u'keys', var.get(u'source')).callprop(u'forEach', PyJs_anonymous_243_)
            return (var.get(u'result')+Js(u'}'))
        PyJs_anonymous_242_._set_name(u'anonymous')
        @Js
        def PyJs_anonymous_244_(source, this, arguments, var=var):
            var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
            var.registers([u'source', u'result', u'prefixComma'])
            pass
            var.put(u'result', Js(u'['))
            @Js
            def PyJs_anonymous_245_(value, this, arguments, var=var):
                var = Scope({u'this':this, u'arguments':arguments, u'value':value}, var)
                var.registers([u'value'])
                if var.get(u'prefixComma'):
                    var.put(u'result', Js(u','), u'+')
                var.put(u'prefixComma', Js(1.0))
                var.put(u'result', var.get(u'stringifier').callprop(u'any', var.get(u'value')), u'+')
            PyJs_anonymous_245_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'source'), PyJs_anonymous_245_)
            return (var.get(u'result')+Js(u']'))
        PyJs_anonymous_244_._set_name(u'anonymous')
        @Js
        def PyJs_anonymous_246_(source, this, arguments, var=var):
            var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
            var.registers([u'source'])
            return var.get(u'stringLiteralize')(var.get(u'source'))
        PyJs_anonymous_246_._set_name(u'anonymous')
        @Js
        def PyJs_anonymous_247_(source, this, arguments, var=var):
            var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
            var.registers([u'source'])
            return ((Js(u'new Date(')+var.get(u'source').callprop(u'getTime'))+Js(u')'))
        PyJs_anonymous_247_._set_name(u'anonymous')
        @Js
        def PyJs_anonymous_248_(source, this, arguments, var=var):
            var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
            var.registers([u'source'])
            while 1:
                SWITCHED = False
                CONDITION = (var.get(u'source',throw=False).typeof())
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'string')):
                    SWITCHED = True
                    return var.get(u'stringifier').callprop(u'str', var.get(u'source'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'number')):
                    SWITCHED = True
                    return (Js(u'')+var.get(u'source'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'boolean')):
                    SWITCHED = True
                    return (Js(u'true') if var.get(u'source') else Js(u'false'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'object')):
                    SWITCHED = True
                    if var.get(u'source').neg():
                        return var.get(u"null")
                    if var.get(u'source').instanceof(var.get(u'Array')):
                        return var.get(u'stringifier').callprop(u'arr', var.get(u'source'))
                    if var.get(u'source').instanceof(var.get(u'Date')):
                        return var.get(u'stringifier').callprop(u'date', var.get(u'source'))
                    return var.get(u'stringifier').callprop(u'obj', var.get(u'source'))
                SWITCHED = True
                break
            PyJsTempException = JsToPyException(var.get(u'Error').create((Js(u'Cannot Stringify:')+var.get(u'source'))))
            raise PyJsTempException
        PyJs_anonymous_248_._set_name(u'anonymous')
        var.put(u'stringifier', Js({u'obj':PyJs_anonymous_242_,u'arr':PyJs_anonymous_244_,u'str':PyJs_anonymous_246_,u'date':PyJs_anonymous_247_,u'any':PyJs_anonymous_248_}))
    PyJsHoisted_componentCompilePreCode_.func_name = u'componentCompilePreCode'
    var.put(u'componentCompilePreCode', PyJsHoisted_componentCompilePreCode_)
    @Js
    def PyJsHoisted_TextNode_(aNode, owner, scope, parent, reverseWalker, this, arguments, var=var):
        var = Scope({u'reverseWalker':reverseWalker, u'aNode':aNode, u'arguments':arguments, u'parent':parent, u'owner':owner, u'scope':scope, u'this':this}, var)
        var.registers([u'reverseWalker', u'currentNode', u'parent', u'aNode', u'owner', u'scope'])
        var.get(u"this").put(u'aNode', var.get(u'aNode'))
        var.get(u"this").put(u'owner', var.get(u'owner'))
        var.get(u"this").put(u'scope', var.get(u'scope'))
        var.get(u"this").put(u'parent', var.get(u'parent'))
        if var.get(u'reverseWalker'):
            var.put(u'currentNode', var.get(u'reverseWalker').get(u'current'))
            if var.get(u'currentNode'):
                while 1:
                    SWITCHED = False
                    CONDITION = (var.get(u'currentNode').get(u'nodeType'))
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(8.0)):
                        SWITCHED = True
                        if PyJsStrictEq(var.get(u'currentNode').get(u'data'),Js(u's-text')):
                            var.get(u"this").put(u'sel', var.get(u'currentNode'))
                            var.get(u'currentNode').put(u'data', var.get(u"this").get(u'id'))
                            var.get(u'reverseWalker').callprop(u'goNext')
                            while Js(1.0):
                                var.put(u'currentNode', var.get(u'reverseWalker').get(u'current'))
                                if var.get(u'currentNode').neg():
                                    PyJsTempException = JsToPyException(var.get(u'Error').create((Js(u'[SAN REVERSE ERROR] Text end flag not found. \nPaths: ')+var.get(u'getNodePath')(var.get(u"this")).callprop(u'join', Js(u' > ')))))
                                    raise PyJsTempException
                                if var.get(u'isEndStump')(var.get(u'currentNode'), Js(u'text')):
                                    var.get(u"this").put(u'el', var.get(u'currentNode'))
                                    var.get(u'reverseWalker').callprop(u'goNext')
                                    var.get(u'currentNode').put(u'data', var.get(u"this").get(u'id'))
                                    break
                                var.get(u'reverseWalker').callprop(u'goNext')
                        break
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(3.0)):
                        SWITCHED = True
                        var.get(u'reverseWalker').callprop(u'goNext')
                        if var.get(u"this").get(u'aNode').get(u'textExpr').get(u'original').neg():
                            var.get(u"this").put(u'el', var.get(u'currentNode'))
                        break
                    SWITCHED = True
                    break
            else:
                var.get(u"this").put(u'el', var.get(u'document').callprop(u'createTextNode', Js(u'')))
                var.get(u'insertBefore')(var.get(u"this").get(u'el'), var.get(u'reverseWalker').get(u'target'), var.get(u'reverseWalker').get(u'current'))
    PyJsHoisted_TextNode_.func_name = u'TextNode'
    var.put(u'TextNode', PyJsHoisted_TextNode_)
    @Js
    def PyJsHoisted_ForItemData_(forElement, item, index, this, arguments, var=var):
        var = Scope({u'this':this, u'forElement':forElement, u'index':index, u'arguments':arguments, u'item':item}, var)
        var.registers([u'forElement', u'index', u'item'])
        var.get(u"this").put(u'id', var.get(u'guid')())
        var.get(u"this").put(u'parent', var.get(u'forElement').get(u'scope'))
        var.get(u"this").put(u'raw', Js({}))
        var.get(u"this").put(u'listeners', Js([]))
        var.get(u"this").put(u'directive', var.get(u'forElement').get(u'aNode').get(u'directives').get(u'for'))
        var.get(u"this").get(u'raw').put(var.get(u"this").get(u'directive').get(u'item').get(u'raw'), var.get(u'item'))
        var.get(u"this").get(u'raw').put(var.get(u"this").get(u'directive').get(u'index').get(u'raw'), var.get(u'index'))
    PyJsHoisted_ForItemData_.func_name = u'ForItemData'
    var.put(u'ForItemData', PyJsHoisted_ForItemData_)
    @Js
    def PyJsHoisted_readLogicalANDExpr_(walker, this, arguments, var=var):
        var = Scope({u'walker':walker, u'this':this, u'arguments':arguments}, var)
        var.registers([u'walker', u'expr'])
        var.put(u'expr', var.get(u'readEqualityExpr')(var.get(u'walker')))
        var.get(u'walker').callprop(u'goUntil')
        if PyJsStrictEq(var.get(u'walker').callprop(u'currentCode'),Js(38.0)):
            if PyJsStrictEq(var.get(u'walker').callprop(u'nextCode'),Js(38.0)):
                var.get(u'walker').callprop(u'go', Js(1.0))
                return Js({u'type':Js(8.0),u'operator':Js(76.0),u'segs':Js([var.get(u'expr'), var.get(u'readLogicalANDExpr')(var.get(u'walker'))])})
            var.get(u'walker').callprop(u'go', (-Js(1.0)))
        return var.get(u'expr')
    PyJsHoisted_readLogicalANDExpr_.func_name = u'readLogicalANDExpr'
    var.put(u'readLogicalANDExpr', PyJsHoisted_readLogicalANDExpr_)
    @Js
    def PyJsHoisted_evalArgs_(args, data, owner, this, arguments, var=var):
        var = Scope({u'owner':owner, u'this':this, u'args':args, u'data':data, u'arguments':arguments}, var)
        var.registers([u'i', u'owner', u'args', u'data', u'result'])
        var.put(u'result', Js([]))
        #for JS loop
        var.put(u'i', Js(0.0))
        while (var.get(u'i')<var.get(u'args').get(u'length')):
            try:
                var.get(u'result').callprop(u'push', var.get(u'evalExpr')(var.get(u'args').get(var.get(u'i')), var.get(u'data'), var.get(u'owner')))
            finally:
                    (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        return var.get(u'result')
    PyJsHoisted_evalArgs_.func_name = u'evalArgs'
    var.put(u'evalArgs', PyJsHoisted_evalArgs_)
    @Js
    def PyJsHoisted_elementOwnAttached_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([u'isComponent', u'i', u'eventBind', u'transition', u'xProps', u'l', u'xProp', u'owner', u'data', u'events'])
        var.get(u"this").callprop(u'_toPhase', Js(u'created'))
        var.put(u'isComponent', PyJsStrictEq(var.get(u"this").get(u'nodeType'),Js(5.0)))
        var.put(u'data', (var.get(u"this").get(u'data') if var.get(u'isComponent') else var.get(u"this").get(u'scope')))
        var.put(u'xProps', var.get(u"this").get(u'aNode').get(u'hotspot').get(u'xProps'))
        #for JS loop
        var.put(u'i', Js(0.0))
        var.put(u'l', var.get(u'xProps').get(u'length'))
        while (var.get(u'i')<var.get(u'l')):
            try:
                var.put(u'xProp', var.get(u'xProps').get(var.get(u'i')))
                while 1:
                    SWITCHED = False
                    CONDITION = (var.get(u'xProp').get(u'name'))
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(u'value')):
                        SWITCHED = True
                        while 1:
                            SWITCHED = False
                            CONDITION = (var.get(u"this").get(u'tagName'))
                            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'input')):
                                SWITCHED = True
                                pass
                            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'textarea')):
                                SWITCHED = True
                                if (var.get(u'isBrowser') and var.get(u'window').get(u'CompositionEvent')):
                                    var.get(u"this").callprop(u'_onEl', Js(u'change'), var.get(u'inputOnCompositionEnd'))
                                    var.get(u"this").callprop(u'_onEl', Js(u'compositionstart'), var.get(u'inputOnCompositionStart'))
                                    var.get(u"this").callprop(u'_onEl', Js(u'compositionend'), var.get(u'inputOnCompositionEnd'))
                                var.get(u"this").callprop(u'_onEl', (Js(u'input') if var.get(u"this").get(u'el').contains(Js(u'oninput')) else Js(u'propertychange')), var.get(u'inputXPropOutputer')(var.get(u"this"), var.get(u'xProp'), var.get(u'data')))
                                break
                            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'select')):
                                SWITCHED = True
                                var.get(u"this").callprop(u'_onEl', Js(u'change'), var.get(u'bind')(var.get(u'xPropOutputer'), var.get(u"this"), var.get(u'xProp'), var.get(u'data')))
                                break
                            SWITCHED = True
                            break
                        break
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(u'checked')):
                        SWITCHED = True
                        while 1:
                            SWITCHED = False
                            CONDITION = (var.get(u"this").get(u'tagName'))
                            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'input')):
                                SWITCHED = True
                                while 1:
                                    SWITCHED = False
                                    CONDITION = (var.get(u"this").get(u'el').get(u'type'))
                                    if SWITCHED or PyJsStrictEq(CONDITION, Js(u'checkbox')):
                                        SWITCHED = True
                                        pass
                                    if SWITCHED or PyJsStrictEq(CONDITION, Js(u'radio')):
                                        SWITCHED = True
                                        var.get(u"this").callprop(u'_onEl', Js(u'click'), var.get(u'bind')(var.get(u'xPropOutputer'), var.get(u"this"), var.get(u'xProp'), var.get(u'data')))
                                    SWITCHED = True
                                    break
                            SWITCHED = True
                            break
                        break
                    SWITCHED = True
                    break
            finally:
                    (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        var.put(u'events', (var.get(u"this").get(u'aNode').get(u'events').callprop(u'concat', var.get(u"this").get(u'nativeEvents')) if var.get(u'isComponent') else var.get(u"this").get(u'aNode').get(u'events')))
        #for JS loop
        var.put(u'i', Js(0.0))
        var.put(u'l', var.get(u'events').get(u'length'))
        while (var.get(u'i')<var.get(u'l')):
            try:
                var.put(u'eventBind', var.get(u'events').get(var.get(u'i')))
                var.put(u'owner', (var.get(u"this") if var.get(u'isComponent') else var.get(u"this").get(u'owner')))
                if var.get(u'eventBind').get(u'modifier').get(u'native'):
                    var.put(u'owner', var.get(u'owner').get(u'owner'))
                    var.put(u'data', (var.get(u"this").get(u'scope') or var.get(u'owner').get(u'data')))
                var.get(u'warnEventListenMethod')(var.get(u'eventBind'), var.get(u'owner'))
                var.get(u"this").callprop(u'_onEl', var.get(u'eventBind').get(u'name'), var.get(u'bind')(var.get(u'eventDeclarationListener'), var.get(u'owner'), var.get(u'eventBind'), Js(0.0), var.get(u'data')), var.get(u'eventBind').get(u'modifier').get(u'capture'))
            finally:
                    (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        var.get(u"this").callprop(u'_toPhase', Js(u'attached'))
        if var.get(u"this").get(u'_isInitFromEl'):
            var.get(u"this").put(u'_isInitFromEl', Js(False))
        else:
            var.put(u'transition', var.get(u'elementGetTransition')(var.get(u"this")))
            if (var.get(u'transition') and var.get(u'transition').get(u'enter')):
                var.get(u'transition').callprop(u'enter', var.get(u"this").get(u'el'), var.get(u'empty'))
    PyJsHoisted_elementOwnAttached_.func_name = u'elementOwnAttached'
    var.put(u'elementOwnAttached', PyJsHoisted_elementOwnAttached_)
    @Js
    def PyJsHoisted_createDataTypesChecker_(dataTypes, componentName, this, arguments, var=var):
        var = Scope({u'this':this, u'componentName':componentName, u'dataTypes':dataTypes, u'arguments':arguments}, var)
        var.registers([u'componentName', u'dataTypes'])
        @Js
        def PyJs_anonymous_17_(data, this, arguments, var=var):
            var = Scope({u'this':this, u'data':data, u'arguments':arguments}, var)
            var.registers([u'dataTypeChecker', u'data', u'dataTypeName'])
            for PyJsTemp in var.get(u'dataTypes'):
                var.put(u'dataTypeName', PyJsTemp)
                if var.get(u'dataTypes').callprop(u'hasOwnProperty', var.get(u'dataTypeName')):
                    var.put(u'dataTypeChecker', var.get(u'dataTypes').get(var.get(u'dataTypeName')))
                    if PyJsStrictNeq(var.get(u'dataTypeChecker',throw=False).typeof(),Js(u'function')):
                        PyJsTempException = JsToPyException(var.get(u'Error').create((((((Js(u'[SAN ERROR] ')+var.get(u'componentName'))+Js(u':'))+var.get(u'dataTypeName'))+Js(u' is invalid; '))+Js(u'it must be a function, usually from san.DataTypes'))))
                        raise PyJsTempException
                    var.get(u'dataTypeChecker')(var.get(u'data'), var.get(u'dataTypeName'), var.get(u'componentName'), var.get(u'dataTypeName'))
        PyJs_anonymous_17_._set_name(u'anonymous')
        return PyJs_anonymous_17_
    PyJsHoisted_createDataTypesChecker_.func_name = u'createDataTypesChecker'
    var.put(u'createDataTypesChecker', PyJsHoisted_createDataTypesChecker_)
    @Js
    def PyJsHoisted_readIdent_(walker, this, arguments, var=var):
        var = Scope({u'walker':walker, u'this':this, u'arguments':arguments}, var)
        var.registers([u'walker', u'match'])
        var.put(u'match', var.get(u'walker').callprop(u'match', JsRegExp(u'/\\s*([\\$0-9a-z_]+)/ig'), Js(1.0)))
        if var.get(u'match').neg():
            PyJsTempException = JsToPyException(var.get(u'Error').create((Js(u'[SAN FATAL] expect an ident: ')+var.get(u'walker').callprop(u'cut', var.get(u'walker').get(u'index')))))
            raise PyJsTempException
        return var.get(u'match').get(u'1')
    PyJsHoisted_readIdent_.func_name = u'readIdent'
    var.put(u'readIdent', PyJsHoisted_readIdent_)
    @Js
    def PyJsHoisted_inputOnCompositionStart_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        var.get(u"this").put(u'composing', Js(1.0))
    PyJsHoisted_inputOnCompositionStart_.func_name = u'inputOnCompositionStart'
    var.put(u'inputOnCompositionStart', PyJsHoisted_inputOnCompositionStart_)
    @Js
    def PyJsHoisted_integrateAttr_(aNode, name, value, options, this, arguments, var=var):
        var = Scope({u'aNode':aNode, u'name':name, u'this':this, u'options':options, u'value':value, u'arguments':arguments}, var)
        var.registers([u'realName', u'colonIndex', u'value', u'options', u'prefix', u'prefixIndex', u'aNode', u'modifier', u'event', u'name'])
        var.put(u'prefixIndex', var.get(u'name').callprop(u'indexOf', Js(u'-')))
        pass
        pass
        if (var.get(u'prefixIndex')>Js(0.0)):
            var.put(u'prefix', var.get(u'name').callprop(u'slice', Js(0.0), var.get(u'prefixIndex')))
            var.put(u'realName', var.get(u'name').callprop(u'slice', (var.get(u'prefixIndex')+Js(1.0))))
        while 1:
            SWITCHED = False
            CONDITION = (var.get(u'prefix'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'on')):
                SWITCHED = True
                var.put(u'event', Js({u'name':var.get(u'realName'),u'modifier':Js({})}))
                var.get(u'aNode').get(u'events').callprop(u'push', var.get(u'event'))
                pass
                while (var.put(u'colonIndex', var.get(u'value').callprop(u'indexOf', Js(u':')))>Js(0.0)):
                    var.put(u'modifier', var.get(u'value').callprop(u'slice', Js(0.0), var.get(u'colonIndex')))
                    if JsRegExp(u'/^[a-z]+$/i').callprop(u'test', var.get(u'modifier')).neg():
                        break
                    var.get(u'event').get(u'modifier').put(var.get(u'modifier'), Js(True))
                    var.put(u'value', var.get(u'value').callprop(u'slice', (var.get(u'colonIndex')+Js(1.0))))
                var.get(u'event').put(u'expr', var.get(u'parseCall')(var.get(u'value'), Js([var.get(u'createAccessor')(Js([Js({u'type':Js(1.0),u'value':Js(u'$event')})]))])))
                break
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'san')):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u's')):
                SWITCHED = True
                var.get(u'parseDirective')(var.get(u'aNode'), var.get(u'realName'), var.get(u'value'), var.get(u'options'))
                break
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'prop')):
                SWITCHED = True
                var.get(u'integrateProp')(var.get(u'aNode'), var.get(u'realName'), var.get(u'value'), var.get(u'options'))
                break
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'var')):
                SWITCHED = True
                if var.get(u'aNode').get(u'vars').neg():
                    var.get(u'aNode').put(u'vars', Js([]))
                var.put(u'realName', var.get(u'kebab2camel')(var.get(u'realName')))
                var.get(u'aNode').get(u'vars').callprop(u'push', Js({u'name':var.get(u'realName'),u'expr':var.get(u'parseExpr')(var.get(u'value').callprop(u'replace', JsRegExp(u'/(^\\{\\{|\\}\\}$)/g'), Js(u'')))}))
                break
            if True:
                SWITCHED = True
                var.get(u'integrateProp')(var.get(u'aNode'), var.get(u'name'), var.get(u'value'), var.get(u'options'))
            SWITCHED = True
            break
    PyJsHoisted_integrateAttr_.func_name = u'integrateAttr'
    var.put(u'integrateAttr', PyJsHoisted_integrateAttr_)
    @Js
    def PyJsHoisted_eventDeclarationListener_(eventBind, isComponentEvent, data, e, this, arguments, var=var):
        var = Scope({u'e':e, u'arguments':arguments, u'isComponentEvent':isComponentEvent, u'this':this, u'eventBind':eventBind, u'data':data}, var)
        var.registers([u'e', u'eventBind', u'isComponentEvent', u'scope', u'data', u'method'])
        var.put(u'method', var.get(u'findMethod')(var.get(u"this"), var.get(u'eventBind').get(u'expr').get(u'name'), var.get(u'data')))
        if PyJsStrictEq(var.get(u'method',throw=False).typeof(),Js(u'function')):
            var.put(u'scope', var.get(u'Data').create(Js({u'$event':(var.get(u'e') if var.get(u'isComponentEvent') else (var.get(u'e') or var.get(u'window').get(u'event')))}), var.get(u'data')))
            var.get(u'method').callprop(u'apply', var.get(u"this"), var.get(u'evalArgs')(var.get(u'eventBind').get(u'expr').get(u'args'), var.get(u'scope'), var.get(u"this")))
    PyJsHoisted_eventDeclarationListener_.func_name = u'eventDeclarationListener'
    var.put(u'eventDeclarationListener', PyJsHoisted_eventDeclarationListener_)
    @Js
    def PyJsHoisted_warnSetHTML_(el, this, arguments, var=var):
        var = Scope({u'this':this, u'el':el, u'arguments':arguments}, var)
        var.registers([u'el'])
        if ((PyJsStrictNeq(var.get(u'window',throw=False).typeof(),Js(u'undefined')) and PyJsStrictNeq(var.get(u'navigator',throw=False).typeof(),Js(u'undefined'))) and var.get(u'window').get(u'document')).neg():
            return var.get('undefined')
        if var.get(u'noSetHTML')(var.get(u'el')):
            var.get(u'warn')(((Js(u'set html for element "')+var.get(u'el').get(u'tagName'))+Js(u'" may cause an error in old IE')))
    PyJsHoisted_warnSetHTML_.func_name = u'warnSetHTML'
    var.put(u'warnSetHTML', PyJsHoisted_warnSetHTML_)
    @Js
    def PyJsHoisted_each_(array, iterator, this, arguments, var=var):
        var = Scope({u'this':this, u'array':array, u'arguments':arguments, u'iterator':iterator}, var)
        var.registers([u'i', u'array', u'l', u'iterator'])
        if (var.get(u'array') and (var.get(u'array').get(u'length')>Js(0.0))):
            #for JS loop
            var.put(u'i', Js(0.0))
            var.put(u'l', var.get(u'array').get(u'length'))
            while (var.get(u'i')<var.get(u'l')):
                try:
                    if PyJsStrictEq(var.get(u'iterator')(var.get(u'array').get(var.get(u'i')), var.get(u'i')),Js(False)):
                        break
                finally:
                        (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
    PyJsHoisted_each_.func_name = u'each'
    var.put(u'each', PyJsHoisted_each_)
    @Js
    def PyJsHoisted_unionKeys_(obj1, obj2, this, arguments, var=var):
        var = Scope({u'obj1':obj1, u'this':this, u'obj2':obj2, u'arguments':arguments}, var)
        var.registers([u'obj1', u'obj2', u'result', u'key'])
        var.put(u'result', Js([]))
        for PyJsTemp in var.get(u'obj1'):
            var.put(u'key', PyJsTemp)
            if var.get(u'obj1').callprop(u'hasOwnProperty', var.get(u'key')):
                var.get(u'result').callprop(u'push', var.get(u'key'))
        for PyJsTemp in var.get(u'obj2'):
            var.put(u'key', PyJsTemp)
            if var.get(u'obj2').callprop(u'hasOwnProperty', var.get(u'key')):
                (var.get(u'obj1').get(var.get(u'key')).neg() and var.get(u'result').callprop(u'push', var.get(u'key')))
        return var.get(u'result')
    PyJsHoisted_unionKeys_.func_name = u'unionKeys'
    var.put(u'unionKeys', PyJsHoisted_unionKeys_)
    @Js
    def PyJsHoisted_DOMChildrenWalker_(el, this, arguments, var=var):
        var = Scope({u'this':this, u'el':el, u'arguments':arguments}, var)
        var.registers([u'el', u'next', u'child'])
        var.get(u"this").put(u'raw', Js([]))
        var.get(u"this").put(u'index', Js(0.0))
        var.get(u"this").put(u'target', var.get(u'el'))
        var.put(u'child', var.get(u'el').get(u'firstChild'))
        pass
        while var.get(u'child'):
            var.put(u'next', var.get(u'child').get(u'nextSibling'))
            while 1:
                SWITCHED = False
                CONDITION = (var.get(u'child').get(u'nodeType'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(3.0)):
                    SWITCHED = True
                    if JsRegExp(u'/^\\s*$/').callprop(u'test', (var.get(u'child').get(u'data') or var.get(u'child').get(u'textContent'))):
                        var.get(u'removeEl')(var.get(u'child'))
                    else:
                        var.get(u"this").get(u'raw').callprop(u'push', var.get(u'child'))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(1.0)):
                    SWITCHED = True
                    pass
                if SWITCHED or PyJsStrictEq(CONDITION, Js(8.0)):
                    SWITCHED = True
                    var.get(u"this").get(u'raw').callprop(u'push', var.get(u'child'))
                SWITCHED = True
                break
            var.put(u'child', var.get(u'next'))
        var.get(u"this").put(u'current', var.get(u"this").get(u'raw').get(var.get(u"this").get(u'index')))
        var.get(u"this").put(u'next', var.get(u"this").get(u'raw').get((var.get(u"this").get(u'index')+Js(1.0))))
    PyJsHoisted_DOMChildrenWalker_.func_name = u'DOMChildrenWalker'
    var.put(u'DOMChildrenWalker', PyJsHoisted_DOMChildrenWalker_)
    @Js
    def PyJsHoisted_compileComponent_(ComponentClass, this, arguments, var=var):
        var = Scope({u'this':this, u'ComponentClass':ComponentClass, u'arguments':arguments}, var)
        var.registers([u'extra', u'components', u'proto', u'tpl', u'firstChild', u'prop', u'len', u'componentPropExtra', u'aNode', u'componentClass', u'key', u'ComponentClass'])
        var.put(u'proto', var.get(u'ComponentClass').get(u'prototype'))
        if var.get(u'proto').callprop(u'hasOwnProperty', Js(u'_cmptReady')).neg():
            var.get(u'proto').put(u'components', ((var.get(u'ComponentClass').get(u'components') or var.get(u'proto').get(u'components')) or Js({})))
            var.put(u'components', var.get(u'proto').get(u'components'))
            for PyJsTemp in var.get(u'components'):
                var.put(u'key', PyJsTemp)
                var.put(u'componentClass', var.get(u'components').get(var.get(u'key')))
                if (PyJsStrictEq(var.get(u'componentClass',throw=False).typeof(),Js(u'object')) and var.get(u'componentClass').instanceof(var.get(u'ComponentLoader')).neg()):
                    var.get(u'components').put(var.get(u'key'), var.get(u'defineComponent')(var.get(u'componentClass')))
                else:
                    if PyJsStrictEq(var.get(u'componentClass'),Js(u'self')):
                        var.get(u'components').put(var.get(u'key'), var.get(u'ComponentClass'))
            var.get(u'proto').put(u'_cmptReady', Js(1.0))
        if var.get(u'proto').callprop(u'hasOwnProperty', Js(u'aNode')).neg():
            var.get(u'proto').put(u'aNode', var.get(u'createANode')())
            var.put(u'tpl', (var.get(u'ComponentClass').get(u'template') or var.get(u'proto').get(u'template')))
            if var.get(u'tpl'):
                var.put(u'aNode', var.get(u'parseTemplate')(var.get(u'tpl'), Js({u'trimWhitespace':(var.get(u'proto').get(u'trimWhitespace') or var.get(u'ComponentClass').get(u'trimWhitespace')),u'delimiters':(var.get(u'proto').get(u'delimiters') or var.get(u'ComponentClass').get(u'delimiters'))})))
                var.put(u'firstChild', var.get(u'aNode').get(u'children').get(u'0'))
                if (PyJsStrictNeq(var.get(u'aNode').get(u'children').get(u'length'),Js(1.0)) or var.get(u'firstChild').get(u'textExpr')):
                    PyJsTempException = JsToPyException(var.get(u'Error').create(Js(u'[SAN FATAL] template must have a root element.')))
                    raise PyJsTempException
                var.get(u'proto').put(u'aNode', var.get(u'firstChild'))
                if PyJsStrictEq(var.get(u'firstChild').get(u'tagName'),Js(u'template')):
                    var.get(u'firstChild').put(u'tagName', var.get(u"null"))
                var.put(u'componentPropExtra', Js({u'class':Js({u'name':Js(u'class'),u'expr':var.get(u'parseText')(Js(u'{{class | _class | _sep(" ")}}'))}),u'style':Js({u'name':Js(u'style'),u'expr':var.get(u'parseText')(Js(u'{{style | _style | _sep(";")}}'))}),u'id':Js({u'name':Js(u'id'),u'expr':var.get(u'parseText')(Js(u'{{id}}'))})}))
                var.put(u'len', var.get(u'firstChild').get(u'props').get(u'length'))
                while (var.put(u'len',Js(var.get(u'len').to_number())-Js(1))+Js(1)):
                    var.put(u'prop', var.get(u'firstChild').get(u'props').get(var.get(u'len')))
                    var.put(u'extra', var.get(u'componentPropExtra').get(var.get(u'prop').get(u'name')))
                    if var.get(u'extra'):
                        var.get(u'firstChild').get(u'props').callprop(u'splice', var.get(u'len'), Js(1.0))
                        var.get(u'componentPropExtra').put(var.get(u'prop').get(u'name'), var.get(u'prop'))
                        if PyJsStrictNeq(var.get(u'prop').get(u'name'),Js(u'id')):
                            var.get(u'prop').get(u'expr').get(u'segs').callprop(u'push', var.get(u'extra').get(u'expr').get(u'segs').get(u'0'))
                            var.get(u'prop').get(u'expr').put(u'value', var.get(u"null"))
                var.get(u'firstChild').get(u'props').callprop(u'push', var.get(u'componentPropExtra').get(u'class'), var.get(u'componentPropExtra').get(u'style'), var.get(u'componentPropExtra').get(u'id'))
    PyJsHoisted_compileComponent_.func_name = u'compileComponent'
    var.put(u'compileComponent', PyJsHoisted_compileComponent_)
    @Js
    def PyJsHoisted_elementOwnDispose_(noDetach, noTransition, this, arguments, var=var):
        var = Scope({u'noDetach':noDetach, u'this':this, u'noTransition':noTransition, u'arguments':arguments}, var)
        var.registers([u'noDetach', u'noTransition'])
        var.get(u"this").put(u'leaveDispose', Js(1.0))
        var.get(u"this").put(u'disposeNoDetach', var.get(u'noDetach'))
        var.get(u"this").put(u'disposeNoTransition', var.get(u'noTransition'))
        var.get(u'elementLeave')(var.get(u"this"))
    PyJsHoisted_elementOwnDispose_.func_name = u'elementOwnDispose'
    var.put(u'elementOwnDispose', PyJsHoisted_elementOwnDispose_)
    @Js
    def PyJsHoisted_inputXPropOutputer_(element, xProp, data, this, arguments, var=var):
        var = Scope({u'this':this, u'data':data, u'arguments':arguments, u'xProp':xProp, u'element':element}, var)
        var.registers([u'outputer', u'data', u'xProp', u'element'])
        var.put(u'outputer', var.get(u'bind')(var.get(u'xPropOutputer'), var.get(u'element'), var.get(u'xProp'), var.get(u'data')))
        @Js
        def PyJs_anonymous_125_(e, this, arguments, var=var):
            var = Scope({u'this':this, u'e':e, u'arguments':arguments}, var)
            var.registers([u'e'])
            if var.get(u"this").get(u'composing').neg():
                var.get(u'outputer')(var.get(u'e'))
        PyJs_anonymous_125_._set_name(u'anonymous')
        return PyJs_anonymous_125_
    PyJsHoisted_inputXPropOutputer_.func_name = u'inputXPropOutputer'
    var.put(u'inputXPropOutputer', PyJsHoisted_inputXPropOutputer_)
    @Js
    def PyJsHoisted_elementGetTransition_(element, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'element':element}, var)
        var.registers([u'owner', u'transition', u'cmptGivenTransition', u'directive', u'element'])
        var.put(u'directive', var.get(u'element').get(u'aNode').get(u'directives').get(u'transition'))
        var.put(u'owner', var.get(u'element').get(u'owner'))
        if PyJsStrictEq(var.get(u'element').get(u'nodeType'),Js(5.0)):
            var.put(u'cmptGivenTransition', (var.get(u'element').get(u'source') and var.get(u'element').get(u'source').get(u'directives').get(u'transition')))
            if var.get(u'cmptGivenTransition'):
                var.put(u'directive', var.get(u'cmptGivenTransition'))
            else:
                var.put(u'owner', var.get(u'element'))
        pass
        if (var.get(u'directive') and var.get(u'owner')):
            var.put(u'transition', var.get(u'findMethod')(var.get(u'owner'), var.get(u'directive').get(u'value').get(u'name')))
            if PyJsStrictEq(var.get(u'transition',throw=False).typeof(),Js(u'function')):
                var.put(u'transition', var.get(u'transition').callprop(u'apply', var.get(u'owner'), var.get(u'evalArgs')(var.get(u'directive').get(u'value').get(u'args'), var.get(u'element').get(u'scope'), var.get(u'owner'))))
        return (var.get(u'transition') or var.get(u'element').get(u'transition'))
    PyJsHoisted_elementGetTransition_.func_name = u'elementGetTransition'
    var.put(u'elementGetTransition', PyJsHoisted_elementGetTransition_)
    @Js
    def PyJsHoisted_eachForData_(forNode, fn, this, arguments, var=var):
        var = Scope({u'this':this, u'forNode':forNode, u'arguments':arguments, u'fn':fn}, var)
        var.registers([u'listData', u'i', u'forNode', u'fn'])
        var.put(u'listData', var.get(u'forNode').get(u'listData'))
        if var.get(u'listData').instanceof(var.get(u'Array')):
            #for JS loop
            var.put(u'i', Js(0.0))
            while (var.get(u'i')<var.get(u'listData').get(u'length')):
                try:
                    var.get(u'fn')(var.get(u'listData').get(var.get(u'i')), var.get(u'i'))
                finally:
                        (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        else:
            if (var.get(u'listData') and PyJsStrictEq(var.get(u'listData',throw=False).typeof(),Js(u'object'))):
                for PyJsTemp in var.get(u'listData'):
                    var.put(u'i', PyJsTemp)
                    if var.get(u'listData').callprop(u'hasOwnProperty', var.get(u'i')):
                        ((var.get(u'listData').get(var.get(u'i'))!=var.get(u"null")) and var.get(u'fn')(var.get(u'listData').get(var.get(u'i')), var.get(u'i')))
    PyJsHoisted_eachForData_.func_name = u'eachForData'
    var.put(u'eachForData', PyJsHoisted_eachForData_)
    @Js
    def PyJsHoisted_CompileSourceBuffer_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        var.get(u"this").put(u'segs', Js([]))
    PyJsHoisted_CompileSourceBuffer_.func_name = u'CompileSourceBuffer'
    var.put(u'CompileSourceBuffer', PyJsHoisted_CompileSourceBuffer_)
    @Js
    def PyJsHoisted_IfNode_(aNode, owner, scope, parent, reverseWalker, this, arguments, var=var):
        var = Scope({u'reverseWalker':reverseWalker, u'aNode':aNode, u'arguments':arguments, u'parent':parent, u'owner':owner, u'scope':scope, u'this':this}, var)
        var.registers([u'me', u'reverseWalker', u'parent', u'aNode', u'owner', u'scope'])
        var.get(u"this").put(u'aNode', var.get(u'aNode'))
        var.get(u"this").put(u'owner', var.get(u'owner'))
        var.get(u"this").put(u'scope', var.get(u'scope'))
        var.get(u"this").put(u'parent', var.get(u'parent'))
        var.get(u"this").put(u'parentComponent', (var.get(u'parent') if PyJsStrictEq(var.get(u'parent').get(u'nodeType'),Js(5.0)) else var.get(u'parent').get(u'parentComponent')))
        var.get(u"this").put(u'id', var.get(u'guid')())
        var.get(u"this").put(u'children', Js([]))
        var.get(u"this").put(u'cond', var.get(u"this").get(u'aNode').get(u'directives').get(u'if').get(u'value'))
        if var.get(u'reverseWalker'):
            if var.get(u'evalExpr')(var.get(u"this").get(u'cond'), var.get(u"this").get(u'scope'), var.get(u"this").get(u'owner')):
                var.get(u"this").put(u'elseIndex', (-Js(1.0)))
                var.get(u"this").get(u'children').put(u'0', var.get(u'createReverseNode')(var.get(u'rinseCondANode')(var.get(u'aNode')), var.get(u'reverseWalker'), var.get(u"this")))
            else:
                var.put(u'me', var.get(u"this"))
                @Js
                def PyJs_anonymous_113_(elseANode, index, this, arguments, var=var):
                    var = Scope({u'this':this, u'index':index, u'elseANode':elseANode, u'arguments':arguments}, var)
                    var.registers([u'index', u'elif', u'elseANode'])
                    var.put(u'elif', var.get(u'elseANode').get(u'directives').get(u'elif'))
                    if (var.get(u'elif').neg() or (var.get(u'elif') and var.get(u'evalExpr')(var.get(u'elif').get(u'value'), var.get(u'me').get(u'scope'), var.get(u'me').get(u'owner')))):
                        var.get(u'me').put(u'elseIndex', var.get(u'index'))
                        var.get(u'me').get(u'children').put(u'0', var.get(u'createReverseNode')(var.get(u'rinseCondANode')(var.get(u'elseANode')), var.get(u'reverseWalker'), var.get(u'me')))
                        return Js(False)
                PyJs_anonymous_113_._set_name(u'anonymous')
                var.get(u'each')(var.get(u'aNode').get(u'elses'), PyJs_anonymous_113_)
            var.get(u"this").callprop(u'_create')
            var.get(u'insertBefore')(var.get(u"this").get(u'el'), var.get(u'reverseWalker').get(u'target'), var.get(u'reverseWalker').get(u'current'))
    PyJsHoisted_IfNode_.func_name = u'IfNode'
    var.put(u'IfNode', PyJsHoisted_IfNode_)
    @Js
    def PyJsHoisted_integrateProp_(aNode, name, value, options, this, arguments, var=var):
        var = Scope({u'aNode':aNode, u'name':name, u'this':this, u'options':options, u'value':value, u'arguments':arguments}, var)
        var.registers([u'xMatch', u'value', u'prop', u'aNode', u'options', u'name'])
        var.put(u'xMatch', var.get(u'value').callprop(u'match', JsRegExp(u'/^\\{=\\s*(.*?)\\s*=\\}$/')))
        if var.get(u'xMatch'):
            var.get(u'aNode').get(u'props').callprop(u'push', Js({u'name':var.get(u'name'),u'expr':var.get(u'parseExpr')(var.get(u'xMatch').get(u'1')),u'x':Js(1.0),u'raw':var.get(u'value')}))
            return var.get('undefined')
        var.put(u'prop', Js({u'name':var.get(u'name'),u'expr':var.get(u'parseText')(var.get(u'value'), var.get(u'options').get(u'delimiters')),u'raw':var.get(u'value')}))
        while 1:
            SWITCHED = False
            CONDITION = (var.get(u'name'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'class')):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'style')):
                SWITCHED = True
                @Js
                def PyJs_anonymous_38_(seg, this, arguments, var=var):
                    var = Scope({u'seg':seg, u'this':this, u'arguments':arguments}, var)
                    var.registers([u'seg'])
                    if PyJsStrictEq(var.get(u'seg').get(u'type'),Js(5.0)):
                        var.get(u'seg').get(u'filters').callprop(u'push', Js({u'type':Js(6.0),u'name':var.get(u'createAccessor')(Js([Js({u'type':Js(1.0),u'value':(Js(u'_')+var.get(u'prop').get(u'name'))})])),u'args':Js([])}))
                PyJs_anonymous_38_._set_name(u'anonymous')
                var.get(u'each')(var.get(u'prop').get(u'expr').get(u'segs'), PyJs_anonymous_38_)
                break
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'checked')):
                SWITCHED = True
                if PyJsStrictEq(var.get(u'aNode').get(u'tagName'),Js(u'input')):
                    var.get(u'postProp')(var.get(u'prop'))
                break
            SWITCHED = True
            break
        var.get(u'aNode').get(u'props').callprop(u'push', var.get(u'prop'))
    PyJsHoisted_integrateProp_.func_name = u'integrateProp'
    var.put(u'integrateProp', PyJsHoisted_integrateProp_)
    @Js
    def PyJsHoisted_parseExpr_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'expr', u'source'])
        if var.get(u'source').neg():
            return var.get('undefined')
        if (PyJsStrictEq(var.get(u'source',throw=False).typeof(),Js(u'object')) and var.get(u'source').get(u'type')):
            return var.get(u'source')
        var.put(u'expr', var.get(u'readTertiaryExpr')(var.get(u'Walker').create(var.get(u'source'))))
        var.get(u'expr').put(u'raw', var.get(u'source'))
        return var.get(u'expr')
    PyJsHoisted_parseExpr_.func_name = u'parseExpr'
    var.put(u'parseExpr', PyJsHoisted_parseExpr_)
    @Js
    def PyJsHoisted_kebab2camel_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'source'])
        @Js
        def PyJs_anonymous_25_(match, alpha, this, arguments, var=var):
            var = Scope({u'this':this, u'alpha':alpha, u'arguments':arguments, u'match':match}, var)
            var.registers([u'alpha', u'match'])
            return var.get(u'alpha').callprop(u'toUpperCase')
        PyJs_anonymous_25_._set_name(u'anonymous')
        return var.get(u'source').callprop(u'replace', JsRegExp(u'/-+(.)/ig'), PyJs_anonymous_25_)
    PyJsHoisted_kebab2camel_.func_name = u'kebab2camel'
    var.put(u'kebab2camel', PyJsHoisted_kebab2camel_)
    @Js
    def PyJsHoisted_getXPath_(stack, currentTagName, this, arguments, var=var):
        var = Scope({u'this':this, u'stack':stack, u'currentTagName':currentTagName, u'arguments':arguments}, var)
        var.registers([u'i', u'path', u'currentTagName', u'stack', u'len'])
        var.put(u'path', Js([Js(u'ROOT')]))
        #for JS loop
        var.put(u'i', Js(1.0))
        var.put(u'len', var.get(u'stack').get(u'length'))
        while (var.get(u'i')<var.get(u'len')):
            try:
                var.get(u'path').callprop(u'push', var.get(u'stack').get(var.get(u'i')).get(u'tagName'))
            finally:
                    (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        if var.get(u'currentTagName'):
            var.get(u'path').callprop(u'push', var.get(u'currentTagName'))
        return var.get(u'path').callprop(u'join', Js(u'>'))
    PyJsHoisted_getXPath_.func_name = u'getXPath'
    var.put(u'getXPath', PyJsHoisted_getXPath_)
    @Js
    def PyJsHoisted_createArrayOfChecker_(arrayItemChecker, this, arguments, var=var):
        var = Scope({u'this':this, u'arrayItemChecker':arrayItemChecker, u'arguments':arguments}, var)
        var.registers([u'arrayItemChecker'])
        @Js
        def PyJs_anonymous_9_(data, dataName, componentName, fullDataName, this, arguments, var=var):
            var = Scope({u'dataName':dataName, u'arguments':arguments, u'this':this, u'componentName':componentName, u'data':data, u'fullDataName':fullDataName}, var)
            var.registers([u'dataName', u'dataType', u'componentName', u'dataValue', u'len', u'i', u'data', u'fullDataName'])
            if PyJsStrictNeq(var.get(u'arrayItemChecker',throw=False).typeof(),Js(u'function')):
                PyJsTempException = JsToPyException(var.get(u'Error').create(((((((Js(u'[SAN ERROR] ')+Js(u'Data `'))+var.get(u'dataName'))+Js(u'` of `'))+var.get(u'componentName'))+Js(u'` has invalid '))+Js(u'DataType notation inside `arrayOf`, expected `function`'))))
                raise PyJsTempException
            var.put(u'dataValue', var.get(u'data').get(var.get(u'dataName')))
            var.put(u'dataType', var.get(u'getDataType')(var.get(u'dataValue')))
            if PyJsStrictNeq(var.get(u'dataType'),Js(u'array')):
                PyJsTempException = JsToPyException(var.get(u'Error').create((((((((((((Js(u'[SAN ERROR] ')+Js(u'Invalid '))+var.get(u'componentName'))+Js(u' data `'))+var.get(u'fullDataName'))+Js(u'` of type'))+Js(u'('))+var.get(u'dataType'))+Js(u' supplied to '))+var.get(u'componentName'))+Js(u', '))+Js(u'expected array)'))))
                raise PyJsTempException
            #for JS loop
            var.put(u'i', Js(0.0))
            var.put(u'len', var.get(u'dataValue').get(u'length'))
            while (var.get(u'i')<var.get(u'len')):
                try:
                    var.get(u'arrayItemChecker')(var.get(u'dataValue'), var.get(u'i'), var.get(u'componentName'), (((var.get(u'fullDataName')+Js(u'['))+var.get(u'i'))+Js(u']')))
                finally:
                        (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        PyJs_anonymous_9_._set_name(u'anonymous')
        return var.get(u'createChainableChecker')(PyJs_anonymous_9_)
    PyJsHoisted_createArrayOfChecker_.func_name = u'createArrayOfChecker'
    var.put(u'createArrayOfChecker', PyJsHoisted_createArrayOfChecker_)
    @Js
    def PyJsHoisted_createOneOfChecker_(expectedEnumValues, this, arguments, var=var):
        var = Scope({u'this':this, u'expectedEnumValues':expectedEnumValues, u'arguments':arguments}, var)
        var.registers([u'expectedEnumValues'])
        @Js
        def PyJs_anonymous_12_(data, dataName, componentName, fullDataName, this, arguments, var=var):
            var = Scope({u'dataName':dataName, u'arguments':arguments, u'this':this, u'componentName':componentName, u'data':data, u'fullDataName':fullDataName}, var)
            var.registers([u'i', u'componentName', u'dataValue', u'len', u'dataName', u'data', u'fullDataName'])
            if PyJsStrictNeq(var.get(u'getDataType')(var.get(u'expectedEnumValues')),Js(u'array')):
                PyJsTempException = JsToPyException(var.get(u'Error').create(((((((Js(u'[SAN ERROR] ')+Js(u'Data `'))+var.get(u'fullDataName'))+Js(u'` of `'))+var.get(u'componentName'))+Js(u'` has invalid '))+Js(u'DataType notation inside `oneOf`, array is expected.'))))
                raise PyJsTempException
            var.put(u'dataValue', var.get(u'data').get(var.get(u'dataName')))
            #for JS loop
            var.put(u'i', Js(0.0))
            var.put(u'len', var.get(u'expectedEnumValues').get(u'length'))
            while (var.get(u'i')<var.get(u'len')):
                try:
                    if PyJsStrictEq(var.get(u'dataValue'),var.get(u'expectedEnumValues').get(var.get(u'i'))):
                        return var.get('undefined')
                finally:
                        (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
            PyJsTempException = JsToPyException(var.get(u'Error').create((((((((((((((Js(u'[SAN ERROR] ')+Js(u'Invalid '))+var.get(u'componentName'))+Js(u' data `'))+var.get(u'fullDataName'))+Js(u'` of value'))+Js(u'(`'))+var.get(u'dataValue'))+Js(u'` supplied to '))+var.get(u'componentName'))+Js(u', '))+Js(u'expected one of '))+var.get(u'expectedEnumValues').callprop(u'join', Js(u',')))+Js(u')'))))
            raise PyJsTempException
        PyJs_anonymous_12_._set_name(u'anonymous')
        return var.get(u'createChainableChecker')(PyJs_anonymous_12_)
    PyJsHoisted_createOneOfChecker_.func_name = u'createOneOfChecker'
    var.put(u'createOneOfChecker', PyJsHoisted_createOneOfChecker_)
    @Js
    def PyJsHoisted_readMultiplicativeExpr_(walker, this, arguments, var=var):
        var = Scope({u'walker':walker, u'this':this, u'arguments':arguments}, var)
        var.registers([u'walker', u'expr', u'code'])
        var.put(u'expr', var.get(u'readUnaryExpr')(var.get(u'walker')))
        while Js(1.0):
            var.get(u'walker').callprop(u'goUntil')
            var.put(u'code', var.get(u'walker').callprop(u'currentCode'))
            while 1:
                SWITCHED = False
                CONDITION = (var.get(u'code'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(37.0)):
                    SWITCHED = True
                    pass
                if SWITCHED or PyJsStrictEq(CONDITION, Js(42.0)):
                    SWITCHED = True
                    pass
                if SWITCHED or PyJsStrictEq(CONDITION, Js(47.0)):
                    SWITCHED = True
                    var.get(u'walker').callprop(u'go', Js(1.0))
                    var.put(u'expr', Js({u'type':Js(8.0),u'operator':var.get(u'code'),u'segs':Js([var.get(u'expr'), var.get(u'readUnaryExpr')(var.get(u'walker'))])}))
                    continue
                SWITCHED = True
                break
            break
        return var.get(u'expr')
    PyJsHoisted_readMultiplicativeExpr_.func_name = u'readMultiplicativeExpr'
    var.put(u'readMultiplicativeExpr', PyJsHoisted_readMultiplicativeExpr_)
    @Js
    def PyJsHoisted_isOptionSelected_(element, value, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'value':value, u'element':element}, var)
        var.registers([u'selectValue', u'expr', u'value', u'element', u'parentSelect', u'prop'])
        var.put(u'parentSelect', var.get(u'element').get(u'parent'))
        while var.get(u'parentSelect'):
            if PyJsStrictEq(var.get(u'parentSelect').get(u'tagName'),Js(u'select')):
                break
            var.put(u'parentSelect', var.get(u'parentSelect').get(u'parent'))
        if var.get(u'parentSelect'):
            var.put(u'selectValue', var.get(u"null"))
            pass
            pass
            if (var.put(u'prop', var.get(u'getANodeProp')(var.get(u'parentSelect').get(u'aNode'), Js(u'value'))) and var.put(u'expr', var.get(u'prop').get(u'expr'))):
                var.put(u'selectValue', (var.get(u'evalExpr')(var.get(u'expr'), var.get(u'parentSelect').get(u'data'), var.get(u'parentSelect')) if PyJsStrictEq(var.get(u'parentSelect').get(u'nodeType'),Js(5.0)) else (var.get(u'evalExpr')(var.get(u'expr'), var.get(u'parentSelect').get(u'scope'), var.get(u'parentSelect').get(u'owner')) or Js(u''))))
            if PyJsStrictEq(var.get(u'selectValue'),var.get(u'value')):
                return Js(1.0)
    PyJsHoisted_isOptionSelected_.func_name = u'isOptionSelected'
    var.put(u'isOptionSelected', PyJsHoisted_isOptionSelected_)
    @Js
    def PyJsHoisted_evalExpr_(expr, data, owner, this, arguments, var=var):
        var = Scope({u'owner':owner, u'expr':expr, u'data':data, u'this':this, u'arguments':arguments}, var)
        var.registers([u'data', u'seg', u'leftValue', u'i', u'filterName', u'l', u'value', u'expr', u'filter', u'item', u'rightValue', u'itemValue', u'pathsLen', u'owner', u'buf', u'method'])
        if (var.get(u'expr').get(u'value')!=var.get(u"null")):
            return var.get(u'expr').get(u'value')
        var.put(u'value', var.get(u'dataCache').callprop(u'get', var.get(u'data'), var.get(u'expr')))
        if (var.get(u'value')==var.get(u"null")):
            while 1:
                SWITCHED = False
                CONDITION = (var.get(u'expr').get(u'type'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(9.0)):
                    SWITCHED = True
                    var.put(u'value', var.get(u'evalExpr')(var.get(u'expr').get(u'expr'), var.get(u'data'), var.get(u'owner')))
                    while 1:
                        SWITCHED = False
                        CONDITION = (var.get(u'expr').get(u'operator'))
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(33.0)):
                            SWITCHED = True
                            var.put(u'value', var.get(u'value').neg())
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(45.0)):
                            SWITCHED = True
                            var.put(u'value', (Js(0.0)-var.get(u'value')))
                            break
                        SWITCHED = True
                        break
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(8.0)):
                    SWITCHED = True
                    var.put(u'leftValue', var.get(u'evalExpr')(var.get(u'expr').get(u'segs').get(u'0'), var.get(u'data'), var.get(u'owner')))
                    var.put(u'rightValue', var.get(u'evalExpr')(var.get(u'expr').get(u'segs').get(u'1'), var.get(u'data'), var.get(u'owner')))
                    while 1:
                        SWITCHED = False
                        CONDITION = (var.get(u'expr').get(u'operator'))
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(37.0)):
                            SWITCHED = True
                            var.put(u'value', (var.get(u'leftValue')%var.get(u'rightValue')))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(43.0)):
                            SWITCHED = True
                            var.put(u'value', (var.get(u'leftValue')+var.get(u'rightValue')))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(45.0)):
                            SWITCHED = True
                            var.put(u'value', (var.get(u'leftValue')-var.get(u'rightValue')))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(42.0)):
                            SWITCHED = True
                            var.put(u'value', (var.get(u'leftValue')*var.get(u'rightValue')))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(47.0)):
                            SWITCHED = True
                            var.put(u'value', (var.get(u'leftValue')/var.get(u'rightValue')))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(60.0)):
                            SWITCHED = True
                            var.put(u'value', (var.get(u'leftValue')<var.get(u'rightValue')))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(62.0)):
                            SWITCHED = True
                            var.put(u'value', (var.get(u'leftValue')>var.get(u'rightValue')))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(76.0)):
                            SWITCHED = True
                            var.put(u'value', (var.get(u'leftValue') and var.get(u'rightValue')))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(94.0)):
                            SWITCHED = True
                            var.put(u'value', (var.get(u'leftValue')!=var.get(u'rightValue')))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(121.0)):
                            SWITCHED = True
                            var.put(u'value', (var.get(u'leftValue')<=var.get(u'rightValue')))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(122.0)):
                            SWITCHED = True
                            var.put(u'value', (var.get(u'leftValue')==var.get(u'rightValue')))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(123.0)):
                            SWITCHED = True
                            var.put(u'value', (var.get(u'leftValue')>=var.get(u'rightValue')))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(155.0)):
                            SWITCHED = True
                            var.put(u'value', PyJsStrictNeq(var.get(u'leftValue'),var.get(u'rightValue')))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(183.0)):
                            SWITCHED = True
                            var.put(u'value', PyJsStrictEq(var.get(u'leftValue'),var.get(u'rightValue')))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(248.0)):
                            SWITCHED = True
                            var.put(u'value', (var.get(u'leftValue') or var.get(u'rightValue')))
                            break
                        SWITCHED = True
                        break
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(10.0)):
                    SWITCHED = True
                    var.put(u'value', var.get(u'evalExpr')(var.get(u'expr').get(u'segs').get((Js(1.0) if var.get(u'evalExpr')(var.get(u'expr').get(u'segs').get(u'0'), var.get(u'data'), var.get(u'owner')) else Js(2.0))), var.get(u'data'), var.get(u'owner')))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(12.0)):
                    SWITCHED = True
                    var.put(u'value', Js([]))
                    #for JS loop
                    var.put(u'i', Js(0.0))
                    var.put(u'l', var.get(u'expr').get(u'items').get(u'length'))
                    while (var.get(u'i')<var.get(u'l')):
                        try:
                            var.put(u'item', var.get(u'expr').get(u'items').get(var.get(u'i')))
                            var.put(u'itemValue', var.get(u'evalExpr')(var.get(u'item').get(u'expr'), var.get(u'data'), var.get(u'owner')))
                            if var.get(u'item').get(u'spread'):
                                (var.get(u'itemValue') and var.put(u'value', var.get(u'value').callprop(u'concat', var.get(u'itemValue'))))
                            else:
                                var.get(u'value').callprop(u'push', var.get(u'itemValue'))
                        finally:
                                (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(11.0)):
                    SWITCHED = True
                    var.put(u'value', Js({}))
                    #for JS loop
                    var.put(u'i', Js(0.0))
                    var.put(u'l', var.get(u'expr').get(u'items').get(u'length'))
                    while (var.get(u'i')<var.get(u'l')):
                        try:
                            var.put(u'item', var.get(u'expr').get(u'items').get(var.get(u'i')))
                            var.put(u'itemValue', var.get(u'evalExpr')(var.get(u'item').get(u'expr'), var.get(u'data'), var.get(u'owner')))
                            if var.get(u'item').get(u'spread'):
                                (var.get(u'itemValue') and var.get(u'extend')(var.get(u'value'), var.get(u'itemValue')))
                            else:
                                var.get(u'value').put(var.get(u'evalExpr')(var.get(u'item').get(u'name'), var.get(u'data'), var.get(u'owner')), var.get(u'itemValue'))
                        finally:
                                (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(4.0)):
                    SWITCHED = True
                    var.put(u'value', var.get(u'data').callprop(u'get', var.get(u'expr')))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(5.0)):
                    SWITCHED = True
                    var.put(u'value', var.get(u'evalExpr')(var.get(u'expr').get(u'expr'), var.get(u'data'), var.get(u'owner')))
                    if var.get(u'owner'):
                        #for JS loop
                        var.put(u'i', Js(0.0))
                        var.put(u'l', var.get(u'expr').get(u'filters').get(u'length'))
                        while (var.get(u'i')<var.get(u'l')):
                            try:
                                var.put(u'filter', var.get(u'expr').get(u'filters').get(var.get(u'i')))
                                var.put(u'filterName', var.get(u'filter').get(u'name').get(u'paths').get(u'0').get(u'value'))
                                if var.get(u'owner').get(u'filters').get(var.get(u'filterName')):
                                    var.put(u'value', var.get(u'owner').get(u'filters').get(var.get(u'filterName')).callprop(u'apply', var.get(u'owner'), Js([var.get(u'value')]).callprop(u'concat', var.get(u'evalArgs')(var.get(u'filter').get(u'args'), var.get(u'data'), var.get(u'owner')))))
                                else:
                                    if var.get(u'DEFAULT_FILTERS').get(var.get(u'filterName')):
                                        var.put(u'value', var.get(u'DEFAULT_FILTERS').callprop(var.get(u'filterName'), var.get(u'value'), (var.get(u'filter').get(u'args').get(u'0').get(u'value') if var.get(u'filter').get(u'args').get(u'0') else Js(u''))))
                            finally:
                                    (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
                    if (var.get(u'value')==var.get(u"null")):
                        var.put(u'value', Js(u''))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(6.0)):
                    SWITCHED = True
                    if (var.get(u'owner') and PyJsStrictEq(var.get(u'expr').get(u'name').get(u'type'),Js(4.0))):
                        var.put(u'method', var.get(u'owner'))
                        var.put(u'pathsLen', var.get(u'expr').get(u'name').get(u'paths').get(u'length'))
                        #for JS loop
                        var.put(u'i', Js(0.0))
                        while (var.get(u'method') and (var.get(u'i')<var.get(u'pathsLen'))):
                            try:
                                var.put(u'method', var.get(u'method').get(var.get(u'evalExpr')(var.get(u'expr').get(u'name').get(u'paths').get(var.get(u'i')), var.get(u'data'), var.get(u'owner'))))
                            finally:
                                    (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
                        if var.get(u'method'):
                            var.put(u'value', var.get(u'method').callprop(u'apply', var.get(u'owner'), var.get(u'evalArgs')(var.get(u'expr').get(u'args'), var.get(u'data'), var.get(u'owner'))))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(7.0)):
                    SWITCHED = True
                    var.put(u'buf', Js(u''))
                    #for JS loop
                    var.put(u'i', Js(0.0))
                    var.put(u'l', var.get(u'expr').get(u'segs').get(u'length'))
                    while (var.get(u'i')<var.get(u'l')):
                        try:
                            var.put(u'seg', var.get(u'expr').get(u'segs').get(var.get(u'i')))
                            var.put(u'buf', (var.get(u'seg').get(u'value') or var.get(u'evalExpr')(var.get(u'seg'), var.get(u'data'), var.get(u'owner'))), u'+')
                        finally:
                                (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
                    return var.get(u'buf')
                SWITCHED = True
                break
            var.get(u'dataCache').callprop(u'set', var.get(u'data'), var.get(u'expr'), var.get(u'value'))
        return var.get(u'value')
    PyJsHoisted_evalExpr_.func_name = u'evalExpr'
    var.put(u'evalExpr', PyJsHoisted_evalExpr_)
    @Js
    def PyJsHoisted_analInputCheckedState_(element, value, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'value':value, u'element':element}, var)
        var.registers([u'bindType', u'bindChecked', u'value', u'element', u'type', u'bindValue'])
        var.put(u'bindValue', var.get(u'getANodeProp')(var.get(u'element').get(u'aNode'), Js(u'value')))
        var.put(u'bindType', var.get(u'getANodeProp')(var.get(u'element').get(u'aNode'), Js(u'type')))
        if (var.get(u'bindValue') and var.get(u'bindType')):
            var.put(u'type', var.get(u'evalExpr')(var.get(u'bindType').get(u'expr'), var.get(u'element').get(u'scope'), var.get(u'element').get(u'owner')))
            if var.get(u'analInputChecker').get(var.get(u'type')):
                var.put(u'bindChecked', var.get(u'getANodeProp')(var.get(u'element').get(u'aNode'), Js(u'checked')))
                if ((var.get(u'bindChecked')!=var.get(u"null")) and var.get(u'bindChecked').get(u'hintExpr').neg()):
                    var.get(u'bindChecked').put(u'hintExpr', var.get(u'bindValue').get(u'expr'))
                return var.get(u'analInputChecker').callprop(var.get(u'type'), var.get(u'value'), var.get(u'evalExpr')(var.get(u'bindValue').get(u'expr'), var.get(u'element').get(u'scope'), var.get(u'element').get(u'owner'))).neg().neg()
    PyJsHoisted_analInputCheckedState_.func_name = u'analInputCheckedState'
    var.put(u'analInputCheckedState', PyJsHoisted_analInputCheckedState_)
    @Js
    def PyJsHoisted_extend_(target, source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'target':target, u'arguments':arguments}, var)
        var.registers([u'source', u'value', u'key', u'target'])
        for PyJsTemp in var.get(u'source'):
            var.put(u'key', PyJsTemp)
            if var.get(u'source').callprop(u'hasOwnProperty', var.get(u'key')):
                var.put(u'value', var.get(u'source').get(var.get(u'key')))
                if PyJsStrictNeq(var.get(u'value',throw=False).typeof(),Js(u'undefined')):
                    var.get(u'target').put(var.get(u'key'), var.get(u'value'))
        return var.get(u'target')
    PyJsHoisted_extend_.func_name = u'extend'
    var.put(u'extend', PyJsHoisted_extend_)
    @Js
    def PyJsHoisted_emitDevtool_(name, arg, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'name':name, u'arg':arg}, var)
        var.registers([u'name', u'arg'])
        if (((var.get(u'isBrowser') and var.get(u'san4devtool')) and var.get(u'san4devtool').get(u'debug')) and var.get(u'window').get(u'__san_devtool__')):
            var.get(u'window').get(u'__san_devtool__').callprop(u'emit', var.get(u'name'), var.get(u'arg'))
    PyJsHoisted_emitDevtool_.func_name = u'emitDevtool'
    var.put(u'emitDevtool', PyJsHoisted_emitDevtool_)
    @Js
    def PyJsHoisted_elementLeave_(element, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'element':element}, var)
        var.registers([u'transition', u'lifeCycle', u'element'])
        var.put(u'lifeCycle', var.get(u'element').get(u'lifeCycle'))
        if var.get(u'lifeCycle').get(u'leaving'):
            return var.get('undefined')
        if var.get(u'element').get(u'disposeNoTransition'):
            var.get(u'element').callprop(u'_doneLeave')
        else:
            var.put(u'transition', var.get(u'elementGetTransition')(var.get(u'element')))
            if (var.get(u'transition') and var.get(u'transition').get(u'leave')):
                var.get(u'element').callprop(u'_toPhase', Js(u'leaving'))
                @Js
                def PyJs_anonymous_122_(this, arguments, var=var):
                    var = Scope({u'this':this, u'arguments':arguments}, var)
                    var.registers([])
                    var.get(u'element').callprop(u'_doneLeave')
                PyJs_anonymous_122_._set_name(u'anonymous')
                var.get(u'transition').callprop(u'leave', var.get(u'element').get(u'el'), PyJs_anonymous_122_)
            else:
                var.get(u'element').callprop(u'_doneLeave')
    PyJsHoisted_elementLeave_.func_name = u'elementLeave'
    var.put(u'elementLeave', PyJsHoisted_elementLeave_)
    @Js
    def PyJsHoisted_elementUpdateChildren_(children, changes, this, arguments, var=var):
        var = Scope({u'this':this, u'changes':changes, u'children':children, u'arguments':arguments}, var)
        var.registers([u'i', u'changes', u'l', u'children'])
        #for JS loop
        var.put(u'i', Js(0.0))
        var.put(u'l', var.get(u'children').get(u'length'))
        while (var.get(u'i')<var.get(u'l')):
            try:
                var.get(u'children').get(var.get(u'i')).callprop(u'_update', var.get(u'changes'))
            finally:
                    (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
    PyJsHoisted_elementUpdateChildren_.func_name = u'elementUpdateChildren'
    var.put(u'elementUpdateChildren', PyJsHoisted_elementUpdateChildren_)
    @Js
    def PyJsHoisted_nodeSBindUpdate_(node, sBind, changes, updater, this, arguments, var=var):
        var = Scope({u'node':node, u'sBind':sBind, u'updater':updater, u'arguments':arguments, u'this':this, u'changes':changes}, var)
        var.registers([u'node', u'keys', u'l', u'len', u'i', u'sBind', u'newBindData', u'value', u'key', u'updater', u'changes'])
        if var.get(u'sBind'):
            var.put(u'len', var.get(u'changes').get(u'length'))
            while (var.put(u'len',Js(var.get(u'len').to_number())-Js(1))+Js(1)):
                if var.get(u'changeExprCompare')(var.get(u'changes').get(var.get(u'len')).get(u'expr'), var.get(u'sBind').get(u'value'), var.get(u'node').get(u'scope')):
                    var.put(u'newBindData', var.get(u'evalExpr')(var.get(u'sBind').get(u'value'), var.get(u'node').get(u'scope'), var.get(u'node').get(u'owner')))
                    var.put(u'keys', var.get(u'unionKeys')(var.get(u'newBindData'), var.get(u'node').get(u'_sbindData')))
                    #for JS loop
                    var.put(u'i', Js(0.0))
                    var.put(u'l', var.get(u'keys').get(u'length'))
                    while (var.get(u'i')<var.get(u'l')):
                        try:
                            var.put(u'key', var.get(u'keys').get(var.get(u'i')))
                            var.put(u'value', var.get(u'newBindData').get(var.get(u'key')))
                            if PyJsStrictNeq(var.get(u'value'),var.get(u'node').get(u'_sbindData').get(var.get(u'key'))):
                                var.get(u'updater')(var.get(u'key'), var.get(u'value'))
                        finally:
                                (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
                    var.get(u'node').put(u'_sbindData', var.get(u'newBindData'))
                    break
    PyJsHoisted_nodeSBindUpdate_.func_name = u'nodeSBindUpdate'
    var.put(u'nodeSBindUpdate', PyJsHoisted_nodeSBindUpdate_)
    @Js
    def PyJsHoisted_on_(el, eventName, listener, capture, this, arguments, var=var):
        var = Scope({u'eventName':eventName, u'el':el, u'arguments':arguments, u'capture':capture, u'listener':listener, u'this':this}, var)
        var.registers([u'eventName', u'el', u'capture', u'listener'])
        if var.get(u'el').get(u'addEventListener'):
            var.get(u'el').callprop(u'addEventListener', var.get(u'eventName'), var.get(u'listener'), var.get(u'capture'))
        else:
            var.get(u'el').callprop(u'attachEvent', (Js(u'on')+var.get(u'eventName')), var.get(u'listener'))
    PyJsHoisted_on_.func_name = u'on'
    var.put(u'on', PyJsHoisted_on_)
    @Js
    def PyJsHoisted_reverseElementChildren_(element, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'element':element}, var)
        var.registers([u'reverseWalker', u'htmlDirective', u'element'])
        var.put(u'htmlDirective', var.get(u'element').get(u'aNode').get(u'directives').get(u'html'))
        if var.get(u'htmlDirective').neg():
            var.put(u'reverseWalker', var.get(u'DOMChildrenWalker').create(var.get(u'element').get(u'el')))
            @Js
            def PyJs_anonymous_121_(aNodeChild, this, arguments, var=var):
                var = Scope({u'this':this, u'aNodeChild':aNodeChild, u'arguments':arguments}, var)
                var.registers([u'aNodeChild'])
                var.get(u'element').get(u'children').callprop(u'push', var.get(u'createReverseNode')(var.get(u'aNodeChild'), var.get(u'reverseWalker'), var.get(u'element')))
            PyJs_anonymous_121_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'element').get(u'aNode').get(u'children'), PyJs_anonymous_121_)
    PyJsHoisted_reverseElementChildren_.func_name = u'reverseElementChildren'
    var.put(u'reverseElementChildren', PyJsHoisted_reverseElementChildren_)
    @Js
    def PyJsHoisted_createEl_(tagName, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'tagName':tagName}, var)
        var.registers([u'tagName'])
        if var.get(u'svgTags').get(var.get(u'tagName')):
            return var.get(u'document').callprop(u'createElementNS', Js(u'http://www.w3.org/2000/svg'), var.get(u'tagName'))
        return var.get(u'document').callprop(u'createElement', var.get(u'tagName'))
    PyJsHoisted_createEl_.func_name = u'createEl'
    var.put(u'createEl', PyJsHoisted_createEl_)
    @Js
    def PyJsHoisted_regexpLiteral_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'source'])
        @Js
        def PyJs_anonymous_29_(c, this, arguments, var=var):
            var = Scope({u'this':this, u'c':c, u'arguments':arguments}, var)
            var.registers([u'c'])
            return (Js(u'\\')+var.get(u'c'))
        PyJs_anonymous_29_._set_name(u'anonymous')
        return var.get(u'source').callprop(u'replace', JsRegExp(u'/[\\^\\[\\]\\$\\(\\)\\{\\}\\?\\*\\.\\+\\\\]/g'), PyJs_anonymous_29_)
    PyJsHoisted_regexpLiteral_.func_name = u'regexpLiteral'
    var.put(u'regexpLiteral', PyJsHoisted_regexpLiteral_)
    @Js
    def PyJsHoisted_createPrimaryTypeChecker_(type, this, arguments, var=var):
        var = Scope({u'this':this, u'type':type, u'arguments':arguments}, var)
        var.registers([u'type'])
        @Js
        def PyJs_anonymous_8_(data, dataName, componentName, fullDataName, this, arguments, var=var):
            var = Scope({u'dataName':dataName, u'arguments':arguments, u'this':this, u'componentName':componentName, u'data':data, u'fullDataName':fullDataName}, var)
            var.registers([u'dataType', u'componentName', u'dataValue', u'dataName', u'data', u'fullDataName'])
            var.put(u'dataValue', var.get(u'data').get(var.get(u'dataName')))
            var.put(u'dataType', var.get(u'getDataType')(var.get(u'dataValue')))
            if PyJsStrictNeq(var.get(u'dataType'),var.get(u'type')):
                PyJsTempException = JsToPyException(var.get(u'Error').create((((((((((((((Js(u'[SAN ERROR] ')+Js(u'Invalid '))+var.get(u'componentName'))+Js(u' data `'))+var.get(u'fullDataName'))+Js(u'` of type'))+Js(u'('))+var.get(u'dataType'))+Js(u' supplied to '))+var.get(u'componentName'))+Js(u', '))+Js(u'expected '))+var.get(u'type'))+Js(u')'))))
                raise PyJsTempException
        PyJs_anonymous_8_._set_name(u'anonymous')
        return var.get(u'createChainableChecker')(PyJs_anonymous_8_)
    PyJsHoisted_createPrimaryTypeChecker_.func_name = u'createPrimaryTypeChecker'
    var.put(u'createPrimaryTypeChecker', PyJsHoisted_createPrimaryTypeChecker_)
    @Js
    def PyJsHoisted_xPropOutputer_(xProp, data, this, arguments, var=var):
        var = Scope({u'this':this, u'data':data, u'arguments':arguments, u'xProp':xProp}, var)
        var.registers([u'data', u'xProp'])
        var.get(u'getPropHandler')(var.get(u"this").get(u'tagName'), var.get(u'xProp').get(u'name')).callprop(u'output', var.get(u"this"), var.get(u'xProp'), var.get(u'data'))
    PyJsHoisted_xPropOutputer_.func_name = u'xPropOutputer'
    var.put(u'xPropOutputer', PyJsHoisted_xPropOutputer_)
    @Js
    def PyJsHoisted_lifeCycleOwnIs_(name, this, arguments, var=var):
        var = Scope({u'this':this, u'name':name, u'arguments':arguments}, var)
        var.registers([u'name'])
        return var.get(u"this").get(var.get(u'name'))
    PyJsHoisted_lifeCycleOwnIs_.func_name = u'lifeCycleOwnIs'
    var.put(u'lifeCycleOwnIs', PyJsHoisted_lifeCycleOwnIs_)
    @Js
    def PyJsHoisted_parseTemplate_(source, options, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'options':options, u'arguments':arguments}, var)
        var.registers([u'beforeLastIndex', u'attrMatch', u'tagName', u'tagMatch', u'currentNode', u'closeIndex', u'parentChildrenLen', u'source', u'elseDirective', u'attrReg', u'tagClose', u'aElement', u'stackIndex', u'stack', u'tbodyNode', u'tagReg', u'tagMatchStart', u'pushTextNode', u'tagEnd', u'rootNode', u'walker', u'parentChild', u'nextCharCode', u'options'])
        @Js
        def PyJsHoisted_pushTextNode_(text, this, arguments, var=var):
            var = Scope({u'this':this, u'text':text, u'arguments':arguments}, var)
            var.registers([u'text'])
            while 1:
                SWITCHED = False
                CONDITION = (var.get(u'options').get(u'trimWhitespace'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'blank')):
                    SWITCHED = True
                    if JsRegExp(u'/^\\s+$/').callprop(u'test', var.get(u'text')):
                        var.put(u'text', var.get(u"null"))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'all')):
                    SWITCHED = True
                    var.put(u'text', var.get(u'text').callprop(u'replace', JsRegExp(u'/(^\\s+|\\s+$)/g'), Js(u'')))
                    break
                SWITCHED = True
                break
            if var.get(u'text'):
                var.get(u'currentNode').get(u'children').callprop(u'push', var.get(u'createANode')(Js({u'textExpr':var.get(u'parseText')(var.get(u'text'), var.get(u'options').get(u'delimiters'))})))
        PyJsHoisted_pushTextNode_.func_name = u'pushTextNode'
        var.put(u'pushTextNode', PyJsHoisted_pushTextNode_)
        var.put(u'options', (var.get(u'options') or Js({})))
        var.get(u'options').put(u'trimWhitespace', (var.get(u'options').get(u'trimWhitespace') or Js(u'none')))
        var.put(u'rootNode', var.get(u'createANode')())
        if PyJsStrictNeq(var.get(u'source',throw=False).typeof(),Js(u'string')):
            return var.get(u'rootNode')
        var.put(u'source', var.get(u'source').callprop(u'replace', JsRegExp(u'/<!--([\\s\\S]*?)-->/mg'), Js(u'')).callprop(u'replace', JsRegExp(u'/(^\\s+|\\s+$)/g'), Js(u'')))
        var.put(u'walker', var.get(u'Walker').create(var.get(u'source')))
        var.put(u'tagReg', JsRegExp(u'/<(\\/)?([a-z0-9-]+)\\s*/ig'))
        var.put(u'attrReg', JsRegExp(u'/([-:0-9a-z\\[\\]]+)(\\s*=\\s*([\'"])([^\\3]*?)\\3)?\\s*/ig'))
        pass
        var.put(u'currentNode', var.get(u'rootNode'))
        var.put(u'stack', Js([var.get(u'rootNode')]))
        var.put(u'stackIndex', Js(0.0))
        var.put(u'beforeLastIndex', Js(0.0))
        while (var.put(u'tagMatch', var.get(u'walker').callprop(u'match', var.get(u'tagReg')))!=var.get(u"null")):
            var.put(u'tagMatchStart', (var.get(u'walker').get(u'index')-var.get(u'tagMatch').get(u'0').get(u'length')))
            var.put(u'tagEnd', var.get(u'tagMatch').get(u'1'))
            var.put(u'tagName', var.get(u'tagMatch').get(u'2'))
            if var.get(u'svgTags').get(var.get(u'tagName')).neg():
                var.put(u'tagName', var.get(u'tagName').callprop(u'toLowerCase'))
            if var.get(u'tagEnd'):
                if PyJsStrictEq(var.get(u'walker').callprop(u'currentCode'),Js(62.0)):
                    var.put(u'closeIndex', var.get(u'stackIndex'))
                    if var.get(u'autoCloseTags').get(var.get(u'tagName')):
                        PyJsTempException = JsToPyException(var.get(u'Error').create(((((((Js(u'')+Js(u'[SAN ERROR] '))+var.get(u'getXPath')(var.get(u'stack'), var.get(u'tagName')))+Js(u' is a `auto closed` tag, '))+Js(u'so it cannot be closed with </'))+var.get(u'tagName'))+Js(u'>'))))
                        raise PyJsTempException
                    if (PyJsStrictNeq(var.get(u'stack').get(var.get(u'closeIndex')).get(u'tagName'),var.get(u'tagName')) and (PyJsStrictEq(var.get(u'tagName'),Js(u'table')) and PyJsStrictEq(var.get(u'stack').get(var.get(u'closeIndex')).get(u'tagName'),Js(u'tbody'))).neg()):
                        PyJsTempException = JsToPyException(var.get(u'Error').create((((Js(u'[SAN ERROR] ')+var.get(u'getXPath')(var.get(u'stack')))+Js(u' is closed with '))+var.get(u'tagName'))))
                        raise PyJsTempException
                    var.get(u'pushTextNode')(var.get(u'source').callprop(u'slice', var.get(u'beforeLastIndex'), var.get(u'tagMatchStart')))
                    while ((var.get(u'closeIndex')>Js(0.0)) and PyJsStrictNeq(var.get(u'stack').get(var.get(u'closeIndex')).get(u'tagName'),var.get(u'tagName'))):
                        (var.put(u'closeIndex',Js(var.get(u'closeIndex').to_number())-Js(1))+Js(1))
                    if (var.get(u'closeIndex')>Js(0.0)):
                        var.put(u'stackIndex', (var.get(u'closeIndex')-Js(1.0)))
                        var.put(u'currentNode', var.get(u'stack').get(var.get(u'stackIndex')))
                    var.get(u'walker').callprop(u'go', Js(1.0))
                else:
                    if PyJsStrictEq(var.get(u'walker').callprop(u'currentCode'),Js(60.0)):
                        PyJsTempException = JsToPyException(var.get(u'Error').create((((Js(u'')+Js(u'[SAN ERROR] '))+var.get(u'getXPath')(var.get(u'stack')))+Js(u"'s close tag not closed"))))
                        raise PyJsTempException
                    PyJsTempException = JsToPyException(var.get(u'Error').create((((Js(u'')+Js(u'[SAN ERROR] '))+var.get(u'getXPath')(var.get(u'stack')))+Js(u"'s close tag has attributes"))))
                    raise PyJsTempException
            else:
                var.put(u'aElement', var.get(u'createANode')(Js({u'tagName':var.get(u'tagName')})))
                var.put(u'tagClose', var.get(u'autoCloseTags').get(var.get(u'tagName')))
                while Js(1.0):
                    var.put(u'nextCharCode', var.get(u'walker').callprop(u'currentCode'))
                    if PyJsStrictEq(var.get(u'nextCharCode'),Js(62.0)):
                        var.get(u'walker').callprop(u'go', Js(1.0))
                        break
                    if (PyJsStrictEq(var.get(u'nextCharCode'),Js(47.0)) and PyJsStrictEq(var.get(u'walker').callprop(u'charCode', (var.get(u'walker').get(u'index')+Js(1.0))),Js(62.0))):
                        var.get(u'walker').callprop(u'go', Js(2.0))
                        var.put(u'tagClose', Js(1.0))
                        break
                    if var.get(u'nextCharCode').neg():
                        var.get(u'pushTextNode')(var.get(u'walker').callprop(u'cut', var.get(u'beforeLastIndex')))
                        var.put(u'aElement', var.get(u"null"))
                        break
                    if PyJsStrictEq(var.get(u'nextCharCode'),Js(60.0)):
                        PyJsTempException = JsToPyException(var.get(u'Error').create(((Js(u'[SAN ERROR] ')+var.get(u'getXPath')(var.get(u'stack'), var.get(u'tagName')))+Js(u' is not closed'))))
                        raise PyJsTempException
                    var.put(u'attrMatch', var.get(u'walker').callprop(u'match', var.get(u'attrReg')))
                    if var.get(u'attrMatch'):
                        if (PyJsStrictEq(var.get(u'walker').callprop(u'charCode', (var.get(u'attrMatch').get(u'index')+var.get(u'attrMatch').get(u'1').get(u'length'))),Js(61.0)) and var.get(u'attrMatch').get(u'2').neg()):
                            PyJsTempException = JsToPyException(var.get(u'Error').create((((((Js(u'')+Js(u'[SAN ERROR] '))+var.get(u'getXPath')(var.get(u'stack'), var.get(u'tagName')))+Js(u' attribute `'))+var.get(u'attrMatch').get(u'1'))+Js(u'` is not wrapped with ""'))))
                            raise PyJsTempException
                        var.get(u'integrateAttr')(var.get(u'aElement'), var.get(u'attrMatch').get(u'1'), (var.get(u'attrMatch').get(u'4') if var.get(u'attrMatch').get(u'2') else Js(u'')), var.get(u'options'))
                if var.get(u'aElement'):
                    var.get(u'pushTextNode')(var.get(u'source').callprop(u'slice', var.get(u'beforeLastIndex'), var.get(u'tagMatchStart')))
                    var.put(u'elseDirective', (var.get(u'aElement').get(u'directives').get(u'else') or var.get(u'aElement').get(u'directives').get(u'elif')))
                    if var.get(u'elseDirective'):
                        var.put(u'parentChildrenLen', var.get(u'currentNode').get(u'children').get(u'length'))
                        while (var.put(u'parentChildrenLen',Js(var.get(u'parentChildrenLen').to_number())-Js(1))+Js(1)):
                            var.put(u'parentChild', var.get(u'currentNode').get(u'children').get(var.get(u'parentChildrenLen')))
                            if var.get(u'parentChild').get(u'textExpr'):
                                var.get(u'currentNode').get(u'children').callprop(u'splice', var.get(u'parentChildrenLen'), Js(1.0))
                                continue
                            if var.get(u'parentChild').get(u'directives').get(u'if').neg():
                                PyJsTempException = JsToPyException(var.get(u'Error').create(Js(u'[SAN FATEL] else not match if.')))
                                raise PyJsTempException
                            var.get(u'parentChild').put(u'elses', (var.get(u'parentChild').get(u'elses') or Js([])))
                            var.get(u'parentChild').get(u'elses').callprop(u'push', var.get(u'aElement'))
                            break
                    else:
                        if (PyJsStrictEq(var.get(u'aElement').get(u'tagName'),Js(u'tr')) and PyJsStrictEq(var.get(u'currentNode').get(u'tagName'),Js(u'table'))):
                            var.put(u'tbodyNode', var.get(u'createANode')(Js({u'tagName':Js(u'tbody')})))
                            var.get(u'currentNode').get(u'children').callprop(u'push', var.get(u'tbodyNode'))
                            var.put(u'currentNode', var.get(u'tbodyNode'))
                            var.get(u'stack').put(var.put(u'stackIndex',Js(var.get(u'stackIndex').to_number())+Js(1)), var.get(u'tbodyNode'))
                        var.get(u'currentNode').get(u'children').callprop(u'push', var.get(u'aElement'))
                    if var.get(u'tagClose').neg():
                        var.put(u'currentNode', var.get(u'aElement'))
                        var.get(u'stack').put(var.put(u'stackIndex',Js(var.get(u'stackIndex').to_number())+Js(1)), var.get(u'aElement'))
            var.put(u'beforeLastIndex', var.get(u'walker').get(u'index'))
        var.get(u'pushTextNode')(var.get(u'walker').callprop(u'cut', var.get(u'beforeLastIndex')))
        return var.get(u'rootNode')
        pass
    PyJsHoisted_parseTemplate_.func_name = u'parseTemplate'
    var.put(u'parseTemplate', PyJsHoisted_parseTemplate_)
    @Js
    def PyJsHoisted_serializeStumpEnd_(type, this, arguments, var=var):
        var = Scope({u'this':this, u'type':type, u'arguments':arguments}, var)
        var.registers([u'type'])
        return ((Js(u'<!--/s-')+var.get(u'type'))+Js(u'-->'))
    PyJsHoisted_serializeStumpEnd_.func_name = u'serializeStumpEnd'
    var.put(u'serializeStumpEnd', PyJsHoisted_serializeStumpEnd_)
    @Js
    def PyJsHoisted_createExactChecker_(shapeTypes, this, arguments, var=var):
        var = Scope({u'this':this, u'shapeTypes':shapeTypes, u'arguments':arguments}, var)
        var.registers([u'shapeTypes'])
        @Js
        def PyJs_anonymous_15_(data, dataName, componentName, fullDataName, secret, this, arguments, var=var):
            var = Scope({u'dataName':dataName, u'secret':secret, u'arguments':arguments, u'this':this, u'componentName':componentName, u'data':data, u'fullDataName':fullDataName}, var)
            var.registers([u'dataValueType', u'componentName', u'dataValue', u'secret', u'dataName', u'checker', u'fullDataName', u'key', u'data', u'allKeys'])
            if PyJsStrictNeq(var.get(u'getDataType')(var.get(u'shapeTypes')),Js(u'object')):
                PyJsTempException = JsToPyException(var.get(u'Error').create(((((((Js(u'[SAN ERROR] ')+Js(u'Data `'))+var.get(u'dataName'))+Js(u'` of `'))+var.get(u'componentName'))+Js(u'` has invalid '))+Js(u'DataType notation inside `exact`'))))
                raise PyJsTempException
            var.put(u'dataValue', var.get(u'data').get(var.get(u'dataName')))
            var.put(u'dataValueType', var.get(u'getDataType')(var.get(u'dataValue')))
            if PyJsStrictNeq(var.get(u'dataValueType'),Js(u'object')):
                PyJsTempException = JsToPyException(var.get(u'Error').create(((((((((Js(u'[SAN ERROR] ')+Js(u'Invalid data `'))+var.get(u'fullDataName'))+Js(u'` of type `'))+var.get(u'dataValueType'))+Js(u'`'))+Js(u'(supplied to '))+var.get(u'componentName'))+Js(u', expected `object`)'))))
                raise PyJsTempException
            var.put(u'allKeys', Js({}))
            var.get(u'extend')(var.get(u'allKeys'), var.get(u'shapeTypes'))
            var.get(u'extend')(var.get(u'allKeys'), var.get(u'dataValue'))
            for PyJsTemp in var.get(u'allKeys'):
                var.put(u'key', PyJsTemp)
                if var.get(u'allKeys').callprop(u'hasOwnProperty', var.get(u'key')):
                    var.put(u'checker', var.get(u'shapeTypes').get(var.get(u'key')))
                    if var.get(u'checker').neg():
                        PyJsTempException = JsToPyException(var.get(u'Error').create((((((((((((Js(u'[SAN ERROR] ')+Js(u'Invalid data `'))+var.get(u'fullDataName'))+Js(u'` key `'))+var.get(u'key'))+Js(u'` '))+Js(u'supplied to `'))+var.get(u'componentName'))+Js(u'`. '))+Js(u'(`'))+var.get(u'key'))+Js(u'` is not defined in `DataTypes.exact`)'))))
                        raise PyJsTempException
                    if var.get(u'dataValue').contains(var.get(u'key')).neg():
                        PyJsTempException = JsToPyException(var.get(u'Error').create((((((((((((Js(u'[SAN ERROR] ')+Js(u'Invalid data `'))+var.get(u'fullDataName'))+Js(u'` key `'))+var.get(u'key'))+Js(u'` '))+Js(u'supplied to `'))+var.get(u'componentName'))+Js(u'`. '))+Js(u'(`'))+var.get(u'key'))+Js(u'` is marked `required` in `DataTypes.exact`)'))))
                        raise PyJsTempException
                    var.get(u'checker')(var.get(u'dataValue'), var.get(u'key'), var.get(u'componentName'), ((var.get(u'fullDataName')+Js(u'.'))+var.get(u'key')), var.get(u'secret'))
        PyJs_anonymous_15_._set_name(u'anonymous')
        return var.get(u'createChainableChecker')(PyJs_anonymous_15_)
    PyJsHoisted_createExactChecker_.func_name = u'createExactChecker'
    var.put(u'createExactChecker', PyJsHoisted_createExactChecker_)
    @Js
    def PyJsHoisted_inputOnCompositionEnd_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        if var.get(u"this").get(u'composing').neg():
            return var.get('undefined')
        var.get(u"this").put(u'composing', Js(0.0))
        var.get(u'trigger')(var.get(u"this"), Js(u'input'))
    PyJsHoisted_inputOnCompositionEnd_.func_name = u'inputOnCompositionEnd'
    var.put(u'inputOnCompositionEnd', PyJsHoisted_inputOnCompositionEnd_)
    @Js
    def PyJsHoisted_analyseExprDataHotspot_(expr, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'arguments':arguments}, var)
        var.registers([u'paths', u'refs', u'analyseExprs', u'expr'])
        @Js
        def PyJsHoisted_analyseExprs_(exprs, this, arguments, var=var):
            var = Scope({u'this':this, u'exprs':exprs, u'arguments':arguments}, var)
            var.registers([u'exprs'])
            @Js
            def PyJs_anonymous_172_(expr, this, arguments, var=var):
                var = Scope({u'this':this, u'expr':expr, u'arguments':arguments}, var)
                var.registers([u'expr'])
                var.put(u'refs', var.get(u'refs').callprop(u'concat', var.get(u'analyseExprDataHotspot')(var.get(u'expr'))))
            PyJs_anonymous_172_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'exprs'), PyJs_anonymous_172_)
        PyJsHoisted_analyseExprs_.func_name = u'analyseExprs'
        var.put(u'analyseExprs', PyJsHoisted_analyseExprs_)
        var.put(u'refs', Js([]))
        pass
        while 1:
            SWITCHED = False
            CONDITION = (var.get(u'expr').get(u'type'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(4.0)):
                SWITCHED = True
                var.put(u'paths', var.get(u'expr').get(u'paths'))
                var.get(u'refs').callprop(u'push', var.get(u'paths').get(u'0').get(u'value'))
                if (var.get(u'paths').get(u'length')>Js(1.0)):
                    var.get(u'refs').callprop(u'push', ((var.get(u'paths').get(u'0').get(u'value')+Js(u'.'))+(var.get(u'paths').get(u'1').get(u'value') or Js(u'*'))))
                var.get(u'analyseExprs')(var.get(u'paths').callprop(u'slice', Js(1.0)))
                break
            if SWITCHED or PyJsStrictEq(CONDITION, Js(9.0)):
                SWITCHED = True
                return var.get(u'analyseExprDataHotspot')(var.get(u'expr').get(u'expr'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(7.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(8.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(10.0)):
                SWITCHED = True
                var.get(u'analyseExprs')(var.get(u'expr').get(u'segs'))
                break
            if SWITCHED or PyJsStrictEq(CONDITION, Js(5.0)):
                SWITCHED = True
                var.put(u'refs', var.get(u'analyseExprDataHotspot')(var.get(u'expr').get(u'expr')))
                @Js
                def PyJs_anonymous_173_(filter, this, arguments, var=var):
                    var = Scope({u'filter':filter, u'this':this, u'arguments':arguments}, var)
                    var.registers([u'filter'])
                    var.get(u'analyseExprs')(var.get(u'filter').get(u'name').get(u'paths'))
                    var.get(u'analyseExprs')(var.get(u'filter').get(u'args'))
                PyJs_anonymous_173_._set_name(u'anonymous')
                var.get(u'each')(var.get(u'expr').get(u'filters'), PyJs_anonymous_173_)
                break
            SWITCHED = True
            break
        return var.get(u'refs')
    PyJsHoisted_analyseExprDataHotspot_.func_name = u'analyseExprDataHotspot'
    var.put(u'analyseExprDataHotspot', PyJsHoisted_analyseExprDataHotspot_)
    @Js
    def PyJsHoisted_changeExprCompare_(changeExpr, expr, data, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'data':data, u'arguments':arguments, u'changeExpr':changeExpr}, var)
        var.registers([u'paths', u'filterResult', u'i', u'pathsLen', u'l', u'data', u'expr', u'pathExprValue', u'pathExpr', u'result', u'changePaths', u'changeLen', u'changeExpr'])
        while 1:
            SWITCHED = False
            CONDITION = (var.get(u'expr').get(u'type'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(4.0)):
                SWITCHED = True
                var.put(u'paths', var.get(u'expr').get(u'paths'))
                var.put(u'pathsLen', var.get(u'paths').get(u'length'))
                var.put(u'changePaths', var.get(u'changeExpr').get(u'paths'))
                var.put(u'changeLen', var.get(u'changePaths').get(u'length'))
                var.put(u'result', Js(1.0))
                #for JS loop
                var.put(u'i', Js(0.0))
                while (var.get(u'i')<var.get(u'pathsLen')):
                    try:
                        var.put(u'pathExpr', var.get(u'paths').get(var.get(u'i')))
                        var.put(u'pathExprValue', var.get(u'pathExpr').get(u'value'))
                        if ((var.get(u'pathExprValue')==var.get(u"null")) and var.get(u'changeExprCompare')(var.get(u'changeExpr'), var.get(u'pathExpr'), var.get(u'data'))):
                            return Js(1.0)
                        if ((var.get(u'result') and (var.get(u'i')<var.get(u'changeLen'))) and ((var.get(u'pathExprValue') or var.get(u'evalExpr')(var.get(u'pathExpr'), var.get(u'data')))!=var.get(u'changePaths').get(var.get(u'i')).get(u'value'))):
                            var.put(u'result', Js(0.0))
                    finally:
                            (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
                if var.get(u'result'):
                    var.put(u'result', var.get(u'Math').callprop(u'max', Js(1.0), ((var.get(u'changeLen')-var.get(u'pathsLen'))+Js(2.0))))
                return var.get(u'result')
            if SWITCHED or PyJsStrictEq(CONDITION, Js(9.0)):
                SWITCHED = True
                return (Js(1.0) if var.get(u'changeExprCompare')(var.get(u'changeExpr'), var.get(u'expr').get(u'expr'), var.get(u'data')) else Js(0.0))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(7.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(8.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(10.0)):
                SWITCHED = True
                return var.get(u'changeExprCompareExprs')(var.get(u'changeExpr'), var.get(u'expr').get(u'segs'), var.get(u'data'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(12.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(11.0)):
                SWITCHED = True
                #for JS loop
                var.put(u'i', Js(0.0))
                var.put(u'l', var.get(u'expr').get(u'items').get(u'length'))
                while (var.get(u'i')<var.get(u'l')):
                    try:
                        if var.get(u'changeExprCompare')(var.get(u'changeExpr'), var.get(u'expr').get(u'items').get(var.get(u'i')).get(u'expr'), var.get(u'data')):
                            return Js(1.0)
                    finally:
                            (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
                return Js(0.0)
            if SWITCHED or PyJsStrictEq(CONDITION, Js(5.0)):
                SWITCHED = True
                if var.get(u'changeExprCompare')(var.get(u'changeExpr'), var.get(u'expr').get(u'expr'), var.get(u'data')).neg():
                    pass
                    @Js
                    def PyJs_anonymous_45_(filter, this, arguments, var=var):
                        var = Scope({u'filter':filter, u'this':this, u'arguments':arguments}, var)
                        var.registers([u'filter'])
                        var.put(u'filterResult', var.get(u'changeExprCompareExprs')(var.get(u'changeExpr'), var.get(u'filter').get(u'args'), var.get(u'data')))
                        return var.get(u'filterResult').neg()
                    PyJs_anonymous_45_._set_name(u'anonymous')
                    var.get(u'each')(var.get(u'expr').get(u'filters'), PyJs_anonymous_45_)
                    return (Js(1.0) if var.get(u'filterResult') else Js(0.0))
                return Js(1.0)
            if SWITCHED or PyJsStrictEq(CONDITION, Js(6.0)):
                SWITCHED = True
                if (var.get(u'changeExprCompareExprs')(var.get(u'changeExpr'), var.get(u'expr').get(u'name').get(u'paths'), var.get(u'data')) or var.get(u'changeExprCompareExprs')(var.get(u'changeExpr'), var.get(u'expr').get(u'args'), var.get(u'data'))):
                    return Js(1.0)
            SWITCHED = True
            break
        return Js(0.0)
    PyJsHoisted_changeExprCompare_.func_name = u'changeExprCompare'
    var.put(u'changeExprCompare', PyJsHoisted_changeExprCompare_)
    @Js
    def PyJsHoisted_elementDispose_(element, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'element':element}, var)
        var.registers([u'fn', u'len', u'element'])
        var.get(u'elementDisposeChildren')(var.get(u'element').get(u'children'), Js(1.0), Js(1.0))
        var.get(u'elementDisposeChildren')(var.get(u'element').get(u'implicitChildren'), Js(0.0), Js(1.0))
        var.put(u'len', var.get(u'element').get(u'_elFns').get(u'length'))
        while (var.put(u'len',Js(var.get(u'len').to_number())-Js(1))+Js(1)):
            var.put(u'fn', var.get(u'element').get(u'_elFns').get(var.get(u'len')))
            var.get(u'un')(var.get(u'element').get(u'el'), var.get(u'fn').get(u'0'), var.get(u'fn').get(u'1'), var.get(u'fn').get(u'2'))
        var.get(u'element').put(u'_elFns', var.get(u"null"))
        if (var.get(u'element').get(u'disposeNoDetach').neg() or var.get(u'element').get(u'parent').neg()):
            var.get(u'removeEl')(var.get(u'element').get(u'el'))
        if var.get(u'element').get(u'_toPhase'):
            var.get(u'element').callprop(u'_toPhase', Js(u'detached'))
        var.get(u'nodeDispose')(var.get(u'element'))
    PyJsHoisted_elementDispose_.func_name = u'elementDispose'
    var.put(u'elementDispose', PyJsHoisted_elementDispose_)
    @Js
    def PyJsHoisted_compileComponentSource_(sourceBuffer, component, extraProp, this, arguments, var=var):
        var = Scope({u'this':this, u'extraProp':extraProp, u'component':component, u'sourceBuffer':sourceBuffer, u'arguments':arguments}, var)
        var.registers([u'extraProp', u'component', u'key', u'eventDeclarations', u'sourceBuffer'])
        var.get(u'sourceBuffer').callprop(u'addRaw', var.get(u'genComponentContextCode')(var.get(u'component')))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'componentCtx.owner = parentCtx;'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'componentCtx.sourceSlots = sourceSlots;'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'data = extend(componentCtx.data, data);'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'for (var $i = 0; $i < componentCtx.computedNames.length; $i++) {'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'  var $computedName = componentCtx.computedNames[$i];'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'  data[$computedName] = componentCtx.computed[$computedName]();'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}'))
        var.put(u'extraProp', (var.get(u'extraProp') or Js(u'')))
        var.put(u'eventDeclarations', Js([]))
        for PyJsTemp in var.get(u'component').get(u'listeners'):
            var.put(u'key', PyJsTemp)
            if var.get(u'component').get(u'listeners').callprop(u'hasOwnProperty', var.get(u'key')):
                @Js
                def PyJs_anonymous_225_(listener, this, arguments, var=var):
                    var = Scope({u'listener':listener, u'this':this, u'arguments':arguments}, var)
                    var.registers([u'listener'])
                    if var.get(u'listener').get(u'declaration'):
                        var.get(u'eventDeclarations').callprop(u'push', var.get(u'listener').get(u'declaration'))
                PyJs_anonymous_225_._set_name(u'anonymous')
                var.get(u'each')(var.get(u'component').get(u'listeners').get(var.get(u'key')), PyJs_anonymous_225_)
        var.get(u'elementSourceCompiler').callprop(u'tagStart', var.get(u'sourceBuffer'), var.get(u'component').get(u'tagName'), var.get(u'component').get(u'aNode').get(u'props'), var.get(u'extraProp'), var.get(u'component').get(u'aNode').get(u'directives').get(u'bind'))
        if var.get(u'component').get(u'owner').neg():
            var.get(u'sourceBuffer').callprop(u'joinString', Js(u'<!--s-data:'))
            var.get(u'sourceBuffer').callprop(u'joinDataStringify')
            var.get(u'sourceBuffer').callprop(u'joinString', Js(u'-->'))
        var.get(u'elementSourceCompiler').callprop(u'inner', var.get(u'sourceBuffer'), var.get(u'component').get(u'aNode'), var.get(u'component'))
        var.get(u'elementSourceCompiler').callprop(u'tagEnd', var.get(u'sourceBuffer'), var.get(u'component').get(u'tagName'))
    PyJsHoisted_compileComponentSource_.func_name = u'compileComponentSource'
    var.put(u'compileComponentSource', PyJsHoisted_compileComponentSource_)
    @Js
    def PyJsHoisted_findMethod_(source, nameExpr, data, this, arguments, var=var):
        var = Scope({u'nameExpr':nameExpr, u'source':source, u'data':data, u'this':this, u'arguments':arguments}, var)
        var.registers([u'i', u'source', u'nameExpr', u'data', u'method'])
        var.put(u'method', var.get(u'source'))
        #for JS loop
        var.put(u'i', Js(0.0))
        while ((var.get(u'method')!=var.get(u"null")) and (var.get(u'i')<var.get(u'nameExpr').get(u'paths').get(u'length'))):
            try:
                var.put(u'method', var.get(u'method').get(var.get(u'evalExpr')(var.get(u'nameExpr').get(u'paths').get(var.get(u'i')), var.get(u'data'))))
            finally:
                    (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        return var.get(u'method')
    PyJsHoisted_findMethod_.func_name = u'findMethod'
    var.put(u'findMethod', PyJsHoisted_findMethod_)
    @Js
    def PyJsHoisted_guid_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        return ((Js(u'_')+var.get(u'guidPrefix'))+(var.put(u'guidIndex',Js(var.get(u'guidIndex').to_number())+Js(1))-Js(1)))
    PyJsHoisted_guid_.func_name = u'guid'
    var.put(u'guid', PyJsHoisted_guid_)
    @Js
    def PyJsHoisted_getDataType_(obj, this, arguments, var=var):
        var = Scope({u'this':this, u'obj':obj, u'arguments':arguments}, var)
        var.registers([u'obj'])
        if (var.get(u'obj') and PyJsStrictEq(var.get(u'obj').get(u'nodeType'),Js(1.0))):
            return Js(u'element')
        return var.get(u'Object').get(u'prototype').get(u'toString').callprop(u'call', var.get(u'obj')).callprop(u'slice', Js(8.0), (-Js(1.0))).callprop(u'toLowerCase')
    PyJsHoisted_getDataType_.func_name = u'getDataType'
    var.put(u'getDataType', PyJsHoisted_getDataType_)
    @Js
    def PyJsHoisted_readEqualityExpr_(walker, this, arguments, var=var):
        var = Scope({u'walker':walker, u'this':this, u'arguments':arguments}, var)
        var.registers([u'walker', u'expr', u'code'])
        var.put(u'expr', var.get(u'readRelationalExpr')(var.get(u'walker')))
        var.get(u'walker').callprop(u'goUntil')
        var.put(u'code', var.get(u'walker').callprop(u'currentCode'))
        while 1:
            SWITCHED = False
            CONDITION = (var.get(u'code'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(61.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(33.0)):
                SWITCHED = True
                if PyJsStrictEq(var.get(u'walker').callprop(u'nextCode'),Js(61.0)):
                    var.put(u'code', Js(61.0), u'+')
                    if PyJsStrictEq(var.get(u'walker').callprop(u'nextCode'),Js(61.0)):
                        var.put(u'code', Js(61.0), u'+')
                        var.get(u'walker').callprop(u'go', Js(1.0))
                    return Js({u'type':Js(8.0),u'operator':var.get(u'code'),u'segs':Js([var.get(u'expr'), var.get(u'readRelationalExpr')(var.get(u'walker'))])})
                var.get(u'walker').callprop(u'go', (-Js(1.0)))
            SWITCHED = True
            break
        return var.get(u'expr')
    PyJsHoisted_readEqualityExpr_.func_name = u'readEqualityExpr'
    var.put(u'readEqualityExpr', PyJsHoisted_readEqualityExpr_)
    @Js
    def PyJsHoisted_contains_(array, value, this, arguments, var=var):
        var = Scope({u'this':this, u'array':array, u'arguments':arguments, u'value':value}, var)
        var.registers([u'array', u'result', u'value'])
        var.put(u'result', Js(False))
        @Js
        def PyJs_anonymous_1_(item, this, arguments, var=var):
            var = Scope({u'this':this, u'item':item, u'arguments':arguments}, var)
            var.registers([u'item'])
            var.put(u'result', PyJsStrictEq(var.get(u'item'),var.get(u'value')))
            return var.get(u'result').neg()
        PyJs_anonymous_1_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'array'), PyJs_anonymous_1_)
        return var.get(u'result')
    PyJsHoisted_contains_.func_name = u'contains'
    var.put(u'contains', PyJsHoisted_contains_)
    @Js
    def PyJsHoisted_trigger_(el, eventName, this, arguments, var=var):
        var = Scope({u'eventName':eventName, u'el':el, u'this':this, u'arguments':arguments}, var)
        var.registers([u'eventName', u'el', u'event'])
        var.put(u'event', var.get(u'document').callprop(u'createEvent', Js(u'HTMLEvents')))
        var.get(u'event').callprop(u'initEvent', var.get(u'eventName'), Js(True), Js(True))
        var.get(u'el').callprop(u'dispatchEvent', var.get(u'event'))
    PyJsHoisted_trigger_.func_name = u'trigger'
    var.put(u'trigger', PyJsHoisted_trigger_)
    @Js
    def PyJsHoisted_elementOwnDetach_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        var.get(u'elementLeave')(var.get(u"this"))
    PyJsHoisted_elementOwnDetach_.func_name = u'elementOwnDetach'
    var.put(u'elementOwnDetach', PyJsHoisted_elementOwnDetach_)
    @Js
    def PyJsHoisted_createOneOfTypeChecker_(expectedEnumOfTypeValues, this, arguments, var=var):
        var = Scope({u'this':this, u'expectedEnumOfTypeValues':expectedEnumOfTypeValues, u'arguments':arguments}, var)
        var.registers([u'expectedEnumOfTypeValues'])
        @Js
        def PyJs_anonymous_13_(data, dataName, componentName, fullDataName, this, arguments, var=var):
            var = Scope({u'dataName':dataName, u'arguments':arguments, u'this':this, u'componentName':componentName, u'data':data, u'fullDataName':fullDataName}, var)
            var.registers([u'i', u'componentName', u'dataValue', u'len', u'dataName', u'checker', u'data', u'fullDataName'])
            if PyJsStrictNeq(var.get(u'getDataType')(var.get(u'expectedEnumOfTypeValues')),Js(u'array')):
                PyJsTempException = JsToPyException(var.get(u'Error').create(((((((Js(u'[SAN ERROR] ')+Js(u'Data `'))+var.get(u'dataName'))+Js(u'` of `'))+var.get(u'componentName'))+Js(u'` has invalid '))+Js(u'DataType notation inside `oneOf`, array is expected.'))))
                raise PyJsTempException
            var.put(u'dataValue', var.get(u'data').get(var.get(u'dataName')))
            #for JS loop
            var.put(u'i', Js(0.0))
            var.put(u'len', var.get(u'expectedEnumOfTypeValues').get(u'length'))
            while (var.get(u'i')<var.get(u'len')):
                try:
                    var.put(u'checker', var.get(u'expectedEnumOfTypeValues').get(var.get(u'i')))
                    if PyJsStrictNeq(var.get(u'checker',throw=False).typeof(),Js(u'function')):
                        continue
                    try:
                        var.get(u'checker')(var.get(u'data'), var.get(u'dataName'), var.get(u'componentName'), var.get(u'fullDataName'))
                        return var.get('undefined')
                    except PyJsException as PyJsTempException:
                        PyJsHolder_65_15469240 = var.own.get(u'e')
                        var.force_own_put(u'e', PyExceptionToJs(PyJsTempException))
                        try:
                            pass
                        finally:
                            if PyJsHolder_65_15469240 is not None:
                                var.own[u'e'] = PyJsHolder_65_15469240
                            else:
                                del var.own[u'e']
                            del PyJsHolder_65_15469240
                finally:
                        (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
            PyJsTempException = JsToPyException(var.get(u'Error').create(((((((((((Js(u'[SAN ERROR] ')+Js(u'Invalid '))+var.get(u'componentName'))+Js(u' data `'))+var.get(u'dataName'))+Js(u'` of value'))+Js(u'(`'))+var.get(u'dataValue'))+Js(u'` supplied to '))+var.get(u'componentName'))+Js(u')'))))
            raise PyJsTempException
        PyJs_anonymous_13_._set_name(u'anonymous')
        return var.get(u'createChainableChecker')(PyJs_anonymous_13_)
    PyJsHoisted_createOneOfTypeChecker_.func_name = u'createOneOfTypeChecker'
    var.put(u'createOneOfTypeChecker', PyJsHoisted_createOneOfTypeChecker_)
    @Js
    def PyJsHoisted_createShapeChecker_(shapeTypes, this, arguments, var=var):
        var = Scope({u'this':this, u'shapeTypes':shapeTypes, u'arguments':arguments}, var)
        var.registers([u'shapeTypes'])
        @Js
        def PyJs_anonymous_11_(data, dataName, componentName, fullDataName, this, arguments, var=var):
            var = Scope({u'dataName':dataName, u'arguments':arguments, u'this':this, u'componentName':componentName, u'data':data, u'fullDataName':fullDataName}, var)
            var.registers([u'dataName', u'dataType', u'componentName', u'dataValue', u'shapeKeyName', u'checker', u'data', u'fullDataName'])
            if PyJsStrictNeq(var.get(u'getDataType')(var.get(u'shapeTypes')),Js(u'object')):
                PyJsTempException = JsToPyException(var.get(u'Error').create(((((((Js(u'[SAN ERROR] ')+Js(u'Data `'))+var.get(u'fullDataName'))+Js(u'` of `'))+var.get(u'componentName'))+Js(u'` has invalid '))+Js(u'DataType notation inside `shape`, expected `object`'))))
                raise PyJsTempException
            var.put(u'dataValue', var.get(u'data').get(var.get(u'dataName')))
            var.put(u'dataType', var.get(u'getDataType')(var.get(u'dataValue')))
            if PyJsStrictNeq(var.get(u'dataType'),Js(u'object')):
                PyJsTempException = JsToPyException(var.get(u'Error').create((((((((((((Js(u'[SAN ERROR] ')+Js(u'Invalid '))+var.get(u'componentName'))+Js(u' data `'))+var.get(u'fullDataName'))+Js(u'` of type'))+Js(u'('))+var.get(u'dataType'))+Js(u' supplied to '))+var.get(u'componentName'))+Js(u', '))+Js(u'expected object)'))))
                raise PyJsTempException
            for PyJsTemp in var.get(u'shapeTypes'):
                var.put(u'shapeKeyName', PyJsTemp)
                if var.get(u'shapeTypes').callprop(u'hasOwnProperty', var.get(u'shapeKeyName')):
                    var.put(u'checker', var.get(u'shapeTypes').get(var.get(u'shapeKeyName')))
                    if PyJsStrictEq(var.get(u'checker',throw=False).typeof(),Js(u'function')):
                        var.get(u'checker')(var.get(u'dataValue'), var.get(u'shapeKeyName'), var.get(u'componentName'), ((var.get(u'fullDataName')+Js(u'.'))+var.get(u'shapeKeyName')))
        PyJs_anonymous_11_._set_name(u'anonymous')
        return var.get(u'createChainableChecker')(PyJs_anonymous_11_)
    PyJsHoisted_createShapeChecker_.func_name = u'createShapeChecker'
    var.put(u'createShapeChecker', PyJsHoisted_createShapeChecker_)
    @Js
    def PyJsHoisted_Data_(data, parent, this, arguments, var=var):
        var = Scope({u'this':this, u'data':data, u'arguments':arguments, u'parent':parent}, var)
        var.registers([u'data', u'parent'])
        var.get(u"this").put(u'id', var.get(u'guid')())
        var.get(u"this").put(u'parent', var.get(u'parent'))
        var.get(u"this").put(u'raw', (var.get(u'data') or Js({})))
        var.get(u"this").put(u'listeners', Js([]))
    PyJsHoisted_Data_.func_name = u'Data'
    var.put(u'Data', PyJsHoisted_Data_)
    @Js
    def PyJsHoisted_empty_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        pass
    PyJsHoisted_empty_.func_name = u'empty'
    var.put(u'empty', PyJsHoisted_empty_)
    @Js
    def PyJsHoisted_getPropHandler_(tagName, attrName, this, arguments, var=var):
        var = Scope({u'attrName':attrName, u'this':this, u'arguments':arguments, u'tagName':tagName}, var)
        var.registers([u'attrName', u'tagPropHandlers', u'tagName', u'propHandler'])
        if var.get(u'svgTags').get(var.get(u'tagName')):
            return var.get(u'svgPropHandler')
        var.put(u'tagPropHandlers', var.get(u'elementPropHandlers').get(var.get(u'tagName')))
        if var.get(u'tagPropHandlers').neg():
            var.put(u'tagPropHandlers', var.get(u'elementPropHandlers').put(var.get(u'tagName'), Js({})))
        var.put(u'propHandler', var.get(u'tagPropHandlers').get(var.get(u'attrName')))
        if var.get(u'propHandler').neg():
            var.put(u'propHandler', (var.get(u'defaultElementPropHandlers').get(var.get(u'attrName')) or var.get(u'defaultElementPropHandler')))
            var.get(u'tagPropHandlers').put(var.get(u'attrName'), var.get(u'propHandler'))
        return var.get(u'propHandler')
    PyJsHoisted_getPropHandler_.func_name = u'getPropHandler'
    var.put(u'getPropHandler', PyJsHoisted_getPropHandler_)
    @Js
    def PyJsHoisted_genComponentContextCode_(component, this, arguments, var=var):
        var = Scope({u'this':this, u'component':component, u'arguments':arguments}, var)
        var.registers([u'code', u'computed', u'component', u'computedCode', u'filterCode', u'filter', u'key', u'ComponentProto'])
        var.put(u'code', Js([Js(u'var componentCtx = {')]))
        var.put(u'ComponentProto', var.get(u'component').get(u'constructor').get(u'prototype'))
        @Js
        def PyJs_anonymous_232_(protoMemberKey, this, arguments, var=var):
            var = Scope({u'this':this, u'protoMemberKey':protoMemberKey, u'arguments':arguments}, var)
            var.registers([u'protoMember', u'protoMemberKey'])
            var.put(u'protoMember', var.get(u'ComponentProto').get(var.get(u'protoMemberKey')))
            if (var.get(u'COMPONENT_RESERVED_MEMBERS').get(var.get(u'protoMemberKey')) or var.get(u'protoMember').neg()):
                return var.get('undefined')
            while 1:
                SWITCHED = False
                CONDITION = (var.get(u'protoMember',throw=False).typeof())
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'function')):
                    SWITCHED = True
                    var.get(u'code').callprop(u'push', (((var.get(u'protoMemberKey')+Js(u': '))+var.get(u'protoMember').callprop(u'toString'))+Js(u',')))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'object')):
                    SWITCHED = True
                    var.get(u'code').callprop(u'push', (var.get(u'protoMemberKey')+Js(u':')))
                    if var.get(u'protoMember').instanceof(var.get(u'Array')):
                        var.get(u'code').callprop(u'push', Js(u'['))
                        @Js
                        def PyJs_anonymous_233_(item, this, arguments, var=var):
                            var = Scope({u'this':this, u'item':item, u'arguments':arguments}, var)
                            var.registers([u'item'])
                            var.get(u'code').callprop(u'push', (var.get(u'item').callprop(u'toString') if PyJsStrictEq(var.get(u'item',throw=False).typeof(),Js(u'function')) else (Js(u'')+Js(u','))))
                        PyJs_anonymous_233_._set_name(u'anonymous')
                        var.get(u'protoMember').callprop(u'forEach', PyJs_anonymous_233_)
                        var.get(u'code').callprop(u'push', Js(u']'))
                    else:
                        var.get(u'code').callprop(u'push', Js(u'{'))
                        @Js
                        def PyJs_anonymous_234_(itemKey, this, arguments, var=var):
                            var = Scope({u'this':this, u'itemKey':itemKey, u'arguments':arguments}, var)
                            var.registers([u'item', u'itemKey'])
                            var.put(u'item', var.get(u'protoMember').get(var.get(u'itemKey')))
                            if PyJsStrictEq(var.get(u'item',throw=False).typeof(),Js(u'function')):
                                var.get(u'code').callprop(u'push', (((var.get(u'itemKey')+Js(u':'))+var.get(u'item').callprop(u'toString'))+Js(u',')))
                        PyJs_anonymous_234_._set_name(u'anonymous')
                        var.get(u'Object').callprop(u'keys', var.get(u'protoMember')).callprop(u'forEach', PyJs_anonymous_234_)
                        var.get(u'code').callprop(u'push', Js(u'}'))
                    var.get(u'code').callprop(u'push', Js(u','))
                SWITCHED = True
                break
        PyJs_anonymous_232_._set_name(u'anonymous')
        var.get(u'Object').callprop(u'keys', var.get(u'ComponentProto')).callprop(u'forEach', PyJs_anonymous_232_)
        var.get(u'code').callprop(u'push', Js(u'sourceSlots: [],'))
        var.get(u'code').callprop(u'push', Js(u'filters: {'))
        var.put(u'filterCode', Js([]))
        for PyJsTemp in var.get(u'component').get(u'filters'):
            var.put(u'key', PyJsTemp)
            if var.get(u'component').get(u'filters').callprop(u'hasOwnProperty', var.get(u'key')):
                var.put(u'filter', var.get(u'component').get(u'filters').get(var.get(u'key')))
                if PyJsStrictEq(var.get(u'filter',throw=False).typeof(),Js(u'function')):
                    var.get(u'filterCode').callprop(u'push', ((var.get(u'key')+Js(u': '))+var.get(u'filter').callprop(u'toString')))
        var.get(u'code').callprop(u'push', var.get(u'filterCode').callprop(u'join', Js(u',')))
        var.get(u'code').callprop(u'push', Js(u'},'))
        var.get(u'code').callprop(u'push', Js(u'callFilter: function (name, args) {'), Js(u'    var filter = this.filters[name] || DEFAULT_FILTERS[name];'), Js(u'    if (typeof filter === "function") {'), Js(u'        return filter.apply(this, args);'), Js(u'    }'), Js(u'},'))
        var.get(u'code').callprop(u'push', Js(u'computed: {'))
        var.put(u'computedCode', Js([]))
        for PyJsTemp in var.get(u'component').get(u'computed'):
            var.put(u'key', PyJsTemp)
            if var.get(u'component').get(u'computed').callprop(u'hasOwnProperty', var.get(u'key')):
                var.put(u'computed', var.get(u'component').get(u'computed').get(var.get(u'key')))
                if PyJsStrictEq(var.get(u'computed',throw=False).typeof(),Js(u'function')):
                    @Js
                    def PyJs_anonymous_235_(match, exprLiteral, this, arguments, var=var):
                        var = Scope({u'this':this, u'exprLiteral':exprLiteral, u'arguments':arguments, u'match':match}, var)
                        var.registers([u'expr', u'exprStr', u'match', u'exprLiteral'])
                        var.put(u'exprStr', var.get(u'Function').create((Js(u'return ')+var.get(u'exprLiteral')))())
                        var.put(u'expr', var.get(u'parseExpr')(var.get(u'exprStr')))
                        return var.get(u'compileExprSource').callprop(u'expr', var.get(u'expr'))
                    PyJs_anonymous_235_._set_name(u'anonymous')
                    var.get(u'computedCode').callprop(u'push', ((var.get(u'key')+Js(u': '))+var.get(u'computed').callprop(u'toString').callprop(u'replace', JsRegExp(u'/this.data.get\\(([^\\)]+)\\)/g'), PyJs_anonymous_235_)))
        var.get(u'code').callprop(u'push', var.get(u'computedCode').callprop(u'join', Js(u',')))
        var.get(u'code').callprop(u'push', Js(u'},'))
        var.get(u'code').callprop(u'push', Js(u'computedNames: ['))
        var.put(u'computedCode', Js([]))
        for PyJsTemp in var.get(u'component').get(u'computed'):
            var.put(u'key', PyJsTemp)
            if var.get(u'component').get(u'computed').callprop(u'hasOwnProperty', var.get(u'key')):
                var.put(u'computed', var.get(u'component').get(u'computed').get(var.get(u'key')))
                if PyJsStrictEq(var.get(u'computed',throw=False).typeof(),Js(u'function')):
                    var.get(u'computedCode').callprop(u'push', ((Js(u'"')+var.get(u'key'))+Js(u'"')))
        var.get(u'code').callprop(u'push', var.get(u'computedCode').callprop(u'join', Js(u',')))
        var.get(u'code').callprop(u'push', Js(u'],'))
        var.get(u'code').callprop(u'push', ((Js(u'data: ')+var.get(u'stringifier').callprop(u'any', var.get(u'component').get(u'data').callprop(u'get')))+Js(u',')))
        var.get(u'code').callprop(u'push', ((Js(u'tagName: "')+var.get(u'component').get(u'tagName'))+Js(u'"')))
        var.get(u'code').callprop(u'push', Js(u'};'))
        return var.get(u'code').callprop(u'join', Js(u'\n'))
    PyJsHoisted_genComponentContextCode_.func_name = u'genComponentContextCode'
    var.put(u'genComponentContextCode', PyJsHoisted_genComponentContextCode_)
    @Js
    def PyJsHoisted_ForNode_(aNode, owner, scope, parent, reverseWalker, this, arguments, var=var):
        var = Scope({u'reverseWalker':reverseWalker, u'aNode':aNode, u'arguments':arguments, u'parent':parent, u'owner':owner, u'scope':scope, u'this':this}, var)
        var.registers([u'me', u'reverseWalker', u'parent', u'aNode', u'owner', u'scope'])
        var.get(u"this").put(u'aNode', var.get(u'aNode'))
        var.get(u"this").put(u'owner', var.get(u'owner'))
        var.get(u"this").put(u'scope', var.get(u'scope'))
        var.get(u"this").put(u'parent', var.get(u'parent'))
        var.get(u"this").put(u'parentComponent', (var.get(u'parent') if PyJsStrictEq(var.get(u'parent').get(u'nodeType'),Js(5.0)) else var.get(u'parent').get(u'parentComponent')))
        var.get(u"this").put(u'id', var.get(u'guid')())
        var.get(u"this").put(u'children', Js([]))
        def PyJs_LONG_97_(var=var):
            return var.get(u"this").put(u'itemANode', var.get(u'createANode')(Js({u'children':var.get(u'aNode').get(u'children'),u'props':var.get(u'aNode').get(u'props'),u'events':var.get(u'aNode').get(u'events'),u'tagName':var.get(u'aNode').get(u'tagName'),u'vars':var.get(u'aNode').get(u'vars'),u'hotspot':var.get(u'aNode').get(u'hotspot'),u'directives':var.get(u'cloneDirectives')(var.get(u'aNode').get(u'directives'), Js({u'for':Js(1.0)}))})))
        PyJs_LONG_97_()
        var.get(u"this").put(u'param', var.get(u'aNode').get(u'directives').get(u'for'))
        if var.get(u'reverseWalker'):
            var.put(u'me', var.get(u"this"))
            var.get(u"this").put(u'listData', var.get(u'evalExpr')(var.get(u"this").get(u'param').get(u'value'), var.get(u"this").get(u'scope'), var.get(u"this").get(u'owner')))
            @Js
            def PyJs_anonymous_98_(item, i, this, arguments, var=var):
                var = Scope({u'i':i, u'item':item, u'this':this, u'arguments':arguments}, var)
                var.registers([u'i', u'item', u'itemScope', u'child'])
                var.put(u'itemScope', var.get(u'ForItemData').create(var.get(u'me'), var.get(u'item'), var.get(u'i')))
                var.put(u'child', var.get(u'createReverseNode')(var.get(u'me').get(u'itemANode'), var.get(u'reverseWalker'), var.get(u'me'), var.get(u'itemScope')))
                var.get(u'me').get(u'children').callprop(u'push', var.get(u'child'))
            PyJs_anonymous_98_._set_name(u'anonymous')
            var.get(u'eachForData')(var.get(u"this"), PyJs_anonymous_98_)
            var.get(u"this").callprop(u'_create')
            var.get(u'insertBefore')(var.get(u"this").get(u'el'), var.get(u'reverseWalker').get(u'target'), var.get(u'reverseWalker').get(u'current'))
    PyJsHoisted_ForNode_.func_name = u'ForNode'
    var.put(u'ForNode', PyJsHoisted_ForNode_)
    @Js
    def PyJsHoisted_ComponentLoader_(load, placeholder, fallback, this, arguments, var=var):
        var = Scope({u'load':load, u'this':this, u'fallback':fallback, u'placeholder':placeholder, u'arguments':arguments}, var)
        var.registers([u'load', u'fallback', u'placeholder'])
        var.get(u"this").put(u'load', var.get(u'load'))
        var.get(u"this").put(u'placeholder', var.get(u'placeholder'))
        var.get(u"this").put(u'fallback', var.get(u'fallback'))
        var.get(u"this").put(u'listeners', Js([]))
    PyJsHoisted_ComponentLoader_.func_name = u'ComponentLoader'
    var.put(u'ComponentLoader', PyJsHoisted_ComponentLoader_)
    @Js
    def PyJsHoisted_handleProp_(element, value, prop, this, arguments, var=var):
        var = Scope({u'this':this, u'prop':prop, u'arguments':arguments, u'value':value, u'element':element}, var)
        var.registers([u'prop', u'name', u'value', u'element'])
        var.put(u'name', var.get(u'prop').get(u'name'))
        var.get(u'getPropHandler')(var.get(u'element').get(u'tagName'), var.get(u'name')).callprop(u'prop', var.get(u'element').get(u'el'), var.get(u'value'), var.get(u'name'), var.get(u'element'), var.get(u'prop'))
    PyJsHoisted_handleProp_.func_name = u'handleProp'
    var.put(u'handleProp', PyJsHoisted_handleProp_)
    @Js
    def PyJsHoisted_changesIsInDataRef_(changes, dataRef, this, arguments, var=var):
        var = Scope({u'dataRef':dataRef, u'this':this, u'changes':changes, u'arguments':arguments}, var)
        var.registers([u'i', u'paths', u'dataRef', u'changes', u'change'])
        #for JS loop
        var.put(u'i', Js(0.0))
        while (var.get(u'i')<var.get(u'changes').get(u'length')):
            try:
                var.put(u'change', var.get(u'changes').get(var.get(u'i')))
                if var.get(u'change').get(u'overview').neg():
                    var.put(u'paths', var.get(u'change').get(u'expr').get(u'paths'))
                    var.get(u'change').put(u'overview', var.get(u'paths').get(u'0').get(u'value'))
                    if (var.get(u'paths').get(u'length')>Js(1.0)):
                        var.get(u'change').put(u'extOverview', ((var.get(u'paths').get(u'0').get(u'value')+Js(u'.'))+var.get(u'paths').get(u'1').get(u'value')))
                        var.get(u'change').put(u'wildOverview', (var.get(u'paths').get(u'0').get(u'value')+Js(u'.*')))
                if ((var.get(u'dataRef').get(var.get(u'change').get(u'overview')) or (var.get(u'change').get(u'wildOverview') and var.get(u'dataRef').get(var.get(u'change').get(u'wildOverview')))) or (var.get(u'change').get(u'extOverview') and var.get(u'dataRef').get(var.get(u'change').get(u'extOverview')))):
                    return Js(True)
            finally:
                    (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
    PyJsHoisted_changesIsInDataRef_.func_name = u'changesIsInDataRef'
    var.put(u'changesIsInDataRef', PyJsHoisted_changesIsInDataRef_)
    @Js
    def PyJsHoisted_createForDirectiveChild_(forElement, item, index, this, arguments, var=var):
        var = Scope({u'this':this, u'forElement':forElement, u'index':index, u'arguments':arguments, u'item':item}, var)
        var.registers([u'forElement', u'index', u'itemScope', u'item'])
        var.put(u'itemScope', var.get(u'ForItemData').create(var.get(u'forElement'), var.get(u'item'), var.get(u'index')))
        return var.get(u'createNode')(var.get(u'forElement').get(u'itemANode'), var.get(u'forElement'), var.get(u'itemScope'))
    PyJsHoisted_createForDirectiveChild_.func_name = u'createForDirectiveChild'
    var.put(u'createForDirectiveChild', PyJsHoisted_createForDirectiveChild_)
    @Js
    def PyJsHoisted_serializeStump_(type, content, this, arguments, var=var):
        var = Scope({u'content':content, u'this':this, u'type':type, u'arguments':arguments}, var)
        var.registers([u'content', u'type'])
        return (((Js(u'<!--s-')+var.get(u'type'))+((Js(u':')+var.get(u'content')) if var.get(u'content') else Js(u'')))+Js(u'-->'))
    PyJsHoisted_serializeStump_.func_name = u'serializeStump'
    var.put(u'serializeStump', PyJsHoisted_serializeStump_)
    @Js
    def PyJsHoisted_warn_(message, this, arguments, var=var):
        var = Scope({u'this':this, u'message':message, u'arguments':arguments}, var)
        var.registers([u'message'])
        var.put(u'message', (Js(u'[SAN WARNING] ')+var.get(u'message')))
        if (PyJsStrictEq(var.get(u'console',throw=False).typeof(),Js(u'object')) and var.get(u'console').get(u'warn')):
            var.get(u'console').callprop(u'warn', var.get(u'message'))
        else:
            @Js
            def PyJs_anonymous_74_(this, arguments, var=var):
                var = Scope({u'this':this, u'arguments':arguments}, var)
                var.registers([])
                PyJsTempException = JsToPyException(var.get(u'Error').create(var.get(u'message')))
                raise PyJsTempException
            PyJs_anonymous_74_._set_name(u'anonymous')
            var.get(u'setTimeout')(PyJs_anonymous_74_, Js(0.0))
    PyJsHoisted_warn_.func_name = u'warn'
    var.put(u'warn', PyJsHoisted_warn_)
    @Js
    def PyJsHoisted_elementInitTagName_(node, this, arguments, var=var):
        var = Scope({u'node':node, u'this':this, u'arguments':arguments}, var)
        var.registers([u'node'])
        var.get(u'node').put(u'tagName', ((var.get(u'node').get(u'tagName') or var.get(u'node').get(u'aNode').get(u'tagName')) or Js(u'div')))
        if (var.get(u'ieOldThan9') and (var.get(u'node').get(u'tagName').callprop(u'indexOf', Js(u'-'))>Js(0.0))):
            var.get(u'node').put(u'tagName', Js(u'div'))
    PyJsHoisted_elementInitTagName_.func_name = u'elementInitTagName'
    var.put(u'elementInitTagName', PyJsHoisted_elementInitTagName_)
    @Js
    def PyJsHoisted_readCall_(walker, defaultArgs, this, arguments, var=var):
        var = Scope({u'walker':walker, u'this':this, u'arguments':arguments, u'defaultArgs':defaultArgs}, var)
        var.registers([u'walker', u'args', u'result', u'defaultArgs'])
        var.get(u'walker').callprop(u'goUntil')
        var.put(u'result', var.get(u'readAccessor')(var.get(u'walker')))
        pass
        if var.get(u'walker').callprop(u'goUntil', Js(40.0)):
            var.put(u'args', Js([]))
            while var.get(u'walker').callprop(u'goUntil', Js(41.0)).neg():
                var.get(u'args').callprop(u'push', var.get(u'readTertiaryExpr')(var.get(u'walker')))
                var.get(u'walker').callprop(u'goUntil', Js(44.0))
        else:
            if var.get(u'defaultArgs'):
                var.put(u'args', var.get(u'defaultArgs'))
        if var.get(u'args'):
            var.put(u'result', Js({u'type':Js(6.0),u'name':var.get(u'result'),u'args':var.get(u'args')}))
        return var.get(u'result')
    PyJsHoisted_readCall_.func_name = u'readCall'
    var.put(u'readCall', PyJsHoisted_readCall_)
    @Js
    def PyJsHoisted_Walker_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'source'])
        var.get(u"this").put(u'source', var.get(u'source'))
        var.get(u"this").put(u'len', var.get(u"this").get(u'source').get(u'length'))
        var.get(u"this").put(u'index', Js(0.0))
    PyJsHoisted_Walker_.func_name = u'Walker'
    var.put(u'Walker', PyJsHoisted_Walker_)
    @Js
    def PyJsHoisted_parseInterp_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'walker', u'source', u'interp', u'callExpr'])
        var.put(u'walker', var.get(u'Walker').create(var.get(u'source')))
        var.put(u'interp', Js({u'type':Js(5.0),u'expr':var.get(u'readTertiaryExpr')(var.get(u'walker')),u'filters':Js([]),u'raw':var.get(u'source')}))
        while var.get(u'walker').callprop(u'goUntil', Js(124.0)):
            var.put(u'callExpr', var.get(u'readCall')(var.get(u'walker'), Js([])))
            while 1:
                SWITCHED = False
                CONDITION = (var.get(u'callExpr').get(u'name').get(u'paths').get(u'0').get(u'value'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'html')):
                    SWITCHED = True
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'raw')):
                    SWITCHED = True
                    var.get(u'interp').put(u'original', Js(1.0))
                    break
                if True:
                    SWITCHED = True
                    var.get(u'interp').get(u'filters').callprop(u'push', var.get(u'callExpr'))
                SWITCHED = True
                break
        return var.get(u'interp')
    PyJsHoisted_parseInterp_.func_name = u'parseInterp'
    var.put(u'parseInterp', PyJsHoisted_parseInterp_)
    @Js
    def PyJsHoisted_readAccessor_(walker, this, arguments, var=var):
        var = Scope({u'walker':walker, u'this':this, u'arguments':arguments}, var)
        var.registers([u'walker', u'firstSeg', u'result'])
        var.put(u'firstSeg', var.get(u'readIdent')(var.get(u'walker')))
        while 1:
            SWITCHED = False
            CONDITION = (var.get(u'firstSeg'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'true')):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'false')):
                SWITCHED = True
                return Js({u'type':Js(3.0),u'value':PyJsStrictEq(var.get(u'firstSeg'),Js(u'true'))})
            SWITCHED = True
            break
        var.put(u'result', var.get(u'createAccessor')(Js([Js({u'type':Js(1.0),u'value':var.get(u'firstSeg')})])))
        class JS_CONTINUE_LABEL_6163636573736f724c6f6f70(Exception): pass
        class JS_BREAK_LABEL_6163636573736f724c6f6f70(Exception): pass
        try:
            while Js(1.0):
                try:
                    while 1:
                        SWITCHED = False
                        CONDITION = (var.get(u'walker').callprop(u'currentCode'))
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(46.0)):
                            SWITCHED = True
                            var.get(u'walker').callprop(u'go', Js(1.0))
                            var.get(u'result').get(u'paths').callprop(u'push', Js({u'type':Js(1.0),u'value':var.get(u'readIdent')(var.get(u'walker'))}))
                            break
                        if SWITCHED or PyJsStrictEq(CONDITION, Js(91.0)):
                            SWITCHED = True
                            var.get(u'walker').callprop(u'go', Js(1.0))
                            var.get(u'result').get(u'paths').callprop(u'push', var.get(u'readTertiaryExpr')(var.get(u'walker')))
                            var.get(u'walker').callprop(u'goUntil', Js(93.0))
                            break
                        if True:
                            SWITCHED = True
                            raise JS_BREAK_LABEL_6163636573736f724c6f6f70("Breaked")
                        SWITCHED = True
                        break
                except JS_CONTINUE_LABEL_6163636573736f724c6f6f70:
                    pass
        except JS_BREAK_LABEL_6163636573736f724c6f6f70:
            pass
        return var.get(u'result')
    PyJsHoisted_readAccessor_.func_name = u'readAccessor'
    var.put(u'readAccessor', PyJsHoisted_readAccessor_)
    @Js
    def PyJsHoisted_elementAttach_(element, parentEl, beforeEl, this, arguments, var=var):
        var = Scope({u'this':this, u'parentEl':parentEl, u'arguments':arguments, u'beforeEl':beforeEl, u'element':element}, var)
        var.registers([u'parentEl', u'htmlDirective', u'beforeEl', u'element'])
        var.get(u'element').callprop(u'_create')
        var.get(u'insertBefore')(var.get(u'element').get(u'el'), var.get(u'parentEl'), var.get(u'beforeEl'))
        if var.get(u'element').get(u'_contentReady').neg():
            var.put(u'htmlDirective', var.get(u'element').get(u'aNode').get(u'directives').get(u'html'))
            if var.get(u'htmlDirective'):
                var.get(u'element').get(u'el').put(u'innerHTML', var.get(u'evalExpr')(var.get(u'htmlDirective').get(u'value'), var.get(u'element').get(u'scope'), var.get(u'element').get(u'owner')))
            else:
                var.get(u'genElementChildren')(var.get(u'element'))
            var.get(u'element').put(u'_contentReady', Js(1.0))
    PyJsHoisted_elementAttach_.func_name = u'elementAttach'
    var.put(u'elementAttach', PyJsHoisted_elementAttach_)
    @Js
    def PyJsHoisted_changeExprCompareExprs_(changeExpr, exprs, data, this, arguments, var=var):
        var = Scope({u'this':this, u'exprs':exprs, u'data':data, u'arguments':arguments, u'changeExpr':changeExpr}, var)
        var.registers([u'i', u'exprs', u'data', u'l', u'changeExpr'])
        #for JS loop
        var.put(u'i', Js(0.0))
        var.put(u'l', var.get(u'exprs').get(u'length'))
        while (var.get(u'i')<var.get(u'l')):
            try:
                if var.get(u'changeExprCompare')(var.get(u'changeExpr'), var.get(u'exprs').get(var.get(u'i')), var.get(u'data')):
                    return Js(1.0)
            finally:
                    (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        return Js(0.0)
    PyJsHoisted_changeExprCompareExprs_.func_name = u'changeExprCompareExprs'
    var.put(u'changeExprCompareExprs', PyJsHoisted_changeExprCompareExprs_)
    @Js
    def PyJsHoisted_camelComponentBinds_(binds, this, arguments, var=var):
        var = Scope({u'this':this, u'binds':binds, u'arguments':arguments}, var)
        var.registers([u'binds', u'result'])
        var.put(u'result', Js([]))
        @Js
        def PyJs_anonymous_174_(bind, this, arguments, var=var):
            var = Scope({u'this':this, u'bind':bind, u'arguments':arguments}, var)
            var.registers([u'bind'])
            var.get(u'result').callprop(u'push', Js({u'name':var.get(u'kebab2camel')(var.get(u'bind').get(u'name')),u'expr':var.get(u'bind').get(u'expr'),u'x':var.get(u'bind').get(u'x'),u'raw':var.get(u'bind').get(u'raw')}))
        PyJs_anonymous_174_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'binds'), PyJs_anonymous_174_)
        return var.get(u'result')
    PyJsHoisted_camelComponentBinds_.func_name = u'camelComponentBinds'
    var.put(u'camelComponentBinds', PyJsHoisted_camelComponentBinds_)
    @Js
    def PyJsHoisted_un_(el, eventName, listener, capture, this, arguments, var=var):
        var = Scope({u'eventName':eventName, u'el':el, u'arguments':arguments, u'capture':capture, u'listener':listener, u'this':this}, var)
        var.registers([u'eventName', u'el', u'capture', u'listener'])
        if var.get(u'el').get(u'addEventListener'):
            var.get(u'el').callprop(u'removeEventListener', var.get(u'eventName'), var.get(u'listener'), var.get(u'capture'))
        else:
            var.get(u'el').callprop(u'detachEvent', (Js(u'on')+var.get(u'eventName')), var.get(u'listener'))
    PyJsHoisted_un_.func_name = u'un'
    var.put(u'un', PyJsHoisted_un_)
    @Js
    def PyJsHoisted_createObjectOfChecker_(typeChecker, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'typeChecker':typeChecker}, var)
        var.registers([u'typeChecker'])
        @Js
        def PyJs_anonymous_14_(data, dataName, componentName, fullDataName, this, arguments, var=var):
            var = Scope({u'dataName':dataName, u'arguments':arguments, u'this':this, u'componentName':componentName, u'data':data, u'fullDataName':fullDataName}, var)
            var.registers([u'dataType', u'componentName', u'dataValue', u'dataName', u'dataKeyName', u'data', u'fullDataName'])
            if PyJsStrictNeq(var.get(u'typeChecker',throw=False).typeof(),Js(u'function')):
                PyJsTempException = JsToPyException(var.get(u'Error').create(((((((Js(u'[SAN ERROR] ')+Js(u'Data `'))+var.get(u'dataName'))+Js(u'` of `'))+var.get(u'componentName'))+Js(u'` has invalid '))+Js(u'DataType notation inside `objectOf`, expected function'))))
                raise PyJsTempException
            var.put(u'dataValue', var.get(u'data').get(var.get(u'dataName')))
            var.put(u'dataType', var.get(u'getDataType')(var.get(u'dataValue')))
            if PyJsStrictNeq(var.get(u'dataType'),Js(u'object')):
                PyJsTempException = JsToPyException(var.get(u'Error').create((((((((((((Js(u'[SAN ERROR] ')+Js(u'Invalid '))+var.get(u'componentName'))+Js(u' data `'))+var.get(u'dataName'))+Js(u'` of type'))+Js(u'('))+var.get(u'dataType'))+Js(u' supplied to '))+var.get(u'componentName'))+Js(u', '))+Js(u'expected object)'))))
                raise PyJsTempException
            for PyJsTemp in var.get(u'dataValue'):
                var.put(u'dataKeyName', PyJsTemp)
                if var.get(u'dataValue').callprop(u'hasOwnProperty', var.get(u'dataKeyName')):
                    var.get(u'typeChecker')(var.get(u'dataValue'), var.get(u'dataKeyName'), var.get(u'componentName'), ((var.get(u'fullDataName')+Js(u'.'))+var.get(u'dataKeyName')))
        PyJs_anonymous_14_._set_name(u'anonymous')
        return var.get(u'createChainableChecker')(PyJs_anonymous_14_)
    PyJsHoisted_createObjectOfChecker_.func_name = u'createObjectOfChecker'
    var.put(u'createObjectOfChecker', PyJsHoisted_createObjectOfChecker_)
    @Js
    def PyJsHoisted_bind_(func, thisArg, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'func':func, u'thisArg':thisArg}, var)
        var.registers([u'args', u'slice', u'func', u'nativeBind', u'thisArg'])
        var.put(u'nativeBind', var.get(u'Function').get(u'prototype').get(u'bind'))
        var.put(u'slice', var.get(u'Array').get(u'prototype').get(u'slice'))
        if (var.get(u'nativeBind') and PyJsStrictEq(var.get(u'func').get(u'bind'),var.get(u'nativeBind'))):
            return var.get(u'nativeBind').callprop(u'apply', var.get(u'func'), var.get(u'slice').callprop(u'call', var.get(u'arguments'), Js(1.0)))
        var.put(u'args', var.get(u'slice').callprop(u'call', var.get(u'arguments'), Js(2.0)))
        @Js
        def PyJs_anonymous_2_(this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments}, var)
            var.registers([])
            return var.get(u'func').callprop(u'apply', var.get(u'thisArg'), var.get(u'args').callprop(u'concat', var.get(u'slice').callprop(u'call', var.get(u'arguments'))))
        PyJs_anonymous_2_._set_name(u'anonymous')
        return PyJs_anonymous_2_
    PyJsHoisted_bind_.func_name = u'bind'
    var.put(u'bind', PyJsHoisted_bind_)
    @Js
    def PyJsHoisted_createReverseNode_(aNode, reverseWalker, parent, scope, this, arguments, var=var):
        var = Scope({u'reverseWalker':reverseWalker, u'aNode':aNode, u'arguments':arguments, u'parent':parent, u'this':this, u'scope':scope}, var)
        var.registers([u'reverseWalker', u'parent', u'ComponentOrLoader', u'aNode', u'owner', u'scope', u'parentIsComponent'])
        var.put(u'parentIsComponent', PyJsStrictEq(var.get(u'parent').get(u'nodeType'),Js(5.0)))
        var.put(u'owner', (var.get(u'parent') if var.get(u'parentIsComponent') else (var.get(u'parent').get(u'childOwner') or var.get(u'parent').get(u'owner'))))
        var.put(u'scope', (var.get(u'scope') or (var.get(u'parent').get(u'data') if var.get(u'parentIsComponent') else (var.get(u'parent').get(u'childScope') or var.get(u'parent').get(u'scope')))))
        if var.get(u'aNode').get(u'textExpr'):
            return var.get(u'TextNode').create(var.get(u'aNode'), var.get(u'owner'), var.get(u'scope'), var.get(u'parent'), var.get(u'reverseWalker'))
        if var.get(u'aNode').get(u'directives').get(u'if'):
            return var.get(u'IfNode').create(var.get(u'aNode'), var.get(u'owner'), var.get(u'scope'), var.get(u'parent'), var.get(u'reverseWalker'))
        if var.get(u'aNode').get(u'directives').get(u'for'):
            return var.get(u'ForNode').create(var.get(u'aNode'), var.get(u'owner'), var.get(u'scope'), var.get(u'parent'), var.get(u'reverseWalker'))
        while 1:
            SWITCHED = False
            CONDITION = (var.get(u'aNode').get(u'tagName'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'slot')):
                SWITCHED = True
                return var.get(u'SlotNode').create(var.get(u'aNode'), var.get(u'owner'), var.get(u'scope'), var.get(u'parent'), var.get(u'reverseWalker'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'template')):
                SWITCHED = True
                return var.get(u'TemplateNode').create(var.get(u'aNode'), var.get(u'owner'), var.get(u'scope'), var.get(u'parent'), var.get(u'reverseWalker'))
            if True:
                SWITCHED = True
                var.put(u'ComponentOrLoader', (var.get(u'owner').callprop(u'getComponentType', var.get(u'aNode')) if var.get(u'owner').get(u'getComponentType') else var.get(u'owner').get(u'components').get(var.get(u'aNode').get(u'tagName'))))
                if var.get(u'ComponentOrLoader'):
                    def PyJs_LONG_83_(var=var):
                        return (var.get(u'ComponentOrLoader').create(Js({u'source':var.get(u'aNode'),u'owner':var.get(u'owner'),u'scope':var.get(u'scope'),u'parent':var.get(u'parent'),u'subTag':var.get(u'aNode').get(u'tagName'),u'reverseWalker':var.get(u'reverseWalker')})) if PyJsStrictEq(var.get(u'ComponentOrLoader',throw=False).typeof(),Js(u'function')) else var.get(u'AsyncComponent').create(Js({u'source':var.get(u'aNode'),u'owner':var.get(u'owner'),u'scope':var.get(u'scope'),u'parent':var.get(u'parent'),u'subTag':var.get(u'aNode').get(u'tagName'),u'reverseWalker':var.get(u'reverseWalker')}), var.get(u'ComponentOrLoader')))
                    return PyJs_LONG_83_()
            SWITCHED = True
            break
        return var.get(u'Element').create(var.get(u'aNode'), var.get(u'owner'), var.get(u'scope'), var.get(u'parent'), var.get(u'reverseWalker'))
    PyJsHoisted_createReverseNode_.func_name = u'createReverseNode'
    var.put(u'createReverseNode', PyJsHoisted_createReverseNode_)
    @Js
    def PyJsHoisted_inherits_(subClass, superClass, this, arguments, var=var):
        var = Scope({u'this':this, u'superClass':superClass, u'subClass':subClass, u'arguments':arguments}, var)
        var.registers([u'superClass', u'subClassProto', u'subClass', u'F'])
        var.put(u'subClassProto', var.get(u'subClass').get(u'prototype'))
        var.put(u'F', var.get(u'Function').create())
        var.get(u'F').put(u'prototype', var.get(u'superClass').get(u'prototype'))
        var.get(u'subClass').put(u'prototype', var.get(u'F').create())
        var.get(u'subClass').get(u'prototype').put(u'constructor', var.get(u'subClass'))
        var.get(u'extend')(var.get(u'subClass').get(u'prototype'), var.get(u'subClassProto'))
    PyJsHoisted_inherits_.func_name = u'inherits'
    var.put(u'inherits', PyJsHoisted_inherits_)
    @Js
    def PyJsHoisted_readAdditiveExpr_(walker, this, arguments, var=var):
        var = Scope({u'walker':walker, u'this':this, u'arguments':arguments}, var)
        var.registers([u'walker', u'expr', u'code'])
        var.put(u'expr', var.get(u'readMultiplicativeExpr')(var.get(u'walker')))
        while Js(1.0):
            var.get(u'walker').callprop(u'goUntil')
            var.put(u'code', var.get(u'walker').callprop(u'currentCode'))
            while 1:
                SWITCHED = False
                CONDITION = (var.get(u'code'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(43.0)):
                    SWITCHED = True
                    pass
                if SWITCHED or PyJsStrictEq(CONDITION, Js(45.0)):
                    SWITCHED = True
                    var.get(u'walker').callprop(u'go', Js(1.0))
                    var.put(u'expr', Js({u'type':Js(8.0),u'operator':var.get(u'code'),u'segs':Js([var.get(u'expr'), var.get(u'readMultiplicativeExpr')(var.get(u'walker'))])}))
                    continue
                SWITCHED = True
                break
            break
        return var.get(u'expr')
    PyJsHoisted_readAdditiveExpr_.func_name = u'readAdditiveExpr'
    var.put(u'readAdditiveExpr', PyJsHoisted_readAdditiveExpr_)
    @Js
    def PyJsHoisted_createANode_(options, this, arguments, var=var):
        var = Scope({u'this':this, u'options':options, u'arguments':arguments}, var)
        var.registers([u'options'])
        var.put(u'options', (var.get(u'options') or Js({})))
        if var.get(u'options').get(u'textExpr').neg():
            var.get(u'options').put(u'directives', (var.get(u'options').get(u'directives') or Js({})))
            var.get(u'options').put(u'props', (var.get(u'options').get(u'props') or Js([])))
            var.get(u'options').put(u'events', (var.get(u'options').get(u'events') or Js([])))
            var.get(u'options').put(u'children', (var.get(u'options').get(u'children') or Js([])))
        return var.get(u'options')
    PyJsHoisted_createANode_.func_name = u'createANode'
    var.put(u'createANode', PyJsHoisted_createANode_)
    @Js
    def PyJsHoisted_cloneDirectives_(source, excludes, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments, u'excludes':excludes}, var)
        var.registers([u'source', u'result', u'key', u'excludes'])
        var.put(u'result', Js({}))
        var.put(u'excludes', (var.get(u'excludes') or Js({})))
        for PyJsTemp in var.get(u'source'):
            var.put(u'key', PyJsTemp)
            if var.get(u'excludes').get(var.get(u'key')).neg():
                var.get(u'result').put(var.get(u'key'), var.get(u'source').get(var.get(u'key')))
        return var.get(u'result')
    PyJsHoisted_cloneDirectives_.func_name = u'cloneDirectives'
    var.put(u'cloneDirectives', PyJsHoisted_cloneDirectives_)
    @Js
    def PyJsHoisted_readNumber_(walker, this, arguments, var=var):
        var = Scope({u'walker':walker, u'this':this, u'arguments':arguments}, var)
        var.registers([u'walker', u'match'])
        var.put(u'match', var.get(u'walker').callprop(u'match', JsRegExp(u'/\\s*(-?[0-9]+(\\.[0-9]+)?)/g'), Js(1.0)))
        if var.get(u'match'):
            return Js({u'type':Js(2.0),u'value':(+var.get(u'match').get(u'1'))})
        else:
            if PyJsStrictEq(var.get(u'walker').callprop(u'currentCode'),Js(45.0)):
                var.get(u'walker').callprop(u'go', Js(1.0))
                return Js({u'type':Js(9.0),u'expr':var.get(u'readUnaryExpr')(var.get(u'walker')),u'operator':Js(45.0)})
    PyJsHoisted_readNumber_.func_name = u'readNumber'
    var.put(u'readNumber', PyJsHoisted_readNumber_)
    @Js
    def PyJsHoisted_AsyncComponent_(options, loader, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'options':options, u'loader':loader}, var)
        var.registers([u'me', u'reverseWalker', u'PlaceholderComponent', u'options', u'loader'])
        var.get(u"this").put(u'options', var.get(u'options'))
        var.get(u"this").put(u'loader', var.get(u'loader'))
        var.get(u"this").put(u'id', var.get(u'guid')())
        var.get(u"this").put(u'children', Js([]))
        var.put(u'reverseWalker', var.get(u'options').get(u'reverseWalker'))
        if var.get(u'reverseWalker'):
            var.put(u'PlaceholderComponent', var.get(u"this").get(u'loader').get(u'placeholder'))
            if var.get(u'PlaceholderComponent'):
                var.get(u"this").get(u'children').put(u'0', var.get(u'PlaceholderComponent').create(var.get(u'options')))
            var.get(u"this").callprop(u'_create')
            var.get(u'insertBefore')(var.get(u"this").get(u'el'), var.get(u'reverseWalker').get(u'target'), var.get(u'reverseWalker').get(u'current'))
            var.put(u'me', var.get(u"this"))
            @Js
            def PyJs_anonymous_126_(ComponentClass, this, arguments, var=var):
                var = Scope({u'this':this, u'ComponentClass':ComponentClass, u'arguments':arguments}, var)
                var.registers([u'ComponentClass'])
                var.get(u'me').callprop(u'onload', var.get(u'ComponentClass'))
            PyJs_anonymous_126_._set_name(u'anonymous')
            var.get(u"this").get(u'loader').callprop(u'start', PyJs_anonymous_126_)
        var.get(u'options').put(u'reverseWalker', var.get(u"null"))
    PyJsHoisted_AsyncComponent_.func_name = u'AsyncComponent'
    var.put(u'AsyncComponent', PyJsHoisted_AsyncComponent_)
    @Js
    def PyJsHoisted_immutableSet_(source, exprPaths, pathsStart, pathsLen, value, data, this, arguments, var=var):
        var = Scope({u'this':this, u'pathsLen':pathsLen, u'pathsStart':pathsStart, u'value':value, u'source':source, u'arguments':arguments, u'exprPaths':exprPaths, u'data':data}, var)
        var.registers([u'index', u'pathsLen', u'pathsStart', u'value', u'prop', u'source', u'pathExpr', u'result', u'key', u'exprPaths', u'data'])
        if (var.get(u'pathsStart')>=var.get(u'pathsLen')):
            return var.get(u'value')
        if (var.get(u'source')==var.get(u"null")):
            var.put(u'source', Js({}))
        var.put(u'pathExpr', var.get(u'exprPaths').get(var.get(u'pathsStart')))
        var.put(u'prop', var.get(u'evalExpr')(var.get(u'pathExpr'), var.get(u'data')))
        var.put(u'result', var.get(u'source'))
        if var.get(u'source').instanceof(var.get(u'Array')):
            var.put(u'index', (+var.get(u'prop')))
            var.put(u'prop', (var.get(u'prop') if var.get(u'isNaN')(var.get(u'index')) else var.get(u'index')))
            var.put(u'result', var.get(u'source').callprop(u'slice', Js(0.0)))
            var.get(u'result').put(var.get(u'prop'), var.get(u'immutableSet')(var.get(u'source').get(var.get(u'prop')), var.get(u'exprPaths'), (var.get(u'pathsStart')+Js(1.0)), var.get(u'pathsLen'), var.get(u'value'), var.get(u'data')))
        else:
            if PyJsStrictEq(var.get(u'source',throw=False).typeof(),Js(u'object')):
                var.put(u'result', Js({}))
                for PyJsTemp in var.get(u'source'):
                    var.put(u'key', PyJsTemp)
                    if PyJsStrictNeq(var.get(u'key'),var.get(u'prop')):
                        var.get(u'result').put(var.get(u'key'), var.get(u'source').get(var.get(u'key')))
                var.get(u'result').put(var.get(u'prop'), var.get(u'immutableSet')(var.get(u'source').get(var.get(u'prop')), var.get(u'exprPaths'), (var.get(u'pathsStart')+Js(1.0)), var.get(u'pathsLen'), var.get(u'value'), var.get(u'data')))
        if (var.get(u'pathExpr').get(u'value')==var.get(u"null")):
            var.get(u'exprPaths').put(var.get(u'pathsStart'), Js({u'type':(Js(1.0) if PyJsStrictEq(var.get(u'prop',throw=False).typeof(),Js(u'string')) else Js(2.0)),u'value':var.get(u'prop')}))
        return var.get(u'result')
    PyJsHoisted_immutableSet_.func_name = u'immutableSet'
    var.put(u'immutableSet', PyJsHoisted_immutableSet_)
    @Js
    def PyJsHoisted_readLogicalORExpr_(walker, this, arguments, var=var):
        var = Scope({u'walker':walker, u'this':this, u'arguments':arguments}, var)
        var.registers([u'walker', u'expr'])
        var.put(u'expr', var.get(u'readLogicalANDExpr')(var.get(u'walker')))
        var.get(u'walker').callprop(u'goUntil')
        if PyJsStrictEq(var.get(u'walker').callprop(u'currentCode'),Js(124.0)):
            if PyJsStrictEq(var.get(u'walker').callprop(u'nextCode'),Js(124.0)):
                var.get(u'walker').callprop(u'go', Js(1.0))
                return Js({u'type':Js(8.0),u'operator':Js(248.0),u'segs':Js([var.get(u'expr'), var.get(u'readLogicalORExpr')(var.get(u'walker'))])})
            var.get(u'walker').callprop(u'go', (-Js(1.0)))
        return var.get(u'expr')
    PyJsHoisted_readLogicalORExpr_.func_name = u'readLogicalORExpr'
    var.put(u'readLogicalORExpr', PyJsHoisted_readLogicalORExpr_)
    @Js
    def PyJsHoisted_nodeDispose_(node, this, arguments, var=var):
        var = Scope({u'node':node, u'this':this, u'arguments':arguments}, var)
        var.registers([u'node'])
        var.get(u'node').put(u'el', var.get(u"null"))
        var.get(u'node').put(u'sel', var.get(u"null"))
        var.get(u'node').put(u'owner', var.get(u"null"))
        var.get(u'node').put(u'scope', var.get(u"null"))
        var.get(u'node').put(u'aNode', var.get(u"null"))
        var.get(u'node').put(u'parent', var.get(u"null"))
        var.get(u'node').put(u'parentComponent', var.get(u"null"))
        var.get(u'node').put(u'children', var.get(u"null"))
        if var.get(u'node').get(u'_toPhase'):
            var.get(u'node').callprop(u'_toPhase', Js(u'disposed'))
        if var.get(u'node').get(u'_ondisposed'):
            var.get(u'node').callprop(u'_ondisposed')
    PyJsHoisted_nodeDispose_.func_name = u'nodeDispose'
    var.put(u'nodeDispose', PyJsHoisted_nodeDispose_)
    @Js
    def PyJsHoisted_isEndStump_(target, type, this, arguments, var=var):
        var = Scope({u'this':this, u'type':type, u'target':target, u'arguments':arguments}, var)
        var.registers([u'type', u'target'])
        return (PyJsStrictEq(var.get(u'target').get(u'nodeType'),Js(8.0)) and PyJsStrictEq(var.get(u'target').get(u'data'),(Js(u'/s-')+var.get(u'type'))))
    PyJsHoisted_isEndStump_.func_name = u'isEndStump'
    var.put(u'isEndStump', PyJsHoisted_isEndStump_)
    @Js
    def PyJsHoisted_Component_(options, this, arguments, var=var):
        var = Scope({u'this':this, u'options':options, u'arguments':arguments}, var)
        var.registers([u'me', u'currentNode', u'stumpMatch', u'parent', u'expr', u'clazz', u'firstCommentNode', u'options', u'protoANode', u'key', u'walker', u'dataTypes', u'dataTypeChecker', u'stumpText'])
        for PyJsTemp in var.get(u'Component').get(u'prototype'):
            var.put(u'key', PyJsTemp)
            if PyJsStrictNeq(var.get(u"this").get(var.get(u'key')),var.get(u'Component').get(u'prototype').get(var.get(u'key'))):
                var.get(u'warn')(((Js(u'`')+var.get(u'key'))+Js(u'` is a reserved key of san components. Overriding this property may cause unknown exceptions.')))
        var.put(u'options', (var.get(u'options') or Js({})))
        var.get(u"this").put(u'lifeCycle', var.get(u'LifeCycle').get(u'start'))
        var.get(u"this").put(u'children', Js([]))
        var.get(u"this").put(u'_elFns', Js([]))
        var.get(u"this").put(u'listeners', Js({}))
        var.get(u"this").put(u'slotChildren', Js([]))
        var.get(u"this").put(u'implicitChildren', Js([]))
        var.put(u'clazz', var.get(u"this").get(u'constructor'))
        var.get(u"this").put(u'filters', ((var.get(u"this").get(u'filters') or var.get(u'clazz').get(u'filters')) or Js({})))
        var.get(u"this").put(u'computed', ((var.get(u"this").get(u'computed') or var.get(u'clazz').get(u'computed')) or Js({})))
        var.get(u"this").put(u'messages', ((var.get(u"this").get(u'messages') or var.get(u'clazz').get(u'messages')) or Js({})))
        if var.get(u'options').get(u'transition'):
            var.get(u"this").put(u'transition', var.get(u'options').get(u'transition'))
        var.get(u"this").put(u'subTag', var.get(u'options').get(u'subTag'))
        var.get(u'compileComponent')(var.get(u'clazz'))
        var.get(u'componentPreheat')(var.get(u'clazz'))
        var.put(u'me', var.get(u"this"))
        var.put(u'protoANode', var.get(u'clazz').get(u'prototype').get(u'aNode'))
        var.get(u"this").put(u'source', (var.get(u'parseTemplate')(var.get(u'options').get(u'source')).get(u'children').get(u'0') if PyJsStrictEq(var.get(u'options').get(u'source').typeof(),Js(u'string')) else var.get(u'options').get(u'source')))
        var.get(u"this").put(u'sourceSlotNameProps', Js([]))
        var.get(u"this").put(u'sourceSlots', Js({u'named':Js({})}))
        var.get(u"this").put(u'owner', var.get(u'options').get(u'owner'))
        var.get(u"this").put(u'scope', var.get(u'options').get(u'scope'))
        var.get(u"this").put(u'el', var.get(u'options').get(u'el'))
        var.put(u'parent', var.get(u'options').get(u'parent'))
        if var.get(u'parent'):
            var.get(u"this").put(u'parent', var.get(u'parent'))
            var.get(u"this").put(u'parentComponent', (var.get(u'parent') if PyJsStrictEq(var.get(u'parent').get(u'nodeType'),Js(5.0)) else (var.get(u'parent') and var.get(u'parent').get(u'parentComponent'))))
        else:
            if var.get(u"this").get(u'owner'):
                var.get(u"this").put(u'parentComponent', var.get(u"this").get(u'owner'))
                var.get(u"this").put(u'scope', var.get(u"this").get(u'owner').get(u'data'))
        var.get(u"this").put(u'id', var.get(u'guid')())
        if var.get(u"this").get(u'el'):
            var.put(u'firstCommentNode', var.get(u"this").get(u'el').get(u'firstChild'))
            if (var.get(u'firstCommentNode') and PyJsStrictEq(var.get(u'firstCommentNode').get(u'nodeType'),Js(3.0))):
                var.put(u'firstCommentNode', var.get(u'firstCommentNode').get(u'nextSibling'))
            if (var.get(u'firstCommentNode') and PyJsStrictEq(var.get(u'firstCommentNode').get(u'nodeType'),Js(8.0))):
                var.put(u'stumpMatch', var.get(u'firstCommentNode').get(u'data').callprop(u'match', JsRegExp(u'/^\\s*s-data:([\\s\\S]+)?$/')))
                if var.get(u'stumpMatch'):
                    var.put(u'stumpText', var.get(u'stumpMatch').get(u'1'))
                    var.get(u'options').put(u'data', var.get(u'Function').create((Js(u'return ')+var.get(u'stumpText').callprop(u'replace', JsRegExp(u'/^[\\s\\n]*/'), Js(u''))))())
                    if var.get(u'firstCommentNode').get(u'previousSibling'):
                        var.get(u'removeEl')(var.get(u'firstCommentNode').get(u'previousSibling'))
                    var.get(u'removeEl')(var.get(u'firstCommentNode'))
        var.get(u"this").put(u'nativeEvents', Js([]))
        if var.get(u"this").get(u'source'):
            var.get(u"this").callprop(u'_initSourceSlots', Js(1.0))
            @Js
            def PyJs_anonymous_132_(eventBind, this, arguments, var=var):
                var = Scope({u'this':this, u'eventBind':eventBind, u'arguments':arguments}, var)
                var.registers([u'eventBind'])
                if var.get(u'eventBind').get(u'modifier').get(u'native'):
                    var.get(u'me').get(u'nativeEvents').callprop(u'push', var.get(u'eventBind'))
                    return var.get('undefined')
                var.get(u'warnEventListenMethod')(var.get(u'eventBind'), var.get(u'options').get(u'owner'))
                var.get(u'me').callprop(u'on', var.get(u'eventBind').get(u'name'), var.get(u'bind')(var.get(u'eventDeclarationListener'), var.get(u'options').get(u'owner'), var.get(u'eventBind'), Js(1.0), var.get(u'me').get(u'scope')), var.get(u'eventBind'))
            PyJs_anonymous_132_._set_name(u'anonymous')
            var.get(u'each')(var.get(u"this").get(u'source').get(u'events'), PyJs_anonymous_132_)
            var.get(u"this").put(u'tagName', (var.get(u'protoANode').get(u'tagName') or var.get(u"this").get(u'source').get(u'tagName')))
            var.get(u"this").put(u'binds', var.get(u'camelComponentBinds')(var.get(u"this").get(u'source').get(u'props')))
            var.get(u'nodeSBindInit')(var.get(u"this"), var.get(u"this").get(u'source').get(u'directives').get(u'bind'))
        var.get(u"this").callprop(u'_toPhase', Js(u'compiled'))
        var.get(u"this").put(u'data', var.get(u'Data').create(var.get(u'extend')(((PyJsStrictEq(var.get(u"this").get(u'initData').typeof(),Js(u'function')) and var.get(u"this").callprop(u'initData')) or Js({})), (var.get(u'options').get(u'data') or var.get(u"this").get(u'_sbindData')))))
        var.get(u'elementInitTagName')(var.get(u"this"))
        @Js
        def PyJs_anonymous_133_(bind, this, arguments, var=var):
            var = Scope({u'this':this, u'bind':bind, u'arguments':arguments}, var)
            var.registers([u'bind', u'value'])
            var.get(u'postProp')(var.get(u'bind'))
            if var.get(u'me').get(u'scope'):
                var.put(u'value', var.get(u'evalExpr')(var.get(u'bind').get(u'expr'), var.get(u'me').get(u'scope'), var.get(u'me').get(u'owner')))
                if PyJsStrictNeq(var.get(u'value',throw=False).typeof(),Js(u'undefined')):
                    var.get(u'me').get(u'data').callprop(u'set', var.get(u'bind').get(u'name'), var.get(u'value'))
        PyJs_anonymous_133_._set_name(u'anonymous')
        var.get(u'each')(var.get(u"this").get(u'binds'), PyJs_anonymous_133_)
        var.put(u'dataTypes', (var.get(u"this").get(u'dataTypes') or var.get(u'clazz').get(u'dataTypes')))
        if var.get(u'dataTypes'):
            var.put(u'dataTypeChecker', var.get(u'createDataTypesChecker')(var.get(u'dataTypes'), ((var.get(u"this").get(u'subTag') or var.get(u"this").get(u'name')) or var.get(u'clazz').get(u'name'))))
            var.get(u"this").get(u'data').callprop(u'setTypeChecker', var.get(u'dataTypeChecker'))
            var.get(u"this").get(u'data').callprop(u'checkDataTypes')
        var.get(u"this").put(u'computedDeps', Js({}))
        for PyJsTemp in var.get(u"this").get(u'computed'):
            var.put(u'expr', PyJsTemp)
            if (var.get(u"this").get(u'computed').callprop(u'hasOwnProperty', var.get(u'expr')) and var.get(u"this").get(u'computedDeps').get(var.get(u'expr')).neg()):
                var.get(u"this").callprop(u'_calcComputed', var.get(u'expr'))
        if var.get(u"this").get(u'dataChanger').neg():
            var.get(u"this").put(u'dataChanger', var.get(u'bind')(var.get(u"this").get(u'_dataChanger'), var.get(u"this")))
            var.get(u"this").get(u'data').callprop(u'listen', var.get(u"this").get(u'dataChanger'))
        var.get(u"this").callprop(u'_toPhase', Js(u'inited'))
        if var.get(u"this").get(u'el'):
            var.get(u'reverseElementChildren')(var.get(u"this"))
            var.get(u"this").callprop(u'_attached')
        var.put(u'walker', var.get(u'options').get(u'reverseWalker'))
        if var.get(u'walker'):
            var.put(u'currentNode', var.get(u'walker').get(u'current'))
            if (var.get(u'currentNode') and PyJsStrictEq(var.get(u'currentNode').get(u'nodeType'),Js(1.0))):
                var.get(u"this").put(u'el', var.get(u'currentNode'))
                var.get(u'walker').callprop(u'goNext')
            var.get(u'reverseElementChildren')(var.get(u"this"))
            var.get(u"this").callprop(u'_attached')
    PyJsHoisted_Component_.func_name = u'Component'
    var.put(u'Component', PyJsHoisted_Component_)
    @Js
    def PyJsHoisted_SlotNode_(aNode, owner, scope, parent, reverseWalker, this, arguments, var=var):
        var = Scope({u'reverseWalker':reverseWalker, u'aNode':aNode, u'arguments':arguments, u'parent':parent, u'owner':owner, u'scope':scope, u'this':this}, var)
        var.registers([u'me', u'reverseWalker', u'realANode', u'parent', u'sourceSlots', u'matchedSlots', u'initData', u'aNode', u'owner', u'scope'])
        var.put(u'realANode', var.get(u'createANode')())
        var.get(u"this").put(u'aNode', var.get(u'realANode'))
        var.get(u"this").put(u'owner', var.get(u'owner'))
        var.get(u"this").put(u'scope', var.get(u'scope'))
        var.get(u"this").put(u'parent', var.get(u'parent'))
        var.get(u"this").put(u'parentComponent', (var.get(u'parent') if PyJsStrictEq(var.get(u'parent').get(u'nodeType'),Js(5.0)) else var.get(u'parent').get(u'parentComponent')))
        var.get(u"this").put(u'id', var.get(u'guid')())
        var.get(u"this").put(u'lifeCycle', var.get(u'LifeCycle').get(u'start'))
        var.get(u"this").put(u'children', Js([]))
        var.get(u"this").put(u'nameBind', var.get(u'getANodeProp')(var.get(u'aNode'), Js(u'name')))
        if var.get(u"this").get(u'nameBind'):
            var.get(u"this").put(u'isNamed', Js(True))
            var.get(u"this").put(u'name', var.get(u'evalExpr')(var.get(u"this").get(u'nameBind').get(u'expr'), var.get(u"this").get(u'scope'), var.get(u"this").get(u'owner')))
        var.put(u'sourceSlots', var.get(u'owner').get(u'sourceSlots'))
        pass
        if var.get(u'sourceSlots'):
            var.put(u'matchedSlots', (var.get(u'sourceSlots').get(u'named').get(var.get(u"this").get(u'name')) if var.get(u"this").get(u'isNamed') else var.get(u'sourceSlots').get(u'noname')))
        if var.get(u'matchedSlots'):
            var.get(u"this").put(u'isInserted', Js(True))
        var.get(u'realANode').put(u'children', (var.get(u'matchedSlots') or var.get(u'aNode').get(u'children').callprop(u'slice', Js(0.0))))
        var.get(u'realANode').put(u'vars', var.get(u'aNode').get(u'vars'))
        var.get(u'realANode').put(u'directives', var.get(u'aNode').get(u'directives'))
        pass
        if var.get(u'nodeSBindInit')(var.get(u"this"), var.get(u'aNode').get(u'directives').get(u'bind')):
            var.put(u'initData', var.get(u'extend')(Js({}), var.get(u"this").get(u'_sbindData')))
        if var.get(u'realANode').get(u'vars'):
            var.put(u'initData', (var.get(u'initData') or Js({})))
            @Js
            def PyJs_anonymous_85_(varItem, this, arguments, var=var):
                var = Scope({u'this':this, u'varItem':varItem, u'arguments':arguments}, var)
                var.registers([u'varItem'])
                var.get(u'initData').put(var.get(u'varItem').get(u'name'), var.get(u'evalExpr')(var.get(u'varItem').get(u'expr'), var.get(u'scope'), var.get(u'owner')))
            PyJs_anonymous_85_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'realANode').get(u'vars'), PyJs_anonymous_85_)
        if var.get(u"this").get(u'isInserted'):
            var.get(u"this").put(u'childOwner', var.get(u'owner').get(u'owner'))
            var.get(u"this").put(u'childScope', var.get(u'owner').get(u'scope'))
        if var.get(u'initData'):
            var.get(u"this").put(u'isScoped', Js(True))
            var.get(u"this").put(u'childScope', var.get(u'Data').create(var.get(u'initData'), (var.get(u"this").get(u'childScope') or var.get(u"this").get(u'scope'))))
        var.get(u'owner').get(u'slotChildren').callprop(u'push', var.get(u"this"))
        if var.get(u'reverseWalker'):
            var.get(u"this").put(u'sel', var.get(u'document').callprop(u'createComment', var.get(u"this").get(u'id')))
            var.get(u'insertBefore')(var.get(u"this").get(u'sel'), var.get(u'reverseWalker').get(u'target'), var.get(u'reverseWalker').get(u'current'))
            var.put(u'me', var.get(u"this"))
            @Js
            def PyJs_anonymous_86_(aNodeChild, this, arguments, var=var):
                var = Scope({u'this':this, u'aNodeChild':aNodeChild, u'arguments':arguments}, var)
                var.registers([u'aNodeChild'])
                var.get(u'me').get(u'children').callprop(u'push', var.get(u'createReverseNode')(var.get(u'aNodeChild'), var.get(u'reverseWalker'), var.get(u'me')))
            PyJs_anonymous_86_._set_name(u'anonymous')
            var.get(u'each')(var.get(u"this").get(u'aNode').get(u'children'), PyJs_anonymous_86_)
            var.get(u"this").put(u'el', var.get(u'document').callprop(u'createComment', var.get(u"this").get(u'id')))
            var.get(u'insertBefore')(var.get(u"this").get(u'el'), var.get(u'reverseWalker').get(u'target'), var.get(u'reverseWalker').get(u'current'))
            var.get(u"this").callprop(u'_toPhase', Js(u'attached'))
    PyJsHoisted_SlotNode_.func_name = u'SlotNode'
    var.put(u'SlotNode', PyJsHoisted_SlotNode_)
    @Js
    def PyJsHoisted_nodeOwnOnlyChildrenAttach_(parentEl, beforeEl, this, arguments, var=var):
        var = Scope({u'this':this, u'parentEl':parentEl, u'arguments':arguments, u'beforeEl':beforeEl}, var)
        var.registers([u'parentEl', u'beforeEl'])
        var.get(u"this").put(u'sel', var.get(u'document').callprop(u'createComment', var.get(u"this").get(u'id')))
        var.get(u'insertBefore')(var.get(u"this").get(u'sel'), var.get(u'parentEl'), var.get(u'beforeEl'))
        var.get(u'genElementChildren')(var.get(u"this"), var.get(u'parentEl'), var.get(u'beforeEl'))
        var.get(u"this").put(u'el', var.get(u'document').callprop(u'createComment', var.get(u"this").get(u'id')))
        var.get(u'insertBefore')(var.get(u"this").get(u'el'), var.get(u'parentEl'), var.get(u'beforeEl'))
        var.get(u"this").callprop(u'_toPhase', Js(u'attached'))
    PyJsHoisted_nodeOwnOnlyChildrenAttach_.func_name = u'nodeOwnOnlyChildrenAttach'
    var.put(u'nodeOwnOnlyChildrenAttach', PyJsHoisted_nodeOwnOnlyChildrenAttach_)
    @Js
    def PyJsHoisted_createChainableChecker_(validate, this, arguments, var=var):
        var = Scope({u'this':this, u'validate':validate, u'arguments':arguments}, var)
        var.registers([u'checkType', u'validate', u'chainedChecker'])
        @Js
        def PyJs_anonymous_6_(this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments}, var)
            var.registers([])
            pass
        PyJs_anonymous_6_._set_name(u'anonymous')
        var.put(u'chainedChecker', PyJs_anonymous_6_)
        var.get(u'chainedChecker').put(u'isRequired', var.get(u'empty'))
        @Js
        def PyJs_anonymous_7_(isRequired, data, dataName, componentName, fullDataName, this, arguments, var=var):
            var = Scope({u'isRequired':isRequired, u'arguments':arguments, u'dataName':dataName, u'this':this, u'componentName':componentName, u'data':data, u'fullDataName':fullDataName}, var)
            var.registers([u'dataName', u'dataType', u'componentName', u'dataValue', u'isRequired', u'data', u'fullDataName'])
            var.put(u'dataValue', var.get(u'data').get(var.get(u'dataName')))
            var.put(u'dataType', var.get(u'getDataType')(var.get(u'dataValue')))
            var.put(u'componentName', (var.get(u'componentName') or var.get(u'ANONYMOUS_CLASS_NAME')))
            if (var.get(u'dataValue')==var.get(u"null")):
                if var.get(u'isRequired'):
                    PyJsTempException = JsToPyException(var.get(u'Error').create(((((((((Js(u'[SAN ERROR] ')+Js(u'The `'))+var.get(u'dataName'))+Js(u'` '))+Js(u'is marked as required in `'))+var.get(u'componentName'))+Js(u'`, '))+Js(u'but its value is '))+var.get(u'dataType'))))
                    raise PyJsTempException
                return var.get('undefined')
            var.get(u'validate')(var.get(u'data'), var.get(u'dataName'), var.get(u'componentName'), var.get(u'fullDataName'))
        PyJs_anonymous_7_._set_name(u'anonymous')
        var.put(u'checkType', PyJs_anonymous_7_)
        var.put(u'chainedChecker', var.get(u'bind')(var.get(u'checkType'), var.get(u"null"), Js(False)))
        var.get(u'chainedChecker').put(u'isRequired', var.get(u'bind')(var.get(u'checkType'), var.get(u"null"), Js(True)))
        return var.get(u'chainedChecker')
    PyJsHoisted_createChainableChecker_.func_name = u'createChainableChecker'
    var.put(u'createChainableChecker', PyJsHoisted_createChainableChecker_)
    @Js
    def PyJsHoisted_parseText_(source, delimiters, this, arguments, var=var):
        var = Scope({u'delimiters':delimiters, u'source':source, u'this':this, u'arguments':arguments}, var)
        var.registers([u'beforeIndex', u'pushStringToSeg', u'exprMatch', u'interp', u'source', u'exprStartReg', u'delimiters', u'interpLen', u'regCacheKey', u'expr', u'walker', u'interpSource', u'delimEndLen'])
        @Js
        def PyJsHoisted_pushStringToSeg_(text, this, arguments, var=var):
            var = Scope({u'this':this, u'text':text, u'arguments':arguments}, var)
            var.registers([u'text'])
            (var.get(u'text') and var.get(u'expr').get(u'segs').callprop(u'push', Js({u'type':Js(1.0),u'literal':var.get(u'text'),u'value':var.get(u'decodeHTMLEntity')(var.get(u'text'))})))
        PyJsHoisted_pushStringToSeg_.func_name = u'pushStringToSeg'
        var.put(u'pushStringToSeg', PyJsHoisted_pushStringToSeg_)
        var.put(u'delimiters', (var.get(u'delimiters') or Js([Js(u'{{'), Js(u'}}')])))
        var.put(u'regCacheKey', ((var.get(u'delimiters').get(u'0')+Js(u'>..<'))+var.get(u'delimiters').get(u'1')))
        var.put(u'exprStartReg', var.get(u'delimRegCache').get(var.get(u'regCacheKey')))
        if var.get(u'exprStartReg').neg():
            var.put(u'exprStartReg', var.get(u'RegExp').create(((var.get(u'regexpLiteral')(var.get(u'delimiters').get(u'0'))+Js(u'\\s*([\\s\\S]+?)\\s*'))+var.get(u'regexpLiteral')(var.get(u'delimiters').get(u'1'))), Js(u'ig')))
            var.get(u'delimRegCache').put(var.get(u'regCacheKey'), var.get(u'exprStartReg'))
        pass
        var.put(u'walker', var.get(u'Walker').create(var.get(u'source')))
        var.put(u'beforeIndex', Js(0.0))
        var.put(u'expr', Js({u'type':Js(7.0),u'segs':Js([])}))
        pass
        var.put(u'delimEndLen', var.get(u'delimiters').get(u'1').get(u'length'))
        while (var.put(u'exprMatch', var.get(u'walker').callprop(u'match', var.get(u'exprStartReg')))!=var.get(u"null")):
            var.put(u'interpSource', var.get(u'exprMatch').get(u'1'))
            var.put(u'interpLen', var.get(u'exprMatch').get(u'0').get(u'length'))
            if PyJsStrictEq(var.get(u'walker').callprop(u'cut', ((var.get(u'walker').get(u'index')+Js(1.0))-var.get(u'delimEndLen')), (var.get(u'walker').get(u'index')+Js(1.0))),var.get(u'delimiters').get(u'1')):
                var.put(u'interpSource', var.get(u'walker').callprop(u'cut', var.get(u'walker').get(u'index'), (var.get(u'walker').get(u'index')+Js(1.0))), u'+')
                var.get(u'walker').callprop(u'go', Js(1.0))
                (var.put(u'interpLen',Js(var.get(u'interpLen').to_number())+Js(1))-Js(1))
            var.get(u'pushStringToSeg')(var.get(u'walker').callprop(u'cut', var.get(u'beforeIndex'), (var.get(u'walker').get(u'index')-var.get(u'interpLen'))))
            var.put(u'interp', var.get(u'parseInterp')(var.get(u'interpSource')))
            var.get(u'expr').put(u'original', (var.get(u'expr').get(u'original') or var.get(u'interp').get(u'original')))
            var.get(u'expr').get(u'segs').callprop(u'push', var.get(u'interp'))
            var.put(u'beforeIndex', var.get(u'walker').get(u'index'))
        var.get(u'pushStringToSeg')(var.get(u'walker').callprop(u'cut', var.get(u'beforeIndex')))
        if (PyJsStrictEq(var.get(u'expr').get(u'segs').get(u'length'),Js(1.0)) and PyJsStrictEq(var.get(u'expr').get(u'segs').get(u'0').get(u'type'),Js(1.0))):
            var.get(u'expr').put(u'value', var.get(u'expr').get(u'segs').get(u'0').get(u'value'))
        return var.get(u'expr')
    PyJsHoisted_parseText_.func_name = u'parseText'
    var.put(u'parseText', PyJsHoisted_parseText_)
    @Js
    def PyJsHoisted_insertBefore_(targetEl, parentEl, beforeEl, this, arguments, var=var):
        var = Scope({u'targetEl':targetEl, u'this':this, u'parentEl':parentEl, u'arguments':arguments, u'beforeEl':beforeEl}, var)
        var.registers([u'targetEl', u'parentEl', u'beforeEl'])
        if var.get(u'parentEl'):
            if var.get(u'beforeEl'):
                var.get(u'parentEl').callprop(u'insertBefore', var.get(u'targetEl'), var.get(u'beforeEl'))
            else:
                var.get(u'parentEl').callprop(u'appendChild', var.get(u'targetEl'))
    PyJsHoisted_insertBefore_.func_name = u'insertBefore'
    var.put(u'insertBefore', PyJsHoisted_insertBefore_)
    @Js
    def PyJsHoisted_parseDirective_(aNode, name, value, options, this, arguments, var=var):
        var = Scope({u'aNode':aNode, u'name':name, u'this':this, u'options':options, u'value':value, u'arguments':arguments}, var)
        var.registers([u'parser', u'aNode', u'name', u'value', u'options'])
        if PyJsStrictEq(var.get(u'name'),Js(u'else-if')):
            var.put(u'name', Js(u'elif'))
        var.put(u'parser', var.get(u'directiveParsers').get(var.get(u'name')))
        if var.get(u'parser'):
            var.get(u'aNode').get(u'directives').put(var.get(u'name'), var.get(u'parser')(var.get(u'value'), var.get(u'options'))).put(u'raw', var.get(u'value'))
    PyJsHoisted_parseDirective_.func_name = u'parseDirective'
    var.put(u'parseDirective', PyJsHoisted_parseDirective_)
    @Js
    def PyJsHoisted_Element_(aNode, owner, scope, parent, reverseWalker, this, arguments, var=var):
        var = Scope({u'reverseWalker':reverseWalker, u'aNode':aNode, u'arguments':arguments, u'parent':parent, u'owner':owner, u'scope':scope, u'this':this}, var)
        var.registers([u'reverseWalker', u'currentNode', u'parent', u'aNode', u'owner', u'scope'])
        var.get(u"this").put(u'aNode', var.get(u'aNode'))
        var.get(u"this").put(u'owner', var.get(u'owner'))
        var.get(u"this").put(u'scope', var.get(u'scope'))
        var.get(u"this").put(u'parent', var.get(u'parent'))
        var.get(u"this").put(u'lifeCycle', var.get(u'LifeCycle').get(u'start'))
        var.get(u"this").put(u'children', Js([]))
        var.get(u"this").put(u'_elFns', Js([]))
        var.get(u"this").put(u'parentComponent', (var.get(u'parent') if PyJsStrictEq(var.get(u'parent').get(u'nodeType'),Js(5.0)) else var.get(u'parent').get(u'parentComponent')))
        var.get(u"this").put(u'id', var.get(u'guid')())
        var.get(u'elementInitTagName')(var.get(u"this"))
        var.get(u'nodeSBindInit')(var.get(u"this"), var.get(u'aNode').get(u'directives').get(u'bind'))
        var.get(u"this").callprop(u'_toPhase', Js(u'inited'))
        if var.get(u'reverseWalker'):
            var.put(u'currentNode', var.get(u'reverseWalker').get(u'current'))
            if var.get(u'currentNode').neg():
                PyJsTempException = JsToPyException(var.get(u'Error').create((Js(u'[SAN REVERSE ERROR] Element not found. \nPaths: ')+var.get(u'getNodePath')(var.get(u"this")).callprop(u'join', Js(u' > ')))))
                raise PyJsTempException
            if PyJsStrictNeq(var.get(u'currentNode').get(u'nodeType'),Js(1.0)):
                PyJsTempException = JsToPyException(var.get(u'Error').create((((Js(u'[SAN REVERSE ERROR] Element type not match, expect 1 but ')+var.get(u'currentNode').get(u'nodeType'))+Js(u'.\nPaths: '))+var.get(u'getNodePath')(var.get(u"this")).callprop(u'join', Js(u' > ')))))
                raise PyJsTempException
            if PyJsStrictNeq(var.get(u'currentNode').get(u'tagName').callprop(u'toLowerCase'),var.get(u"this").get(u'tagName')):
                PyJsTempException = JsToPyException(var.get(u'Error').create((((((Js(u'[SAN REVERSE ERROR] Element tagName not match, expect ')+var.get(u"this").get(u'tagName'))+Js(u' but meat '))+var.get(u'currentNode').get(u'tagName').callprop(u'toLowerCase'))+Js(u'.\nPaths: '))+var.get(u'getNodePath')(var.get(u"this")).callprop(u'join', Js(u' > ')))))
                raise PyJsTempException
            var.get(u"this").put(u'el', var.get(u'currentNode'))
            var.get(u'reverseWalker').callprop(u'goNext')
            var.get(u'reverseElementChildren')(var.get(u"this"))
            var.get(u"this").callprop(u'_attached')
    PyJsHoisted_Element_.func_name = u'Element'
    var.put(u'Element', PyJsHoisted_Element_)
    @Js
    def PyJsHoisted_removeEl_(el, this, arguments, var=var):
        var = Scope({u'this':this, u'el':el, u'arguments':arguments}, var)
        var.registers([u'el'])
        if (var.get(u'el') and var.get(u'el').get(u'parentNode')):
            var.get(u'el').get(u'parentNode').callprop(u'removeChild', var.get(u'el'))
    PyJsHoisted_removeEl_.func_name = u'removeEl'
    var.put(u'removeEl', PyJsHoisted_removeEl_)
    @Js
    def PyJsHoisted_isDataChangeByElement_(change, element, propName, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'propName':propName, u'change':change, u'element':element}, var)
        var.registers([u'element', u'propName', u'change', u'changeTarget'])
        var.put(u'changeTarget', var.get(u'change').get(u'option').get(u'target'))
        return ((var.get(u'changeTarget') and PyJsStrictEq(var.get(u'changeTarget').get(u'id'),var.get(u'element').get(u'id'))) and (var.get(u'propName').neg() or PyJsStrictEq(var.get(u'changeTarget').get(u'prop'),var.get(u'propName'))))
    PyJsHoisted_isDataChangeByElement_.func_name = u'isDataChangeByElement'
    var.put(u'isDataChangeByElement', PyJsHoisted_isDataChangeByElement_)
    @Js
    def PyJsHoisted_elementOwnAttach_(parentEl, beforeEl, this, arguments, var=var):
        var = Scope({u'this':this, u'parentEl':parentEl, u'arguments':arguments, u'beforeEl':beforeEl}, var)
        var.registers([u'parentEl', u'beforeEl'])
        if var.get(u"this").get(u'lifeCycle').get(u'attached').neg():
            var.get(u'elementAttach')(var.get(u"this"), var.get(u'parentEl'), var.get(u'beforeEl'))
            if (var.get(u"this").get(u'owner') and var.get(u"this").get(u'parent').neg()):
                var.get(u"this").get(u'owner').get(u'implicitChildren').callprop(u'push', var.get(u"this"))
            var.get(u"this").callprop(u'_attached')
    PyJsHoisted_elementOwnAttach_.func_name = u'elementOwnAttach'
    var.put(u'elementOwnAttach', PyJsHoisted_elementOwnAttach_)
    @Js
    def PyJsHoisted_parseCall_(source, defaultArgs, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments, u'defaultArgs':defaultArgs}, var)
        var.registers([u'expr', u'defaultArgs', u'source'])
        var.put(u'expr', var.get(u'readCall')(var.get(u'Walker').create(var.get(u'source')), var.get(u'defaultArgs')))
        if PyJsStrictNeq(var.get(u'expr').get(u'type'),Js(6.0)):
            var.put(u'expr', Js({u'type':Js(6.0),u'name':var.get(u'expr'),u'args':(var.get(u'defaultArgs') or Js([]))}))
        var.get(u'expr').put(u'raw', var.get(u'source'))
        return var.get(u'expr')
    PyJsHoisted_parseCall_.func_name = u'parseCall'
    var.put(u'parseCall', PyJsHoisted_parseCall_)
    @Js
    def PyJsHoisted_readUnaryExpr_(walker, this, arguments, var=var):
        var = Scope({u'walker':walker, u'this':this, u'arguments':arguments}, var)
        var.registers([u'walker', u'item', u'walkerIndexBeforeName', u'objItems', u'arrItems'])
        var.get(u'walker').callprop(u'goUntil')
        while 1:
            SWITCHED = False
            CONDITION = (var.get(u'walker').callprop(u'currentCode'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(33.0)):
                SWITCHED = True
                var.get(u'walker').callprop(u'go', Js(1.0))
                return Js({u'type':Js(9.0),u'expr':var.get(u'readUnaryExpr')(var.get(u'walker')),u'operator':Js(33.0)})
            if SWITCHED or PyJsStrictEq(CONDITION, Js(34.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(39.0)):
                SWITCHED = True
                return var.get(u'readString')(var.get(u'walker'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(45.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(48.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(49.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(50.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(51.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(52.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(53.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(54.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(55.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(56.0)):
                SWITCHED = True
                pass
            if SWITCHED or PyJsStrictEq(CONDITION, Js(57.0)):
                SWITCHED = True
                return var.get(u'readNumber')(var.get(u'walker'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(40.0)):
                SWITCHED = True
                return var.get(u'readParenthesizedExpr')(var.get(u'walker'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(91.0)):
                SWITCHED = True
                var.get(u'walker').callprop(u'go', Js(1.0))
                var.put(u'arrItems', Js([]))
                while var.get(u'walker').callprop(u'goUntil', Js(93.0)).neg():
                    var.put(u'item', Js({}))
                    var.get(u'arrItems').callprop(u'push', var.get(u'item'))
                    if (PyJsStrictEq(var.get(u'walker').callprop(u'currentCode'),Js(46.0)) and var.get(u'walker').callprop(u'match', JsRegExp(u'/\\.\\.\\.\\s*/g'))):
                        var.get(u'item').put(u'spread', Js(True))
                    var.get(u'item').put(u'expr', var.get(u'readTertiaryExpr')(var.get(u'walker')))
                    var.get(u'walker').callprop(u'goUntil', Js(44.0))
                return Js({u'type':Js(12.0),u'items':var.get(u'arrItems')})
            if SWITCHED or PyJsStrictEq(CONDITION, Js(123.0)):
                SWITCHED = True
                var.get(u'walker').callprop(u'go', Js(1.0))
                var.put(u'objItems', Js([]))
                while var.get(u'walker').callprop(u'goUntil', Js(125.0)).neg():
                    var.put(u'item', Js({}))
                    var.get(u'objItems').callprop(u'push', var.get(u'item'))
                    if (PyJsStrictEq(var.get(u'walker').callprop(u'currentCode'),Js(46.0)) and var.get(u'walker').callprop(u'match', JsRegExp(u'/\\.\\.\\.\\s*/g'))):
                        var.get(u'item').put(u'spread', Js(True))
                        var.get(u'item').put(u'expr', var.get(u'readTertiaryExpr')(var.get(u'walker')))
                    else:
                        var.put(u'walkerIndexBeforeName', var.get(u'walker').get(u'index'))
                        var.get(u'item').put(u'name', var.get(u'readUnaryExpr')(var.get(u'walker')))
                        if (var.get(u'item').get(u'name').get(u'type')>Js(4.0)):
                            PyJsTempException = JsToPyException(var.get(u'Error').create((Js(u'[SAN FATAL] unexpect object name: ')+var.get(u'walker').callprop(u'cut', var.get(u'walkerIndexBeforeName'), var.get(u'walker').get(u'index')))))
                            raise PyJsTempException
                        if var.get(u'walker').callprop(u'goUntil', Js(58.0)):
                            var.get(u'item').put(u'expr', var.get(u'readTertiaryExpr')(var.get(u'walker')))
                        else:
                            var.get(u'item').put(u'expr', var.get(u'item').get(u'name'))
                        if PyJsStrictEq(var.get(u'item').get(u'name').get(u'type'),Js(4.0)):
                            var.get(u'item').put(u'name', var.get(u'item').get(u'name').get(u'paths').get(u'0'))
                    var.get(u'walker').callprop(u'goUntil', Js(44.0))
                return Js({u'type':Js(11.0),u'items':var.get(u'objItems')})
            SWITCHED = True
            break
        return var.get(u'readCall')(var.get(u'walker'))
    PyJsHoisted_readUnaryExpr_.func_name = u'readUnaryExpr'
    var.put(u'readUnaryExpr', PyJsHoisted_readUnaryExpr_)
    @Js
    def PyJsHoisted_defineComponent_(proto, SuperComponent, this, arguments, var=var):
        var = Scope({u'this':this, u'SuperComponent':SuperComponent, u'arguments':arguments, u'proto':proto}, var)
        var.registers([u'SuperComponent', u'ComponentClass', u'proto'])
        @Js
        def PyJsHoisted_ComponentClass_(option, this, arguments, var=var):
            var = Scope({u'this':this, u'option':option, u'arguments':arguments}, var)
            var.registers([u'option'])
            var.get(u'Component').callprop(u'call', var.get(u"this"), var.get(u'option'))
        PyJsHoisted_ComponentClass_.func_name = u'ComponentClass'
        var.put(u'ComponentClass', PyJsHoisted_ComponentClass_)
        if PyJsStrictEq(var.get(u'proto',throw=False).typeof(),Js(u'function')):
            return var.get(u'proto')
        if PyJsStrictNeq(var.get(u'proto',throw=False).typeof(),Js(u'object')):
            PyJsTempException = JsToPyException(var.get(u'Error').create(Js(u'[SAN FATAL] param must be a plain object.')))
            raise PyJsTempException
        pass
        var.get(u'ComponentClass').put(u'prototype', var.get(u'proto'))
        var.get(u'inherits')(var.get(u'ComponentClass'), (var.get(u'SuperComponent') or var.get(u'Component')))
        return var.get(u'ComponentClass')
    PyJsHoisted_defineComponent_.func_name = u'defineComponent'
    var.put(u'defineComponent', PyJsHoisted_defineComponent_)
    @Js
    def PyJsHoisted_createInstanceOfChecker_(expectedClass, this, arguments, var=var):
        var = Scope({u'this':this, u'expectedClass':expectedClass, u'arguments':arguments}, var)
        var.registers([u'expectedClass'])
        @Js
        def PyJs_anonymous_10_(data, dataName, componentName, fullDataName, this, arguments, var=var):
            var = Scope({u'dataName':dataName, u'arguments':arguments, u'this':this, u'componentName':componentName, u'data':data, u'fullDataName':fullDataName}, var)
            var.registers([u'componentName', u'dataValue', u'dataName', u'expectedClassName', u'dataValueClassName', u'data', u'fullDataName'])
            var.put(u'dataValue', var.get(u'data').get(var.get(u'dataName')))
            if var.get(u'dataValue').instanceof(var.get(u'expectedClass')):
                return var.get('undefined')
            var.put(u'dataValueClassName', (var.get(u'dataValue').get(u'constructor').get(u'name') if (var.get(u'dataValue').get(u'constructor') and var.get(u'dataValue').get(u'constructor').get(u'name')) else var.get(u'ANONYMOUS_CLASS_NAME')))
            var.put(u'expectedClassName', (var.get(u'expectedClass').get(u'name') or var.get(u'ANONYMOUS_CLASS_NAME')))
            PyJsTempException = JsToPyException(var.get(u'Error').create((((((((((((((Js(u'[SAN ERROR] ')+Js(u'Invalid '))+var.get(u'componentName'))+Js(u' data `'))+var.get(u'fullDataName'))+Js(u'` of type'))+Js(u'('))+var.get(u'dataValueClassName'))+Js(u' supplied to '))+var.get(u'componentName'))+Js(u', '))+Js(u'expected instance of '))+var.get(u'expectedClassName'))+Js(u')'))))
            raise PyJsTempException
        PyJs_anonymous_10_._set_name(u'anonymous')
        return var.get(u'createChainableChecker')(PyJs_anonymous_10_)
    PyJsHoisted_createInstanceOfChecker_.func_name = u'createInstanceOfChecker'
    var.put(u'createInstanceOfChecker', PyJsHoisted_createInstanceOfChecker_)
    @Js
    def PyJsHoisted_nodeSBindInit_(node, sBind, this, arguments, var=var):
        var = Scope({u'node':node, u'this':this, u'sBind':sBind, u'arguments':arguments}, var)
        var.registers([u'node', u'sBind'])
        if (var.get(u'sBind') and var.get(u'node').get(u'scope')):
            var.get(u'node').put(u'_sbindData', var.get(u'evalExpr')(var.get(u'sBind').get(u'value'), var.get(u'node').get(u'scope'), var.get(u'node').get(u'owner')))
            return Js(True)
    PyJsHoisted_nodeSBindInit_.func_name = u'nodeSBindInit'
    var.put(u'nodeSBindInit', PyJsHoisted_nodeSBindInit_)
    @Js
    def PyJsHoisted_getNodePath_(node, this, arguments, var=var):
        var = Scope({u'node':node, u'this':this, u'arguments':arguments}, var)
        var.registers([u'node', u'nodePaths', u'nodeParent'])
        var.put(u'nodePaths', Js([]))
        var.put(u'nodeParent', var.get(u'node'))
        while var.get(u'nodeParent'):
            while 1:
                SWITCHED = False
                CONDITION = (var.get(u'nodeParent').get(u'nodeType'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(4.0)):
                    SWITCHED = True
                    var.get(u'nodePaths').callprop(u'unshift', var.get(u'nodeParent').get(u'tagName'))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(2.0)):
                    SWITCHED = True
                    var.get(u'nodePaths').callprop(u'unshift', Js(u'if'))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(3.0)):
                    SWITCHED = True
                    var.get(u'nodePaths').callprop(u'unshift', ((Js(u'for[')+var.get(u'nodeParent').get(u'anode').get(u'directives').get(u'for').get(u'raw'))+Js(u']')))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(6.0)):
                    SWITCHED = True
                    var.get(u'nodePaths').callprop(u'unshift', ((Js(u'slot[')+(var.get(u'nodeParent').get(u'name') or Js(u'default')))+Js(u']')))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(7.0)):
                    SWITCHED = True
                    var.get(u'nodePaths').callprop(u'unshift', Js(u'template'))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(5.0)):
                    SWITCHED = True
                    var.get(u'nodePaths').callprop(u'unshift', ((Js(u'component[')+(var.get(u'nodeParent').get(u'subTag') or Js(u'root')))+Js(u']')))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(1.0)):
                    SWITCHED = True
                    var.get(u'nodePaths').callprop(u'unshift', Js(u'text'))
                    break
                SWITCHED = True
                break
            var.put(u'nodeParent', var.get(u'nodeParent').get(u'parent'))
        return var.get(u'nodePaths')
    PyJsHoisted_getNodePath_.func_name = u'getNodePath'
    var.put(u'getNodePath', PyJsHoisted_getNodePath_)
    @Js
    def PyJsHoisted_componentPreheat_(ComponentClass, this, arguments, var=var):
        var = Scope({u'this':this, u'ComponentClass':ComponentClass, u'arguments':arguments}, var)
        var.registers([u'ComponentClass', u'stack', u'analyseANodeHotspot', u'recordHotspotData'])
        @Js
        def PyJsHoisted_recordHotspotData_(refs, notContentData, this, arguments, var=var):
            var = Scope({u'this':this, u'refs':refs, u'notContentData':notContentData, u'arguments':arguments}, var)
            var.registers([u'refs', u'notContentData', u'len'])
            var.put(u'len', var.get(u'stack').get(u'length'))
            @Js
            def PyJs_anonymous_165_(aNode, index, this, arguments, var=var):
                var = Scope({u'this':this, u'index':index, u'aNode':aNode, u'arguments':arguments}, var)
                var.registers([u'index', u'aNode'])
                if (var.get(u'notContentData').neg() or PyJsStrictNeq(var.get(u'index'),(var.get(u'len')-Js(1.0)))):
                    @Js
                    def PyJs_anonymous_166_(ref, this, arguments, var=var):
                        var = Scope({u'this':this, u'ref':ref, u'arguments':arguments}, var)
                        var.registers([u'ref'])
                        var.get(u'aNode').get(u'hotspot').get(u'data').put(var.get(u'ref'), Js(1.0))
                    PyJs_anonymous_166_._set_name(u'anonymous')
                    var.get(u'each')(var.get(u'refs'), PyJs_anonymous_166_)
            PyJs_anonymous_165_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'stack'), PyJs_anonymous_165_)
        PyJsHoisted_recordHotspotData_.func_name = u'recordHotspotData'
        var.put(u'recordHotspotData', PyJsHoisted_recordHotspotData_)
        @Js
        def PyJsHoisted_analyseANodeHotspot_(aNode, this, arguments, var=var):
            var = Scope({u'this':this, u'aNode':aNode, u'arguments':arguments}, var)
            var.registers([u'sourceNode', u'directive', u'trackBy', u'aNode', u'key', u'valueProp'])
            if var.get(u'aNode').get(u'hotspot').neg():
                var.get(u'stack').callprop(u'push', var.get(u'aNode'))
                if var.get(u'aNode').get(u'textExpr'):
                    var.get(u'aNode').put(u'hotspot', Js({u'data':Js({})}))
                    var.get(u'recordHotspotData')(var.get(u'analyseExprDataHotspot')(var.get(u'aNode').get(u'textExpr')))
                else:
                    pass
                    if ((var.get(u'isBrowser') and var.get(u'aNode').get(u'tagName')) and JsRegExp(u'/^(template|slot|select|input|option|button)$/i').callprop(u'test', var.get(u'aNode').get(u'tagName')).neg()):
                        var.put(u'sourceNode', var.get(u'createEl')(var.get(u'aNode').get(u'tagName')))
                    var.get(u'aNode').put(u'hotspot', Js({u'data':Js({}),u'dynamicProps':Js([]),u'xProps':Js([]),u'props':Js({}),u'sourceNode':var.get(u'sourceNode')}))
                    @Js
                    def PyJs_anonymous_167_(varItem, this, arguments, var=var):
                        var = Scope({u'this':this, u'varItem':varItem, u'arguments':arguments}, var)
                        var.registers([u'varItem'])
                        var.get(u'recordHotspotData')(var.get(u'analyseExprDataHotspot')(var.get(u'varItem').get(u'expr')))
                    PyJs_anonymous_167_._set_name(u'anonymous')
                    var.get(u'each')(var.get(u'aNode').get(u'vars'), PyJs_anonymous_167_)
                    @Js
                    def PyJs_anonymous_168_(prop, this, arguments, var=var):
                        var = Scope({u'this':this, u'arguments':arguments, u'prop':prop}, var)
                        var.registers([u'prop'])
                        var.get(u'recordHotspotData')(var.get(u'analyseExprDataHotspot')(var.get(u'prop').get(u'expr')))
                    PyJs_anonymous_168_._set_name(u'anonymous')
                    var.get(u'each')(var.get(u'aNode').get(u'props'), PyJs_anonymous_168_)
                    for PyJsTemp in var.get(u'aNode').get(u'directives'):
                        var.put(u'key', PyJsTemp)
                        if var.get(u'aNode').get(u'directives').callprop(u'hasOwnProperty', var.get(u'key')):
                            var.put(u'directive', var.get(u'aNode').get(u'directives').get(var.get(u'key')))
                            var.get(u'recordHotspotData')(var.get(u'analyseExprDataHotspot')(var.get(u'directive').get(u'value')), JsRegExp(u'/^(html|bind)$/').callprop(u'test', var.get(u'key')).neg())
                            if PyJsStrictEq(var.get(u'key'),Js(u'for')):
                                var.put(u'trackBy', var.get(u'directive').get(u'trackBy'))
                                if ((var.get(u'trackBy') and PyJsStrictEq(var.get(u'trackBy').get(u'type'),Js(4.0))) and PyJsStrictEq(var.get(u'trackBy').get(u'paths').get(u'0').get(u'value'),var.get(u'directive').get(u'item').get(u'raw'))):
                                    var.get(u'aNode').get(u'hotspot').put(u'getForKey', var.get(u'Function').create(var.get(u'directive').get(u'item').get(u'raw'), (Js(u'return ')+var.get(u'trackBy').get(u'raw'))))
                    @Js
                    def PyJs_anonymous_169_(child, this, arguments, var=var):
                        var = Scope({u'this':this, u'arguments':arguments, u'child':child}, var)
                        var.registers([u'child'])
                        var.get(u'analyseANodeHotspot')(var.get(u'child'))
                    PyJs_anonymous_169_._set_name(u'anonymous')
                    var.get(u'each')(var.get(u'aNode').get(u'elses'), PyJs_anonymous_169_)
                    @Js
                    def PyJs_anonymous_170_(child, this, arguments, var=var):
                        var = Scope({u'this':this, u'arguments':arguments, u'child':child}, var)
                        var.registers([u'child'])
                        var.get(u'analyseANodeHotspot')(var.get(u'child'))
                    PyJs_anonymous_170_._set_name(u'anonymous')
                    var.get(u'each')(var.get(u'aNode').get(u'children'), PyJs_anonymous_170_)
                    @Js
                    def PyJs_anonymous_171_(prop, index, this, arguments, var=var):
                        var = Scope({u'this':this, u'index':index, u'arguments':arguments, u'prop':prop}, var)
                        var.registers([u'index', u'prop'])
                        var.get(u'aNode').get(u'hotspot').get(u'props').put(var.get(u'prop').get(u'name'), var.get(u'index'))
                        if PyJsStrictEq(var.get(u'prop').get(u'name'),Js(u'id')):
                            var.get(u'prop').put(u'id', Js(True))
                            var.get(u'aNode').get(u'hotspot').put(u'idProp', var.get(u'prop'))
                            var.get(u'aNode').get(u'hotspot').get(u'dynamicProps').callprop(u'push', var.get(u'prop'))
                        else:
                            if (var.get(u'prop').get(u'expr').get(u'value')!=var.get(u"null")):
                                if var.get(u'sourceNode'):
                                    var.get(u'getPropHandler')(var.get(u'aNode').get(u'tagName'), var.get(u'prop').get(u'name')).callprop(u'prop', var.get(u'sourceNode'), var.get(u'prop').get(u'expr').get(u'value'), var.get(u'prop').get(u'name'), var.get(u'aNode'))
                            else:
                                if var.get(u'prop').get(u'x'):
                                    var.get(u'aNode').get(u'hotspot').get(u'xProps').callprop(u'push', var.get(u'prop'))
                                var.get(u'aNode').get(u'hotspot').get(u'dynamicProps').callprop(u'push', var.get(u'prop'))
                    PyJs_anonymous_171_._set_name(u'anonymous')
                    var.get(u'each')(var.get(u'aNode').get(u'props'), PyJs_anonymous_171_)
                    if ((PyJsStrictEq(var.get(u'aNode').get(u'tagName'),Js(u'option')) and var.get(u'getANodeProp')(var.get(u'aNode'), Js(u'value')).neg()) and var.get(u'aNode').get(u'children').get(u'0')):
                        var.put(u'valueProp', Js({u'name':Js(u'value'),u'expr':var.get(u'aNode').get(u'children').get(u'0').get(u'textExpr')}))
                        var.get(u'aNode').get(u'props').callprop(u'push', var.get(u'valueProp'))
                        var.get(u'aNode').get(u'hotspot').get(u'dynamicProps').callprop(u'push', var.get(u'valueProp'))
                        var.get(u'aNode').get(u'hotspot').get(u'props').put(u'value', (var.get(u'aNode').get(u'props').get(u'length')-Js(1.0)))
                var.get(u'stack').callprop(u'pop')
        PyJsHoisted_analyseANodeHotspot_.func_name = u'analyseANodeHotspot'
        var.put(u'analyseANodeHotspot', PyJsHoisted_analyseANodeHotspot_)
        var.put(u'stack', Js([]))
        pass
        pass
        var.get(u'analyseANodeHotspot')(var.get(u'ComponentClass').get(u'prototype').get(u'aNode'))
    PyJsHoisted_componentPreheat_.func_name = u'componentPreheat'
    var.put(u'componentPreheat', PyJsHoisted_componentPreheat_)
    @Js
    def PyJsHoisted_postProp_(prop, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'prop':prop}, var)
        var.registers([u'expr', u'prop'])
        var.put(u'expr', var.get(u'prop').get(u'expr'))
        if PyJsStrictEq(var.get(u'expr').get(u'type'),Js(7.0)):
            while 1:
                SWITCHED = False
                CONDITION = (var.get(u'expr').get(u'segs').get(u'length'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(0.0)):
                    SWITCHED = True
                    var.get(u'prop').put(u'expr', Js({u'type':Js(3.0),u'value':Js(True)}))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(1.0)):
                    SWITCHED = True
                    var.put(u'expr', var.get(u'prop').put(u'expr', var.get(u'expr').get(u'segs').get(u'0')))
                    if (PyJsStrictEq(var.get(u'expr').get(u'type'),Js(5.0)) and PyJsStrictEq(var.get(u'expr').get(u'filters').get(u'length'),Js(0.0))):
                        var.get(u'prop').put(u'expr', var.get(u'expr').get(u'expr'))
                SWITCHED = True
                break
    PyJsHoisted_postProp_.func_name = u'postProp'
    var.put(u'postProp', PyJsHoisted_postProp_)
    @Js
    def PyJsHoisted_readParenthesizedExpr_(walker, this, arguments, var=var):
        var = Scope({u'walker':walker, u'this':this, u'arguments':arguments}, var)
        var.registers([u'walker', u'expr'])
        var.get(u'walker').callprop(u'go', Js(1.0))
        var.put(u'expr', var.get(u'readTertiaryExpr')(var.get(u'walker')))
        var.get(u'walker').callprop(u'goUntil', Js(41.0))
        var.get(u'expr').put(u'parenthesized', Js(True))
        return var.get(u'expr')
    PyJsHoisted_readParenthesizedExpr_.func_name = u'readParenthesizedExpr'
    var.put(u'readParenthesizedExpr', PyJsHoisted_readParenthesizedExpr_)
    @Js
    def PyJsHoisted_rinseCondANode_(aNode, this, arguments, var=var):
        var = Scope({u'this':this, u'aNode':aNode, u'arguments':arguments}, var)
        var.registers([u'clearANode', u'aNode'])
        def PyJs_LONG_112_(var=var):
            return var.get(u'createANode')(Js({u'children':var.get(u'aNode').get(u'children'),u'props':var.get(u'aNode').get(u'props'),u'events':var.get(u'aNode').get(u'events'),u'tagName':var.get(u'aNode').get(u'tagName'),u'vars':var.get(u'aNode').get(u'vars'),u'hotspot':var.get(u'aNode').get(u'hotspot'),u'directives':var.get(u'cloneDirectives')(var.get(u'aNode').get(u'directives'), Js({u'if':Js(1.0),u'else':Js(1.0),u'elif':Js(1.0)}))}))
        var.put(u'clearANode', PyJs_LONG_112_())
        return var.get(u'clearANode')
    PyJsHoisted_rinseCondANode_.func_name = u'rinseCondANode'
    var.put(u'rinseCondANode', PyJsHoisted_rinseCondANode_)
    @Js
    def PyJsHoisted_elementOwnOnEl_(name, listener, capture, this, arguments, var=var):
        var = Scope({u'listener':listener, u'capture':capture, u'this':this, u'name':name, u'arguments':arguments}, var)
        var.registers([u'listener', u'capture', u'name'])
        if PyJsStrictEq(var.get(u'listener',throw=False).typeof(),Js(u'function')):
            var.put(u'capture', var.get(u'capture').neg().neg())
            var.get(u"this").get(u'_elFns').callprop(u'push', Js([var.get(u'name'), var.get(u'listener'), var.get(u'capture')]))
            var.get(u'on')(var.get(u"this").get(u'el'), var.get(u'name'), var.get(u'listener'), var.get(u'capture'))
    PyJsHoisted_elementOwnOnEl_.func_name = u'elementOwnOnEl'
    var.put(u'elementOwnOnEl', PyJsHoisted_elementOwnOnEl_)
    @Js
    def PyJsHoisted_createAccessor_(paths, this, arguments, var=var):
        var = Scope({u'this':this, u'paths':paths, u'arguments':arguments}, var)
        var.registers([u'paths'])
        return Js({u'type':Js(4.0),u'paths':var.get(u'paths')})
    PyJsHoisted_createAccessor_.func_name = u'createAccessor'
    var.put(u'createAccessor', PyJsHoisted_createAccessor_)
    var.put(u'guidIndex', Js(1.0))
    var.put(u'guidPrefix', var.get(u'Date').create().callprop(u'getTime').callprop(u'toString', Js(16.0)).callprop(u'slice', Js(8.0)))
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    var.put(u'svgTags', var.get(u'splitStr2Obj')(((((((Js(u'')+Js(u'svg,g,defs,desc,metadata,symbol,use,'))+Js(u'image,path,rect,circle,line,ellipse,polyline,polygon,'))+Js(u'text,tspan,tref,textpath,'))+Js(u'marker,pattern,clippath,mask,filter,cursor,view,animate,'))+Js(u'font,font-face,glyph,missing-glyph,'))+Js(u'animateColor,animateMotion,animateTransform,textPath,foreignObject'))))
    pass
    pass
    var.put(u'nextTasks', Js([]))
    pass
    var.put(u'isNativePromise', (PyJsStrictEq(var.get(u'Promise',throw=False).typeof(),Js(u'function')) and JsRegExp(u'/native code/').callprop(u'test', var.get(u'Promise'))))
    pass
    var.put(u'ieVersionMatch', (PyJsStrictNeq(var.get(u'navigator',throw=False).typeof(),Js(u'undefined')) and var.get(u'navigator').get(u'userAgent').callprop(u'match', JsRegExp(u'/msie\\s*([0-9]+)/i'))))
    var.put(u'ie', ((var.get(u'ieVersionMatch').get(u'1')-Js(0.0)) if var.get(u'ieVersionMatch') else Js(0.0)))
    var.put(u'ieOldThan9', (var.get(u'ie') and (var.get(u'ie')<Js(9.0))))
    pass
    if PyJsStrictEq(var.get(u'ie'),Js(9.0)):
        @Js
        def PyJs_anonymous_5_(this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments}, var)
            var.registers([u'el'])
            var.put(u'el', var.get(u'document').get(u'activeElement'))
            if (PyJsStrictEq(var.get(u'el').get(u'tagName'),Js(u'TEXTAREA')) or PyJsStrictEq(var.get(u'el').get(u'tagName'),Js(u'INPUT'))):
                var.get(u'trigger')(var.get(u'el'), Js(u'input'))
        PyJs_anonymous_5_._set_name(u'anonymous')
        var.get(u'on')(var.get(u'document'), Js(u'selectionchange'), PyJs_anonymous_5_)
    var.put(u'autoCloseTags', var.get(u'splitStr2Obj')(Js(u'area,base,br,col,embed,hr,img,input,keygen,param,source,track,wbr')))
    var.put(u'ANONYMOUS_CLASS_NAME', Js(u'<<anonymous>>'))
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    var.put(u'DataTypes', Js({u'array':var.get(u'createChainableChecker')(var.get(u'empty')),u'object':var.get(u'createChainableChecker')(var.get(u'empty')),u'func':var.get(u'createChainableChecker')(var.get(u'empty')),u'string':var.get(u'createChainableChecker')(var.get(u'empty')),u'number':var.get(u'createChainableChecker')(var.get(u'empty')),u'bool':var.get(u'createChainableChecker')(var.get(u'empty')),u'symbol':var.get(u'createChainableChecker')(var.get(u'empty')),u'any':var.get(u'createChainableChecker'),u'arrayOf':var.get(u'createChainableChecker'),u'instanceOf':var.get(u'createChainableChecker'),u'shape':var.get(u'createChainableChecker'),u'oneOf':var.get(u'createChainableChecker'),u'oneOfType':var.get(u'createChainableChecker'),u'objectOf':var.get(u'createChainableChecker'),u'exact':var.get(u'createChainableChecker')}))
    def PyJs_LONG_16_(var=var):
        return var.put(u'DataTypes', Js({u'any':var.get(u'createChainableChecker')(var.get(u'empty')),u'array':var.get(u'createPrimaryTypeChecker')(Js(u'array')),u'object':var.get(u'createPrimaryTypeChecker')(Js(u'object')),u'func':var.get(u'createPrimaryTypeChecker')(Js(u'function')),u'string':var.get(u'createPrimaryTypeChecker')(Js(u'string')),u'number':var.get(u'createPrimaryTypeChecker')(Js(u'number')),u'bool':var.get(u'createPrimaryTypeChecker')(Js(u'boolean')),u'symbol':var.get(u'createPrimaryTypeChecker')(Js(u'symbol')),u'arrayOf':var.get(u'createArrayOfChecker'),u'instanceOf':var.get(u'createInstanceOfChecker'),u'shape':var.get(u'createShapeChecker'),u'oneOf':var.get(u'createOneOfChecker'),u'oneOfType':var.get(u'createOneOfTypeChecker'),u'objectOf':var.get(u'createObjectOfChecker'),u'exact':var.get(u'createExactChecker')}))
    PyJs_LONG_16_()
    pass
    pass
    @Js
    def PyJs_anonymous_18_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        return var.get(u"this").get(u'source').callprop(u'charCodeAt', var.get(u"this").get(u'index'))
    PyJs_anonymous_18_._set_name(u'anonymous')
    var.get(u'Walker').get(u'prototype').put(u'currentCode', PyJs_anonymous_18_)
    @Js
    def PyJs_anonymous_19_(start, end, this, arguments, var=var):
        var = Scope({u'this':this, u'start':start, u'end':end, u'arguments':arguments}, var)
        var.registers([u'start', u'end'])
        return var.get(u"this").get(u'source').callprop(u'slice', var.get(u'start'), var.get(u'end'))
    PyJs_anonymous_19_._set_name(u'anonymous')
    var.get(u'Walker').get(u'prototype').put(u'cut', PyJs_anonymous_19_)
    @Js
    def PyJs_anonymous_20_(distance, this, arguments, var=var):
        var = Scope({u'this':this, u'distance':distance, u'arguments':arguments}, var)
        var.registers([u'distance'])
        var.get(u"this").put(u'index', var.get(u'distance'), u'+')
    PyJs_anonymous_20_._set_name(u'anonymous')
    var.get(u'Walker').get(u'prototype').put(u'go', PyJs_anonymous_20_)
    @Js
    def PyJs_anonymous_21_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        var.get(u"this").callprop(u'go', Js(1.0))
        return var.get(u"this").callprop(u'currentCode')
    PyJs_anonymous_21_._set_name(u'anonymous')
    var.get(u'Walker').get(u'prototype').put(u'nextCode', PyJs_anonymous_21_)
    @Js
    def PyJs_anonymous_22_(index, this, arguments, var=var):
        var = Scope({u'this':this, u'index':index, u'arguments':arguments}, var)
        var.registers([u'index'])
        return var.get(u"this").get(u'source').callprop(u'charCodeAt', var.get(u'index'))
    PyJs_anonymous_22_._set_name(u'anonymous')
    var.get(u'Walker').get(u'prototype').put(u'charCode', PyJs_anonymous_22_)
    @Js
    def PyJs_anonymous_23_(charCode, this, arguments, var=var):
        var = Scope({u'this':this, u'charCode':charCode, u'arguments':arguments}, var)
        var.registers([u'charCode', u'code'])
        pass
        while ((var.get(u"this").get(u'index')<var.get(u"this").get(u'len')) and var.put(u'code', var.get(u"this").callprop(u'currentCode'))):
            while 1:
                SWITCHED = False
                CONDITION = (var.get(u'code'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(32.0)):
                    SWITCHED = True
                    pass
                if SWITCHED or PyJsStrictEq(CONDITION, Js(9.0)):
                    SWITCHED = True
                    pass
                if SWITCHED or PyJsStrictEq(CONDITION, Js(13.0)):
                    SWITCHED = True
                    pass
                if SWITCHED or PyJsStrictEq(CONDITION, Js(10.0)):
                    SWITCHED = True
                    (var.get(u"this").put(u'index',Js(var.get(u"this").get(u'index').to_number())+Js(1))-Js(1))
                    break
                if True:
                    SWITCHED = True
                    if PyJsStrictEq(var.get(u'code'),var.get(u'charCode')):
                        (var.get(u"this").put(u'index',Js(var.get(u"this").get(u'index').to_number())+Js(1))-Js(1))
                        return Js(1.0)
                    return var.get('undefined')
                SWITCHED = True
                break
    PyJs_anonymous_23_._set_name(u'anonymous')
    var.get(u'Walker').get(u'prototype').put(u'goUntil', PyJs_anonymous_23_)
    @Js
    def PyJs_anonymous_24_(reg, isMatchStart, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'reg':reg, u'isMatchStart':isMatchStart}, var)
        var.registers([u'reg', u'match', u'isMatchStart'])
        var.get(u'reg').put(u'lastIndex', var.get(u"this").get(u'index'))
        var.put(u'match', var.get(u'reg').callprop(u'exec', var.get(u"this").get(u'source')))
        if (var.get(u'match') and (var.get(u'isMatchStart').neg() or PyJsStrictEq(var.get(u"this").get(u'index'),var.get(u'match').get(u'index')))):
            var.get(u"this").put(u'index', var.get(u'reg').get(u'lastIndex'))
            return var.get(u'match')
    PyJs_anonymous_24_._set_name(u'anonymous')
    var.get(u'Walker').get(u'prototype').put(u'match', PyJs_anonymous_24_)
    pass
    pass
    var.put(u'ExprType', Js({u'STRING':Js(1.0),u'NUMBER':Js(2.0),u'BOOL':Js(3.0),u'ACCESSOR':Js(4.0),u'INTERP':Js(5.0),u'CALL':Js(6.0),u'TEXT':Js(7.0),u'BINARY':Js(8.0),u'UNARY':Js(9.0),u'TERTIARY':Js(10.0),u'OBJECT':Js(11.0),u'ARRAY':Js(12.0)}))
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    var.put(u'ENTITY_DECODE_MAP', Js({u'lt':Js(u'<'),u'gt':Js(u'>'),u'nbsp':Js(u' '),u'quot':Js(u'"'),u'emsp':Js(u'\u2003'),u'ensp':Js(u'\u2002'),u'thinsp':Js(u'\u2009'),u'copy':Js(u'\xa9'),u'reg':Js(u'\xae'),u'zwnj':Js(u'\u200c'),u'zwj':Js(u'\u200d'),u'amp':Js(u'&')}))
    pass
    pass
    var.put(u'delimRegCache', Js({}))
    pass
    @Js
    def PyJs_anonymous_30_(value, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'value':value}, var)
        var.registers([u'walker', u'start', u'value', u'directive', u'match'])
        var.put(u'walker', var.get(u'Walker').create(var.get(u'value')))
        var.put(u'match', var.get(u'walker').callprop(u'match', JsRegExp(u'/^\\s*([\\$0-9a-z_]+)(\\s*,\\s*([\\$0-9a-z_]+))?\\s+in\\s+/ig'), Js(1.0)))
        if var.get(u'match'):
            var.put(u'directive', Js({u'item':var.get(u'parseExpr')(var.get(u'match').get(u'1')),u'index':var.get(u'parseExpr')((var.get(u'match').get(u'3') or Js(u'$index'))),u'value':var.get(u'readUnaryExpr')(var.get(u'walker'))}))
            if var.get(u'walker').callprop(u'match', JsRegExp(u'/\\s*trackby\\s+/ig'), Js(1.0)):
                var.put(u'start', var.get(u'walker').get(u'index'))
                var.get(u'directive').put(u'trackBy', var.get(u'readAccessor')(var.get(u'walker')))
                var.get(u'directive').get(u'trackBy').put(u'raw', var.get(u'walker').callprop(u'cut', var.get(u'start'), var.get(u'walker').get(u'index')))
            return var.get(u'directive')
        PyJsTempException = JsToPyException(var.get(u'Error').create((Js(u'[SAN FATAL] for syntax error: ')+var.get(u'value'))))
        raise PyJsTempException
    PyJs_anonymous_30_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_31_(value, options, this, arguments, var=var):
        var = Scope({u'this':this, u'options':options, u'value':value, u'arguments':arguments}, var)
        var.registers([u'options', u'value'])
        return Js({u'value':var.get(u'parseText')(var.get(u'value'), var.get(u'options').get(u'delimiters'))})
    PyJs_anonymous_31_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_32_(value, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'value':value}, var)
        var.registers([u'value'])
        return Js({u'value':var.get(u'parseExpr')(var.get(u'value').callprop(u'replace', JsRegExp(u'/(^\\{\\{|\\}\\}$)/g'), Js(u'')))})
    PyJs_anonymous_32_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_33_(value, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'value':value}, var)
        var.registers([u'value'])
        return Js({u'value':var.get(u'parseExpr')(var.get(u'value').callprop(u'replace', JsRegExp(u'/(^\\{\\{|\\}\\}$)/g'), Js(u'')))})
    PyJs_anonymous_33_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_34_(value, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'value':value}, var)
        var.registers([u'value'])
        return Js({u'value':Js({})})
    PyJs_anonymous_34_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_35_(value, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'value':value}, var)
        var.registers([u'value'])
        return Js({u'value':var.get(u'parseExpr')(var.get(u'value').callprop(u'replace', JsRegExp(u'/(^\\{\\{|\\}\\}$)/g'), Js(u'')))})
    PyJs_anonymous_35_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_36_(value, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'value':value}, var)
        var.registers([u'value'])
        return Js({u'value':var.get(u'parseExpr')(var.get(u'value').callprop(u'replace', JsRegExp(u'/(^\\{\\{|\\}\\}$)/g'), Js(u'')))})
    PyJs_anonymous_36_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_37_(value, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'value':value}, var)
        var.registers([u'value'])
        return Js({u'value':var.get(u'parseCall')(var.get(u'value'))})
    PyJs_anonymous_37_._set_name(u'anonymous')
    var.put(u'directiveParsers', Js({u'for':PyJs_anonymous_30_,u'ref':PyJs_anonymous_31_,u'if':PyJs_anonymous_32_,u'elif':PyJs_anonymous_33_,u'else':PyJs_anonymous_34_,u'bind':PyJs_anonymous_35_,u'html':PyJs_anonymous_36_,u'transition':PyJs_anonymous_37_}))
    pass
    pass
    pass
    pass
    pass
    pass
    @Js
    def PyJs_anonymous_39_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'source'])
        if var.get(u'source').instanceof(var.get(u'Array')):
            return var.get(u'source').callprop(u'join', Js(u' '))
        return var.get(u'source')
    PyJs_anonymous_39_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_40_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'source', u'result', u'key'])
        if PyJsStrictEq(var.get(u'source',throw=False).typeof(),Js(u'object')):
            var.put(u'result', Js(u''))
            for PyJsTemp in var.get(u'source'):
                var.put(u'key', PyJsTemp)
                if var.get(u'source').callprop(u'hasOwnProperty', var.get(u'key')):
                    var.put(u'result', (((var.get(u'key')+Js(u':'))+var.get(u'source').get(var.get(u'key')))+Js(u';')), u'+')
            return var.get(u'result')
        return var.get(u'source')
    PyJs_anonymous_40_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_41_(source, sep, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments, u'sep':sep}, var)
        var.registers([u'source', u'sep'])
        return ((var.get(u'sep')+var.get(u'source')) if var.get(u'source') else var.get(u'source'))
    PyJs_anonymous_41_._set_name(u'anonymous')
    var.put(u'DEFAULT_FILTERS', Js({u'url':var.get(u'encodeURIComponent'),u'_class':PyJs_anonymous_39_,u'_style':PyJs_anonymous_40_,u'_sep':PyJs_anonymous_41_}))
    pass
    pass
    var.put(u'dataCacheSource', Js({}))
    var.put(u'dataCacheClearly', Js(1.0))
    @Js
    def PyJs_anonymous_42_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        if var.get(u'dataCacheClearly').neg():
            var.put(u'dataCacheClearly', Js(1.0))
            var.put(u'dataCacheSource', Js({}))
    PyJs_anonymous_42_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_43_(data, expr, value, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'data':data, u'arguments':arguments, u'value':value}, var)
        var.registers([u'expr', u'data', u'value'])
        if var.get(u'expr').get(u'raw'):
            var.put(u'dataCacheClearly', Js(0.0))
            var.get(u'dataCacheSource').put(var.get(u'data').get(u'id'), (var.get(u'dataCacheSource').get(var.get(u'data').get(u'id')) or Js({}))).put(var.get(u'expr').get(u'raw'), var.get(u'value'))
    PyJs_anonymous_43_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_44_(data, expr, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'data':data, u'arguments':arguments}, var)
        var.registers([u'expr', u'data'])
        if (var.get(u'expr').get(u'raw') and var.get(u'dataCacheSource').get(var.get(u'data').get(u'id'))):
            return var.get(u'dataCacheSource').get(var.get(u'data').get(u'id')).get(var.get(u'expr').get(u'raw'))
    PyJs_anonymous_44_._set_name(u'anonymous')
    var.put(u'dataCache', Js({u'clear':PyJs_anonymous_42_,u'set':PyJs_anonymous_43_,u'get':PyJs_anonymous_44_}))
    pass
    pass
    var.put(u'DataChangeType', Js({u'SET':Js(1.0),u'SPLICE':Js(2.0)}))
    pass
    var.put(u'LifeCycle', Js({u'start':Js({}),u'compiled':Js({u'is':var.get(u'lifeCycleOwnIs'),u'compiled':Js(True)}),u'inited':Js({u'is':var.get(u'lifeCycleOwnIs'),u'compiled':Js(True),u'inited':Js(True)}),u'created':Js({u'is':var.get(u'lifeCycleOwnIs'),u'compiled':Js(True),u'inited':Js(True),u'created':Js(True)}),u'attached':Js({u'is':var.get(u'lifeCycleOwnIs'),u'compiled':Js(True),u'inited':Js(True),u'created':Js(True),u'attached':Js(True)}),u'leaving':Js({u'is':var.get(u'lifeCycleOwnIs'),u'compiled':Js(True),u'inited':Js(True),u'created':Js(True),u'attached':Js(True),u'leaving':Js(True)}),u'detached':Js({u'is':var.get(u'lifeCycleOwnIs'),u'compiled':Js(True),u'inited':Js(True),u'created':Js(True),u'detached':Js(True)}),u'disposed':Js({u'is':var.get(u'lifeCycleOwnIs'),u'disposed':Js(True)})}))
    var.put(u'NodeType', Js({u'TEXT':Js(1.0),u'IF':Js(2.0),u'FOR':Js(3.0),u'ELEM':Js(4.0),u'CMPT':Js(5.0),u'SLOT':Js(6.0),u'TPL':Js(7.0),u'LOADER':Js(8.0)}))
    pass
    var.put(u'HTML_ATTR_PROP_MAP', Js({u'readonly':Js(u'readOnly'),u'cellpadding':Js(u'cellPadding'),u'cellspacing':Js(u'cellSpacing'),u'colspan':Js(u'colSpan'),u'rowspan':Js(u'rowSpan'),u'valign':Js(u'vAlign'),u'usemap':Js(u'useMap'),u'frameborder':Js(u'frameBorder'),u'for':Js(u'htmlFor')}))
    @Js
    def PyJs_anonymous_46_(el, value, name, element, this, arguments, var=var):
        var = Scope({u'el':el, u'name':name, u'this':this, u'arguments':arguments, u'value':value, u'element':element}, var)
        var.registers([u'el', u'element', u'value', u'propName', u'name'])
        var.put(u'propName', (var.get(u'HTML_ATTR_PROP_MAP').get(var.get(u'name')) or var.get(u'name')))
        var.put(u'value', (Js(u'') if (var.get(u'value')==var.get(u"null")) else var.get(u'value')))
        if var.get(u'el').contains(var.get(u'propName')):
            var.get(u'el').put(var.get(u'propName'), var.get(u'value'))
        else:
            var.get(u'el').callprop(u'setAttribute', var.get(u'name'), var.get(u'value'))
    PyJs_anonymous_46_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_47_(element, bindInfo, data, this, arguments, var=var):
        var = Scope({u'this':this, u'bindInfo':bindInfo, u'data':data, u'arguments':arguments, u'element':element}, var)
        var.registers([u'bindInfo', u'data', u'element'])
        var.get(u'data').callprop(u'set', var.get(u'bindInfo').get(u'expr'), var.get(u'element').get(u'el').get(var.get(u'bindInfo').get(u'name')), Js({u'target':Js({u'id':var.get(u'element').get(u'id'),u'prop':var.get(u'bindInfo').get(u'name')})}))
    PyJs_anonymous_47_._set_name(u'anonymous')
    var.put(u'defaultElementPropHandler', Js({u'prop':PyJs_anonymous_46_,u'output':PyJs_anonymous_47_}))
    @Js
    def PyJs_anonymous_48_(el, value, name, this, arguments, var=var):
        var = Scope({u'this':this, u'el':el, u'name':name, u'value':value, u'arguments':arguments}, var)
        var.registers([u'el', u'name', u'value'])
        var.get(u'el').callprop(u'setAttribute', var.get(u'name'), var.get(u'value'))
    PyJs_anonymous_48_._set_name(u'anonymous')
    var.put(u'svgPropHandler', Js({u'prop':PyJs_anonymous_48_}))
    @Js
    def PyJs_anonymous_49_(el, value, name, element, prop, this, arguments, var=var):
        var = Scope({u'el':el, u'name':name, u'this':this, u'arguments':arguments, u'element':element, u'value':value, u'prop':prop}, var)
        var.registers([u'el', u'name', u'value', u'prop', u'propName', u'element'])
        var.put(u'propName', (var.get(u'HTML_ATTR_PROP_MAP').get(var.get(u'name')) or var.get(u'name')))
        var.get(u'el').put(var.get(u'propName'), ((var.get(u'prop') and PyJsStrictEq(var.get(u'prop').get(u'raw'),Js(u''))) or ((var.get(u'value') and PyJsStrictNeq(var.get(u'value'),Js(u'false'))) and PyJsStrictNeq(var.get(u'value'),Js(u'0')))).neg().neg())
    PyJs_anonymous_49_._set_name(u'anonymous')
    var.put(u'boolPropHandler', Js({u'prop':PyJs_anonymous_49_}))
    @Js
    def PyJs_anonymous_50_(el, value, this, arguments, var=var):
        var = Scope({u'this':this, u'el':el, u'arguments':arguments, u'value':value}, var)
        var.registers([u'el', u'value'])
        var.get(u'el').get(u'style').put(u'cssText', var.get(u'value'))
    PyJs_anonymous_50_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_51_(el, value, this, arguments, var=var):
        var = Scope({u'this':this, u'el':el, u'arguments':arguments, u'value':value}, var)
        var.registers([u'el', u'value'])
        var.get(u'el').put(u'className', var.get(u'value'))
    PyJs_anonymous_51_._set_name(u'anonymous')
    var.put(u'defaultElementPropHandlers', Js({u'style':Js({u'prop':PyJs_anonymous_50_}),u'class':Js({u'prop':PyJs_anonymous_51_}),u'slot':Js({u'prop':var.get(u'empty')}),u'draggable':var.get(u'boolPropHandler')}))
    @Js
    def PyJs_anonymous_52_(a, b, this, arguments, var=var):
        var = Scope({u'a':a, u'this':this, u'b':b, u'arguments':arguments}, var)
        var.registers([u'a', u'b'])
        return PyJsStrictEq(var.get(u'a'),var.get(u'b'))
    PyJs_anonymous_52_._set_name(u'anonymous')
    var.put(u'analInputChecker', Js({u'checkbox':var.get(u'contains'),u'radio':PyJs_anonymous_52_}))
    pass
    @Js
    def PyJs_anonymous_53_(el, value, name, element, this, arguments, var=var):
        var = Scope({u'el':el, u'name':name, u'this':this, u'arguments':arguments, u'value':value, u'element':element}, var)
        var.registers([u'el', u'state', u'name', u'value', u'element'])
        var.put(u'state', var.get(u'analInputCheckedState')(var.get(u'element'), var.get(u'value')))
        var.get(u'boolPropHandler').callprop(u'prop', var.get(u'el'), (var.get(u'state') if (var.get(u'state')!=var.get(u"null")) else var.get(u'value')), Js(u'checked'), var.get(u'element'))
    PyJs_anonymous_53_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_54_(element, bindInfo, data, this, arguments, var=var):
        var = Scope({u'this':this, u'bindInfo':bindInfo, u'data':data, u'arguments':arguments, u'element':element}, var)
        var.registers([u'el', u'bindType', u'element', u'bindInfo', u'data', u'bindValue'])
        var.put(u'el', var.get(u'element').get(u'el'))
        var.put(u'bindValue', var.get(u'getANodeProp')(var.get(u'element').get(u'aNode'), Js(u'value')))
        var.put(u'bindType', (var.get(u'getANodeProp')(var.get(u'element').get(u'aNode'), Js(u'type')) or Js({})))
        if (var.get(u'bindValue') and var.get(u'bindType')):
            while 1:
                SWITCHED = False
                CONDITION = (var.get(u'el').get(u'type').callprop(u'toLowerCase'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'checkbox')):
                    SWITCHED = True
                    var.get(u'data').callprop((Js(u'push') if var.get(u'el').get(u'checked') else Js(u'remove')), var.get(u'bindInfo').get(u'expr'), var.get(u'el').get(u'value'))
                    return var.get('undefined')
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'radio')):
                    SWITCHED = True
                    (var.get(u'el').get(u'checked') and var.get(u'data').callprop(u'set', var.get(u'bindInfo').get(u'expr'), var.get(u'el').get(u'value'), Js({u'target':Js({u'id':var.get(u'element').get(u'id'),u'prop':var.get(u'bindInfo').get(u'name')})})))
                    return var.get('undefined')
                SWITCHED = True
                break
        var.get(u'defaultElementPropHandler').callprop(u'output', var.get(u'element'), var.get(u'bindInfo'), var.get(u'data'))
    PyJs_anonymous_54_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_55_(el, value, name, element, this, arguments, var=var):
        var = Scope({u'el':el, u'name':name, u'this':this, u'arguments':arguments, u'value':value, u'element':element}, var)
        var.registers([u'el', u'name', u'value', u'element'])
        var.get(u'defaultElementPropHandler').callprop(u'prop', var.get(u'el'), var.get(u'value'), var.get(u'name'), var.get(u'element'))
        if var.get(u'isOptionSelected')(var.get(u'element'), var.get(u'value')):
            var.get(u'el').put(u'selected', Js(True))
    PyJs_anonymous_55_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_56_(el, value, this, arguments, var=var):
        var = Scope({u'this':this, u'el':el, u'arguments':arguments, u'value':value}, var)
        var.registers([u'el', u'value'])
        var.get(u'el').put(u'value', (var.get(u'value') or Js(u'')))
    PyJs_anonymous_56_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_57_(el, value, this, arguments, var=var):
        var = Scope({u'this':this, u'el':el, u'arguments':arguments, u'value':value}, var)
        var.registers([u'el', u'value'])
        var.get(u'el').callprop(u'setAttribute', Js(u'type'), (var.get(u'value') or Js(u'')))
    PyJs_anonymous_57_._set_name(u'anonymous')
    var.put(u'elementPropHandlers', Js({u'input':Js({u'multiple':var.get(u'boolPropHandler'),u'checked':Js({u'prop':PyJs_anonymous_53_,u'output':PyJs_anonymous_54_}),u'readonly':var.get(u'boolPropHandler'),u'disabled':var.get(u'boolPropHandler'),u'autofocus':var.get(u'boolPropHandler'),u'required':var.get(u'boolPropHandler')}),u'option':Js({u'value':Js({u'prop':PyJs_anonymous_55_})}),u'select':Js({u'value':Js({u'prop':PyJs_anonymous_56_,u'output':var.get(u'defaultElementPropHandler').get(u'output')}),u'readonly':var.get(u'boolPropHandler'),u'disabled':var.get(u'boolPropHandler'),u'autofocus':var.get(u'boolPropHandler'),u'required':var.get(u'boolPropHandler')}),u'textarea':Js({u'readonly':var.get(u'boolPropHandler'),u'disabled':var.get(u'boolPropHandler'),u'autofocus':var.get(u'boolPropHandler'),u'required':var.get(u'boolPropHandler')}),u'button':Js({u'disabled':var.get(u'boolPropHandler'),u'autofocus':var.get(u'boolPropHandler'),u'type':Js({u'prop':PyJs_anonymous_57_})})}))
    pass
    pass
    pass
    pass
    pass
    @Js
    def PyJs_anonymous_58_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        if var.get(u"this").get(u'typeChecker'):
            var.get(u"this").callprop(u'typeChecker', var.get(u"this").get(u'raw'))
    PyJs_anonymous_58_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'checkDataTypes', PyJs_anonymous_58_)
    @Js
    def PyJs_anonymous_59_(typeChecker, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'typeChecker':typeChecker}, var)
        var.registers([u'typeChecker'])
        var.get(u"this").put(u'typeChecker', var.get(u'typeChecker'))
    PyJs_anonymous_59_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'setTypeChecker', PyJs_anonymous_59_)
    @Js
    def PyJs_anonymous_60_(listener, this, arguments, var=var):
        var = Scope({u'listener':listener, u'this':this, u'arguments':arguments}, var)
        var.registers([u'listener'])
        if PyJsStrictEq(var.get(u'listener',throw=False).typeof(),Js(u'function')):
            var.get(u"this").get(u'listeners').callprop(u'push', var.get(u'listener'))
    PyJs_anonymous_60_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'listen', PyJs_anonymous_60_)
    @Js
    def PyJs_anonymous_61_(listener, this, arguments, var=var):
        var = Scope({u'listener':listener, u'this':this, u'arguments':arguments}, var)
        var.registers([u'listener', u'len'])
        var.put(u'len', var.get(u"this").get(u'listeners').get(u'length'))
        while (var.put(u'len',Js(var.get(u'len').to_number())-Js(1))+Js(1)):
            if (var.get(u'listener').neg() or PyJsStrictEq(var.get(u"this").get(u'listeners').get(var.get(u'len')),var.get(u'listener'))):
                var.get(u"this").get(u'listeners').callprop(u'splice', var.get(u'len'), Js(1.0))
    PyJs_anonymous_61_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'unlisten', PyJs_anonymous_61_)
    @Js
    def PyJs_anonymous_62_(change, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'change':change}, var)
        var.registers([u'i', u'change'])
        if ((var.get(u'change').get(u'option').get(u'silent') or var.get(u'change').get(u'option').get(u'silence')) or var.get(u'change').get(u'option').get(u'quiet')):
            return var.get('undefined')
        #for JS loop
        var.put(u'i', Js(0.0))
        while (var.get(u'i')<var.get(u"this").get(u'listeners').get(u'length')):
            try:
                var.get(u"this").get(u'listeners').get(var.get(u'i')).callprop(u'call', var.get(u"this"), var.get(u'change'))
            finally:
                    (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
    PyJs_anonymous_62_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'fire', PyJs_anonymous_62_)
    @Js
    def PyJs_anonymous_63_(expr, callee, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'callee':callee, u'arguments':arguments}, var)
        var.registers([u'paths', u'i', u'expr', u'l', u'value', u'callee'])
        var.put(u'value', var.get(u"this").get(u'raw'))
        if var.get(u'expr').neg():
            return var.get(u'value')
        var.put(u'expr', var.get(u'parseExpr')(var.get(u'expr')))
        var.put(u'paths', var.get(u'expr').get(u'paths'))
        var.put(u'callee', (var.get(u'callee') or var.get(u"this")))
        var.put(u'value', var.get(u'value').get(var.get(u'paths').get(u'0').get(u'value')))
        if ((var.get(u'value')==var.get(u"null")) and var.get(u"this").get(u'parent')):
            var.put(u'value', var.get(u"this").get(u'parent').callprop(u'get', var.get(u'expr'), var.get(u'callee')))
        else:
            #for JS loop
            var.put(u'i', Js(1.0))
            var.put(u'l', var.get(u'paths').get(u'length'))
            while ((var.get(u'value')!=var.get(u"null")) and (var.get(u'i')<var.get(u'l'))):
                try:
                    var.put(u'value', var.get(u'value').get((var.get(u'paths').get(var.get(u'i')).get(u'value') or var.get(u'evalExpr')(var.get(u'paths').get(var.get(u'i')), var.get(u'callee')))))
                finally:
                        (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        return var.get(u'value')
    PyJs_anonymous_63_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'get', PyJs_anonymous_63_)
    pass
    @Js
    def PyJs_anonymous_64_(expr, value, option, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'option':option, u'value':value, u'arguments':arguments}, var)
        var.registers([u'expr', u'exprRaw', u'option', u'value'])
        var.put(u'option', (var.get(u'option') or Js({})))
        var.put(u'exprRaw', var.get(u'expr'))
        var.put(u'expr', var.get(u'parseExpr')(var.get(u'expr')))
        if PyJsStrictNeq(var.get(u'expr').get(u'type'),Js(4.0)):
            PyJsTempException = JsToPyException(var.get(u'Error').create((Js(u'[SAN ERROR] Invalid Expression in Data set: ')+var.get(u'exprRaw'))))
            raise PyJsTempException
        if (PyJsStrictEq(var.get(u"this").callprop(u'get', var.get(u'expr')),var.get(u'value')) and var.get(u'option').get(u'force').neg()):
            return var.get('undefined')
        var.put(u'expr', var.get(u'createAccessor')(var.get(u'expr').get(u'paths').callprop(u'slice', Js(0.0))))
        var.get(u'dataCache').callprop(u'clear')
        var.get(u"this").put(u'raw', var.get(u'immutableSet')(var.get(u"this").get(u'raw'), var.get(u'expr').get(u'paths'), Js(0.0), var.get(u'expr').get(u'paths').get(u'length'), var.get(u'value'), var.get(u"this")))
        var.get(u"this").callprop(u'fire', Js({u'type':Js(1.0),u'expr':var.get(u'expr'),u'value':var.get(u'value'),u'option':var.get(u'option')}))
        var.get(u"this").callprop(u'checkDataTypes')
    PyJs_anonymous_64_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'set', PyJs_anonymous_64_)
    @Js
    def PyJs_anonymous_65_(expr, source, option, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'option':option, u'arguments':arguments, u'source':source}, var)
        var.registers([u'expr', u'exprRaw', u'option', u'key', u'source'])
        var.put(u'option', (var.get(u'option') or Js({})))
        var.put(u'exprRaw', var.get(u'expr'))
        var.put(u'expr', var.get(u'parseExpr')(var.get(u'expr')))
        if PyJsStrictNeq(var.get(u'expr').get(u'type'),Js(4.0)):
            PyJsTempException = JsToPyException(var.get(u'Error').create((Js(u'[SAN ERROR] Invalid Expression in Data merge: ')+var.get(u'exprRaw'))))
            raise PyJsTempException
        if PyJsStrictNeq(var.get(u"this").callprop(u'get', var.get(u'expr')).typeof(),Js(u'object')):
            PyJsTempException = JsToPyException(var.get(u'Error').create((Js(u"[SAN ERROR] Merge Expects a Target of Type 'object'; got ")+var.get(u'oldValue',throw=False).typeof())))
            raise PyJsTempException
        if PyJsStrictNeq(var.get(u'source',throw=False).typeof(),Js(u'object')):
            PyJsTempException = JsToPyException(var.get(u'Error').create((Js(u"[SAN ERROR] Merge Expects a Source of Type 'object'; got ")+var.get(u'source',throw=False).typeof())))
            raise PyJsTempException
        for PyJsTemp in var.get(u'source'):
            var.put(u'key', PyJsTemp)
            var.get(u"this").callprop(u'set', var.get(u'createAccessor')(var.get(u'expr').get(u'paths').callprop(u'concat', Js([Js({u'type':Js(1.0),u'value':var.get(u'key')})]))), var.get(u'source').get(var.get(u'key')), var.get(u'option'))
    PyJs_anonymous_65_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'merge', PyJs_anonymous_65_)
    @Js
    def PyJs_anonymous_66_(expr, fn, option, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'option':option, u'fn':fn, u'arguments':arguments}, var)
        var.registers([u'expr', u'exprRaw', u'fn', u'oldValue', u'option'])
        var.put(u'exprRaw', var.get(u'expr'))
        var.put(u'expr', var.get(u'parseExpr')(var.get(u'expr')))
        if PyJsStrictNeq(var.get(u'expr').get(u'type'),Js(4.0)):
            PyJsTempException = JsToPyException(var.get(u'Error').create((Js(u'[SAN ERROR] Invalid Expression in Data apply: ')+var.get(u'exprRaw'))))
            raise PyJsTempException
        var.put(u'oldValue', var.get(u"this").callprop(u'get', var.get(u'expr')))
        if PyJsStrictNeq(var.get(u'fn',throw=False).typeof(),Js(u'function')):
            PyJsTempException = JsToPyException(var.get(u'Error').create(((Js(u"[SAN ERROR] Invalid Argument's Type in Data apply: ")+Js(u'Expected Function but got '))+var.get(u'fn',throw=False).typeof())))
            raise PyJsTempException
        var.get(u"this").callprop(u'set', var.get(u'expr'), var.get(u'fn')(var.get(u'oldValue')), var.get(u'option'))
    PyJs_anonymous_66_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'apply', PyJs_anonymous_66_)
    @Js
    def PyJs_anonymous_67_(expr, args, option, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'args':args, u'option':option, u'arguments':arguments}, var)
        var.registers([u'index', u'target', u'expr', u'exprRaw', u'args', u'len', u'newArray', u'returnValue', u'option'])
        var.put(u'option', (var.get(u'option') or Js({})))
        var.put(u'exprRaw', var.get(u'expr'))
        var.put(u'expr', var.get(u'parseExpr')(var.get(u'expr')))
        if PyJsStrictNeq(var.get(u'expr').get(u'type'),Js(4.0)):
            PyJsTempException = JsToPyException(var.get(u'Error').create((Js(u'[SAN ERROR] Invalid Expression in Data splice: ')+var.get(u'exprRaw'))))
            raise PyJsTempException
        var.put(u'target', var.get(u"this").callprop(u'get', var.get(u'expr')))
        var.put(u'returnValue', Js([]))
        if var.get(u'target').instanceof(var.get(u'Array')):
            var.put(u'index', var.get(u'args').get(u'0'))
            var.put(u'len', var.get(u'target').get(u'length'))
            if (var.get(u'index')>var.get(u'len')):
                var.put(u'index', var.get(u'len'))
            else:
                if (var.get(u'index')<Js(0.0)):
                    var.put(u'index', (var.get(u'len')+var.get(u'index')))
                    if (var.get(u'index')<Js(0.0)):
                        var.put(u'index', Js(0.0))
            var.put(u'newArray', var.get(u'target').callprop(u'slice', Js(0.0)))
            var.put(u'returnValue', var.get(u'newArray').get(u'splice').callprop(u'apply', var.get(u'newArray'), var.get(u'args')))
            var.put(u'expr', var.get(u'createAccessor')(var.get(u'expr').get(u'paths').callprop(u'slice', Js(0.0))))
            var.get(u'dataCache').callprop(u'clear')
            var.get(u"this").put(u'raw', var.get(u'immutableSet')(var.get(u"this").get(u'raw'), var.get(u'expr').get(u'paths'), Js(0.0), var.get(u'expr').get(u'paths').get(u'length'), var.get(u'newArray'), var.get(u"this")))
            var.get(u"this").callprop(u'fire', Js({u'expr':var.get(u'expr'),u'type':Js(2.0),u'index':var.get(u'index'),u'deleteCount':var.get(u'returnValue').get(u'length'),u'value':var.get(u'returnValue'),u'insertions':var.get(u'args').callprop(u'slice', Js(2.0)),u'option':var.get(u'option')}))
        var.get(u"this").callprop(u'checkDataTypes')
        return var.get(u'returnValue')
    PyJs_anonymous_67_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'splice', PyJs_anonymous_67_)
    @Js
    def PyJs_anonymous_68_(expr, item, option, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'option':option, u'arguments':arguments, u'item':item}, var)
        var.registers([u'expr', u'target', u'option', u'item'])
        var.put(u'target', var.get(u"this").callprop(u'get', var.get(u'expr')))
        if var.get(u'target').instanceof(var.get(u'Array')):
            var.get(u"this").callprop(u'splice', var.get(u'expr'), Js([var.get(u'target').get(u'length'), Js(0.0), var.get(u'item')]), var.get(u'option'))
            return (var.get(u'target').get(u'length')+Js(1.0))
    PyJs_anonymous_68_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'push', PyJs_anonymous_68_)
    @Js
    def PyJs_anonymous_69_(expr, option, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'option':option, u'arguments':arguments}, var)
        var.registers([u'expr', u'target', u'len', u'option'])
        var.put(u'target', var.get(u"this").callprop(u'get', var.get(u'expr')))
        if var.get(u'target').instanceof(var.get(u'Array')):
            var.put(u'len', var.get(u'target').get(u'length'))
            if var.get(u'len'):
                return var.get(u"this").callprop(u'splice', var.get(u'expr'), Js([(var.get(u'len')-Js(1.0)), Js(1.0)]), var.get(u'option')).get(u'0')
    PyJs_anonymous_69_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'pop', PyJs_anonymous_69_)
    @Js
    def PyJs_anonymous_70_(expr, option, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'option':option, u'arguments':arguments}, var)
        var.registers([u'expr', u'option'])
        return var.get(u"this").callprop(u'splice', var.get(u'expr'), Js([Js(0.0), Js(1.0)]), var.get(u'option')).get(u'0')
    PyJs_anonymous_70_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'shift', PyJs_anonymous_70_)
    @Js
    def PyJs_anonymous_71_(expr, item, option, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'option':option, u'arguments':arguments, u'item':item}, var)
        var.registers([u'expr', u'target', u'option', u'item'])
        var.put(u'target', var.get(u"this").callprop(u'get', var.get(u'expr')))
        if var.get(u'target').instanceof(var.get(u'Array')):
            var.get(u"this").callprop(u'splice', var.get(u'expr'), Js([Js(0.0), Js(0.0), var.get(u'item')]), var.get(u'option'))
            return (var.get(u'target').get(u'length')+Js(1.0))
    PyJs_anonymous_71_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'unshift', PyJs_anonymous_71_)
    @Js
    def PyJs_anonymous_72_(expr, index, option, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'option':option, u'arguments':arguments, u'index':index}, var)
        var.registers([u'expr', u'option', u'index'])
        var.get(u"this").callprop(u'splice', var.get(u'expr'), Js([var.get(u'index'), Js(1.0)]), var.get(u'option'))
    PyJs_anonymous_72_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'removeAt', PyJs_anonymous_72_)
    @Js
    def PyJs_anonymous_73_(expr, value, option, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'option':option, u'value':value, u'arguments':arguments}, var)
        var.registers([u'expr', u'value', u'target', u'len', u'option'])
        var.put(u'target', var.get(u"this").callprop(u'get', var.get(u'expr')))
        if var.get(u'target').instanceof(var.get(u'Array')):
            var.put(u'len', var.get(u'target').get(u'length'))
            while (var.put(u'len',Js(var.get(u'len').to_number())-Js(1))+Js(1)):
                if PyJsStrictEq(var.get(u'target').get(var.get(u'len')),var.get(u'value')):
                    var.get(u"this").callprop(u'splice', var.get(u'expr'), Js([var.get(u'len'), Js(1.0)]), var.get(u'option'))
                    break
    PyJs_anonymous_73_._set_name(u'anonymous')
    var.get(u'Data').get(u'prototype').put(u'remove', PyJs_anonymous_73_)
    pass
    var.put(u'isBrowser', PyJsStrictNeq(var.get(u'window',throw=False).typeof(),Js(u'undefined')))
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    var.get(u'TextNode').get(u'prototype').put(u'nodeType', Js(1.0))
    @Js
    def PyJs_anonymous_75_(parentEl, beforeEl, this, arguments, var=var):
        var = Scope({u'this':this, u'parentEl':parentEl, u'arguments':arguments, u'beforeEl':beforeEl}, var)
        var.registers([u'tempFlag', u'parentEl', u'beforeEl'])
        var.get(u"this").put(u'content', var.get(u'evalExpr')(var.get(u"this").get(u'aNode').get(u'textExpr'), var.get(u"this").get(u'scope'), var.get(u"this").get(u'owner')))
        if var.get(u"this").get(u'aNode').get(u'textExpr').get(u'original'):
            var.get(u"this").put(u'sel', var.get(u'document').callprop(u'createComment', var.get(u"this").get(u'id')))
            var.get(u'insertBefore')(var.get(u"this").get(u'sel'), var.get(u'parentEl'), var.get(u'beforeEl'))
            var.get(u"this").put(u'el', var.get(u'document').callprop(u'createComment', var.get(u"this").get(u'id')))
            var.get(u'insertBefore')(var.get(u"this").get(u'el'), var.get(u'parentEl'), var.get(u'beforeEl'))
            var.put(u'tempFlag', var.get(u'document').callprop(u'createElement', Js(u'script')))
            var.get(u'parentEl').callprop(u'insertBefore', var.get(u'tempFlag'), var.get(u"this").get(u'el'))
            var.get(u'tempFlag').callprop(u'insertAdjacentHTML', Js(u'beforebegin'), var.get(u"this").get(u'content'))
            var.get(u'parentEl').callprop(u'removeChild', var.get(u'tempFlag'))
        else:
            var.get(u"this").put(u'el', var.get(u'document').callprop(u'createTextNode', var.get(u"this").get(u'content')))
            var.get(u'insertBefore')(var.get(u"this").get(u'el'), var.get(u'parentEl'), var.get(u'beforeEl'))
    PyJs_anonymous_75_._set_name(u'anonymous')
    var.get(u'TextNode').get(u'prototype').put(u'attach', PyJs_anonymous_75_)
    @Js
    def PyJs_anonymous_76_(noDetach, this, arguments, var=var):
        var = Scope({u'noDetach':noDetach, u'this':this, u'arguments':arguments}, var)
        var.registers([u'noDetach'])
        if var.get(u'noDetach').neg():
            var.get(u'removeEl')(var.get(u"this").get(u'el'))
            var.get(u'removeEl')(var.get(u"this").get(u'sel'))
        var.get(u"this").put(u'el', var.get(u"null"))
        var.get(u"this").put(u'sel', var.get(u"null"))
    PyJs_anonymous_76_._set_name(u'anonymous')
    var.get(u'TextNode').get(u'prototype').put(u'dispose', PyJs_anonymous_76_)
    var.put(u'textUpdateProp', (var.get(u'isBrowser') and (Js(u'textContent') if PyJsStrictEq(var.get(u'document').callprop(u'createTextNode', Js(u'')).get(u'textContent').typeof(),Js(u'string')) else Js(u'data'))))
    @Js
    def PyJs_anonymous_77_(changes, this, arguments, var=var):
        var = Scope({u'this':this, u'changes':changes, u'arguments':arguments}, var)
        var.registers([u'tempFlag', u'removeTarget', u'text', u'startRemoveEl', u'parentEl', u'len', u'changes'])
        if var.get(u"this").get(u'aNode').get(u'textExpr').get(u'value'):
            return var.get('undefined')
        var.put(u'len', (var.get(u'changes').get(u'length') if var.get(u'changes') else Js(0.0)))
        while (var.put(u'len',Js(var.get(u'len').to_number())-Js(1))+Js(1)):
            if var.get(u'changeExprCompare')(var.get(u'changes').get(var.get(u'len')).get(u'expr'), var.get(u"this").get(u'aNode').get(u'textExpr'), var.get(u"this").get(u'scope')):
                var.put(u'text', var.get(u'evalExpr')(var.get(u"this").get(u'aNode').get(u'textExpr'), var.get(u"this").get(u'scope'), var.get(u"this").get(u'owner')))
                if PyJsStrictNeq(var.get(u'text'),var.get(u"this").get(u'content')):
                    var.get(u"this").put(u'content', var.get(u'text'))
                    if var.get(u"this").get(u'aNode').get(u'textExpr').get(u'original'):
                        var.put(u'startRemoveEl', var.get(u"this").get(u'sel').get(u'nextSibling'))
                        var.put(u'parentEl', var.get(u"this").get(u'el').get(u'parentNode'))
                        while PyJsStrictNeq(var.get(u'startRemoveEl'),var.get(u"this").get(u'el')):
                            var.put(u'removeTarget', var.get(u'startRemoveEl'))
                            var.put(u'startRemoveEl', var.get(u'startRemoveEl').get(u'nextSibling'))
                            var.get(u'removeEl')(var.get(u'removeTarget'))
                        var.get(u'warnSetHTML')(var.get(u'parentEl'))
                        var.put(u'tempFlag', var.get(u'document').callprop(u'createElement', Js(u'script')))
                        var.get(u'parentEl').callprop(u'insertBefore', var.get(u'tempFlag'), var.get(u"this").get(u'el'))
                        var.get(u'tempFlag').callprop(u'insertAdjacentHTML', Js(u'beforebegin'), var.get(u'text'))
                        var.get(u'parentEl').callprop(u'removeChild', var.get(u'tempFlag'))
                    else:
                        var.get(u"this").get(u'el').put(var.get(u'textUpdateProp'), var.get(u'text'))
                return var.get('undefined')
    PyJs_anonymous_77_._set_name(u'anonymous')
    var.get(u'TextNode').get(u'prototype').put(u'_update', PyJs_anonymous_77_)
    pass
    pass
    @Js
    def PyJs_anonymous_78_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        var.get(u"this").put(u'current', var.get(u"this").get(u'raw').get(var.get(u"this").put(u'index',Js(var.get(u"this").get(u'index').to_number())+Js(1))))
        var.get(u"this").put(u'next', var.get(u"this").get(u'raw').get((var.get(u"this").get(u'index')+Js(1.0))))
    PyJs_anonymous_78_._set_name(u'anonymous')
    var.get(u'DOMChildrenWalker').get(u'prototype').put(u'goNext', PyJs_anonymous_78_)
    pass
    var.get(u'Element').get(u'prototype').put(u'nodeType', Js(4.0))
    var.get(u'Element').get(u'prototype').put(u'attach', var.get(u'elementOwnAttach'))
    var.get(u'Element').get(u'prototype').put(u'detach', var.get(u'elementOwnDetach'))
    var.get(u'Element').get(u'prototype').put(u'dispose', var.get(u'elementOwnDispose'))
    var.get(u'Element').get(u'prototype').put(u'_create', var.get(u'elementOwnCreate'))
    var.get(u'Element').get(u'prototype').put(u'_toPhase', var.get(u'elementOwnToPhase'))
    var.get(u'Element').get(u'prototype').put(u'_onEl', var.get(u'elementOwnOnEl'))
    @Js
    def PyJs_anonymous_79_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        if var.get(u"this").get(u'leaveDispose'):
            if var.get(u"this").get(u'lifeCycle').get(u'disposed').neg():
                var.get(u'elementDispose')(var.get(u"this"), var.get(u"this").get(u'disposeNoDetach'), var.get(u"this").get(u'disposeNoTransition'))
        else:
            if var.get(u"this").get(u'lifeCycle').get(u'attached'):
                var.get(u'removeEl')(var.get(u"this").get(u'el'))
                var.get(u"this").callprop(u'_toPhase', Js(u'detached'))
    PyJs_anonymous_79_._set_name(u'anonymous')
    var.get(u'Element').get(u'prototype').put(u'_doneLeave', PyJs_anonymous_79_)
    @Js
    def PyJs_anonymous_80_(changes, this, arguments, var=var):
        var = Scope({u'this':this, u'changes':changes, u'arguments':arguments}, var)
        var.registers([u'me', u'dynamicProps', u'i', u'changes', u'j', u'l', u'len', u'prop', u'htmlDirective', u'changeLen', u'change'])
        if var.get(u'changesIsInDataRef')(var.get(u'changes'), var.get(u"this").get(u'aNode').get(u'hotspot').get(u'data')).neg():
            return var.get('undefined')
        var.put(u'me', var.get(u"this"))
        @Js
        def PyJs_anonymous_81_(name, value, this, arguments, var=var):
            var = Scope({u'this':this, u'name':name, u'value':value, u'arguments':arguments}, var)
            var.registers([u'name', u'value'])
            if var.get(u'me').get(u'aNode').get(u'hotspot').get(u'props').contains(var.get(u'name')):
                return var.get('undefined')
            var.get(u'getPropHandler')(var.get(u'me').get(u'tagName'), var.get(u'name')).callprop(u'prop', var.get(u'me').get(u'el'), var.get(u'value'), var.get(u'name'), var.get(u'me'))
        PyJs_anonymous_81_._set_name(u'anonymous')
        var.get(u'nodeSBindUpdate')(var.get(u"this"), var.get(u"this").get(u'aNode').get(u'directives').get(u'bind'), var.get(u'changes'), PyJs_anonymous_81_)
        var.put(u'dynamicProps', var.get(u"this").get(u'aNode').get(u'hotspot').get(u'dynamicProps'))
        #for JS loop
        var.put(u'i', Js(0.0))
        var.put(u'l', var.get(u'dynamicProps').get(u'length'))
        while (var.get(u'i')<var.get(u'l')):
            try:
                var.put(u'prop', var.get(u'dynamicProps').get(var.get(u'i')))
                #for JS loop
                var.put(u'j', Js(0.0))
                var.put(u'changeLen', var.get(u'changes').get(u'length'))
                while (var.get(u'j')<var.get(u'changeLen')):
                    try:
                        var.put(u'change', var.get(u'changes').get(var.get(u'j')))
                        def PyJs_LONG_82_(var=var):
                            return (var.get(u'isDataChangeByElement')(var.get(u'change'), var.get(u"this"), var.get(u'prop').get(u'name')).neg() and (var.get(u'changeExprCompare')(var.get(u'change').get(u'expr'), var.get(u'prop').get(u'expr'), var.get(u"this").get(u'scope')) or (var.get(u'prop').get(u'hintExpr') and var.get(u'changeExprCompare')(var.get(u'change').get(u'expr'), var.get(u'prop').get(u'hintExpr'), var.get(u"this").get(u'scope')))))
                        if PyJs_LONG_82_():
                            var.get(u'handleProp')(var.get(u"this"), var.get(u'evalExpr')(var.get(u'prop').get(u'expr'), var.get(u"this").get(u'scope'), var.get(u"this").get(u'owner')), var.get(u'prop'))
                            break
                    finally:
                            (var.put(u'j',Js(var.get(u'j').to_number())+Js(1))-Js(1))
            finally:
                    (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        var.put(u'htmlDirective', var.get(u"this").get(u'aNode').get(u'directives').get(u'html'))
        if var.get(u'htmlDirective'):
            var.put(u'len', var.get(u'changes').get(u'length'))
            while (var.put(u'len',Js(var.get(u'len').to_number())-Js(1))+Js(1)):
                if var.get(u'changeExprCompare')(var.get(u'changes').get(var.get(u'len')).get(u'expr'), var.get(u'htmlDirective').get(u'value'), var.get(u"this").get(u'scope')):
                    var.get(u'warnSetHTML')(var.get(u"this").get(u'el'))
                    var.get(u"this").get(u'el').put(u'innerHTML', var.get(u'evalExpr')(var.get(u'htmlDirective').get(u'value'), var.get(u"this").get(u'scope'), var.get(u"this").get(u'owner')))
                    break
        else:
            var.get(u'elementUpdateChildren')(var.get(u"this").get(u'children'), var.get(u'changes'))
    PyJs_anonymous_80_._set_name(u'anonymous')
    var.get(u'Element').get(u'prototype').put(u'_update', PyJs_anonymous_80_)
    var.get(u'Element').get(u'prototype').put(u'_attached', var.get(u'elementOwnAttached'))
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    var.get(u'SlotNode').get(u'prototype').put(u'nodeType', Js(6.0))
    @Js
    def PyJs_anonymous_87_(noDetach, noTransition, this, arguments, var=var):
        var = Scope({u'noDetach':noDetach, u'this':this, u'noTransition':noTransition, u'arguments':arguments}, var)
        var.registers([u'noDetach', u'noTransition'])
        var.get(u"this").put(u'childOwner', var.get(u"null"))
        var.get(u"this").put(u'childScope', var.get(u"null"))
        var.get(u'elementDisposeChildren')(var.get(u"this").get(u'children'), var.get(u'noDetach'), var.get(u'noTransition'))
        if var.get(u'noDetach').neg():
            var.get(u'removeEl')(var.get(u"this").get(u'el'))
            var.get(u'removeEl')(var.get(u"this").get(u'sel'))
        var.get(u'nodeDispose')(var.get(u"this"))
    PyJs_anonymous_87_._set_name(u'anonymous')
    var.get(u'SlotNode').get(u'prototype').put(u'dispose', PyJs_anonymous_87_)
    var.get(u'SlotNode').get(u'prototype').put(u'attach', var.get(u'nodeOwnOnlyChildrenAttach'))
    var.get(u'SlotNode').get(u'prototype').put(u'_toPhase', var.get(u'elementOwnToPhase'))
    @Js
    def PyJs_anonymous_88_(changes, isFromOuter, this, arguments, var=var):
        var = Scope({u'this':this, u'isFromOuter':isFromOuter, u'changes':changes, u'arguments':arguments}, var)
        var.registers([u'me', u'changes', u'isFromOuter', u'varKeys', u'scopedChanges'])
        var.put(u'me', var.get(u"this"))
        if (var.get(u"this").get(u'nameBind') and PyJsStrictNeq(var.get(u'evalExpr')(var.get(u"this").get(u'nameBind').get(u'expr'), var.get(u"this").get(u'scope'), var.get(u"this").get(u'owner')),var.get(u"this").get(u'name'))):
            var.get(u"this").get(u'owner').callprop(u'_notifyNeedReload')
            return Js(False)
        if var.get(u'isFromOuter'):
            if var.get(u"this").get(u'isInserted'):
                var.get(u'elementUpdateChildren')(var.get(u"this").get(u'children'), var.get(u'changes'))
        else:
            if var.get(u"this").get(u'isScoped'):
                var.put(u'varKeys', Js({}))
                @Js
                def PyJs_anonymous_89_(varItem, this, arguments, var=var):
                    var = Scope({u'this':this, u'varItem':varItem, u'arguments':arguments}, var)
                    var.registers([u'varItem'])
                    var.get(u'varKeys').put(var.get(u'varItem').get(u'name'), Js(1.0))
                    var.get(u'me').get(u'childScope').callprop(u'set', var.get(u'varItem').get(u'name'), var.get(u'evalExpr')(var.get(u'varItem').get(u'expr'), var.get(u'me').get(u'scope'), var.get(u'me').get(u'owner')))
                PyJs_anonymous_89_._set_name(u'anonymous')
                var.get(u'each')(var.get(u"this").get(u'aNode').get(u'vars'), PyJs_anonymous_89_)
                var.put(u'scopedChanges', Js([]))
                @Js
                def PyJs_anonymous_90_(name, value, this, arguments, var=var):
                    var = Scope({u'this':this, u'name':name, u'value':value, u'arguments':arguments}, var)
                    var.registers([u'name', u'value'])
                    if var.get(u'varKeys').get(var.get(u'name')):
                        return var.get('undefined')
                    var.get(u'me').get(u'childScope').callprop(u'set', var.get(u'name'), var.get(u'value'))
                    var.get(u'scopedChanges').callprop(u'push', Js({u'type':Js(1.0),u'expr':var.get(u'createAccessor')(Js([Js({u'type':Js(1.0),u'value':var.get(u'name')})])),u'value':var.get(u'value'),u'option':Js({})}))
                PyJs_anonymous_90_._set_name(u'anonymous')
                var.get(u'nodeSBindUpdate')(var.get(u"this"), var.get(u"this").get(u'aNode').get(u'directives').get(u'bind'), var.get(u'changes'), PyJs_anonymous_90_)
                @Js
                def PyJs_anonymous_91_(change, this, arguments, var=var):
                    var = Scope({u'this':this, u'arguments':arguments, u'change':change}, var)
                    var.registers([u'change'])
                    if var.get(u'me').get(u'isInserted').neg():
                        var.get(u'scopedChanges').callprop(u'push', var.get(u'change'))
                    @Js
                    def PyJs_anonymous_92_(varItem, this, arguments, var=var):
                        var = Scope({u'this':this, u'varItem':varItem, u'arguments':arguments}, var)
                        var.registers([u'varItem', u'relation', u'name'])
                        var.put(u'name', var.get(u'varItem').get(u'name'))
                        var.put(u'relation', var.get(u'changeExprCompare')(var.get(u'change').get(u'expr'), var.get(u'varItem').get(u'expr'), var.get(u'me').get(u'scope')))
                        if (var.get(u'relation')<Js(1.0)):
                            return var.get('undefined')
                        if PyJsStrictNeq(var.get(u'change').get(u'type'),Js(2.0)):
                            var.get(u'scopedChanges').callprop(u'push', Js({u'type':Js(1.0),u'expr':var.get(u'createAccessor')(Js([Js({u'type':Js(1.0),u'value':var.get(u'name')})])),u'value':var.get(u'me').get(u'childScope').callprop(u'get', var.get(u'name')),u'option':var.get(u'change').get(u'option')}))
                        else:
                            if PyJsStrictEq(var.get(u'relation'),Js(2.0)):
                                var.get(u'scopedChanges').callprop(u'push', Js({u'expr':var.get(u'createAccessor')(Js([Js({u'type':Js(1.0),u'value':var.get(u'name')})])),u'type':Js(2.0),u'index':var.get(u'change').get(u'index'),u'deleteCount':var.get(u'change').get(u'deleteCount'),u'value':var.get(u'change').get(u'value'),u'insertions':var.get(u'change').get(u'insertions'),u'option':var.get(u'change').get(u'option')}))
                    PyJs_anonymous_92_._set_name(u'anonymous')
                    var.get(u'each')(var.get(u'me').get(u'aNode').get(u'vars'), PyJs_anonymous_92_)
                PyJs_anonymous_91_._set_name(u'anonymous')
                var.get(u'each')(var.get(u'changes'), PyJs_anonymous_91_)
                var.get(u'elementUpdateChildren')(var.get(u"this").get(u'children'), var.get(u'scopedChanges'))
            else:
                if var.get(u"this").get(u'isInserted').neg():
                    var.get(u'elementUpdateChildren')(var.get(u"this").get(u'children'), var.get(u'changes'))
    PyJs_anonymous_88_._set_name(u'anonymous')
    var.get(u'SlotNode').get(u'prototype').put(u'_update', PyJs_anonymous_88_)
    pass
    pass
    pass
    pass
    @Js
    def PyJs_anonymous_93_(expr, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'arguments':arguments}, var)
        var.registers([u'me', u'resolvedPaths', u'resolveItem', u'directive', u'expr'])
        @Js
        def PyJsHoisted_resolveItem_(expr, this, arguments, var=var):
            var = Scope({u'this':this, u'expr':expr, u'arguments':arguments}, var)
            var.registers([u'expr'])
            if (PyJsStrictEq(var.get(u'expr').get(u'type'),Js(4.0)) and PyJsStrictEq(var.get(u'expr').get(u'paths').get(u'0').get(u'value'),var.get(u'directive').get(u'item').get(u'paths').get(u'0').get(u'value'))):
                return var.get(u'createAccessor')(var.get(u'directive').get(u'value').get(u'paths').callprop(u'concat', Js({u'type':Js(2.0),u'value':var.get(u'me').callprop(u'get', var.get(u'directive').get(u'index'))}), var.get(u'expr').get(u'paths').callprop(u'slice', Js(1.0))))
            return var.get(u'expr')
        PyJsHoisted_resolveItem_.func_name = u'resolveItem'
        var.put(u'resolveItem', PyJsHoisted_resolveItem_)
        var.put(u'directive', var.get(u"this").get(u'directive'))
        var.put(u'me', var.get(u"this"))
        pass
        var.put(u'expr', var.get(u'resolveItem')(var.get(u'expr')))
        var.put(u'resolvedPaths', Js([]))
        @Js
        def PyJs_anonymous_94_(item, this, arguments, var=var):
            var = Scope({u'this':this, u'item':item, u'arguments':arguments}, var)
            var.registers([u'item'])
            var.get(u'resolvedPaths').callprop(u'push', (Js({u'type':Js(2.0),u'value':var.get(u'me').callprop(u'get', var.get(u'directive').get(u'index'))}) if (PyJsStrictEq(var.get(u'item').get(u'type'),Js(4.0)) and PyJsStrictEq(var.get(u'item').get(u'paths').get(u'0').get(u'value'),var.get(u'directive').get(u'index').get(u'paths').get(u'0').get(u'value'))) else var.get(u'resolveItem')(var.get(u'item'))))
        PyJs_anonymous_94_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'expr').get(u'paths'), PyJs_anonymous_94_)
        return var.get(u'createAccessor')(var.get(u'resolvedPaths'))
    PyJs_anonymous_93_._set_name(u'anonymous')
    var.get(u'ForItemData').get(u'prototype').put(u'exprResolve', PyJs_anonymous_93_)
    var.get(u'inherits')(var.get(u'ForItemData'), var.get(u'Data'))
    @Js
    def PyJs_anonymous_95_(method, this, arguments, var=var):
        var = Scope({u'this':this, u'method':method, u'arguments':arguments}, var)
        var.registers([u'method'])
        var.get(u'ForItemData').get(u'prototype').put((Js(u'_')+var.get(u'method')), var.get(u'Data').get(u'prototype').get(var.get(u'method')))
        @Js
        def PyJs_anonymous_96_(expr, this, arguments, var=var):
            var = Scope({u'this':this, u'expr':expr, u'arguments':arguments}, var)
            var.registers([u'expr'])
            var.put(u'expr', var.get(u"this").callprop(u'exprResolve', var.get(u'parseExpr')(var.get(u'expr'))))
            var.get(u'dataCache').callprop(u'clear')
            var.get(u"this").get(u'parent').get(var.get(u'method')).callprop(u'apply', var.get(u"this").get(u'parent'), Js([var.get(u'expr')]).callprop(u'concat', var.get(u'Array').get(u'prototype').get(u'slice').callprop(u'call', var.get(u'arguments'), Js(1.0))))
        PyJs_anonymous_96_._set_name(u'anonymous')
        var.get(u'ForItemData').get(u'prototype').put(var.get(u'method'), PyJs_anonymous_96_)
    PyJs_anonymous_95_._set_name(u'anonymous')
    var.get(u'each')(Js([Js(u'set'), Js(u'remove'), Js(u'unshift'), Js(u'shift'), Js(u'push'), Js(u'pop'), Js(u'splice')]), PyJs_anonymous_95_)
    pass
    pass
    var.get(u'ForNode').get(u'prototype').put(u'nodeType', Js(3.0))
    var.get(u'ForNode').get(u'prototype').put(u'_create', var.get(u'nodeOwnCreateStump'))
    var.get(u'ForNode').get(u'prototype').put(u'dispose', var.get(u'nodeOwnSimpleDispose'))
    pass
    @Js
    def PyJs_anonymous_99_(parentEl, beforeEl, this, arguments, var=var):
        var = Scope({u'this':this, u'parentEl':parentEl, u'arguments':arguments, u'beforeEl':beforeEl}, var)
        var.registers([u'parentEl', u'beforeEl'])
        var.get(u"this").callprop(u'_create')
        var.get(u'insertBefore')(var.get(u"this").get(u'el'), var.get(u'parentEl'), var.get(u'beforeEl'))
        var.get(u"this").put(u'listData', var.get(u'evalExpr')(var.get(u"this").get(u'param').get(u'value'), var.get(u"this").get(u'scope'), var.get(u"this").get(u'owner')))
        var.get(u"this").callprop(u'_createChildren')
    PyJs_anonymous_99_._set_name(u'anonymous')
    var.get(u'ForNode').get(u'prototype').put(u'attach', PyJs_anonymous_99_)
    @Js
    def PyJs_anonymous_100_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([u'me', u'parentEl'])
        var.put(u'me', var.get(u"this"))
        var.put(u'parentEl', var.get(u"this").get(u'el').get(u'parentNode'))
        @Js
        def PyJs_anonymous_101_(value, i, this, arguments, var=var):
            var = Scope({u'i':i, u'this':this, u'arguments':arguments, u'value':value}, var)
            var.registers([u'i', u'value', u'child'])
            var.put(u'child', var.get(u'createForDirectiveChild')(var.get(u'me'), var.get(u'value'), var.get(u'i')))
            var.get(u'me').get(u'children').callprop(u'push', var.get(u'child'))
            var.get(u'child').callprop(u'attach', var.get(u'parentEl'), var.get(u'me').get(u'el'))
        PyJs_anonymous_101_._set_name(u'anonymous')
        var.get(u'eachForData')(var.get(u"this"), PyJs_anonymous_101_)
    PyJs_anonymous_100_._set_name(u'anonymous')
    var.get(u'ForNode').get(u'prototype').put(u'_createChildren', PyJs_anonymous_100_)
    @Js
    def PyJs_anonymous_102_(changes, this, arguments, var=var):
        var = Scope({u'this':this, u'changes':changes, u'arguments':arguments}, var)
        var.registers([u'listData', u'oldIsArr', u'newIsArr', u'changes', u'me'])
        var.put(u'listData', var.get(u'evalExpr')(var.get(u"this").get(u'param').get(u'value'), var.get(u"this").get(u'scope'), var.get(u"this").get(u'owner')))
        var.put(u'oldIsArr', var.get(u"this").get(u'listData').instanceof(var.get(u'Array')))
        var.put(u'newIsArr', var.get(u'listData').instanceof(var.get(u'Array')))
        if var.get(u"this").get(u'children').get(u'length'):
            if (var.get(u'listData').neg() or (var.get(u'newIsArr') and PyJsStrictEq(var.get(u'listData').get(u'length'),Js(0.0)))):
                var.get(u"this").callprop(u'_disposeChildren')
                var.get(u"this").put(u'listData', var.get(u'listData'))
                return var.get('undefined')
            if (PyJsStrictNeq(var.get(u'oldIsArr'),var.get(u'newIsArr')) or var.get(u'newIsArr').neg()):
                var.get(u"this").put(u'listData', var.get(u'listData'))
                var.put(u'me', var.get(u"this"))
                @Js
                def PyJs_anonymous_103_(this, arguments, var=var):
                    var = Scope({u'this':this, u'arguments':arguments}, var)
                    var.registers([])
                    var.get(u'me').callprop(u'_createChildren')
                PyJs_anonymous_103_._set_name(u'anonymous')
                var.get(u"this").callprop(u'_disposeChildren', var.get(u"null"), PyJs_anonymous_103_)
                return var.get('undefined')
            var.get(u"this").callprop(u'_updateArray', var.get(u'changes'), var.get(u'listData'))
            var.get(u"this").put(u'listData', var.get(u'listData'))
        else:
            var.get(u"this").put(u'listData', var.get(u'listData'))
            var.get(u"this").callprop(u'_createChildren')
    PyJs_anonymous_102_._set_name(u'anonymous')
    var.get(u'ForNode').get(u'prototype').put(u'_update', PyJs_anonymous_102_)
    @Js
    def PyJs_anonymous_104_(children, callback, this, arguments, var=var):
        var = Scope({u'this':this, u'callback':callback, u'children':children, u'arguments':arguments}, var)
        var.registers([u'me', u'disposeChild', u'i', u'parentEl', u'violentClear', u'len', u'children', u'disposedChildCount', u'callback', u'parentFirstChild', u'childDisposed', u'parentLastChild'])
        @Js
        def PyJsHoisted_childDisposed_(this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments}, var)
            var.registers([u'replaceNode'])
            (var.put(u'disposedChildCount',Js(var.get(u'disposedChildCount').to_number())+Js(1))-Js(1))
            if (var.get(u'disposedChildCount')>=var.get(u'len')):
                if var.get(u'violentClear'):
                    var.put(u'replaceNode', var.get(u'parentEl').callprop(u'cloneNode', Js(False)))
                    var.get(u'parentEl').get(u'parentNode').callprop(u'replaceChild', var.get(u'replaceNode'), var.get(u'parentEl'))
                    var.get(u'me').put(u'el', var.get(u'document').callprop(u'createComment', var.get(u'me').get(u'id')))
                    var.get(u'replaceNode').callprop(u'appendChild', var.get(u'me').get(u'el'))
                (var.get(u'callback') and var.get(u'callback')())
        PyJsHoisted_childDisposed_.func_name = u'childDisposed'
        var.put(u'childDisposed', PyJsHoisted_childDisposed_)
        var.put(u'parentEl', var.get(u"this").get(u'el').get(u'parentNode'))
        var.put(u'parentFirstChild', var.get(u'parentEl').get(u'firstChild'))
        var.put(u'parentLastChild', var.get(u'parentEl').get(u'lastChild'))
        var.put(u'len', var.get(u"this").get(u'children').get(u'length'))
        def PyJs_LONG_105_(var=var):
            return (((var.get(u'len') and PyJsStrictEq(var.get(u'parentFirstChild'),var.get(u"this").get(u'children').get(u'0').get(u'el'))) and (PyJsStrictEq(var.get(u'parentLastChild'),var.get(u"this").get(u'el')) or PyJsStrictEq(var.get(u'parentLastChild'),var.get(u"this").get(u'children').get((var.get(u'len')-Js(1.0))).get(u'el')))) or ((PyJsStrictEq(var.get(u'len'),Js(0.0)) and PyJsStrictEq(var.get(u'parentFirstChild'),var.get(u"this").get(u'el'))) and PyJsStrictEq(var.get(u'parentLastChild'),var.get(u"this").get(u'el'))))
        var.put(u'violentClear', ((var.get(u"this").get(u'aNode').get(u'directives').get(u'transition').neg() and var.get(u'children').neg()) and PyJs_LONG_105_()))
        if var.get(u'children').neg():
            var.put(u'children', var.get(u"this").get(u'children'))
            var.get(u"this").put(u'children', Js([]))
        var.put(u'me', var.get(u"this"))
        var.put(u'disposedChildCount', Js(0.0))
        var.put(u'len', var.get(u'children').get(u'length'))
        if var.get(u'len').neg():
            var.get(u'childDisposed')()
        else:
            #for JS loop
            var.put(u'i', Js(0.0))
            while (var.get(u'i')<var.get(u'len')):
                try:
                    var.put(u'disposeChild', var.get(u'children').get(var.get(u'i')))
                    if var.get(u'disposeChild'):
                        var.get(u'disposeChild').put(u'_ondisposed', var.get(u'childDisposed'))
                        var.get(u'disposeChild').callprop(u'dispose', var.get(u'violentClear'), var.get(u'violentClear'))
                    else:
                        var.get(u'childDisposed')()
                finally:
                        (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        pass
    PyJs_anonymous_104_._set_name(u'anonymous')
    var.get(u'ForNode').get(u'prototype').put(u'_disposeChildren', PyJs_anonymous_104_)
    @Js
    def PyJs_anonymous_106_(changes, newList, this, arguments, var=var):
        var = Scope({u'this':this, u'newList':newList, u'changes':changes, u'arguments':arguments}, var)
        var.registers([u'oldListKeys', u'oldIndex', u'deleteCount', u'deleteLen', u'oldChildrenLen', u'lcsFlag', u'relation', u'disposeChildren', u'childrenChanges', u'newListKeys', u'newIndex', u'isChildrenRebuild', u'spliceArgs', u'changePaths', u'pushToChildrenChanges', u'insertionsLen', u'lcsFlags', u'changeStart', u'forLen', u'newChildrenLen', u'lengthChange', u'changeIndex', u'change', u'me', u'newLen', u'newCount', u'i', u'newList', u'indexChange', u'cIndex', u'doCreateAndUpdate', u'getItemKey', u'changes'])
        @Js
        def PyJsHoisted_pushToChildrenChanges_(change, this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments, u'change':change}, var)
            var.registers([u'i', u'l', u'change'])
            #for JS loop
            var.put(u'i', Js(0.0))
            var.put(u'l', var.get(u'childrenChanges').get(u'length'))
            while (var.get(u'i')<var.get(u'l')):
                try:
                    var.get(u'childrenChanges').put(var.get(u'i'), (var.get(u'childrenChanges').get(var.get(u'i')) or Js([]))).callprop(u'push', var.get(u'change'))
                finally:
                        (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        PyJsHoisted_pushToChildrenChanges_.func_name = u'pushToChildrenChanges'
        var.put(u'pushToChildrenChanges', PyJsHoisted_pushToChildrenChanges_)
        @Js
        def PyJsHoisted_doCreateAndUpdate_(this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments}, var)
            var.registers([u'nextChild', u'j', u'i', u'parentEl', u'beforeEl', u'child'])
            var.get(u'me').put(u'_doCreateAndUpdate', var.get(u"null"))
            var.put(u'beforeEl', var.get(u'me').get(u'el'))
            var.put(u'parentEl', var.get(u'beforeEl').get(u'parentNode'))
            var.put(u'j', (-Js(1.0)))
            #for JS loop
            var.put(u'i', Js(0.0))
            while (var.get(u'i')<var.get(u'newChildrenLen')):
                try:
                    var.put(u'child', var.get(u'me').get(u'children').get(var.get(u'i')))
                    if var.get(u'child'):
                        (var.get(u'childrenChanges').get(var.get(u'i')) and var.get(u'child').callprop(u'_update', var.get(u'childrenChanges').get(var.get(u'i'))))
                    else:
                        if (var.get(u'j')<var.get(u'i')):
                            var.put(u'j', (var.get(u'i')+Js(1.0)))
                            var.put(u'beforeEl', var.get(u"null"))
                            while (var.get(u'j')<var.get(u'newChildrenLen')):
                                var.put(u'nextChild', var.get(u'me').get(u'children').get(var.get(u'j')))
                                if var.get(u'nextChild'):
                                    var.put(u'beforeEl', (var.get(u'nextChild').get(u'sel') or var.get(u'nextChild').get(u'el')))
                                    break
                                (var.put(u'j',Js(var.get(u'j').to_number())+Js(1))-Js(1))
                        var.get(u'me').get(u'children').put(var.get(u'i'), var.get(u'createForDirectiveChild')(var.get(u'me'), var.get(u'newList').get(var.get(u'i')), var.get(u'i')))
                        var.get(u'me').get(u'children').get(var.get(u'i')).callprop(u'attach', var.get(u'parentEl'), (var.get(u'beforeEl') or var.get(u'me').get(u'el')))
                finally:
                        (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        PyJsHoisted_doCreateAndUpdate_.func_name = u'doCreateAndUpdate'
        var.put(u'doCreateAndUpdate', PyJsHoisted_doCreateAndUpdate_)
        var.put(u'oldChildrenLen', var.get(u"this").get(u'children').get(u'length'))
        var.put(u'childrenChanges', var.get(u'Array').create(var.get(u'oldChildrenLen')))
        pass
        var.put(u'disposeChildren', Js([]))
        pass
        var.put(u'newLen', var.get(u'newList').get(u'length'))
        #for JS loop
        var.put(u'cIndex', Js(0.0))
        while (var.get(u'cIndex')<var.get(u'changes').get(u'length')):
            try:
                var.put(u'change', var.get(u'changes').get(var.get(u'cIndex')))
                var.put(u'relation', var.get(u'changeExprCompare')(var.get(u'change').get(u'expr'), var.get(u"this").get(u'param').get(u'value'), var.get(u"this").get(u'scope')))
                if var.get(u'relation').neg():
                    var.get(u'pushToChildrenChanges')(var.get(u'change'))
                else:
                    if (var.get(u'relation')>Js(2.0)):
                        var.put(u'changePaths', var.get(u'change').get(u'expr').get(u'paths'))
                        var.put(u'forLen', var.get(u"this").get(u'param').get(u'value').get(u'paths').get(u'length'))
                        var.put(u'changeIndex', (+var.get(u'evalExpr')(var.get(u'changePaths').get(var.get(u'forLen')), var.get(u"this").get(u'scope'), var.get(u"this").get(u'owner'))))
                        if var.get(u'isNaN')(var.get(u'changeIndex')):
                            var.get(u'pushToChildrenChanges')(var.get(u'change'))
                        else:
                            var.get(u'childrenChanges').put(var.get(u'changeIndex'), (var.get(u'childrenChanges').get(var.get(u'changeIndex')) or Js([]))).callprop(u'push', var.get(u'change'))
                            def PyJs_LONG_107_(var=var):
                                return var.put(u'change', Js({u'type':var.get(u'change').get(u'type'),u'expr':var.get(u'createAccessor')(var.get(u"this").get(u'param').get(u'item').get(u'paths').callprop(u'concat', var.get(u'changePaths').callprop(u'slice', (var.get(u'forLen')+Js(1.0))))),u'value':var.get(u'change').get(u'value'),u'index':var.get(u'change').get(u'index'),u'deleteCount':var.get(u'change').get(u'deleteCount'),u'insertions':var.get(u'change').get(u'insertions'),u'option':var.get(u'change').get(u'option')}))
                            PyJs_LONG_107_()
                            var.get(u'childrenChanges').get(var.get(u'changeIndex')).callprop(u'push', var.get(u'change'))
                            if PyJsStrictEq(var.get(u'change').get(u'type'),Js(1.0)):
                                if var.get(u"this").get(u'children').get(var.get(u'changeIndex')):
                                    var.get(u"this").get(u'children').get(var.get(u'changeIndex')).get(u'scope').callprop(u'_set', var.get(u'change').get(u'expr'), var.get(u'change').get(u'value'), Js({u'silent':Js(1.0)}))
                                else:
                                    var.get(u"this").get(u'children').put(var.get(u'changeIndex'), Js(0.0))
                            else:
                                if var.get(u"this").get(u'children').get(var.get(u'changeIndex')):
                                    var.get(u"this").get(u'children').get(var.get(u'changeIndex')).get(u'scope').callprop(u'_splice', var.get(u'change').get(u'expr'), Js([]).callprop(u'concat', var.get(u'change').get(u'index'), var.get(u'change').get(u'deleteCount'), var.get(u'change').get(u'insertions')), Js({u'silent':Js(1.0)}))
                    else:
                        if PyJsStrictNeq(var.get(u'change').get(u'type'),Js(2.0)):
                            var.put(u'getItemKey', var.get(u"this").get(u'aNode').get(u'hotspot').get(u'getForKey'))
                            if ((var.get(u'getItemKey') and var.get(u'newLen')) and var.get(u'oldChildrenLen')):
                                var.put(u'lcsFlags', Js([]))
                                var.put(u'newListKeys', Js([]))
                                var.put(u'oldListKeys', Js([]))
                                @Js
                                def PyJs_anonymous_108_(item, this, arguments, var=var):
                                    var = Scope({u'this':this, u'item':item, u'arguments':arguments}, var)
                                    var.registers([u'item'])
                                    var.get(u'newListKeys').callprop(u'push', var.get(u'getItemKey')(var.get(u'item')))
                                PyJs_anonymous_108_._set_name(u'anonymous')
                                var.get(u'each')(var.get(u'newList'), PyJs_anonymous_108_)
                                @Js
                                def PyJs_anonymous_109_(item, this, arguments, var=var):
                                    var = Scope({u'this':this, u'item':item, u'arguments':arguments}, var)
                                    var.registers([u'item'])
                                    var.get(u'oldListKeys').callprop(u'push', var.get(u'getItemKey')(var.get(u'item')))
                                PyJs_anonymous_109_._set_name(u'anonymous')
                                var.get(u'each')(var.get(u"this").get(u'listData'), PyJs_anonymous_109_)
                                pass
                                pass
                                #for JS loop
                                var.put(u'oldIndex', Js(0.0))
                                while (var.get(u'oldIndex')<=var.get(u'oldChildrenLen')):
                                    try:
                                        var.get(u'lcsFlags').callprop(u'push', Js([]))
                                        #for JS loop
                                        var.put(u'newIndex', Js(0.0))
                                        while (var.get(u'newIndex')<=var.get(u'newLen')):
                                            try:
                                                var.put(u'lcsFlag', Js(0.0))
                                                if (var.get(u'newIndex') and var.get(u'oldIndex')):
                                                    def PyJs_LONG_110_(var=var):
                                                        return ((var.get(u'lcsFlags').get((var.get(u'oldIndex')-Js(1.0))).get((var.get(u'newIndex')-Js(1.0)))+Js(1.0)) if PyJsStrictEq(var.get(u'newListKeys').get((var.get(u'newIndex')-Js(1.0))),var.get(u'oldListKeys').get((var.get(u'oldIndex')-Js(1.0)))) else var.get(u'Math').callprop(u'max', var.get(u'lcsFlags').get((var.get(u'oldIndex')-Js(1.0))).get(var.get(u'newIndex')), var.get(u'lcsFlags').get(var.get(u'oldIndex')).get((var.get(u'newIndex')-Js(1.0)))))
                                                    var.put(u'lcsFlag', PyJs_LONG_110_())
                                                var.get(u'lcsFlags').get(var.get(u'oldIndex')).callprop(u'push', var.get(u'lcsFlag'))
                                            finally:
                                                    (var.put(u'newIndex',Js(var.get(u'newIndex').to_number())+Js(1))-Js(1))
                                    finally:
                                            (var.put(u'oldIndex',Js(var.get(u'oldIndex').to_number())+Js(1))-Js(1))
                                (var.put(u'newIndex',Js(var.get(u'newIndex').to_number())-Js(1))+Js(1))
                                (var.put(u'oldIndex',Js(var.get(u'oldIndex').to_number())-Js(1))+Js(1))
                                while Js(1.0):
                                    if ((var.get(u'oldIndex') and var.get(u'newIndex')) and PyJsStrictEq(var.get(u'oldListKeys').get((var.get(u'oldIndex')-Js(1.0))),var.get(u'newListKeys').get((var.get(u'newIndex')-Js(1.0))))):
                                        (var.put(u'newIndex',Js(var.get(u'newIndex').to_number())-Js(1))+Js(1))
                                        (var.put(u'oldIndex',Js(var.get(u'oldIndex').to_number())-Js(1))+Js(1))
                                        if PyJsStrictNeq(var.get(u"this").get(u'listData').get(var.get(u'oldIndex')),var.get(u'newList').get(var.get(u'newIndex'))):
                                            var.get(u'childrenChanges').put(var.get(u'oldIndex'), (var.get(u'childrenChanges').get(var.get(u'oldIndex')) or Js([]))).callprop(u'push', Js({u'type':Js(1.0),u'option':var.get(u'change').get(u'option'),u'expr':var.get(u'createAccessor')(var.get(u"this").get(u'param').get(u'item').get(u'paths').callprop(u'slice', Js(0.0))),u'value':var.get(u'newList').get(var.get(u'newIndex'))}))
                                        if (var.get(u'relation')<Js(2.0)):
                                            var.get(u'childrenChanges').put(var.get(u'oldIndex'), (var.get(u'childrenChanges').get(var.get(u'oldIndex')) or Js([]))).callprop(u'push', var.get(u'change'))
                                    else:
                                        if (var.get(u'newIndex') and (var.get(u'oldIndex').neg() or (var.get(u'lcsFlags').get(var.get(u'oldIndex')).get((var.get(u'newIndex')-Js(1.0)))>=var.get(u'lcsFlags').get((var.get(u'oldIndex')-Js(1.0))).get(var.get(u'newIndex'))))):
                                            (var.put(u'newIndex',Js(var.get(u'newIndex').to_number())-Js(1))+Js(1))
                                            var.get(u'childrenChanges').callprop(u'splice', var.get(u'oldIndex'), Js(0.0), Js(0.0))
                                            var.get(u"this").get(u'children').callprop(u'splice', var.get(u'oldIndex'), Js(0.0), Js(0.0))
                                        else:
                                            if (var.get(u'oldIndex') and (var.get(u'newIndex').neg() or (var.get(u'lcsFlags').get(var.get(u'oldIndex')).get((var.get(u'newIndex')-Js(1.0)))<var.get(u'lcsFlags').get((var.get(u'oldIndex')-Js(1.0))).get(var.get(u'newIndex'))))):
                                                (var.put(u'oldIndex',Js(var.get(u'oldIndex').to_number())-Js(1))+Js(1))
                                                var.get(u'disposeChildren').callprop(u'push', var.get(u"this").get(u'children').get(var.get(u'oldIndex')))
                                                var.get(u'childrenChanges').callprop(u'splice', var.get(u'oldIndex'), Js(1.0))
                                                var.get(u"this").get(u'children').callprop(u'splice', var.get(u'oldIndex'), Js(1.0))
                                            else:
                                                break
                            else:
                                if (var.get(u'oldChildrenLen')>var.get(u'newLen')):
                                    var.put(u'disposeChildren', var.get(u'disposeChildren').callprop(u'concat', var.get(u"this").get(u'children').callprop(u'slice', var.get(u'newLen'))))
                                    var.put(u'childrenChanges', var.get(u'childrenChanges').callprop(u'slice', Js(0.0), var.get(u'newLen')))
                                    var.get(u"this").put(u'children', var.get(u"this").get(u'children').callprop(u'slice', Js(0.0), var.get(u'newLen')))
                                #for JS loop
                                var.put(u'i', Js(0.0))
                                while (var.get(u'i')<var.get(u'newLen')):
                                    try:
                                        var.get(u'childrenChanges').put(var.get(u'i'), (var.get(u'childrenChanges').get(var.get(u'i')) or Js([]))).callprop(u'push', Js({u'type':Js(1.0),u'option':var.get(u'change').get(u'option'),u'expr':var.get(u'createAccessor')(var.get(u"this").get(u'param').get(u'item').get(u'paths').callprop(u'slice', Js(0.0))),u'value':var.get(u'newList').get(var.get(u'i'))}))
                                        if (var.get(u'relation')<Js(2.0)):
                                            var.get(u'childrenChanges').get(var.get(u'i')).callprop(u'push', var.get(u'change'))
                                        if var.get(u"this").get(u'children').get(var.get(u'i')):
                                            var.get(u"this").get(u'children').get(var.get(u'i')).get(u'scope').callprop(u'_set', var.get(u"this").get(u'param').get(u'item'), var.get(u'newList').get(var.get(u'i')), Js({u'silent':Js(1.0)}))
                                        else:
                                            var.get(u"this").get(u'children').put(var.get(u'i'), Js(0.0))
                                    finally:
                                            (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
                            var.put(u'isChildrenRebuild', Js(1.0))
                        else:
                            if ((PyJsStrictEq(var.get(u'relation'),Js(2.0)) and PyJsStrictEq(var.get(u'change').get(u'type'),Js(2.0))) and var.get(u'isChildrenRebuild').neg()):
                                var.put(u'changeStart', var.get(u'change').get(u'index'))
                                var.put(u'deleteCount', var.get(u'change').get(u'deleteCount'))
                                var.put(u'insertionsLen', var.get(u'change').get(u'insertions').get(u'length'))
                                var.put(u'newCount', (var.get(u'insertionsLen')-var.get(u'deleteCount')))
                                if var.get(u'newCount'):
                                    var.put(u'indexChange', Js({u'type':Js(1.0),u'option':var.get(u'change').get(u'option'),u'expr':var.get(u"this").get(u'param').get(u'index')}))
                                    #for JS loop
                                    var.put(u'i', (var.get(u'changeStart')+var.get(u'deleteCount')))
                                    while (var.get(u'i')<var.get(u"this").get(u'children').get(u'length')):
                                        try:
                                            var.get(u'childrenChanges').put(var.get(u'i'), (var.get(u'childrenChanges').get(var.get(u'i')) or Js([]))).callprop(u'push', var.get(u'indexChange'))
                                            (var.get(u"this").get(u'children').get(var.get(u'i')) and var.get(u"this").get(u'children').get(var.get(u'i')).get(u'scope').callprop(u'_set', var.get(u'indexChange').get(u'expr'), ((var.get(u'i')-var.get(u'deleteCount'))+var.get(u'insertionsLen')), Js({u'silent':Js(1.0)})))
                                        finally:
                                                (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
                                var.put(u'deleteLen', var.get(u'deleteCount'))
                                while (var.put(u'deleteLen',Js(var.get(u'deleteLen').to_number())-Js(1))+Js(1)):
                                    if (var.get(u'deleteLen')<var.get(u'insertionsLen')):
                                        var.put(u'i', (var.get(u'changeStart')+var.get(u'deleteLen')))
                                        var.get(u'childrenChanges').put(var.get(u'i'), (var.get(u'childrenChanges').get(var.get(u'i')) or Js([]))).callprop(u'push', Js({u'type':Js(1.0),u'option':var.get(u'change').get(u'option'),u'expr':var.get(u'createAccessor')(var.get(u"this").get(u'param').get(u'item').get(u'paths').callprop(u'slice', Js(0.0))),u'value':var.get(u'change').get(u'insertions').get(var.get(u'deleteLen'))}))
                                        if var.get(u"this").get(u'children').get(var.get(u'i')):
                                            var.get(u"this").get(u'children').get(var.get(u'i')).get(u'scope').callprop(u'_set', var.get(u"this").get(u'param').get(u'item'), var.get(u'change').get(u'insertions').get(var.get(u'deleteLen')), Js({u'silent':Js(1.0)}))
                                if (var.get(u'newCount')<Js(0.0)):
                                    var.put(u'disposeChildren', var.get(u'disposeChildren').callprop(u'concat', var.get(u"this").get(u'children').callprop(u'splice', (var.get(u'changeStart')+var.get(u'insertionsLen')), (-var.get(u'newCount')))))
                                    var.get(u'childrenChanges').callprop(u'splice', (var.get(u'changeStart')+var.get(u'insertionsLen')), (-var.get(u'newCount')))
                                else:
                                    if (var.get(u'newCount')>Js(0.0)):
                                        var.put(u'spliceArgs', Js([(var.get(u'changeStart')+var.get(u'deleteCount')), Js(0.0)]).callprop(u'concat', var.get(u'Array').create(var.get(u'newCount'))))
                                        var.get(u"this").get(u'children').get(u'splice').callprop(u'apply', var.get(u"this").get(u'children'), var.get(u'spliceArgs'))
                                        var.get(u'childrenChanges').get(u'splice').callprop(u'apply', var.get(u'childrenChanges'), var.get(u'spliceArgs'))
            finally:
                    (var.put(u'cIndex',Js(var.get(u'cIndex').to_number())+Js(1))-Js(1))
        var.put(u'newChildrenLen', var.get(u"this").get(u'children').get(u'length'))
        if (PyJsStrictNeq(var.get(u'newChildrenLen'),var.get(u'oldChildrenLen')) and var.get(u"this").get(u'param').get(u'value').get(u'paths')):
            var.put(u'lengthChange', Js({u'type':Js(1.0),u'option':Js({}),u'expr':var.get(u'createAccessor')(var.get(u"this").get(u'param').get(u'value').get(u'paths').callprop(u'concat', Js({u'type':Js(1.0),u'value':Js(u'length')})))}))
            if var.get(u'changesIsInDataRef')(Js([var.get(u'lengthChange')]), var.get(u"this").get(u'aNode').get(u'hotspot').get(u'data')):
                var.get(u'pushToChildrenChanges')(var.get(u'lengthChange'))
        var.get(u"this").put(u'_doCreateAndUpdate', var.get(u'doCreateAndUpdate'))
        var.put(u'me', var.get(u"this"))
        if PyJsStrictEq(var.get(u'disposeChildren').get(u'length'),Js(0.0)):
            var.get(u'doCreateAndUpdate')()
        else:
            @Js
            def PyJs_anonymous_111_(this, arguments, var=var):
                var = Scope({u'this':this, u'arguments':arguments}, var)
                var.registers([])
                if PyJsStrictEq(var.get(u'doCreateAndUpdate'),var.get(u'me').get(u'_doCreateAndUpdate')):
                    var.get(u'doCreateAndUpdate')()
            PyJs_anonymous_111_._set_name(u'anonymous')
            var.get(u"this").callprop(u'_disposeChildren', var.get(u'disposeChildren'), PyJs_anonymous_111_)
        pass
    PyJs_anonymous_106_._set_name(u'anonymous')
    var.get(u'ForNode').get(u'prototype').put(u'_updateArray', PyJs_anonymous_106_)
    pass
    pass
    var.get(u'IfNode').get(u'prototype').put(u'nodeType', Js(2.0))
    var.get(u'IfNode').get(u'prototype').put(u'_create', var.get(u'nodeOwnCreateStump'))
    var.get(u'IfNode').get(u'prototype').put(u'dispose', var.get(u'nodeOwnSimpleDispose'))
    @Js
    def PyJs_anonymous_114_(parentEl, beforeEl, this, arguments, var=var):
        var = Scope({u'this':this, u'parentEl':parentEl, u'arguments':arguments, u'beforeEl':beforeEl}, var)
        var.registers([u'me', u'parentEl', u'elseIndex', u'beforeEl', u'child'])
        var.put(u'me', var.get(u"this"))
        pass
        pass
        if var.get(u'evalExpr')(var.get(u"this").get(u'cond'), var.get(u"this").get(u'scope'), var.get(u"this").get(u'owner')):
            var.put(u'child', var.get(u'createNode')(var.get(u'rinseCondANode')(var.get(u"this").get(u'aNode')), var.get(u"this")))
            var.put(u'elseIndex', (-Js(1.0)))
        else:
            @Js
            def PyJs_anonymous_115_(elseANode, index, this, arguments, var=var):
                var = Scope({u'this':this, u'index':index, u'elseANode':elseANode, u'arguments':arguments}, var)
                var.registers([u'index', u'elif', u'elseANode'])
                var.put(u'elif', var.get(u'elseANode').get(u'directives').get(u'elif'))
                if (var.get(u'elif').neg() or (var.get(u'elif') and var.get(u'evalExpr')(var.get(u'elif').get(u'value'), var.get(u'me').get(u'scope'), var.get(u'me').get(u'owner')))):
                    var.put(u'child', var.get(u'createNode')(var.get(u'rinseCondANode')(var.get(u'elseANode')), var.get(u'me')))
                    var.put(u'elseIndex', var.get(u'index'))
                    return Js(False)
            PyJs_anonymous_115_._set_name(u'anonymous')
            var.get(u'each')(var.get(u"this").get(u'aNode').get(u'elses'), PyJs_anonymous_115_)
        if var.get(u'child'):
            var.get(u"this").get(u'children').put(u'0', var.get(u'child'))
            var.get(u'child').callprop(u'attach', var.get(u'parentEl'), var.get(u'beforeEl'))
            var.get(u"this").put(u'elseIndex', var.get(u'elseIndex'))
        var.get(u"this").callprop(u'_create')
        var.get(u'insertBefore')(var.get(u"this").get(u'el'), var.get(u'parentEl'), var.get(u'beforeEl'))
    PyJs_anonymous_114_._set_name(u'anonymous')
    var.get(u'IfNode').get(u'prototype').put(u'attach', PyJs_anonymous_114_)
    @Js
    def PyJs_anonymous_116_(changes, this, arguments, var=var):
        var = Scope({u'this':this, u'changes':changes, u'arguments':arguments}, var)
        var.registers([u'me', u'childANode', u'newChild', u'elseIndex', u'child', u'changes'])
        @Js
        def PyJsHoisted_newChild_(this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments}, var)
            var.registers([])
            if PyJsStrictNeq(var.get(u'elseIndex',throw=False).typeof(),Js(u'undefined')):
                var.get(u'me').get(u'children').put(u'0', var.get(u'createNode')(var.get(u'rinseCondANode')(var.get(u'childANode')), var.get(u'me'))).callprop(u'attach', var.get(u'me').get(u'el').get(u'parentNode'), var.get(u'me').get(u'el'))
        PyJsHoisted_newChild_.func_name = u'newChild'
        var.put(u'newChild', PyJsHoisted_newChild_)
        var.put(u'me', var.get(u"this"))
        var.put(u'childANode', var.get(u"this").get(u'aNode'))
        pass
        if var.get(u'evalExpr')(var.get(u"this").get(u'cond'), var.get(u"this").get(u'scope'), var.get(u"this").get(u'owner')):
            var.put(u'elseIndex', (-Js(1.0)))
        else:
            @Js
            def PyJs_anonymous_117_(elseANode, index, this, arguments, var=var):
                var = Scope({u'this':this, u'index':index, u'elseANode':elseANode, u'arguments':arguments}, var)
                var.registers([u'index', u'elif', u'elseANode'])
                var.put(u'elif', var.get(u'elseANode').get(u'directives').get(u'elif'))
                if ((var.get(u'elif') and var.get(u'evalExpr')(var.get(u'elif').get(u'value'), var.get(u'me').get(u'scope'), var.get(u'me').get(u'owner'))) or var.get(u'elif').neg()):
                    var.put(u'elseIndex', var.get(u'index'))
                    var.put(u'childANode', var.get(u'elseANode'))
                    return Js(False)
            PyJs_anonymous_117_._set_name(u'anonymous')
            var.get(u'each')(var.get(u"this").get(u'aNode').get(u'elses'), PyJs_anonymous_117_)
        if PyJsStrictEq(var.get(u'elseIndex'),var.get(u"this").get(u'elseIndex')):
            var.get(u'elementUpdateChildren')(var.get(u"this").get(u'children'), var.get(u'changes'))
        else:
            var.put(u'child', var.get(u"this").get(u'children').get(u'0'))
            var.get(u"this").put(u'children', Js([]))
            if var.get(u'child'):
                var.get(u'child').put(u'_ondisposed', var.get(u'newChild'))
                var.get(u'child').callprop(u'dispose')
            else:
                var.get(u'newChild')()
            var.get(u"this").put(u'elseIndex', var.get(u'elseIndex'))
        pass
    PyJs_anonymous_116_._set_name(u'anonymous')
    var.get(u'IfNode').get(u'prototype').put(u'_update', PyJs_anonymous_116_)
    pass
    var.get(u'TemplateNode').get(u'prototype').put(u'nodeType', Js(7.0))
    var.get(u'TemplateNode').get(u'prototype').put(u'attach', var.get(u'nodeOwnOnlyChildrenAttach'))
    @Js
    def PyJs_anonymous_119_(noDetach, noTransition, this, arguments, var=var):
        var = Scope({u'noDetach':noDetach, u'this':this, u'noTransition':noTransition, u'arguments':arguments}, var)
        var.registers([u'noDetach', u'noTransition'])
        var.get(u'elementDisposeChildren')(var.get(u"this").get(u'children'), var.get(u'noDetach'), var.get(u'noTransition'))
        if var.get(u'noDetach').neg():
            var.get(u'removeEl')(var.get(u"this").get(u'el'))
            var.get(u'removeEl')(var.get(u"this").get(u'sel'))
        var.get(u'nodeDispose')(var.get(u"this"))
    PyJs_anonymous_119_._set_name(u'anonymous')
    var.get(u'TemplateNode').get(u'prototype').put(u'dispose', PyJs_anonymous_119_)
    var.get(u'TemplateNode').get(u'prototype').put(u'_toPhase', var.get(u'elementOwnToPhase'))
    @Js
    def PyJs_anonymous_120_(changes, this, arguments, var=var):
        var = Scope({u'this':this, u'changes':changes, u'arguments':arguments}, var)
        var.registers([u'changes'])
        var.get(u'elementUpdateChildren')(var.get(u"this").get(u'children'), var.get(u'changes'))
    PyJs_anonymous_120_._set_name(u'anonymous')
    var.get(u'TemplateNode').get(u'prototype').put(u'_update', PyJs_anonymous_120_)
    pass
    pass
    var.put(u'emptyPropWhenCreate', Js({u'class':Js(1.0),u'style':Js(1.0),u'id':Js(1.0)}))
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    pass
    var.get(u'AsyncComponent').get(u'prototype').put(u'_create', var.get(u'nodeOwnCreateStump'))
    var.get(u'AsyncComponent').get(u'prototype').put(u'dispose', var.get(u'nodeOwnSimpleDispose'))
    @Js
    def PyJs_anonymous_127_(parentEl, beforeEl, this, arguments, var=var):
        var = Scope({u'this':this, u'parentEl':parentEl, u'arguments':arguments, u'beforeEl':beforeEl}, var)
        var.registers([u'me', u'component', u'parentEl', u'PlaceholderComponent', u'beforeEl'])
        var.put(u'PlaceholderComponent', var.get(u"this").get(u'loader').get(u'placeholder'))
        if var.get(u'PlaceholderComponent'):
            var.put(u'component', var.get(u'PlaceholderComponent').create(var.get(u"this").get(u'options')))
            var.get(u"this").get(u'children').put(u'0', var.get(u'component'))
            var.get(u'component').callprop(u'attach', var.get(u'parentEl'), var.get(u'beforeEl'))
        var.get(u"this").callprop(u'_create')
        var.get(u'insertBefore')(var.get(u"this").get(u'el'), var.get(u'parentEl'), var.get(u'beforeEl'))
        var.put(u'me', var.get(u"this"))
        @Js
        def PyJs_anonymous_128_(ComponentClass, this, arguments, var=var):
            var = Scope({u'this':this, u'ComponentClass':ComponentClass, u'arguments':arguments}, var)
            var.registers([u'ComponentClass'])
            var.get(u'me').callprop(u'onload', var.get(u'ComponentClass'))
        PyJs_anonymous_128_._set_name(u'anonymous')
        var.get(u"this").get(u'loader').callprop(u'start', PyJs_anonymous_128_)
    PyJs_anonymous_127_._set_name(u'anonymous')
    var.get(u'AsyncComponent').get(u'prototype').put(u'attach', PyJs_anonymous_127_)
    @Js
    def PyJs_anonymous_129_(ComponentClass, this, arguments, var=var):
        var = Scope({u'this':this, u'ComponentClass':ComponentClass, u'arguments':arguments}, var)
        var.registers([u'parentChildren', u'component', u'ComponentClass'])
        if (var.get(u"this").get(u'el') and var.get(u'ComponentClass')):
            var.put(u'component', var.get(u'ComponentClass').create(var.get(u"this").get(u'options')))
            var.get(u'component').callprop(u'attach', var.get(u"this").get(u'el').get(u'parentNode'), var.get(u"this").get(u'el'))
            var.put(u'parentChildren', var.get(u"this").get(u'options').get(u'parent').get(u'children'))
            if ((var.get(u"this").get(u'parentIndex')==var.get(u"null")) or PyJsStrictNeq(var.get(u'parentChildren').get(var.get(u"this").get(u'parentIndex')),var.get(u"this"))):
                @Js
                def PyJs_anonymous_130_(child, index, this, arguments, var=var):
                    var = Scope({u'this':this, u'index':index, u'arguments':arguments, u'child':child}, var)
                    var.registers([u'index', u'child'])
                    if var.get(u'child').instanceof(var.get(u'AsyncComponent')):
                        var.get(u'child').put(u'parentIndex', var.get(u'index'))
                PyJs_anonymous_130_._set_name(u'anonymous')
                var.get(u'each')(var.get(u'parentChildren'), PyJs_anonymous_130_)
            var.get(u'parentChildren').put(var.get(u"this").get(u'parentIndex'), var.get(u'component'))
        var.get(u"this").callprop(u'dispose')
    PyJs_anonymous_129_._set_name(u'anonymous')
    var.get(u'AsyncComponent').get(u'prototype').put(u'onload', PyJs_anonymous_129_)
    pass
    pass
    @Js
    def PyJs_anonymous_131_(main, this, arguments, var=var):
        var = Scope({u'this':this, u'main':main, u'arguments':arguments}, var)
        var.registers([u'main'])
        var.put(u'san4devtool', var.get(u'main'))
        var.get(u'emitDevtool')(Js(u'san'), var.get(u'main'))
    PyJs_anonymous_131_._set_name(u'anonymous')
    var.get(u'emitDevtool').put(u'start', PyJs_anonymous_131_)
    pass
    @Js
    def PyJs_anonymous_134_(isFirstTime, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'isFirstTime':isFirstTime}, var)
        var.registers([u'me', u'isFirstTime'])
        var.put(u'me', var.get(u"this"))
        var.get(u"this").get(u'sourceSlots').put(u'named', Js({}))
        @Js
        def PyJs_anonymous_135_(child, this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments, u'child':child}, var)
            var.registers([u'slotBind', u'child', u'target', u'slotName'])
            pass
            var.put(u'slotBind', (var.get(u'child').get(u'textExpr').neg() and var.get(u'getANodeProp')(var.get(u'child'), Js(u'slot'))))
            if var.get(u'slotBind'):
                (var.get(u'isFirstTime') and var.get(u'me').get(u'sourceSlotNameProps').callprop(u'push', var.get(u'slotBind')))
                var.put(u'slotName', var.get(u'evalExpr')(var.get(u'slotBind').get(u'expr'), var.get(u'me').get(u'scope'), var.get(u'me').get(u'owner')))
                var.put(u'target', var.get(u'me').get(u'sourceSlots').get(u'named').get(var.get(u'slotName')))
                if var.get(u'target').neg():
                    var.put(u'target', var.get(u'me').get(u'sourceSlots').get(u'named').put(var.get(u'slotName'), Js([])))
            else:
                if var.get(u'isFirstTime'):
                    var.put(u'target', var.get(u'me').get(u'sourceSlots').get(u'noname'))
                    if var.get(u'target').neg():
                        var.put(u'target', var.get(u'me').get(u'sourceSlots').put(u'noname', Js([])))
            (var.get(u'target') and var.get(u'target').callprop(u'push', var.get(u'child')))
        PyJs_anonymous_135_._set_name(u'anonymous')
        ((var.get(u"this").get(u'source') and var.get(u"this").get(u'scope')) and var.get(u'each')(var.get(u"this").get(u'source').get(u'children'), PyJs_anonymous_135_))
    PyJs_anonymous_134_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'_initSourceSlots', PyJs_anonymous_134_)
    var.get(u'Component').get(u'prototype').put(u'nodeType', Js(5.0))
    var.get(u'Component').get(u'prototype').put(u'nextTick', var.get(u'nextTick'))
    @Js
    def PyJs_anonymous_136_(name, this, arguments, var=var):
        var = Scope({u'this':this, u'name':name, u'arguments':arguments}, var)
        var.registers([u'name'])
        if var.get(u"this").get(u'lifeCycle').get(var.get(u'name')).neg():
            var.get(u"this").put(u'lifeCycle', (var.get(u'LifeCycle').get(var.get(u'name')) or var.get(u"this").get(u'lifeCycle')))
            if PyJsStrictEq(var.get(u"this").get(var.get(u'name')).typeof(),Js(u'function')):
                var.get(u"this").callprop(var.get(u'name'))
            var.get(u"this").put((Js(u'_after')+var.get(u'name')), Js(1.0))
            var.get(u'emitDevtool')((Js(u'comp-')+var.get(u'name')), var.get(u"this"))
    PyJs_anonymous_136_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'_callHook', var.get(u'Component').get(u'prototype').put(u'_toPhase', PyJs_anonymous_136_))
    @Js
    def PyJs_anonymous_137_(name, listener, declaration, this, arguments, var=var):
        var = Scope({u'listener':listener, u'this':this, u'name':name, u'arguments':arguments, u'declaration':declaration}, var)
        var.registers([u'listener', u'name', u'declaration'])
        if PyJsStrictEq(var.get(u'listener',throw=False).typeof(),Js(u'function')):
            if var.get(u"this").get(u'listeners').get(var.get(u'name')).neg():
                var.get(u"this").get(u'listeners').put(var.get(u'name'), Js([]))
            var.get(u"this").get(u'listeners').get(var.get(u'name')).callprop(u'push', Js({u'fn':var.get(u'listener'),u'declaration':var.get(u'declaration')}))
    PyJs_anonymous_137_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'on', PyJs_anonymous_137_)
    @Js
    def PyJs_anonymous_138_(name, listener, this, arguments, var=var):
        var = Scope({u'listener':listener, u'this':this, u'name':name, u'arguments':arguments}, var)
        var.registers([u'listener', u'nameListeners', u'len', u'name'])
        var.put(u'nameListeners', var.get(u"this").get(u'listeners').get(var.get(u'name')))
        var.put(u'len', (var.get(u'nameListeners') and var.get(u'nameListeners').get(u'length')))
        while (var.put(u'len',Js(var.get(u'len').to_number())-Js(1))+Js(1)):
            if (var.get(u'listener').neg() or PyJsStrictEq(var.get(u'listener'),var.get(u'nameListeners').get(var.get(u'len')).get(u'fn'))):
                var.get(u'nameListeners').callprop(u'splice', var.get(u'len'), Js(1.0))
    PyJs_anonymous_138_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'un', PyJs_anonymous_138_)
    @Js
    def PyJs_anonymous_139_(name, event, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'name':name, u'event':event}, var)
        var.registers([u'me', u'name', u'event'])
        var.put(u'me', var.get(u"this"))
        @Js
        def PyJs_anonymous_140_(listener, this, arguments, var=var):
            var = Scope({u'listener':listener, u'this':this, u'arguments':arguments}, var)
            var.registers([u'listener'])
            var.get(u'listener').get(u'fn').callprop(u'call', var.get(u'me'), var.get(u'event'))
        PyJs_anonymous_140_._set_name(u'anonymous')
        var.get(u'each')(var.get(u"this").get(u'listeners').get(var.get(u'name')), PyJs_anonymous_140_)
    PyJs_anonymous_139_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'fire', PyJs_anonymous_139_)
    @Js
    def PyJs_anonymous_141_(computedExpr, this, arguments, var=var):
        var = Scope({u'computedExpr':computedExpr, u'this':this, u'arguments':arguments}, var)
        var.registers([u'me', u'computedExpr', u'computedDeps'])
        var.put(u'computedDeps', var.get(u"this").get(u'computedDeps').get(var.get(u'computedExpr')))
        if var.get(u'computedDeps').neg():
            var.put(u'computedDeps', var.get(u"this").get(u'computedDeps').put(var.get(u'computedExpr'), Js({})))
        var.put(u'me', var.get(u"this"))
        @Js
        def PyJs_anonymous_142_(expr, this, arguments, var=var):
            var = Scope({u'this':this, u'expr':expr, u'arguments':arguments}, var)
            var.registers([u'expr'])
            if var.get(u'expr').neg():
                PyJsTempException = JsToPyException(var.get(u'Error').create(Js(u'[SAN ERROR] call get method in computed need argument')))
                raise PyJsTempException
            if var.get(u'computedDeps').get(var.get(u'expr')).neg():
                var.get(u'computedDeps').put(var.get(u'expr'), Js(1.0))
                if (var.get(u'me').get(u'computed').get(var.get(u'expr')) and var.get(u'me').get(u'computedDeps').get(var.get(u'expr')).neg()):
                    var.get(u'me').callprop(u'_calcComputed', var.get(u'expr'))
                @Js
                def PyJs_anonymous_143_(this, arguments, var=var):
                    var = Scope({u'this':this, u'arguments':arguments}, var)
                    var.registers([])
                    var.get(u'me').callprop(u'_calcComputed', var.get(u'computedExpr'))
                PyJs_anonymous_143_._set_name(u'anonymous')
                var.get(u'me').callprop(u'watch', var.get(u'expr'), PyJs_anonymous_143_)
            return var.get(u'me').get(u'data').callprop(u'get', var.get(u'expr'))
        PyJs_anonymous_142_._set_name(u'anonymous')
        var.get(u"this").get(u'data').callprop(u'set', var.get(u'computedExpr'), var.get(u"this").get(u'computed').get(var.get(u'computedExpr')).callprop(u'call', Js({u'data':Js({u'get':PyJs_anonymous_142_})})))
    PyJs_anonymous_141_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'_calcComputed', PyJs_anonymous_141_)
    @Js
    def PyJs_anonymous_144_(name, value, this, arguments, var=var):
        var = Scope({u'this':this, u'name':name, u'value':value, u'arguments':arguments}, var)
        var.registers([u'parentComponent', u'name', u'value', u'receiver'])
        var.put(u'parentComponent', var.get(u"this").get(u'parentComponent'))
        while var.get(u'parentComponent'):
            var.put(u'receiver', (var.get(u'parentComponent').get(u'messages').get(var.get(u'name')) or var.get(u'parentComponent').get(u'messages').get(u'*')))
            if PyJsStrictEq(var.get(u'receiver',throw=False).typeof(),Js(u'function')):
                var.get(u'receiver').callprop(u'call', var.get(u'parentComponent'), Js({u'target':var.get(u"this"),u'value':var.get(u'value'),u'name':var.get(u'name')}))
                break
            var.put(u'parentComponent', var.get(u'parentComponent').get(u'parentComponent'))
    PyJs_anonymous_144_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'dispatch', PyJs_anonymous_144_)
    @Js
    def PyJs_anonymous_145_(name, this, arguments, var=var):
        var = Scope({u'this':this, u'name':name, u'arguments':arguments}, var)
        var.registers([u'me', u'childrenTraversal', u'result', u'name'])
        @Js
        def PyJsHoisted_childrenTraversal_(children, this, arguments, var=var):
            var = Scope({u'this':this, u'children':children, u'arguments':arguments}, var)
            var.registers([u'children'])
            @Js
            def PyJs_anonymous_146_(child, this, arguments, var=var):
                var = Scope({u'this':this, u'arguments':arguments, u'child':child}, var)
                var.registers([u'child'])
                if (PyJsStrictEq(var.get(u'child').get(u'nodeType'),Js(6.0)) and PyJsStrictEq(var.get(u'child').get(u'owner'),var.get(u'me'))):
                    if ((var.get(u'child').get(u'isNamed') and PyJsStrictEq(var.get(u'child').get(u'name'),var.get(u'name'))) or (var.get(u'child').get(u'isNamed').neg() and var.get(u'name').neg())):
                        var.get(u'result').callprop(u'push', var.get(u'child'))
                else:
                    var.get(u'childrenTraversal')(var.get(u'child').get(u'children'))
            PyJs_anonymous_146_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'children'), PyJs_anonymous_146_)
        PyJsHoisted_childrenTraversal_.func_name = u'childrenTraversal'
        var.put(u'childrenTraversal', PyJsHoisted_childrenTraversal_)
        var.put(u'result', Js([]))
        var.put(u'me', var.get(u"this"))
        pass
        var.get(u'childrenTraversal')(var.get(u"this").get(u'children'))
        return var.get(u'result')
    PyJs_anonymous_145_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'slot', PyJs_anonymous_145_)
    @Js
    def PyJs_anonymous_147_(name, this, arguments, var=var):
        var = Scope({u'this':this, u'name':name, u'arguments':arguments}, var)
        var.registers([u'owner', u'refTarget', u'childrenTraversal', u'name', u'elementTraversal'])
        @Js
        def PyJsHoisted_childrenTraversal_(children, this, arguments, var=var):
            var = Scope({u'this':this, u'children':children, u'arguments':arguments}, var)
            var.registers([u'children'])
            @Js
            def PyJs_anonymous_148_(child, this, arguments, var=var):
                var = Scope({u'this':this, u'arguments':arguments, u'child':child}, var)
                var.registers([u'child'])
                var.get(u'elementTraversal')(var.get(u'child'))
                return var.get(u'refTarget').neg()
            PyJs_anonymous_148_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'children'), PyJs_anonymous_148_)
        PyJsHoisted_childrenTraversal_.func_name = u'childrenTraversal'
        var.put(u'childrenTraversal', PyJsHoisted_childrenTraversal_)
        @Js
        def PyJsHoisted_elementTraversal_(element, this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments, u'element':element}, var)
            var.registers([u'ref', u'nodeType', u'element'])
            var.put(u'nodeType', var.get(u'element').get(u'nodeType'))
            if PyJsStrictEq(var.get(u'nodeType'),Js(1.0)):
                return var.get('undefined')
            if PyJsStrictEq(var.get(u'element').get(u'owner'),var.get(u'owner')):
                pass
                while 1:
                    SWITCHED = False
                    CONDITION = (var.get(u'element').get(u'nodeType'))
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(4.0)):
                        SWITCHED = True
                        var.put(u'ref', var.get(u'element').get(u'aNode').get(u'directives').get(u'ref'))
                        if (var.get(u'ref') and PyJsStrictEq(var.get(u'evalExpr')(var.get(u'ref').get(u'value'), var.get(u'element').get(u'scope'), var.get(u'owner')),var.get(u'name'))):
                            var.put(u'refTarget', var.get(u'element').get(u'el'))
                        break
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(5.0)):
                        SWITCHED = True
                        var.put(u'ref', var.get(u'element').get(u'source').get(u'directives').get(u'ref'))
                        if (var.get(u'ref') and PyJsStrictEq(var.get(u'evalExpr')(var.get(u'ref').get(u'value'), var.get(u'element').get(u'scope'), var.get(u'owner')),var.get(u'name'))):
                            var.put(u'refTarget', var.get(u'element'))
                    SWITCHED = True
                    break
                (var.get(u'refTarget').neg() and var.get(u'childrenTraversal')(var.get(u'element').get(u'slotChildren')))
            (var.get(u'refTarget').neg() and var.get(u'childrenTraversal')(var.get(u'element').get(u'children')))
        PyJsHoisted_elementTraversal_.func_name = u'elementTraversal'
        var.put(u'elementTraversal', PyJsHoisted_elementTraversal_)
        pass
        var.put(u'owner', var.get(u"this"))
        pass
        pass
        var.get(u'childrenTraversal')(var.get(u"this").get(u'children'))
        return var.get(u'refTarget')
    PyJs_anonymous_147_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'ref', PyJs_anonymous_147_)
    @Js
    def PyJs_anonymous_149_(changes, this, arguments, var=var):
        var = Scope({u'this':this, u'changes':changes, u'arguments':arguments}, var)
        var.registers([u'me', u'slotChildrenLen', u'dataChanges', u'needReloadForSlot', u'slotChild', u'changes'])
        if var.get(u"this").get(u'lifeCycle').get(u'disposed'):
            return var.get('undefined')
        var.put(u'me', var.get(u"this"))
        var.put(u'needReloadForSlot', Js(False))
        @Js
        def PyJs_anonymous_150_(this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments}, var)
            var.registers([])
            var.put(u'needReloadForSlot', Js(True))
        PyJs_anonymous_150_._set_name(u'anonymous')
        var.get(u"this").put(u'_notifyNeedReload', PyJs_anonymous_150_)
        if var.get(u'changes'):
            @Js
            def PyJs_anonymous_151_(name, value, this, arguments, var=var):
                var = Scope({u'this':this, u'name':name, u'value':value, u'arguments':arguments}, var)
                var.registers([u'name', u'value'])
                if var.get(u'me').get(u'source').get(u'hotspot').get(u'props').contains(var.get(u'name')):
                    return var.get('undefined')
                var.get(u'me').get(u'data').callprop(u'set', var.get(u'name'), var.get(u'value'), Js({u'target':Js({u'id':var.get(u'me').get(u'owner').get(u'id')})}))
            PyJs_anonymous_151_._set_name(u'anonymous')
            (var.get(u"this").get(u'source') and var.get(u'nodeSBindUpdate')(var.get(u"this"), var.get(u"this").get(u'source').get(u'directives').get(u'bind'), var.get(u'changes'), PyJs_anonymous_151_))
            @Js
            def PyJs_anonymous_152_(change, this, arguments, var=var):
                var = Scope({u'this':this, u'arguments':arguments, u'change':change}, var)
                var.registers([u'change', u'changeExpr'])
                var.put(u'changeExpr', var.get(u'change').get(u'expr'))
                @Js
                def PyJs_anonymous_153_(bindItem, this, arguments, var=var):
                    var = Scope({u'bindItem':bindItem, u'this':this, u'arguments':arguments}, var)
                    var.registers([u'bindItem', u'updateExpr', u'setExpr', u'relation'])
                    pass
                    var.put(u'setExpr', var.get(u'bindItem').get(u'name'))
                    var.put(u'updateExpr', var.get(u'bindItem').get(u'expr'))
                    if (var.get(u'isDataChangeByElement')(var.get(u'change'), var.get(u'me'), var.get(u'setExpr')).neg() and var.put(u'relation', var.get(u'changeExprCompare')(var.get(u'changeExpr'), var.get(u'updateExpr'), var.get(u'me').get(u'scope')))):
                        if (var.get(u'relation')>Js(2.0)):
                            var.put(u'setExpr', var.get(u'createAccessor')(Js([Js({u'type':Js(1.0),u'value':var.get(u'setExpr')})]).callprop(u'concat', var.get(u'changeExpr').get(u'paths').callprop(u'slice', var.get(u'updateExpr').get(u'paths').get(u'length')))))
                            var.put(u'updateExpr', var.get(u'changeExpr'))
                        if ((var.get(u'relation')>=Js(2.0)) and PyJsStrictEq(var.get(u'change').get(u'type'),Js(2.0))):
                            var.get(u'me').get(u'data').callprop(u'splice', var.get(u'setExpr'), Js([var.get(u'change').get(u'index'), var.get(u'change').get(u'deleteCount')]).callprop(u'concat', var.get(u'change').get(u'insertions')), Js({u'target':Js({u'id':var.get(u'me').get(u'owner').get(u'id')})}))
                        else:
                            var.get(u'me').get(u'data').callprop(u'set', var.get(u'setExpr'), var.get(u'evalExpr')(var.get(u'updateExpr'), var.get(u'me').get(u'scope'), var.get(u'me').get(u'owner')), Js({u'target':Js({u'id':var.get(u'me').get(u'owner').get(u'id')})}))
                PyJs_anonymous_153_._set_name(u'anonymous')
                var.get(u'each')(var.get(u'me').get(u'binds'), PyJs_anonymous_153_)
                @Js
                def PyJs_anonymous_154_(bindItem, this, arguments, var=var):
                    var = Scope({u'bindItem':bindItem, u'this':this, u'arguments':arguments}, var)
                    var.registers([u'bindItem'])
                    var.put(u'needReloadForSlot', (var.get(u'needReloadForSlot') or var.get(u'changeExprCompare')(var.get(u'changeExpr'), var.get(u'bindItem').get(u'expr'), var.get(u'me').get(u'scope'))))
                    return var.get(u'needReloadForSlot').neg()
                PyJs_anonymous_154_._set_name(u'anonymous')
                var.get(u'each')(var.get(u'me').get(u'sourceSlotNameProps'), PyJs_anonymous_154_)
            PyJs_anonymous_152_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'changes'), PyJs_anonymous_152_)
            if var.get(u'needReloadForSlot'):
                var.get(u"this").callprop(u'_initSourceSlots')
                var.get(u"this").callprop(u'_repaintChildren')
            else:
                var.put(u'slotChildrenLen', var.get(u"this").get(u'slotChildren').get(u'length'))
                while (var.put(u'slotChildrenLen',Js(var.get(u'slotChildrenLen').to_number())-Js(1))+Js(1)):
                    var.put(u'slotChild', var.get(u"this").get(u'slotChildren').get(var.get(u'slotChildrenLen')))
                    if var.get(u'slotChild').get(u'lifeCycle').get(u'disposed'):
                        var.get(u"this").get(u'slotChildren').callprop(u'splice', var.get(u'slotChildrenLen'), Js(1.0))
                    else:
                        if var.get(u'slotChild').get(u'isInserted'):
                            var.get(u'slotChild').callprop(u'_update', var.get(u'changes'), Js(1.0))
        var.put(u'dataChanges', var.get(u"this").get(u'dataChanges'))
        if var.get(u'dataChanges'):
            var.get(u"this").put(u'dataChanges', var.get(u"null"))
            @Js
            def PyJs_anonymous_155_(prop, this, arguments, var=var):
                var = Scope({u'this':this, u'arguments':arguments, u'prop':prop}, var)
                var.registers([u'prop'])
                @Js
                def PyJs_anonymous_156_(change, this, arguments, var=var):
                    var = Scope({u'this':this, u'arguments':arguments, u'change':change}, var)
                    var.registers([u'change'])
                    if (var.get(u'changeExprCompare')(var.get(u'change').get(u'expr'), var.get(u'prop').get(u'expr'), var.get(u'me').get(u'data')) or (var.get(u'prop').get(u'hintExpr') and var.get(u'changeExprCompare')(var.get(u'change').get(u'expr'), var.get(u'prop').get(u'hintExpr'), var.get(u'me').get(u'data')))):
                        var.get(u'handleProp')(var.get(u'me'), var.get(u'evalExpr')(var.get(u'prop').get(u'expr'), var.get(u'me').get(u'data'), var.get(u'me')), var.get(u'prop'))
                        return Js(False)
                PyJs_anonymous_156_._set_name(u'anonymous')
                var.get(u'each')(var.get(u'dataChanges'), PyJs_anonymous_156_)
            PyJs_anonymous_155_._set_name(u'anonymous')
            var.get(u'each')(var.get(u"this").get(u'aNode').get(u'hotspot').get(u'dynamicProps'), PyJs_anonymous_155_)
            var.get(u'elementUpdateChildren')(var.get(u"this").get(u'children'), var.get(u'dataChanges'))
            var.get(u'elementUpdateChildren')(var.get(u"this").get(u'implicitChildren'), var.get(u'dataChanges'))
            if var.get(u'needReloadForSlot'):
                var.get(u"this").callprop(u'_initSourceSlots')
                var.get(u"this").callprop(u'_repaintChildren')
            var.get(u"this").callprop(u'_toPhase', Js(u'updated'))
            if var.get(u"this").get(u'owner'):
                var.get(u"this").callprop(u'_updateBindxOwner', var.get(u'dataChanges'))
                var.get(u"this").get(u'owner').callprop(u'_update')
        var.get(u"this").put(u'_notifyNeedReload', var.get(u"null"))
    PyJs_anonymous_149_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'_update', PyJs_anonymous_149_)
    @Js
    def PyJs_anonymous_157_(dataChanges, this, arguments, var=var):
        var = Scope({u'dataChanges':dataChanges, u'this':this, u'arguments':arguments}, var)
        var.registers([u'me', u'dataChanges'])
        var.put(u'me', var.get(u"this"))
        @Js
        def PyJs_anonymous_158_(change, this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments, u'change':change}, var)
            var.registers([u'change'])
            @Js
            def PyJs_anonymous_159_(bindItem, this, arguments, var=var):
                var = Scope({u'bindItem':bindItem, u'this':this, u'arguments':arguments}, var)
                var.registers([u'bindItem', u'updateScopeExpr', u'changeExpr'])
                var.put(u'changeExpr', var.get(u'change').get(u'expr'))
                if ((var.get(u'bindItem').get(u'x') and var.get(u'isDataChangeByElement')(var.get(u'change'), var.get(u'me').get(u'owner')).neg()) and var.get(u'changeExprCompare')(var.get(u'changeExpr'), var.get(u'parseExpr')(var.get(u'bindItem').get(u'name')), var.get(u'me').get(u'data'))):
                    var.put(u'updateScopeExpr', var.get(u'bindItem').get(u'expr'))
                    if (var.get(u'changeExpr').get(u'paths').get(u'length')>Js(1.0)):
                        var.put(u'updateScopeExpr', var.get(u'createAccessor')(var.get(u'bindItem').get(u'expr').get(u'paths').callprop(u'concat', var.get(u'changeExpr').get(u'paths').callprop(u'slice', Js(1.0)))))
                    var.get(u'me').get(u'scope').callprop(u'set', var.get(u'updateScopeExpr'), var.get(u'evalExpr')(var.get(u'changeExpr'), var.get(u'me').get(u'data'), var.get(u'me')), Js({u'target':Js({u'id':var.get(u'me').get(u'id'),u'prop':var.get(u'bindItem').get(u'name')})}))
            PyJs_anonymous_159_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'me').get(u'binds'), PyJs_anonymous_159_)
        PyJs_anonymous_158_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'dataChanges'), PyJs_anonymous_158_)
    PyJs_anonymous_157_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'_updateBindxOwner', PyJs_anonymous_157_)
    @Js
    def PyJs_anonymous_160_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        var.get(u'elementDisposeChildren')(var.get(u"this").get(u'children'), Js(0.0), Js(1.0))
        var.get(u"this").put(u'children', Js([]))
        var.get(u"this").put(u'_contentReady', Js(0.0))
        var.get(u"this").put(u'slotChildren', Js([]))
        var.get(u'elementAttach')(var.get(u"this"))
    PyJs_anonymous_160_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'_repaintChildren', PyJs_anonymous_160_)
    @Js
    def PyJs_anonymous_161_(change, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'change':change}, var)
        var.registers([u'change'])
        if (var.get(u"this").get(u'lifeCycle').get(u'created') and var.get(u"this").get(u'_aftercreated')):
            if var.get(u"this").get(u'dataChanges').neg():
                var.get(u'nextTick')(var.get(u"this").get(u'_update'), var.get(u"this"))
                var.get(u"this").put(u'dataChanges', Js([]))
            var.get(u"this").get(u'dataChanges').callprop(u'push', var.get(u'change'))
        else:
            if (var.get(u"this").get(u'lifeCycle').get(u'inited') and var.get(u"this").get(u'owner')):
                var.get(u"this").callprop(u'_updateBindxOwner', Js([var.get(u'change')]))
    PyJs_anonymous_161_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'_dataChanger', PyJs_anonymous_161_)
    @Js
    def PyJs_anonymous_162_(dataName, listener, this, arguments, var=var):
        var = Scope({u'listener':listener, u'dataName':dataName, u'this':this, u'arguments':arguments}, var)
        var.registers([u'listener', u'dataName', u'dataExpr'])
        var.put(u'dataExpr', var.get(u'parseExpr')(var.get(u'dataName')))
        @Js
        def PyJs_anonymous_163_(change, this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments, u'change':change}, var)
            var.registers([u'change'])
            if var.get(u'changeExprCompare')(var.get(u'change').get(u'expr'), var.get(u'dataExpr'), var.get(u"this").get(u'data')):
                var.get(u'listener').callprop(u'call', var.get(u"this"), var.get(u'evalExpr')(var.get(u'dataExpr'), var.get(u"this").get(u'data'), var.get(u"this")), var.get(u'change'))
        PyJs_anonymous_163_._set_name(u'anonymous')
        var.get(u"this").get(u'data').callprop(u'listen', var.get(u'bind')(PyJs_anonymous_163_, var.get(u"this")))
    PyJs_anonymous_162_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'watch', PyJs_anonymous_162_)
    var.get(u'Component').get(u'prototype').put(u'dispose', var.get(u'elementOwnDispose'))
    @Js
    def PyJs_anonymous_164_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        if var.get(u"this").get(u'leaveDispose'):
            if var.get(u"this").get(u'lifeCycle').get(u'disposed').neg():
                var.get(u"this").put(u'slotChildren', var.get(u"null"))
                var.get(u"this").get(u'data').callprop(u'unlisten')
                var.get(u"this").put(u'dataChanger', var.get(u"null"))
                var.get(u"this").put(u'dataChanges', var.get(u"null"))
                var.get(u'elementDispose')(var.get(u"this"), var.get(u"this").get(u'disposeNoDetach'), var.get(u"this").get(u'disposeNoTransition'))
                var.get(u"this").put(u'listeners', var.get(u"null"))
                var.get(u"this").put(u'source', var.get(u"null"))
                var.get(u"this").put(u'sourceSlots', var.get(u"null"))
                var.get(u"this").put(u'sourceSlotNameProps', var.get(u"null"))
                var.get(u"this").put(u'implicitChildren', var.get(u"null"))
        else:
            if var.get(u"this").get(u'lifeCycle').get(u'attached'):
                var.get(u'removeEl')(var.get(u"this").get(u'el'))
                var.get(u"this").callprop(u'_toPhase', Js(u'detached'))
    PyJs_anonymous_164_._set_name(u'anonymous')
    var.get(u'Component').get(u'prototype').put(u'_doneLeave', PyJs_anonymous_164_)
    var.get(u'Component').get(u'prototype').put(u'_attached', var.get(u'elementOwnAttached'))
    var.get(u'Component').get(u'prototype').put(u'attach', var.get(u'elementOwnAttach'))
    var.get(u'Component').get(u'prototype').put(u'detach', var.get(u'elementOwnDetach'))
    var.get(u'Component').get(u'prototype').put(u'_create', var.get(u'elementOwnCreate'))
    var.get(u'Component').get(u'prototype').put(u'_onEl', var.get(u'elementOwnOnEl'))
    pass
    pass
    pass
    pass
    pass
    pass
    @Js
    def PyJs_anonymous_175_(onload, this, arguments, var=var):
        var = Scope({u'this':this, u'onload':onload, u'arguments':arguments}, var)
        var.registers([u'me', u'startLoad', u'done', u'onload'])
        var.put(u'me', var.get(u"this"))
        while 1:
            SWITCHED = False
            CONDITION = (var.get(u"this").get(u'state'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(2.0)):
                SWITCHED = True
                @Js
                def PyJs_anonymous_176_(this, arguments, var=var):
                    var = Scope({u'this':this, u'arguments':arguments}, var)
                    var.registers([])
                    var.get(u'onload')(var.get(u'me').get(u'Component'))
                PyJs_anonymous_176_._set_name(u'anonymous')
                var.get(u'nextTick')(PyJs_anonymous_176_)
                break
            if SWITCHED or PyJsStrictEq(CONDITION, Js(1.0)):
                SWITCHED = True
                var.get(u"this").get(u'listeners').callprop(u'push', var.get(u'onload'))
                break
            if True:
                SWITCHED = True
                var.get(u"this").get(u'listeners').callprop(u'push', var.get(u'onload'))
                var.get(u"this").put(u'state', Js(1.0))
                var.put(u'startLoad', var.get(u"this").callprop(u'load'))
                @Js
                def PyJs_anonymous_177_(RealComponent, this, arguments, var=var):
                    var = Scope({u'this':this, u'RealComponent':RealComponent, u'arguments':arguments}, var)
                    var.registers([u'RealComponent'])
                    var.get(u'me').callprop(u'done', var.get(u'RealComponent'))
                PyJs_anonymous_177_._set_name(u'anonymous')
                var.put(u'done', PyJs_anonymous_177_)
                if (var.get(u'startLoad') and PyJsStrictEq(var.get(u'startLoad').get(u'then').typeof(),Js(u'function'))):
                    var.get(u'startLoad').callprop(u'then', var.get(u'done'), var.get(u'done'))
            SWITCHED = True
            break
    PyJs_anonymous_175_._set_name(u'anonymous')
    var.get(u'ComponentLoader').get(u'prototype').put(u'start', PyJs_anonymous_175_)
    @Js
    def PyJs_anonymous_178_(ComponentClass, this, arguments, var=var):
        var = Scope({u'this':this, u'ComponentClass':ComponentClass, u'arguments':arguments}, var)
        var.registers([u'ComponentClass'])
        var.get(u"this").put(u'state', Js(2.0))
        var.put(u'ComponentClass', (var.get(u'ComponentClass') or var.get(u"this").get(u'fallback')))
        var.get(u"this").put(u'Component', var.get(u'ComponentClass'))
        @Js
        def PyJs_anonymous_179_(listener, this, arguments, var=var):
            var = Scope({u'listener':listener, u'this':this, u'arguments':arguments}, var)
            var.registers([u'listener'])
            var.get(u'listener')(var.get(u'ComponentClass'))
        PyJs_anonymous_179_._set_name(u'anonymous')
        var.get(u'each')(var.get(u"this").get(u'listeners'), PyJs_anonymous_179_)
    PyJs_anonymous_178_._set_name(u'anonymous')
    var.get(u'ComponentLoader').get(u'prototype').put(u'done', PyJs_anonymous_178_)
    pass
    @Js
    def PyJs_anonymous_180_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'source'])
        return ((Js(u'"')+var.get(u'source'))+Js(u'"'))
    PyJs_anonymous_180_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_181_(accessorExpr, this, arguments, var=var):
        var = Scope({u'accessorExpr':accessorExpr, u'this':this, u'arguments':arguments}, var)
        var.registers([u'accessorExpr', u'code'])
        var.put(u'code', Js(u'componentCtx.data'))
        if var.get(u'accessorExpr'):
            @Js
            def PyJs_anonymous_182_(path, this, arguments, var=var):
                var = Scope({u'this':this, u'path':path, u'arguments':arguments}, var)
                var.registers([u'path'])
                if PyJsStrictEq(var.get(u'path').get(u'type'),Js(4.0)):
                    var.put(u'code', ((Js(u'[')+var.get(u'compileExprSource').callprop(u'dataAccess', var.get(u'path')))+Js(u']')), u'+')
                    return var.get('undefined')
                while 1:
                    SWITCHED = False
                    CONDITION = (var.get(u'path').get(u'value').typeof())
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(u'string')):
                        SWITCHED = True
                        var.put(u'code', (Js(u'.')+var.get(u'path').get(u'value')), u'+')
                        break
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(u'number')):
                        SWITCHED = True
                        var.put(u'code', ((Js(u'[')+var.get(u'path').get(u'value'))+Js(u']')), u'+')
                        break
                    SWITCHED = True
                    break
            PyJs_anonymous_182_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'accessorExpr').get(u'paths'), PyJs_anonymous_182_)
        return var.get(u'code')
    PyJs_anonymous_181_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_183_(callExpr, this, arguments, var=var):
        var = Scope({u'this':this, u'callExpr':callExpr, u'arguments':arguments}, var)
        var.registers([u'i', u'paths', u'code', u'callExpr', u'path'])
        var.put(u'paths', var.get(u'callExpr').get(u'name').get(u'paths'))
        var.put(u'code', (Js(u'componentCtx.')+var.get(u'paths').get(u'0').get(u'value')))
        #for JS loop
        var.put(u'i', Js(1.0))
        while (var.get(u'i')<var.get(u'paths').get(u'length')):
            try:
                var.put(u'path', var.get(u'paths').get(var.get(u'i')))
                while 1:
                    SWITCHED = False
                    CONDITION = (var.get(u'path').get(u'type'))
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(1.0)):
                        SWITCHED = True
                        var.put(u'code', (Js(u'.')+var.get(u'path').get(u'value')), u'+')
                        break
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(2.0)):
                        SWITCHED = True
                        var.put(u'code', ((Js(u'[')+var.get(u'path').get(u'value'))+Js(u']')), u'+')
                        break
                    if True:
                        SWITCHED = True
                        var.put(u'code', ((Js(u'[')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'path')))+Js(u']')), u'+')
                    SWITCHED = True
                    break
            finally:
                    (var.put(u'i',Js(var.get(u'i').to_number())+Js(1))-Js(1))
        var.put(u'code', Js(u'('), u'+')
        @Js
        def PyJs_anonymous_184_(arg, index, this, arguments, var=var):
            var = Scope({u'this':this, u'index':index, u'arguments':arguments, u'arg':arg}, var)
            var.registers([u'index', u'arg'])
            var.put(u'code', ((Js(u', ') if (var.get(u'index')>Js(0.0)) else Js(u''))+var.get(u'compileExprSource').callprop(u'expr', var.get(u'arg'))), u'+')
        PyJs_anonymous_184_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'callExpr').get(u'args'), PyJs_anonymous_184_)
        var.put(u'code', Js(u')'), u'+')
        return var.get(u'code')
    PyJs_anonymous_183_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_185_(interpExpr, this, arguments, var=var):
        var = Scope({u'this':this, u'interpExpr':interpExpr, u'arguments':arguments}, var)
        var.registers([u'interpExpr', u'code'])
        var.put(u'code', var.get(u'compileExprSource').callprop(u'expr', var.get(u'interpExpr').get(u'expr')))
        @Js
        def PyJs_anonymous_186_(filter, this, arguments, var=var):
            var = Scope({u'filter':filter, u'this':this, u'arguments':arguments}, var)
            var.registers([u'filter'])
            var.put(u'code', (((Js(u'componentCtx.callFilter("')+var.get(u'filter').get(u'name').get(u'paths').get(u'0').get(u'value'))+Js(u'", ['))+var.get(u'code')))
            @Js
            def PyJs_anonymous_187_(arg, this, arguments, var=var):
                var = Scope({u'this':this, u'arguments':arguments, u'arg':arg}, var)
                var.registers([u'arg'])
                var.put(u'code', (Js(u', ')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'arg'))), u'+')
            PyJs_anonymous_187_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'filter').get(u'args'), PyJs_anonymous_187_)
            var.put(u'code', Js(u'])'), u'+')
        PyJs_anonymous_186_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'interpExpr').get(u'filters'), PyJs_anonymous_186_)
        if var.get(u'interpExpr').get(u'original').neg():
            return ((Js(u'escapeHTML(')+var.get(u'code'))+Js(u')'))
        return var.get(u'code')
    PyJs_anonymous_185_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_188_(textExpr, this, arguments, var=var):
        var = Scope({u'this':this, u'textExpr':textExpr, u'arguments':arguments}, var)
        var.registers([u'code', u'textExpr'])
        if PyJsStrictEq(var.get(u'textExpr').get(u'segs').get(u'length'),Js(0.0)):
            return Js(u'""')
        var.put(u'code', Js(u''))
        @Js
        def PyJs_anonymous_189_(seg, this, arguments, var=var):
            var = Scope({u'seg':seg, u'this':this, u'arguments':arguments}, var)
            var.registers([u'seg', u'segCode'])
            var.put(u'segCode', var.get(u'compileExprSource').callprop(u'expr', var.get(u'seg')))
            var.put(u'code', ((Js(u' + ')+var.get(u'segCode')) if var.get(u'code') else var.get(u'segCode')), u'+')
        PyJs_anonymous_189_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'textExpr').get(u'segs'), PyJs_anonymous_189_)
        return var.get(u'code')
    PyJs_anonymous_188_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_190_(arrayExpr, this, arguments, var=var):
        var = Scope({u'this':this, u'arrayExpr':arrayExpr, u'arguments':arguments}, var)
        var.registers([u'arrayExpr', u'code'])
        var.put(u'code', Js([]))
        @Js
        def PyJs_anonymous_191_(item, this, arguments, var=var):
            var = Scope({u'this':this, u'item':item, u'arguments':arguments}, var)
            var.registers([u'item'])
            var.get(u'code').callprop(u'push', ((Js(u'...') if var.get(u'item').get(u'spread') else Js(u''))+var.get(u'compileExprSource').callprop(u'expr', var.get(u'item').get(u'expr'))))
        PyJs_anonymous_191_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'arrayExpr').get(u'items'), PyJs_anonymous_191_)
        return ((Js(u'[\n')+var.get(u'code').callprop(u'join', Js(u',\n')))+Js(u'\n]'))
    PyJs_anonymous_190_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_192_(objExpr, this, arguments, var=var):
        var = Scope({u'this':this, u'objExpr':objExpr, u'arguments':arguments}, var)
        var.registers([u'code', u'objExpr'])
        var.put(u'code', Js([]))
        @Js
        def PyJs_anonymous_193_(item, this, arguments, var=var):
            var = Scope({u'this':this, u'item':item, u'arguments':arguments}, var)
            var.registers([u'item'])
            if var.get(u'item').get(u'spread'):
                var.get(u'code').callprop(u'push', (Js(u'...')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'item').get(u'expr'))))
            else:
                var.get(u'code').callprop(u'push', ((var.get(u'compileExprSource').callprop(u'expr', var.get(u'item').get(u'name'))+Js(u':'))+var.get(u'compileExprSource').callprop(u'expr', var.get(u'item').get(u'expr'))))
        PyJs_anonymous_193_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'objExpr').get(u'items'), PyJs_anonymous_193_)
        return ((Js(u'{\n')+var.get(u'code').callprop(u'join', Js(u',\n')))+Js(u'\n}'))
    PyJs_anonymous_192_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_194_(expr, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'arguments':arguments}, var)
        var.registers([u'expr'])
        if var.get(u'expr').get(u'parenthesized'):
            return ((Js(u'(')+var.get(u'compileExprSource').callprop(u'_expr', var.get(u'expr')))+Js(u')'))
        return var.get(u'compileExprSource').callprop(u'_expr', var.get(u'expr'))
    PyJs_anonymous_194_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_195_(expr, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'arguments':arguments}, var)
        var.registers([u'expr'])
        while 1:
            SWITCHED = False
            CONDITION = (var.get(u'expr').get(u'type'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(9.0)):
                SWITCHED = True
                while 1:
                    SWITCHED = False
                    CONDITION = (var.get(u'expr').get(u'operator'))
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(33.0)):
                        SWITCHED = True
                        return (Js(u'!')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'expr').get(u'expr')))
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(45.0)):
                        SWITCHED = True
                        return (Js(u'-')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'expr').get(u'expr')))
                    SWITCHED = True
                    break
            if SWITCHED or PyJsStrictEq(CONDITION, Js(8.0)):
                SWITCHED = True
                return ((var.get(u'compileExprSource').callprop(u'expr', var.get(u'expr').get(u'segs').get(u'0'))+var.get(u'compileExprSource').get(u'binaryOp').get(var.get(u'expr').get(u'operator')))+var.get(u'compileExprSource').callprop(u'expr', var.get(u'expr').get(u'segs').get(u'1')))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(10.0)):
                SWITCHED = True
                return ((((var.get(u'compileExprSource').callprop(u'expr', var.get(u'expr').get(u'segs').get(u'0'))+Js(u'?'))+var.get(u'compileExprSource').callprop(u'expr', var.get(u'expr').get(u'segs').get(u'1')))+Js(u':'))+var.get(u'compileExprSource').callprop(u'expr', var.get(u'expr').get(u'segs').get(u'2')))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(1.0)):
                SWITCHED = True
                return var.get(u'compileExprSource').callprop(u'stringLiteralize', (var.get(u'expr').get(u'literal') or var.get(u'expr').get(u'value')))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(2.0)):
                SWITCHED = True
                return var.get(u'expr').get(u'value')
            if SWITCHED or PyJsStrictEq(CONDITION, Js(3.0)):
                SWITCHED = True
                return (Js(u'true') if var.get(u'expr').get(u'value') else Js(u'false'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(4.0)):
                SWITCHED = True
                return var.get(u'compileExprSource').callprop(u'dataAccess', var.get(u'expr'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(5.0)):
                SWITCHED = True
                return var.get(u'compileExprSource').callprop(u'interp', var.get(u'expr'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(7.0)):
                SWITCHED = True
                return var.get(u'compileExprSource').callprop(u'text', var.get(u'expr'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(12.0)):
                SWITCHED = True
                return var.get(u'compileExprSource').callprop(u'array', var.get(u'expr'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(11.0)):
                SWITCHED = True
                return var.get(u'compileExprSource').callprop(u'object', var.get(u'expr'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(6.0)):
                SWITCHED = True
                return var.get(u'compileExprSource').callprop(u'callExpr', var.get(u'expr'))
            SWITCHED = True
            break
    PyJs_anonymous_195_._set_name(u'anonymous')
    var.put(u'compileExprSource', Js({u'stringLiteralize':PyJs_anonymous_180_,u'dataAccess':PyJs_anonymous_181_,u'callExpr':PyJs_anonymous_183_,u'interp':PyJs_anonymous_185_,u'text':PyJs_anonymous_188_,u'array':PyJs_anonymous_190_,u'object':PyJs_anonymous_192_,u'binaryOp':Js({u'43':Js(u'+'),u'45':Js(u'-'),u'42':Js(u'*'),u'47':Js(u'/'),u'60':Js(u'<'),u'62':Js(u'>'),u'76':Js(u'&&'),u'94':Js(u'!='),u'121':Js(u'<='),u'122':Js(u'=='),u'123':Js(u'>='),u'155':Js(u'!=='),u'183':Js(u'==='),u'248':Js(u'||')}),u'expr':PyJs_anonymous_194_,u'_expr':PyJs_anonymous_195_}))
    pass
    @Js
    def PyJs_anonymous_196_(code, this, arguments, var=var):
        var = Scope({u'this':this, u'code':code, u'arguments':arguments}, var)
        var.registers([u'code'])
        var.get(u"this").get(u'segs').callprop(u'push', Js({u'type':Js(u'RAW'),u'code':var.get(u'code')}))
    PyJs_anonymous_196_._set_name(u'anonymous')
    var.get(u'CompileSourceBuffer').get(u'prototype').put(u'addRaw', PyJs_anonymous_196_)
    @Js
    def PyJs_anonymous_197_(code, this, arguments, var=var):
        var = Scope({u'this':this, u'code':code, u'arguments':arguments}, var)
        var.registers([u'code'])
        var.get(u"this").get(u'segs').callprop(u'push', Js({u'type':Js(u'JOIN_RAW'),u'code':var.get(u'code')}))
    PyJs_anonymous_197_._set_name(u'anonymous')
    var.get(u'CompileSourceBuffer').get(u'prototype').put(u'joinRaw', PyJs_anonymous_197_)
    @Js
    def PyJs_anonymous_198_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        var.get(u"this").callprop(u'addRaw', Js(u'function (data, parentCtx, sourceSlots) {'))
        var.get(u"this").callprop(u'addRaw', Js(u'var html = "";'))
    PyJs_anonymous_198_._set_name(u'anonymous')
    var.get(u'CompileSourceBuffer').get(u'prototype').put(u'addRendererStart', PyJs_anonymous_198_)
    @Js
    def PyJs_anonymous_199_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        var.get(u"this").callprop(u'addRaw', Js(u'return html;'))
        var.get(u"this").callprop(u'addRaw', Js(u'}'))
    PyJs_anonymous_199_._set_name(u'anonymous')
    var.get(u'CompileSourceBuffer').get(u'prototype').put(u'addRendererEnd', PyJs_anonymous_199_)
    @Js
    def PyJs_anonymous_200_(str, this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments, u'str':str}, var)
        var.registers([u'str'])
        var.get(u"this").get(u'segs').callprop(u'push', Js({u'str':var.get(u'str'),u'type':Js(u'JOIN_STRING')}))
    PyJs_anonymous_200_._set_name(u'anonymous')
    var.get(u'CompileSourceBuffer').get(u'prototype').put(u'joinString', PyJs_anonymous_200_)
    @Js
    def PyJs_anonymous_201_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([])
        var.get(u"this").get(u'segs').callprop(u'push', Js({u'type':Js(u'JOIN_DATA_STRINGIFY')}))
    PyJs_anonymous_201_._set_name(u'anonymous')
    var.get(u'CompileSourceBuffer').get(u'prototype').put(u'joinDataStringify', PyJs_anonymous_201_)
    @Js
    def PyJs_anonymous_202_(expr, this, arguments, var=var):
        var = Scope({u'this':this, u'expr':expr, u'arguments':arguments}, var)
        var.registers([u'expr'])
        var.get(u"this").get(u'segs').callprop(u'push', Js({u'expr':var.get(u'expr'),u'type':Js(u'JOIN_EXPR')}))
    PyJs_anonymous_202_._set_name(u'anonymous')
    var.get(u'CompileSourceBuffer').get(u'prototype').put(u'joinExpr', PyJs_anonymous_202_)
    @Js
    def PyJs_anonymous_203_(this, arguments, var=var):
        var = Scope({u'this':this, u'arguments':arguments}, var)
        var.registers([u'genStrLiteral', u'code', u'temp'])
        @Js
        def PyJsHoisted_genStrLiteral_(this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments}, var)
            var.registers([])
            if var.get(u'temp'):
                var.get(u'code').callprop(u'push', ((Js(u'html += ')+var.get(u'compileExprSource').callprop(u'stringLiteralize', var.get(u'temp')))+Js(u';')))
            var.put(u'temp', Js(u''))
        PyJsHoisted_genStrLiteral_.func_name = u'genStrLiteral'
        var.put(u'genStrLiteral', PyJsHoisted_genStrLiteral_)
        var.put(u'code', Js([]))
        var.put(u'temp', Js(u''))
        pass
        @Js
        def PyJs_anonymous_204_(seg, this, arguments, var=var):
            var = Scope({u'seg':seg, u'this':this, u'arguments':arguments}, var)
            var.registers([u'seg'])
            if PyJsStrictEq(var.get(u'seg').get(u'type'),Js(u'JOIN_STRING')):
                var.put(u'temp', var.get(u'seg').get(u'str'), u'+')
                return var.get('undefined')
            var.get(u'genStrLiteral')()
            while 1:
                SWITCHED = False
                CONDITION = (var.get(u'seg').get(u'type'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'JOIN_DATA_STRINGIFY')):
                    SWITCHED = True
                    var.get(u'code').callprop(u'push', ((Js(u'html += stringifier.any(')+var.get(u'compileExprSource').callprop(u'dataAccess'))+Js(u');')))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'JOIN_EXPR')):
                    SWITCHED = True
                    var.get(u'code').callprop(u'push', ((Js(u'html += ')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'seg').get(u'expr')))+Js(u';')))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'JOIN_RAW')):
                    SWITCHED = True
                    var.get(u'code').callprop(u'push', ((Js(u'html += ')+var.get(u'seg').get(u'code'))+Js(u';')))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'RAW')):
                    SWITCHED = True
                    var.get(u'code').callprop(u'push', var.get(u'seg').get(u'code'))
                    break
                SWITCHED = True
                break
        PyJs_anonymous_204_._set_name(u'anonymous')
        var.get(u'each')(var.get(u"this").get(u'segs'), PyJs_anonymous_204_)
        var.get(u'genStrLiteral')()
        return var.get(u'code').callprop(u'join', Js(u'\n'))
    PyJs_anonymous_203_._set_name(u'anonymous')
    var.get(u'CompileSourceBuffer').get(u'prototype').put(u'toCode', PyJs_anonymous_203_)
    pass
    pass
    @Js
    def PyJs_anonymous_205_(sourceBuffer, tagName, props, extraProp, bindDirective, this, arguments, var=var):
        var = Scope({u'bindDirective':bindDirective, u'extraProp':extraProp, u'sourceBuffer':sourceBuffer, u'tagName':tagName, u'props':props, u'this':this, u'arguments':arguments}, var)
        var.registers([u'bindDirective', u'extraProp', u'sourceBuffer', u'tagName', u'props', u'propsIndex'])
        var.get(u'sourceBuffer').callprop(u'joinString', (Js(u'<')+var.get(u'tagName')))
        var.get(u'sourceBuffer').callprop(u'joinString', (var.get(u'extraProp') or Js(u'')))
        var.put(u'propsIndex', Js({}))
        @Js
        def PyJs_anonymous_206_(prop, this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments, u'prop':prop}, var)
            var.registers([u'prop'])
            var.get(u'propsIndex').put(var.get(u'prop').get(u'name'), var.get(u'prop'))
        PyJs_anonymous_206_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'props'), PyJs_anonymous_206_)
        @Js
        def PyJs_anonymous_207_(prop, this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments, u'prop':prop}, var)
            var.registers([u'valueCode', u'valueProp', u'prop'])
            if PyJsStrictEq(var.get(u'prop').get(u'name'),Js(u'slot')):
                return var.get('undefined')
            if PyJsStrictEq(var.get(u'prop').get(u'name'),Js(u'value')):
                while 1:
                    SWITCHED = False
                    CONDITION = (var.get(u'tagName'))
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(u'textarea')):
                        SWITCHED = True
                        return var.get('undefined')
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(u'select')):
                        SWITCHED = True
                        var.get(u'sourceBuffer').callprop(u'addRaw', ((Js(u'$selectValue = ')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'prop').get(u'expr')))+Js(u' || "";')))
                        return var.get('undefined')
                    if SWITCHED or PyJsStrictEq(CONDITION, Js(u'option')):
                        SWITCHED = True
                        var.get(u'sourceBuffer').callprop(u'addRaw', ((Js(u'$optionValue = ')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'prop').get(u'expr')))+Js(u';')))
                        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'if ($optionValue != null) {'))
                        var.get(u'sourceBuffer').callprop(u'joinRaw', Js(u'" value=\\"" + $optionValue + "\\""'))
                        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}'))
                        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'if ($optionValue === $selectValue) {'))
                        var.get(u'sourceBuffer').callprop(u'joinString', Js(u' selected'))
                        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}'))
                        return var.get('undefined')
                    SWITCHED = True
                    break
            while 1:
                SWITCHED = False
                CONDITION = (var.get(u'prop').get(u'name'))
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'readonly')):
                    SWITCHED = True
                    pass
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'disabled')):
                    SWITCHED = True
                    pass
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'multiple')):
                    SWITCHED = True
                    if PyJsStrictEq(var.get(u'prop').get(u'raw'),Js(u'')):
                        var.get(u'sourceBuffer').callprop(u'joinString', (Js(u' ')+var.get(u'prop').get(u'name')))
                    else:
                        var.get(u'sourceBuffer').callprop(u'joinRaw', ((((Js(u'boolAttrFilter("')+var.get(u'prop').get(u'name'))+Js(u'", '))+var.get(u'compileExprSource').callprop(u'expr', var.get(u'prop').get(u'expr')))+Js(u')')))
                    break
                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'checked')):
                    SWITCHED = True
                    if PyJsStrictEq(var.get(u'tagName'),Js(u'input')):
                        var.put(u'valueProp', var.get(u'propsIndex').get(u'value'))
                        var.put(u'valueCode', var.get(u'compileExprSource').callprop(u'expr', var.get(u'valueProp').get(u'expr')))
                        if var.get(u'valueProp'):
                            while 1:
                                SWITCHED = False
                                CONDITION = (var.get(u'propsIndex').get(u'type').get(u'raw'))
                                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'checkbox')):
                                    SWITCHED = True
                                    var.get(u'sourceBuffer').callprop(u'addRaw', ((((Js(u'if (contains(')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'prop').get(u'expr')))+Js(u', '))+var.get(u'valueCode'))+Js(u')) {')))
                                    var.get(u'sourceBuffer').callprop(u'joinString', Js(u' checked'))
                                    var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}'))
                                    break
                                if SWITCHED or PyJsStrictEq(CONDITION, Js(u'radio')):
                                    SWITCHED = True
                                    var.get(u'sourceBuffer').callprop(u'addRaw', ((((Js(u'if (')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'prop').get(u'expr')))+Js(u' === '))+var.get(u'valueCode'))+Js(u') {')))
                                    var.get(u'sourceBuffer').callprop(u'joinString', Js(u' checked'))
                                    var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}'))
                                    break
                                SWITCHED = True
                                break
                    break
                if True:
                    SWITCHED = True
                    if var.get(u'prop').get(u'attr'):
                        var.get(u'sourceBuffer').callprop(u'joinString', (Js(u' ')+var.get(u'prop').get(u'attr')))
                    else:
                        var.get(u'sourceBuffer').callprop(u'joinRaw', ((((((Js(u'attrFilter("')+var.get(u'prop').get(u'name'))+Js(u'", '))+(Js(u'escapeHTML(') if var.get(u'prop').get(u'x') else Js(u'')))+var.get(u'compileExprSource').callprop(u'expr', var.get(u'prop').get(u'expr')))+(Js(u')') if var.get(u'prop').get(u'x') else Js(u'')))+Js(u')')))
                    break
                SWITCHED = True
                break
        PyJs_anonymous_207_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'props'), PyJs_anonymous_207_)
        if var.get(u'bindDirective'):
            var.get(u'sourceBuffer').callprop(u'addRaw', (Js(u'(function ($bindObj) {for (var $key in $bindObj) {')+Js(u'var $value = $bindObj[$key];')))
            if PyJsStrictEq(var.get(u'tagName'),Js(u'textarea')):
                var.get(u'sourceBuffer').callprop(u'addRaw', ((Js(u'if ($key === "value") {')+Js(u'continue;'))+Js(u'}')))
            var.get(u'sourceBuffer').callprop(u'addRaw', (((((((((Js(u'switch ($key) {\n')+Js(u'case "readonly":\n'))+Js(u'case "disabled":\n'))+Js(u'case "multiple":\n'))+Js(u'case "multiple":\n'))+Js(u'html += boolAttrFilter($key, escapeHTML($value));\n'))+Js(u'break;\n'))+Js(u'default:\n'))+Js(u'html += attrFilter($key, escapeHTML($value));'))+Js(u'}')))
            var.get(u'sourceBuffer').callprop(u'addRaw', ((Js(u'}})(')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'bindDirective').get(u'value')))+Js(u');')))
        var.get(u'sourceBuffer').callprop(u'joinString', Js(u'>'))
    PyJs_anonymous_205_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_208_(sourceBuffer, tagName, this, arguments, var=var):
        var = Scope({u'this':this, u'sourceBuffer':sourceBuffer, u'tagName':tagName, u'arguments':arguments}, var)
        var.registers([u'sourceBuffer', u'tagName'])
        if var.get(u'autoCloseTags').get(var.get(u'tagName')).neg():
            var.get(u'sourceBuffer').callprop(u'joinString', ((Js(u'</')+var.get(u'tagName'))+Js(u'>')))
        if PyJsStrictEq(var.get(u'tagName'),Js(u'select')):
            var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'$selectValue = null;'))
        if PyJsStrictEq(var.get(u'tagName'),Js(u'option')):
            var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'$optionValue = null;'))
    PyJs_anonymous_208_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_209_(sourceBuffer, aNode, owner, this, arguments, var=var):
        var = Scope({u'owner':owner, u'this':this, u'aNode':aNode, u'sourceBuffer':sourceBuffer, u'arguments':arguments}, var)
        var.registers([u'owner', u'htmlDirective', u'aNode', u'valueProp', u'sourceBuffer'])
        if PyJsStrictEq(var.get(u'aNode').get(u'tagName'),Js(u'textarea')):
            var.put(u'valueProp', var.get(u'getANodeProp')(var.get(u'aNode'), Js(u'value')))
            if var.get(u'valueProp'):
                var.get(u'sourceBuffer').callprop(u'joinRaw', ((Js(u'escapeHTML(')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'valueProp').get(u'expr')))+Js(u')')))
            return var.get('undefined')
        var.put(u'htmlDirective', var.get(u'aNode').get(u'directives').get(u'html'))
        if var.get(u'htmlDirective'):
            var.get(u'sourceBuffer').callprop(u'joinExpr', var.get(u'htmlDirective').get(u'value'))
        else:
            @Js
            def PyJs_anonymous_210_(aNodeChild, this, arguments, var=var):
                var = Scope({u'this':this, u'aNodeChild':aNodeChild, u'arguments':arguments}, var)
                var.registers([u'aNodeChild'])
                var.get(u'sourceBuffer').callprop(u'addRaw', var.get(u'aNodeCompiler').callprop(u'compile', var.get(u'aNodeChild'), var.get(u'sourceBuffer'), var.get(u'owner')))
            PyJs_anonymous_210_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'aNode').get(u'children'), PyJs_anonymous_210_)
    PyJs_anonymous_209_._set_name(u'anonymous')
    var.put(u'elementSourceCompiler', Js({u'tagStart':PyJs_anonymous_205_,u'tagEnd':PyJs_anonymous_208_,u'inner':PyJs_anonymous_209_}))
    @Js
    def PyJs_anonymous_211_(aNode, sourceBuffer, owner, extra, this, arguments, var=var):
        var = Scope({u'this':this, u'aNode':aNode, u'sourceBuffer':sourceBuffer, u'extra':extra, u'owner':owner, u'arguments':arguments}, var)
        var.registers([u'extra', u'compileMethod', u'ComponentType', u'aNode', u'sourceBuffer', u'owner'])
        var.put(u'extra', (var.get(u'extra') or Js({})))
        var.put(u'compileMethod', Js(u'compileElement'))
        if var.get(u'aNode').get(u'textExpr'):
            var.put(u'compileMethod', Js(u'compileText'))
        else:
            if var.get(u'aNode').get(u'directives').get(u'if'):
                var.put(u'compileMethod', Js(u'compileIf'))
            else:
                if var.get(u'aNode').get(u'directives').get(u'for'):
                    var.put(u'compileMethod', Js(u'compileFor'))
                else:
                    if PyJsStrictEq(var.get(u'aNode').get(u'tagName'),Js(u'slot')):
                        var.put(u'compileMethod', Js(u'compileSlot'))
                    else:
                        if PyJsStrictEq(var.get(u'aNode').get(u'tagName'),Js(u'template')):
                            var.put(u'compileMethod', Js(u'compileTemplate'))
                        else:
                            var.put(u'ComponentType', (var.get(u'owner').callprop(u'getComponentType', var.get(u'aNode')) if var.get(u'owner').get(u'getComponentType') else var.get(u'owner').get(u'components').get(var.get(u'aNode').get(u'tagName'))))
                            if var.get(u'ComponentType'):
                                var.put(u'compileMethod', Js(u'compileComponent'))
                                var.get(u'extra').put(u'ComponentClass', var.get(u'ComponentType'))
                                if var.get(u'ComponentType').instanceof(var.get(u'ComponentLoader')):
                                    var.put(u'compileMethod', Js(u'compileComponentLoader'))
        var.get(u'aNodeCompiler').callprop(var.get(u'compileMethod'), var.get(u'aNode'), var.get(u'sourceBuffer'), var.get(u'owner'), var.get(u'extra'))
    PyJs_anonymous_211_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_212_(aNode, sourceBuffer, this, arguments, var=var):
        var = Scope({u'this':this, u'aNode':aNode, u'sourceBuffer':sourceBuffer, u'arguments':arguments}, var)
        var.registers([u'aNode', u'sourceBuffer'])
        if var.get(u'aNode').get(u'textExpr').get(u'original'):
            var.get(u'sourceBuffer').callprop(u'joinString', var.get(u'serializeStump')(Js(u'text')))
        var.get(u'sourceBuffer').callprop(u'joinExpr', var.get(u'aNode').get(u'textExpr'))
        if var.get(u'aNode').get(u'textExpr').get(u'original'):
            var.get(u'sourceBuffer').callprop(u'joinString', var.get(u'serializeStumpEnd')(Js(u'text')))
    PyJs_anonymous_212_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_213_(aNode, sourceBuffer, owner, this, arguments, var=var):
        var = Scope({u'owner':owner, u'this':this, u'aNode':aNode, u'sourceBuffer':sourceBuffer, u'arguments':arguments}, var)
        var.registers([u'owner', u'aNode', u'sourceBuffer'])
        var.get(u'elementSourceCompiler').callprop(u'inner', var.get(u'sourceBuffer'), var.get(u'aNode'), var.get(u'owner'))
    PyJs_anonymous_213_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_214_(aNode, sourceBuffer, owner, this, arguments, var=var):
        var = Scope({u'owner':owner, u'this':this, u'aNode':aNode, u'sourceBuffer':sourceBuffer, u'arguments':arguments}, var)
        var.registers([u'owner', u'aNode', u'sourceBuffer', u'ifDirective'])
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'(function () {'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'var ifIndex = null;'))
        var.put(u'ifDirective', var.get(u'aNode').get(u'directives').get(u'if'))
        var.get(u'sourceBuffer').callprop(u'addRaw', ((Js(u'if (')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'ifDirective').get(u'value')))+Js(u') {')))
        var.get(u'sourceBuffer').callprop(u'addRaw', var.get(u'aNodeCompiler').callprop(u'compile', var.get(u'rinseCondANode')(var.get(u'aNode')), var.get(u'sourceBuffer'), var.get(u'owner')))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}'))
        @Js
        def PyJs_anonymous_215_(elseANode, index, this, arguments, var=var):
            var = Scope({u'this':this, u'index':index, u'elseANode':elseANode, u'arguments':arguments}, var)
            var.registers([u'elifDirective', u'index', u'elseANode'])
            var.put(u'elifDirective', var.get(u'elseANode').get(u'directives').get(u'elif'))
            if var.get(u'elifDirective'):
                var.get(u'sourceBuffer').callprop(u'addRaw', ((Js(u'else if (')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'elifDirective').get(u'value')))+Js(u') {')))
            else:
                var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'else {'))
            var.get(u'sourceBuffer').callprop(u'addRaw', var.get(u'aNodeCompiler').callprop(u'compile', var.get(u'rinseCondANode')(var.get(u'elseANode')), var.get(u'sourceBuffer'), var.get(u'owner')))
            var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}'))
        PyJs_anonymous_215_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'aNode').get(u'elses'), PyJs_anonymous_215_)
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'})();'))
    PyJs_anonymous_214_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_216_(aNode, sourceBuffer, owner, this, arguments, var=var):
        var = Scope({u'owner':owner, u'this':this, u'aNode':aNode, u'sourceBuffer':sourceBuffer, u'arguments':arguments}, var)
        var.registers([u'listName', u'indexName', u'owner', u'aNode', u'sourceBuffer', u'forDirective', u'forElementANode', u'itemName'])
        var.put(u'forElementANode', var.get(u'createANode')(Js({u'children':var.get(u'aNode').get(u'children'),u'props':var.get(u'aNode').get(u'props'),u'events':var.get(u'aNode').get(u'events'),u'tagName':var.get(u'aNode').get(u'tagName'),u'directives':var.get(u'cloneDirectives')(var.get(u'aNode').get(u'directives'), Js({u'for':Js(1.0)})),u'hotspot':var.get(u'aNode').get(u'hotspot')})))
        var.put(u'forDirective', var.get(u'aNode').get(u'directives').get(u'for'))
        var.put(u'itemName', var.get(u'forDirective').get(u'item').get(u'raw'))
        var.put(u'indexName', var.get(u'forDirective').get(u'index').get(u'raw'))
        var.put(u'listName', var.get(u'guid')())
        if PyJsStrictEq(var.get(u'indexName'),Js(u'$index')):
            var.put(u'indexName', var.get(u'guid')())
        var.get(u'sourceBuffer').callprop(u'addRaw', ((((Js(u'var ')+var.get(u'listName'))+Js(u' = '))+var.get(u'compileExprSource').callprop(u'expr', var.get(u'forDirective').get(u'value')))+Js(u';')))
        var.get(u'sourceBuffer').callprop(u'addRaw', ((Js(u'if (')+var.get(u'listName'))+Js(u' instanceof Array) {')))
        var.get(u'sourceBuffer').callprop(u'addRaw', (((((((((Js(u'for (')+Js(u'var '))+var.get(u'indexName'))+Js(u' = 0; '))+var.get(u'indexName'))+Js(u' < '))+var.get(u'listName'))+Js(u'.length; '))+var.get(u'indexName'))+Js(u'++) {')))
        var.get(u'sourceBuffer').callprop(u'addRaw', ((((Js(u'componentCtx.data.')+var.get(u'indexName'))+Js(u'='))+var.get(u'indexName'))+Js(u';')))
        var.get(u'sourceBuffer').callprop(u'addRaw', ((((((Js(u'componentCtx.data.')+var.get(u'itemName'))+Js(u'= '))+var.get(u'listName'))+Js(u'['))+var.get(u'indexName'))+Js(u'];')))
        var.get(u'sourceBuffer').callprop(u'addRaw', var.get(u'aNodeCompiler').callprop(u'compile', var.get(u'forElementANode'), var.get(u'sourceBuffer'), var.get(u'owner')))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}'))
        var.get(u'sourceBuffer').callprop(u'addRaw', ((Js(u'} else if (typeof ')+var.get(u'listName'))+Js(u' === "object") {')))
        var.get(u'sourceBuffer').callprop(u'addRaw', ((((Js(u'for (var ')+var.get(u'indexName'))+Js(u' in '))+var.get(u'listName'))+Js(u') {')))
        var.get(u'sourceBuffer').callprop(u'addRaw', ((((Js(u'if (')+var.get(u'listName'))+Js(u'['))+var.get(u'indexName'))+Js(u'] != null) {')))
        var.get(u'sourceBuffer').callprop(u'addRaw', ((((Js(u'componentCtx.data.')+var.get(u'indexName'))+Js(u'='))+var.get(u'indexName'))+Js(u';')))
        var.get(u'sourceBuffer').callprop(u'addRaw', ((((((Js(u'componentCtx.data.')+var.get(u'itemName'))+Js(u'= '))+var.get(u'listName'))+Js(u'['))+var.get(u'indexName'))+Js(u'];')))
        var.get(u'sourceBuffer').callprop(u'addRaw', var.get(u'aNodeCompiler').callprop(u'compile', var.get(u'forElementANode'), var.get(u'sourceBuffer'), var.get(u'owner')))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}'))
    PyJs_anonymous_216_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_217_(aNode, sourceBuffer, owner, this, arguments, var=var):
        var = Scope({u'owner':owner, u'this':this, u'aNode':aNode, u'sourceBuffer':sourceBuffer, u'arguments':arguments}, var)
        var.registers([u'owner', u'nameProp', u'aNode', u'sourceBuffer'])
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'(function () {'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'function $defaultSlotRender(componentCtx) {'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'  var html = "";'))
        @Js
        def PyJs_anonymous_218_(aNodeChild, this, arguments, var=var):
            var = Scope({u'this':this, u'aNodeChild':aNodeChild, u'arguments':arguments}, var)
            var.registers([u'aNodeChild'])
            var.get(u'sourceBuffer').callprop(u'addRaw', var.get(u'aNodeCompiler').callprop(u'compile', var.get(u'aNodeChild'), var.get(u'sourceBuffer'), var.get(u'owner')))
        PyJs_anonymous_218_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'aNode').get(u'children'), PyJs_anonymous_218_)
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'  return html;'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'  var $mySourceSlots = [];'))
        var.put(u'nameProp', var.get(u'getANodeProp')(var.get(u'aNode'), Js(u'name')))
        if var.get(u'nameProp'):
            var.get(u'sourceBuffer').callprop(u'addRaw', ((Js(u'var $slotName = ')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'nameProp').get(u'expr')))+Js(u';')))
        else:
            var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'var $slotName = null;'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'var $ctxSourceSlots = componentCtx.sourceSlots;'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'for (var $i = 0; $i < $ctxSourceSlots.length; $i++) {'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'  if ($ctxSourceSlots[$i][1] == $slotName) {'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'    $mySourceSlots.push($ctxSourceSlots[$i][0]);'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'  }'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'var $isInserted = $mySourceSlots.length > 0;'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'if (!$isInserted) { $mySourceSlots.push($defaultSlotRender); }'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'var $slotCtx = $isInserted ? componentCtx.owner : componentCtx;'))
        if (var.get(u'aNode').get(u'vars') or var.get(u'aNode').get(u'directives').get(u'bind')):
            var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'$slotCtx = {data: extend({}, $slotCtx.data), filters: $slotCtx.filters, callFilter: $slotCtx.callFilter};'))
            if var.get(u'aNode').get(u'directives').get(u'bind'):
                var.get(u'sourceBuffer').callprop(u'addRaw', ((Js(u'extend($slotCtx.data, ')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'aNode').get(u'directives').get(u'bind').get(u'value')))+Js(u');')))
            @Js
            def PyJs_anonymous_219_(varItem, this, arguments, var=var):
                var = Scope({u'this':this, u'varItem':varItem, u'arguments':arguments}, var)
                var.registers([u'varItem'])
                var.get(u'sourceBuffer').callprop(u'addRaw', ((((Js(u'$slotCtx.data["')+var.get(u'varItem').get(u'name'))+Js(u'"] = '))+var.get(u'compileExprSource').callprop(u'expr', var.get(u'varItem').get(u'expr')))+Js(u';')))
            PyJs_anonymous_219_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'aNode').get(u'vars'), PyJs_anonymous_219_)
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'for (var $renderIndex = 0; $renderIndex < $mySourceSlots.length; $renderIndex++) {'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'  html += $mySourceSlots[$renderIndex]($slotCtx);'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}'))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'})();'))
    PyJs_anonymous_217_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_220_(aNode, sourceBuffer, owner, extra, this, arguments, var=var):
        var = Scope({u'this':this, u'aNode':aNode, u'sourceBuffer':sourceBuffer, u'extra':extra, u'owner':owner, u'arguments':arguments}, var)
        var.registers([u'owner', u'aNode', u'sourceBuffer', u'extra'])
        var.put(u'extra', (var.get(u'extra') or Js({})))
        var.get(u'elementSourceCompiler').callprop(u'tagStart', var.get(u'sourceBuffer'), var.get(u'aNode').get(u'tagName'), var.get(u'aNode').get(u'props'), var.get(u'extra').get(u'prop'), var.get(u'aNode').get(u'directives').get(u'bind'))
        var.get(u'elementSourceCompiler').callprop(u'inner', var.get(u'sourceBuffer'), var.get(u'aNode'), var.get(u'owner'))
        var.get(u'elementSourceCompiler').callprop(u'tagEnd', var.get(u'sourceBuffer'), var.get(u'aNode').get(u'tagName'))
    PyJs_anonymous_220_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_221_(aNode, sourceBuffer, owner, extra, this, arguments, var=var):
        var = Scope({u'this':this, u'aNode':aNode, u'sourceBuffer':sourceBuffer, u'extra':extra, u'owner':owner, u'arguments':arguments}, var)
        var.registers([u'extra', u'component', u'givenDataHTML', u'givenData', u'aNode', u'sourceBuffer', u'owner', u'ComponentClass'])
        if var.get(u'aNode'):
            var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'var $slotName = null;'))
            var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'var $sourceSlots = [];'))
            @Js
            def PyJs_anonymous_222_(child, this, arguments, var=var):
                var = Scope({u'this':this, u'arguments':arguments, u'child':child}, var)
                var.registers([u'slotBind', u'child'])
                var.put(u'slotBind', (var.get(u'child').get(u'textExpr').neg() and var.get(u'getANodeProp')(var.get(u'child'), Js(u'slot'))))
                if var.get(u'slotBind'):
                    var.get(u'sourceBuffer').callprop(u'addRaw', ((Js(u'$slotName = ')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'slotBind').get(u'expr')))+Js(u';')))
                    var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'$sourceSlots.push([function (componentCtx) {'))
                    var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'  var html = "";'))
                    var.get(u'sourceBuffer').callprop(u'addRaw', var.get(u'aNodeCompiler').callprop(u'compile', var.get(u'child'), var.get(u'sourceBuffer'), var.get(u'owner')))
                    var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'  return html;'))
                    var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}, $slotName]);'))
                else:
                    var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'$sourceSlots.push([function (componentCtx) {'))
                    var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'  var html = "";'))
                    var.get(u'sourceBuffer').callprop(u'addRaw', var.get(u'aNodeCompiler').callprop(u'compile', var.get(u'child'), var.get(u'sourceBuffer'), var.get(u'owner')))
                    var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'  return html;'))
                    var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'}]);'))
            PyJs_anonymous_222_._set_name(u'anonymous')
            var.get(u'each')(var.get(u'aNode').get(u'children'), PyJs_anonymous_222_)
        var.put(u'ComponentClass', var.get(u'extra').get(u'ComponentClass'))
        var.put(u'component', var.get(u'ComponentClass').create(Js({u'source':var.get(u'aNode'),u'owner':var.get(u'owner'),u'subTag':var.get(u'aNode').get(u'tagName')})))
        var.put(u'givenData', Js([]))
        @Js
        def PyJs_anonymous_223_(prop, this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments, u'prop':prop}, var)
            var.registers([u'prop'])
            var.get(u'givenData').callprop(u'push', ((var.get(u'compileExprSource').callprop(u'stringLiteralize', var.get(u'prop').get(u'name'))+Js(u':'))+var.get(u'compileExprSource').callprop(u'expr', var.get(u'prop').get(u'expr'))))
        PyJs_anonymous_223_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'component').get(u'binds'), PyJs_anonymous_223_)
        var.put(u'givenDataHTML', ((Js(u'{')+var.get(u'givenData').callprop(u'join', Js(u',\n')))+Js(u'}')))
        if var.get(u'aNode').get(u'directives').get(u'bind'):
            var.put(u'givenDataHTML', ((((Js(u'extend(')+var.get(u'compileExprSource').callprop(u'expr', var.get(u'aNode').get(u'directives').get(u'bind').get(u'value')))+Js(u', '))+var.get(u'givenDataHTML'))+Js(u')')))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'html += ('))
        var.get(u'sourceBuffer').callprop(u'addRendererStart')
        var.get(u'compileComponentSource')(var.get(u'sourceBuffer'), var.get(u'component'), (var.get(u'extra') and var.get(u'extra').get(u'prop')))
        var.get(u'sourceBuffer').callprop(u'addRendererEnd')
        var.get(u'sourceBuffer').callprop(u'addRaw', ((Js(u')(')+var.get(u'givenDataHTML'))+Js(u', componentCtx, $sourceSlots);')))
        var.get(u'sourceBuffer').callprop(u'addRaw', Js(u'$sourceSlots = null;'))
    PyJs_anonymous_221_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_224_(aNode, sourceBuffer, owner, extra, this, arguments, var=var):
        var = Scope({u'this':this, u'aNode':aNode, u'sourceBuffer':sourceBuffer, u'extra':extra, u'owner':owner, u'arguments':arguments}, var)
        var.registers([u'owner', u'LoadingComponent', u'aNode', u'sourceBuffer', u'extra'])
        var.put(u'LoadingComponent', var.get(u'extra').get(u'ComponentClass').get(u'placeholder'))
        if PyJsStrictEq(var.get(u'LoadingComponent',throw=False).typeof(),Js(u'function')):
            var.get(u'aNodeCompiler').callprop(u'compileComponent', var.get(u'aNode'), var.get(u'sourceBuffer'), var.get(u'owner'), Js({u'prop':var.get(u'extra').get(u'prop'),u'ComponentClass':var.get(u'LoadingComponent')}))
    PyJs_anonymous_224_._set_name(u'anonymous')
    var.put(u'aNodeCompiler', Js({u'compile':PyJs_anonymous_211_,u'compileText':PyJs_anonymous_212_,u'compileTemplate':PyJs_anonymous_213_,u'compileIf':PyJs_anonymous_214_,u'compileFor':PyJs_anonymous_216_,u'compileSlot':PyJs_anonymous_217_,u'compileElement':PyJs_anonymous_220_,u'compileComponent':PyJs_anonymous_221_,u'compileComponentLoader':PyJs_anonymous_224_}))
    pass
    @Js
    def PyJs_anonymous_226_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'key', u'source', u'result', u'prefixComma'])
        pass
        var.put(u'result', Js(u'{'))
        for PyJsTemp in var.get(u'source'):
            var.put(u'key', PyJsTemp)
            if (var.get(u'source').callprop(u'hasOwnProperty', var.get(u'key')).neg() or PyJsStrictEq(var.get(u'source').get(var.get(u'key')).typeof(),Js(u'undefined'))):
                continue
            if var.get(u'prefixComma'):
                var.put(u'result', Js(u','), u'+')
            var.put(u'prefixComma', Js(1.0))
            var.put(u'result', ((var.get(u'compileExprSource').callprop(u'stringLiteralize', var.get(u'key'))+Js(u':'))+var.get(u'stringifier').callprop(u'any', var.get(u'source').get(var.get(u'key')))), u'+')
        return (var.get(u'result')+Js(u'}'))
    PyJs_anonymous_226_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_227_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'source', u'result', u'prefixComma'])
        pass
        var.put(u'result', Js(u'['))
        @Js
        def PyJs_anonymous_228_(value, this, arguments, var=var):
            var = Scope({u'this':this, u'arguments':arguments, u'value':value}, var)
            var.registers([u'value'])
            if var.get(u'prefixComma'):
                var.put(u'result', Js(u','), u'+')
            var.put(u'prefixComma', Js(1.0))
            var.put(u'result', var.get(u'stringifier').callprop(u'any', var.get(u'value')), u'+')
        PyJs_anonymous_228_._set_name(u'anonymous')
        var.get(u'each')(var.get(u'source'), PyJs_anonymous_228_)
        return (var.get(u'result')+Js(u']'))
    PyJs_anonymous_227_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_229_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'source'])
        return var.get(u'compileExprSource').callprop(u'stringLiteralize', var.get(u'source'))
    PyJs_anonymous_229_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_230_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'source'])
        return ((Js(u'new Date(')+var.get(u'source').callprop(u'getTime'))+Js(u')'))
    PyJs_anonymous_230_._set_name(u'anonymous')
    @Js
    def PyJs_anonymous_231_(source, this, arguments, var=var):
        var = Scope({u'this':this, u'source':source, u'arguments':arguments}, var)
        var.registers([u'source'])
        while 1:
            SWITCHED = False
            CONDITION = (var.get(u'source',throw=False).typeof())
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'string')):
                SWITCHED = True
                return var.get(u'stringifier').callprop(u'str', var.get(u'source'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'number')):
                SWITCHED = True
                return (Js(u'')+var.get(u'source'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'boolean')):
                SWITCHED = True
                return (Js(u'true') if var.get(u'source') else Js(u'false'))
            if SWITCHED or PyJsStrictEq(CONDITION, Js(u'object')):
                SWITCHED = True
                if var.get(u'source').neg():
                    return var.get(u"null")
                if var.get(u'source').instanceof(var.get(u'Array')):
                    return var.get(u'stringifier').callprop(u'arr', var.get(u'source'))
                if var.get(u'source').instanceof(var.get(u'Date')):
                    return var.get(u'stringifier').callprop(u'date', var.get(u'source'))
                return var.get(u'stringifier').callprop(u'obj', var.get(u'source'))
            SWITCHED = True
            break
        PyJsTempException = JsToPyException(var.get(u'Error').create((Js(u'Cannot Stringify:')+var.get(u'source'))))
        raise PyJsTempException
    PyJs_anonymous_231_._set_name(u'anonymous')
    var.put(u'stringifier', Js({u'obj':PyJs_anonymous_226_,u'arr':PyJs_anonymous_227_,u'str':PyJs_anonymous_229_,u'date':PyJs_anonymous_230_,u'any':PyJs_anonymous_231_}))
    var.put(u'COMPONENT_RESERVED_MEMBERS', var.get(u'splitStr2Obj')((Js(u'computed,filters,components,')+Js(u'initData,template,attached,created,detached,disposed,compiled'))))
    pass
    pass
    pass
    @Js
    def PyJs_anonymous_249_(ComponentClass, this, arguments, var=var):
        var = Scope({u'this':this, u'ComponentClass':ComponentClass, u'arguments':arguments}, var)
        var.registers([u'code', u'renderer', u'ComponentClass'])
        var.put(u'renderer', var.get(u'ComponentClass').get(u'__ssrRenderer'))
        if var.get(u'renderer').neg():
            var.put(u'code', var.get(u'compileJSSource')(var.get(u'ComponentClass')))
            var.put(u'renderer', var.get(u'Function').create((Js(u'return ')+var.get(u'code')))())
            var.get(u'ComponentClass').put(u'__ssrRenderer', var.get(u'renderer'))
        return var.get(u'renderer')
    PyJs_anonymous_249_._set_name(u'anonymous')
    var.put(u'san', Js({u'version':Js(u'3.7.0'),u'debug':Js(True),u'compileToRenderer':PyJs_anonymous_249_,u'compileToSource':var.get(u'compileJSSource'),u'Component':var.get(u'Component'),u'defineComponent':var.get(u'defineComponent'),u'createComponentLoader':var.get(u'createComponentLoader'),u'compileComponent':var.get(u'compileComponent'),u'parseTemplate':var.get(u'parseTemplate'),u'parseExpr':var.get(u'parseExpr'),u'ExprType':var.get(u'ExprType'),u'LifeCycle':var.get(u'LifeCycle'),u'NodeType':var.get(u'NodeType'),u'nextTick':var.get(u'nextTick'),u'Data':var.get(u'Data'),u'evalExpr':var.get(u'evalExpr'),u'inherits':var.get(u'inherits'),u'DataTypes':var.get(u'DataTypes')}))
    if (PyJsStrictEq(var.get(u'exports',throw=False).typeof(),Js(u'object')) and PyJsStrictEq(var.get(u'module',throw=False).typeof(),Js(u'object'))):
        var.put(u'exports', var.get(u'module').put(u'exports', var.get(u'san')))
    else:
        if (PyJsStrictEq(var.get(u'define',throw=False).typeof(),Js(u'function')) and var.get(u'define').get(u'amd')):
            var.get(u'define')(Js(u'san'), Js([]), var.get(u'san'))
        else:
            var.get(u'root').put(u'san', var.get(u'san'))
    var.get(u'emitDevtool').callprop(u'start', var.get(u'san'))
PyJs_anonymous_0_._set_name(u'anonymous')
PyJs_anonymous_0_(var.get(u"this"))
pass
pass


# Add lib to the module scope
run2src = var.to_python()