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
			
		},
		
		handleChart : function(oEvent){
			if(!this.oDialog){
				this.oDialog = sap.ui.xmlfragment("sap.com.xsOdata_tutorial.view.TableDetail", this);
				this.oDialog.setModel(this.getView().getModel());
				
			}
			this.onOpenDialog();
		},
		
		onCloseDialog : function(){
			this.oDialog.close();
		},
		
		onOpenDialog : function(){
			this.oDialog.open();
		}
		
	});

});