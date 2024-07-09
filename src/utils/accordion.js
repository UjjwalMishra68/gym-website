function accordionOpener() {
    const accordionWrapper = document.querySelectorAll('.content__wrapper');
    accordionWrapper.forEach(accordion => {
        accordion.addEventListener('click', () => {
            accordionWrapper.forEach(subAccordion => {
                subAccordion.classList.remove('active')
            })
            accordion.classList.add('active')
        })
    })
}

accordionOpener();
export default accordionOpener;
