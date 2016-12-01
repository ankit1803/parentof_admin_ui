/**
 * Created by ankit on 11/8/15.
 */

function RestangularConfig (RestangularProvider){
    //RestangularProvider.setBaseUrl('http://staging:8081/api/v1');
    //RestangularProvider.setBaseUrl('http://localhost:8081/starhealth_backend');
    RestangularProvider.setBaseUrl('http://localhost:8080/backend');


    //RestangularProvider.setExtraFields(['name']);
    //RestangularProvider.setResponseExtractor(function(response, operation) {
    //    return response;
    //});


    RestangularProvider.setDefaultHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 198u2190832190831432742'
    });

    RestangularProvider.setDefaultHttpFields({
        cache: false,
        withCredentials: true,
        headers: {common: {
            "Content-Type": "application/json",
            Authorization: 'Bearer 198u2190832190831432742'
        }}
    });
    RestangularProvider.setMethodOverriders(["put", "patch"]);

    // In this case we are mapping the id of each element to the _id field.
    // We also change the Restangular route.
    // The default value for parentResource remains the same.
    RestangularProvider.setRestangularFields({
        id: "_id",
        route: "restangularRoute",
        selfLink: "self.href"
    });

    //RestangularProvider.setRequestSuffix('.json');

    // Use Request interceptor
    //RestangularProvider.addRequestInterceptor(function(element, operation, route, url) {
    //    delete element.name;
    //    return element;
    //});


    // ..or use the full request interceptor, setRequestInterceptor's more powerful brother!
    RestangularProvider.addFullRequestInterceptor(function(element, operation, route, url, headers, params, httpConfig) {
        // if(element != null){
        //     delete element.name;
        // }

        return {
            element: element,
            params: _.extend(params, {single: true}),
            headers: headers,
            httpConfig: httpConfig
        };
    });


    RestangularProvider.addElementTransformer('agent', true, function(agent) {
        // This will add a method called login that will do a POST to the path login
        // signature is (name, operation, path, params, headers, elementToPost)

        agent.addRestangularMethod('login', 'post', 'login');

        return agent;
    });

};