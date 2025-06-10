document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.hidden-on-scroll');

    if (!animatedElements.length) {
        console.log("No elements found to animate on scroll.");
        return;
    }

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-on-scroll');
                // Optional: remove the class that initially hid it, though not strictly necessary with current CSS
                // entry.target.classList.remove('hidden-on-scroll');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });
});
