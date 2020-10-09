const express = require('express');
const app = express();
const bodyParser = require('./node_modules/body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json'); //หน้า view


// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//swagger
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', require('./route'));

const port = 3000;
const server = app.listen(port, () => {
    console.log(`Server ready at localhost:${port}`);
    console.log(`[Swagger] http://localhost:${port}/api-docs/`)
})