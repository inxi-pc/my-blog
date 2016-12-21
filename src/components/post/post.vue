<template>
    <div>
        <article class="post">
            <h2 class="post-title">
                <a v-link="{
                    name: 'postRoute',
                    params: {
                        postId: post.post_id
                    }
                }">
                    {{ post.post_title }}
                </a>
            </h2>
            <ul class="post-meta">
                <li>作者：
                    <a v-link="{
                        name: 'userPostListRoute',
                        params: {
                            userId: post.user_id
                        },
                        query: {
                            order: 'DESC',
                            by: 'created_at',
                            limit: 0
                        }
                    }">
                        {{ post.user_name }}
                    </a>
                </li>
                <li>时间：{{ post.post_created_at }}</li>
                <li>分类：
                    <a v-link="{
                        name: 'categoryPostListRoute',
                        params: {
                            categoryId: post.category_id
                        },
                        query: {
                            order: 'DESC',
                            by: 'created_at',
                            limit: 0
                        }
                    }">
                        {{ post.category_name }}
                    </a>
                </li>
                <li>
                    <a v-link="{
                        name: 'postRoute',
                        params: {
                            postId: post.post_id
                        }
                    }">
                        2 条评论
                    </a>
                </li>
            </ul>
            <div class="post-content">
                {{ post.post_content}}
                <p class="more" v-if="thumb">
                    <a v-link="{
                        name: 'postRoute',
                        params: {
                            postId: post.post_id
                        }
                    }">
                        - 阅读剩余部分 -
                    </a>
                </p>
            </div>
        </article>
    </div>
</template>

<script>

export default {
    data: function() {
        return {
            'post': {},
            'thumb': true
        }
    },

    components: {

    },

    computed: {
        post: function() {

        }
    },

    route: {
        data ({ to }) {

        }
    }
}
</script>
