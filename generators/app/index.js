'use strict';
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        // Have Yeoman greet the user.
        this.log(yosay(
            "Generator for kellyirc's eslint config!"
        ));
    },

    writing: function () {
        this.fs.copy(
            this.templatePath('.eslintrc'),
            this.destinationPath('.eslintrc')
        );
    },

    install: function () {
        this.npmInstall(['eslint-config-kellyirc', 'babel-eslint@4'], { saveDev: true });
    }
});
