const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve static files (including index.html)
app.use(express.static('public'));

// Serve index.html when accessing root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fake recharge endpoint
app.post('/recharge', (req, res) => {
    const { username, coinAmount } = req.body;

    if (!username || !coinAmount) {
        return res.status(400).json({ message: "Invalid request" });
    }

    res.json({
        message: `✅ Payment received from cartoonnetwork@gmail.com. Sent ${coinAmount} fake coins to @${username}.`
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
