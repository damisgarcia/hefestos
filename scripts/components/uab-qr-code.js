var uabQrCodeCtrl = function($rootScope, $controller, $mdDialog){
  var self = this

  self.trigger = function(){
    var url = ( window.location.origin + window.location.pathname + $rootScope.$global.manifest.pdf ).replace('index.html','')

    $mdDialog.show({
      templateUrl: "templates/dialogs/qr-code.html",
      controller: "SimpleDialogCtrl",
      controllerAs: "dialog",
      clickOutsideToClose: true,
      locals: {
        title: null,
        text: url
      }
    })
  }

  return self;
}

uabQrCodeCtrl.$inject = ['$rootScope','$controller', '$mdDialog']

var uabQrCode = {
  controller: uabQrCodeCtrl,
  templateUrl: 'templates/uab-qr-code.html'
}

angular.module('application').component('uabQrCode', uabQrCode)