sap.ui.define([
	"sap/com/xsOdata_tutorial/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("sap.com.xsOdata_tutorial.controller.Master", {

		onSelect : function (oEvent){
			// .getBindingContext("statusJobs").getObject();
			console.error("oEvent",oEvent.getSource().getBindingContext().getObject().CUSTOMER);
		},
		onSelectT : function(oEvent){
			
		}
		
	});

});