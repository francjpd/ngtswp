import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';

import <%= name  %>Component from './<%= name %>.component';

import <%= config  %> from './<%= name %>.config';

let bundle:Array<string> =  ['ui.router'];

const <%= name %>Module:ng.IModule = 
        angular
            .module('<%= parentModule  %>.<%= name  %>',bundle)
            .component('<%= name %>',<%= name  %>Component.getInstance())
            .config(<%= config  %>);

export default <%= name %>Module;

