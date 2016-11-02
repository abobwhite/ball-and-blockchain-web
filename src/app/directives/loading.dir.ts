import RequestNotificationChannel from '../service/http-request-notification-channel.ts';

class LoadingDirective {
  public restrict: any;
  private requestNotificationChannel: RequestNotificationChannel;

  /** @ngInject */
  constructor(requestNotificationChannel: RequestNotificationChannel) {
    this.restrict = 'A';
    this.requestNotificationChannel = requestNotificationChannel;
  }

  public link($scope: ng.IScope, $element: any): void {
    // hide the element initially
    $element.hide();

    let startRequestHandler: Function = () => {
      // got the request start notification, show the element
      if (!$element.is(':visible')) {
        $element.stop();
        $element.css({
          'height': $(document).height(),
          'width': $(document).width()
        });
        $element.find('.loadingWindowSize').css({
          'top': $(window).scrollTop(),
          left: $(window).scrollLeft(),
          'height': $(window).height(),
          'width': $(window).width()
        });
        $element.show();
      }
    };

    let endRequestHandler: Function = () => {
      // got the request start notification, show the element
      $element.stop().hide();
    };

    this.requestNotificationChannel.onRequestStarted($scope, startRequestHandler);
    this.requestNotificationChannel.onRequestEnded($scope, endRequestHandler);
  }

  /** @ngInject */
  public static create(requestNotificationChannel: RequestNotificationChannel): ng.IDirective {
    return <ng.IDirective>(new LoadingDirective(requestNotificationChannel));
  }
}

export default LoadingDirective.create;