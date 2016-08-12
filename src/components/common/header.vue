<template>
    <header id="header" class="clearfix">
        <div class="container">
            <div class="colgroup">
                <div class="site-name col-mb-12 col-9">
                    <a id="logo" href="">Bear's Home</a>
                    <p class="description">Artist</p>
                </div>
                <div class="site-search col-3 kit-hidden-tb">
                    <form id="search" method="post" action="" role="search">
                        <label for="s" class="sr-only">搜索关键字</label>
                        <input type="text" name="s" class="text" placeholder="输入关键字搜索">
                        <button type="submit" class="submit">搜索</button>
                    </form>
                </div>
                <div class="col-mb-12">
                    <nav id="nav-menu" class="clearfix" role="navigation">
                        <a v-link="{ 
                            path: '/', 
                            exact: true,
                            activeClass: 'current' 
                        }">
                            首页
                        </a>
                        <a title="Rust" v-link="{ 
                            name: 'categoryPostListRoute', 
                            params: {
                                'categoryId': 1, 
                            },
                            query: {
                                order: 'DESC',
                                by: 'post_created_at',
                                limit: '0',
                            },
                            exact: true,
                            activeClass: 'current'
                        }">
                            Rust
                        </a>
                        <a title="Javascript" v-link="{ 
                            name: 'categoryPostListRoute', 
                            params: {
                                'categoryId': 2, 
                            },
                            query: {
                                order: 'DESC',
                                by: 'post_created_at',
                                limit: '0',
                            },
                            exact: true,
                            activeClass: 'current'
                        }">
                            Javascript
                        </a>
                        <a title="Java" v-link="{ 
                            name: 'categoryPostListRoute', 
                            params: {
                                'categoryId': 3, 
                            },
                            query: {
                                order: 'DESC',
                                by: 'post_created_at',
                                limit: '0',
                            },
                            exact: true,
                            activeClass: 'current'
                        }">
                            Java
                        </a>
                        <a title="Linux" v-link="{ 
                            name: 'categoryPostListRoute', 
                            params: {
                                'categoryId': 4, 
                            },
                            query: {
                                order: 'DESC',
                                by: 'post_created_at',
                                limit: '0',
                            },
                            exact: true,
                            activeClass: 'current'
                        }">
                            Linux
                        </a>
                        <a href="https://github.com/inxi-pc" title="Github">GitHub</a>
                        <a href="" title="About">关于</a>
                    </nav>
                </div>
            </div><!-- end .colgroup -->
        </div>
    </header><!-- end #header -->
</template>

<script>
export default {

}
</script>

