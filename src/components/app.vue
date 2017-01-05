<style src="app_asset/css/grid.css"></style>
<style src="app_asset/css/style.css"></style>
<style src="normalize.css/normalize.css"></style>
<style src="highlight.js/styles/dark.css"></style>
<style src="github-markdown-css/github-markdown.css"></style>

<template>
    <div>
        <my-header></my-header>
            <div id="body">
                <div class="container">
                    <div class="colgroup">
                        <div class="col-mb-12 col-8" id="main" role="main">
                            <router-view>
                            </router-view>
                        </div>
                    </div>
                </div>
            </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import header from './common/header.vue'
import footer from './common/footer.vue'

export default {
    components: {
        "my-header": header,
        "my-footer": footer
    },

    ready: function () {
        require.ensure(['highlight.js'], function (require) {
            var hljs = require('highlight.js');
            $(document).on("DOMNodeInserted", function (event) {
                $(event.target).find("pre code").each(function (i, e) {
                    hljs.highlightBlock(e);
                });
            });
        })
    }
}
</script>
