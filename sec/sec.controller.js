const secModel = require("./sec.model");

module.exports = {
  // for GET method
  async index(req, res) {
    const secs = await secModel.getAll();
    // console.log("secs in sec.controller.js", secs);
    // res.render("api/secs/index", {
    //   secs
    // });
    res.send(secs);
  },

  // for PUT method
  async save(req, res) {
    const { first_name, last_name, department, start_date, end_date } = req.body;

    const payload = {
      first_name,
      last_name,
      department,
      position: "S",
      start_date,
      end_date
    };

    let sec = await secModel.create(payload);
    res.send(sec);
    // res.redirect("/secs");
  },

  // for UPDATE method
  async update(req, res) {
    const { first_name, last_name, department, start_date, end_date } = req.body;
    const id = parseInt(req.params.id);
    const payload = {
      first_name,
      last_name,
      department,
      position: "S",
      start_date,
      end_date
    };

    console.log("id, payload", id, payload);
    await secModel.update(id, payload);
    res.sendStatus(200);    
  },

  // for DELETE method
  async delete(req, res) {
    const id = parseInt(req.params.id);
    let return_id = await secModel.remove(id);
    res.send(return_id);
  }
};