const input = document.getElementById("inpute");
const btn = document.querySelector("#btn");
const result = document.getElementById("result");





btn.addEventListener("click", async function(){
    if (input.value == "") {

    await fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(response => response.json())
        .then(response =>{

            let output = "";

            response.results.forEach((user)=>{

                output += `
                    <div id="list">
                        <h4>${user.name}</h4>
                        <a href="${user.url}">${user.url}</a>
                    </div>
                `;
            })
        
            result.innerHTML = output;
    })

}
    else{

    await fetch (`https://pokeapi.co/api/v2/pokemon/${input.value}`)
    .then(data => data.json())
    .then(data => {

        console.log(data);
        let output = "";

        output +=`

        <div id="search">
        <img src="${data.sprites.front_default}">
        <h4 id="name">${data.name}</h4>
        </div>

        `
        
        result.innerHTML = output;

         })
    }

})



