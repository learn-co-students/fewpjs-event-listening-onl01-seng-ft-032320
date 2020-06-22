function addingEventListener() {
    const input = document.querySelector('input');
    input.addEventListener('click', function(event) {
        console.log('I was clicked');
    });
}

addingEventListener();