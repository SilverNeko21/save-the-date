

document.getElementById('bday').addEventListener('click', infoPopUp);

function infoPopUp(){
    var bdayDiv = document.createElement('div');
    var bdayText = document.createTextNode('Feburary 3rd is my birthday!');
    bdayDiv.appendChild(bdayText);
}

console.log(infoPopUp);