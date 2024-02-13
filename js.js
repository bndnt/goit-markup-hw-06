// const shadowRoot = element.attachShadow({ mode: 'open' });
// js-close-subscriprion-popup
const openSubscriptionPopup = document.querySelector('.js-open-subscription-popup');
const closeSubscriptionPopup = document.querySelector('.js-close-subscription-popup');
const subscriptionPopup = document.querySelector('.js-subscription-popup');

openSubscriptionPopup.addEventListener('click', function(e){
    e.preventDefault();
    subscriptionPopup.classList.add('active');
})
closeSubscriptionPopup.addEventListener('click', function(e){
    e.preventDefault();
    subscriptionPopup.classList.remove('active');
})
