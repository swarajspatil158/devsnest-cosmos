const searchAPI = () => {
    const API_URL = "https://api.github.com/users/"
    let userName = document.getElementById("UserNameInput").value
    let require = new Request(`${API_URL}${userName}/repos`)

    fetch(require)
        .then(response => response.json())
        .then(data => { 
            const word = (data) => data.language == "Python"
            let filterJS = data.filter(word)
            let arrayNames = []
            for (let i in filterJS){
                arrayNames.push(filterJS[i].name)
            }
            let filter = document.getElementById("repos")
            for(let i=0;i<arrayNames.length;i++){
                let El = document.createElement("div")
                El.textContent=arrayNames[i]
                filter.appendChild(El)
                
            }
        })

        .catch(err => console.log(err))
}