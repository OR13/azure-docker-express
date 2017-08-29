//During the test the env variable is set to test
process.env.NODE_ENV = "test";

//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("./app");
const assert = chai.assert;

chai.use(chaiHttp);

const getUrl = url => {
  return new Promise((resolve, reject) => {
    chai
      .request(server)
      .get(url)
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.body);
        }
      });
  });
};

describe("Express Tests", () => {
  it("Root", async () => {
    let page = await getUrl("/");
    assert(page !== undefined);
    //   console.log(page)
  });
});
