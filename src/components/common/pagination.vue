<template>
    <div>
        <ol class="page-navigator" id="pageIndicatorList">
            <li v-for="i in pageTotal" v-bind:class="{ 'current': i == pageNumber }">
                <button v-on:click="activePage(i, $event)">{{ i + 1 }}</button>
            </li>
            <li v-if="checkIfRenderNextButton()">
                <button href="javascript:;" class="next" v-on:click="activeNextPage(pageNumber + 1)">Next »</button>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            'nextButtonPosition': 0,
        }
    },

    props: {
        limit: {
            type: Number,
            required: true
        },
        offset: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }
    },

    computed: {
        pageNumber: function () {
            return Math.ceil(this.offset / this.limit);
        },

        pageTotal: function () {
            return Math.ceil(this.total / this.limit);
        },

        pageLength: function () {
            return this.limit;
        }
    },

    methods: {
        checkIfRenderNextButton: function () {
            return this.pageTotal > this.nextButtonPosition;
        },

        checkIsLast: function (i) {
            return i > this.pageTotal - 1;
        },

        activePage: function (i, event) {
            var active = $(event.target).parent();
            active.siblings().removeClass("current");
            active.addClass('current');

            this.sendPaginationMsg(i);
        },

        activeNextPage: function (i) {
            if (this.checkIsLast(i)) {
                alert("pagination overflow!");

                return;
            }
            var root = $(this.$el);
            var active = root.find("#pageIndicatorList").children("li").eq(i);
            active.siblings().removeClass('current');
            active.addClass('current');

            this.sendPaginationMsg(i);
        },

        sendPaginationMsg: function(i) {
            this.offset = i * this.limit;
            var msg = {
                'offset': this.offset,
            };

            this.$dispatch('pagination', msg);
        }
    }
}
</script>
