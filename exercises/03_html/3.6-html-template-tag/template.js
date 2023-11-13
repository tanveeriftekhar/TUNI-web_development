document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const contactsDiv = document.getElementById('contacts');
  const template = document.getElementById('contact-template');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const homepage = formData.get('homepage');

    const clonedTemplate = template.content.cloneNode(true);

    clonedTemplate.querySelector('h2').textContent = name;
    clonedTemplate.querySelector('.email').textContent = email;
    const homepageLink = clonedTemplate.querySelector('.homepage a');
    homepageLink.textContent = homepage;
    homepageLink.href = homepage;

    contactsDiv.appendChild(clonedTemplate);

    form.reset();
  });

 
});