angular.module('AngularApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $stateProvider
     // Form Tools
        .state('formtools', {
            url: "/form-tools",
            templateUrl: "templates/form-tools/form_tools.html",
            data: {pageTitle: 'Form Tools'},
            controller: "FormToolsController"
        })

}]);

angular.module('AngularApp').controller('FormToolsController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();

        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
}]);