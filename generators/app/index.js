'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
      }

      prompting() {
        return this.prompt([{
          type    : 'input',
          name    : 'name',
          message : 'Project name',
          default : 'lab'
        }, {
          type    : 'list',
          name    : 'type',
          message : 'Wersja',
          choices: [
              {
                  name: 'Ze skryptami bash',
                  value: 'Linux'
              },
              {
                name: 'Ze skryptami .bat',
                value: 'Windows'
            }
          ]
        }]).then((answers) => {
          this.log('app name', answers.name);
          this.log('type ', answers.type);
          this._copy(answers.name, answers.type);
        });
      }
    
      _copy(name, type) {
        this.fs.copyTpl(
          this.templatePath(type + '/**'),
          this.destinationPath(name)
        );
      }
  };