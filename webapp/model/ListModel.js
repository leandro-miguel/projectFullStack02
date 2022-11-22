// @ts-nocheck
sap.ui.define(
    [
        "sap/ui/base/Object",
        "./GlobalModel"
    ],
    function (Object, GlobalModel) {
        "use strict";
        return Object.extend("projectfullstack.model.ListModel", {
            constructor: function () {
                //
            },

            async calloDataGetFunction() {
                const oGlobalModel = GlobalModel.getInstance();
                const oDataModel = oGlobalModel.getoModelMainService();
                oDataModel.setUseBatch(false);
                const sPath = "/CadastroSet";
                const fnPromise = new Promise((res, rej) => {
                    oDataModel.read(sPath, {
                        refreshAfterChange: true,
                        success: (oData, response) => {
                            res({ oData, response });
                        },
                        error: (oError) => {
                            rej(oError);
                        }
                    });
                });
                return fnPromise;
            }
        });
    }
);