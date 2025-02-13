var counter = 0;
var proCount = 0;
var isScrolling = false; // Prevent multiple simultaneous scroll events

window.addEventListener('wheel', function (event) {
    if (isScrolling) return; // Prevent rapid scrolling
    isScrolling = true;

    // Determine the direction of the scroll
    if (event.deltaY < 0) {
        counter += 45; // Rotate clockwise
        proCount += 1;
    } else if (event.deltaY > 0) {
        counter -= 45; // Rotate counter-clockwise
        proCount -= 1;
    }

    // Update the transform style for rotation
    $('.main_box').css({ "transform": "rotate(" + counter + "deg)" });

    // Add a delay to ensure smooth scrolling
    setTimeout(function () {
        isScrolling = false; // Allow scrolling again
    }, 300); // Adjust the delay for smoother or faster transitions
});
