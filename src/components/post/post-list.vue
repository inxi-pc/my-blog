<template>
    <div>
        <h3 class="archive-title" v-if="title">{{ formattedTitle }}</h3>
        <post
            v-for="post in posts"
            v-bind:inherit-post="post">
        </post>
        <pagination
            v-bind:current="current"
            v-bind:total="total"
            v-on:pagination="updateList">
        </pagination>
    </div>
</template>

<script>
import postModel from '../../models/post.js'

import post from './post.vue'
import pagination from '../common/pagination.vue'

export default {
    data: function () {
        return {
            current: 0,
            total: 0,
            posts: []
        }
    },

    props: {
        listType: String,
        title: String,
        order: {
            type: String,
            default: "DESC",
            required: true
        },
        by: {
            type: String,
            default: "post_id",
            required: true
        },
        limit: {
            type: Number,
            default: 0,
            required: true
        }
    },

    computed: {
        'formattedTitle': function() {
            if (this.listType == 'category') {
                return "分类" + this.title + "下的文章: ";
            } else if (this.listType == 'user') {
                return this.title + "发布的文章: ";
            } else {
                return this.title;
            }
        }
    },

    created: function() {
        this.posts = postModel.getPostsNewest(0, this.order, this.by, this.limit);
        this.current = 0;
        this.total = 5;
    },

    components: {
        'post': post,
        'pagination': pagination
    },

    methods: {
        updateList: function(msg) {
            this.current = msg.current;
            this.total = msg.total;
            this.posts = postModel.getPostsNewest(0, this.order, this.by, this.limit);
        }
    },

    route: {
        data({ to }) {
            if (to.query.order) {
                this.order = to.query.order;
            }
            if (to.query.by) {
                this.by = to.query.by;
            }
            if (to.query.limit) {
                this.limit = to.query.limit;
            }

            if (to.params.categoryId) {
                this.posts = postModel.getPostsByCategory(to.params.categoryId, this.order, this.by, this.limit);
                this.listType = "category";
                this.title = this.posts[0].category_name;
            } else if (to.params.userId) {
                this.posts = postModel.getPostsByUser(to.params.userId, this.order, this.by, this.limit);
                this.listType = "user";
                this.title = this.posts[0].user_name;
            } else {
                this.posts = postModel.getPostsNewest(this.order, this.by, this.limit);
            }
        }
    }
}
</script>
