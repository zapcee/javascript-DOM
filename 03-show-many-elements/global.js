window.addEventListener('load', function(){
    const showContent = document.getElementsByClassName("hidden");
    const showClick = document.getElementById("button");

    showClick.addEventListener('click', function(){
        Array.from(showContent).forEach((v) => {
            v.style.display = "flex";
        });
    });
});