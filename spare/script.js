const lenis = new Lenis({
    // smooth: true,
    infinite: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// repeat first six items by cloning them and appending them to the .grid
const repeatItems = (parentEl, total = 0) => {
    const items = [...parentEl.children];
    for (let i = 0; i <= total-1; ++i) {
        var cln = items[i].cloneNode(true);
        parentEl.appendChild(cln);
    }
};
repeatItems(document.querySelector('.grid'), 2);