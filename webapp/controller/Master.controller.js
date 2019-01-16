sap.ui.define([
	"sap/com/xsOdata_tutorial/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("sap.com.xsOdata_tutorial.controller.Master", {

		onSelect: function (oEvent) {
			var id = oEvent.getSource().getBindingContext().getObject().ID;
			var that = this;
			this.getView().getModel().read("/CUSTOMERFULL", {
				success: function (oData) {
					var data = ("oData", oData.results.filter(function (index, number) {
						return index.ID === id;
					}));
					that.onOpenDetailDialog(new sap.ui.model.json.JSONModel(data[0]));
				}
			});

			//this.onOpenDetailDialog(new sap.ui.model.json.JSONModel(oEvent.getSource().getBindingContext().getObject()));
		},

		onOpenDetailDialog: function (oModel) {
			console.error("oModel", oModel)
			if (!this.oDialogDetail) {
				this.oDialogDetail = sap.ui.xmlfragment("sap.com.xsOdata_tutorial.view.Detail", this);
				this.oDialogDetail.setModel(oModel);
			}
			this.oDialogDetail.open();
			console.error(this.oDialogDetail.getModel().getData());
			console.error(sap.ui.getCore().byId("SimpleFormDisplay354wide").getModel().getData());
			console.error(sap.ui.getCore().byId("SimpleFormDisplay354wide").getModel().getData().ID);
		},

		addValues: function () {
			if (!this.oDialogNew) {
				this.oDialogNew = sap.ui.xmlfragment("sap.com.xsOdata_tutorial.view.NewEntry", this);
				this.oDialogNew.setModel(this.getView().getModel());

			}
			this.oDialogNew.open();

		},

		handleChartChange: function (oEvent) {
			var selected = oEvent.getParameters().selectedItem.getKey();
			switch (selected) {
			case "bar_jobs":
				console.error("bar_jobs");
				sap.ui.getCore().byId("idVizFrame").setVizType("column");
				break;
			case "line_general":
				console.error("line_gen");
				sap.ui.getCore().byId("idVizFrame").setVizType("line");
				break;

			}

		},

		handleSelectionChange: function (oEvent) {
			console.error("handleSelectionChange", oEvent.getParameters().changedItem.getKey())
		},

		handleSelectionFinish: function (oEvent) {
			console.error("handleSelectionFinish", oEvent.getParameters().selectedItems.length);
			var selectedItems = oEvent.getParameters().selectedItems;

			this.getView().getModel().read("/CUSTOMERFULL", {
				success: function (oData) {
					// console.error("oData", oData)
					if (selectedItems.length > 0) {
						oData = oData.results.filter(function (i, n) {
							// console.error("seleI: ",selectedItems)
							var valid = false;
							// return parseInt(i.id) === parseInt(sObjectId);
							//console.error("selectedItems.includes(i.CUSTOMER_JOB);",(selectedItems[0].getText()===i.CUSTOMER_JOB)||(selectedItems[1].getText()===i.CUSTOMER_JOB)||(selectedItems[2].getText()===i.CUSTOMER_JOB));

							for (var index = 0; index < selectedItems.length; index++) {
								// console.error("selectedItems[index]",selectedItems[index].getText())
								if (selectedItems[index].getText() === i.CUSTOMER_JOB) {
									valid = true;
								}

							}
							return valid;
						});
					} else {
						oData = oData.results;
					}

					var oData2 = {};
					oData2.CUSTOMERFULL = oData;
					console.log("oData", oData2)
					sap.ui.getCore().byId("idVizFrame").setModel(new sap.ui.model.json.JSONModel(oData2));
				}
			});

		},

		handleChart: function (oEvent) {
			if (!this.oDialog) {
				this.oDialog = sap.ui.xmlfragment("sap.com.xsOdata_tutorial.view.TableDetail", this);
				this.oDialog.setModel(this.getView().getModel());

			}
			this.oDialog.open();

		},

		onCloseDialog: function () {

			this.oDialog.close();

		},

		onCloseDialogNew: function () {

			this.oDialogNew.close();

		},

		onOpenDialog: function () {
			this.oDialog.open();
		},

		createEntry: function () {
			console.error("got to this part", sap.ui.getCore().byId("simpleForm").getContent()[1].getValue());
			var oModel = {};
			var id = 0;
			var that = this;
			this.getView().getModel().read("/CUSTOMERS", {
				success: function (oData) {
					that.id = oData.results[oData.results.length - 1].ID + 1;
					id = oData.results[oData.results.length - 1].ID + 1;
					oModel.ID = id;
					oModel.CUSTOMER = sap.ui.getCore().byId("simpleForm").getContent()[1].getValue();
					oModel.LIFESPEND = sap.ui.getCore().byId("simpleForm").getContent()[3].getValue();
					oModel.NEWSPEND = sap.ui.getCore().byId("simpleForm").getContent()[5].getValue();
					oModel.INCOME = sap.ui.getCore().byId("simpleForm").getContent()[7].getValue();
					oModel.LOYALTY = sap.ui.getCore().byId("simpleForm").getContent()[9].getValue();
					that.getView().getModel().create("/CUSTOMERS", oModel, {
						success: function (data) {
							sap.m.MessageBox.success("Successfully Added");
							that.onCloseDialogNew();
						},
						error: function (oError) {
							sap.m.MessageBox.alert(oError);
							console.error("ne", oError)
						}
					});
				}
			});

		}

	});

});