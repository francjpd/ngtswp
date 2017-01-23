/// <reference types="angular"/>

import angular = require('angular');

import <%= ctrl %> from './<%= name %>.controller';

let template = require('ngtemplate!html!./<%= name %>.template.html');

class <%=name %>ComponentBindings{
    private static instance:any;
    isWorking:string;

    constructor(){
        this.isWorking = '<';
    }

    static getInstance(): <%= name %>ComponentBinding{
        if(!angular.isDefined(this.instance)){
            this.instance = new <%= name %>ComponentBinding();
        }
        return this.instance;
    }
}

export default class <%= className %> implements ng.IComponentOptions{

    static NAME:string = '<%= name %>';

    static getInstance():<%= className %>{
        return new <%= className %>();
    }
    
    templateUrl:any;
    bindings:any;
    controller:any;

    constructor(){
        this.templateUrl= template;
        this.controller= <%= ctrl %>;
        this.bindings = <%=name %>ComponentBindings.getInstance();
    }


}