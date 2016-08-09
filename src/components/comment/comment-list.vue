<template>
    <section class="widget">
        <h3 class="widget-title">最新评论</h3>
        <ul class="widget-list">
            <comment></comment>
        </ul>
    </section>
</template>

<script>
import comment from './comment.vue'

export default {
    components: {
        'comment': comment
    }
}
</script>