exports.seed = function (knex) {
    // Deletes all existing entries and resets primary keys
    return knex('skills')
        .del()
        .then(function () {
            // Inserts seed entries
            const skills = [];
            const employee_ids = [1, 14];
            const skill_ids = [28, 37];

            for (let i = employee_ids[0]; i <= employee_ids[1]; i++) {
                const numSkills = Math.floor(Math.random() * 5) + 1;
                for (let j = 0; j < numSkills; j++) {
                    const skill_id = Math.floor(Math.random() * (skill_ids[1] - skill_ids[0])) + skill_ids[0] - 1;
                    const exists = skills.find(skill => skill.skill_id === skill_id && skill.employee_id === i);
                    if (!exists) {
                        skills.push({
                            skill_id: skill_id,
                            employee_id: i
                        });
                    }
                }
            }
            return knex('skills').insert(skills);
        });
};