/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function cards() {
  //используем классы для карточек
  var MenuCard = /*#__PURE__*/function () {
    function MenuCard(src, alt, title, descr, price, parentSelector) {
      _classCallCheck(this, MenuCard);
      // укажем в конструкторе параметры для каждой карточки товара
      this.src = src; // зададим свойства
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }
      this.classes = classes; // array
      this.parent = document.querySelector(parentSelector); // получаем один родительский элемент, который будет передаваться в настройку класса
    }
    // перейдём на методы класса
    // класс будет брать аргументы, которые в него придут, и создавать определённую структуру

    // создадим элемент, в него добавим вёрстку, заполним её данными, которые приходят как аргументы
    // и помещаем на страницу
    _createClass(MenuCard, [{
      key: "render",
      value: function render() {
        var element = document.createElement('div'); // создаём элемент
        //в который будет помещаться определённый div

        // затем добавим проверку, добавлено ли что-то к rest - оператору
        // если не добавлено, будет пустой массив, проверяем это
        if (this.classes.length === 0) {
          //и если массив пустой, то добавляем класс приудительно
          this.classes = "menu__item";
          element.classList.add(this.classes);
        } else {
          // ну, а если элемент уже есть, то 
          // пройдёмся по каждому элементу внутри, и подсоединим его к созданному div
          // обращаемся к каждому элементу списка классов и добавляем элемент,
          //который будет находиться в массиве.
          this.classes.forEach(function (className) {
            return element.classList.add(className);
          });
          //добавляем к нему метод innerHTML, который будет формироваться динамически
        }

        element.innerHTML = "                \n                    <img src=".concat(this.src, " alt=").concat(this.alt, ">\n                    <h3 class=\"menu__item-subtitle\">").concat(this.title, "</h3>\n                    <div class=\"menu__item-descr\">").concat(this.descr, "</div>\n                    <div class=\"menu__item-divider\"></div>\n                    <div class=\"menu__item-price\">\n                        <div class=\"menu__item-cost\">\u0426\u0435\u043D\u0430: \u043E\u0442 </div>\n                        <div class=\"menu__item-total\"><span>").concat(this.price, "</span> \u0440\u0443\u0431.</div>\n                    </div>                \n            ");
        this.parent.append(element); // помещаем наш элемент внутрь родительского
      }
    }]);
    return MenuCard;
  }();
  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/menu').then(function (data) {
    data.forEach(function (_ref) {
      var img = _ref.img,
        altimg = _ref.altimg,
        title = _ref.title,
        descr = _ref.descr,
        price = _ref.price;
      new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


function forms(formSelector, modalTimerId) {
  // Forms

  var forms = document.querySelectorAll(formSelector);
  var message = {
    //loading: 'Загрузка...',
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  forms.forEach(function (item) {
    bindPostData(item);
  });
  function bindPostData(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = "\n                display: block;\n                margin: 0 auto;\n            ";
      form.insertAdjacentElement('afterend', statusMessage);
      var formData = new FormData(form);
      var json = JSON.stringify(Object.fromEntries(formData.entries()));
      (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json).then(function (data) {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(function () {
        showThanksModal(message.failure);
      }).finally(function () {
        form.reset();
      });
    });
  }
  function showThanksModal(message) {
    var prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);
    var thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = "\n            <div class=\"modal__content\">\n                <div class=\"modal__close\" data-close>\xD7</div>\n                <div class=\"modal__title\">".concat(message, "</div>\n            </div>\n        ");
    document.querySelector('.modal').append(thanksModal);
    setTimeout(function () {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
    }, 4000);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);
//module.exports = forms;

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
// потребуется две функции
// функция будет отвечать за закрытие модального окна
//примечание: до запуска функция не знает, с чем будет работать.
function closeModal(modalSelector) {
  var modal = document.querySelector(modalSelector);
  modal.classList.add('hide'); //добавим класс, скрывающий модальное окно
  modal.classList.remove('show'); // уберём класс, показывающий его
  document.body.style.overflow = ''; // при закрытии модального окна возвращаем возможность скролла
}

// функция будет отвечать за открытие модальных окон
function openModal(modalSelector, modalTimerId) {
  var modal = document.querySelector(modalSelector);
  modal.classList.add('show'); //добавим класс, показывающий модальное окно
  modal.classList.remove('hide'); // уберём класс, скрывающий его
  document.body.style.overflow = 'hidden'; //добавим стиль, запрещающий прокрутку страницы

  if (modalTimerId) {
    clearInterval(modalTimerId); //если пользователь сам открыл модальное окно без участия скриптов, очистим интервал и не будем запускать функцию.
  }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  var modalTrigger = document.querySelectorAll(triggerSelector),
    //получаем кнопки, которые будут треиггерить модальное окно
    // чтобы получить их через data-аттрибут, нужно указать кавычки и кадратные скобки
    modal = document.querySelector(modalSelector); // аттрибут, который отвечает за модальное окно

  // Будем перебирать все кнопки, поскольку можем не знать конечное их количество.
  modalTrigger.forEach(function (btn) {
    btn.addEventListener('click', function () {
      return openModal(modalSelector, modalTimerId);
    }); //обращаемся к модальному окну
  });

  modal.addEventListener('click', function (e) {
    //на модальное окно повешаем обработчик события клика
    //если цель клика - модальное окно, или у цели есть аттрибут data-close (спецсимвол ×) аттрибут равен пустой строке ,мы ничего в него не помещаем
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      //если пользователь кликнул вне модального окна в появившемся блоке modal, то
      closeModal(modalSelector); // закрываем модальное окно
    }
  });

  document.addEventListener('keydown', function (e) {
    // следим за нажатием клавиши
    if (e.code === "Escape" && modal.classList.contains('show')) {
      //выбираем два условия
      // 1 - нажата клавиша ESC
      // 2 - модальное окно ткрыто
      closeModal(modalSelector); // закрываем модальное окно
    }
  });

  function showModalByScroll() {
    // берём контент справа и тот контент, который видим, и сравниваем с полной прокруткой
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal(modalSelector, modalTimerId); // открываем модальное окно
      window.removeEventListener('scroll', showModalByScroll); // задаём, в каком случае нужно удалять слушатель
      // а именно - когда мы долистали до конца страницы, и функция показа модального окна уже запустилась.
    }
  }
  //если пользователь долистывает страницу до конца, ему показывает модальное окно 1 раз
  window.addEventListener('scroll', showModalByScroll);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((module) => {

function slider(_ref) {
  var container = _ref.container,
    slide = _ref.slide,
    nextArrow = _ref.nextArrow,
    prevArrow = _ref.prevArrow,
    totalCounter = _ref.totalCounter,
    currentCounter = _ref.currentCounter,
    wrapper = _ref.wrapper,
    field = _ref.field;
  // Slider

  // нам также понадобится новая переменная для того, чтобы ориентироваься, насколько мы уже отступили
  var offset = 0;
  // чтобы слайдер заработал, нам нужно смещать картинку
  var slideIndex = 1; // зададим переменную для индекса слайдов. 
  //берём человекочитаемый вариант и отсчёт с единицы

  var slides = document.querySelectorAll(slide),
    // зададим переменную - кооличество слайдов, которые будем брать со страницы
    slider = document.querySelector(container),
    prev = document.querySelector(prevArrow),
    // также для стрелки предыдущего слайда, чтобы повесить на неё обработчик события
    next = document.querySelector(nextArrow),
    // и следующего.
    total = document.querySelector(totalCounter),
    // общее количество слайдов
    current = document.querySelector(currentCounter),
    // текущий слайдер
    slidesWrapper = document.querySelector(wrapper),
    //добавим обёртку    
    width = window.getComputedStyle(slidesWrapper).width,
    //возьмём ширину из computed style
    slidesField = document.querySelector(field); //поле со слайдерами

  function addZero() {
    if (slides.length < 10) {
      // если общее количество слайдов меньше десяти
      total.textContent = "0".concat(slides.length); // то к итоговому количеству добавится слева ноль
      current.textContent = "0".concat(slideIndex); // и то же самое с текущим слайдом
    } else {
      total.textContent = slides.length; // в обратном случае оно будет неизменным
      current.textContent = slideIndex; // если слайдов больше десяти, то ноль не добавляем, присваиваем значение 
    }
  }

  ;
  addZero();
  function dotsOpacity() {
    dots.forEach(function (dot) {
      return dot.style.opacity = ".5";
    }); // по умолчанию установим прозрачность точки в 50%
    dots[slideIndex - 1].style.opacity = 1; // однако же, текущую сделаем непрозрачной
  }
  ;
  slidesField.style.width = 100 * slides.length + '%'; // установим ширину блока.
  slidesField.style.display = 'flex'; // добавим flex, чтобы все слайды выстроились в одну полоску
  slidesField.style.transition = '0.5s all'; // также добавим свойство transition для того,
  // чтобы получать плавный переход между слайдами

  slidesWrapper.style.overflow = 'hidden'; // ограничим показ элементов внутри wrapper, скрыв все элементы, котоыре не попадают в область видимости

  slides.forEach(function (slide) {
    //переберём все слайды и каждому установим определённую ширину, 
    //которая нас интересует
    slide.style.width = width;
  });
  slider.style.position = 'relative'; //обратимся к слайдеру, чтобы установить ему position relative
  // это нужно для того, чтобы все абсолютно спозиционированные элементы внутри слайда нормально отображались

  //далее создадим обёртку для точек, и застилизуем её.
  var indicators = document.createElement('ol'),
    // ordered list
    dots = []; // создадим массив для перебора точек
  indicators.classList.add('carousel-indicators'),
  // добавим класс для индикаторов
  //застилизуем блок, чтобы он красиво выглядел на странице. 
  //Берём способ с добавлением в файл, чтобы понять, что так тоже можно
  indicators.style.cssText = "\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    ";
  // поместим обёртку прямо вовнутрь слайдера
  slider.append(indicators);

  // основываясь на количестве слайдов, создадим определённое количество точек
  for (var i = 0; i < slides.length; i++) {
    var dot = document.createElement('li');
    //укажем, какая точка к камому слайду идёт
    dot.setAttribute('data-slide-to', i + 1);
    //застилизуем
    dot.style.cssText = "\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n        ";
    if (i == 0) {
      //обращаясь к первой точке,
      dot.style.opacity = 1; // меняем её прозрачность на непрозрачную
    }

    indicators.append(dot); // добавим точку к индикатору
    dots.push(dot); // добавим точку в массив
  }
  //в целях оптимизации кода сделаем функцию, которая будет обрезать всё, кроме цифр.
  // решаем с помощью регулярного выражения

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
  }
  ;

  //назначим обработчик события, чтобы передвигать слайдер
  next.addEventListener('click', function () {
    /*
    if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) { // если значение отступа равно количество слайдов -1, то возвращаемся к началу
        //NB для адекватной работы нам нужно отрезать два последних символа, и превратить тип данных в числовой
    // то же самое с регуляркой 
    //if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) { 
    // заменим условие на регулярку*/
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
      offset = 0; // установив значение равным нулю, мы возвращаемся к началу
    } else {
      // если перед нами не последний слайд, то 
      offset += deleteNotDigits(width); // когда будем нажимать на стрелку вперёд, к ширине слайда будет добавляься ширину ещё одного слайда
    }

    slidesField.style.transform = "translateX(-".concat(offset, "px)"); // будем смещать элемент влево/вправо на значение offset

    //при перемещении на след/пред слайды нужно контролировать slideIndex
    if (slideIndex == slides.length) {
      // если дошли до конца слайдов
      slideIndex = 1; // перемещаемся в первую позицию
    } else {
      //иначе
      slideIndex++; // увеличивааем значение индекса 
    }

    addZero();
    dotsOpacity();
  });
  prev.addEventListener('click', function () {
    if (offset == 0) {
      // если долистали до начала, переходим в конец
      //NB для адекватной работы нам нужно отрезать два последних символа, и превратить тип данных в числовой
      offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
      // если перед нами не последний слайд, то 
      offset = 0; //offset -= +width.slice(0, width.length - 2); // установив значение равным нулю, мы возвращаемся к началу
    }

    slidesField.style.transform = "translateX(-".concat(offset, "px)"); // будем смещать элемент влево/вправо на значение offset

    //при перемещении на след/пред слайды нужно контролировать slideIndex
    if (slideIndex == 1) {
      // если дошли до начала слайдов
      slideIndex = slides.length; // перемещаемся в последнюю позицию
    } else {
      //иначе
      slideIndex--; // уменьшаем значение индекса 
    }

    addZero();
    dotsOpacity();
  });

  //добавим точкам функциональности, 
  //чтобы когда на них нажимали, перемещались к определённому слайду

  // когда мы перемещаемся по слайдам, нам необходимо учитывать много факторов
  // - контролировать переменную offset
  // - контролировать номер индикатора
  // устанавливать нужный slideIndex

  dots.forEach(function (dot) {
    //переберём точки
    dot.addEventListener('click', function (e) {
      // навешаем на каждую точку обработчик события на клик
      //будем использовать объект события
      var slideTo = e.target.getAttribute('data-slide-to'); //зададим переменную с аттрибутами

      slideIndex = slideTo; // установим индекс в то же значение, что и точка, по которой кликнули
      // например, если кликнули на 3 точку,  slideIndex будет равен 4

      //будем следить за отступами, чтобы скрыть ненужные элементы
      offset = deleteNotDigits(width) * (slideTo - 1); //общую ширину всех цифр умножаем на количество слайдов - 1
      // это скроет всё лишнее, кроме текущего слайда

      slidesField.style.transform = "translateX(-".concat(offset, "px)"); // установим трансформацию
      //чтобы слайд сместился на нужное количество точек

      addZero();
      dotsOpacity();
    });
  });
}
module.exports = slider;

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParenntSelector, activeClass) {
  // Tabs

  var tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParenntSelector);
  function hideTabContent() {
    tabsContent.forEach(function (item) {
      item.classList.add('hide'); // добавляем класс hide
      item.classList.remove('show', 'fade'); //убираем два других класса
    });

    tabs.forEach(function (item) {
      item.classList.remove(activeClass);
    });
  }
  function showTabContent() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].classList.add('show', 'fade'); // добавляем нужные классы
    tabsContent[i].classList.remove('hide'); //убираем ненужный класс
    tabs[i].classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', function (event) {
    var target = event.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach(function (item, i) {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
  // Timer

  //const deadline = '2023-10-17';

  function getTimeRemaining(endtime) {
    // const t = Date.parse(endtime) - Date.parse(new Date()),
    //     days = Math.floor( (t/(1000*60*60*24)) ),
    //     seconds = Math.floor( (t/1000) % 60 ),
    //     minutes = Math.floor( (t/1000/60) % 60 ),
    //     hours = Math.floor( (t/(1000*60*60) % 24) );
    var t = Date.parse(endtime) - Date.parse(new Date());
    var days = 0,
      hours = 0,
      minutes = 0,
      seconds = 0;
    if (t > 0) {
      // когда время таймера закончится, выставим все значения нулевыми.
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      // дни
      hours = Math.floor(t / (1000 * 60 * 60) % 24),
      // часы
      minutes = Math.floor(t / 1000 / 60 % 60),
      // минуты
      seconds = Math.floor(t / 1000 % 60); // секунды
    }

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  //функция - помошник
  // если любое из значений (дни, часы, минуты) меньше 10, дорисовываем ещё ноль
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return '0' + num;
    } else {
      return num;
    }
  }
  // функция вывода часов с обратным отсчётом на страницу 
  function setClock(selector, endtime) {
    var timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    updateClock(); // вызываем функцию обновления таймера
    //запуск до объявления решает задачу моргания вёрстки.

    function updateClock() {
      var t = getTimeRemaining(endtime);
      // добавляем значения часов, минут и секунд, 
      //с условием подстановки 0 (функция getZero)
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      // по завершении прекратим обновлять таймер
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  // вызовем функцию, чтобы вывести часы
  setClock(id, deadline);
}
//добавим функцию таймера в модуль экспортс
// module.exports = timer;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => (/* binding */ getResource),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//взаимодействие с сервером
var postData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, data) {
    var res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch(url, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: data
          });
        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();
        case 5:
          return _context.abrupt("return", _context.sent);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function postData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
function getResource(_x3) {
  return _getResource.apply(this, arguments);
}
function _getResource() {
  _getResource = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
    var res;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch(url);
        case 2:
          res = _context2.sent;
          if (res.ok) {
            _context2.next = 5;
            break;
          }
          throw new Error("Could not fetch ".concat(url, ", status: ").concat(res.status));
        case 5:
          _context2.next = 7;
          return res.json();
        case 7:
          return _context2.abrupt("return", _context2.sent);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getResource.apply(this, arguments);
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/switch.svg */ "./src/icons/switch.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap&subset=cyrillic-ext);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif;\n}\n\na {\n  text-decoration: none;\n}\n\n.btn {\n  width: 220px;\n  height: 65px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  font-size: 18px;\n  font-weight: bold;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: 0.3s all;\n  outline: none;\n}\n.btn_white {\n  background-color: #fff;\n}\n.btn_dark {\n  background-color: #303030;\n  color: #fff;\n  border: none;\n}\n.btn_min {\n  height: 50px;\n}\n.btn:hover {\n  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.divider {\n  width: 330px;\n  height: 2px;\n  margin: 0 auto;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.title {\n  font-size: 36px;\n  font-weight: 400;\n}\n\n.show {\n  display: block;\n}\n\n.hide {\n  display: none;\n}\n\n.fade {\n  -webkit-animation-name: fade;\n          animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n}\n\n@-webkit-keyframes fade {\n  from {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fade {\n  from {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 150px;\n  padding: 0 100px;\n}\n.header__left-block {\n  display: flex;\n  justify-content: space-between;\n  min-width: 550px;\n}\n.header__logo {\n  max-width: 170px;\n}\n.header__logo img {\n  width: 100%;\n}\n.header__links {\n  display: flex;\n  align-items: center;\n}\n.header__link {\n  position: relative;\n  margin-right: 45px;\n  font-weight: bold;\n  font-size: 18px;\n  color: #303030;\n}\n.header__link:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 110%;\n  left: -5%;\n  bottom: -1px;\n  z-index: -1;\n  height: 9px;\n  background: #399ced;\n}\n.header__link:last-child {\n  margin-right: 0;\n}\n\n.sidepanel {\n  position: fixed;\n  left: 60px;\n  top: 240px;\n  height: 400px;\n  width: 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.sidepanel__text {\n  width: 120px;\n  height: 120px;\n  font-size: 14px;\n}\n.sidepanel__text span {\n  display: flex;\n  -webkit-transform: rotate(-90deg) translateX(-50px);\n          transform: rotate(-90deg) translateX(-50px);\n}\n.sidepanel__divider {\n  width: 1px;\n  height: 165px;\n  background-color: #000;\n}\n.sidepanel__icon {\n  width: 24px;\n  height: 24px;\n}\n.sidepanel__icon img {\n  width: 100%;\n}\n\n.preview {\n  padding: 28px 0 100px 0;\n  position: relative;\n}\n.preview__life {\n  font-weight: bold;\n  font-size: 20px;\n  margin-left: 35px;\n  margin-top: 35px;\n}\n\n.bgc_blue {\n  position: absolute;\n  right: 0;\n  top: -155px;\n  width: 50vw;\n  height: 900px;\n  background: rgba(146, 242, 255, 0.15);\n  z-index: -1;\n}\n\n.tabcontainer {\n  display: flex;\n  width: 1130px;\n  margin: 0 auto;\n  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);\n}\n\n.tabcontent {\n  width: 850px;\n  position: relative;\n}\n.tabcontent img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.tabcontent__descr {\n  position: absolute;\n  top: 300px;\n  right: -177px;\n  width: 550px;\n  height: 359px;\n  background: rgba(93, 165, 254, 0.8);\n  padding: 50px;\n  font-size: 24px;\n  font-weight: 300;\n  line-height: 36px;\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.tabheader {\n  width: 280px;\n  padding: 35px 30px;\n  background-color: #fff;\n}\n.tabheader h3 {\n  font-weight: bold;\n  font-size: 16px;\n}\n.tabheader__items {\n  margin-top: 35px;\n  padding-left: 26px;\n  border-left: 1px solid black;\n}\n.tabheader__item {\n  font-weight: bold;\n  font-size: 18px;\n  font-weight: 300;\n  margin-top: 10px;\n  color: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n  transition: 0.3s all;\n}\n.tabheader__item_active {\n  color: #000;\n  font-size: 22px;\n  font-weight: 700;\n}\n\n.offer {\n  padding: 70px 0 100px 0;\n  position: relative;\n}\n.offer .container {\n  display: flex;\n  justify-content: space-between;\n}\n.offer .bgc_y {\n  position: absolute;\n  width: 1109px;\n  height: 780px;\n  background: rgba(222, 248, 255, 0.45);\n  z-index: -1;\n  top: 50px;\n}\n.offer__text {\n  width: 580px;\n}\n.offer__descr {\n  font-size: 18px;\n  margin-top: 30px;\n  font-weight: 300;\n  line-height: 24px;\n}\n.offer__action {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.offer__advantages {\n  width: 330px;\n  margin-top: 50px;\n}\n.offer__advantages h2 {\n  font-weight: bold;\n  font-size: 20px;\n  margin-top: 20px;\n}\n.offer__advantages h2:first-child {\n  margin-top: 70px;\n}\n.offer__advantages-text {\n  margin-top: 20px;\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 21px;\n}\n.offer__slider {\n  width: 650px;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.offer__slider-counter {\n  display: flex;\n  width: 180px;\n  align-items: center;\n  font-size: 24px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.offer__slider-wrapper {\n  width: 100%;\n  margin-top: 15px;\n  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);\n}\n.offer__slider-prev {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.offer__slider-next {\n  margin-left: 10px;\n  cursor: pointer;\n}\n.offer__slider #current {\n  font-size: 48px;\n  font-weight: bold;\n  color: rgb(0, 0, 0);\n}\n.offer__slide {\n  width: 100%;\n  height: 390px;\n}\n.offer__slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.calculating {\n  padding: 50px 0;\n}\n.calculating .title {\n  text-align: center;\n}\n.calculating__field {\n  width: 100%;\n  margin-top: 50px;\n  background: rgba(146, 242, 255, 0.15);\n  padding: 30px 0 40px 0;\n}\n.calculating__subtitle {\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: 30px;\n}\n.calculating__subtitle:first-child {\n  margin-top: 0;\n}\n.calculating #gender:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  display: block;\n  width: 16px;\n  height: 16px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center center/cover no-repeat;\n}\n.calculating__choose {\n  position: relative;\n  display: flex;\n  margin-top: 30px;\n  justify-content: center;\n}\n.calculating__choose-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 170px;\n  height: 50px;\n  padding: 0 10px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\n  border: none;\n  text-align: center;\n  font-size: 14px;\n  cursor: pointer;\n  outline: none;\n  transition: 0.3s all;\n}\n.calculating__choose-item_active {\n  color: #fff;\n  background-color: #399ced;\n}\n.calculating__choose_medium {\n  width: 743px;\n  justify-content: space-between;\n  margin: 30px auto 0 auto;\n}\n.calculating__choose_big {\n  width: 930px;\n  justify-content: space-between;\n  margin: 30px auto 0 auto;\n}\n.calculating__choose_big .calculating__choose-item {\n  width: 200px;\n}\n.calculating__divider {\n  width: 490px;\n  height: 1px;\n  margin: 40px auto;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.calculating__total {\n  width: 490px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.calculating__result {\n  font-size: 18px;\n  font-weight: bold;\n}\n.calculating__result span {\n  font-size: 42px;\n}\n\n.menu {\n  padding: 40px 0 50px 0;\n}\n.menu .container {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.menu .title {\n  text-align: center;\n}\n.menu__field {\n  margin-top: 50px;\n  padding: 50px 0;\n  width: 100%;\n  background: rgba(126, 209, 254, 0.35);\n}\n.menu__item {\n  width: 320px;\n  min-height: 450px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);\n  font-size: 16px;\n  font-weight: 300;\n}\n.menu__item img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n.menu__item-subtitle {\n  font-weight: bold;\n  font-size: 18px;\n  padding: 0 20px;\n  margin-top: 20px;\n}\n.menu__item-descr {\n  margin-top: 20px;\n  padding: 0 20px;\n}\n.menu__item-divider {\n  width: 100%;\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.25);\n  margin-top: 40px;\n}\n.menu__item-price {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n}\n.menu__item-price span {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.order {\n  padding-bottom: 80px;\n}\n.order .title {\n  text-align: center;\n}\n.order__form {\n  margin-top: 70px;\n  padding: 0 100px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.order__form img {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n}\n.order__input {\n  width: 280px;\n  height: 50px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\n  border: none;\n  font-size: 18px;\n  text-align: center;\n  padding: 0 20px;\n  outline: none;\n}\n\n.promotion {\n  padding: 70px 0 240px 0;\n  position: relative;\n}\n.promotion .container {\n  display: flex;\n}\n.promotion .bgc_y {\n  position: absolute;\n  width: 50%;\n  height: 499px;\n  background: rgba(126, 209, 254, 0.35);\n  z-index: -1;\n  top: -50px;\n  left: 0;\n}\n.promotion__text {\n  width: 50%;\n}\n.promotion__descr {\n  margin-top: 40px;\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: 300;\n}\n.promotion__descr span {\n  font-weight: bold;\n  font-size: 26px;\n}\n.promotion__timer {\n  width: 50%;\n}\n.promotion__timer .title {\n  text-align: right;\n}\n.promotion__timer .timer {\n  margin-top: 60px;\n  padding-left: 95px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.promotion__timer .timer__block {\n  width: 102px;\n  height: 120px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);\n  font-size: 16px;\n  font-weight: 300;\n  text-align: center;\n}\n.promotion__timer .timer__block span {\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 5px;\n  font-size: 56px;\n  font-weight: bold;\n}\n\n.footer {\n  min-height: 180px;\n  background-color: #303030;\n  padding: 45px 0 50px 0;\n  color: #fff;\n}\n.footer .container {\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n.footer .subtitle {\n  font-size: 20px;\n}\n.footer .link {\n  display: block;\n  margin-top: 15px;\n  font-size: 16px;\n  color: #fff;\n}\n.footer .call {\n  text-align: right;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1050;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.modal__dialog {\n  max-width: 500px;\n  margin: 40px auto;\n}\n.modal__content {\n  position: relative;\n  width: 100%;\n  padding: 40px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  max-height: 80vh;\n  overflow-y: auto;\n}\n.modal__close {\n  position: absolute;\n  top: 8px;\n  right: 14px;\n  font-size: 30px;\n  color: #000;\n  opacity: 0.5;\n  font-weight: 700;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n.modal__title {\n  text-align: center;\n  font-size: 22px;\n  text-transform: uppercase;\n}\n.modal__input {\n  display: block;\n  margin: 20px auto 20px auto;\n  width: 280px;\n  height: 50px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\n  border: none;\n  font-size: 18px;\n  text-align: center;\n  padding: 0 20px;\n  outline: none;\n}\n.modal .btn {\n  display: block;\n  width: 280px;\n  margin: 0 auto;\n}", "",{"version":3,"sources":["webpack://./src/scss/_base.scss","webpack://./src/scss/style.scss","webpack://./src/scss/variables/_variables.scss","webpack://./src/scss/blocks/header/_header.scss","webpack://./src/scss/blocks/sidepanel/_sidepanel.scss","webpack://./src/scss/blocks/preview/_preview.scss","webpack://./src/scss/blocks/offer/_offer.scss","webpack://./src/scss/blocks/calculating/_calculating.scss","webpack://./src/scss/blocks/menu/_menu.scss","webpack://./src/scss/blocks/order/_order.scss","webpack://./src/scss/blocks/promotion/_promotion.scss","webpack://./src/scss/blocks/footer/_footer.scss","webpack://./src/scss/blocks/modal/_modal.scss"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\na {\n    text-decoration: none;\n}\n\n.btn {\n    width: 220px;\n    height: 65px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n    font-size: 18px;\n    font-weight: bold;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    transition: 0.3s all;\n    outline: none;\n    &_white {\n        background-color: #fff;\n    }\n    &_dark {\n        background-color: $dark;\n        color: #fff;\n        border: none;\n    }\n    &_min {\n        height: 50px;\n    }\n    &:hover {\n        box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3); \n    }\n}\n\n.container {\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.divider {\n    width: 330px;\n    height: 2px;\n    margin: 0 auto;\n    background-color: rgba(0, 0, 0, 0.5);;\n}\n\n.title {\n    font-size: 36px;\n    font-weight: 400;\n}\n\n.show {\n    display:block\n}\n\n.hide {\n    display:none\n}\n\n.fade {\n    animation-name: fade;animation-duration: 1.5s;\n}\n@keyframes fade {\n    from{opacity: 0.1;}to{opacity: 1;}\n}\n","@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap&subset=cyrillic-ext');\n@import './variables/variables';\n@import './base.scss';\n\n@import './blocks/header/header.scss';\n@import './blocks/sidepanel/sidepanel';\n@import './blocks/preview/preview';\n@import './blocks/offer/offer';\n@import './blocks/calculating/calculating';\n@import './blocks/menu/menu';\n@import './blocks/order/order';\n@import './blocks/promotion/promotion';\n@import './blocks/footer/footer';\n@import './blocks/modal/modal';","// Colors\n$dark: #303030;\n$primary: #399ced;;\n$secondary: #5da3fe;\n$bg1: #92F2FF;\n$bg2: #7ea7fe;\n$bg3: rgba(126, 209, 254, 0.35);",".header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 150px;\n    padding: 0 100px;\n    &__left-block {\n        display: flex;\n        justify-content: space-between;\n        min-width: 550px;\n    }\n    &__logo {\n        max-width: 170px;\n        img {\n            width: 100%;\n        }\n    }\n    &__links {\n        display: flex;\n        align-items: center;\n    }\n    &__link {\n        position: relative;\n        margin-right: 45px;\n        font-weight: bold;\n        font-size: 18px;\n        color: $dark;\n        &:after {\n            content: '';\n            position: absolute;\n            display: block;\n            width: 110%;\n            left: -5%;\n            bottom: -1px;\n            z-index: -1;\n            height: 9px;\n            background: $primary;\n        }\n        &:last-child {\n            margin-right: 0;\n        }\n    }\n}",".sidepanel {\n    position: fixed;\n    left: 60px;\n    top: 240px;\n    height: 400px;\n    width: 25px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    &__text {\n        width: 120px;\n        height: 120px;\n        font-size: 14px;        \n        span {\n            display: flex;\n            transform: rotate(-90deg) translateX(-50px);\n        }\n    }\n    &__divider {\n        width: 1px;\n        height: 165px;\n        background-color: #000;\n    }\n    &__icon {\n        width: 24px;\n        height: 24px;\n        img {\n            width: 100%;\n        }\n    }\n}",".preview {\n    padding: 28px 0 100px 0;\n    position: relative;\n    &__life {\n        font-weight: bold;\n        font-size: 20px;\n        margin-left: 35px;\n        margin-top: 35px;\n    }\n}\n.bgc_blue {\n    position: absolute;\n    right: 0;\n    top: -155px;\n    width: 50vw;\n    height: 900px;\n    background: rgba(146, 242, 255, 0.15);\n    z-index: -1;\n}\n.tabcontainer {\n    display: flex;\n    width: 1130px;\n    margin: 0 auto;\n    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);\n}\n.tabcontent {\n    width: 850px;\n    position: relative;\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n    &__descr {\n        position: absolute;\n        top: 300px;\n        right: -177px;\n        width: 550px;\n        height: 359px;\n        background: rgba(93, 165, 254, 0.8);\n        padding: 50px;\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 36px;\n        color: rgba(0, 0, 0, 0.9);\n    }\n}\n.tabheader {\n    width: 280px;\n    padding: 35px 30px;\n    background-color: #fff;\n    h3 {\n        font-weight: bold;\n        font-size: 16px;\n    }\n    &__items {\n        margin-top: 35px;\n        padding-left: 26px;\n        border-left: 1px solid black;\n    }\n    &__item {\n        font-weight: bold;\n        font-size: 18px;\n        font-weight: 300;\n        margin-top: 10px;\n        color: rgba(0, 0, 0, 0.6);\n        cursor: pointer;\n        transition: 0.3s all;\n        &_active {\n            color: #000;\n            font-size: 22px;\n            font-weight: 700;\n        }\n    }\n}",".offer {\n    padding: 70px 0 100px 0;\n    position: relative;\n    .container {\n        display: flex;\n        justify-content: space-between;\n    }\n    .bgc_y {\n        position: absolute;\n        width: 1109px;\n        height: 780px;\n        background: rgba(222, 248, 255, 0.45);\n        z-index: -1;\n        top: 50px;\n    }\n    &__text {\n        width: 580px;\n    }\n    &__descr {\n        font-size: 18px;\n        margin-top: 30px;\n        font-weight: 300;\n        line-height: 24px;\n    }\n    &__action {\n        display: flex;\n        align-items: center;\n        justify-content: flex-end;\n    }\n    &__advantages {\n        width: 330px;\n        margin-top: 50px;\n        h2 {\n            font-weight: bold;\n            font-size: 20px;\n            margin-top: 20px;\n            &:first-child {\n                margin-top: 70px;\n            }\n        }\n        &-text {\n            margin-top: 20px;\n            font-size: 18px;\n            font-weight: 300;\n            line-height: 21px;\n        }\n    }\n    &__slider {\n        width: 650px;\n        margin-top: 50px;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-end;\n        &-counter {\n            display: flex;\n            width: 180px;\n            align-items: center;\n            font-size: 24px;\n            color: rgba(0,0,0, .5);\n        }\n        &-wrapper {\n            width: 100%;\n            margin-top: 15px;\n            box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);\n        }\n        &-prev {\n            margin-right: 10px;\n            cursor: pointer;\n        }\n        &-next {\n            margin-left: 10px;\n            cursor: pointer;\n        }\n        #current {\n            font-size: 48px;\n            font-weight: bold;\n            color: rgba(0,0,0,1);\n        }\n    }\n    &__slide {\n        width: 100%;\n        height: 390px;\n        img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n        }\n    }\n\n}",".calculating {\n    padding: 50px 0;\n    .title {\n        text-align: center;\n    }\n    &__field {\n        width: 100%;\n        margin-top: 50px;\n        background: rgba(146, 242, 255, 0.15);\n        padding: 30px 0 40px 0;\n    }\n    &__subtitle {\n        text-align: center;\n        font-size: 18px;\n        font-weight: bold;\n        margin-top: 30px;\n        &:first-child {\n            margin-top: 0;\n        }\n    }\n    #gender:after {\n        content: '';\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        display: block;\n        width: 16px;\n        height: 16px;\n        background: url('../icons/switch.svg') center (center / cover) no-repeat;\n    }\n    &__choose {\n        position: relative;\n        display: flex;\n        margin-top: 30px;\n        justify-content: center;\n        &-item {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 170px;\n            height: 50px;\n            padding: 0 10px;\n            background: #FFFFFF;\n            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\n            border: none;\n            text-align: center;\n            font-size: 14px;\n            cursor: pointer;\n            outline: none;\n            transition: 0.3s all;\n            &_active {\n                color: #fff;\n                background-color: $primary;\n            }\n        }\n        &_medium {\n            width: 743px;\n            justify-content: space-between;\n            margin: 30px auto 0 auto;\n        }\n        &_big {\n            width: 930px;\n            justify-content: space-between;\n            margin: 30px auto 0 auto;\n            .calculating__choose-item {\n                width: 200px;\n            }\n        }\n    }\n    &__divider {\n        width: 490px;\n        height: 1px;\n        margin: 40px auto;\n        background-color: rgba(0,0,0, .2);\n    }\n    &__total {\n        width: 490px;\n        margin: 0 auto;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n    &__result {\n        font-size: 18px;\n        font-weight: bold;\n        span {\n            font-size: 42px;\n        }\n    }\n}",".menu {\n    padding: 40px 0 50px 0;\n    .container {\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n    }\n    .title {\n        text-align: center;\n    }\n    &__field {\n        margin-top: 50px;\n        padding: 50px 0;\n        width: 100%;\n        background: $bg3;\n    }\n    &__item {\n        width: 320px;\n        min-height: 450px;\n        background: #FFFFFF;\n        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);\n        font-size: 16px;\n        font-weight: 300;\n        img {\n            width: 100%;\n            height: 200px;\n            object-fit: cover;\n        }\n        &-subtitle {\n            font-weight: bold;\n            font-size: 18px;\n            padding: 0 20px;\n            margin-top: 20px;\n        }\n        &-descr {\n            margin-top: 20px;\n            padding: 0 20px;\n        }\n        &-divider {\n            width: 100%;\n            height: 1px;\n            background-color: rgba(0, 0, 0, 0.25);\n            margin-top: 40px;\n        }\n        &-price {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 10px 20px;\n            span {\n                font-size: 24px;\n                font-weight: bold;\n            }\n        }\n    }\n}",".order {\n    padding-bottom: 80px;\n    .title {\n        text-align: center;\n    }\n    &__form {\n        margin-top: 70px;\n        padding: 0 100px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        img {\n            transform: scale(1.5);\n        }\n    }\n    &__input {\n        width: 280px;\n        height: 50px;\n        background: #FFFFFF;\n        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\n        border: none;\n        font-size: 18px;\n        text-align: center;\n        padding: 0 20px;\n        outline: none;\n    }\n}",".promotion {\n    padding: 70px 0 240px 0;\n    position: relative;\n    .container {\n        display: flex;\n    }\n    .bgc_y {\n        position: absolute;\n        width: 50%;\n        height: 499px;\n        background: $bg3;\n        z-index: -1;\n        top: -50px;\n        left: 0;\n    }\n    &__text {\n        width: 50%;\n    }\n    &__descr {\n        margin-top: 40px;\n        font-size: 20px;\n        line-height: 24px;\n        font-weight: 300;\n        span {\n            font-weight: bold;\n            font-size: 26px;\n        }\n    }\n    &__timer {\n        width: 50%;\n        .title {\n            text-align: right;\n        }\n        .timer {\n            margin-top: 60px;\n            padding-left: 95px;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            &__block {\n                width: 102px;\n                height: 120px;\n                background: #FFFFFF;\n                box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);\n                font-size: 16px;\n                font-weight: 300;\n                text-align: center;\n                span {\n                    display: block;\n                    margin-top: 20px;\n                    margin-bottom: 5px;\n                    font-size: 56px;\n                    font-weight: bold;\n                }\n            }\n        }\n    }\n}",".footer {\n    min-height: 180px;\n    background-color: $dark;\n    padding: 45px 0 50px 0;\n    color: #fff;\n    .container {\n        height: 100%;\n        display: flex;\n        justify-content: space-between;\n        align-items: flex-end;\n    }\n    .subtitle {\n        font-size: 20px;\n    }\n    .link {\n        display: block;\n        margin-top: 15px;\n        font-size: 16px;\n        color: #fff;\n    }\n    .call {\n        text-align: right;\n    }\n}",".modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1050;\n    //display: none;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background-color: rgba(0,0,0,.5);\n    &__dialog {\n        max-width: 500px;\n        margin: 40px auto;\n    }\n    &__content {\n        position: relative;\n        width: 100%;\n        padding: 40px;\n        background-color: #fff;\n        border: 1px solid rgba(0,0,0,.2);\n        border-radius: 4px;\n        max-height: 80vh;\n        overflow-y: auto;\n    }\n    &__close {\n        position: absolute;\n        top: 8px;\n        right: 14px;\n        font-size: 30px;\n        color: #000;\n        opacity: .5;\n        font-weight: 700;\n        border: none;\n        background-color: transparent;\n        cursor: pointer;\n    }\n    &__title {\n        text-align: center;\n        font-size: 22px;\n        text-transform: uppercase;\n    }\n    &__input {\n        display: block;\n        margin: 20px auto 20px auto;\n        width: 280px;\n        height: 50px;\n        background: #FFFFFF;\n        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);\n        border: none;\n        font-size: 18px;\n        text-align: center;\n        padding: 0 20px;\n        outline: none;\n    }\n    .btn {\n        display: block;\n        width: 280px;\n        margin: 0 auto;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/group-css-media-queries-loader/lib/index.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/icons/switch.svg":
/*!******************************!*\
  !*** ./src/icons/switch.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/switch.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _js_modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _js_modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _js_modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _js_modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _js_modules_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _js_modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _js_modules_slider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_modules_slider__WEBPACK_IMPORTED_MODULE_6__);




//import calc from './js/modules/calc';





// добавляем заголовок в DOM
var root = document.querySelector('body');
// root.append(heading)
var img = new Image();
window.addEventListener('DOMContentLoaded', function () {
  var modalTimerId = setTimeout(function () {
    return (0,_js_modules_modal__WEBPACK_IMPORTED_MODULE_5__.openModal)('.modal', modalTimerId);
  }, 50000);
  (0,_js_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  (0,_js_modules_timer__WEBPACK_IMPORTED_MODULE_3__["default"])('.timer', '2023-10-17');
  (0,_js_modules_modal__WEBPACK_IMPORTED_MODULE_5__["default"])('[data-modal]', '.modal', modalTimerId);
  (0,_js_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])();
  //calc();
  (0,_js_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId);
  _js_modules_slider__WEBPACK_IMPORTED_MODULE_6___default()({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
});
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map