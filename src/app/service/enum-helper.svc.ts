class EnumHelperSvc {
  public getNames(e: any): Array<any> {
    return Object.keys(e).filter(v => isNaN(parseInt(v, 10)));
  }

  public getValues(e: any): Array<any> {
    return Object.keys(e).map(v => parseInt(v, 10)).filter(v => !isNaN(v));
  }

  public getNamesAndValues(e: any, hasStringValues: boolean = false): Array<Object> {
    if (hasStringValues) {
      return this.getNamesAndValuesStrings(e);
    }

    return this.getValues(e).map(v => {
      return { name: this.makeNamePretty(e[v] as string), value: v };
    });
  }

  private getNamesAndValuesStrings(e: any): Array<Object> {
    let optionNames: Array<Object> = [];

    for (let enumValue in e) {
      let optionNameLength: number = optionNames.length;

      if (optionNameLength === 0) {
        optionNames.push({name: enumValue, value: e[enumValue]});
      } else {
        if (optionNames[optionNameLength - 1]['value'] !== enumValue) {
          optionNames.push({name: enumValue, value: e[enumValue]});
        }
      }
    }

    return optionNames.map((option) => {
      option['name'] = this.makeNamePretty(option['name']);
      return option;
    });
  }

  private makeNamePretty(name: string): string {
    let namePieces: Array<string> = name.split('_');
    namePieces = namePieces.map((namePiece) => {
      let lowerCaseNamePiece: string = namePiece.toLowerCase();
      return lowerCaseNamePiece.charAt(0).toUpperCase() + lowerCaseNamePiece.slice(1);
    });
    return namePieces.join(' ');
  }
}

export default EnumHelperSvc;