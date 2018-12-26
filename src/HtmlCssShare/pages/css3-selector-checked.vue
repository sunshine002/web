<style>
input:checked + span {
    background: #f00;
}

input:checked + span:after {
    content: " 我被选中了";
}
</style>
<template>
    <div>
        <pre>
            语法：E:checked { sRules }
            说明：匹配用户界面上处于选中状态的元素E。(用于input type为radio与checkbox时)

            input:checked + span {
                background: #f00;
            }

            input:checked + span:after {
                content: " 我被选中了";
            }
        </pre>
        <form method="post" action="#">
            <fieldset>
                <legend>选中下面的项试试</legend>
                <ul>
                    <li>
                        <label>
                            <input type="radio" name="colour-group" value="0" /><span>蓝色</span></label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="colour-group" value="1" /><span>红色</span></label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="colour-group" value="2" /><span>黑色</span></label>
                    </li>
                </ul>
            </fieldset>
            <fieldset>
                <legend>选中下面的项试试</legend>
                <ul>
                    <li>
                        <label>
                            <input type="checkbox" name="colour-group2" value="0" /><span>蓝色</span></label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="colour-group2" value="1" /><span>红色</span></label>
                    </li>
                    <li>
                        <label>
                            <input type="checkbox" name="colour-group2" value="2" /><span>黑色</span></label>
                    </li>
                </ul>
            </fieldset>
        </form>
    </div>
</template>
