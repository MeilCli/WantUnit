class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    count: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "楽単マーーーン： ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.count = Math.floor(Math.random() * 100000);
        this.span.innerText = `${this.count}人`;
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = `${++this.count}人`, 8000);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('unitAndPerson');
    var greeter = new Greeter(el);
    greeter.start();
};