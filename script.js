let tesztgomb = document.getElementById('teszt');

tesztgomb.addEventListener('click', abszolut);

function abszolut(){
    let szam = prompt('Adj meg egy számot: ');

    if (szam >= 0){
        document.getElementById('eredmeny').innerHTML = szam;
    } else {
        document.getElementById('eredmeny').innerHTML = szam;
    }
}