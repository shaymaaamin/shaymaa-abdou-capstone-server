exports.up = function (knex) {
    return knex.schema.createTable('employees', function (table) {
        table.increments('id').primary();
        table.string('first_name');
        table.string('last_name');
        table.string('email_address');
        table.string('phone_number');
        table.float('lat');
        table.float('lng');
        table.string('status');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('employees');
};