/**
 * This file exports all the named configs, resulting in a nice key => value configuration format.
 * Stix.Config merges configs from all modules, allowing you to override the configs provided by modules.
 * This includes your own configs. The last module to be loaded (in modules.ts) wins.
 *
 * IMPORTANT:
 *  Anything defined in the config at the root level of your app will override the options provided here.
 */
export * from './controller';
export * from './router';
