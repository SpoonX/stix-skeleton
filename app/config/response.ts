import {
  ClientErrorResponse,
  InformationalResponse,
  RedirectionResponse,
  ResponseConfigInterface,
  ServerErrorResponse,
  SuccessfulResponse,
} from 'stix';

/**
 * This file is here to show that it is possible to implement your own responses.
 * If you don't like the defaults provided by stix you can extend them and link to your own response classes.
 */
export const response: ResponseConfigInterface = {
  responses: {
    informational: InformationalResponse,
    successful: SuccessfulResponse,
    redirection: RedirectionResponse,
    clientError: ClientErrorResponse,
    serverError: ServerErrorResponse,
  },
};
