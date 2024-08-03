const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple hardcoded credentials for demonstration
    const validUsername = 'user';
    const validPassword = 'pass';

    if (username === validUsername && password === validPassword) {
        res.send('Login successful!');
    } else {
        res.render('index', { errorMessage: 'Invalid username or password' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
