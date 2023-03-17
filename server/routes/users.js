const router = require('express').Router();

const users = ['Bob', 'Alex', 'Will', 'Tristan'];

router.get('/', (req, res) => {
  res.json(users);
});

module.exports = router;











// module.exports = (db) => {
//   // all routes will go here 
//   

//   return router;
// };