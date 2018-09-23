
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('alerts').del()
    .then(function () {
      // Inserts seed entries
      return knex('alerts').insert([
      {
        id: 1,
        alert_name:'rip_current',
        alert_description:'narrow channels of fast-moving water',
        alert_safety_tips:'If caught in a rip current, don\'t fight it! Swim parallel to the shore and swim back to land at an angle'
      
      },
      {
        id: 2,
        alert_name:'shorebreak',
        alert_description:'permanent obstruction such as a coral reef, rock, shoal, or headland that causes a wave to break, forming a barreling wave or other wave that can be surfed, before it eventually collapses.',
        alert_safety_tips:'When in doubt don\'t paddle out'
      
      },
      {
        id: 3,
        alert_name:'tsunamis',
        alert_description:'giant waves caused by earthquakes or volcanic eruptions under the sea',
        alert_safety_tips:'Evacuation route to higher ground'
      
      },
      {
        id: 4,
        alert_name:'jellyfish',
        alert_description:'made up of a smooth, bag-like body and tentacles armed with tiny, stinging cells',
        alert_safety_tips:'Clean the area affected by the sting,Never use regular water, use sea water to clean the area affected, apply cold over the sting, Remove any remains of a jellyfish tentacle on the skin, Do not rub the sting with a towel or with sand; this will just make the injury worse'
      
      },
      {
        id: 5,
        alert_name:'stingrays',
        alert_description:'long tail with serrated edges. Tail ends in a sharpened point. When threatened, the stingray can use his barbed tail to attack predators. When predators come near, he may also release venom from the underside of his tail',
        alert_safety_tips:'If you do get stung, your wound needs immediate attention. If you\'ve been stung on your chest or abdomen, seek help immediately. if you can manage, pull the barb or any spiny feeling fragments out while you\'re still in salt water -- it\'ll help clean the wound'
      
      },
      {
        id: 6,
        alert_name:'sharks',
        alert_description:'cartilaginous fishes of predatory habit that constitute the order Selachii',
        alert_safety_tips:'defend yourself with whatever weapons you can, Avoid using your, bare, hands or feet if you can avoid it; if not, concentrate your blows against the shark\'s delicate eyes or gills. A shark\'s snout is also said to be sensitive'
      
      },
      {
        id: 7,
        alert_name:'heat',
        alert_description:'transfer of kinetic energy from one medium or object to another, or from an energy source to a medium or objec',
        alert_safety_tips:'Wear protective clothing, limit time in the sun, use sunscreen, know your skin'
      
      },
      {
        id: 8,
        alert_name:'rocks',
        alert_description:'coarse-grained, fine-grained, and glassy are all descriptions of a rock\'s texture',
        alert_safety_tips:'Don\'t swim too close, be aware of the sharp edges'
      
      },
      {
        id: 9,
        alert_name:'lightning',
        alert_description:'lash of light in the sky caused by an electrical discharge between clouds or between a cloud and the Earth\'s surface',
        alert_safety_tips:'Avoid the beach during rainstorms'
      
      }      
      ]);
    });
};