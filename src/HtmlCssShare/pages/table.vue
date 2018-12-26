<!-- <title>表格布局</title> -->
<style>
h1 {
    margin: 10px 0;
    font-size: 20px;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.table {
    display: table;
    border-collapse: collapse;
    border: 1px solid #ccc;
}

.table-caption {
    display: table-caption;
    margin: 0;
    padding: 0;
    font-size: 16px;
}

.table-column-group {
    display: table-column-group;
}

.table-column {
    display: table-column;
    width: 100px;
}

.table-row-group {
    display: table-row-group;
}

.table-row {
    display: table-row;
}

.table-row-group .table-row:hover,
.table-footer-group .table-row:hover {
    background: #f6f6f6;
}

.table-cell {
    display: table-cell;
    padding: 0 5px;
    border: 1px solid #ccc;
}

.table-header-group {
    display: table-header-group;
    background: #eee;
    font-weight: bold;
}

.table-footer-group {
    display: table-footer-group;
}


/*<!-- 实现模块同行等高，宽度自适应的布局 -->*/

.wrap-table {
    display: table;
    width: 100%;
    /*height:200px;*/
}

.m-left1,
.m-right1 {
    display: table-cell;
    padding: 10px;
    text-align: center;
    vertical-align: middle;
}

.m-left1 {
    background: #f00;
    /*height: 300px;*/
    width: 200px;
}

.m-right1 {
    background: #ff0;
    width: auto;
}
/*测试平分列功能*/
.wrap-table2 {
    display: table;
    width: 100%;
    table-layout: fixed;
    /*height:200px;*/
}

.m-left2,
.m-right2 {
    display: table-cell;
    padding: 10px;
    word-break:break-all; 
    word-wrap: break-word;
}

.m-left2 {
    background: #f00;
}

.m-right2 {
    background: #ff0;
}
</style>
<template>
    <div>
<pre style="font-size:14px;line-height: 25px;">
display:table;(父)
display:table-cell;(子)
可代替浮动布局，若一个网页分为两列，可使左列自适应宽，右侧固定宽，且可轻松地实现多栏等高布局，不用担心定位和清除浮动的问题；

table：              指定对象作为块元素级的表格。类同于html标签< table>（CSS2）
inline-table：       指定对象作为内联元素级的表格。类同于html标签< table>（CSS2）

table-caption：      指定对象作为表格标题。类同于html标签< caption>（CSS2）
table-cell：         指定对象作为表格单元格。类同于html标签< td>（CSS2）
table-row：          指定对象作为表格行。类同于html标签< tr>（CSS2）
table-row-group：    指定对象作为表格行组。类同于html标签< tbody>（CSS2）
table-column：       指定对象作为表格列。类同于html标签< col>（CSS2）
table-column-group： 指定对象作为表格列组显示。类同于html标签< colgroup>（CSS2）
table-header-group： 指定对象作为表格标题组。类同于html标签< thead>（CSS2）
table-footer-group： 指定对象作为表格脚注组。类同于html标签< tfoot>（CSS2）

</pre>
        <h1>display构造的table小例子，IE7及以下浏览器不支持本示例</h1>
        <div class="table">
            <h2 class="table-caption">花名册：</h2>
            <div class="table-column-group">
                <div class="table-column"></div>
                <div class="table-column"></div>
                <div class="table-column"></div>
            </div>
            <div class="table-header-group">
                <ul class="table-row">
                    <li class="table-cell">序号</li>
                    <li class="table-cell">姓名</li>
                    <li class="table-cell">年龄</li>
                </ul>
            </div>
            <div class="table-footer-group">
                <ul class="table-row">
                    <li class="table-cell">footer</li>
                    <li class="table-cell">footer</li>
                    <li class="table-cell">footer</li>
                </ul>
            </div>
            <div class="table-row-group">
                <ul class="table-row">
                    <li class="table-cell">1</li>
                    <li class="table-cell">John</li>
                    <li class="table-cell">19</li>
                </ul>
                <ul class="table-row">
                    <li class="table-cell">2</li>
                    <li class="table-cell">Mark</li>
                    <li class="table-cell">21</li>
                </ul>
                <ul class="table-row">
                    <li class="table-cell">3</li>
                    <li class="table-cell">Kate</li>
                    <li class="table-cell">26</li>
                </ul>
            </div>
        </div>
<pre>
< div class="table" >
    < h2 class="table-caption">花名册：</h2 >
    < div class="table-column-group" >
        < div class="table-column">< /div>
        < div class="table-column">< /div>
        < div class="table-column">< /div>
    < /div>
    < div class="table-header-group">
        < ul class="table-row">
            < li class="table-cell">序号< /li>
            < li class="table-cell">姓名< /li>
            < li class="table-cell">年龄< /li>
        < /ul>
    < /div>
    < div class="table-footer-group">
        < ul class="table-row">
            < li class="table-cell">footer< /li>
            < li class="table-cell">footer< /li>
            < li class="table-cell">footer< /li>
        < /ul>
    < /div>
    < div class="table-row-group">
        < ul class="table-row">
            < li class="table-cell">1< /li>
            < li class="table-cell">John< /li>
            < li class="table-cell">19< /li>
        < /ul>
        < ul class="table-row">
            < li class="table-cell">2< /li>
            < li class="table-cell">Mark< /li>
            < li class="table-cell">21< /li>
        < /ul>
        < ul class="table-row">
            < li class="table-cell">3< /li>
            < li class="table-cell">Kate< /li>
            < li class="table-cell">26< /li>
        < /ul>
    < /div>
< /div> 
</pre>        

        <h3>实现table模块中的模块宽高自适应，另外也可实现大小不固定的元素（多行文字或图片）垂直水平居中对</h3>
        <div class="wrap-table">
            <div class="m-left1">
                左侧模块左侧模块左侧模块左侧模块左侧模块左侧模块左侧模块左侧模块左侧模块左侧模块左侧
            </div>
            <div class="m-right1">
                右侧模块宽度自适应
            </div>
        </div>

<pre>
<b>dom结构：</b>
< div class="wrap-table">
    < div class="m-left1">
        左侧模块
    < /div>
    < div class="m-right1">
        右侧模块宽度自适应
    < /div>
< /div>
<b>样式：</b>
.wrap-table {
    display: table;
    width: 100%;
}

.m-left1,.m-right1 {
    display: table-cell;
}

.m-left1 {
    width: 200px;
}

.m-right1 {
    width: auto;
}
</pre>
    
    <h3>平分列功能</h3>
    <div class="wrap-table2">
        <div class="m-left2">
            左侧模块左侧左侧模块左侧左侧模块左侧左侧模块左侧左侧模块左侧左侧模块左侧
        </div>
        <div class="m-right2">
            右侧模块宽度自适应
        </div>
    </div>
    </div>
</template>
