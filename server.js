const express = require('express');
const app = express();
app.use(express.static('./dist/fr-pgs'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/fr-pgs/'}),
);
app.listen(process.env.PORT || 8080);