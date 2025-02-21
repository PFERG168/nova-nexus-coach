// Minimal user model (use an ORM like Sequelize for real apps)
/*
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'YOUR_PASSWORD',
  database: 'game_coach_db'
});

exports.getUserById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};
*/
