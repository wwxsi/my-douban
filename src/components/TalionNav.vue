<template>
    <div class="talion-nav">
        <div class="header">
            <span @click="close">关闭</span>
            <input id="search" type="text">
        </div>
        <main>
            <ul class="nav">
                <li v-for="n in 12">
                    <div>电影</div>
                    <div>影院热映</div>
                </li>
            </ul>
            <ul class="link">
                <li><a>注册账号</a></li>
                <li><a>登录豆瓣</a></li>
                <li><a>使用桌面版</a></li>
                <li><a>使用豆瓣App</a></li>
            </ul>
        </main>
    </div>
</template>
<script>
export default {
    name: 'talion-nav',
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>

<style lang="scss">
.talion-nav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 3;
    background-color: white;

    .header {
        display: flex;
        width: 100%;
        box-sizing: border-box;
        padding: 1.5rem 1.8rem;
        align-items: center;
        border-bottom: 1px solid #f3f3f3;
        span {
            color: #42bd56;
            font-size: 1.6rem;
            margin-right: 1.5rem;
        }
        #search {
            flex: 1;
            height: 3rem;
            border: none;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50% #f3f3f3;
            background-color: #F3F3F3;
            background-size: 1.7rem;
            border-radius: .3rem;
        }
        #search:focus {
            background-image: none;
        }
    }
    main {
        min-width: 32rem;
    }

    .nav {
        display: flex;
        flex-wrap: wrap;
        li {
            flex: 1 0 auto;
            width: 33.3%;
            text-align: center;
            font-size: 2.4rem;
            line-height: 1;
            margin-top: 2.5rem;
            color: rgb(35, 132, 232);

            div:nth-child(2) {
                font-size: 1.2rem;
                line-height: 1.8;
            }
        }
    }

    .link{
        display: flex;
        flex-wrap: wrap;
        margin-top: 3rem;

        li{
            flex: 0 0 auto;
            width: 50%;
            color: #42bd56;
            border-top: 1px solid #f3f3f3;
            padding: 1.5rem 0;
            a{
                display: block;
                text-align: center;
                height: 2rem;
                line-height: 2rem;
                font-size: 1.5rem;
            }
        }
        li:nth-child(3),li:nth-child(4){
            border-bottom: 1px solid #f3f3f3
        }
        li:nth-child(odd){
            a{
                border-right: 1px solid #f3f3f3;
            }
        }
    }
}
</style>
