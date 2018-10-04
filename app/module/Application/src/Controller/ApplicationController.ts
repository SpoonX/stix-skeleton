import { AbstractActionController, ContextInterface } from 'stix';

/**
 * This is a controller. A controller holds the actions that run when a route matches.
 *
 * The name of the controller can be anything and it's a coincidence that it has the same name as the module.
 */
export class ApplicationController extends AbstractActionController {

  /**
   * This is the root action, linked to from ../../config/router.ts.
   *
   * Just like with the controller nam, this can be anything.
   */
  public async root({ params }: ContextInterface) {
    return this.okResponse({ Hello: 'world!' });
  }
}
