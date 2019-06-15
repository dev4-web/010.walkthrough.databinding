sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel){
	"use strict";
	
	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
		
		onInit: function(){
			var oCurrencyType = {
				CurrencyType: "INR"
			};
			this.getView().setModel(new JSONModel(oCurrencyType), "currency");
		}
		
	});
});