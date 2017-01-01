/// <reference types="angular"/>
/// <reference types="angular-ui-router"/>

import <%= name %>Component from './<%= name %>.component';

export default class <%= upperFirstName %> implements angular.ui.IState {

    name:string;
    component:string;
    template:string;
    parent:string;
    url:string;

    constructor(){
        this.name = '<%= name %>';
        this.url = '<%= name %>';
        this.component = <%= name %>Component.NAME;
        this.parent = 'app';
    }
    static getInstance():angular.ui.IState{
        return new <%= upperFirstName %>();
    }

} 