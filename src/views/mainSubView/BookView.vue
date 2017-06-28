<template>
    <div class="movie">
        <cross-scroller classify="book" title="最受关注图书 | 虚构类" :items="novel"></cross-scroller>
        <cross-scroller classify="book" title="最受关注图书 | 非虚构类" :items="reality"></cross-scroller>
        <interests title="发现好图书" :items="bookInterests"></interests>
        <type-list :types="bookTypes"></type-list>
    
    </div>
</template>

<script>
import CrossScroller from '@/components/CrossScroller'
import Interests from '@/components/Interests'
import TypeList from '@/components/TypeList'

import { mapState } from 'vuex'

export default {
    name: 'movie-view',
    components: { CrossScroller, Interests ,TypeList},
    computed: {
        ...mapState(['novel', 'reality', 'bookInterests','bookTypes'])
    },
    created() {
        this.$store.dispatch('getBooks');
    }
}
</script>

<style lang="scss">

</style>
