const { json } = require("express");
const db = require("../db/db");
const SEC_TABLE = "employee";

module.exports = {
  SEC_TABLE,
  // for GET method
  getAll(limit = 100) {
    return db.select({
        id: "id",
        last_name: "last_name",
        first_name: "first_name",
        department: "department",
        position:  "position",
        start_date: "start_date",
        end_date: "end_date",
        created_at: "created_at",
        updated_at: "updated_at"  
      })
      .from(SEC_TABLE)
      .limit(limit); 
  },

  // for PUT method
  create(sec) {
    return db(SEC_TABLE).insert(sec);
  },

  // for DELETE method
  remove(id) {
    return db(SEC_TABLE).returning("id").where("id", id).del();
  },

  // for PUT method
  update(id, sec) {
    return db(SEC_TABLE).where('id', '=', id).update(sec);
  }
};