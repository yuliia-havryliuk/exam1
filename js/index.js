// 1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.

const firstArr = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]
const maxNum = Math.max.apply(null, firstArr)
console.log(maxNum)

// 2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. 
//Створити новий масив де будуть тільки Стрінгові значення.

const secondArr = ["test", 12, undefined, null, -5, "javascript", "1", false, true, 0 , "!"]
const arrStr = []

for(let i=0;i<secondArr.length;i++){
    if(typeof secondArr[i] === 'string'){
        arrStr.push(secondArr[i])
    }
    
} console.log(arrStr)

// 3.	Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"},
// {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: 
//["hunting", "TV", "javascript"], type: "user"}] – Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. 
//Додати можливість додати нове поле для всіх юзерів – job (true/false);
const people = [
    {
        name: "Yura",
        age: 55,
        hobby: ["football", "ski", "hiking"],
        type: "Admin"
    }, 
    {
        name: "Yulian",
        age: 28,
        hobby: ["films", "games", "hiking"],
        type: "user"
    },
    {
        name: "Taras",
        age: 38,
        hobby: ["hunting", "TV", "javascript"],
        type: "user"
    }
] 
//шукаємо юзерів по типу
const usersArr =[]
function allUsers(){
    for(key in people){
        if(people[key].type === "user"){
            usersArr.push(people[key].name)
        }
    }console.log(`Users are: ${usersArr.join(', ')}`)
} 
allUsers()
//шукаємо юзерів, в яких hobby hiking 
const hobbyHiking = []
function usersHiking(){
    for(let i =0 ;i<people.length;i++){
        for(let j = 0; j<people[i].hobby.length;j++){
            if(people[i].hobby[j]==="hiking"){
                console.log(`${people[i].name} is interesting in hiking!`)
            }
        }
    }
}
usersHiking()
//надаємо можливість додавати і змінювати юзерам роботу
const userJob =["true", "false","true"]
function addJob(){
    for(key in people){
        people[key].job = userJob[key]
    }
    console.log(people)
}
addJob()

// 4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки
//(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.

const mainRef = document.querySelector('.main')

const usualText = document.createElement('h1')
usualText.classList.add('usual__text')
usualText.style.color = 'gold'
usualText.textContent = 'Do not copy me!'

mainRef.appendChild(usualText)

const pressCopyBtns = window.addEventListener('keyup', event=>{
    if(event.metaKey && event.code ==='KeyC'){
        console.log(event)
        event.preventDefault()
        showModal()
    }
})
function showModal(){
    alert('Увага! Це інтелектуальна особистість власника!')
}

// 5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список з іменами всіх країн та 
//її столицею на сторінку, назву країни зробити великими буквами. 

let mainUrl = 'https://restcountries.eu/rest/v2/all'
let node = 0

window.onload= function(){
    node = fetch(mainUrl,{

    })
    .then(response => response.json())
    .then(result => node = result)
    .catch(error => console.log(error))
}



function countries(){

    for(key in node){
        const mainlist = document.getElementById('main')

        const countryItem = document.createElement('li')
        countryItem.classList.add('country__item')
        countryItem.textContent = node[key].name
        countryItem.style.textTransform = 'upperCase'

        const countryCapital = document.createElement('h4')
        countryCapital.classList.add('country__capital')
        countryCapital.textContent = node[key].capital
        

        mainlist.append(countryItem, countryCapital)

    }
}