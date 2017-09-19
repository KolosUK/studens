'use strict';
eventsApp.controller('EventController',
function EventController($scope) {

    $scope.event = {
        name: 'Angular Boot Camp',
        date: '19/09/2017',
        time: '10:00',
        location: {
            address: 'Frosty water',
            city: 'Lviv',
            province: 'UA'
        },

        imageURL: '/img/angularjs-logo.png'
    }

}
);