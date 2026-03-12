/* Challenge 2: Complete the init() function so that you build HTML output as per the wireframe diagram image.
Notes:
1) Give each info card div a class of "card"
1) Images
   a. Titles and Pizza are both images stored in the images folder.
   b. When creating the images give each a class of either "title" or "pizza" respectively
   c. Each image has been conveniently labeled with a number at the end in order to use a 
      loop to retrieve the images.
2) Create an appropriate random price to display for each pizza(15-30). No html needed
3) Enter quantity is a text input.No need to give id
4) Buy is a button input. No need to give it an event listener.

Now that you have the template, use a for loop to produce all five pizza cards.
*/ 

// Go to style.css for Challenge 3

//init() function is called when the page loads in index.html
function init(){
      let output = document.getElementById("output");
      let build = "";
      for(let i = 1; i <= 5; i++){
            build += `<div class="card">`;
            build += `<img class="title" src="images/title${i}.png" alt="Pizza Title ${i}">`;
            build += `<img class="pizza" src="images/pizza${i}.jpg" alt="Pizza Image ${i}">`;
            let price=Math.floor(Math.random()*(35-15+1)+15);
            build += `<p>Price: $${price}</p>`;
            build += `<input type="text" placeholder="Enter quantity">`;
            build += `<button>Buy</button>`;
            build += `</div>`;
      }
      output.innerHTML = build;
   }


