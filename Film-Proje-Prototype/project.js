
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directionElement = document.querySelector("#direction");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");
//UI Objesini başlatma

const ui = new UI();


//Local Stoarage için obje üret
const storage = new Storage();



//Tüm Eventleri yükleme
eventListener();

function eventListener() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        //Sayfaya yüklendiğinde localStorage'dan verileri al ve göster
        const films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);

    });
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener('click',clearAllFilms);

}
function addFilm(e) {

    const title = titleElement.value;
    const direction = directionElement.value;
    const url = urlElement.value;

    if (title === "" || direction === "" || url === "") {
        //hata
        ui.displayMessages("Tüm Alanları Doldurun !!!", "danger");


    } else {
        //Yeni Film
        const newFilm = new Film(title, direction, url);



        ui.addFilmToUI(newFilm);//arayüze film ekleme
        storage.addFilmToStorage(newFilm);//storage a film ekleme
        ui.displayMessages("Film Başarıyla Eklendi...", "success")
    }

    ui.clearInput(titleElement, directionElement, urlElement);

    e.preventDefault();
}
function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        //Filmin adını alıyoruz aşağıda parent elemene gidip onun kardeşinden sonraki kardeşini alıyoruz bu yolla
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Silme İşlemi Başarılı...", "success");


    }
}

function clearAllFilms(){
if(confirm("Tüm Filimleri Silmek İstediğinize Emin misiniz?")){
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
}
}
