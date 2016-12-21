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

    },

    components: {
        'post': post,
        'pagination': pagination
    },

    methods: {
        updateList: function(msg) {

        }
    },

    route: {
        data({ to }) {

        }
    }
}
</script>
