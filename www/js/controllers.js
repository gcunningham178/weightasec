angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller("WeightController", function($scope, $ionicPopup, $state) {
 
    $scope.confirmSubmission = function() {
       var alertPopup = $ionicPopup.alert({
       title: 'Success!',
       template: 'Please view this page to see your changes'
   });
   
    };
    //alert method above
    $scope.addWeight = function(weight, tWeight) {
        
        localStorage.removeItem("weightNow");
        localStorage.removeItem("targetWeight");
        
        localStorage.setItem("weightNow", weight);
        localStorage.setItem("targetWeight", tWeight);

        $state.go('app.viewstats');
    };
 
})

.controller("CalorieController", function($scope, $ionicPopup, $state) {
 
     $scope.confirmSubmission = function() {
       var alertPopup = $ionicPopup.alert({
       title: 'Success!',
       template: 'Please view this page to see your changes'
   });
   
    };
    //alert method above
    $scope.addCalories = function(cCalories, tCalories) {
        
        localStorage.removeItem("caloriesNow");
        localStorage.removeItem("targetCalories");
        
        localStorage.setItem("caloriesNow", cCalories);
        localStorage.setItem("targetCalories", tCalories);
        
        $state.go('app.viewstats');
    };
 
})

.controller("FoodController", function($scope, $ionicPopup, $state) {
      
      $scope.confirmSubmission = function() {
       var alertPopup = $ionicPopup.alert({
       title: 'Success!',
       template: 'Please view this page to see your changes'
   });
   
    };
    //alert method above
    $scope.addFood = function(foodname, tCal, calFat) {
        
        localStorage.removeItem("nameOfFood");
        localStorage.removeItem("calories");
        localStorage.removeItem("fatCal");
      
        
        localStorage.setItem("nameOfFood", foodname);
        localStorage.setItem("calories", tCal);
        localStorage.setItem("fatCal", calFat);
        
        
        $state.go('app.viewstats');
    };
 
})

.controller("ViewController", function($scope) {
    
    $scope.foodName = localStorage.getItem("nameOfFood");
    $scope.tCal = localStorage.getItem("calories");
    $scope.calFat = localStorage.getItem("fatCal");
    $scope.weight = localStorage.getItem("weightNow");
    $scope.tWeight = localStorage.getItem("targetWeight");
    $scope.calories = localStorage.getItem("caloriesNow");
    $scope.tCalories = localStorage.getItem("targetCalories");
    
})

.controller("VController", function($scope) {
    
    //i put this here because it somehow solved a bug that i had so don't delete this please
   
    
});





