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
                - The overall promise returned -DONE
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

//! Global Variables
const baseURL = 'https://api.disneyapi.dev/character';
const randomNumber = Math.floor(Math.random() * 51);
console.log(randomNumber);

const Info = async(baseURL, randomNumber) => {

    try {
        let res = await fetch(baseURL);
        let results = await res.json();
        let data = results.data;
        
        console.log(data);

        // let obj = {
        //     randomNumber: data.randomNumber,
        //     name: data.name,
        //     img: data.image,
        // }
        // console.log(obj);

    } catch (err) {
        console.error(err);
    }

}
    Info(baseURL, randomNumber)




// part 2 
/* 
! Challenge

    * index.html
        - create two div elements.
            - first one will hold a button. Name the button "Character".
            - second will be empty. It will govern the display of the data fetched.
        - Connect disneyDOM.js within the HTML doc. 
            *hint: be sure that it is sourced so that it can obtain data from disneyFetch.js
    
    * disneyDOM.js
        - Create two variables.
            - btn: which will connect to the button in index.html
            - display: which will target the empty div in index.html
            
        - create a function called "displayChar" that calls upon the info() function within disneyFetch.js. 
            - This will fire off when the user clicks the Character button.
            * be sure to comment out unnecessary code such as console logs and the invocation of info() within that file.
            * you will need to modify that function to return information rather than just console log it.
            * remember that it returns a promise.
        - Within the function
            - Create a new variable to handle the random value from 0-50.
            - Create an h1 and img element
                - h1 element will hold the name of the character randomly selected.
                - img element will source to the character imageUrl.
                - for the alt property in the image element, display a string that states "Image of" and the characters name.
                - change the style attribute of the image element so that it has a height and width of 300px.
            - Append the elements to the empty div in the HTML.
                - The h1 element should be above the image.

        - Further Development
            - When a user clicks the button after the first fire, create a solution that removes the previous result and replaced with the new item.

*/