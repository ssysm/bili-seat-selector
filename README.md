# bili-seat-selector

某站的抢票选座脚本

## 使用方法

用某些方式将`select.js`插入选座抢票页面

然后打开控制台并输入`select();`来运行

## 基本原理

将座位图当作一个2D Matrix Array

以每行座位为x，每列为y
     
     X序列-------->
     Y  x x x x x x
     序 x
     列 x
     |  x
     |  x
     |  x
     |  x
     V  x

将这个matrix array转换成HTML式的表达方式

```html
    <ul>
        <li>x</li>
        <li>x</li>
    </ul>
    <ul>
        <li>x</li>
        <li>x</li>
    </ul>
```

```javascript
    for (var i = 0; i < document.children.length; i++) {
        //每个ul里面的li子dom
        for (var j = 0; j < document.children[i].children.length; j++) {
            //每个li里面的dom
        } 
    }
```

至于选择部分，先判断每个座位是否有`unavailable`的class在里面，如果没有,则是一个可选座位,使用`document.click();`即可

在付款的时候需要延时几毫秒来让vue把按钮渲染至dom里面,一个`setTimeout()`即可

## 贡献、Issue和其他信息

对于本脚本的特殊性，THIS SCRIPT IS FOR EDUCATION PURPOSE ONLY,作者本人对此脚本产生的后果不负责。

本repo使用GPLv3.0授权

贡献和Issue看情况 没打算维护这个 最后一年去了

## 我是网站开发者 我很火大 如何防止你这个脚本！！！

如果你真的是这个网站的开发者 ~~你找到这也是够闲的~~

![火大](https://storage.theeditorstudio.com/-7c508a8469add46d.gif)


以下是几个解决方案

 * 最简单的 - 加验证码
 * 禁用开发者工具（死loop触发deugger) 
 * 给dom赋予随机class或者识别id
 * Prototype移除.click()
 * ~~别想了 德高一尺 魔高一丈 永远会有脚本的~~
