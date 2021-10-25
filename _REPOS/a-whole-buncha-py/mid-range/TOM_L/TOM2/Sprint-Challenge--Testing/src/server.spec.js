const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  describe("POST /games", () => {
    it("should return a status code 201 if valid data is passed in", async () => {
      const response = await request(server)
        .post("/games")
        .send({
          title: "Galaxian",
          genre: "Arcade",
          releaseYear: 1979
        });
      expect(response.status).toEqual(201);
    });
    it("should return a bresponse body of type object", async () => {
      const response = await request(server)
        .post("/games")
        .send({
          title: "Galaxian",
          genre: "Arcade",
          releaseYear: 1979
        });
      expect(typeof response.body).toEqual("object");
    });
  });

  describe("GET /games", () => {
    it("should return a status code of 200", async () => {
      const response = await request(server).get("/games");
      expect(response.status).toEqual(200);
      expect(response.type).toEqual("application/json");
      expect(response.body).toEqual([
        {
          id: 1,
          title: "Pacman",
          genre: "Arcade",
          releaseYear: 1980
        },
        {
          id: 2,
          title: "Galaxian",
          genre: "Arcade",
          releaseYear: 1979
        }
      ]);
    });
    it("should return a response with type on json", async () => {
      const response = await request(server).get("/games");
      expect(response.type).toEqual("application/json");
    });

    it("should return a set of data conforming to the test data", async () => {
      const response = await request(server).get("/games");
      expect(response.body).toEqual([
        {
          id: 1,
          title: "Pacman",
          genre: "Arcade",
          releaseYear: 1980
        },
        {
          id: 2,
          title: "Galaxian",
          genre: "Arcade",
          releaseYear: 1979
        }
      ]);
    });

    it("should always return an array of type object of data", async () => {
      const response = await request(server).get("/games");
      expect(typeof response).toEqual("object");
    });
  });
});

describe("GET /games", () => {
  it("should return an array of gameData and a status of 200 and a content type of JSON", async () => {
    const response = await request(server).get("/games");

    expect(response.type).toEqual("application/json");
    expect(response.status).toEqual(200);
  });

  it("should always return an array of data", async () => {
    await request(server)
      .get("/games")
      .then(response => {
        typeof response === "array";
      });
  });
});

describe("GET /games/:id", () => {
  it("should return a game bassed on id provided with type of json data", async () => {
    const response = await request(server).get("/games/1");
    expect(response.type).toEqual("application/json");
  });
  it("should return a status of 200", async () => {
    const response = await request(server).get("/games/1");
    expect(response.status).toEqual(200);
  });

  it("should return a 404 error when a game is not found in the returned data", async () => {
    await request(server)
      .get("/games/22")
      .expect("Content-Type", /json/)
      .expect(404);
  });
});
