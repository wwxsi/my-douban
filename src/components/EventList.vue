<template>
    <ul class="event-list">
        <template v-for="event in events">
            <li>
                <router-link :to="'detail/'+event.id">
                    <div class="clear">
                        <div class="img" :style="{backgroundImage:'url('+event.image_lmobile+')'}">
                            <div style="paddingTop: 100%"></div>
                        </div>
                        <h2>{{event.title}} </h2>
                        <p>{{event.content|getAbstract}}</p>
                    </div>
                    <div class="clear">
                        <span style="float:left">by {{event.owner.name}}</span>
                        <span style="float:right">来自 {{event.category_name}}</span>
                    </div>
                </router-link>
            </li>
        </template>
    </ul>
</template>
<script>
export default {
    name: 'event-list',
    props: {
        events: {
            type: Array,
            required: true
        }
    },
    filters: {
        getAbstract(value) {
            return value.replace(/<[^>]*>/g,'\n').split(/[\n。]/)[0];
        }
    }
}
</script>

<style lang="scss" scoped>
li {
    margin-top: 2rem;
    border-bottom: .1rem solid #f3f3f3;
    padding-bottom: 2rem;
    a {
        display: block;
        text-decoration: none;
        color: #aaa;
    }

    .img {
        background: center center/cover no-repeat;
        width: 25.6%;
        float: right;
        margin: 0 0 1rem 1rem;
    }

    h2 {
        font-size: 1.7rem;
        line-height: 2.4rem;
        font-weight: lighter;
        color: black;
    }
    p {
    }
}
</style>
