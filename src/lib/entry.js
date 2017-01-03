import Vue from 'vue'
import VueResource from 'vue-resource'

import * as Helper from './helper.js'
import API from './api.js'

Vue.use(VueResource)
Vue.http.interceptors.push((request, next) => {
    request.credentials = true;

    next((response) => {
        API.responseHandler(response);
    });
})

//---------------- export function start -----------------//

function decodeQueryParams() {
    var params = [], hash;
    var url = window.location.href;
    if (url.indexOf('?') != -1) {
        var hashes = url.slice(url.indexOf('?') + 1).split('&');
        for (var k in hashes) {
            if (hashes[k].search("=") != -1) {
                hash = hashes[k].split('=');
                params[hash[0]] = hash[1];
            }
        }
    }

    return params;
}

function replacePostsMore(posts) {
    if (!Helper.isNullOrEmpty(posts)) {
        for (var k in posts) {
            var post = posts[k];
            if (isContainMoreAonnation(post)) {
                replacePostMoreByAnnotation(post);
            } else if(isContainHTag(post)) {
                replacePostMoreByHTag(post);
            } else if (isContainPTag(post)) {
                replacePostMoreByPTag(post);
            } else {
                // do nothing
            }
        }
    }
}

function redirect(url) {
    window.location.href = url;
}

function refreshPage() {
    window.location.reload();
}

function redirectToLoginPage() {
    var href = '/login.html';
    redirect(href);
}
//---------------- export function end -----------------//

//---------------- inner function start -----------------//

function isContainMoreAonnation(post) {
    var pattern = "<!--more-->";
    var index = post.post_content.indexOf(pattern);

    return index != -1;
}

function isContainHTag(post) {
    var tag = $(post.post_content).find(":header").eq(2);

    return tag.length >= 1;
}

function isContainPTag(post) {
    var tag = $(post.post_content).find("p").eq(8);

    return tag.length >= 1;
}

function replacePostMoreByAnnotation(post) {
    var pattern = "<!--more-->";
    var index = post.post_content.indexOf(pattern);
    if (index != -1) {
        post.post_content = post.post_content.substr(0, index + pattern.length - 1);
    }
}

function replacePostMoreByHTag(post) {
    var doc = $(post.post_content);
    var removed = $(":header:eq(2)", doc).nextAll().remove();
    post.post_content = doc.html();
}

function replacePostMoreByPTag(post) {
    var doc = $(post.post_content);
    var removed = $("p:eq(8)", doc).nextAll().remove();
    post.post_content = doc.html();
}

//---------------- inner function end -----------------//

var methods = {};
for (var i in Helper) {
    methods[i] = Helper[i];
}
methods['decodeQueryParams'] = decodeQueryParams;
methods['replacePostsMore'] = replacePostsMore;
methods['refreshPage'] = refreshPage;
methods['redirect'] = redirect;
methods['redirectToLoginPage'] = redirectToLoginPage;

Vue.mixin({
    methods: methods
})

export default Vue.extend({})
