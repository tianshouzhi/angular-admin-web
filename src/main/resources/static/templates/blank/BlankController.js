/* Setup blank page controller */
angular.module('AngularApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $stateProvider
    // Blank Page
        .state('blank', {
            url: "/blank",
            templateUrl: "templates/blank/blank.html",
            data: {pageTitle: 'Blank Page Template'},
            controller: "BlankController"
        })

}]);

angular.module('AngularApp').controller('BlankController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {
    $scope.$on('$viewContentLoaded', function() {   
        // initialize core components
        App.initAjax();

        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;
    });
}]);
