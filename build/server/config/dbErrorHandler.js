"use strict";
var HTTPStatus = require("http-status");
function dbErrorHandler(res, err) {
    console.log("Um erro aconteceu: " + err);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({
        code: 'ERR-01',
        message: 'Erro ao criar usuário'
    });
}
exports.dbErrorHandler = dbErrorHandler;
//# sourceMappingURL=dbErrorHandler.js.map