import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';

import <%= name  %>Component from './<%= name %>.component';

const <%= name %>Module:string = 
        angular
            .module('<%= parentModule  %>')
            .component('<%= name %>',<%= name  %>Component.getInstance())
            .name;

export default <%= name %>Module;

