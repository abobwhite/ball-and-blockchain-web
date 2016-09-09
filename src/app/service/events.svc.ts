class EventsSvc {
  private eventResultCache: Object = {};
  private $rootScope: ng.IRootScopeService;

  /** @ngInject */
  constructor($rootScope: ng.IRootScopeService) {
    this.$rootScope = $rootScope;
  }

  public publish(eventName: string, payload: any): void {
    if (angular.isUndefined(payload)) {
      payload = null;
    }

    this.$rootScope.$broadcast(eventName, payload);

    if (payload) {
      this.eventResultCache[eventName] = payload;
    }
  }

  public subscribe(eventName: string, scope: ng.IScope, callback: Function, getFromCache: boolean): Function {
    if (getFromCache && this.eventResultCache[eventName]) {
      callback(this.eventResultCache[eventName]);
    }

    let cb: any = (event: ng.IAngularEvent, ...payload: any[]): any  => {
      callback(payload);
    };

    return scope.$on(eventName, cb);
  }
}

export default EventsSvc;
