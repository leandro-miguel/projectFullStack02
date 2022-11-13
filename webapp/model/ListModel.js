sap.ui.define([
    "sap/ui/base/Object"
], function (Object) {
    "use strict";
   
    var instance;
 
    var GlobalModel = Object.extend("<root>.model.GlobalModel", {
        constructor: function () {
            this.oModelMainService=null;
        },
    
        setoModelMainService: function (oModel) {
            this.oModelMainService = oModel;
        },
        getoModelMainService: function () {
            return this.oModelMainService;
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