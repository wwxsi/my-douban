<template>
    <div class="download">
        <div class="clear">
            <img src="../assets/douban-app-logo.png">
            <span>豆瓣</span><br>
            <span>我们的精神角落</span>
        </div>
        <br>
        <a href="https://www.douban.com/doubanapp/card/log?category=book_home&cid=&action=click_download&ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_book_home%26direct_dl%3D1">
            免费下载Android客户端
        </a>
    </div>
</template>

<script>
export default {
    name: 'download'
}
</script>

<style lang="scss">
.download {
    text-align: center;
    margin: 8rem 0;
    div {
        margin-right: 4rem;
        margin-bottom: 2rem;
        display: inline-block;
        // word-break: keep-all;
        white-space: pre;
        span:nth-child(2){
            font-size: 2.4rem;
            line-height: 2.8rem;
        }
        span:nth-child(4){
            font-size: 1.4rem;
            line-height: 2rem;
        }
        img {
            width: 4.8rem;
            margin-right: 1rem;
            height: 4.8rem;
            float: left;
        }

    }
    a {
        font-size: 1.5rem;
        color: #42bd56;
    }
}
</style>
