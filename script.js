const floatingImage = document.getElementById('floatingImage');
const container = document.body;

floatingImage.style.backgroundImage = "url('me.png')";

let mouseX = window.innerWidth / 2;
let scrollY = 0;
let floatTime = 0;

function updateFloat() {
    floatTime += 0.02;
    updateTransform();
    requestAnimationFrame(updateFloat);
}

function updateTransform() {
    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const distanceFromCenter = (mouseX - containerCenterX) / 50;
    const floatOffset = Math.sin(floatTime) * 20;
    
    floatingImage.style.transform = `translateY(${scrollY * 0.1 + floatOffset}px) translateX(${-distanceFromCenter}px) rotate(${-distanceFromCenter/2}deg)`;
}

updateFloat();

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    updateTransform();
});

window.addEventListener('scroll', function() {
    scrollY = window.scrollY;
    updateTransform();
});

