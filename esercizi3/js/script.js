       //                  ------------------esercizio 1------------ 
       const array = [1,4,43,68,5,23]

       cost averageArrey =()=>{
        let sumArray=0
       for(let number of array){
            sumArray += number;
        } 
        return sumArray/array.length;
       };

       console.log(la media è + (averageArray)) 


                    //      ------------eservizio 2------------
       
        cons img = document.querySelector(".root");

        const imgGeneraton =(imgurl) => {
            const imgEl = document.createElement("img");

            imgEl.src = imgurl;
            imgEl.alt = title;

          return imgEl;
        }

        const img1("https://picsum.photos/200/300")
        const img2("https://picsum.photos/200/300")

        img.append(img1,img2)    

                    //---------------- esercizio3----------

       cost rootEl = document.querySelector(".root");

       const weatherCardGen = (title,temperature,img)=>{
        const cardEl=document.createElement("div")
        const titleEl=document.createElement("h2")
        const temperatureEl=document.createElement("h3")
        const imgEl=document.createElement("img")


        cardEl.className = "card";
        imgEl.className = "cardimg";
        titleEl.textContent = "title";
        temperatureEl.textContent = "temperature"

        cardEl.append(imgEl,titleEl,temperatureEl)

        return cardEl;

       };

const cardWeather=weatherCardGen("palermo","la temperatura è 30°","https://picsum.photos/200/300")
       
