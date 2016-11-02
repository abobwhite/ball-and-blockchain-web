class RequestNotificationChannel {
  // private notification messages
  private _START_REQUEST_: string = '_START_REQUEST_';
  private _END_REQUEST_: string = '_END_REQUEST_';
  private $rootScope: ng.IRootScopeService;

  /** @ngInject */
  constructor($rootScope: ng.IRootScopeService) {
    this.$rootScope = $rootScope;
  }

  // publish start request notification
  public requestStarted(): void {
    this.$rootScope.$broadcast(this._START_REQUEST_);
  }

  // publish end request notification
  public requestEnded(): void {
    this.$rootScope.$broadcast(this._END_REQUEST_);
  }

  // subscribe to start request notification
  public onRequestStarted($scope: ng.IScope, handler: Function): void {
    $scope.$on(this._START_REQUEST_, () => { handler(); });
  }

  // subscribe to end request notification
  public onRequestEnded($scope: ng.IScope, handler: Function): void {
    $scope.$on(this._END_REQUEST_, () => { handler(); });
  };
}

export default RequestNotificationChannel;