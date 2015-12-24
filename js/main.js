var $services = $('services-page');

$services.waypoint(function () {
    console.log('waypoint!')
});

var waypoint = new Waypoint({
  element: document.getElementById('waypoint'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
  }
})

$('.nav2').localScroll();