let specifyingImages = document.getElementsByClassName("specifyingImages");
let hiddenImages = document.getElementsByClassName("hiddenImages")
let textMuted = document.getElementsByClassName("text-muted")


        /*const borderChange = (event) => {
          event.currentTarget.style.border = "1px red solid";
        };*/
      
        /*for (let i = 0; i < specifyingImages.length; i++) {
          specifyingImages[i].addEventListener("click", borderChange );
        }
        for (let i = 0; i < hiddenImages.length; i++) {
            hiddenImages[i].addEventListener("click", borderChange );
          }*/

          /*let displayingTheImages = (givenImages) =>{
            
            return ` 
            <img class="img-fluid" src=${givenImages.large_url} />
          `

          }*/
          let rollingTheCards = []

          let loadingImages = () =>{
            fetch("http://www.splashbase.co/api/v1/images/search?query=beach")
            .then(response => response.json())
            .then(data => {
                let showingTheImages = document.getElementsByClassName("showing-the-images")
                for(let i = 0; i<showingTheImages.length ; i++ ){
                    showingTheImages[i].innerHTML += ` 
                    <img class="img-fluid" src=${data.images[i].large_url}>
                    `
                }       
                });
            } 
            let loadingSecondaryImages = () =>{
                fetch("http://www.splashbase.co/api/v1/images/search?query=beach")
                .then(response => response.json())
                .then(data => {

                    let showingTheImages2 = document.getElementsByClassName("showing-the-images2")

                    for(let i = 0; i<showingTheImages2.length ; i++ ){
                        showingTheImages2[i].innerHTML += ` 
                        <img class="img-fluid" src=${data.images[i].large_url}>
                        `
                    }       
                    });
                } 

            /*const rollingTheCardsPromise = fetch("http://www.splashbase.co/api/v1/images/search?query=beach")
            .then(response => response.json())
            Promise.all([rollingTheCardsPromise]).then(responses => {
                rollingTheCards = responses[0].data
              }).catch(
                err => console.log(err))*/



          /*fetch("http://www.splashbase.co/api/v1/images/random")
          .then(response => response.json())
          .then(data => console.log(data))*/
          
