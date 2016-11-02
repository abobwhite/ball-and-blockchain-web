import IInjectorService = angular.auto.IInjectorService;
import RequestNotificationChannel from '../service/http-request-notification-channel.ts';
import Web3Svc from '../service/web3.svc.ts';

class HttpInterceptor implements ng.IHttpInterceptor {
  /** @ngInject */
  constructor(private $q: ng.IQService, private requestNotificationChannel: RequestNotificationChannel, private $injector: IInjectorService,
              private $rootScope: ng.IRootScopeService, private Web3: Web3Svc) {
    this.$rootScope.$on(Web3Svc.WEB3_REQUEST, () => { this.requestNotificationChannel.requestStarted(); });
    this.$rootScope.$on(Web3Svc.WEB3_RESPONSE, () => { this.processResponse(); });
  }

  /** @ngInject */
  public static factory($q: ng.IQService, requestNotificationChannel: RequestNotificationChannel, $injector: IInjectorService,
                        $rootScope: ng.IRootScopeService, Web3: Web3Svc): HttpInterceptor {
    return new HttpInterceptor($q, requestNotificationChannel, $injector, $rootScope, Web3);
  }

  // created as instance method using arrow function (see notes)
  public request = (config: ng.IRequestConfig): ng.IRequestConfig => {
    this.requestNotificationChannel.requestStarted();
    return config;
  };

  // created as instance method using arrow function (see notes)
  public response = <T>(response: ng.IHttpPromiseCallbackArg<T>): ng.IPromise<T> => {
    this.processResponse();
    return this.$q.when(response);
  };

  public responseError = <T>(response: ng.IHttpPromiseCallbackArg<T>): ng.IPromise<T> => {
    this.processResponse();
    return this.$q.reject(response);
  };

  private processResponse(): void {
    let activeCount: number = this.$injector.get('$http')['pendingRequests'].reduce((count: number) => { return count + 1; } , 0);
    activeCount += this.Web3.pendingRequests;
    if (activeCount === 0) {
      this.requestNotificationChannel.requestEnded();
    }
  }
}

export default HttpInterceptor;