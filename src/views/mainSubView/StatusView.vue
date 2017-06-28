<template>
    <div class="status">
        <section>
            <div class="bg">
                <img src="https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg">
            </div>
            <div class="content">
                <span>打开App,回复广播</span>
                <div>
                    <button>极速下载</button>
                    <button>打开</button>
                </div>
            </div>
        </section>
        <main>
            
        </main>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Rating from '@/components/Rating'
import Clamped from '@/components/Clamped'
export default {
    name: 'status-view',
}
</script>

<style lang="scss">
.status {
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

    }
}
</style>
