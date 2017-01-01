///<reference types="angular"/>


export default class <%= ctrl  %> implements ng.IComponentController{
    constructor(){
        
    }
    public static getInstance():<%= ctrl  %>{
        return new <%= ctrl  %>();
    }
}