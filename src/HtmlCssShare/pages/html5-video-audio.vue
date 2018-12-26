<template>
    <div>
        <h3>视频demo</h3>
        <!-- <video src="/i/movie.ogg" controls="controls">
            your browser does not support the video tag
        </video> -->
        <video width="320" height="240" controls="controls">
            <source src="http://www.w3school.com.cn/i/movie.ogg" type="video/ogg">
            <source src="http://www.w3school.com.cn/i/movie.mp4" type="video/mp4"> Your browser does not support the video tag.
        </video>
    
        <pre>
            当前，video 元素支持三种视频格式：
            格式      IE      Firefox     Opera   Chrome  Safari
            Ogg       No      3.5+       10.5+     5.0+    No
            MPEG 4    9.0+    No         No        5.0+    3.0+
            WebM      No      4.0+       10.6+     6.0+    No

            < video src="movie.ogg" width="320" height="240" controls="controls">
                Your browser does not support the video tag.
            < /video>

            Ogg 文件，适用于Firefox、Opera 以及 Chrome 浏览器。
            要确保适用于 Safari 浏览器，视频文件必须是 MPEG4 类型。
            video 元素允许多个 source 元素。source 元素可以链接不同的视频文件。浏览器将使用第一个可识别的格式：            

            < video width="320" height="240" controls="controls" >
              < source src="movie.ogg" type="video/ogg">
              < source src="movie.mp4" type="video/mp4">
            Your browser does not support the video tag.
            < /video>


            属性         值            描述
            autoplay    autoplay    如果出现该属性，则视频在就绪后马上播放。
            controls    controls    如果出现该属性，则向用户显示控件，比如播放按钮。
            height      pixels      设置视频播放器的高度。
            loop        loop        如果出现该属性，则当媒介文件完成播放后再次开始播放。
            preload     preload     如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。
            src         url         要播放的视频的 URL。
            width       pixels      设置视频播放器的宽度。

        </pre>


        <h3>音频demo</h3>
        <!-- <audio src="http://www.w3school.com.cn/i/song.ogg" controls="controls">
            Your browser does not support the audio element.
        </audio> -->
        <audio controls="controls">
            <source src="http://www.w3school.com.cn/i/song.ogg" type="audio/ogg">
            <source src="http://www.w3school.com.cn/i/song.mp3" type="audio/mpeg"> Your browser does not support the audio element.
        </audio>

        <pre>

        当前，audio 元素支持三种音频格式：
                    IE 9    Firefox 3.5     Opera 10.5  Chrome 3.0  Safari 3.0
        Ogg Vorbis  -       √               √           √           -
        MP3         √       -               -           √           √
        Wav         -       √               √           -           √


        < audio src="song.ogg" controls="controls">
            Your browser does not support the audio tag.
        < /audio>
        
        要确保适用于 Safari 浏览器，音频文件必须是 MP3 或 Wav 类型。
        < audio controls="controls">
          < source src="song.ogg" type="audio/ogg">
          < source src="song.mp3" type="audio/mpeg">
        Your browser does not support the audio tag.
        < /audio>


        < audio> 标签的属性
        属性          值           描述
        autoplay     autoplay     如果出现该属性，则音频在就绪后马上播放。
        controls     controls     如果出现该属性，则向用户显示控件，比如播放按钮。
        loop         loop         如果出现该属性，则每当音频结束时重新开始播放。
        preload      preload      如果出现该属性，则音频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性。
        src          url          要播放的音频的 URL。

        </pre>
        
    </div>
</template>
<script>

</script>
