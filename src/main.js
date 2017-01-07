import Vue from 'vue'
import VueRouter from 'vue-router'

import Entry from 'app_lib/entry.js'

import app from './components/app.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    hashbang: false
})

router.map({
    '/': {
        name: 'news',
        component: function (resolve) {
          require(['./components/news/news.vue'], resolve)
        }
    },
    '/posts' : {
        name: 'post-list',
        component: function (resolve) {
          require(['./components/post/post-list.vue'], resolve)
        }
    },
    '/post/:postId': {
        name: 'post-detail',
        component: function (resolve) {
          require(['./components/post/post-detail.vue'], resolve)
        }
    }
})

var root = Entry.extend({
    components: {
        app: app,
    }
})
router.start(root, '#app')
