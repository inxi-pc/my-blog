<template>
    <div id="comments">
        <h3></h3>
        <ol class="comment-list">
            <comment v-for="comment in comments">
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
    }
}
</script>
