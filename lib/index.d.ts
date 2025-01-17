import { Config } from '@oclif/core';
import { expect, FancyTypes } from 'fancy-test';
import { command } from './command';
import { loadConfig } from './load-config';
export declare const test: FancyTypes.Base<FancyTypes.Context, {
    skip: {
        output: unknown;
        args: [];
    };
} & {
    only: {
        output: unknown;
        args: [];
    };
} & {
    retries: {
        output: unknown;
        args: [count: number];
    };
} & {
    catch: {
        output: {
            error: Error;
        };
        args: [arg: string | RegExp | ((err: Error) => any), opts?: {
            raiseIfNotThrown?: boolean | undefined;
        } | undefined];
    };
} & {
    env: {
        output: unknown;
        args: [env: {
            [k: string]: string | null | undefined;
        }, opts?: FancyTypes.EnvOptions | undefined];
    };
} & {
    stub: {
        output: {
            stubs: any[];
        };
        args: [object: any, path: any, value: () => any];
    };
} & {
    stdin: {
        output: unknown;
        args: [input: string, delay?: number | undefined];
    };
} & {
    stderr: {
        output: {
            readonly stderr: string;
        };
        args: [opts?: {
            print?: boolean | undefined;
            stripColor?: boolean | undefined;
        } | undefined];
    };
} & {
    stdout: {
        output: {
            readonly stdout: string;
        };
        args: [opts?: {
            print?: boolean | undefined;
            stripColor?: boolean | undefined;
        } | undefined];
    };
} & {
    nock: {
        output: {
            nock: number;
        };
        args: [host: string, options: FancyTypes.NockOptions | FancyTypes.NockCallback, cb?: FancyTypes.NockCallback | undefined];
    };
} & {
    timeout: {
        output: {
            timeout: number;
        };
        args: [timeout?: number | undefined];
    };
} & {
    loadConfig: {
        output: {
            config: import("@oclif/core/lib/interfaces").Config;
        };
        args: [opts?: loadConfig.Options | undefined];
    };
} & {
    command: {
        output: {
            config: import("@oclif/core/lib/interfaces").Config;
            expectation: string;
            returned: unknown;
        };
        args: [args: string | string[], opts?: loadConfig.Options | undefined];
    };
} & {
    exit: {
        output: {
            error: any;
        };
        args: [code?: number | undefined];
    };
} & {
    hook: {
        output: {
            config: import("@oclif/core/lib/interfaces").Config;
            expectation: string;
            returned: unknown;
        };
        args: [event: string, hookOpts?: Record<string, unknown> | undefined, options?: loadConfig.Options | undefined];
    };
}>;
export default test;
export { expect, FancyTypes, Config, command, };
