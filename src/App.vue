<template>
    <div id="app">
        <router-view class="view"></router-view>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="scss">
html {
    font-size: 62.5%;
}

body,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

#app {
    max-width: 58rem;
    min-width: 32rem;
    margin: 0 auto;
}

.clear:after {
    content: '';
    display: block;
    clear: both;
}
</style>