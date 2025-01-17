"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const load_config_1 = require("./load-config");
// eslint-disable-next-line valid-jsdoc
/**
 * tests a oclif hook
 *
 * @example <caption>check that when the 'init' hook is ran it outputs "this output"</caption>
 * testHook('init', {id: 'mycommand'}, {stdout: true}, output => {
 *   expect(output.stdout).to.contain('this output')
 * })
 *
 * @param {string} event hook to run
 * @param {object} hookOpts options to pass to hook. Config object will be passed automatically.
 */
exports.default = (event, hookOpts = {}, options = {}) => ({
    async run(ctx) {
        if (!event)
            throw new Error('no hook provided');
        if (!ctx.config)
            ctx.config = await (0, load_config_1.loadConfig)(options).run({});
        ctx.expectation = ctx.expectation || `runs ${event} hook`;
        ctx.returned = await ctx.config.runHook(event, hookOpts || {});
    },
});
