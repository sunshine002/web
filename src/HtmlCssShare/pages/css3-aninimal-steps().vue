
<style>
.packet-bronze {
    width: 118px;
    height: 113px;
    margin-bottom: 30px;
    background: url(../img/step.png) no-repeat left;
    background-size: cover;
    -webkit-animation: packetjump 3s steps(3, start) infinite;
    /*animation: packetjump 1.5s steps(3, start) infinite;*/
}

/*@-webkit-keyframes packetjump {
    from {
        background-position: 118px center;
    }
    to {
        background-position: 100% center;
    }
}*/

@keyframes packetjump {
    from {
        background-position: 118px center;
    }
    to {
        background-position: 100% center;
    }
}
</style>
<template>
    <div>
        <div class="packet-bronze"></div>
        
        <pre>
        animation: packetjump 3s steps(3, start) infinite;
        @keyframes packetjump {
            from {
                background-position: 118px center;
            }
            to {
                background-position: 100% center;
            }
        }


        语法：
        animation-timing-function：
        默认值：ease
        适用于：所有元素，包含伪对象:after和:before
        继承性：无
        动画性：否
        计算值：指定值
        媒体：视觉

        取值：
        linear：线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)
        ease：平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)
        ease-in：由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)
        ease-out：由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)
        ease-in-out：由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
        step-start：等同于 steps(1, start)
        step-end：等同于 steps(1, end)
        steps(< integer>[, [ start | end ] ]?)：
        接受两个参数的步进函数。第一个参数必须为正整数，指定函数的步数。第二个参数取值可以是start或end，指定每一步的值发生变化的时间点。第二个参数是可选的，默认值为end。
        start 第一帧是第一步动画结束
        end 第一帧是第一步动画开始
        cubic-bezier(< number>, < number>, < number>, < number>)：特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内
    </pre>


    </div>
</template>


            