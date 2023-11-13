const parentLiElements = document.querySelectorAll('ul > li');

parentLiElements.forEach(parentLi => {
    const childLiElements = parentLi.querySelectorAll('ul > li');

    if (childLiElements.length > 0) {
        const countChild = "(" + childLiElements.length + ")";
        parentLi.firstChild.textContent += countChild;
    }
});