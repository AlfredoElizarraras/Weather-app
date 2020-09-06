export const errorTitle = () => document.getElementById('errorModalTitle');

export const errorMessage = () => document.getElementById('errorModalMessage');

export const errorModal = () => document.getElementById('errorModal');

export const closeErrorButton = () => document.getElementsByClassName('error-close')[0];

export const showElement = (element) => element.classList.remove('d-none');

export const hideElement = (element) => element.classList.add('d-none');

export const createMarkUp = () => `
  <div id="errorModal" class="error-modal d-none">
    <div class="error-modal__content">
      <div class="error-modal__header">
        <span class="error-close">&times;</span>
        <h2 id="errorModalTitle">Error</h2>
      </div>
      <div class="error-modal__body">
        <p id="errorModalMessage">
          Some text in the error modal Body
        </p>
      </div>
    </div>
  </div>
  `;

export const changeInnerHTML = (element, content) => {
  element.innerHTML = content;
};

export const addToInnerHTML = (element, content) => {
  element.innerHTML += content;
};