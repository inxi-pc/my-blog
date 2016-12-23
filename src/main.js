import Vue from 'vue'
import VueRouter from 'vue-router'

import Entry from 'app_lib/entry.js'

import app from './components/app.vue'
import news from './components/news/news.vue'
import postList from './components/post/post-list.vue'
import postDetail from './components/post/post-detail.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    hashbang: false
})

router.map({
    '/': {
        name: 'news',
        component: news
    },
    '/posts' : {
        name: 'post-list',
        component: postList
    },
    '/post/:postId': {
        name: 'post-detail',
        component: postDetail
    }
})

var root = Entry.extend({
    components: {
        app: app,
    }
})
router.start(root, '#app')
