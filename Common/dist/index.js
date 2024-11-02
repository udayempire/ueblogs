"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlog = exports.createBlog = exports.signinInput = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6)
});
exports.signinInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6)
});
exports.createBlog = zod_1.z.object({
    title: zod_1.z.string().max(250),
    content: zod_1.z.string(),
});
exports.updateBlog = zod_1.z.object({
    title: zod_1.z.string().max(250),
    content: zod_1.z.string(),
});