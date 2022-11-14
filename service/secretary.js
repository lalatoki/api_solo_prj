const secretaryDAO = require("../dao/secretary");

class SecretaryService {
  createSecretary(secretaryDAO) {
    const {
      email,
      first_name,
      last_name,
      department,
      // position,
      start_date,
      end_date      
    } = secretaryDAO;
    console.log("secretaryDAO of SecretaryService", secretaryDAO);
    return secretaryDAO.createSecretary(
      email,
      first_name,
      last_name,
      department,
      // position,
      start_date,
      end_date      
    );
  }
}

module.exports = new SecretaryService();
