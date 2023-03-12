"use strict"; // Строгий режим

//~~ EXPRESS. Настройка и создание сервера ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Импорт библиотек и фреймворков
const express = require("express");
const path = require('path');

// Выбор номера порта у сервера
const port = process.env.PORT || 5500;

// Создаём сервер
const app = express();

// Статические файлы (js, html, css и др) находятся в папке "public"
app.use(express.static(__dirname + '/public'));
// Для парсинга JSON
app.use(express.json());

// Шаблоны для рендеринга 'ejs'
app.set('view engine', 'ejs');

const favicons = {
    mfest: 'rel="manifest" href="favicon/site.webmanifest"',
}

//~~ EXPRESS. Обработка запросов ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get('/', (req, res) => {
    res.render(__dirname + '/views/pages/index', {
        // favicons
    });
})

//~~ EXPRESS. Запуск сервера ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(port, () => {
    console.log(`\tСервер был запущен на localhost:${port}!\n`);
});