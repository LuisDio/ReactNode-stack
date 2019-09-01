const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log(`products server listening on port 4000`);
})