// 1. select the target element
var featureImage = document.querySelector('img.feature');

// 2. create the event listener function
const handleFeatureClick = function () {
    console.log('img.feature was clicked...');
    var desc = document.querySelector('.feature.description');
    desc.classList.remove('hidden');
}

// 3. add event listener
featureImage.addEventListener('click', handleFeatureClick);

// 4. use the same event handler (handleFeatureClick) for a listener on another element
const headerEl = document.querySelector('header > h1');
headerEl.addEventListener('click', handleFeatureClick);

// 5. Let's use a double-click on the header element to hide the description.
//    This time, instead of passing in a function for the event handler, we'll pass in an anonymous function.
headerEl.addEventListener('dblclick', function () {
    var desc = document.querySelector('.feature.description');
    desc.classList.add('hidden');
});

// 6. Let's listen for the mouseover event on the image and log the mouse position to the console.
featureImage.addEventListener('mouseover', function (event) {
    console.log('{mouseover} mouse position:', event.clientX, event.clientY);
});

// 7. Let's listen for the mousemove event on the image and log the mouse position to the console.
featureImage.addEventListener('mousemove', function (event) {
    console.log('{mousemove} mouse position:', event.clientX, event.clientY);
});

// 8. Let's listen for the mouseout event on the image and pop up an alert that says to the user "Don't go!".
featureImage.addEventListener('mouseout', function () {
    alert('Don\'t go!');
});
