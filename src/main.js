import Vue from 'vue'
import VueRouter from 'vue-router'

import Entry from 'app_lib/entry.js'

import app from './components/app.vue'
import postList from './components/post/post-list.vue'
import postDetail from './components/post/post-detail.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    hashbang: false
})

router.map({
    '/': {
        component: postList
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
