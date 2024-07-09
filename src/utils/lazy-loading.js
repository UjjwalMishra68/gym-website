function lazyLoading() {
    const lazyImg = document.querySelectorAll(".lazy")

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src
                img.classList.remove("loading");
                img.classList.add("loaded")
                observer.unobserve(entry.target);
            }
        })
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    })
    lazyImg.forEach(img => {
        observer.observe(img);
    })
}
// lazyLoading()
export default lazyLoading
