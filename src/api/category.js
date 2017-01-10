import API from 'app_lib/api.js'
import Auth from 'app_api/auth.js'
import * as Helper from 'app_lib/helper.js'

class CategoryModel {
    constructor() {
        // @primary key
        this.category_id = null;
        this.category_parent_id = null;
        this.category_root_id = null;
        this.category_name_en = null;
        this.category_name_cn = null;
        this.category_level = null;
        this.category_created_at = null;
        this.category_updated_at = null;
        this.category_enabled = null;
    }
}

export { CategoryModel }

export default class Category extends API {
    constructor() {
        super();
        this.apiGateway += "/categories/";
        this.listApiGateway = this.apiGateway + 'list';
    }

    /**
     *
     * @return Promise
     */
    createCategory(vue, category) {
        return vue.$http.post(this.apiGateway, category, {
            headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        });
    }

    /**
     *
     * @return Promise
     */
    deleteCategory(vue, categoryId) {
        var url = this.apiGateway + categoryId;

        return vue.$http.delete(url, {
            headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        });
    }

    /**
     *
     * @return Promise
     */
    updateCategory(vue, categoryId, category) {
        var url = this.apiGateway + categoryId;

        var update = new CategoryModel();
        API.clone(update, category);
        update.category_id = null;
        update.category_parent_id = null;
        update.category_root_id = null;
        update.category_level = null;
        update.category_created_at = null;
        update.category_updated_at = null;
        update.category_enabled = null;
        update.children = null;

        return vue.$http.put(url, update, {
            headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        });
    }
    /**
     *
     * @return Promise
     */
    getCategoryById(vue, categoryId) {
        var url = this.apiGateway + categoryId;

        return vue.$http.get(url, {
            headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        });
    }

    /**
     *
     * @return Promise
     */
    getCategoriesByIds(vue, categoryIds) {
        return this.getCategories(categoryIds, {
            headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        });
    }

    /**
     *
     * @return Promise
     */
    getCategoriesByCondition(vue, conditions) {
        return this.getCategories(vue, conditions, {
            headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        });
    }

    /**
     * @return Promise
     */
    getCategoryList(vue, conditions, page, sort) {
        var params = API.mergeParams(conditions, page, sort);
        var url = this.listApiGateway;

        return  vue.$http.get(url, {
            params: params,
            headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        });
    }

    /**
     * @return Promise
     */
    getCategories(vue, conditions) {
        var params = API.mergeParams(conditions);

        return vue.$http.get(this.apiGateway, {
            params: params,
            headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        });
    }

    /**
     * @return Promise
     */
    getCategoryListTree(vue, conditions, page, sort) {
        var params = API.mergeParams(conditions, page, sort);
        params.add({'tree_enabled': true});
        var url = this.listApiGateway;

        return  vue.$http.get(url, {
            params: params,
            headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        });
    }

    /**
     * @return Promise
     */
    getCategoriesTree(vue, conditions, page, sort) {
        var params = API.mergeParams(conditions);
        params.add({'tree_enabled': true});

        return vue.$http.get(this.apiGateway, {
            params: params,
            headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        });
    }
}
