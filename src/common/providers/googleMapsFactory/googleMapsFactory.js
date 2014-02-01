angular.module('googleMapsFactory', [])
    .provider('googleMaps', function () {

      var useSensor = false;
      var apiKey = null;
      var useLanguage = null;
      var useLibrary = null;
      var useVersion = null;

      //I'm adding all the configs to this object, I hope this is alright, then pass it inside the constructor function.
      var options = {};

      // Public Config API's
      this.useSensor = function (sensor) {
        if (sensor) {
          options.sensor = sensor;
          return this;
        }

        return useSensor;
      };

      this.apiKey = function (key) {
        if (key) {
          options.key = key;
          return this;
        }

        return apiKey;
      };

      this.useLanguage = function (language) {
        if (language) {
          options.language = language;
          return this;
        }

        return useLanguage;
      };

      this.useLibrary = function (libraries) {
        if (libraries) {
          options.libraries = libraries;
          return this;
        }

        return useLibrary;
      };

      this.useVersion = function (v) {
        if (v) {
          options.v = v;
          return this;
        }

        return useVersion;
      };

      // Private Constructor
      function GoogleMapsService($q, $window) {


        makeMap = function () {
          //Default map url.
          var url = 'https://maps.googleapis.com/maps/api/js?';

          var concatURL = function () {
            angular.forEach(options, function (value, key) {
              url += ('&' + key + '=' + value);
            });
          };

          if (options && ('sensor' in options)) {
            //Check to see if we have a sensor value, maybe the user forgot ... stranger things have happened.
            concatURL();
          } else if (options) {
            //If there is no sensor value, add a default false one.
            options.sensor = false;
            concatURL();
          } else {
            //if no config options
            url += '?sensor=false&v=3.14';
          }
          return url;
        };

        this.runMap = function () {

          var deferred = $q.defer();

          var randomizedFunctionName = 'onGoogleMapsReady' + Math.round(Math.random() * 1000);
          window[randomizedFunctionName] = function () {
            window[randomizedFunctionName] = null;
            // Resolve the promise for googleMaps
            deferred.resolve($window.google.maps);
          };

          if (typeof $window.google !== 'undefined' && typeof $window.google.maps !== 'undefined') {
            // Early-resolve the promise for googleMaps
            deferred.resolve($window.google.maps);
            return deferred.promise;
          }
          //TODO: We need to add the map only once, for some reason the provider runs twice and ads the map again.
          var script = document.createElement('script');
          script.type = 'text/javascript';
          // VVV hmmmm, not good, but let's go with it.
          script.src = makeMap() + '&callback=' + randomizedFunctionName;
          document.body.appendChild(script);
          // Return a promise for googleMaps
          return deferred.promise;
        };

      }

      //Provider instantiator
      this.$get = function ($q, $window) {
        return new GoogleMapsService($q, $window);
      };

    });



















