const pool = require("../databases/mysql");

const addUser = async (req, res) => {
  try {
    const { name, phone, count } = req.body;
    let sql = `INSERT INTO users (name, phone, count) VALUES ('${name}', '${phone}', ${count})`;

    await pool.query(sql);
    res.status(201).json({ message: "User added to mysql successfully" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const allUsers = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM users");
    res.json({ database: "mysql", data: response[0] });
  } catch (err) {
    console.error(err.message);

    res.sendStatus(500);
  }
};

const setup = async (req, res) => {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(50),
                phone VARCHAR(50),
                count INT
            );`);
    res.status(200).json({
      message: "Table created in mysql successfully or it is already there!",
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = { addUser, allUsers, setup };
