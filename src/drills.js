require('dotenv').config();

const knex = require('knex');


const knexInstance = knex({
  client: 'pg',
  connection:
    process.env.DB_URL
});

function searchByProductName(searchTerm) {
  knexInstance
    .select( '*' )
    .from('shopping_list')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
      console.log(result);
    });
}

searchByProductName('seitan');


console.log('knex and driver installed correctly');
