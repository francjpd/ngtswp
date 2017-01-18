'use strict';

var Generator = require('yeoman-generator');

var _ = require('lodash');

module.exports = class extends Generator {

    prompting() {
        return this.prompt([{
                type: 'input',
                name: 'name',
                message: 'Component name '
            },
            {
                type: 'input',
                name: 'parentModule',
                message: 'Parent Module ex: cv.main'
            },
            {
                type: 'confirm',
                name: 'hasState',
                message: 'Has is own State:  '
            },
            {
                type: 'input',
                name: 'parentState',
                message: 'Parent State ex: app'
            }
        ]).then((answers) => {
            this.log('module name ', answers.name);
            this.log('parent module ', answers.parentModule);
            this.log('Has state ', answers.hasState);
            this.log('parent state ', answers.parentState);
            this.params.name = answers.name;
            this.params.parentModule = answers.parentModule;
            this.params.parentState = answers.parentState;
            this.params.hasState = answers.hasState;
        })
    }

    initializing() {
        this.params = {};
    }

    writing() {

        this.fs.copyTpl(
            this.templatePath('_scss.scss'),
            this.destinationPath(this.params.name + '.scss'), {
                name: this.params.name
            }
        )

        this.fs.copyTpl(
            this.templatePath('_component.ts'),
            this.destinationPath(this.params.name + '.component.ts'), {
                name: this.params.name,
                className: _.upperFirst(this.params.name) + 'Component',
                ctrl: _.upperFirst(this.params.name) + 'Ctrl'
            }
        );


        this.fs.copyTpl(
            this.templatePath('_controller.ts'),
            this.destinationPath(this.params.name + '.controller.ts'), {
                name: this.params.name,
                ctrl: _.upperFirst(this.params.name) + 'Ctrl'
            }
        );



        if (this.params.hasState) {
            this.fs.copyTpl(
                this.templatePath('_module.ts'),
                this.destinationPath(this.params.name + '.module.ts'), {
                    name: this.params.name,
                    parentModule: this.params.parentModule,
                    config: _.upperFirst(this.params.name) + 'Config',

                }
            );

            this.fs.copyTpl(
                this.templatePath('_config.ts'),
                this.destinationPath(this.params.name + '.config.ts'), {
                    name: this.params.name,
                    className: _.upperFirst(this.params.name) + 'Config',
                    stateClassName: _.upperFirst(this.params.name) + 'State',


                }
            );

            this.fs.copyTpl(
                this.templatePath('_state.ts'),
                this.destinationPath(this.params.name + '.state.ts'), {
                    name: this.params.name,
                    parentState: this.params.parentState,
                    upperFirstName: _.upperFirst(this.params.name)
                }
            );
        } else {
            this.fs.copyTpl(
                this.templatePath('_moduleNoState.ts'),
                this.destinationPath(this.params.name + '.module.ts'), {
                    name: this.params.name,
                    parentModule: this.params.parentModule,
                    config: _.upperFirst(this.params.name) + 'Config',

                }
            );
        }


        this.fs.copyTpl(
            this.templatePath('_template.html'),
            this.destinationPath(this.params.name + '.template.html'), {
                name: this.params.name
            }
        );

    }


};