"use strict"
const numberOfNews = +prompt('Siz qancha yangilik ko`rdinggiz?')
const personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    privat: false,
}
const a = prompt('Oxirgi ko`rgan yangiliklaringizdan biri?')
const b = prompt('Unga qancha baxo bergan bo`lardinggiz?')

 personalNewsDB.news[a] = b

 console.log(personalNewsDB)