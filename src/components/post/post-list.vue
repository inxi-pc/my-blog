<template>
    <div>
        <h3 class="archive-title"></h3>
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

    },

    ready: function() {

    },

    components: {
        'post': post,
        'pagination': pagination
    },

    methods: {

    },

    route: {
        data({ to }) {

        }
    }
}
</script>
