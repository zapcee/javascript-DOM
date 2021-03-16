window.addEventListener('load', function(){
    
    const field = document.getElementById("full_name");
    const destinationParagraph = document.getElementById('greeting');
    
    field.addEventListener('keyup', (e) => {
        let text = e.target.value;
        destinationParagraph.innerHTML = ("Hello there, " + text + "!");
    });

});