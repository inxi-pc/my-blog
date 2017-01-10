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
                        Author：{{ post.user.user_name }}
                    </li>
                    <li>Time：{{ post.post_created_at }}</li>
                    <li>Category：
                        <a v-link="{
                            name: 'post-list',
                            query: {
                                category_id: post.category_id
                            }
                        }">
                            {{ post.category.category_name_en }}
                        </a>
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
                            Read More>>
                        </a>
                    </p>
                </div>
            </article>
        </div>
        <page
            v-bind:limit="limit"
            v-bind:offset="offset"
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

import page from '../common/pagination.vue'

export default {
    data: function () {
        return {
            posts: [],
            // pagination
            orderType: "desc",
            orderBy: "post_id",
            limit: 1,
            offset: 0,
            total: 0
        }
    },

    components: {
        'page': page
    },

    methods: {
        updatePostList: function (e) {
            this.offset = e.offset;
            this.getPostsByCategoryId();
        },

        getPostsByCategoryId: function (categoryId) {
            var page = new Pagination(this.offset, this.limit);
            var sort = new Sort(this.orderType, this.orderBy, "category_id");

            return new Post().getPostList(this, {
                category_id: categoryId,
                post_published: true,
                post_enabled: true
            }, page, sort, true, true)
            .then((response) => {
                this.posts = response.body.data;
                this.total = response.body.recordsTotal;
                this.replacePostsMore(this.posts);
            }, (response) => {
                this.posts = [];
            });
        }
    },

    route: {
        data: function (transition) {
            if (!this.isNullOrEmpty(transition.to.query.category_id)) {
                var categoryId = transition.to.query.category_id;
                return this.getPostsByCategoryId(categoryId);
            }
        }
    }
}
</script>
