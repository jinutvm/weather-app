function calculateFinalCost() {
    let orderCost = Number(document.querySelector('.js-cost').value);
    orderCost < 40 ? orderCost +=10 : orderCost;
    document.querySelector('.js-finalcost').innerHTML = `$${orderCost}`
};

function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button')
    if (buttonElement.innerHTML == 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed'
        buttonElement.classList.add('is-subscribed')
    } else {
        buttonElement.innerHTML = 'Subscribe'
        buttonElement.classList.remove('is-subscribed')
    }
}
