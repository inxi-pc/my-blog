import Vue from 'vue'
import VueRouter from 'vue-router'

import Entry from 'app_lib/entry.js'

import app from './components/app.vue'
import postList from './components/post/post-list.vue'
import post from './components/post/post.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    hashbang: false
})

router.map({
    '/': {
        component: postList
    },
    '/posts' : {
        name: 'postListRoute',
        component: postList
    },
    '/posts/category/:categoryId': {
        name: 'categoryPostListRoute',
        component: postList
    },
    '/posts/user/:userId': {
        name: 'userPostListRoute',
        component: postList
    },
    '/post/:postId': {
        name: 'postRoute',
        component: post
    }
})

var root = Entry.extend({
    components: {
        app: app,
    }
})
router.start(root, '#app')
