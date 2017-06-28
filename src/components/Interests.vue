<template>
    <div class="interests">
        <h1 class="title">{{title}}</h1>
        <div class="wrapper">
            <div class="container">
                <template v-for="(item,i) in items">
                    <a class="i" :href="'https://m.douban.com/doulist/'+item.id" :style="{color:item.color}">{{item.i}}</a>
                    <br v-if="i===3">
                </template>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'interests',
    props: ['title', 'items']
}
</script>
<style lang="scss" scoped>
.interests{
    margin: 2rem 0;
}
.title {
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 2;
}

.wrapper{
    height: 12.3rem;
    overflow: hidden;
}

.container {
    white-space: nowrap;
    overflow: auto;
    height: 14rem;
}

.i {
    display: inline-block;
    margin: .5rem .1rem;
    font-size: 1.4rem;
    line-height: 5rem;
    border: 1px solid;
    border-radius: 3px;
    padding: 0 2.5rem;
}
</style>
