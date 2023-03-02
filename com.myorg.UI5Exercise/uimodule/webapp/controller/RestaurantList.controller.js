sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/ui/model/json/JSONModel',
  '../model/formatter'
], function(Controller, JSONModel, formatter) {
"use strict";

var ListController = Controller.extend("com.myorg.UI5Exercise.controller.RestaurantList", {

  formatter: formatter,

  onInit : function (evt) {
    // set explored app's demo model on this sample
    var oModel = new JSONModel(sap.ui.require.toUrl("com.myorg.UI5Exercise/webapp/Restaurants.json"));
    this.getView().setModel(oModel);
  }
});


return ListController;

});