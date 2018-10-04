import path from 'path';
import { ControllerManagerConfigType } from 'stix';

/**
 * Controllers are registered as services in stix.
 * This allows for complex factories to be provided without losing IoC and DI.
 *
 * To simplify things for common cases such as simple controllers with perhaps a single dependency,
 * stix allows you to specify a `locations` entry.
 * Stix will load the controllers in these directories and register them as invokables.
 *
 * This has the added benefit of supporting the @inject()` and `@patch` decorators.
 */
export const controller: ControllerManagerConfigType = {
  locations: [ path.resolve(__dirname, '..', 'src', 'Controller') ],
};
