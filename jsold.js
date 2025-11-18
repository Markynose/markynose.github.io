animeGirl.style.backgroundImage = "url('me.png')";
corn.style.backgroundImage = "url('afuckinfemboy.png')";

animeGirl.style.animation = 'float 3s ease-in-out infinite';
corn.style.animation = 'float 4s ease-in-out infinite';

document.addEventListener('mousemove', function(e) {
    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    
    const mouseX = e.clientX;
    const distanceFromCenter = (mouseX - containerCenterX) / 50;
    
    animeGirl.style.transform = `translateX(${-distanceFromCenter}px) rotate(${-distanceFromCenter/2}deg)`;
    corn.style.transform = `translateX(${distanceFromCenter}px) rotate(${distanceFromCenter/2}deg)`;
});

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    animeGirl.style.transform = `translateY(${scrollY * 0.1}px)`;
    corn.style.transform = `translateY(${scrollY * 0.15}px)`;
});