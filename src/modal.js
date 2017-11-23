export default class Modal {

    constructor(selector) {
        this.messages = {
            dataTarget: 'Você precisa setar um [data-target] com o seletor da modal.'
        }
        this.selector = selector;
        this.openModal();
    }
    
    openModal() {
        let selector = (typeof this.selector !== 'string') ? this.selector : document.querySelectorAll(this.selector);
        console.log("typeof: ", typeof this.selector);
        console.log("selecionados: ", selector);
        selector.forEach(modalButton => {
            modalButton.addEventListener('click', ev => {
                let target = ev.target.dataset['target'];
                if (target) {
                    
                    document.body.classList.add('modal-open');

                    let modal = document.querySelector(target);
                    modal.removeAttribute('aria-hidden');
                    modal.style.display = 'block';
                    modal.scrollTop = 0;
                    modal.classList.add('show');

                    let backdrop = document.createElement('div');
                    backdrop.classList.add('modal-backdrop', 'fade');
                    document.body.insertAdjacentElement('beforeend', backdrop)
                    backdrop.scrollTop = 0;
                    backdrop.classList.add('show');

                    modal.focus();
                    this.closeModal(modal);
                    
                } else {
                    console.info(this.messages['dataTarget']);
                }
            })
        })
    }

    closeModal(modal) {
        document.querySelectorAll('[data-dismiss="modal"]').forEach(dismiss => {
            dismiss.addEventListener('click', ev => {
                this.hideModal(modal);
            })
        })
    }
    
    hideModal(modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
        modal.setAttribute('aria-hidden', true);
        document.body.classList.remove('modal-open');

        let backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.classList.remove('show');
            setTimeout(() => {
                if (backdrop.parentNode) {
                    backdrop.parentNode.removeChild(backdrop);
                }
            }, 500);
        }
    }
}