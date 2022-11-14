const { expect, assert } = require("chai");
const config = require("../db/knexfile");
const db = require("knex")(config);
const secModel = require("../sec/sec.model");
const SEC_TABLE = secModel.SEC_TABLE;
// const fixtures = require("./fixtures");

describe("sec", () => {
  describe("setup", () => {
    it("should connect to database", () => {
       db
        .raw("select 1 as result")
        .catch(() => {
          assert.fail("unable to connect to database");
        });
    });

    it("has run the initial migration", () => {
      db(SEC_TABLE)
        .select()
        .catch(() => assert.fail("employee table is not found."));
    });
  });

  describe("getAll", () => {
    it("should return an array of employees", async () => {
      const sec = await secModel.getAll();
      expect(sec).to.be.an.instanceof(Array);
    });

    it("should accept a limit argument", async () => {
      const secs = await secModel.getAll(2);
      expect(secs.length).to.be.at.most(2);
    });
  });

  describe("create", () => {
    const newId = 99; 
    describe("with valid properties", () => {
      it("should be able to create a new sec", async () => {
        const newSec = {
          id: newId,
          last_name: "new_sec_l",
          first_name: "new_sec_f",
          department: "new_sec_dept",
          start_date: "1999-01-01",
          end_date: "1999-12-31"  
        };

        const id = await secModel.create(newSec);
        const sec = await db(SEC_TABLE)
              .select()
              .where("id", newId)
              .first();
        expect(sec).to.exist;
        expect(sec.id).to.eq(newId);
      });
    });
  });

});
