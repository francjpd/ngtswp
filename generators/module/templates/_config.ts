/// <reference types='angular' />
/// <reference types='angular-ui-router'/>

import <%= stateClassName %> from './<%= name %>.state';

export default function <%= className %>($stateProvider: ng.ui.IStateProvider){
        
    $stateProvider.state(<%= stateClassName%>.getInstance());
}