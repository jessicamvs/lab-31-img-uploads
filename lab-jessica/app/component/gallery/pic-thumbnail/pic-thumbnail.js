'use strict';

require('./_pic-thumbnail.scss');

module.exports = {
  template: require('./pic-thumbnail.html'),
  controller: ['$log', 'picService', PicThumbmailController],
  controllerAs: 'picThumbnailCtrl',
  bindings: {
    pic: '<'
  }
};

function PicThumbmailController($log, picService) {
  $log.debug('PicThumbmailController()');

  this.deletePic = function() {
    $log.debug('picThumbnailCtrl.deletePic()');

    picService.deletePic();
  };
}
