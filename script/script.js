"use strict"

const numberOfNews = +prompt('Siz qancha yangilik ko`rdinggiz?')

const personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    privat: false,
}
alert("foydalanuvchi siz oxirgi o`qigan 2 ta yangilikgizni kirtishingiz so`raladi!!!")

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

if(personalNewsDB.count<10){
    console.log("siz atiga "+numberOfNews+"ta yagilik o`qibsiz xolos bu juda oz")
    alert("siz atiga "+numberOfNews+"ta yagilik o`qibsiz xolos bu juda oz")
} else if(personalNewsDB.count >= 10 && personalNewsDB.count < 30){
    console.log("siz  "+numberOfNews+"ta yagilik o`qibsiz  bu yaxshi")
    alert("siz  "+numberOfNews+"ta yagilik o`qibsiz bu yaxshi")
} else if(personalNewsDB.count >=30 ){
    console.log("siz  "+numberOfNews+"ta yagilik o`qibsiz  bu juda yaxshi")
    alert("siz  "+numberOfNews+"ta yagilik o`qibsiz bu juda yaxshi")
} else{
    console.log("siz matn kiritdiz iltimos raqam kiriting!!!")
    alert("siz matn kiritdiz iltimos raqam kiriting!!!")
}


 console.log(personalNewsDB)