import API from 'app_lib/api.js'
import * as Helper from 'app_lib/helper.js'

export default class Auth extends API {
    constructor() {
       super();
       this.apiGateway += '/';
    }

    /**
     *
     * @return Promise
     */
    register(vue, user) {
        var url = this.apiGateway + 'register';

        return vue.$http.post(url, user);
    }

    /**
     *
     * @return Promise
     */
    login(vue, user) {
        var url = this.apiGateway + 'login';

        return vue.$http.post(url, user);
    }

    /**
     * @return
     */
    logout(vue) {
        Auth.destoryAuthorizedToken();
        this.clearPingTask();
    }

    /**
     * RefreshToken
     */
    setPingTask(vue) {
        this.clearPingTask();

        var context = this;
        var user = Auth.getAuthorizedUser();
        setInterval(function () {
            context.ping(vue, user.user_id);
        }, API.getPingInterval());
    }

    clearPingTask() {
        clearInterval();
    }

    ping(vue, userId) {
        var url = this.apiGateway + 'ping/' + userId;

        vue.$http.post(url, null, {
             headers: {
                Authorization: 'bearer ' + API.getAuthorizedToken()
            }
        }).then((response) => {
            Auth.persistAuthorizedToken(response);
        }, (response) => {
            console.log(response);
        })
    }
}
