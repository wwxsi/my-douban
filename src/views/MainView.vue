<template>
    <div class="main">
        <talion-nav-primary @showTalionNav="show=true"></talion-nav-primary>
        <router-view v-show="!show" class="sub-view"></router-view>
        <talion-nav v-show="show" @close="show=false"></talion-nav>
        <download></download>
    
    </div>
</template>

<script>
import TalionNavPrimary from '@/components/TalionNavPrimary'
import TalionNav from '@/components/TalionNav'
import Download from '@/components/Download'

export default {
    name: '',
    components: { Download, TalionNavPrimary, TalionNav },
    data() {
        return {
            show: false
        }
    }
}
</script>

<style lang="scss">
.sub-view {
    padding: 0 1.2rem;
    margin-top: 5.6rem;
}

.title {
    font-size: 1.6rem;
    font-weight: normal;
}
</style>
