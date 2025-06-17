![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Gulp](https://img.shields.io/badge/Gulp-CF4647?style=for-the-badge&logo=gulp&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

# RU

## Моя SASS библиотека 🎨✨

### 🌟 О библиотеке

Это класс-ориентированная SASS-библиотека, созданная для изучения и демонстрации всех возможностей препроцессора SASS. Возможности этой библиотеки:

- 🎨 **Гибкая работа с цветами**  
  Изменяйте цвета текста, фона, создавайте светлые/темные варианты
- 🧩 **Готовые UI-компоненты**  
  Навбары, кнопки, карточки и другие элементы
- 📱 **Адаптивная сетка**  
  Готовая grid-система с мобильной адаптацией
- ⚡ **Быстрая настройка**  
  Легкая кастомизация через переменные

[📝 Полная документация](https://ali-hsv.github.io/SASS-library/) | [📦 Скачать последнюю версию](https://github.com/Ali-Hsv/SASS-library/archive/refs/heads/main.zip)

### ⚡ Быстрый старт

#### Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/Ali-Hsv/SASS-library.git
cd SASS-library
```

2. Проверьте наличие Node.js:

```bash
node -v
# или
npm -v
```

> Если команды не работают, установите [Node.js](https://nodejs.org/en).

3. Установите зависимости:

```bash
npm init -y
npm install gulp gulp-sass gulp-purgecss gulp-plumber sass --save-dev
npm run gulp
```

#### Варианты использования

1. Базовое использование
   - Просто подключите готовый CSS-файл и если нужны изменения то изменяйте через сам sass - файл
2. Кастомизация
   - Создайте файл custom.scss

```scss
// Переопределяем переменные
$primary: #ff5722;
$secondary: #2196f3;

// Подключаем библиотеку
@import "scss/main";
```

### 📜 Лицензия

Этот проект распространяется под лицензией MIT

### 📬 Контакты

<div align="center"> <a href="https://github.com/Ali-Hsv"> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"> </a> <a href="mailto:ваш@email.com"> <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"> </a> </div>

<div align="center"> <p>⭐ Если вам нравится этот проект, не забудьте поставить звезду!</p> </div> ```
