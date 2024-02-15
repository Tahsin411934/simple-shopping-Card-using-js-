

const cards=document.querySelectorAll(".card");
console.log(cards);
let count=0;

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.addEventListener('click', function(){
        const h1=element.querySelector("h1");
        const p= document.createElement("p");
        p.innerHTML=h1.innerHTML;
        const msg=document.querySelector(".msg");
        msg.appendChild(p);

        // price show
        const price=element.querySelector("p");
        const price_add=document.querySelector("#price_add");
        const p1= document.createElement("p");
        p1.innerHTML= parseFloat(price.innerHTML.split(":")[1]) ;
        price_add.appendChild(p1);
        count=count+parseFloat(price.innerHTML.split(":")[1]);
        console.log(count);


        // QUANTITY SHOW
        


        // TOTAL SHOW
        let total=document.querySelector(".total");
        console.log(total);
        const p2=document.createElement("p");
        p2.innerHTML=count;
        total.appendChild(p2);

    })
    
}








