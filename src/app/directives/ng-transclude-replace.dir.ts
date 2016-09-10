class NgTranscludeReplace {
  private terminal: any;
  private restrict: any;

  constructor() {
    this.terminal = true;
    this.restrict = 'EA';
  }

  public link($scope: ng.IScope, $element: any, $attr: any, ctrl: any, transclude: ng.ITranscludeFunction): void {
    if (!transclude) {
      return; //Illegal use of ngTranscludeReplace directive in the template! No parent directive that requires a transclusion found
    }
    transclude((clone: any) => {
      if (clone.length) {
        $element.replaceWith(clone);
      } else {
        $element.remove();
      }
    });
  }
}

export default [() => {return new NgTranscludeReplace(); }];
