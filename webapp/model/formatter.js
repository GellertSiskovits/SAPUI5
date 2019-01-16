sap.ui.define([], function () {
	"use strict";
	return {
		gender: function (genderCode) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (genderCode) {
				case 1:
					return "Male";
				case 2:
					return "Female";
				default:
					return "Other";
			}
		},
		
		maritalStatus: function(maritalStatusCode){
			switch (maritalStatusCode) {
				case 1:
					return "Married";
				case 0:
					return "Single";
				default:
					return "Other";
			}
		}
	};
});