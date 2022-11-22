sap.ui.define(
    [
      "./BaseController",
      "../model/GlobalModel"
    ],
    function(BaseController, GlobalModel) {
      "use strict";
  
      return BaseController.extend("projectfullstack.controller.App", {
        onInit() {
          const oGlobalModel = GlobalModel.getInstance();
          oGlobalModel.setoModelMainService(this.getOwnerComponent().getModel("oServiceMainModel"));
        }
      });
    }
  );
  