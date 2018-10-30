import * as config from './config';
import chalk from 'chalk';
import stix, { Application, ApplicationModes, ServerService } from 'stix';

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
  const mode: ApplicationModes = process.env.STIX_APPLICATION_MODE as ApplicationModes;
  const app: Application = await stix(config).launch(mode);

  if (app.getMode() === ApplicationModes.Server && !app.isProduction()) {
    const url = app
      .getServiceManager()
      .get(ServerService)
      .getURL();

    console.log(chalk`\n\t{bold {green Server ready. Happy hacking!}}`);
    console.log(chalk`\n\t{bold Server:\t\t${url}}`);
    console.log(chalk`\t{bold Swagger docs:\t${url}swagger/ui}\n`);
  }
})();
