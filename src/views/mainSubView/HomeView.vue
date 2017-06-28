<template>
    <div class="home">
        <ul class="quick-nav">
            <li>影院热映</li>
            <li>近期值得看的美剧</li>
            <li>豆瓣时间</li>
            <li>使用豆瓣</li>
        </ul>
        <event-list :events="events"></event-list>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
            
        </infinite-loading>
    
    </div>
</template>

<script>
import { mapState } from 'vuex'

import EventList from '@/components/EventList'
import InfiniteLoading from 'vue-infinite-loading'


export default {
    name: '',
    computed: {
        ...mapState(['events'])
    },
    components: { EventList, InfiniteLoading },
    methods: {
        onInfinite() {
            this.$store.dispatch('getMoreEvents').then(() => {
                this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.quick-nav {
    display: flex;
    flex-wrap: wrap;
    padding-top: 1rem;

    li {
        width: 50%;
        line-height: 4.4rem;
        font-size: 1.5rem;
        background-color: #F6F6F6;
        text-align: center;
        box-sizing: border-box;
        padding: 0.3rem;
        background-clip: content-box;
        word-break: keep-all;
    }
}
</style>
