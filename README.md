  # Проект Thomas Rhythm

  ---
  ### landing page


  ## Используемые в проекте технологии

   Библиотека JavaScript - jQuery


  ## **Описание структуры проекта**

  -----------------------------------------
  Название папки            | Содержание папки
  --------------------------|----------------------
  css/grid.css              | Стили разметки страницы
  css/et-line.css           | Стили иконочного шрифта
  css/font-awesome.css      | Стили иконочного шрифта
  css/style.css             | Стили проекта
  js/google-maps.js         | Скрипт для подключения карты
  js/header-scroll.js       | Скрипт для прилипания заголовока к вершине, при прокрутки вниз.
  js/scroll-to.js           | Скрипт позволяет плавно проскролить страницу до определенного элемента
  js/jquery.slicknav.min.js | Скрипт подключение меню для мобильной версии
  js/init.js                | Скрипт файл
  img                       | логотипы и картинки
  fonts                     | шрифты
  -----------------------------------------------------

  ---
  ## **СТАНДАРТНЫЕ КЛАССЫ и КОМПОНЕНТЫ**

  ###   КЛАССЫ:

  1. text-center - Выравнивание текста по центру
  2. text-right  - Выравнивание текста по правому краю
  3. text-justify- Выравнивание по ширине

  4. bg-black -  Фоновый цвет черный
  5. bg-grey  -  Фоновый цвет серый

  6. pull-left  - Выравнивает элемент по левому краю
  7. pull-right - Выравнивает элемент по правому краю
  8. m-auto     - Отменяет прежнее выравнивание по какому либо краю и выравнивает элемент по центру


  ### КОМПОНЕНТЫ:

  #### 1. стандартные блоки:

  1. default-section - стандартная секция с отступом содержимого сверху и снизу по 135px
  2. small-section   - стандартная секция с отступом содержимого сверху и снизу по 70px
  3. container       - контейнер с максимальной шириной  1200px;
  4. container-fluid - контейнер на весь экран


  #### 2. Стилизируем заголовки:

  1. title                     - общие стили для всех заголовков
  2. title.title-white         - общие стили для всех заголовков с белым шрифтом
  3. title.section-title       - заголовки для секций
  4. title.section-title-light - заголовки для секций с тонким шрифтом
  5. default-title             - стандартные стили  для заголовков с небольшим шрифтом


  #### 3. Стилизируем стандартную текстовую информацию:

  6. default-text              - стандартный текст
  7. default-text-small        - стандартный текст с мелким шрифтом
  8. blockquote                - стили для цитаты
  9. blockquote span           - стили для подписи к цитате


  #### 3. Стандартные кнопки:

  1. btn                        - общие стили для всех кнопок
  2. btn[disabled]              - стили для нерабочей кнопки
  3. btn.btn-default            - стандартные стили для кнопок по умолчанию
  4. btn.btn-default:hover      - стили при наведении  на кнопку по умолчанию
  5. btn.btn-black              - стандартные стили для кнопок черного цвета
  6. btn.btn-black:hover        - стили при наведении на ченую кнопку
  7. btn.btn-xs                 - стандартные стили для кнопок небольшого размера

  #### 4. Стандартные формы:

  1. form-control               - общие стили для формы
  2. form-control:focus         - стили для псевдокласса :focus  для элемента получающего фокус.
  3. textarea.form-control      - общие стили для textarea - ввода текста
  4. form-control.disabled      - стили для нерабочей формы
  5. form-control.error         - стили для агрегирования ошибок пользователя в формах
  6. form-info                  - стили для информатирующей строки в форме
  7. form-info .fa              - стили для иконки в информатирующей строке в форме
  8. guide-section form .form-control - применили стили в guide.css отступы для форм


  #### 5. Стандартные иконоки:

  1. rhomb-icon                                               - общие стили для иконок
  2. rhomb-icon i                                             - стили для иконочного шрифта
  3. rhomb-icon.black-icon                                    - стили для иконок черный фон, белый шрифт
  4. rhomb-icon.transparent-iblack-icon.social-item-icon      - стили для иконок прозрачный фон, серый шрифт
  5. rhomb-icon.transparent-iblack-icon.social-item-icon:hover -стили при наведении на иконку с прозрачныйь фоном
  6. arrow-ap

  ---

  ## **РАЗМЕТКА СТРАНИЦЫ**

  1. row        - класс для элемента отображающегося как строка, которая содержит колонки .col
  2. row::after - псевдоэлемент, который используется для вывода содержимого .row
  3. col        - класс для колонки в котром прописаны стили

  ----

  ## **АДАПТАЦИЯ СТРАНИЦЫ**

  ##### Основные контрольные точки media-запросов

  * @media (max-width: 1200px) - устройства c разрешением до 1200px
  * @media (max-width: 991px) - устройства c разрешением до 992px
  * @media (max-width: 767px) - устройства c разрешением до 768px
  * @media (max-width: 575px) - мобильные устройства c разрешением до 576px
