exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { name: "Bob the Builder", cohort_id: 1 },
        { name: "Dave the Developer", cohort_id: 1 },
        { name: "Max the Mariachi Band Leader", cohort_id: 1 },
        { name: "Pablo the Programmer", cohort_id: 2 },
        { name: "Steve the SQL Admin", cohort_id: 2 },
        { name: "Michelle the Fighter", cohort_id: 3 },
        { name: "Tom the Terrible", cohort_id: 3 },
        { name: "Charletta the PM", cohort_id: 3 }
      ]);
    });
};
