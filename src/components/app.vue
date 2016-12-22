<style src="app_asset/css/dark.css"></style>
<style src="app_asset/css/grid.css"></style>
<style src="app_asset/css/normalize.css"></style>
<style src="app_asset/css/style.css"></style>

<template>
    <div>
        <my-header></my-header>
            <div id="body">
                <div class="container">
                    <div class="colgroup">
                        <div class="col-mb-12 col-8" id="main" role="main">
                            <router-view
                                v-bind:order="DESC"
                                v-bind:by="post_created_at"
                                v-bind:limit=0>
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
    }
}
</script>
