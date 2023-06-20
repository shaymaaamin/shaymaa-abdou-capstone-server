exports.up = function (knex) {
    return knex.schema.createTable('faults', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.string('code');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('faults');
};