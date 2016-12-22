<style scoped>
    .active {
        background: #F6F6F6;
    }
</style>

<template>
    <header id="header" class="clearfix">
        <div class="container">
            <div class="colgroup">
                <div class="site-name col-mb-12 col-9">
                    <a id="logo" href="">Owen's Bear</a>
                    <p class="description">Programming</p>
                </div>
                <div class="site-search col-3 kit-hidden-tb">
                    <form id="search" method="post" action="" role="search">
                        <label for="search" class="sr-only">Searh Key</label>
                        <input type="text" name="search" class="text" placeholder="Type Keyword">
                        <button type="submit" class="submit">Search</button>
                    </form>
                </div>
                <div class="col-mb-12">
                    <nav id="nav-menu" class="clearfix" role="navigation">
                        <a v-for="category in categories"
                        title="{{ category.category_name_en }}"
                        v-on:click="activeTab($event)"
                        v-link="{
                            name: 'post-list',
                            query: {
                                category_id: category.category_id
                            }
                        }">
                            {{ category.category_name_en }}
                        </a>
                        <a href="https://github.com/inxi-pc" title="Github">GitHub</a>
                        <a href="#" title="About">About</a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Category from 'app_api/category.js'
import { CategoryModel } from 'app_api/category.js'
import Pagination from 'app_api/pagination.js'
import Sort from 'app_api/sort.js'

export default {
    data: function () {
        return {
            categories: [],
            orderType: "desc",
            orderBy: "category_id",
            limit: 5,
            offset: 0,
            total: 0
        };
    },

    ready: function () {
        var page = new Pagination(this.offset, this.limit);
        var sort = new Sort(this.orderType, this.orderBy, "category_id");
        new Category().getCategoryList(this, null, page, sort).then((response) => {
            this.categories = response.body.data;
        }, (response) => {
            console.log(response);
            this.categories = [];
        })
    },

    methods: {
        activeTab: function (event) {
            var actived = $(event.target);
            actived.siblings().each(function (i, e) {
                $(e).removeClass("active");
            })

            actived.addClass("active");
        }
    }
}
</script>
