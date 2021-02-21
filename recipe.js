let searchButton=document.querySelector("#search")
searchButton.addEventListener("click",()=>{
    sendAPIRequest();
})

async function sendAPIRequest(){
    let APP_ID="34c3507d";
    let APP_KEY="8f661ec2bc277569e1ba8adcf70ea16b";
    let variable=document.getElementById("hii").value;
    let response=await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}&q=${variable}`);
    let data=await response.json();
    console.log(data);
    for(var i=0;i<data.hits.length;i++){
        var card=document.createElement("div");
        card.setAttribute("class","card");
        card.style.width="30rem";
        card.style.backgroundColor= "rgba(255,255,255,0.9)";

        var header1=document.createElement("h5");
        header1.setAttribute("class","card-title");
        header1.innerText=data.hits[i].recipe.label;
        header1.style.backgroundColor="black";
        header1.style.textAlign="center";
        header1.style.color="white";
        card.appendChild(header1);

        var image=document.createElement("img");
        image.setAttribute("class","card-img-top");
        image.src=data.hits[i].recipe.image;
        card.appendChild(image);

        var cardbody=document.createElement("div");
        cardbody.setAttribute("class","card-body");


        var header4=document.createElement("p");
        header4.setAttribute("class","card-text3");
        header4.innerHTML="<b>URL:</b> "+ data.hits[i].recipe.url;
        cardbody.appendChild(header4);

        var header2=document.createElement("p");
        header2.setAttribute("class","card-text1");
        header2.innerHTML="<b>HealthLabels:</b> "+data.hits[i].recipe.healthLabels;
        cardbody.appendChild(header2);

        var header5=document.createElement("p");
        header5.setAttribute("class","card-text5");
        header5.innerHTML="<b>IngredientLines:</b> "+ data.hits[i].recipe.ingredientLines;
        cardbody.appendChild(header5);

        var header3=document.createElement("p");
        header3.setAttribute("class","card-text2");
        header3.innerHTML="<b>Calorie:</b> "+data.hits[i].recipe.calories;
        cardbody.appendChild(header3);

        card.append(cardbody);
        document.body.appendChild(card); 
    }
}