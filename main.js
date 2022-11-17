//////////////////////////////////////////////////////
//Container divs
//////////////////////////////////////////////////////

//Body
let body = document.querySelector('body');
//Parent
let parent = document.querySelector('.row');
parent.classList.add("parent");
//Child
// let child = document.createElement('div');
// child.className = ('.col-sm-6');
// child.classList.add("child")


//API 
//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
let getTopNewsStories = async () => {
    let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    let data = await response.json();
    
    for(let i = 0; i < 100; i++){
        let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`);
        let data2 = await response.json();
        makeCard(data2, i);
    }      
}

function makeCard(data2, i){
    let child = document.createElement('div');
    child.className = ('col-sm-6');
    child.classList.add("child")
    parent.appendChild(child);

    //create html elements
    let card = document.createElement('div')
    //card.className = "card"
    let cardBody = document.createElement('div')
    //cardBody.className = "card-body"
    let cardTitle = document.createElement('h5')
    cardTitle.className = "card-title"
    let cardAnchor = document.createElement('a');
    let score = document.createElement('p')
    score.className = "card-text";
    let comments = document.createElement('p')
    comments.className = "card-text";
    let submittedBy = document.createElement('p')
    submittedBy.className = "card-text";

    //bind data from json into html
    cardAnchor.innerText =  `${data2.title}`
    cardAnchor.href = `${data2.url}`
    score.innerText = `Score: ${data2.score}`
    comments.innerText = `Comments: ${data2.descendants}`
    submittedBy.innerText = `Submitted by: ${data2.by}`

    //put html together
    cardTitle.appendChild(cardAnchor);
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(score)
    cardBody.appendChild(comments)
    cardBody.appendChild(submittedBy)
    card.appendChild(cardBody);
    child.appendChild(card)

}

getTopNewsStories();