exports.seed = function (knex) {
    // Deletes all existing entries and resets primary keys
    return knex('skills')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('skills').insert([
                {
                    id: 1,
                    skill_id: 14,
                    employee_id: 1
                },
                {
                    id: 2,
                    skill_id: 15,
                    employee_id: 1
                }
            ]);
        });
};