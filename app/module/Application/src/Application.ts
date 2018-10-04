import * as config from '../config';
import { ModuleInterface } from 'stix';

/**
 * This file is the main class of your module.
 * This is where stix will collect the configuration and call init() and/or onBootstrap().
 */
export class Application implements ModuleInterface {
  getConfig() {
    return config;
  }
}
