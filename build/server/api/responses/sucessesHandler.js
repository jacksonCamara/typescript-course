"use strict";
var HTTPStatus = require("http-status");
function onSucess(res, data) {
    res.status(HTTPStatus.OK).json({ payload: data });
}
exports.onSucess = onSucess;
//# sourceMappingURL=sucessesHandler.js.map