module.exports = function(grunt) {
    grunt.initConfig({
        env: {
            prod: grunt.file.read('app.config.prod.json'),
            dev: grunt.file.read('app.config.dev.json'),
            pathToConfig: './'
        }
    });

    grunt.registerTask('build', function (env) {
        grunt.config.requires('env.pathToConfig');
        grunt.config.requires('env.prod');
        grunt.config.requires('env.dev');
        var pathToConfig = grunt.config('env.pathToConfig');
        var envProd = grunt.config('env.prod');
        var envDev = grunt.config('env.dev');
        
        if (env == 'prod') {
            grunt.file.write(pathToConfig + "app.config.json" , envProd);
        } else {
            grunt.file.write(pathToConfig + "app.config.json" , envDev);
        }
    })
};

