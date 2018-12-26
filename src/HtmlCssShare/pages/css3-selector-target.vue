<!-- <title>目标伪类选择符 E:target</title> -->
<style>
.wrap3 .hd {
    padding: 10px 0;
}

.wrap3 .nav {
    position: fixed;
    right: 10px;

}

.wrap3 .nav a {
    display: block;
    margin: 10px 0;
}

.wrap3 .bd .panel {
    width: 500px;
    margin-top: 5px;
    border: 1px solid #ddd;
}

.wrap3 .bd h2 {
    border-bottom: 1px solid #ddd;
}

.wrap3 .bd .panel:target {
    border-color: #f60;
}

.wrap3 .bd .panel:target h2 {
    border-color: #f60;
}

h2,
p {
    margin: 0;
    padding: 10px;
    font-size: 16px;
}
</style>
<template>
    <div class="wrap3">
        <div class="hd nav">
            <a href="#panel1">前往区块1</a>
            <a href="#panel2">前往区块2</a>
            <a href="#panel3">前往区块3</a>
            <a href="#panel4">前往区块4</a>
            <a href="#panel5">前往区块5</a>
        </div>
        <div class="bd">
            <div id="panel1" class="panel">
                <h2>区块1</h2>
                <div>
                    <p>区块1内容</p>
                    <p>区块1内容</p>
                    <p>区块1内容</p>
                </div>
            </div>
            <div id="panel2" class="panel">
                <h2>区块2</h2>
                <div>
                    <p>区块2内容</p>
                    <p>区块2内容</p>
                    <p>区块2内容</p>
                </div>
            </div>
            <div id="panel3" class="panel">
                <h2>区块3</h2>
                <div>
                    <p>区块3内容</p>
                    <p>区块3内容</p>
                    <p>区块3内容</p>
                </div>
            </div>
            <div id="panel4" class="panel">
                <h2>区块4</h2>
                <div>
                    <p>区块4内容</p>
                    <p>区块4内容</p>
                    <p>区块4内容</p>
                </div>
            </div>
            <div id="panel5" class="panel">
                <h2>区块5</h2>
                <div>
                    <p>区块5内容</p>
                    <p>区块5内容</p>
                    <p>区块5内容</p>
                </div>
            </div>
        </div>
    </div>
</template>
