exports.up = function (knex) {
    return knex.schema.createTable('employee_skills', function (table) {
        table.increments('id').primary();
        table.integer('skill_id').unsigned().references('id').inTable('lookups');
        table.integer('fault_id').unsigned().references('id').inTable('lookups');
        table.integer('employee_id').unsigned().references('id').inTable('employees');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('employee_skills');
};