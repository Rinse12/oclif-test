"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const core_1 = require("@oclif/core");
const load_config_1 = require("./load-config");
const castArray = (input) => {
    if (input === undefined)
        return [];
    return Array.isArray(input) ? input : [input];
};
function command(args, opts = {}) {
    return {
        async run(ctx) {
            if (!ctx.config || opts.reset)
                ctx.config = await (0, load_config_1.loadConfig)(opts).run({});
            args = castArray(args);
            const [id, ...extra] = args;
            const cmdId = (0, core_1.toStandardizedId)(id, ctx.config);
            ctx.expectation = ctx.expectation || `runs ${args.join(' ')}`;
            await ctx.config.runHook('init', { id: cmdId, argv: extra });
            ctx.returned = await ctx.config.runCommand(cmdId, extra);
        },
    };
}
exports.command = command;
