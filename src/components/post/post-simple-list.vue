<template>
    <section class="widget">
        <h3 class="widget-title">最新文章</h3>
        <ul class="widget-list">
            <li v-for="post in posts">
                <a v-link="{ 
                    name: 'postRoute',
                    params: {
                        postId: post.post_id
                    }
                }">
                    {{ post.post_title }}
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
import postModel from '../../models/post.js'

export default {
    data: function() {
        return {
            posts: []
        }
    },

    props: {
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

    created: function() {
        this.posts = postModel.getPostsNewest(this.order, this.by, this.limit);
    }
}
</script>