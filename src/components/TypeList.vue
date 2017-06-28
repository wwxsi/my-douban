<template>
    <div class="type-list">
        <h1 class="title">分类浏览</h1>
        <ul>
            <li v-for="type in typesArr">{{type}}
                <span></span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'type-list',
    props: ['types'],
    computed: {
        typesArr() {
            return this.types.split(' ')
        }
    }
}
</script>
<style lang="scss" scoped>
    .title{
        line-height: 2;
    }
ul {
    font-size: 1.5rem;
    line-height: 4.2rem;
    color: #42bd56;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;

    li {
        border-top: 1px solid #eee;
        border-right: 1px solid #eee;
        box-sizing: border-box;
        width: 50%;
        flex: 0 0 auto;

        span {
            width: .8rem;
            height: .8rem;
            border-top: 1px solid #ccc;
            border-right: 1px solid #ccc;
            transform: rotate(45deg);
            float: right;
            margin: 1.5rem 1.5rem 0 0;
        }
    }

    li:nth-child(even) {
        border-right: none;
        padding-left: 1.8rem;
    }

    li:nth-last-child(1),li:nth-last-child(2){
        border-bottom:  1px solid #eee;
    }
}
</style>
