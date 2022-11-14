/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

//  exports.seed = async function(db) {
//   await db('employee').del();
//  }

exports.seed = async function(db) {
  await db('employee').del();
  await db('employee').insert([
    {
      id: 1,
      last_name: "aa-san-l",
      first_name: "aa-san-f",
      department: "dept-a",
      position:  "S",
      start_date: "2001-01-01",
      end_date: null,
    },
    {
      id: 2,
      last_name: "aaa-san-l",
      first_name: "aaa-san-f",
      department: "dept-a",
      position:  "S",
      start_date: "2011-01-01",
      end_date: "2012-01-01",
    },
    {
      id: 3,
      last_name: "bb-san-l",
      first_name: "bb-san-f",
      department: "dept-b",
      position:  "S",
      start_date: "2021-01-01",
      end_date: null,
    }
  ]);
};
