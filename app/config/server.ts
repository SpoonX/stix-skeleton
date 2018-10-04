export const server = {
  // The port your server will be running on.
  port: 1991,

  // The url. Used by index.ts and meta modules such as stix-swagger.
  url: 'http://localhost',

  /**
   * Cross Origin Resource Sharing; usually needed for API servers.
   *
   * @see https://github.com/koajs/cors#corsoptions
   */
  cors: {
    enabled: true,
    options: {
      origin: '*',
    },
  },
};
