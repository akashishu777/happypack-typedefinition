// Type definitions for happypack
// TypeScript

import { Plugin } from 'webpack';

declare class HappyPack extends Plugin {
    /** webpack loader used always at the end of loaders list */
    constructor(options?: HappyPack.PluginOptions);
}

declare namespace HappyPack {
    interface PluginOptions {
        id?: string;
        threads?: number;
        loaders?: any;
    }
}

export = HappyPack;
