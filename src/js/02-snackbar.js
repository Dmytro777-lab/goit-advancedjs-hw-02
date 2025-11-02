import iziToast from 'izitoast';

const refs = {
  promisesForm: document.querySelector('form.js-form'),
};

const onPromisesFormSubmit = event => {
  event.preventDefault();

  const delay = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });
  promise
    .then(result =>
      iziToast.success({
        title: '',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      })
    )
    .catch(result =>
      iziToast.error({
        title: '',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      })
    );
  event.target.reset();
};
refs.promisesForm.addEventListener('submit', onPromisesFormSubmit);
