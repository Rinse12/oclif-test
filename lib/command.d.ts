import { Interfaces } from '@oclif/core';
import { loadConfig } from './load-config';
export declare function command(args: string[] | string, opts?: loadConfig.Options): {
    run(ctx: {
        config: Interfaces.Config;
        expectation: string;
        returned: unknown;
    }): Promise<void>;
};
