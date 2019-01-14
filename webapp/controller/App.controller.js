sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.com.xsOdata_tutorial.controller.App", {
		onInit: function () {
			var oModel = this.getOwnerComponent().getModel("AppDataModel");
			var oModel2 = this.getOwnerComponent().getModel("yourModelName");
			//console.error("oModel", oModel );
			console.error("oModel", oModel2);
		}
	});
});