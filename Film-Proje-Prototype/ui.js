function UI() {

}
UI.prototype.addFilmToUI = function (newFilm) {

    //     <tr>
    //     <td><img src="" class="img-fluid img-thumbnail"></td>
    //     <td></td>
    //     <td></td>
    //     <td><a href="#" id="delete-film" class="btn btn danger">Filmi Sil</a></td>
    // </tr> // bu yapıyı oluşturacak arayüzde
    const filmList = document.getElementById("films");

    filmList.innerHTML += `

<tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.direction}</td>
   <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
</tr>

`;

}

UI.prototype.clearInput = function (element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}
UI.prototype.displayMessages = function (message, type) {
    const cardBody = document.querySelectorAll(`.card-body`)[0];
    //alert divi
    const div = document.createElement("div");

    div.className = `alert alert-${type}`;

    div.textContent = message;


    cardBody.appendChild(div);

    let opacity = 1; // Başlangıç opacity değeri
    const interval = setInterval(function () {
        if (opacity > 0) {
            div.style.opacity = opacity;
            opacity -= 0.05; // Her adımda opacity değerini azaltıyoruz
        } else {
            clearInterval(interval); // Interval'ı durduruyoruz
            div.remove(); // div elementini kaldırıyoruz
        }
    }, 150); // Her adımda 150ms bekliyoruz



}
UI.prototype.loadAllFilms = function (films) {
    const filmList = document.getElementById("films");

    films.forEach(function (film) {
        filmList.innerHTML += `

    <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.direction}</td>
        <td><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
   </tr>

    
    `
    });


}
UI.prototype.deleteFilmFromUI=function(element){
element.parentElement.parentElement.remove();
}
UI.prototype.clearAllFilmsFromUI=function(){
    const filmList = document.getElementById("films");
    filmList.remove();
}