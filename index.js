let specifyingImages = document.getElementsByClassName("specifyingImages");
let hiddenImages = document.getElementsByClassName("hiddenImages")
let textMuted = document.getElementsByClassName("text-muted")



        /*for (let i = 0; i < hiddenImages.length; i++) {
            hiddenImages[i].addEventListener("click", borderChange );
          }*/

          let rollingTheCards = []
          let showingTheImages = document.getElementsByClassName("showing-the-images")
          let showingTheImages2 = document.getElementsByClassName("showing-the-images2")

          let loadingImages = () =>{
            fetch("http://www.splashbase.co/api/v1/images/search?query=beach")
            .then(response => response.json())
            .then(data => {
                
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

                    for(let i = 0; i<showingTheImages2.length ; i++ ){
                        showingTheImages2[i].innerHTML += ` 
                        <img class="img-fluid" src=${data.images[i].large_url}>
                        `
                    }       
                    });
                }

                const viewImage = (event) => {
                    fetch("http://www.splashbase.co/api/v1/images/search?query=beach")
                    .then(response => response.json())
                    .then(data => {

                    for(let i = 0; i<showingTheImages2.length ; i++ ){
                        showingTheImages2[i].innerHTML += ` 
                        <img class="img-fluid" src=${data.images[i].large_url}>
                        `
                    }       
                  }
                )}
                  for (let i = 0; i < specifyingImages.length; i++) {
                    specifyingImages[i].addEventListener("click", viewImage );
                  } 
          
