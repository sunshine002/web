<style>

</style>



<template>
    <div>
<pre style="font-size:14px; line-height: 25px;">
<b>伸缩盒 Flexible Box Layout：旧</b>

属性                    描述
box-orient(父项)        设置或检索伸缩盒对象的子元素的排列方式。horizontal | vertical | inline-axis | block-axis
                        box-orient:horizontal + box-direction:normal 等同于：flex-direction:row
                        box-orient:vertical + box-direction:normal   等同于：flex-direction:column
box-pack(父项)          设置或检索伸缩盒对象的子元素的对齐方式。start | center | end | justify
                        
                        box-pack的对齐方式受box-orient影响；
                        默认情况下（即box-orient设置为horizontal）start和end所呈现的效果等同于左对齐和右对齐，
                        效果等同效果等同于新版本的justify-content;
                        当box-orient设置为vertical时，start和end所呈现的效果等同于顶部对齐和底部对齐；

box-align(父项)         设置或检索伸缩盒对象的子元素的对齐方式。start | end | center | baseline | stretch

                        box-align的对齐方式受box-orient影响；
                        默认情况下（即box-orient设置为horizontal）start和end所呈现的效果等同于顶部对齐和底部对齐；
                        效果等同于新版本的align-items；
                        当box-orient设置为vertical时，start和end所呈现的效果等同于左对齐和右对齐；

                        <b>注：box-align 与 box-pack 作用相反。</b>

box-direction(父项)     设置或检索伸缩盒对象的子元素的排列顺序是否反转。
                        box-direction：normal | reverse
box-lines(父项)         设置或检索伸缩盒对象的子元素是否可以换行显示，box-lines：single | multiple
                        效果类似于过渡版本和新版本的flex-wrap属性；

box-flex(子项)          设置或检索伸缩盒对象的子元素如何分配其剩余空间。
                        效果类似于新版中的flex，但又不太一样，它不是复合属性
box-flex-group(子项)    设置或检索伸缩盒对象的子元素的所属组，剩余空间则均分给数值最小的那个组。
box-ordinal-group(子项) 设置或检索伸缩盒对象的子元素的显示顺序。
                        效果等同于过渡版本的flex-order属性和新版本的order属性。                     


<b>伸缩盒 Flexible Box Layout：新</b>
flex-flow(父项)       复合属性。设置或检索伸缩盒对象的子元素排列方式。
flex-direction        设置或检索伸缩盒对象的子元素在父容器中的位置。
flex-wrap             设置或检索伸缩盒对象的子元素超出父容器时是否换行。

align-content(父项)   设置或检索弹性盒堆叠伸缩行的对齐方式，与justify-content属性类似，只是它适用于多行。
justify-content(父项) 设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。
align-items(父项)     设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式。

flex(子项)            复合属性。设置或检索伸缩盒对象的子元素如何分配空间。
flex-grow             设置或检索弹性盒的扩展比率。
flex-shrink           设置或检索弹性盒的收缩比率
flex-basis            设置或检索弹性盒伸缩基准值。

align-self(子项)      设置或检索弹性盒子元素自身在侧轴（纵轴）方向上的对齐方式。
order(子项)           适用于flex子项和flex容器中的绝对定位子元素，会影响position值为static元素的层叠级别

<b>兼容性写法：</b>
.flex {
    display: box;              /* OLD - Android 4.4- */
    display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;      /* TWEENER - IE 10 */
    display: -webkit-flex;     /* NEW - Chrome */
    display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */   
}
.flex-item {
    width: 20%;               /* For old syntax, otherwise collapses. */
    -webkit-box-flex: 1;      /* OLD - iOS 6-, Safari 3.1-6 */
    -moz-box-flex: 1;         /* OLD - Firefox 19- */
    -webkit-flex: 1;          /* Chrome */
    -ms-flex: 1;              /* IE 10 */
    flex: 1;                  /* NEW, Spec - Opera 12.1, Firefox 20+ */
}


</pre>
        
    </div>
</template>

