export const wetland = {
  mapping   : { defaultNamesToUnderscore: true, defaults: { cascades: [ 'persist' ] } },
  /**
   * Configure your store here. By default, wetland will use sqlit3.
   * Pick your adapter and remove sqlite3 afterwards.
   *
   * Don't forget to install the adapter you want to use.
   * For example, the following config would require you to install either mysql or mysql2.
   *
   * @see https://wetland.spoonx.org/installation.html#your-database
   */
  // stores    : {
  //   defaultStore: {
  //     client    : 'mysql',
  //     connection: {
  //       host: 'localhost',
  //       user: 'root',
  //       password: '',
  //       database: 'your-database',
  //     },
  //   },
  // },
};
