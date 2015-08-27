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
      "title": "Virtual World Sandbox"
    }
  ]
};

app.controller('ListController', ['$scope', '$http', '$sce', function($scope, $http, $sce){

  $scope.docs = docs;
  $scope.contents = $sce.trustAsHtml('Hello my friend!');
  $scope.loadDoc = function(doc, prefix){
    $http.get(prefix + doc + '.md').then(updateContents);
  }

  $scope.loadDoc("me", "docs/");

  function updateContents(res){
    console.log("Got it!", res);
    $scope.contents = $sce.trustAsHtml(marked(res.data));

    window.setTimeout(function(){
      $("#contents .h1").typed({
          strings: ["Welcome to the place I call... ^1200 home."],
          typeSpeed: 60
      });}, 250);
  }

}]);
