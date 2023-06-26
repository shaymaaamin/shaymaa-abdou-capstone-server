exports.seed = function (knex) {
    // Deletes all existing entries and resets primary keys
    return knex('lookups')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('lookups').insert([
                { id: 1, kind: 'priority', name: 'Low' },
                { id: 2, kind: 'priority', name: 'Medium' },
                { id: 3, kind: 'priority', name: 'High' },
                { id: 4, kind: 'priority', name: 'Critical' },
                
                { id: 5, kind: 'status', name: 'Open' },
                { id: 6, kind: 'status', name: 'In Progress' },
                { id: 7, kind: 'status', name: 'Resolved' },

                { id: 8, kind: 'fault', name: 'Power Failure - PWR' },
                { id: 9, kind: 'fault', name: 'Overheating - OVH' },
                { id: 10, kind: 'fault', name: 'Short Circuit - SHC' },
                { id: 11, kind: 'fault', name: 'Ground Fault - GRF' },
                { id: 12, kind: 'fault', name: 'Voltage Fluctuation - VFL' },
                { id: 13, kind: 'fault', name: 'Electrical Noise - ENO' },
                { id: 14, kind: 'fault', name: 'Arcing - ARC' },
                { id: 15, kind: 'fault', name: 'Corrosion - COR' },
                { id: 16, kind: 'fault', name: 'Loose Connections - LSC' },
                { id: 17, kind: 'fault', name: 'Motor Failure - MFL' },

                { id: 18, kind: 'asset_type', name: 'Generator' },
                { id: 19, kind: 'asset_type', name: 'Transformer' },
                { id: 20, kind: 'asset_type', name: 'Circuit Breaker' },
                { id: 21, kind: 'asset_type', name: 'Switchgear' },
                { id: 22, kind: 'asset_type', name: 'Motor Control Center' },
                { id: 23, kind: 'asset_type', name: 'Panelboard' },
                { id: 24, kind: 'asset_type', name: 'Busway' },
                { id: 25, kind: 'asset_type', name: 'Uninterruptible Power Supply' },
                { id: 26, kind: 'asset_type', name: 'Variable Frequency Drive' },
                { id: 27, kind: 'asset_type', name: 'Lighting Control' },

                { id: 28, kind: 'skill', name: 'Electrical Troubleshooting' },
                { id: 29, kind: 'skill', name: 'Wiring Installation' },
                { id: 30, kind: 'skill', name: 'Equipment Repair' },
                { id: 31, kind: 'skill', name: 'Preventive Maintenance' },
                { id: 32, kind: 'skill', name: 'Electrical Testing' },
                { id: 33, kind: 'skill', name: 'Control Wiring' },
                { id: 34, kind: 'skill', name: 'PLC Programming' },
                { id: 35, kind: 'skill', name: 'Motor Control' },
                { id: 36, kind: 'skill', name: 'Power Quality Analysis' },
                { id: 37, kind: 'skill', name: 'Electrical Safety' }
            ]);
        });
};