
var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    initializing() {
        this.log('Welcome to the jungle!');
    }

    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.name // Default to current folder name
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project',
            default: this.description
        }]).then((answers) => {
            this.props = answers;
        });//.bind(this);
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {
                project_name: this.props.name,
                description: this.props.description
            }
        );
        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath('README.md'),
            {
                project_name: this.props.name,
                description: this.props.description
            }
        );
    }

    end() {
        this.log('Project has been generated.');
        this.log('Try:\n$ npm install\n$ pm2 start ecosystem.blabla.dev.config.js');
    }

};
