<template>
    <div class="movie">
        <cross-scroller classify="movie" title="影院热映" :items="in_theaters"></cross-scroller>
        <cross-scroller classify="movie" title="TOP250" :items="top250"></cross-scroller>
        <cross-scroller classify="movie" title="即将上映" :items="coming_soon"></cross-scroller>
        <interests title="发现好电影" :items="movieInterests"></interests>
        <type-list :types="movieTypes"></type-list>
    </div>
</template>

<script>
import CrossScroller from '@/components/CrossScroller'
import Interests from '@/components/Interests'
import TypeList from '@/components/TypeList'

import { mapState } from 'vuex'

export default {
    name: 'movie-view',
    components: { CrossScroller, Interests, TypeList },
    computed: {
        ...mapState(['in_theaters', 'coming_soon', 'top250', 'movieInterests','movieTypes'])
    },
    created() {
        this.$store.dispatch('getMovies');
    }
}
</script>

<style lang="scss">

</style>
