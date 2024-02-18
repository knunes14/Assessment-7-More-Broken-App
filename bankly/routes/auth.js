/** Auth-related routes. */

const User = require('../models/user');
const express = require('express');
const router = express.Router();
const createTokenForUser = require('../helpers/createToken');


/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 */

// CONTAINS BUG #1
// router.post('/register', async function(req, res, next) {
//   try {
//     const { username, password, first_name, last_name, email, phone } = req.body;
//     let user = await User.register({username, password, first_name, last_name, email, phone});
//     const token = createTokenForUser(username, user.admin);
//     return res.status(201).json({ token });
//   } catch (err) {
//     return next(err);
//   }
// }); // end

// FIXES BUG #1
router.post('/register', async function(req, res, next) {
  try {
    const { username, password, first_name, last_name, email, phone } = req.body;
    
    // Validate required fields
    if (!username || !password || !first_name || !last_name || !email || !phone) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if username is already taken
    const existingUser = await User.findByUsername(username);
    if (existingUser) {
      return res.status(409).json({ message: 'Username already taken' });
    }

    let user = await User.register({username, password, first_name, last_name, email, phone});
    const token = createTokenForUser(username, user.admin);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
});

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

// CONTAINS BUGS #2 AND #3
// router.post('/login', async function(req, res, next) {
//   try {
//     const { username, password } = req.body;
//     let user = User.authenticate(username, password);
//     const token = createTokenForUser(username, user.admin);
//     return res.json({ token });
//   } catch (err) {
//     return next(err);
//   }
// }); // end

// FIXES BUGS #2 and #3
router.post('/login', async function(req, res, next) {
  try {
    const { username, password } = req.body;
    
    // Authenticate user
    let user = await User.authenticate(username, password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = createTokenForUser(username, user.admin);
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
