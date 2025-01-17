"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
// eslint-disable-next-line valid-jsdoc
/**
 * ensures that a oclif command or hook exits
 */
exports.default = (code = 0) => ({
    run() {
        (0, chai_1.expect)(process.exitCode).to.equal(code);
        throw new Error(`Expected to exit with code ${code} but it ran without exiting`);
    },
    catch(ctx) {
        if (!ctx.error.oclif || ctx.error.oclif.exit === undefined)
            throw ctx.error;
        (0, chai_1.expect)(ctx.error.oclif.exit).to.equal(code);
    },
});
