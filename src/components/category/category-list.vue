<template>
   <section class="widget">
        <h3 class="widget-title">分类</h3>
        <ul class="widget-list">
            <category></category>
        </ul>
   </section>
</template>

<script>
import category from './category.vue'

export default {
    components: {
        'category': category
    }
}
</script>