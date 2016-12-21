<template>
    <div id="comments">
        <h3>已有 2 条评论</h3>
        <ol class="comment-list">
            <comment
                v-for="comment in comments"
                v-bind:comment="comment">
            </comment>
        </ol>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            comments: []
        }
    },

    components: {
        'comment': comment
    },

    created: function() {
        
    }
}
</script>
