# Проект Thomas Rhythm

---
### landing page


## **Описание структуры проекта**
------------------------------------
Название папки |Содержание папки
---------------|---------------------
css            |style.css
               |grid.css
               |et-line.css
               |font-awesome.css
---------------|---------------------
js             |google-maps.js
               |header-scroll.js
               |scroll-to.js
               |jqury.slicnav.min.js
               |init.js
---------------|---------------------
img            |логотипы и картинки
---------------|---------------------
fonts          |шрифты
-----------------------------------



## **Описание подключаемых библиотек**
-----------------------------------------
Название             | цель
---------------------|----------------------
grid.css             | Основные стили разметки колонок
et-line.css          | Стили иконочного шрифта
font-awesome.css     | Стили иконочного шрифта
google-maps.js       | для подключения карты
header-scroll.js     | для прилипания заголовока к вершине, при прокрутки вниз.
scroll-to.js         | позволяет плавно проскролить страницу до определенного элемента
jqury.slicnav.min.js | подключение меню для мобильной версии
-----------------------------------------------------


##  **СТАНДАРТНЫЕ КЛАССЫ**

1. text-center - Выравнивание текста по центру
2. text-right  - Выравнивание текста по правому краю
3. text-justify- Выравнивание по ширине

4. bg-black -  Фоновый цвет черный
5. bg-grey  -  Фоновый цвет серый

6. pull-left  - Выравнивает элемент по левому краю
7. pull-right - Выравнивает элемент по правому краю
8. m-auto     - Отменяет прежнее выравнивание по какому либо краю и выравнивает элемент по центру


## **СТАНДАРТНЫЕ КОМПАНЕНТЫ**

#### 1.для секций:
1.default-section - стандартная секция с отступом содержимого сверху и снизу по 135px
2.small-section   - стандартная секция с отступом содержимого сверху и снизу по 70px
3.container       - контейнер с максимальной шириной  1200px;
4.container-fluid - контейнер на весь экран

### 2.для текста:
 1. title                     - общие стили для всех заголовков
 2. title.title-white         - общие стили для всех заголовков с белым шрифтом
 3. title.section-title       - заголовки для секций
 4. title.section-title-light - заголовки для секций с тонким шрифтом
 5. default-title             - стандартные стили  для заголовков с небольшим шрифтом
 6. default-text              - стандартный текст
 7. default-text-small        - стандартный текст с мелким шрифтом
 8. blockquote                - стили для цитаты
 9. blockquote span           - стили для подписи к цитате

### 3.для кнопок:
1. btn                        - общие стили для всех кнопок
2. btn[disabled]              - стили для нерабочей кнопки
3. btn.btn-default            - стандартные стили для кнопок по умолчанию
4. btn.btn-default:hover      - стили при наведении  на кнопку по умолчанию
5. btn.btn-black              - стандартные стили для кнопок черного цвета
6. btn.btn-black:hover        - стили при наведении на ченую кнопку
7. btn.btn-xs                 - стандартные стили для кнопок небольшого размера

### 4.для формы:
1. form-control               - общие стили для формы
2. form-control:focus         - стили для псевдокласса :focus  для элемента получающего фокус.
3. textarea.form-control      - общие стили для textarea - ввода текста
4. form-control.disabled      - стили для нерабочей формы
5. form-control.error         - стили для агрегирования ошибок пользователя в формах
6. form-info                  - стили для информатирующей строки в форме
7. form-info .fa              - стили для иконки в информатирующей строке в форме

### 5.для иконок:
1. rhomb-icon                                               - общие стили для иконок
2. rhomb-icon i                                             - стили для иконочного шрифта
3. rhomb-icon.black-icon                                    - стили для иконок черный фон, белый шрифт
4. rhomb-icon.transparent-iblack-icon.social-item-icon      - стили для иконок прозрачный фон, серый шрифт
5. rhomb-icon.transparent-iblack-icon.social-item-icon:hover -стили при наведении на иконку с прозрачныйь фоном
6. arrow-ap

## **РАЗМЕТКА СТРАНИЦЫ**

1. row        - класс для элемента отображающегося как строка, которая содержит колонки .col
2. row::after - псевдоэлемент, который используется для вывода содержимого .row
3. col        - класс для колонки в котром прописаны стили

 классы в которых прописан размер колонок в grid.css:
 .col-1
 .col-2
 .col-3
 .col-4
 .col-5
 .col-6
 .col-7
 .col-8
 .col-9
 .col-10
 .col-11
 .col-12


### **АДАПТАЦИИ СТРАНИЦЫ**

**контрольная точка для devices - <1200**
Нетбуки, ноутбуки  и планшеты в альбомной ориентации 992-1200px
 @media ( max-width: 1200px) { }
.col-lg-1
.col-lg-2
.col-lg-3
.col-lg-4
.col-lg-5
.col-lg-6
.col-lg-7
.col-lg-8
.col-lg-9
.col-lg-10
.col-lg-11
.col-lg-12

**контрольная точка для devices - <992**
планшеты >7 в портретной ориентации и планшеты =7 в альбомной ориентации 768 - 991px
@media ( max-width: 991px) {}
  .col-md-1
  .col-md-2
  .col-md-3
  .col-md-4
  .col-md-5
  .col-md-6
  .col-md-7
  .col-md-8
  .col-md-9
  .col-md-10
  .col-md-11
  .col-md-12

**контрольная точка для devices  - <768**
планшеты =7 в портретной ориентации и планшеты <7 в альбомной ориентации и телефоны  577 - 767px
@media ( max-width: 767px) {}
  .col-sm-1
  .col-sm-2
  .col-sm-3
  .col-sm-4
  .col-sm-5
  .col-sm-6
  .col-sm-7
  .col-sm-8
  .col-sm-9
  .col-sm-10
  .col-sm-11
  .col-sm-12

**контрольная точка для devices- <576**
все мобильные телефоны в портретной и альбомной ориентации
@media ( max-width: 576px) {}
  .col-xs-1
  .col-xs-2
  .col-xs-3
  .col-xs-4
  .col-xs-5
  .col-xs-6
  .col-xs-7
  .col-xs-8
  .col-xs-9
  .col-xs-10
  .col-xs-11
  .col-xs-12



