/**
 * This file exports all the named configs, resulting in a nice key => value configuration format.
 * Stix.Config merges configs from all modules, allowing you to override the configs provided by modules.
 * This includes your own configs. The last module to be loaded (in modules.ts) wins.
 *
 * IMPORTANT:
 *  The most dominant config is this one, the main config.
 *  Anything you define here will override all the others, including those from modules.
 *  This is useful for environment specific configs for example.
 */
export * from './logger';
export * from './modules';
export * from './response';
export * from './server';
