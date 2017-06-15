angular.module('userProfiles')
.service('friendService', function( $http ) {


    this.login = function( user ) {
      /* FIX ME */
      return $http.post('http://localhost:3000/api/login', user);
    };

    this.getFriends = function() {
    	/* FIX ME */
      return $http.get('http://localhost:3000/api/profiles');
    };

});
