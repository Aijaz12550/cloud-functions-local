"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event, context, callback) => {
    let test = process.env.test;
    console.log("event", event, test);
};
exports.handler = handler;
