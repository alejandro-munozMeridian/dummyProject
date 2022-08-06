"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const otherFile_1 = __importDefault(require("../../otherFile"));
// const sum = require('../src/index');
describe('first test', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(otherFile_1.default).toBe(4);
    });
    test('true to be true', () => {
        expect(true).toBe(true);
    });
});
