sap.ui.define(["./BaseController",'sap/m/MessageToast'],
 function (Controller) {
	"use strict";
	return Controller.extend("com.myorg.UI5Exercise.controller.MainView", {
        onPress: function () {
            this.navTo("RestaurantList.view");
           // MessageToast.show("This application shows restaurants near wuerzburg office. It also includes an random restaurant picker.");
            
        }
	});
});