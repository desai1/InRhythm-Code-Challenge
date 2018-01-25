(function(){
    'use strict';

    angular
        .module('AlbumFinder')
        .controller('AlbumsController',function($scope,iTunesService){

            var mainVm = this;
            mainVm.searchPhrase = '';
            mainVm.heading = false;

            mainVm.isData = function(){

                iTunesService
                    .getData(mainVm.searchPhrase)
                    .then(function(data){
                        mainVm.myData = data;
                        mainVm.heading = true;
                        console.log(data);
                        return data;
                    })
                    .catch(function(error){
                        console.log(error);
                    });
            }
        });

})();