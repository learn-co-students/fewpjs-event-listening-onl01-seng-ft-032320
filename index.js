function addingEventListener() {

    const input = document.querySelector('#input')
    console.log(input)
    input.addEventListener("click", function(e) {
        alert('I was clicked')
        console.log(e)
    })


}

addingEventListener()