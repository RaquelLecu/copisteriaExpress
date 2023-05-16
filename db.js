const mysql = require('mysql')
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'copisteria',
  ports: 3306
})

const db = {
  query: (str, arrayOpt) => {
      return new Promise((resolve, reject) => {
          con.query(str, arrayOpt, (err, result) => {
              if (err) {
                  return reject(err);
              }
              resolve(result);
          });
      });
  },
  execute: (str) => {
      return new Promise((resolve, reject) => {
          con.execute(str, (err, result) => {
              if (err) {
                  return reject(err);
              }
              resolve(result);
          });
      });
  }
}
  
module.exports = db;
