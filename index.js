const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(bodyParser.json());

// Login API
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    const hashedPassword = '$2b$10$19mkiBBlcq3uLle5UNZJ3.BMDruV6G0CmtPJyOpOOpPhHRRZT4KCC';
    const validPassword = bcrypt.compareSync(password, hashedPassword);

    if (!validPassword) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }
    const token = jwt.sign({ username }, 'secret-key');
    res.json({ token });
});

function authenticateToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    jwt.verify(token, 'secret-key', (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
}

// Tambula ticket creation API
app.post('/tickets/create', authenticateToken, (req, res) => {
    const { tickets } = req.body;
    const ticketId = 'some_unique_id';
    res.json({ ticketId });
});

app.get('/tickets/fetch/:id', authenticateToken, (req, res) => {
    const { id } = req.params;
    res.json({ tickets: fetchedTicketData });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});


