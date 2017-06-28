import Vue from 'vue'
import Vuex from 'vuex'
import request from 'superagent'
import jsonp from 'superagent-jsonp'

Vue.use(Vuex);

const state = {
    events: [],
    skip: 0,
    eventItem: null,

    novel: [],
    reality: [],

    subject: null,

    in_theaters: [],
    coming_soon: [],
    top250: [],

    movieInterests: [
        { id: '968362', color: '#3BA94D', i: '同时入选IMDB250和豆瓣电影250的电影' },
        { id: '16002', color: '#CC3344', i: '带你进入不正常的世界' },
        { id: '190343', color: '#FFC46C', i: '用电【影】来祭奠逝去的岁月' },
        { id: '1125971', color: '#FFAC2D', i: '女孩们的故事【电影】' },
        { id: '4253902', color: '#42BD56', i: '科幻是未来的钥匙——科幻启示录【科幻题材】' },
        { id: '121326', color: '#2384E8', i: '美国生活面面观' },
        { id: '37479562', color: '#4F9DED', i: '2015终极期待' },
        { id: '458087', color: '#FF4055', i: '经典韩国电影——收集100部' }
    ],
    bookInterests: [
        { id: '10372', color: '#2384E8', i: '小波看书' },
        { id: '105583', color: '#FF4055', i: '村上春树周边' },
        { id: '99294', color: '#FFC46C', i: '我凭名字认定了你' },
        { id: '35573', color: '#4F9DED', i: '不可饶恕的女人们' },
        { id: '38088147', color: '#CC3344', i: '爱欲书' },
        { id: '645579', color: '#FFAC2D', i: '他们还写侦探小说' },
        { id: '192653', color: '#3BA94D', i: '人生识字始忧患' },
        { id: '89925', color: '#42BD56', i: '詩歌書店' }
    ],

    movieTypes: "经典 冷门佳片 豆瓣高分 动作 喜剧 爱情 悬疑 恐怖 科幻 治愈 文艺 成长 动画 华语 欧美 韩国 日本 ",
    bookTypes: "小说 爱情 历史 外国文学 青春 励志 随笔 传记 推理 旅行 奇幻 经管"
}



const bookMap = [
    { tag: 'novel', q: '虚构类' },
    { tag: 'reality', q: '非虚构类' }
]

const movieMap = [
    { tag: 'in_theaters' },
    { tag: 'coming_soon' },
    { tag: 'top250' },
]


let mutations = {
        getBooks(state, payload) {
            state[payload.tag] = payload.res;
        },
        getMovies(state, payload) {
            state[payload.tag] = payload.res;
        },
        getSubject(state, payload) {
            state.subject = payload.res;
        },
        getEventItem(state, payload) {
            state.eventItem = payload.res;
        },
        getMoreEvents(state, payload) {
            state.events = state.events.concat(payload.res);
            state.skip += 3;
        },
        clearSubject(state){
            state.subject=null;
        },
        clearEventItem(state){
            state.eventItem=null;
        }
    },
    actions = {
        getBooks({ commit }) {
            bookMap.forEach((item) => {
                request.get('https://api.douban.com/v2/book/search?q=' + item.q + '&count=8')
                    .use(jsonp)
                    .end((err, res) => {
                        if (!err) {
                            commit({
                                type: 'getBooks',
                                res: res.body.books,
                                tag: item.tag
                            })
                        }
                    })
            })
        },
        getMovies({ commit }) {
            movieMap.forEach(item => {
                request.get('https://api.douban.com/v2/movie/' + item.tag + '?count=8')
                    .use(jsonp)
                    .end((err, res) => {
                        if (!err) {
                            commit({
                                type: 'getMovies',
                                res: res.body.subjects,
                                tag: item.tag
                            })
                        }
                    })
            })
        },
        getSubject({ commit }, { classify, id }) {
            commit('clearSubject');
            if(classify==='movie'){
                classify+='/subject'
            }
            request.get(`https://api.douban.com/v2/${classify}/${id}`)
                .use(jsonp)
                .end((err, res) => {
                    if (!err) {
                        commit({
                            type: 'getSubject',
                            res: res.body
                        })
                    }
                })
        },
        getEventItem({ commit }, { id }) {
            commit('clearEventItem')
            request.get(`https://api.douban.com/v2/event/${id}`)
                .use(jsonp)
                .end((err, res) => {
                    if (!err) {
                        commit({
                            type: 'getEventItem',
                            res: res.body
                        })
                    }
                })
        },
        getMoreEvents({ commit, state }) {
            return new Promise((resolve, reject) => {
                request.get(`https://api.douban.com/v2/event/list?loc=118254&start=${state.skip}&count=3`)
                    .use(jsonp)
                    .end((err, res) => {
                        if (!err) {
                            commit({
                                type: 'getMoreEvents',
                                res: res.body.events
                            });
                            resolve()
                        }
                    })
            })

        }

    };

export default new Vuex.Store({
    state,
    mutations,
    actions
})