<template>
    <div>
        <div v-if="!$loadingRouteData">
            <article class="post">
                <h2 class="post-title">
                    {{ post.post_title }}
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
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import Post from 'app_api/post.js'
import { PostModel } from 'app_api/post.js'

import * as Helper from 'app_lib/helper.js'

export default {
    data: function() {
        return {
            'post': {}
        }
    },

    methods: {
        getPostById: function (postId) {
            return new Post().getPostById(this, postId, true, true)
            .then((response) => {
                this.post = response.body;
            }, (response) => {
                this.post = {};
            });
        }
    },

    route: {
        data: function (transition) {
            if (!Helper.isNullOrEmpty(transition.to.params.postId)) {
                var postId = transition.to.params.postId;
                return this.getPostById(postId);
            }
        }
    }
}
</script>
