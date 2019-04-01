import { Gates } from 'stix-gates';
import { Wetland } from 'stix-wetland';
import SwaggerModule from 'stix-swagger';
import GeneratorModule from 'stix-generator';
import SchemaModule from 'stix-schema';
import { Security } from 'stix-security';
import { ModuleManagerConfigInterface } from 'Stix';
import Application from '../module/Application';

/**
 * This file dictates in what order your application should be loaded.
 * Modules are loaded in the order you define them here.
 * This matters because this allows you to define which module's configuration gets merged in first and last.
 *
 * As you can see, the defaults include Gates and Application.
 *
 *  - Gates:
 *    stix-gates module allowing you to run requests through your own functions.
 *    This way you can validate and enrich requests before they end up in your actions.
 *
 *  - Application:
 *    This is your own code. This module is the default for the skeleton application.
 *    A module is just a directory with an entry file, so feel free to add/rename/remove them.
 *
 *  @see https://github.com/SpoonX/stix-wetland
 *  @see https://github.com/SpoonX/stix-gates
 *  @see https://github.com/SpoonX/stix-schema
 *  @see https://github.com/SpoonX/stix-swagger
 *  @see https://github.com/SpoonX/stix-security
 */
export const modules: ModuleManagerConfigInterface = [
  GeneratorModule,
  Gates,
  Wetland,
  Security,
  SchemaModule,
  SwaggerModule,
  Application,
];
