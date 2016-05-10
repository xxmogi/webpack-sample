/// <reference path="../typings/browser.d.ts"/>

import "knockout"
import "knockout-es5"

class ViewModel {
  public val : string;

  constructor(){
    this.val = "test";
    ko.track(this);
  }

  public say() {
    document.write("[print] " + this.val);
  }
}


export default ViewModel;
