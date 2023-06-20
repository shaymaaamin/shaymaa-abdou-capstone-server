exports.seed = function (knex) {
    // Deletes all existing entries and resets primary keys
    return knex('lookups')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('lookups').insert([
                { id: 1, kind: 'fault', name: 'Power Failure - PWR' },
                { id: 2, kind: 'fault', name: 'Overheating - OVH' },
                { id: 3, kind: 'fault', name: 'Short Circuit - SHC' },
                { id: 4, kind: 'priority', name: 'Low' },
                { id: 5, kind: 'priority', name: 'Medium' },
                { id: 6, kind: 'priority', name: 'High' },
                { id: 7, kind: 'priority', name: 'Critical' },
                { id: 8, kind: 'type', name: 'Generator' },
                { id: 9, kind: 'type', name: 'Transformer' },
                { id: 10, kind: 'type', name: 'Circuit Breaker' },
                { id: 11, kind: 'status', name: 'Open' },
                { id: 12, kind: 'status', name: 'In Progress' },
                { id: 13, kind: 'status', name: 'Resolved' },
                { id: 14, kind: 'skill', name: 'Electrical Troubleshooting' },
                { id: 15, kind: 'skill', name: 'Wiring Installation' },
                { id: 16, kind: 'skill', name: 'Equipment Repair' },
            ]);
        });
};
