require('dotenv').config();

const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

function searchByProductName(
  searchTerm
) {
  knexInstance
    .select('*')
    .from('shopping_list')
    .where(
      'name',
      'ILIKE',
      `%${searchTerm}%`
    )
    .then(result => {
      console.log(result);
    });
}

function paginateProducts(pageNumber) {
  const productsPerPage = 6;
  const offset =
    productsPerPage * (pageNumber - 1);
  knexInstance
    .select('*')
    .from('shopping_list')
    .limit(productsPerPage)
    .offset(offset)
    .then(result =>
      console.log(result)
    );
}
searchByProductName('seitan');
paginateProducts(2);


console.log(
  'knex and driver installed correctly'
);

function dateProductAdded(daysAgo) {
  knexInstance
    .select('*')
    .from('shopping_list')
    .where('date_added', '>', 
    knexInstance.raw(`now() - '?? days'::INTERVAL`, days))
    .then(result)



}

