function initModel() {
	var sUrl = "/mdc_CLONING/test1/datafile.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}