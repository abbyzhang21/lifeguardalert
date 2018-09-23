
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('beaches').del()
    .then(function () {
      // Inserts seed entries
      return knex('beaches').insert([
        {
          id: 1,
          beach_name:'Mokolii Island',
          beach_description: 'East side beach, sunny and tropical',
          area: 'East'
        },
        {
          id: 2,
          beach_name:'Lanikai Beach Park',
          beach_description: 'Open area, full of shade and fine sand',
          area: 'East'
        },
        {
          id: 3,
          beach_name:'Turtule Beach',
          beach_description: 'View the turtles, and explore with scuba diving',
          area: 'North'
        },
        {
          id: 4,
          beach_name:'Haleiwa Beach',
          beach_description: 'Food Trucks and surfing for days',
          area: 'North'
        },
        {
          id: 5,
          beach_name:'White Plains',
          beach_description: 'Local vibes, clear waters and great surf',
          area: 'West'
        },
        {
          id: 6,
          beach_name:'Waikiki',
          beach_description: 'Popular tourist hangout, night life steps away',
          area: 'South'
        }
      ]);
    });
};