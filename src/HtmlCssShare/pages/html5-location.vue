<template>
    <div>
        <h3>地理定位</h3>
        <a href="http://www.w3school.com.cn/html5/html_5_geolocation.asp">参考地址</a>
        
        <pre>
            定位用户的位置
            HTML5 Geolocation API 用于获得用户的地理位置。
            鉴于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的。

            浏览器支持
            Internet Explorer 9、Firefox、Chrome、Safari 以及 Opera 支持地理定位。
            注释：对于拥有 GPS 的设备，比如 iPhone，地理定位更加精确。

            检测是否支持地理定位  navigator.geolocation
            如果支持，则运行 getCurrentPosition() 方法。如果不支持，则向用户显示一段消息。
            如果getCurrentPosition(a, b)运行成功，a获取成功，b获取失败，a方法中的参数属性：
            
            属性                      描述
            coords.latitude         十进制数的纬度
            coords.longitude        十进制数的经度
            coords.accuracy         位置精度
            coords.altitude         海拔，海平面以上以米计
            coords.altitudeAccuracy 位置的海拔精度
            coords.heading          方向，从正北开始以度计
            coords.speed            速度，以米/每秒计
            timestamp               响应的日期/时间



        </pre>

        <p ref="info">点击这个按钮，获得您的坐标：</p>
        <button @click="getLocation">点击获位置的取经度和纬度</button>
        <!--
        检测是否支持地理定位
            如果支持，则运行 getCurrentPosition() 方法。如果不支持，则向用户显示一段消息。
            如果getCurrentPosition()运行成功，则向参数showPosition中规定的函数返回一个coordinates对象
            showPosition() 函数获得并显示经度和纬度

        错误代码：
            Permission denied - 用户不允许地理定位
            Position unavailable - 无法获取当前位置
            Timeout - 操作超时
    -->
    </div>
</template>
<script>
// 地理定位
export default {
    data() {
            return {

            }
        },
        ready() {

        },
        methods: {
            getLocation() {
                var me = this,
                    x = me.$refs.info;

                // console.log(me.$refs)
                if (navigator.geolocation) {
                    console.log("ok")
                    navigator.geolocation.getCurrentPosition(me.showPosition, me.showError);
                } else {
                    x.innerHTML = "Geolocation is not supported by this browser.";
                }
            },
            showPosition(position) {
                console.log(position)
                var me = this,
                    x = me.$refs.info;
                x.innerHTML = "Latitude: " + position.coords.latitude +
                    "<br />Longitude: " + position.coords.longitude;
            },
            showError(error) {
                var me = this, x = me.$refs.info;
                console.log(error.code)
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        x.innerHTML = "User denied the request for Geolocation."
                        break;
                    case error.POSITION_UNAVAILABLE:
                        x.innerHTML = "Location information is unavailable."
                        break;
                    case error.TIMEOUT:
                        x.innerHTML = "The request to get user location timed out."
                        break;
                    case error.UNKNOWN_ERROR:
                        x.innerHTML = "An unknown error occurred."
                        break;
                }
            }
        }
}
</script>
