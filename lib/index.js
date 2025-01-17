"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = exports.Config = exports.FancyTypes = exports.expect = exports.test = void 0;
const core_1 = require("@oclif/core");
Object.defineProperty(exports, "Config", { enumerable: true, get: function () { return core_1.Config; } });
const fancy_test_1 = require("fancy-test");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return fancy_test_1.expect; } });
Object.defineProperty(exports, "FancyTypes", { enumerable: true, get: function () { return fancy_test_1.FancyTypes; } });
const command_1 = require("./command");
Object.defineProperty(exports, "command", { enumerable: true, get: function () { return command_1.command; } });
const exit_1 = require("./exit");
const hook_1 = require("./hook");
const load_config_1 = require("./load-config");
load_config_1.loadConfig.root = require.main.filename;
exports.test = fancy_test_1.fancy
    .register('loadConfig', load_config_1.loadConfig)
    .register('command', command_1.command)
    .register('exit', exit_1.default)
    .register('hook', hook_1.default)
    .env({ NODE_ENV: 'test' });
exports.default = exports.test;
