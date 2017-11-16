angular.module('AngularApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $stateProvider
    // Form Tools
        .state('datatablesmanaged', {
            url: "/datatables/managed.html",
            templateUrl: "templates/datatables/managed.html",
            data: {pageTitle: 'Advanced Datatables'},
            controller: "DatatablesManagedController"
        }) // Advanced Datatables
}]);

angular.module('AngularApp').controller('DatatablesManagedController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        App.initAjax();

        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
}]);