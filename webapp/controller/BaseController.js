sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
    ],
    function (Controller) {
        "use strict";
        return Controller.extend(
            "projectfullstack.controller.BaseController",
            {
                onInit: function () {
                    //
                },

                //No Cloud Foundry, é necessário inserir o path da url nas chamadas.
                getPathLaunchpad() {
                    return this.getOwnerComponent().getManifestObject()._oBaseUri._string;
                },

                getBaseURL: function () {
                    const aPpId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
                    const aPpPath = aPpId.replaceAll(".", "/");
                    // @ts-ignore
                    const aPpModulePath = jQuery.sap.getModulePath(aPpPath);
                    return aPpModulePath;
                },

                getModel: function (nameModel) {
                    return this.getView().getModel(nameModel);
                },

                getResourceBundle: function () {
                    return this.getOwnerComponent().getModel("i18n").getResourceBundle();
                },

                openFragment(dialogName) {
                    if (!this[dialogName]) {
                        this[dialogName] = sap.ui.xmlfragment("projectfullstack.view.fragments." + dialogName, this);
                        this.getView().addDependent(this[dialogName]);
                        // @ts-ignore
                        jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this[dialogName]);
                    }
                    this[dialogName].open();
                },
        
                closeFragment(dialogName){
                    this[dialogName].close();
                }
            },
        );
    }
);