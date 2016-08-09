import Vue from 'vue'
import header from './components/header.vue'
import footer from './components/footer.vue'
import postList from './components/post/post-list.vue'
import postTitleList from './components/post/post-title-list.vue'
import commentList from './components/comment/comment-list.vue'
import categoryList from './components/category/category-list.vue'

new Vue({
    el: '#app',
    components: {
        "my-header": header,
        "my-footer": footer,
        'post-list': postList,
        'post-title-list': postTitleList,
        'comment-list': commentList,
        'category-list': categoryList
    }
})