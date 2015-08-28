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

app.controller('ListController', ['$scope', '$http', '$sce', '$timeout', function($scope, $http, $sce, $timeout){

  $scope.docs = docs;
  $scope.contents = $sce.trustAsHtml('Hello my friend!');
  $scope.mobile = "";
  $scope.hideMenu = hideMenu;

  var newVisitor = !localStorage || !localStorage.alreadyVisited;
  var doneTyping = false;
  var showMenu;

  hideMenu();

  $scope.loadDoc = function(doc, prefix){
    $http.get(prefix + doc + '.md').then(updateContents);
    hideMenu();
  }

  $scope.toggleMenu = function(){
    if(showMenu) revealMenu();
    else hideMenu();
  }

  function hideMenu(){
    if(isMobile.any) $scope.mobile = "mobile out";
    showMenu = true;
  }
  function revealMenu(){
    if(isMobile.any) $scope.mobile = "mobile in";
    showMenu = false;
  }

  function updateContents(res){
    $scope.contents = $sce.trustAsHtml(marked(res.data));

    if(newVisitor){
      $timeout(function(){
        $("#contents .h1").typed({
            strings: ["Welcome to the place I call... ^1200 home."],
            typeSpeed: 60,
            callback: function(){
              doneTyping = true;
              if(!isMobile.any) setOldUser();
            },
            contentType: 'text'
        });
      }, 0, false);
    }
  }

  function setOldUser(){
    newVisitor = false;
    localStorage.alreadyVisited = true;
  }

  $scope.loadDoc("me", "docs/");

  if(isMobile.any){
    var lastX = 0, threshold = 0.3 * $(window).width();
    var touchMove = function(e) {
        var touch = e.touches[0];
        if(showMenu && touch.pageX - lastX > threshold ||
           !showMenu && lastX - touch.pageX > threshold){

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
        setOldUser();
      }
    }

    document.addEventListener('touchmove', touchMove, false);
    document.addEventListener('touchstart', touchStart, false);
  }

}]);
