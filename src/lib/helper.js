import config from "app_config/app.config.json"

function isNullOrEmpty(value) {
    // null or undefined
    if (value == undefined || value == null) {
        return true;
    }

    // empty
    if (Object.prototype.toString.call(value) == '[object String]') {
        if (value.length <= 0) {
            return true;
        }
    }

    return false;
}

function getConfig(name) {
    return config[name];
}

function gotoModule(moduleName) {
    window.location.href = '/' + moduleName + '.html';
}

function refreshPage() {
    window.location.reload();
}

export {
    isNullOrEmpty,
    getConfig,
    gotoModule,
    refreshPage
}
