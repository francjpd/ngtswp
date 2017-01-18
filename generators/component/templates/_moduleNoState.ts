import angular =  require('angular'); // since it has not default export!
import uirouter from 'angular-ui-router';

import <%= name  %>Component from './<%= name %>.component';
import './<%= name  %>.scss';
const <%= name %>Module:string = 
        angular
            .module('<%= name %>',[])
            .component('<%= name %>',<%= name  %>Component.getInstance())
            .name;

export default <%= name %>Module;

