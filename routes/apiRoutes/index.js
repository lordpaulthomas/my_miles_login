const router = require('express').Router();
const authRoutes = require('./authRoutes');
const accountRoutes = require('./accountRoutes');



// Every route inside of here
// has /api
router.use('/auth', authRoutes);
router.use('/account', accountRoutes);

module.exports = router;