exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("clients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("clients").insert([
        { name: "Jim" },
        { name: "Tim" },
        { name: "Mim" },
        { name: "Mom" },
        { name: "Jon" },
        { name: "Tom" },
        { name: "Bob" },
        { name: "Baz" },
      ]);
    });
};
