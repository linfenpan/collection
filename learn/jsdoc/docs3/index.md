## Modules

<dl>
<dt><a href="#module_js/amd">js/amd</a></dt>
<dd><p>amd 测试</p>
</dd>
<dt><a href="#module_js/commonjs">js/commonjs</a></dt>
<dd><p>测试 commonjs 的注释</p>
</dd>
<dt><a href="#module_js/mode">js/mode</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#Species">Species</a></dt>
<dd><p>此类为抽象类，应该实现 canFly/canSwim 等方法</p>
</dd>
<dt><a href="#Animal">Animal</a> ⇐ <code><a href="#Species">Species</a></code></dt>
<dd></dd>
<dt><a href="#Persion">Persion</a> ⇐ <code><a href="#Animal">Animal</a></code></dt>
<dd></dd>
<dt><a href="#Book">Book</a></dt>
<dd></dd>
<dt><a href="#Todo">Todo</a></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#util">util</a> : <code>object</code></dt>
<dd><p>工具集合</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#BLUE">BLUE</a></dt>
<dd><p>蓝色</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#attack">attack(someone, options)</a> ⇒ <code>boolean</code></dt>
<dd><p>攻击某人 （内容的简介）</p>
</dd>
<dt><a href="#fnAgain">fnAgain(fn)</a></dt>
<dd><p>再次执行指定函数</p>
</dd>
<dt><a href="#trstr">trstr(str)</a> ⇒ <code>string</code></dt>
<dd><p>删除字符串的前后空格</p>
</dd>
<dt><a href="#addTask">addTask(name, task)</a> ⇒ <code>void</code></dt>
<dd><p>添加任务</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#fnAgainCallback">fnAgainCallback</a> : <code>function</code></dt>
<dd><p>fnAgain 的回调函数</p>
</dd>
</dl>

<a name="module_js/amd"></a>

## js/amd
amd 测试


