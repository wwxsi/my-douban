<template>
    <div class="cross-scroller">
        <div class="bar">{{title}}
            <a style="float:right;color:#42bd56" href="">更多</a>
        </div>
        <div class="wrapper">
            <div class="container">
                <template v-for="item in items">
                    <router-link tag="li" class="item" :to="classify+'/subject/'+item.id">
                        <img :src="item.images.medium">
                        <div class="title">{{item.title}}</div>
                        <rating :avg="item.rating.average|parseFloat"></rating>
                    </router-link>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import Rating from '@/components/Rating'
export default {
    name: 'cross-sroller',
    props: ['title', 'items', 'classify'],
    components: {
        Rating
    },
    filters: {
        parseFloat
    }
}
</script>

<style lang="scss">
.cross-scroller {
    margin-top: 2rem;
    .bar {
        padding: 0 5px;
        font-size: 1.6rem;
        font-weight: normal;
    }
    .wrapper {
        height: 18.7rem;
        margin-top: 2rem;
        overflow: hidden;
    }

    .container {
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        height: 20.7rem;

        .item {
            height: 18.7rem;
            width: 10rem;
            flex: 0 0 auto;
            margin: 0 5px;

            img {
                width: 10rem;
                height: 14.3rem;
            }
            .title {
                font-size: 1.4rem;
                overflow: hidden;
                white-space: pre;
                text-align: center;
                text-overflow: ellipsis;
                width: 100%;
            }
        }
    }
}
</style>
