exports.up = function (knex) {
    return knex.schema.createTable('lookups', function (table) {
        table.increments('id').primary();
        table.string('kind');
        table.string('name');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('lookups');
};