let countSearches = 0;

document.getElementById('button').addEventListener('click', function() {
    // value taken in the search bar
    const value = document.getElementById('search').value.toLowerCase();
    
   // first result constants
     const breedN = document.getElementById('breedN');
     const lifeSpan = document.getElementById('lifeSpan');
     const fact = document.getElementById('fact');
     const image = document.getElementById('image');

    // second result constants
     const breedN2 = document.getElementById('breedN2');
     const lifeSpan2 = document.getElementById('lifeSpan2');
     const fact2 = document.getElementById('fact2');
     const image2 = document.getElementById('image2');

     // user should be alerted if the number of searches is more than 2
     if (countSearches >=2) {
        alert('You can not compare more than two breeds')
     }
    // fetches breed infomation from json file in the same folder
    fetch('breeds.json')
    .then(response =>response.json())
    .then(data => {
        // result is set to the breed name
        const result = data.find(breed => breed.name.toLowerCase() === value);
        if (result) {
            // if count is less than 0 the user can use the search bar
            if (countSearches == 0) {
            // breed Name is updated 
            breedN.textContent = `Name: ${result.name}`;
            // uses [] as object has a name including a "-"
            lifeSpan.textContent = `Life Span: ${result["life-span"]}`;
            // fact text is updated 
            fact.textContent = `Fact: ${result.fact}`;
             // image is updated 
            image.src = result.image;
            image.style.display = 'block'
            // search count is incremented
            countSearches++;
            }
        else if (countSearches == 1) {
            breedN2.textContent = `Name: ${result.name}`;
            lifeSpan2.textContent = `Life Span: ${result["life-span"]}`;
            fact2.textContent = `Fact: ${result.fact}`;
            image2.src = result.image;
            image2.style.display = 'block'
            document.getElementById('result2').style.display = 'block';
            countSearches++;
        }}else {
            // alert is displayed if breed isnt within the json file
            alert('Breed not found');
        }
        
            
    })
    .catch(error =>  {
        // error is printed if no data is fetched
        console.log('Error when fetching for data:', error);
        breedN.textContent = "Error when fetching the data needed";
        lifeSpan.textContent = "Eror,life span was not found.";
        fact.textContent = "Error ,breed fact not received.";
        image.src = "";
        image.style.display = 'none';
    });
});
