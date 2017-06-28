<template>
    <div class="subject">
        <section>
            <div class="bg">
                <img src="https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg">
            </div>
            <div class="content">
                <span>用App打开
                    <br>关注影评人</span>
                <div>
                    <button>极速下载</button>
                    <button>打开</button>
                </div>
            </div>
        </section>
        <main v-if="subject">
            <h2 class="title">{{subject.title}}</h2>
            <div class="clear">
                <img class="l-img" :src="subject.images.large">
                <rating class="rating" :avg="subject.rating.average"></rating>
                <span style="color:#aaa;font-size:1.5rem;line-height:1.8rem;margin-left:1rem;">{{subject.ratings_count||subject.rating.numRaters}}人评价</span>
                <template v-if="classify==='movie'">
                    <div class="info">
                        {{subject.year}}(中国大陆)/
                        <template v-for="g in subject.genres">
                            {{g}}/
                        </template>
                        <template v-for="d in subject.directors">
                            {{d.name}}(导演)/
                        </template>
                        <template v-for="c in subject.casts">
                            {{c.name}}/
                        </template>
                    </div>
                    <div>
                        <a href="https://www.douban.com/doubanapp/app?model=B&copy=1&page=&channel=m_ad_yingren&direct_dl=1" class="open-app" rel="nofollow">用App查看影人资料</a>
                    </div>
                </template>
                <template v-else>
                    <div class="info">
                        <template v-for="a in subject.author">
                            {{a}}/
                        </template>
                        {{subject.publisher}}/{{subject.pages}}页/{{subject.binding}}/{{subject.price}}/{{subject.pubdate}}/
                    </div>
                </template>
            </div>
            <div v-if="classify==='book'" style="border-bottom:1px solid #eee;border-top:1px solid #eee;padding:1rem;margin:1rem 0;">
                <a style="color:#42bd56;font-size:1.5rem;line-height:2.4;">在豆瓣购买
                    <span style="float:right;color:#ccc">99元起</span>
                </a>
            </div>
            <div class="subject-mark" v-if="classify==='movie'">
                <a class="item">想看</a>
                <a class="item">看过</a>
            </div>
            <div class="subject-mark" v-else>
                <a class="item">在读</a>
                <a class="item">想读</a>
                <a class="item">读过</a>
            </div>
            <p class="sub-title">{{subject.title}}的
                <span v-if="classify==='movie'">剧情</span>
                <span v-else>内容</span>简介</p>
            <clamped :content="subject.summary" :line="7"></clamped>
            <p class="sub-title">{{subject.title}}的短评(2333)</p>
            <ul class="comments">
                <li v-for="n in 4">
                    <div class="user">
                        <img class="avatar" src="../../assets/avatar.jpg">
                        <div style="margin-left:3.6rem;">
                            <span style="font-size:1.5rem;font-weight:bolder">豆瓣</span>
                            <br>
                            <span class="time">{{dateStr}}</span>
                        </div>
                    </div>
                    <p class="comment">三星半吧 视觉高潮很爽 爽完脑子里也没留下些什么 犹如很有职业道德的性工作者</p>
                    <div class="like clear">
                        <a class="bt-like">666</a>
                        <a class="more"></a>
                    </div>
                </li>
            </ul>
            <p style="font-size:1.6rem;color:#42bd56;text-align:center;margin:2rem">
                <a>查看全部短评</a>
            </p>
        </main>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Rating from '@/components/Rating'
import Clamped from '@/components/Clamped'
export default {
    name: 'subject',
    created() {
        this.$store.dispatch({
            type: 'getSubject',
            classify: this.$route.params.classify,
            id: this.$route.params.id
        })
    },
    computed: {
        ...mapState(['subject']),
        classify() {
            return this.$route.params.classify
        },
        dateStr() {
            let now = new Date();
            return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        }
    },
    components: {
        Rating,
        Clamped
    }

}
</script>

<style lang="scss">
.subject {
    margin: 4.6rem 0 0 0;
    padding: 0;
    max-width: none;
    position: relative;
    z-index: 1;
    section {
        color: #2CA532;
        font-size: 1.4rem;
        line-height: 2.4rem;
        position: relative;

        .bg {
            width: 100%;
            padding-bottom: 21%;

            img {
                width: 100%;
                position: absolute;
            }
        }

        .content {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                display: inline-block;
                margin-left: 1.8rem;
            }

            div {
                button {
                    outline: none;
                    border-radius: 3px;
                    line-height: 2;
                    color: #2CA532;
                    background-color: transparent;
                    border: 1px solid #2CA532;
                    margin-right: 1rem;
                    padding: 0 1.4rem;
                }
                button:nth-child(1) {
                    color: white;
                    background-color: #2CA532;
                }
            }
        }
    }

    main {
        margin: 1.8rem;

        .title {
            font-size: 2.4rem;
            line-height: 3.2rem;
            margin-top: 2rem;
        }

        .rating {
            display: inline-block;
        }

        .l-img {
            float: right;
            width: 10rem;
            height: 15rem;
            margin-left: 2.4rem;
        }

        .info {
            font-size: 1.4rem;
            line-height: 1.6;
            margin-top: 1.5rem;
        }

        .subject-mark {
            color: #42bd56;
            font-size: 1.4rem;
            line-height: 1.5;
            display: flex;
            margin: 2rem 0;

            .item {
                display: block;
                line-height: 3rem;
                flex: 1;
                border: 1px solid;
                border-radius: 3px;
                text-align: center;
                margin: 0 1rem;
            }
        }

        .open-app {
            color: #42bd56;
            font-size: 1.4rem;
            line-height: 1.5;
            margin: 1rem 0;
            display: block;
        }

        .sub-title {
            font-size: 1.4rem;
            color: #aaa;
        }

        .comments {
            li {
                margin-bottom: 3rem;
            }
            img {
                width: 3.6rem;
                height: 3.6rem;
                float: left;
                border-radius: 1.8rem;
                margin-right: 1rem
            }

            .time {
                font-size: 1.2rem;
                color: #aaa;
            }

            .comment {
                margin: 1rem 0 1rem 3.6rem;
                font-size: 1.5rem;
                line-height: 2.2rem;
            }

            .like {
                margin-left: 3.6rem;
                font-size: 1.4rem;
                color: #aaa;
                a {
                    display: inline-block;
                }
                .bt-like {
                    float: left;
                    padding-left: 2rem;
                    background: url(../../assets/ic_like_gray.svg) no-repeat;
                }
                .more {
                    background: url(../../assets/more.svg) center center no-repeat;
                    float: right;
                    width: 3rem;
                    height: 2rem;
                }
            }
        }
    }
}
</style>
