sap.ui.define([], function () {
    "use strict";

    return {

		statusText :  function (sStatus) {
      var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
      var time = new Date().toLocaleTimeString();new Date().toLocaleTimeString('en-GB', { 
        hour12: false, 
        hour: "numeric", 
        minute: "numeric"});
      
        if (sStatus >= time) {
          return resourceBundle.getText("restaurantStatusA");
          
        }else{
          return resourceBundle.getText("restaurantStatusB");
        }
		}
	};

});
