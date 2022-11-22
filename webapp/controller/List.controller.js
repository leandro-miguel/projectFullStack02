// @ts-nocheck
sap.ui.define([
    "./Create",
    "../model/ListModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ListModel) {
        "use strict";

        return Controller.extend("projectfullstack.controller.List", {
            onInit: function () {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteList").attachPatternMatched(this.onBeforeRendering, this);
            },

            onBeforeRendering(){
                const oModel = this.getModel("oListModel");
                oModel.setProperty("/rowsCount", 0);
            },

            async onSearch(){
                const oModel = this.getModel("oListModel");
                const oLisModel = new ListModel();
                try{
                    const fnPromise = await oLisModel.calloDataGetFunction();
                    if(fnPromise.response.statusCode == 200){
                        oModel.setProperty("/rows", fnPromise.oData.results);
                        oModel.setProperty("/rowsCount", fnPromise.oData.results.length);
                    }
                }catch(e){
                    MessageBox.error(e.message);
                }
            },

            _onRemove(){
                alert("Removido")
            }
        });
    });
