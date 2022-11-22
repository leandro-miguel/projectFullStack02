sap.ui.define([
    "sap/ui/base/Object"
], function (Object) {
    "use strict";
   
    var instance;
 
    var GlobalModel = Object.extend("projectfullstack.model.GlobalModel", {
        constructor: function () {
            this.oServiceMainModel=null;
        },
    
        setoModelMainService: function (oModel) {
            this.oServiceMainModel = oModel;
        },
        getoModelMainService: function () {
            return this.oServiceMainModel;
        },
    });
    return {
        getInstance: function () {
            if (!instance) {
                instance = new GlobalModel();
            }
            return instance;
        }
    };
});