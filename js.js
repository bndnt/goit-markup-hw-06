const openSubscriptionPopup = document.querySelector('.js-open-subscription-popup');
const closeSubscriptionPopup = document.querySelector('.js-close-subscription-popup');
const subscriptionPopup = document.querySelector('.js-subscription-popup');
const bg = document.querySelector('.js-back-drop');
const body = document.getElementsByName('body');



openSubscriptionPopup.addEventListener('click', function(e){
    e.preventDefault();
    bg.classList.add('active');
    subscriptionPopup.classList.add('active');
    document.body.classList.toggle("no-csroll");
}) 

closeSubscriptionPopup.addEventListener('click', function(e){
    e.preventDefault();
    subscriptionPopup.classList.remove('active');
    bg.classList.remove('active');
    document.body.classList.toggle("no-csroll");
})
