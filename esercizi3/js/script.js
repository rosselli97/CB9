       //                  ------------------esercizio 1------------ 
       const dataArray = [1,4,43,68,5,23]

       function averageArrey (array) {

        let sumArray=0
       for(let number of array){
            sumArray += number;
        } 
        return sumArray/array.length;
       };
const averageDataArray = averageArrey(dataArray)
       console.log("la media è" + averageDataArray ) 


                    //      ------------eservizio 2------------
       
        const postoImg = document.querySelector(".root");
      
        function imgGeneraton (imgurl,title,divdestinazione)  {
            const imgEl = document.createElement("img");

            imgEl.src = imgurl;
            imgEl.alt = title;

          divdestinazione.append(imgEl)
        }

        const img1="https://picsum.photos/200/300"
        const img2="https://picsum.photos/200/300"

         imgGeneraton(img1,"text",postoImg)

                    //---------------- esercizio3----------

       const rootEl = document.querySelector(".root");

       const weatherCardGen = (title,temperature,img)=>{
        const cardEl=document.createElement("div")
        const titleEl=document.createElement("h2")
        const temperatureEl=document.createElement("h3")
        const imgEl=document.createElement("img")


        cardEl.className = "card";
        imgEl.className = "cardimg";
        imgEl.src = img
        titleEl.textContent = title;
        temperatureEl.textContent = temperature

        cardEl.append(imgEl,titleEl,temperatureEl)

        return cardEl;

       };

const cardWeather=weatherCardGen("palermo","la temperatura è 30°","https://picsum.photos/200/300")
       
