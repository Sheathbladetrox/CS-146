// Andrew Chuah
// I pledge my honor that I have abided by the Stevens Honor System.

// Here are the paths to the images
const fileLocations = {
   woofer: './img/woofer.jpg',
   pupper: './img/pupper.jpg',
   clouds: './img/clouds.jpg',
   snek: './img/snek.jpg'
};

/**
 * This function will get the values of the following elements:
 * 		formUsername, formCaption, formImg
 * Then, this will pass those values to the addNewPost function.
 * @param {Event} event the submit event of the #postForm form
 */
function handleFormSubmit(event) {
   // This next line prevents the reload of the form
   event.preventDefault();
   // Get values of inputs
   // Pass values to addNewPost()
   var user = document.getElementById("formUsername").value;
   var cap = document.getElementById("formCaption").value;
   var pic = document.getElementById("formImg").value;

   addNewPost(user, cap, fileLocations[pic]);
}

/**
 * This function create the following div and append it to the #postList element
	<div class="post">
		<span>{username}</span>
		<img src="{imgLocation}" alt="{caption}">
		<div class="postOverlay">
			{caption}
		</div>
	</div>
 * 
 * Also, add a mouseover and mouseleave events to the post div element
 * @param {String} username username of the post
 * @param {String} caption caption of the post
 * @param {String} imgLocation location of the post image
 */
function addNewPost(username, caption, imgLocation) {
   // Create the parent post div
   // Create a span for the user
   // Create image element
   // Create overlay element
   // Add all child elements (order matters)
   // Add event listeners to post
   // Add post element to post list
   var parentDiv = document.createElement("div");
   parentDiv.setAttribute("class", "post");

   var postList = document.getElementById("postList");

   var span = document.createElement("span");
   var spanText = document.createTextNode(username);
   span.appendChild(spanText);

   var image = document.createElement("img");
   image.src = imgLocation;
   image.alt = caption;

   var overlayDiv = document.createElement("div");
   overlayDiv.setAttribute("class", "postOverlay");
   var overlayText = document.createTextNode(caption);
   overlayDiv.appendChild(overlayText);

   parentDiv.appendChild(span);
   parentDiv.appendChild(image);
   parentDiv.appendChild(overlayDiv);

   postList.append(parentDiv);

   overlayDiv.addEventListener("mouseover", function(){
      overlayDiv.style.opacity = 1;
   })

   overlayDiv.addEventListener("mouseleave", function(){
      overlayDiv.style.opacity = 0;
   })
}

window.onload = () => {
   // Once our window is loaded, we add the event listener for our post form
   postForm.addEventListener('submit', handleFormSubmit);
};