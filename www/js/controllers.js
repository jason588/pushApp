angular.module('starter.controllers', [])

.controller('AppCtrl',  function($rootScope,$scope){
    $scope.navs = [{
            link: 'tab/home',
            text: '首页'
        }, {
            link: 'tab/home/services',
            text: '服务列表'
        }, {
            link: 'tab/home/services/order',
            text: '提交订单'
        }, {
            link: 'tab/home/services/service-detail',
            text: '服务详情'
        }, {
            link: 'tab/home/services/service-detail/img-detail',
            text: '图文详情'
        }, {
            link: 'tab/home/services/review',
            text: '用户评价'
        }, {
            link: 'tab/home/services/seller-detail',
            text: '商家详情'
        }, {
            link: 'login',
            text: '登录'
        }];


    $rootScope.isHideTab = false;

        
})


.controller('HomeCtrl', function($scope,Sliders) {
    $scope.sliders = Sliders;

    $scope.start = function(){
        alert("测试")
    }
})
.controller('sellerDetailCtrl', function($scope,Sliders) {
    $scope.sliders = Sliders;
})

.controller('serviceCtrl', function($scope,$timeout) {
    $timeout(function() {
      $scope.star1 = 3;
      $scope.star2 = 4;
      
    }, 1000);
})


.controller('NearCtrl', function($rootScope,$scope, Chats) {
    $rootScope.isHideTab = false;
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
})

.controller('NearDetailCtrl', function($rootScope , $scope, $stateParams, Chats) {
    $rootScope.isHideTab = true;

    $scope.chat = Chats.get($stateParams.chatId);
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(121.514693,31.237785);
    map.centerAndZoom(point,16);
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
        }
        else {
            alert('failed'+this.getStatus());
        }        
    },{enableHighAccuracy: true})

    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
})

.controller('AccountCtrl', function($scope) {
    
})
.controller('myorderCtrl', function($scope) {
    
})
.controller('ectCtrl', function($scope,Sliders) {
    $scope.sliders = Sliders;
})
