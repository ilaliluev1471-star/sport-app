const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Для продакшена отдаём собранный React
app.use(express.static(path.join(__dirname, '../client/dist')));

// Все маршруты → index.html (React Router работает сам)
app.get('/*path', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
});