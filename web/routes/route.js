/**
 * Created by ankit on 11/8/15.
 */

function RouteHelper($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/auth");
    //
    // Now set up the states
    $stateProvider
        .state('auth', {
            url: "/auth",
            views: {
                "main": {templateUrl: "modules/auth/views/login.html"}
            }
        })
        .state('admin', {
            url: "/admin",
            views: {
                "main": {templateUrl: "modules/admin/views/base_home.html"}
            }
        })
        .state('admin.application', {
            url: "/application",
            views: {
                "dashboard": {templateUrl: "modules/application/views/application.html"}
            }
        })
        .state('admin.user', {
            url: "/user",
            views: {
                "dashboard": {templateUrl: "modules/user/views/user.html"}
            }
        })
};
