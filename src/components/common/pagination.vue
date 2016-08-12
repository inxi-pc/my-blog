<template>
    <ol class="page-navigator">
        <li v-for="i in total" v-bind:class="{'current': isCurrent(i)}">
            <a v-on:click="sendPaginationMsg(i)">{{ i + 1 }}</a>
        </li>
        <li v-if="isRenderNextButton()">
            <a class="next" v-on:click="sendPaginationMsg(current + 1)">后一页 »</a>
        </li>
    </ol>
</template>

<script>
export default {
    data: function() {
        return {
            'maxPages': 4
        }
    },

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
            return this.current == index;   
        },

        isRenderNextButton: function () {
            return this.total > this.maxPages;
        },

        sendPaginationMsg: function(index) {
            if (index > this.total - 1) {
                alert("pagination overflow!");
            } else {
                var msg = {
                    'current': index,
                    'total': this.total
                };

                this.$dispatch('pagination', msg);
            }
        }
    }
}
</script>