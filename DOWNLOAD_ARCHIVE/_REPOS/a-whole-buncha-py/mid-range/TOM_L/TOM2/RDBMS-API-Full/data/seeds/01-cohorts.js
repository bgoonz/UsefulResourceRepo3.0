exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cohorts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cohorts").insert([
        { name: "Full Stack Web Infinity" },
        { name: "Full Stack Web Delta PI" },
        { name: "FSW13 ULTIMATE FORM" }
      ]);
    });
};
