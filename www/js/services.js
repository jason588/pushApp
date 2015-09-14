angular.module('starter.services', ['ui.starRating'])

.directive('menuBtn', function () {
    return {
        restrict: 'AE',
        templateUrl : 'templates/tpls/menu-btn.html',
        transclude:  true, 
        link: function (scope, iElement, iAttrs) {
            
        }
    };
})
.factory('Sliders', function () {

    var sliders = [{
        link: '#/user/center',
        imgUrl: 'img/slides/slide-1.jpg'
    }, {
        link: '#/user/center',
        imgUrl: 'img/slides/slide-2.jpg'
    }, {
        link: '#/user/center',
        imgUrl: 'img/slides/slide-3.jpg'
    }, {
        link: '#/user/center',
        imgUrl: 'img/slides/slide-4.jpg'
    }];

    return sliders
})
.factory('Chats', function() {

  var chats = [{
    id: 0,
    name: '加油站',
    lastText: '长富大厦与工业路交叉口',
    face: 'img/a1.jpg'
  }, {
    id: 1,
    name: '新建大道加油站',
    lastText: '北京西路与南京西路交界',
    face: 'img/a2.jpg'
  }, {
    id: 2,
    name: '中国石化加油站(申江路站)',
    lastText: '申江路与沪南路交界',
    face: 'img/a3.jpg'
  }, {
    id: 3,
    name: '中国石油加油站',
    lastText: '西藏东路与石板桥路口',
    face: 'img/a4.jpg'
  }, {
    id: 4,
    name: '上海加油站',
    lastText: '沪南路高科西路交叉口',
    face: 'img/a5.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});






/*指令*/

'use strict';

angular.module('ui.starRating', [])
.directive('wfStarRating', function() {
  var allstar = 5;
  var directive = {
    restrict: 'E',
    replace: true,
    scope: {
      rate: '='
    },  
    template: '<div class="star-rating">'+
                '<div ng-repeat="star in stars track by $index" ng-click="onClick($index+1)" class="star">'+
                  '<div ng-class="star.icon" class="mdi"></div>'+
                '</div>'+  
              '</div>',
    link: link
  };
  function link(scope, elem, attrs) {
    var fullRating = allstar;
    
    scope.$watch('rate', function(newValue, oldValue) {
      if(newValue === undefined) {
        update();
      }
      if(newValue !== oldValue && newValue !== undefined) {
        update(newValue);
      }
    });
    
    scope.onClick = function(newRate) {
      scope.rate = newRate;
    }

    function update(newRate) {
      var i = 0;
      scope.stars = [];

      scope.rate = newRate;

      for (i = 0; i < fullRating; i++) {
        if (i < newRate) {
          scope.stars.push({icon: 'mdi-star'});
        } else {
          scope.stars.push({icon: 'mdi-star-outline'});
        }
      }
    }
  }
  return directive;
})
