<template>
    <div>
        <div v-for="post in posts">
            <article class="post">
                <h2 class="post-title">
                    <a v-link="{
                        name: 'post-detail',
                        params: {
                            postId: post.post_id
                        }
                    }">
                        {{ post.post_title }}
                    </a>
                </h2>
                <ul class="post-meta">
                    <li>
                        Author：{{ post.user_name }}
                    </li>
                    <li>Time：{{ post.post_created_at }}</li>
                    <li>
                        Category：{{ post.category_name }}
                    </li>
                </ul>
                <div class="post-content">
                    {{{ post.post_content }}}
                    <p class="more">
                        <a v-link="{
                            name: 'post-detail',
                            params: {
                                postId: post.post_id
                            }
                        }">
                            - Read More -
                        </a>
                    </p>
                </div>
            </article>
        </div>
        <page
            v-bind:current="offset"
            v-bind:total="total"
            v-on:pagination="updatePostList">
        </page>
    </div>
</template>

<script>
import Pagination from 'app_api/pagination.js'
import Sort from 'app_api/sort.js'
import Post from 'app_api/post.js'
import { PostModel } from 'app_api/post.js'

import * as Helper from 'app_lib/helper.js'

import page from '../common/pagination.vue'

export default {
    data: function () {
        return {
            posts: [],
            // pagination
            orderType: "desc",
            orderBy: "post_created_at",
            limit: 10,
            offset: 0,
            total: 0
        }
    },

    ready: function() {

    },

    components: {
        'page': page
    },

    methods: {
        updatePostList: function () {
            return [];
        },

        getNewestPosts: function () {
            var page = new Pagination(this.offset, this.limit);
            var sort = new Sort(this.orderType, this.orderBy, "post_created_at");
            new Post().getPostList(this, {post_enabled: true, post_published: true}, page, sort)
            .then((response) => {
                this.posts = response.body.data;
            }, (response) => {
                this.posts = [];
            });
        }
    },

    route: {
        data({ to }) {
            this.getNewestPosts();
        }
    }
}
</script>
