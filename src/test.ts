import 'angular';
import 'angular-mocks/angular-mocks';

var testsContext = (<any>require).context('.', true, /\.spec\.ts$/);
testsContext.keys().forEach(testsContext);