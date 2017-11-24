export default class Modal {

    constructor(selector, context = null) {
        this.messages = {
            dataTarget: 'Você precisa setar um [data-target] com o seletor da modal.'
        }
        this.selector = selector;
        this.context = context;
        this.openModal();
    }
    
    openModal() {
        console.log('modal opened!');
        let context = (this.context == null) ? document : this.context;
        context.querySelectorAll(this.selector).forEach(modalButton => {
            modalButton.addEventListener('click', ev => {
                let target = ev.target.dataset['target'];
                if (target) {
                    
                    document.body.classList.add('modal-open');

                    let modal = document.querySelector(target);
                    modal.style.display = 'block';
                    modal.removeAttribute('aria-hidden');
                    modal.scrollTop = 0;
                    modal.classList.add('show');

                    let backdrop = document.createElement('div');
                    backdrop.classList.add('modal-backdrop', 'fade');
                    document.body.insertAdjacentElement('beforeend', backdrop)
                    backdrop.scrollTop = 0;
                    backdrop.classList.add('show');

                    // modal.focus();
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
        }, 400);
        modal.setAttribute('aria-hidden', true);
        
        let backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.classList.remove('show');
            setTimeout(() => {
                if (backdrop.parentNode) {
                    backdrop.parentNode.removeChild(backdrop);
                }
                document.body.classList.remove('modal-open');
            }, 400);
        }
    }
}