<template>
    <div>
        <h3>web works</h3>
        <p>计数:
            <output id="result"></output>
        </p>
        <button @click="startWorker">开始 Worker</button>
        <button @click="stopWorker">停止 Worker</button>
    </div>
</template>
<script>
// 地理定位
export default {
    data() {
            return {
                w: undefined
            }
        },
    methods: {
        startWorker() {
            var w = this.w;
            if (typeof(Worker) !== "undefined") {
                // console.log(typeof(w))
                if (typeof(w) == "undefined") {
                    w = new Worker("./web-workers.js");
                }
                w.onmessage = function(event) {
                    document.getElementById("result").innerHTML = event.data;
                };
            } else {
                document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
            }
        },
        stopWorker() {
            var w = this.w;
            w.terminate();
        }
    }
}
</script>
