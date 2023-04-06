sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/ui/core/routing/History", "sap/m/MessageToast"], function (Controller, JSONModel, History, MessageToast) {
    "use strict";
    return Controller.extend("com.myorg.UI5Exercise.controller.RandomRestaurant", {
        onInit: function () {
            let restaurants = this.getOwnerComponent().getModel("restaurant");

            console.log(restaurants);
        },

        onPress: function () {
            var model = this.getView().getModel("restaurants");
            MessageToast.show(model);
        },

        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("MainView", {}, true);
            }
        },
    });
});
