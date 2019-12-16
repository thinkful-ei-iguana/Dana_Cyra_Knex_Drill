const knex = require('knex');
const shoppingListService = require('../src/shopping-list-service');

describe('Shopping List Service', () => {
  let testItems = [
    {
      id: 1,
      name: 'something',
      date_added: new Date(
        '1919-12-22T16:28:32.615Z'
      ),
      price: '25.00',
      category: 'Breakfast'
    },
    {
      id: 2,
      name: 'Second test item!',
      date_added: new Date(
        '2100-05-22T16:28:32.615Z'
      ),
      price: '21.00',
      category: 'Snack'
    },
    {
      id: 3,
      name: 'Third test item!',
      date_added: new Date(
        '1919-12-22T16:28:32.615Z'
      ),
      price: '3.00',
      category: 'Lunch'
    },
    {
      id: 4,
      name: 'Third test item!',
      date_added: new Date(
        '1919-12-22T16:28:32.615Z'
      ),
      price: '0.99',
      category: 'Breakfast'
    }
  ];
  let db;
  before(() => {
    db = knex({
      client: 'pg',
      connection:
        process.env.TEST_DB_URL
    });
  });
  before(() => {
    db.truncate('shopping_list');
  });
  afterEach(() => {
    db.truncate('shopping_list');
  });
  after(() => db.destroy());

  context('database has data', () => {
    beforeEach(() => {
      return db
        .into('shoppingList')
        .insert(testItems);
    });
    it('', () => {});
  });
  context(
    'database doesnt have data',
    () => {}
  );
});
