angular.module('AngularApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $stateProvider
    // Form Tools
        .state('datatablesajax', {
            url: "/datatables/ajax.html",
            templateUrl: "templates/datatables/ajax.html",
            data: {pageTitle: 'Advanced Datatables'},
            controller: "AjaxController"
        }) // Advanced Datatables
}]);


angular.module('AngularApp').controller('AjaxController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();

        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
}]);