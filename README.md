# bili-seat-selector

某站的抢票选座脚本

## 使用方法

用某些方式将`select.js`插入选座抢票页面

然后打开控制台并输入`select();`来运行

## 基本原理

将座位图当作一个2D Matrix Array

以每行座位为x，每列为y
     
     X序列-------->
     Y  x x x x x x
     序 x
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
        //每个ul里面的li子dom
        for (var j = 0; j < document.children[i].children.length; j++) {
            //每个li里面的dom
        } 
    }
```

至于选择部分 使用`document.click();`即可

在付款的时候需要延时几毫米来让vue把按钮渲染至dom里面,一个`setTimeout()`即可

## 贡献、Issue和其他信息

对于本脚本的特殊性，THIS SCRIPT IS FOR EDUCATION PURPOSE ONLY,作者本人对此脚本产生的后果不负责。

本repo使用GPLv3.0授权

贡献和Issue看情况 没打算维护这个 最后一年去了