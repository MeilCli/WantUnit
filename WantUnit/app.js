var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "楽単マーーーン： ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.count = Math.floor(Math.random() * 100000);
        this.span.innerText = this.count + "\u4EBA";
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = ++_this.count + "\u4EBA"; }, 8000);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('unitAndPerson');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map