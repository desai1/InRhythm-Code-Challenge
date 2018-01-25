// John Papa Style guide to make code readable and improve user experience

(function(){
    'use strict';

    angular
        .module('AlbumFinder')
        .service('iTunesService', function($http,$q) {

            // Aliasing this keyword to make it more readable
            var vm = this;
            vm.getData = getData;

            // APi Call to get data from server
            function getData(value){
                return $http.
                get('https://itunes.apple.com/search?entity=album&term='+value)
                    .then(function(response){
                        return response.data;
                    },function(err){
                        return $q.reject(err.status);
                    })
            }
        });

})();