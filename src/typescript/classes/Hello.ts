export default class Hello {
    element: Element;
    render (parent: Element, element: string, message: string) {
        this.element = document.createElement(element);
        this.element.innerHTML = message;
        parent.appendChild(this.element)
    }
}