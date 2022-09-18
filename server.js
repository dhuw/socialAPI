const express = require('express');
const { ConnectionPoolClosedEvent } = require('mongodb');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(require('./routes'));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/social-network",
    {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

//a way to log mongo queries that are being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`connected on localhost:${PORT}`));