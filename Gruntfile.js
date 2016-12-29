module.exports = function(grunt) {
    grunt.initConfig({
        env: {
            prod: grunt.file.readJSON('app.config.prod.json'),
            dev: grunt.file.readJSON('app.config.dev.json'),
            pathToConfig: './'
        }
    });

    grunt.registerTask('default', ['build:dev:local']);

    grunt.registerTask('build', function (env, region) {
        grunt.config.requires('env.pathToConfig');
        grunt.config.requires('env.prod');
        grunt.config.requires('env.dev');
        var pathToConfig = grunt.config('env.pathToConfig');
        var envProd = grunt.config('env.prod');
        var envDev = grunt.config('env.dev');

        var config;
        if (env == 'prod') {
            config = envProd;
        } else {
            config = envDev;
        }

        if (region == 'remote') {
            config.apiGateway = config.remoteApiGateway;
        } else {
            config.apiGateway = config.localApiGateway;
        }

        grunt.file.write(pathToConfig + "app.config.json" , JSON.stringify(config, null, '\t'));
    });
};
