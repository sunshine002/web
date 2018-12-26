<style>

p {
    margin: 0;
    padding: 5px 10px;
}

h1 {
    margin: 10px 0;
    font-size: 16px;
}

.test {
    border: 10px solid #000;
    -moz-columns: 200px 3;
    -webkit-columns: 200px 3;
    columns: 200px 3;
    column-gap: normal;
}

.test2 {
    width:50%;
    /*height: 100px;*/
    border: 10px solid #000;
    -moz-columns: 200px;
    -webkit-columns: 200px;
    columns: 200px;
    column-gap: 20px;
    /* 列之间的样式 */
    -moz-column-rule: 6px inset #ff0000;
    /* Firefox */
    -webkit-column-rule: 6px inset #ff0000;
    /* Safari and Chrome */
    column-rule: 6px inset #ff0000;
    /*column-rule-style:double; */
}

.test2 div {
    /*总是在元素之前断行并产生新列*/
    /*-moz-column-break-before: always;
    -webkit-column-break-before: always;
    column-break-before: always;*/
    background-color: #00f;
    color: #fff;
    /*column-span:all;*/
}
</style>
<template>
    <div>
<pre>
columns：<' column-width '> || <' column-count '> ：适用于：除table外的非替换块级元素, table cells, inline-block元素
column-gap：< length> | normal；默认值：normal：与 <' font-size '> 大小相同
column-rule：<' column-rule-width '> || <' column-rule-style '> || <' column-rule-color '>
    column-rule-width：< length> | thin | medium | thick
    column-rule-style：none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
        none：无轮廓。<' column-rule-color '> 与<' column-rule-width '> 将被忽略
        hidden：隐藏边框。
        dotted：点状轮廓。
        dashed：虚线轮廓。
        solid：实线轮廓
        double：双线轮廓。两条单线与其间隔的和等于指定的 <' column-rule-width '> 值
        groove：3D凹槽轮廓。
        ridge：3D凸槽轮廓。
        inset：3D凹边轮廓。
        outset：3D凸边轮廓。
column-span（适用于子元素）：none | all; 适用于：除浮动和绝对定位之外的块级元素，设置或检索对象元素是否横跨所有列。

column-break-before：auto | always | avoid | left | right | page | column | avoid-page | avoid-column
    <b>设置或检索对象之前是否断行。</b>
    auto：既不强迫也不禁止在元素之前断行并产生新列
    always：总是在元素之前断行并产生新列
    avoid：避免在元素之前断行并产生新列

column-break-after：auto | always | avoid | left | right | page | column | avoid-page | avoid-column
    <b>设置或检索对象之后是否断行。</b>
    auto：既不强迫也不禁止在元素之后断行并产生新列
    always：总是在元素之后断行并产生新列
    avoid：避免在元素之后断行并产生新列

column-break-inside：auto | avoid | avoid-page | avoid-column
    <b>设置或检索对象内部是否断行。</b>
    auto：既不强迫也不禁止在元素内部断行并产生新列
    avoid：避免在元素内部断行并产生新列

</pre>
        <h1>列数及列宽固定:</h1>
        <div class="test">
            <p>立马理财是网易、光大证券、海航旅游强强联合，整合协同三方资源，满足用户的不同投资偏好，提供丰富的理财产品，倾力打造的一个安全、丰富、专业的理财平台。平台上的产品目前以债权类众筹、保险类理财产品为主，具有完善和标准化的平台合规管理、风控体系、产品设计流程和系统建设机制，努力实现投资者 “立马发财”、“立马有钱”的投资理财诉求。</p>
        </div>
<pre>
注：此时就不需要给容器设置宽度值了，否则以容器宽度值为主了。

.test {
    border: 10px solid #000;
    -moz-columns: 200px 3;
    -webkit-columns: 200px 3;
    columns: 200px 3;
    column-gap: normal;
}
</pre>

        <h1>列宽固定，根据容器宽度液态分布列数:</h1>
        <div class="test2">
            <p style="background-color:#f00;">立马理财是网易、光大证券、海航旅游强强联合，整合协同三方资源，满足用户的不同投资偏好，提供丰富的理财产品，倾力打造的一个安全、丰富、专业的理财平台。平台上的产品目前以债权类众筹、保险类理财产品为主，具有完善和标准化的平台合规管理、风控体系、产品设计流程和系统建设机制，努力实现投资者 “立马发财”、“立马有钱”的投资理财诉求。</p>
            <p style="background-color:#0f0;">立马理财是网易、光大证券、海航旅游强强联合，整合协同三方资源，满足用户的不同投资偏好，提供丰富的理财产品，倾力打造的一个安全、丰富、专业的理财平台。平台上的产品目前以债权类众筹、保险类理财产品为主，具有完善和标准化的平台合规管理、风控体系、产品设计流程和系统建设机制，努力实现投资者 “立马发财”、“立马有钱”的投资理财诉求。</p>
            <div>
                单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素单独一元素
            </div>
            <p>
               的不同投资偏好，提供丰富的理财产品，倾力打造的一个安全、丰富、专业的理财平台。平台上的产品目前以债权类众筹、保险类理财产品为主，具有的不同投资偏好，提供丰富的理财产品，倾力打造的一个安全、丰富、专业的理财平台。平台上的产品目前以债权类众筹、保险类理
            </p>
        </div>
<pre>
.test2 {
    width:50%;
    /*height: 100px;*/
    border: 10px solid #000;
    -moz-columns: 200px;
    -webkit-columns: 200px;
    columns: 200px;
    column-gap: 20px;
    /* 列之间的样式 */
    -moz-column-rule: 6px inset #ff0000;
    /* Firefox */
    -webkit-column-rule: 6px inset #ff0000;
    /* Safari and Chrome */
    column-rule: 6px inset #ff0000;
    /*column-rule-style:double; */
}

.test2 div {
    /*总是在元素之前断行并产生新列*/
    /*-moz-column-break-before: always;
    -webkit-column-break-before: always;
    column-break-before: always;*/
    background-color: #00f;
    color: #fff;
    /*column-span:all;*/
}
</pre>
    </div>
</template>
