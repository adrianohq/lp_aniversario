const eventDate = new Date("Dec 31, 2024 19:00:00");
const timeStampEvent = eventDate.getTime();

const countHours = setInterval(function() {
    const now = new Date();
    const timeStampAtt = now.getTime();

    const toTheEvent = timeStampEvent - timeStampAtt;

    const daysMs = 1000 * 60 * 60 * 24;
    const hoursMs = 1000 * 60 * 60;
    const minutesMs = 1000 * 60

    const daysToTheEvent = Math.floor(toTheEvent / daysMs);
    const hoursToTheEvent = Math.floor((toTheEvent % daysMs) / hoursMs);
    const minutesToTheEvent = Math.floor(toTheEvent % hoursMs / minutesMs);
    const secondsToTheEvent = Math.floor((toTheEvent % minutesMs) / 1000);

    document.getElementById('counter').innerHTML = `${daysToTheEvent}d ${hoursToTheEvent}h ${minutesToTheEvent}m ${secondsToTheEvent}s`;

    if(toTheEvent < 0) {
        clearInterval(countHours);
        document.getElementById('counter').innerHTML = 'Evento expirado!'
    }
}, 1000);

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var gifContainer = document.querySelector('.gif_container');

    var transitionStartPoint = 100;
    var maxOpacity = 0.9;

    var opacity = (scrollPosition - transitionStartPoint) / 1000;

    opacity = Math.min(Math.max(opacity, 0), maxOpacity);

    var rgbaColor = `rgba(7, 0, 44, ${opacity})`;
    gifContainer.style.setProperty('--background-overlay-color', rgbaColor);
});