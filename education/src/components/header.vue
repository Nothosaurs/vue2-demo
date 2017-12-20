<template>
    <header class="header">
        <div id="logo"> logo </div>
        <ul class="nav">
            <li v-for="nav in navs"> {{nav.li}} </li>
        </ul>
    </header>
</template>
<script>
export default {
    name: 'headerDiv',
    data() {
        return {
            navs: [
                { li: '主页' },
                { li: '主页1' },
                { li: '主页2' }
            ]
        }
    },
    mounted(){
    	$("#logo").html("aaa");
    }
}
</script>