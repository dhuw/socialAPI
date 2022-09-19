const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

// Add `/users` to created routes 
router.use('/users', userRoutes);

// Add `/thoughts` to created routes 
router.use('/thoughts', thoughtRoutes);

// Export Module Router
module.exports = router;