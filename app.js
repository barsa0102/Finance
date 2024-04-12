// Дэлгэцтэй холбох контроллер
var uiController = (function () {})();
// Санхүүтэй холбох контроллер
var financeController = (function () {})();
//Программ холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна
    console.log("Дэлгэцнээс өгөгдөл авах хэсэг");
    // 2. Олж авсан өгөгдлөө санхүүгийн контроллерт дамжуулж тэнд хадгална.
    // 3. ОЛж авсан өгөгдээ веб дээрээ тохирох хэсэгт гарганав
    // 4. Төсвийг тооцоолно
    // 5. Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана.
  };

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
