import type { AstroIntegration } from "astro";

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import { type Options as ViteReactPluginOptions } from '@vitejs/plugin-react';

type TailwindOptions = {
    configFile?: string;
    applyBaseStyles?: boolean;
    nesting?: boolean;
};

type ReactIntegrationOptions = Pick<ViteReactPluginOptions, 'include' | 'exclude' | 'babel'> & {
    experimentalReactChildren?: boolean;
};

export default (options?: {
    tailwind?: TailwindOptions
    react?: ReactIntegrationOptions
}): AstroIntegration[] => [tailwind(options?.tailwind), react(options?.react)]