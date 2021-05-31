const request = require("supertest");
const app = require("./app");
describe("Sample Test", () => {
  it("should test that true === true", async () => {
    await request(app).get("/").expect(200);
  });
});
