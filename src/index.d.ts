// Type definitions for happypack
// TypeScript

import { Plugin } from 'webpack';

declare class HappyPack extends Plugin {

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
