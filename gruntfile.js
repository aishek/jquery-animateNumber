module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            // Следим за файлами, выполняем таски при каждом изменении
            options: {
                // При вызове в терминале `grunt watch`
                // сначала выполнятся все таски и потом начнётся слежение
                atBegin: true
            },
            js: {
                // Все файлы в папке www/js (включая подпапки)
                files: 'jquery.animateNumber.js',
                tasks: ['closure-compiler']
            }
        },
        'closure-compiler': {
            frontend: {
                files: {
                    'jquery.animateNumber.min.js': ['jquery.animateNumber.js']
                },
                options: {
                    compilation_level: 'SIMPLE',
                    debug: true
                }
            }
        }
    });

    // Загружаем установленные задачи
    // (офтопик: будь я разработчиком Гранта, выкинул бы этот блок)
    grunt.loadNpmTasks('grunt-contrib-watch');
    require('google-closure-compiler').grunt(grunt);

    // Задача по умолчанию (`grunt` в терминале)
    grunt.registerTask('default', ['closure-compiler']);
};