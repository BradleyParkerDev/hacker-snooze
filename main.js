//////////////////////////////////////////////////////
//Container divs
//////////////////////////////////////////////////////

//Body
let body = document.querySelector('body');
//Parent
let parent = document.querySelector('.row');
parent.classList.add("parent");
//Child
let child = document.querySelector('.col-sm-6');
child.classList.add("child")

//////////////////////////////////////////////////////
//Card
//////////////////////////////////////////////////////

let card = document.createElement('div')
let cardBody = document.createElement('div')
let cardTitle = document.createElement('h5')
cardTitle.innerText = "Title"
let score = document.createElement('p')
score.innerText = "Score: "
let comments = document.createElement('p')
comments.innerText = "Comments: "
let submittedBy = document.createElement('p')
submittedBy.innerText = "Submitted by: "

cardBody.appendChild(cardTitle)
cardBody.appendChild(score)
cardBody.appendChild(comments)
cardBody.appendChild(submittedBy)
card.appendChild(cardBody)



child.appendChild(card)



for(let i =0; i < 100; i++){
    let newChild = parent.children[0].cloneNode(true);
    parent.appendChild(newChild);
}


//API 
//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
let getTopNewsStories = async (num) => {
    let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    let data = await response.json();
    return data[num]
 
}
let id = getTopNewsStories(0);
console.log(id)

// let getOneHundredStories = async () => {
//     for(let i = 0; i < 5; i++){
//         let response = await fetch(`https://hacker-news.firebaseio.com/v0/${getTopNewsStories(i)}.json?print=pretty`);
//         let data = await response.json();
//         console.log(data);
//     }   

// }

// getOneHundredStories()