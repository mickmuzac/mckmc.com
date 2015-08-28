var app = angular.module("mckmc", []);

var docs = {
  "primary": [
    {
      "name": "dashboard",
      "title": "xAPI Dashboard"
    },
    {
      "name": "disco",
      "title": "Disco Pet Revolution"
    },
    {
      "name": "wkndmvp",
      "title": "WkndMVP"
    }
  ],
  "team": [
    {
      "name": "3dr",
      "title": "3D Repository"
    },
    {
      "name": "sandbox",
      "title": "VW Sandbox"
    }
  ]
};

$('#menu.mobile')

app.controller('ListController', ['$scope', '$http', '$sce', function($scope, $http, $sce){

  $scope.docs = docs;
  $scope.contents = $sce.trustAsHtml('Hello my friend!');
  $scope.menuClass = "";
  $scope.mobile = isMobile.any ? "mobile" : "";

  var newVisitor = !localStorage || !localStorage.alreadyVisited;
  var doneTyping = false;

  hideMenu();

  $scope.loadDoc = function(doc, prefix){
    $http.get(prefix + doc + '.md').then(updateContents);
    hideMenu();
  }

  $scope.toggleMenu = function(){
    if($scope.showMenu) showMenu();
    else hideMenu();
  }

  function hideMenu(){
    if(isMobile.any) $scope.menuClass = "mobile out";
    $scope.showMenu = true;
  }
  function showMenu(){
    if(isMobile.any) $scope.menuClass = "mobile in";
    $scope.showMenu = false;
  }

  function updateContents(res){
    console.log("Got it!", res);
    $scope.contents = $sce.trustAsHtml(marked(res.data));

    if(newVisitor){
      window.setTimeout(function(){
        $("#contents .h1").typed({
            strings: ["Welcome to the place I call... ^1200 home."],
            typeSpeed: 60,
            callback: function(){ doneTyping = true; }
        });
      }, 250);
    }
  }

  $scope.loadDoc("me", "docs/");

  if(isMobile.any){
    var lastX = 0, threshold = 0.12 * $(window).width();
    var touchMove = function(e) {
        var touch = e.touches[0];
        if($scope.showMenu && touch.pageX - lastX > threshold ||
           !$scope.showMenu && lastX - touch.pageX > threshold){

           lastX = touch.pageX;
           $scope.toggleMenu();
           $scope.$apply();
        }
    };

    var touchStart = function(e){
      var touch = e.touches[0];
      lastX = touch.pageX;

      if(doneTyping && newVisitor){
        alertify.alert("Pro-tip: you can pan left and right to open and close the menu.");
        localStorage.alreadyVisited = true;
        newVisitor = false;
      }
    }

    document.addEventListener('touchmove', touchMove, false);
    document.addEventListener('touchstart', touchStart, false);
  }

}]);
