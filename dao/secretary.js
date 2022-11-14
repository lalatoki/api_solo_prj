const db = require("../db/db");

class SecretaryDAO {
  async createSecretary(
    email,
    first_name,
    last_name,
    department,
    // position,
    start_date,
    end_date
  ) {
    console.log("email in createSecretary of SecretaryDAO", email);
    const [id] = await db("employee")
    // .insert({
    //   email,
    //   first_name: first_name,
    //   last_name: last_name,
    //   department: department,
    //   // position: position,
    //   position: "S", // default as 'S' for Secretary here
    //   start_date,
    //   end_date      
    // })
      .insert({
        email,
        first_name,
        last_name,
        department,
        // position: position,
        // position: "S", // default as 'S' for Secretary here
        start_date,
        end_date      
      })
      .returning('id');
    
    return id;
  }
}

module.exports = new SecretaryDAO();