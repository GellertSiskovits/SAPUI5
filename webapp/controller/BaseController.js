/*global history */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("sap.com.xsOdata_tutorial.controller.BaseController", {

		onInit: function () {
			console.error("BaseController");

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
			
			
		},

		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		}

	});

});