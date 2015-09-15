// Ionic Starter App

angular.module('starter', ['ionic', 
                          'starter.services', 
                          'starter.controllers',
                          'ngCordova',
                          'ionic.service.core',
                          'ionic.service.push'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
})

.config(['$ionicAppProvider',function($ionicAppProvider) {
    $ionicAppProvider.identify({
      app_id: 'ba72c6cf',
      api_key: '1d4f3e6249d177b9b87fea029cd4e0a5048c68c824f2c6a4',
      dev_push: true
    });
}])



.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  $urlRouterProvider.otherwise('/tab/home');
  $ionicConfigProvider.tabs.style('standard').position('bottom');

  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    views: {
      'menuContent': {
          templateUrl: 'templates/tabs.html'
      }
    }
    
  })

// 首页Tab=====================================
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
          .state('tab.services', {
            url: '/home/services',
            views: {
              'tab-home': {
                templateUrl: 'templates/home/services.html',
                controller: 'serviceCtrl'
              }
            }
          })
          .state('tab.order', {
            url: '/home/services/order',
            views: {
              'tab-home': {
                templateUrl: 'templates/home/order.html'
              }
            }
          })
          .state('tab.service-detail', {
            url: '/home/services/service-detail',
            views: {
              'tab-home': {
                templateUrl: 'templates/home/service-detail.html'
              }
            }
          })
          .state('tab.img-detail', {
            url: '/home/services/service-detail/img-detail',
            views: {
              'tab-home': {
                templateUrl: 'templates/home/img-detail.html'
              }
            }
          })
          .state('tab.review', {
            url: '/home/services/review',
            views: {
              'tab-home': {
                templateUrl: 'templates/home/review.html'

              }
            }
          })
          .state('tab.seller-detail', {
            url: '/home/services/seller-detail',
            views: {
              'tab-home': {
                templateUrl: 'templates/home/seller-detail.html',
                controller: 'sellerDetailCtrl'
              }
            }
          })




// 附近Tab ================================================
  .state('tab.near', {
      url: '/near',
      views: {
        'tab-near': {
          templateUrl: 'templates/tab-near.html',
          controller: 'NearCtrl'
        }
      }
    })
          .state('tab.chat-detail', {
            url: '/near/:chatId',
            views: {
              'tab-near': {
                templateUrl: 'templates/near/near-detail.html',
                controller: 'NearDetailCtrl'
              }
            }
          })


// 账户Tab ====================================================
  .state('login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })  
  .state('register', {
    url: '/register',
    views: {
      'menuContent': {
        templateUrl: 'templates/register.html',
        controller: "pushCtrl"
      }
    }
  })  
  .state('agreement', {
    url: '/login/agreement',
    views: {
      'menuContent': {
        templateUrl: 'templates/other/agreement.html'
      }
    }
  })  
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
        .state('tab.card', {
          url: '/account/card',
          views: {
            'tab-account': {
              templateUrl: 'templates/account/card.html'
              // controller: 'AccountCtrl'
            }
          }
        })
        .state('tab.card-detail', {
          url: '/account/card/card-detail',
          views: {
            'tab-account': {
              templateUrl: 'templates/account/card-detail.html'
              // controller: 'AccountCtrl'
            }
          }
        })
        .state('myorder', {
          url: '/myorder',
          views: {
            'menuContent': {
              templateUrl: 'templates/account/myorder.html',
              controller: 'myorderCtrl'
            }
          }
        })
        .state('myorder-detail', {
          url: '/myorder/myorder-detail',
          views: {
            'menuContent': {
              templateUrl: 'templates/account/myorder-detail.html'
            }
          }
        })
        .state('tab.etc', {
          url: '/account/etc',
          views: {
            'tab-account': {
              templateUrl: 'templates/account/etc.html',
              controller: 'ectCtrl'
            }
          }
        })
        .state('tab.friend', {
          url: '/account/friend',
          views: {
            'tab-account': {
              templateUrl: 'templates/account/friend.html'
              // controller: 'AccountCtrl'
            }
          }
        })
        .state('tab.help', {
          url: '/account/help',
          views: {
            'tab-account': {
              templateUrl: 'templates/account/help.html'
              // controller: 'AccountCtrl'
            }
          }
        })
        .state('tab.setting', {
          url: '/account/setting',
          views: {
            'tab-account': {
              templateUrl: 'templates/account/setting.html'
              // controller: 'AccountCtrl'
            }
          }
        })

});