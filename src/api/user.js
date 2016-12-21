import API from 'app_lib/api.js'
import Auth from 'app_api/auth.js'
import * as Helper from 'app_lib/helper.js'

class UserModel {
    constructor() {
        this.user_id = null;
        this.user_name = null;
        this.user_telephone = null;
        this.user_email = null;
        this.user_password = null;
        this.user_created_at = null;
        this.user_updated_at = null;
    }
}

export { UserModel };

export default class User extends API {
    constructor() {
       super();
       this.apiGateway += '/users/';
       this.listApiGateway = this.apiGateway + 'list';
    }

    /**
     * 
     * @return Promise
     */
    createUser(vue, user) {
        return vue.$http.user(this.apiGateway, user, {
            headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        });    
    }

    /**
     * 
     * @return Promise
     */
    updateUser(vue, userId, user) {
        var url = this.apiGateway + userId;
        user.user_id = null;
        user.user_name = null;
        user.user_created_at = null;
        user.user_updated_at = null;
        user.user_enabled = null;

        return vue.$http.put(url, user, {
            headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        });
    }
    
    /**
     * 
     * @return Promise
     */
    deleteUser(vue, userId) {
        var url = this.apiGateway + userId;

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
    getUserById(vue, userId) {
        var url = this.apiGateway + userId;

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
    getUsersByIds(vue, userIds) {
        return this.getUsers(vue, userIds);
    }

    /**
     * 
     * @return Promise
     */
    getUsersByCondition(vue, conditions) {
        return this.getUsers(vue, conditions);
    }

    /**
     * 
     * @return Promise
     */
    getUserList(vue, conditions, page, order) {
        var params = API.mergeParams(conditions, page, order);
        var url = this.listApiGateway;

        return vue.$http.get(url, {
            params: params,
            headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        });
    }

    /**
     * 
     * @return Promise
     */
    getUsers(vue, conditions) {
        var params = API.mergeParams(conditions);

        return vue.$http.get(this.apiGateway, {
            params: params,
            headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        });
    }
}