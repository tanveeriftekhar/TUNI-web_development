const handleCustomEvent = (event) => {
    var data = JSON.parse(event.detail.jsonText);
    console.log('lol');

    const contactsDiv = document.getElementById('contacts');
    const template = document.getElementById('user-card-template');

    for (let user of data) {
        // console.log(user.firstName)
        const clonedTemplate = template.content.cloneNode(true);
        clonedTemplate.querySelector('img').src = user.avatar;
        clonedTemplate.querySelector('img').alt = user.firstName + ' ' + user.lastName;
        clonedTemplate.querySelector('h1').textContent = user.firstName + ' ' + user.lastName;
        clonedTemplate.querySelector('.email').textContent = user.email;
        clonedTemplate.querySelector('.phone span').textContent = user.phoneNumber;
        clonedTemplate.querySelector('.address').children[0].textContent = user.address.streetAddress;
        clonedTemplate.querySelector('.address').children[1].textContent = user.address.zipCode + ' ' + user.address.city;
        clonedTemplate.querySelector('.address').children[2].textContent = user.address.country;
        clonedTemplate.querySelector('.homepage a').href = user.homepage;
        clonedTemplate.querySelector('.homepage a').textContent = user.homepage;

        contactsDiv.appendChild(clonedTemplate);
    }
}
document.addEventListener('userDataReady', handleCustomEvent);
fetchUserData();