<style type="text/css">
.wrap-jj {
    border-radius: 10px;
    width: 200px;
    height: 100px;
    padding: 5px;
    position: relative;
    margin-top: 50px;
    background-color: #f00;
    color: #fff;
}

.wrap-jj .jianjiao {
    height: 0;
    width: 0px;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    border-color: transparent transparent #f00 transparent;
    border-style: solid;
    _border-style: dotted dotted solid dotted;
    border-width: 20px;
    position: absolute;
    z-index: 1;
    top: -40px;
    left: 50%;
}

.wrap-jj2 {
    border-radius: 10px;
    padding: 5px;
    width: 200px;
    height: 100px;
    position: relative;
    margin-top: 50px;
    border: 1px solid #000;
}

.wrap-jj2 .jianjiao {
    height: 0;
    width: 0px;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    border-color: transparent transparent #000 transparent;
    border-style: solid;
    _border-style: dotted dotted solid dotted;
    border-width: 20px;
    position: absolute;
    z-index: 1;
    top: -40px;
    left: 50%;
}

.wrap-jj2 .jianjiao2 {
    height: 0;
    width: 0px;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    border-color: transparent transparent #fff transparent;
    border-style: solid;
    _border-style: dotted dotted solid dotted;
    border-width: 20px;
    position: absolute;
    z-index: 1;
    top: -39px;
    left: 50%;
}
</style>
<template>
    

    <div>
        <h3>查看边框渲染效果</h3>
        <div style="width:50px;height:50px;border-top:10px solid #f00;border-right:10px solid #0f0;border-bottom:10px solid #00f;border-left:10px solid #ddd;"></div>


        <h3>tip背景和尖角一体，且尖角无边框</h3>
        <div class="wrap-jj">
            <i class="jianjiao"></i> 这是一个带有尖角的提示框。
        </div>
<pre>
.wrap-jj .jianjiao {
    height: 0;
    width: 0px;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    
    border-width: 20px;
    border-color: transparent transparent #f00 transparent;
    border-style: solid;
    _border-style: dotted dotted solid dotted;

    position: absolute;
    z-index: 1;
    top: -40px;
    left: 50%;
}
</pre>


        <div class="wrap-jj2">
            <i class="jianjiao"></i>
            <i class="jianjiao2"></i> 这是一个带有尖角的提示框。
        </div>

<pre>
.wrap-jj2 .jianjiao {
    height: 0;
    width: 0px;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    
    border-width: 20px;
    border-color: transparent transparent #000 transparent;
    border-style: solid;
    _border-style: dotted dotted solid dotted;
    
    top: -40px;

    position: absolute;
    z-index: 1;
    left: 50%;
}

.wrap-jj2 .jianjiao2 {
    height: 0;
    width: 0px;
    overflow: hidden;
    font-size: 0;
    line-height: 0;
    
    border-width: 20px;
    border-color: transparent transparent #fff transparent;
    border-style: solid;
    _border-style: dotted dotted solid dotted;
    
    top: -39px;
   
    position: absolute;
    z-index: 1;
    
    left: 50%;
}
</pre>



    </div>
</template>