* [js/amd](#module_js/amd)
    * 
        * [.color](#module_js/amd--undefined.color)

<a name="exp_module_js/amd--undefined"></a>

### 
**Kind**: Exported member  
<a name="module_js/amd--undefined.color"></a>

#### .color
颜色

**Kind**: static property of [<code>undefined</code>](#exp_module_js/amd--undefined)  
<a name="module_js/commonjs"></a>

## js/commonjs
测试 commonjs 的注释

**See**: module:js/mode  

* [js/commonjs](#module_js/commonjs)
    * [.wish](#module_js/commonjs.wish)
    * [.button()](#module_js/commonjs.button)

<a name="module_js/commonjs.wish"></a>

### js/commonjs.wish
期望去干什么

**Kind**: static constant of [<code>js/commonjs</code>](#module_js/commonjs)  

| Param | Type | Description |
| --- | --- | --- |
| todo | <code>\*</code> | 想干的事情 |

<a name="module_js/commonjs.button"></a>

### js/commonjs.button()
获取按钮

**Kind**: static method of [<code>js/commonjs</code>](#module_js/commonjs)  
<a name="module_js/mode"></a>

## js/mode

* [js/mode](#module_js/mode)
    * [.name](#module_js/mode.name)
    * [.compare(v1, v2)](#module_js/mode.compare) ⇒ <code>number</code>

<a name="module_js/mode.name"></a>

### js/mode.name
板块名字

**Kind**: static constant of [<code>js/mode</code>](#module_js/mode)  
<a name="module_js/mode.compare"></a>

### js/mode.compare(v1, v2) ⇒ <code>number</code>
对比两个数值的大小

**Kind**: static method of [<code>js/mode</code>](#module_js/mode)  

| Param | Type | Description |
| --- | --- | --- |
| v1 | <code>number</code> | 数值1 |
| v2 | <code>number</code> | 数值2 |

<a name="Species"></a>

## Species
此类为抽象类，应该实现 canFly/canSwim 等方法

**Kind**: global class  
**Author**: da宗熊 <xxx@163.com>  

* [Species](#Species)
    * [new Species(type)](#new_Species_new)
    * _instance_
        * [.type](#Species+type)
        * [.skills](#Species+skills)
        * [.getType()](#Species+getType) ⇒ <code>\*</code>
        * *[.canFly()](#Species+canFly) ⇒ <code>boolean</code>*
        * *[.canSwim()](#Species+canSwim) ⇒ <code>boolean</code>*
        * [.getSkills()](#Species+getSkills) ⇒ <code>array</code>
        * [.eachSkills(fn)](#Species+eachSkills)
    * _inner_
        * [~eachcallback](#Species..eachcallback) : <code>function</code>

<a name="new_Species_new"></a>

### new Species(type)
类，物种


| Param | Type | Description |
| --- | --- | --- |
| type | <code>\*</code> | 物种类型 |

<a name="Species+type"></a>

### species.type
物种的类型

**Kind**: instance property of [<code>Species</code>](#Species)  
**Access**: protected  
<a name="Species+skills"></a>

### species.skills
技能列表

**Kind**: instance property of [<code>Species</code>](#Species)  
**Access**: public  
<a name="Species+getType"></a>

### species.getType() ⇒ <code>\*</code>
获取物种的类型

**Kind**: instance method of [<code>Species</code>](#Species)  
<a name="Species+canFly"></a>

### *species.canFly() ⇒ <code>boolean</code>*
当前物种，能否飞行

**Kind**: instance abstract method of [<code>Species</code>](#Species)  
<a name="Species+canSwim"></a>

### *species.canSwim() ⇒ <code>boolean</code>*
当前物种，能否游泳

**Kind**: instance abstract method of [<code>Species</code>](#Species)  
<a name="Species+getSkills"></a>

### species.getSkills() ⇒ <code>array</code>
获取技能列表

**Kind**: instance method of [<code>Species</code>](#Species)  
<a name="Species+eachSkills"></a>

### species.eachSkills(fn)
遍历技能列表

**Kind**: instance method of [<code>Species</code>](#Species)  

| Param | Type | Description |
| --- | --- | --- |
| fn | [<code>eachcallback</code>](#Species..eachcallback) | 处理函数 |

<a name="Species..eachcallback"></a>

### Species~eachcallback : <code>function</code>
遍历技能的回调

**Kind**: inner typedef of [<code>Species</code>](#Species)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | 技能的id值 |
| index | <code>number</code> | 当前技能的索引 |

<a name="Animal"></a>

## Animal ⇐ [<code>Species</code>](#Species)
**Kind**: global class  
**Extends**: [<code>Species</code>](#Species)  

* [Animal](#Animal) ⇐ [<code>Species</code>](#Species)
    * [new Animal()](#new_Animal_new)
    * [.type](#Species+type)
    * [.skills](#Species+skills)
    * [.speak()](#Animal+speak)
    * [.getType()](#Species+getType) ⇒ <code>\*</code>
    * *[.canFly()](#Species+canFly) ⇒ <code>boolean</code>*
    * *[.canSwim()](#Species+canSwim) ⇒ <code>boolean</code>*
    * [.getSkills()](#Species+getSkills) ⇒ <code>array</code>
    * [.eachSkills(fn)](#Species+eachSkills)

<a name="new_Animal_new"></a>

### new Animal()
动物

<a name="Species+type"></a>

### animal.type
物种的类型

**Kind**: instance property of [<code>Animal</code>](#Animal)  
**Access**: protected  
<a name="Species+skills"></a>

### animal.skills
技能列表

**Kind**: instance property of [<code>Animal</code>](#Animal)  
**Access**: public  
<a name="Animal+speak"></a>

### animal.speak()
动物吼叫

**Kind**: instance method of [<code>Animal</code>](#Animal)  
<a name="Species+getType"></a>

### animal.getType() ⇒ <code>\*</code>
获取物种的类型

**Kind**: instance method of [<code>Animal</code>](#Animal)  
<a name="Species+canFly"></a>

### *animal.canFly() ⇒ <code>boolean</code>*
当前物种，能否飞行

**Kind**: instance abstract method of [<code>Animal</code>](#Animal)  
<a name="Species+canSwim"></a>

### *animal.canSwim() ⇒ <code>boolean</code>*
当前物种，能否游泳

**Kind**: instance abstract method of [<code>Animal</code>](#Animal)  
<a name="Species+getSkills"></a>

### animal.getSkills() ⇒ <code>array</code>
获取技能列表

**Kind**: instance method of [<code>Animal</code>](#Animal)  
<a name="Species+eachSkills"></a>

### animal.eachSkills(fn)
遍历技能列表

**Kind**: instance method of [<code>Animal</code>](#Animal)  

| Param | Type | Description |
| --- | --- | --- |
| fn | [<code>eachcallback</code>](#Species..eachcallback) | 处理函数 |

<a name="Persion"></a>

## Persion ⇐ [<code>Animal</code>](#Animal)
**Kind**: global class  
**Extends**: [<code>Animal</code>](#Animal)  

* [Persion](#Persion) ⇐ [<code>Animal</code>](#Animal)
    * [new initialize()](#new_Persion_new)
    * [.hp](#Persion+hp)
    * [.mp](#Persion+mp)
    * [.type](#Species+type)
    * [.skills](#Species+skills)
    * [.attack()](#Persion+attack)
    * [.speak()](#Animal+speak)
    * [.getType()](#Species+getType) ⇒ <code>\*</code>
    * [.canFly()](#Species+canFly) ⇒ <code>boolean</code>
    * [.canSwim()](#Species+canSwim) ⇒ <code>boolean</code>
    * [.getSkills()](#Species+getSkills) ⇒ <code>array</code>
    * [.eachSkills(fn)](#Species+eachSkills)
    * ["attack"](#Persion+event_attack)

<a name="new_Persion_new"></a>

### new initialize()
类，人类

<a name="Persion+hp"></a>

### persion.hp
血量

**Kind**: instance property of [<code>Persion</code>](#Persion)  
**Default**: <code>100</code>  
<a name="Persion+mp"></a>

### persion.mp
魔法值

**Kind**: instance property of [<code>Persion</code>](#Persion)  
**Default**: <code>100</code>  
<a name="Species+type"></a>

### persion.type
物种的类型

**Kind**: instance property of [<code>Persion</code>](#Persion)  
**Access**: protected  
<a name="Species+skills"></a>

### persion.skills
技能列表

**Kind**: instance property of [<code>Persion</code>](#Persion)  
**Access**: public  
<a name="Persion+attack"></a>

### persion.attack()
攻击某人

**Kind**: instance method of [<code>Persion</code>](#Persion)  
**Emits**: [<code>attack</code>](#Persion+event_attack)  
<a name="Animal+speak"></a>

### persion.speak()
动物吼叫

**Kind**: instance method of [<code>Persion</code>](#Persion)  
<a name="Species+getType"></a>

### persion.getType() ⇒ <code>\*</code>
获取物种的类型

**Kind**: instance method of [<code>Persion</code>](#Persion)  
<a name="Species+canFly"></a>

### persion.canFly() ⇒ <code>boolean</code>
当前物种，能否飞行

**Kind**: instance method of [<code>Persion</code>](#Persion)  
**Overrides**: [<code>canFly</code>](#Species+canFly)  
<a name="Species+canSwim"></a>

### persion.canSwim() ⇒ <code>boolean</code>
当前物种，能否游泳

**Kind**: instance method of [<code>Persion</code>](#Persion)  
**Overrides**: [<code>canSwim</code>](#Species+canSwim)  
<a name="Species+getSkills"></a>

### persion.getSkills() ⇒ <code>array</code>
获取技能列表

**Kind**: instance method of [<code>Persion</code>](#Persion)  
<a name="Species+eachSkills"></a>

### persion.eachSkills(fn)
遍历技能列表

**Kind**: instance method of [<code>Persion</code>](#Persion)  

| Param | Type | Description |
| --- | --- | --- |
| fn | [<code>eachcallback</code>](#Species..eachcallback) | 处理函数 |

<a name="Persion+event_attack"></a>

### "attack"
攻击事件

**Kind**: event emitted by [<code>Persion</code>](#Persion)  
<a name="Book"></a>

## Book
**Kind**: global class  

* [Book](#Book)
    * [new Book(title, author[da宗熊)](#new_Book_new)
    * _instance_
        * [.sayHi()](#Book+sayHi)
        * [.getTitle()](#Book+getTitle) ⇒ <code>string</code> \| <code>undefined</code>
        * [.setPageNum(num)](#Book+setPageNum)
    * _static_
        * [.info()](#Book.info) ⇒ <code>object</code>

<a name="new_Book_new"></a>

### new Book(title, author[da宗熊)
Book 类，代表一本书


| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | 书本标题 |
| author[da宗熊 | <code>string</code> | 书本作者 |

<a name="Book+sayHi"></a>

### book.sayHi()
给大家说 hello

**Kind**: instance method of [<code>Book</code>](#Book)  
<a name="Book+getTitle"></a>

### book.getTitle() ⇒ <code>string</code> \| <code>undefined</code>
获取书本的标题

**Kind**: instance method of [<code>Book</code>](#Book)  
<a name="Book+setPageNum"></a>

### book.setPageNum(num)
设置书本的总页数

**Kind**: instance method of [<code>Book</code>](#Book)  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | 页码 |

<a name="Book.info"></a>

### Book.info() ⇒ <code>object</code>
获取书籍的详情

**Kind**: static method of [<code>Book</code>](#Book)  
<a name="Todo"></a>

## Todo
**Kind**: global class  

* [Todo](#Todo)
    * [new Todo()](#new_Todo_new)
    * [.add(e)](#Todo+add)

<a name="new_Todo_new"></a>

### new Todo()
创建 Todo 列表

<a name="Todo+add"></a>

### todo.add(e)
添加事件

**Kind**: instance method of [<code>Todo</code>](#Todo)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>\*</code> | 添加的事件 |

<a name="util"></a>

## util : <code>object</code>
工具集合

**Kind**: global namespace  

* [util](#util) : <code>object</code>
    * [.State](#util.State) : <code>enum</code>
    * [.RED](#util.RED)
    * ~~[.tryToDoSomething()](#util.tryToDoSomething)~~
    * [.trim(str)](#util.trim) ⇒ <code>string</code>

<a name="util.State"></a>

### util.State : <code>enum</code>
通用状态

**Kind**: static enum of [<code>util</code>](#util)  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| TRUE | <code>number</code> | <code>1</code> | true 值 |
| FALSE | <code>number</code> | <code>0</code> | false 值 |
| MAYBE | <code>string</code> | <code>&quot;maybe&quot;</code> | 可能 |

<a name="util.RED"></a>

### util.RED
红色

**Kind**: static constant of [<code>util</code>](#util)  
<a name="util.tryToDoSomething"></a>

### ~~util.tryToDoSomething()~~
***Deprecated***

尝试去干什么

**Kind**: static method of [<code>util</code>](#util)  
<a name="util.trim"></a>

### util.trim(str) ⇒ <code>string</code>
删除字符串的前后空格

**Kind**: static method of [<code>util</code>](#util)  
**Returns**: <code>string</code> - - 加工后的字符  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | 加工的字符 |

<a name="BLUE"></a>

## BLUE
蓝色

**Kind**: global constant  
**Default**: <code>red</code>  
<a name="attack"></a>

## attack(someone, options) ⇒ <code>boolean</code>
攻击某人 （内容的简介）

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| someone | <code>Someone</code> \| <code>number</code> | Someone 类，或者是 Someone#id |
| options | <code>Object</code> | 必填参数 |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| options.extraAttack | <code>number</code> | 额外攻击 |
| options.isGodMode | <code>boolean</code> | 是否上帝模式 |

<a name="fnAgain"></a>

## fnAgain(fn)
再次执行指定函数

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | [<code>fnAgainCallback</code>](#fnAgainCallback) | 回调函数 |

<a name="trstr"></a>

## trstr(str) ⇒ <code>string</code>
删除字符串的前后空格

**Kind**: global function  
**Returns**: <code>string</code> - - 加工后的字符  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | 加工的字符 |

<a name="addTask"></a>

## addTask(name, task) ⇒ <code>void</code>
添加任务

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | 名字 |
| task | <code>function</code> | 任务 |

<a name="fnAgainCallback"></a>

## fnAgainCallback : <code>function</code>
fnAgain 的回调函数

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | 回调id |
| next | <code>function</code> | 继续执行的回调 |

