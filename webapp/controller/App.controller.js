sap.ui.define([
	"sap/com/xsOdata_tutorial/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("sap.com.xsOdata_tutorial.controller.App", {
		onInit: function () {
			var oModel = this.getOwnerComponent().getModel();
			var oModel2 = this.getOwnerComponent().getModel("AppDataModel");
			oModel.read("/CUSTOMERS", {
				success: function (oData, response) {
					console.error("oData", oData);
				},
				error: function (oError) {
					console.error("oError", oError)
				}
			});
			
			console.error("oModel", oModel);
			console.error("oModel", oModel2);
		}
	});
});