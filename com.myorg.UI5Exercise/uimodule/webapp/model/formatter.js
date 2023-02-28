sap.ui.define([], function () {
    "use strict";

    return {

		statusText :  function (OpeningTime) {
      var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
      var time = new Date().toLocaleTimeString('en-GB', { 
        hour12: false, 
        hour: "numeric", 
        minute: "numeric"});
      
        if (OpeningTime <= time && time <= "20:00" ) {
          return resourceBundle.getText("restaurantStatusA");
          
        }else{
          return resourceBundle.getText("restaurantStatusB");
        }
		}
	};

});
