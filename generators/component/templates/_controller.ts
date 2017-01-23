///<reference types="angular"/>


interface I<%= name %>ComponentController  extends ng.IComponentController {
	doSomething():string;
	
}
export default class <%= ctrl  %> implements I<%= name %>ComponentController{
    static $inject :string[] = ['$rootScope'];

    constructor(private $rootScope:ng.IScope){
        
    }

    $onInit(){
        console.log('Need to modify <%= name %>Controller $rootScope', this.$rootScope)
    }

    doSomething():string{
        return 'something';
    }
}