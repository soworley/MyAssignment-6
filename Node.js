const express = require('express');
const app = express();

// Example API route
app.get('/api/recipes', (req, res) => {
  res.json([{ id: 1, name: "Chocolate Cake" }]);
});

// Listen on port from environment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
