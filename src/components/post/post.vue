<template>
    <li v-if="onlyShowTitle"><a href="">{{ post.post_title }}</a></li>
    <article class="post" v-else>
        <h2 class="post-title"><a href="">{{ post.post_title }}</a></h2>
        <ul class="post-meta">
            <li>作者：<a href="">{{ post.post_author }}</a></li>
            <li>时间：{{ post.post_created_at }}</li>
            <li>分类：<a href="">{{ post.post_category }}</a></li>
            <li><a href="">2 条评论</a></li>
        </ul>
        <div class="post-content">
            {{ post.post_content}}
            <p class="more"><a href="" title="{{ post.post_title}}">- 阅读剩余部分 -</a></p>
        </div>
    </article>
</template>

<script>
export default {
    props: {
        post: Object,
        onlyShowTitle: {
            type: Boolean,
        }
    }
}
</script>