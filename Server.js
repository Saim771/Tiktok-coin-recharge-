const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve frontend files

app.post('/recharge', (req, res) => {
    const { username, coinAmount } = req.body;

    if (!username || !coinAmount) {
        return res.status(400).json({ message: "Invalid request" });
    }

    res.json({
        message: `✅ Payment received from cartoonnetwork@gmail.com. Sent ${coinAmount} fake coins to @${username}.`
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
