import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import MainView from '@/views/MainView'
import HomeView from '@/views/mainSubView/HomeView'
import MovieView from '@/views/mainSubView/MovieView'
import BookView from '@/views/mainSubView/BookView'
import StatusView from '@/views/mainSubView/StatusView'
import GroupView from '@/views/mainSubView/GroupView'
import SubjectView from '@/views/mainSubView/SubjectView'
import DetailView from '@/views/mainSubView/DetailView'

export default new Router({
    routes: [{
        path: '/',
        component: MainView,
        children: [{
            path: 'movie',
            name: 'MovieView',
            component: MovieView
        }, {
            path: 'book',
            name: 'BookView',
            component: BookView
        }, {
            path: ':classify/subject/:id',
            component: SubjectView
        }, {
            path: 'status',
            name: 'StatusView',
            component: StatusView
        }, {
            path: 'group',
            name: 'GroupView',
            component: GroupView
        }, {
            path: '',
            name: 'HomeView',
            component: HomeView
        }, {
            path: 'detail/:id',
            component: DetailView
        }]
    }]
})