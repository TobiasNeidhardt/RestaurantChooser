sap.ui.define(
    ["./BaseController",'sap/m/MessageToast'],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        var PageController = Controller.extend("sap.m.sample.Button.Page", {

            onPress: function (evt) {
                MessageToast.show("This application shows restaurants near wuerzburg office. It also includes an random restaurant picker.");
            }
        });
    
        return PageController;
        
    }
);




