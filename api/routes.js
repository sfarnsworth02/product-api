const express = require('express');
module.exports = function (Model) {
    const router = express.Router();
    const controller = require('./controller');
    const modelKey = Model.modelName.toLowerCase();
    const ctrl = controller(Model);

    router.get(`/api/${modelKey}/`, ctrl.getAll);
    router.get(`/api/${modelKey}/:id`, ctrl.getById);
    router.post(`/api/${modelKey}/`, ctrl.create);
    router.put(`/api/${modelKey}/:id`, ctrl.update);
    router.delete(`/api/${modelKey}/:id`, ctrl.delete);
    return router;
}