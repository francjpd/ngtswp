///<reference types="angular"/>

interface I<%= name %>{
    isWorking:boolean;
}

interface I<%= name %>ComponentController extends I<%= name %> {
	doSomething():string;
	
}
export default class <%= ctrl  %> implements I<%= name %>ComponentController{
    static $inject :string[] = ['$rootScope'];

    constructor(){
        
    }
    public static getInstance():<%= ctrl  %>{
        return new <%= ctrl  %>();
    }
    $onInit(){
        console.log('Need to modify <%= name %>Controller $rootScope', $rootScope)
    }
}