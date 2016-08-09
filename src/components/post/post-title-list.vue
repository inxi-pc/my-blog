<template>
    <section class="widget">
        <h3 class="widget-title">最新文章</h3>
        <ul class="widget-list">
            <post
                v-for="post in posts"
                v-bind:post="post"
                v-bind:only-show-title="true">
            </post>
        </ul>
    </section>
</template>

<script>
import postModel from '../../models/post.js'

import post from './post.vue'

export default {
    data: function() {
        return {
            posts: []
        }
    },

    created: function() {
        this.posts = postModel.getPostsByCreatedAt(0);
    },

    components: {
        'post': post
    }
}
</script>