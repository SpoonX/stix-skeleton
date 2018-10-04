import * as config from './config';
import stix, { Application, ApplicationModes, Config, createDebugLogger, ServerConfigInterface } from 'stix';

/**
 * This file start is the entry point of your application.
 * We import your config, and tell stix to launch the server.
 *
 * Hint:
 *  Take a look at config/modules.ts to figure out in what order your app is loaded.
 *
 * Pro tip:
 *  When developing, make sure to run `yarn dev` to start the server, which includes auto reload.
 *  If you wish to see debug information including execution times, run `yarn debug`.
 */
(async () => {
  const debug = createDebugLogger('app');
  const app: Application = await stix(config).launch(process.env.STIX_APPLICATION_MODE as ApplicationModes);

  if (app.getMode() === ApplicationModes.Server) {
    const serverConfig = app.getServiceManager().get(Config).of<ServerConfigInterface>('server');

    debug(`Server running on: ${serverConfig.url}:${serverConfig.port}`);
  }
})();
