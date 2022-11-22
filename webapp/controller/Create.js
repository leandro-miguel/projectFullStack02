// @ts-nocheck
sap.ui.define([
    "./BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("projectfullstack.controller.Create", {
            onInit: function () {
               
            },

            // --------------------------------------------
            //
            //  -------- Fragmentos -----------------------
            //
            //----------------------------------------------

            _onCreate(){
                this.openFragment("Create");
            },

            onExitCreate() {
                this.Create.close();
            },

        });
    });
