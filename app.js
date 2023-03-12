"use strict"; // Строгий режим

//~~ EXPRESS. Настройка и создание сервера ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Импорт библиотек и фреймворков
require("dotenv").config();
const express = require("express");
const path = require("path");

// Выбор номера порта у сервера
const port = process.env.PORT || 5500;
const hostname = "127.0.0.1";

// Создаём сервер
const app = express();

// Статические файлы (js, html, css и др) находятся в папке "public"
app.use(express.static(__dirname + "/public"));
// Для парсинга JSON
app.use(express.json());

// Шаблоны для рендеринга 'ejs'
app.set("view engine", "ejs");

/** Объект с данными, которые будут загружены на сайт (index.html) в результате рендеринга:
 *      - siteTitle: Название страницы в браузере;
 *      - metaKeyWords: Ключевые слова (keywords) в метаданных сайта;
 *      - metaDescr: Описание сайта (description) в метаданных сайта;
 */
const data4index = {
  siteTitle: "ParSir – Сервис сбора данных",
  metaKeyWords:
    "HTML, CSS, JavaScript, Node.js, Express, Parser, Parsing, Web-scraping," +
    " Web-scap, Web-scaper, import, export, service, data analysis, Commerce",
  metaDescr:
    "ParSir – сервис, обеспечивающий сбор данных о товарах с сайтов таких " +
    "интернет-магазинов, как Леруа Мерлен, Ozon и Wildberries для их дальнейшего " +
    "анализа и/или экспорта в файл",
  ParserLogo: "/img/Logo/ParSir Logo.svg",
};

//~~ EXPRESS. Обработка запросов ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/", (req, res) => {
  res.render(__dirname + "/views/pages/index", {
    data4index,
  });
});

//~~ EXPRESS. Запуск сервера ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(port, hostname, () => {
  console.log(`\tСервер был запущен на localhost:${port}!\n`);
});
