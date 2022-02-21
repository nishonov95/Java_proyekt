"use strict"

let numberOfNews 

function startProjekt(){
    numberOfNews = +prompt('Siz qancha yangilik ko`rdinggiz?')
    while(numberOfNews == "" || numberOfNews == null || isNaN(numberOfNews)){
        numberOfNews = +prompt('Siz qancha yangilik ko`rdinggiz?')
    }
}
//startProjekt()

const personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    privat: true,
}
alert("foydalanuvchi siz oxirgi o`qigan 2 ta yangilikgizni kirtishingiz so`raladi!!!")

function rememberNews(){
    for (let i = 1; i < 3; i++) {
        const a = prompt(i+'- yangilik nomi?')
        const b = prompt(i+'- yangilikga nechchi baho qo`yasiz?')
        if (a !=null && b !=null && a !="" && b !="" && a.length<50){
            personalNewsDB.news[a] = b
            console.log(i,"-tayyor")
            alert(i+"- yagilikni kiritdingiz")
        }   else {
            console.log(i,"-kiritilmadi")
            alert(i+"- yangilikni kiritmadiz")
            i--
            }
        
        }

}
//rememberNews()

function showPersanalLevel(){
    if(personalNewsDB.count<10){
        console.log("siz atiga "+numberOfNews+"ta yagilik o`qibsiz xolos bu juda oz")
        alert("siz atiga "+numberOfNews+"ta yagilik o`qibsiz xolos bu juda oz")
    } else if(personalNewsDB.count >= 10 && personalNewsDB.count < 30){
        console.log("siz  "+numberOfNews+"ta yagilik o`qibsiz  bu yaxshi")
        alert("siz  "+numberOfNews+"ta yagilik o`qibsiz bu yaxshi")
    } else if(personalNewsDB.count >=30 ){
        console.log("siz  "+numberOfNews+"ta yagilik o`qibsiz  bu juda yaxshi")
        alert("siz  "+numberOfNews+"ta yagilik o`qibsiz bu juda yaxshi")
    } 

}
//showPersanalLevel()

function showMyDB(hidden){
    if (!hidden){
        console.log(personalNewsDB)
    }

}

showMyDB(personalNewsDB.privat)


function writeYourGenres(){
    for(let i=1; i<4; i++){
        personalNewsDB.genres[i] = +prompt("Sizga Qaysi Janr yoqadi")
        if(personalNewsDB.genres[i] !=null || personalNewsDB.genres[i] !="" || personalNewsDB.genres[i].length<5){
            console.log(i,"-tayyor")
            alert(i+"- janrni kiritdingiz")
        } else {
            console.log(i,"-kiritilmadi")
            alert(i+"- janrni kiritmadiz")
            i--
        }
    } 
}
writeYourGenres()

console.log(personalNewsDB.genres);
