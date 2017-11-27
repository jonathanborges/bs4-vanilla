import Modal from './modal';

export default class bs4 {

    constructor(selector) {
        this.selector = selector;
        this.innerHeight = window.innerHeight;
    }

    modal() {
        return new Modal(this.selector);
    }
    
}