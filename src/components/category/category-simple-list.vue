<template>
   <section class="widget">
        <h3 class="widget-title">Category</h3>
        <ul class="widget-list">
            <li v-for="category in categories">
                <a href="">{{ category.category_name }}</a>
                ({{ category.post_count }})
            </li>
        </ul>
   </section>
</template>

<script>
export default {
    data: function() {
        return {
            'categories': []
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
            default: "category_id",
            required: true
        },
        limit: {
            type: Number,
            default: 0,
            required: true

        }
    },

    created: function() {

    }
}
</script>
