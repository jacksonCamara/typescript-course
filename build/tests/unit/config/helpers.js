"use strict";
var Chai = require("chai");
//import * as supertest from 'supertest'
var td = require("testdouble");
var supertest = require('supertest');
var api_1 = require("../../../server/api/api");
var app = api_1.default;
exports.app = app;
var request = supertest;
exports.request = request;
var expect = Chai.expect;
exports.expect = expect;
var testDouble = td;
exports.testDouble = testDouble;
//# sourceMappingURL=helpers.js.map