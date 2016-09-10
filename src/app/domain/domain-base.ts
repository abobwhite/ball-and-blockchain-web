class DomainBase {
  constructor(json: Object = null) {
    if (json) {
      this.deserialize(json, this);
    }
  }

  private deserialize(json: Object, instance: any): void {
    for (let prop in json) {
      if (json.hasOwnProperty(prop)) {
        if (typeof json[prop] === 'object' && !(json[prop] instanceof Date)) {
          instance[prop] = this.deserialize(json[prop], instance);
        } else {
          instance[prop] = json[prop];
        }
      }
    }
  }
}

export default DomainBase;