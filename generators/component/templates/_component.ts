/// <reference types="angular"/>

import <%= ctrl %> from './<%= name %>.controller';

let template = require('ngtemplate!html!./<%= name %>.template.html');

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
    }


}