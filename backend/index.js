const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        event: 'Week OmniStack 11.0',
        student: 'Francisco Torres'
    });
});

app.listen(3333);