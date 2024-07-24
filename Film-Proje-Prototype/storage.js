function Storage(){

}
Storage.prototype.addFilmToStorage=function(newFilm){

let films=this.getFilmsFromStorage();
films.push(newFilm);
localStorage.setItem("films",JSON.stringify(films));

}

Storage.prototype.getFilmsFromStorage=function(){
    let film;
    if(localStorage.getItem('films')===null){
        film=[];
    } 
    else{
        film=JSON.parse(localStorage.getItem('films'))
    }
    return film;
}
Storage.prototype.deleteFilmFromStorage=function(filmTitle){
    let films=this.getFilmsFromStorage();

    films.forEach(function (film, index) {

        if(film.title===filmTitle){
            films.splice(index,1);//Arayden o indexi silme işlemi 
        }

    });
    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.clearAllFilmsFromStorage=function(){


    localStorage.removeItem("films");
}