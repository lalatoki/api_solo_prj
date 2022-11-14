const secretaryService = require("../service/secretary");

class SecretaryController {
  async createSecretary(req, res) {
    try {
      const id = await secretaryService.createSecretary(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new SecretaryController();