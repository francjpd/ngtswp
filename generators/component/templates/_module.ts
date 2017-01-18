import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';

import <%= name  %>Component from './<%= name %>.component';

import <%= config  %> from './<%= name %>.config';

let bundle:Array<string> =  ['ui.router'];

const <%= name %>Module:string = 
        angular
            .module('<%= parentModule  %>')
            .component('<%= name %>',<%= name  %>Component.getInstance())
            .config(<%= config  %>);
            .name;

export default <%= name %>Module;

