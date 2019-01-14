/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/com/xsOdata_tutorial/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});