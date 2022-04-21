const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagger/swagger.json');
const express = require('express');
const router = express.Router();

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocs));

module.exports = router