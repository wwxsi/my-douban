<template>
    <div class="detail">
        <template v-if="eventItem">
            <div class="title">{{eventItem.title}}
                <span class="label" v-if="eventItem.label">{{eventItem.label.title}}</span>
            </div>
            <div class="img" style="padding:2rem 0;">
                <img :src="eventItem.image_hlarge">
            </div>
            <h1 class="t">活动简介</h1>
            <p class="desc" v-html="eventItem.content"></p>
        </template>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'detail',
    created() {
        this.$store.dispatch({
            type: 'getEventItem',
            id: this.$route.params.id
        })
    },
    computed: {
        ...mapState(['eventItem'])
    }
}
</script>

<style lang="scss" scoped>
.label {
    background-color: #FF8263;
    color: white;
    font-size: 0.8rem;
    vertical-align: top;
    padding: .2rem;
    border-radius: 3px;
    margin-left: .5rem;
}

.t {
    font-size: 1.8rem;
    line-height: 2.5rem;
    color: #aaa;
    font-weight: normal;
}

.desc {
    font-size: 1.4rem;
    line-height: 2rem;
    a{
        color: #FF8263;
    }
}
img{
    max-width: 100%;
    display: block;
    margin: 1rem auto;
}
</style>
