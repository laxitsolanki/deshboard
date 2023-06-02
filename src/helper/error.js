import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export const showError = (error) => {
    error.forEach((el) => {
        let key = el.path.join('_');
        let message = el.message;

        if (document.querySelector('#' + key)) {
            document.querySelector('#' + key)?.classList.add('error');
            tippy('#' + key, {
                content: message,
                trigger: 'click hover',
            });
        }
    });
    return false;
};

export const resetError = () => {
    document.querySelectorAll('.error').forEach((el) => {
        el.classList.remove('error');
        el._tippy.destroy();
    });
};