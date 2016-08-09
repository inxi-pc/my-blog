<template>
    <ol class="page-navigator">
        <li v-for="i in total - 1" v-bind:class="{'current': isCurrent(i)}">
            <a href="">{{ i + 1 }}</a>
        </li>
        <li v-if="isRenderNextButton()"><a class="next" href="">后一页 »</a></li>
    </ol>
</template>

<script>
export default {
    props: {
        current: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },

    methods: {
        isCurrent: function (index) {
            return this.current == index + 1;   
        },

        isRenderNextButton: function () {
            return this.total > 5;
        }
    }
}
</script>