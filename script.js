const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 50;

function moveShadow(e) {
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 5px rgba(0, 0, 0, .5)
    `;
}

hero.addEventListener('mousemove', moveShadow);