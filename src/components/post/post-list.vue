<template>
    <post 
        v-for="post in posts"
        v-bind:post="post">
    </post>
    <pagination
        v-bind:current="current"
        v-bind:total="total">
    </pagination>
</template>

<script>
import postModel from '../../models/post.js'

import post from './post.vue'
import pagination from '../pagination.vue'

export default {
    data: function () {
        return {
            current: 1,
            total: 1,
            posts: []
        }
    },

    created: function() {
        this.posts = postModel.getPostsByCreatedAt(0);
    },

    components: {
        'post': post,
        'pagination': pagination
    }  
}
</script>


