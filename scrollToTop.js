
const ScrollToTop = (element) => {
    // hide the button
    element.style.display = 'none';

    // listen for scroll event to show/hide the button
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 200) {
            // show the button when scrolled 200px or more
            element.style.display = 'block';
        } else {
            // hide the button when less than 200px
            element.style.display = 'none';
        }
    });

    // scroll to top functionality when button is clicked
    element.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

export default ScrollToTop;
