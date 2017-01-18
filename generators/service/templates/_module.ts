import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';

import <%= name  %>Component from './<%= name %>.component';

let bundle:Array<string> =  ['ui.router'];

const <%= name %>Module:ng.IModule = 
        angular
            .module('<%= parentModule  %>')
            .component('<%= name %>',<%= name  %>Component.getInstance());

export default <%= name %>Module;

