class FormField {
  private restrict: any;
  private replace: any;
  private require: any;
  private transclude: any;
  private template: any;
  private scope: any;

  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.require = '^form';
    this.transclude = true;
    this.template = require('./form-field.html');
    this.scope = {
      info : '@'
    };
  }

  public link(scope: any, elem: any, attrs: any): void {
    scope.label = attrs.label;
    scope.required  = attrs.hasOwnProperty('required');

    // Select input only if it is of type text, email, or password...if type attribute doesn't exist, HTML
    //  defaults to text input type
    let input: any = $(elem)
        .find('textarea, input:not(.ui-select-search)')
        .filter('[type="text"], [type="email"], [type="password"], [type="number"],:not([type])');
    input.addClass('form-control');
    // Grab the id of the input, if applicable, and expose it for use in the label "for" attribute

    scope.id = input.attr('id');
  }
}

export default [() => {return new FormField(); }];