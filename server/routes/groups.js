const router = require('express').Router();
const db = require('../configs/db.config');
// const { getUserById } = require('../db/queries/users');

router.get('/', (req, res) => {
  db.query(`SELECT * FROM groups`).then((results) => {
    res.json(results.rows);
    
  })

});

module.exports = router;











// module.exports = (db) => {
//   // all routes will go here 
//   

//   return router;
// };