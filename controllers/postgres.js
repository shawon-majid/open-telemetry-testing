const pgpool = require("../databases/postgresdb");

const addUser = async (req, res) => {
  try {
    const { name, phone, count } = req.body;
    await pgpool.query(
      "INSERT INTO users (name, phone, count) VALUES ($1, $2, $3);",
      [name, phone, count]
    );
    res.status(201).json({ message: "User added to postgress successfully" });
  } catch (err) {
    console.error(err.message);

    res.sendStatus(500);
  }
};

const allUsers = async (req, res) => {
  try {
    const response = await pgpool.query("SELECT * FROM users;");
    res.json({ database: "Postgress", data: response.rows });
  } catch (err) {
    console.error(err.message);

    res.sendStatus(500);
  }
};

const setup = async (req, res) => {
  try {
    await pgpool.query(`CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            phone VARCHAR(50),
            count INT
        );`);
    res.status(200).json({
      message:
        "Table created in postgress successfully or it is already there!",
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

module.exports = { addUser, allUsers, setup };
