import { Route } from 'stix';
import { ApplicationController } from '../src/Controller';

/**
 * This config is where you configure your routes.
 *
 * The Route class offers helpers for you to maintain references in your code and prettify the whole deal.
 * Route offers methods that correspond to their request method:
 *
 *  Signature: Route.method(route, controller, action)
 *
 *  Some examples:
 *    - Route.post('/user/signup', 'UserController', 'signup');
 *    - Route.patch('/user/:id', 'UserController', 'updateProfile');
 *    - Route.delete('/cart/:product', 'CartController', 'removeFromCart');
 *
 *  Available methods:
 *    - post
 *    - get
 *    - delete
 *    - put
 *    - patch
 */
export const router = {
  routes: [
    Route.get('/', ApplicationController, 'root'),
  ],
};
