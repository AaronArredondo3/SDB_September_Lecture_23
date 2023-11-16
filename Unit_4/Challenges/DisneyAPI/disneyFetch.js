/* 
    ! CHALLENGE
        
    - Create a boilerplate for index.html - Done
        - Change the title to: "Disney API" - DONE
        - link the disneyFetch.js at the bottom of the body element. DONE

    - Create two different variables
        - one will hold the URL provided - DONE
        - one will generate a random number from 0-50 (whole number)- DONE
    - Create an async function called INFO that will accept two different parameters - DONE
        - the url
        - the random number
    - Within the function, create a TRY/CATCH.- DONE
        - TRY and to fetch the url - DONE
            - JSON-ify the data returned- DONE
            - console.log 3 different positions:
                - The overall promise returned 
                    * hint: use the random number to target an object within the array provided.
                - The name of a single character
                - The imageURL of the character that is provided.
        - CATCH any error that is returned. - DONE
    - Invoke your function and pass with both variables as arguments.- DONE
    
    All results will be displayed in the console of the browser.

    ------------------------------------------------------------------------------

    API: Disney URL to use
    https://api.disneyapi.dev/character
    
    
    Additional Documentation:
    https://disneyapi.dev/
    */


const myUrl = 'https://api.disneyapi.dev/character';
const randomNumber = Math.floor(Math.random() * 51);
// console.log(randomNumber);

async function INFO(url, randomNumber) {
    try {

        const response = await fetch(url);
        const data = await response.json();
        // let newNumber = randomNumber*2

        console.log(data);
        console.log(randomNumber[data[0]].name);
        // console.log(data[randomNumber].imageURL);

    }
    catch(error) {

        console.error(error);
    }
}

INFO(myUrl, randomNumber)


