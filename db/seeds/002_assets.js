exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('assets').del()
        .then(function () {
            // Inserts seed entries
            return knex('assets').insert([
                {
                    name: 'Asset 1',
                    description: 'Description for Asset 1',
                    type_id: 18,
                    lat: 43.6339676,
                    lng: -79.394823
                },
                {
                    name: 'Asset 2',
                    description: 'Description for Asset 2',
                    type_id: 19,
                    lat: 43.6369865,
                    lng: -79.410435
                },
                {
                    name: 'Asset 3',
                    description: 'Description for Asset 3',
                    type_id: 20,
                    lat: 43.6600365,
                    lng: -79.3927769
                },
                {
                    name: 'Asset 4',
                    description: 'Description for Asset 4',
                    type_id: 21,
                    lat: 43.656422,
                    lng: -79.380916
                },
                {
                    name: 'Asset 5',
                    description: 'Description for Asset 5',
                    type_id: 22,
                    lat: 43.659740,
                    lng: -79.371567
                },
                {
                    name: 'Asset 6',
                    description: 'Description for Asset 6',
                    type_id: 23,
                    lat: 43.662891,
                    lng: -79.395656
                },
                {
                    name: 'Asset 7',
                    description: 'Description for Asset 7',
                    type_id: 24,
                    lat: 43.6495173,
                    lng: -79.3932719
                },
                {
                    name: 'Asset 8',
                    description: 'Description for Asset 8',
                    type_id: 25,
                    lat: 43.6574831,
                    lng: -79.4532316
                },
                {
                    name: 'Asset 9',
                    description: 'Description for Asset 9',
                    type_id: 26,
                    lat: 43.6553854,
                    lng: -79.4640132
                },
                {
                    name: 'Asset 10',
                    description: 'Description for Asset 10',
                    type_id: 27,
                    lat: 43.678222,
                    lng: -79.400765
                }
            ]);
        });
};