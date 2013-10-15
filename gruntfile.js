module.exports = function(grunt) {

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
        js: 'jquery.animateNumber.js',
        jsOutputFile: 'jquery.animateNumber.min.js',
        noreport: true,
        options: {
          externs: 'contrib/externs/jquery-1.9.js',
          compilation_level: 'ADVANCED_OPTIMIZATIONS'
        }
      }
    }
  });

  // Загружаем установленные задачи
  // (офтопик: будь я разработчиком Гранта, выкинул бы этот блок)
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-closure-compiler');

  // Задача по умолчанию (`grunt` в терминале)
  grunt.registerTask('default', ['uglify']);
};