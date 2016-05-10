/// <reference path="../typings/browser.d.ts"/>

import "knockout"

import ViewModel from "./ViewModel"

var vm = new ViewModel();

ko.applyBindings(vm);
