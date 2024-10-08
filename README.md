# Задачи для разработки

## Задача 1. Реализовать Random Quote Machine

### Стек:
- React
- JavaScript

### Описание задачи:
Необходимо реализовать приложение Random Quote Machine с использованием фреймворка React. Приложение должно отображать случайные цитаты известных авторов.

### Шаги реализации:
1. Посмотрите примеры реализации.
2. При первом открытии на странице должна отображаться случайная цитата известного автора.
3. При нажатии на кнопку цитата должна обновляться.
4. Для получения цитат отправляйте запросы на URL:
   [https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru&jsonp=?](https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru&jsonp=?)
5. Изучите примеры кода, чтобы понять, как это можно сделать на React.

### Примеры реализации:
- Без кода: [CodePen Example](https://codepen.io/Grigorov/full/YwRwOx)
- С кодом: [CodePen Example](https://codepen.io/Grigorov/pen/YwRwOx)

### Что проверяем:
- Базовое построение компонентов и кнопок.
- Взаимодействие с API.
- Понимание асинхронного вызова промисов.

## Задача 2. Реализовать поисковик по Википедии

### Описание задачи:
Необходимо реализовать поисковик по Википедии (Wikipedia Searcher) с использованием React и MobX.

### Шаги реализации:
1. На странице должно находиться поле для поиска.
2. По нажатию на Enter или на кнопку «Search/Поиск» должны отображаться результаты запроса.
3. Реализация должна использовать следующие технологии:
   - React
   - MobX
4. Запросы можно реализовать с помощью axios (необязательно).
5. Для взаимодействия с API ознакомьтесь с примерами кода или документацией на [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page).

### Примеры реализации:
- На весь экран: [CodePen Example](https://codepen.io/Grigorov/full/dyQNbmB)
- С кодом (не на React): [CodePen Example](https://codepen.io/Grigorov/pen/dyQNbmB)
- Дополнительные примеры можно найти на [CodePen](https://codepen.io), используя поиск по ключевым словам "Wikipedia viewer".

### Что проверяем:
- Умение работать с DOM (Document Object Model).
- Умение работать со стором MobX.
- Умение работать с запросами.

### Примечание:
Рекомендуем использовать открытые ресурсы с исходным кодом, такие как [GitHub](https://github.com/), [CodeSandbox](https://codesandbox.io/), и [CodePen](https://codepen.io) для просмотра примеров реализаций.
