<template>
    <div class="container-fluid">
        <div class="full-height"><p class="logo">飲食店の写真</p></div>
        <ul class="list">
            <li><router-link class="button btn" to="/yokohama">横浜</router-link></li>
            <li><router-link to="/hongo">本郷</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Home"
}
</script>
<style scoped>
.full-height {
    height: 80vh;
}
.logo {
    font-size: 3rem;
    position: absolute;
    top: 50vh;
    width: 100vw;
    vertical-align: center;
    text-align: center;
}
.list {
    list-style-type: none;
}
</style>

