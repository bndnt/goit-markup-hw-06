const openSubscriptionPopup = document.querySelector('.js-open-subscription-popup');
const closeSubscriptionPopup = document.querySelector('.js-close-subscription-popup');
const subscriptionPopup = document.querySelector('.js-subscription-popup');
const buttonSubscriptionPopup = document.querySelector('.js-popup__form-btn');
const bg = document.querySelector('.js-back-drop');
const body = document.getElementsByName('body');



openSubscriptionPopup.addEventListener('click', function(e){
    e.preventDefault();
    bg.classList.add('is-open');
    subscriptionPopup.classList.add('is-open');
    document.body.classList.toggle("no-csroll");
}) 

closeSubscriptionPopup.addEventListener('click', function(e){
    e.preventDefault();
    subscriptionPopup.classList.remove('is-open');
    bg.classList.remove('is-open');
    document.body.classList.toggle("no-csroll");
})

bg.addEventListener('click', function(e){
    e.preventDefault();
    subscriptionPopup.classList.remove('is-open');
    bg.classList.remove('is-open');
    document.body.classList.remove("no-csroll");
})
