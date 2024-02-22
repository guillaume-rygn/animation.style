// Select all elements with the class 'intersection'
const elements = document.querySelectorAll('.intersection');

// Define a function to handle the intersection of an element with the viewport
function handleIntersection(entries) {
  
  // Loop through each entry in the entries array
  entries.map((entry) => {
   
    // Check if the element is currently intersecting with the viewport
    if (entry.isIntersecting) {
      // Check if the element has an 'animation' attribute
      if(entry.target.attributes.animation){
        // Split the value of the 'animation' attribute into an array of animations
        entry.target.attributes.animation.value.split(" ").map(animation => {
            // Remove the 'intersection' class from the element
            entry.target.classList.remove("intersection")
            // Add each animation class to the element
            entry.target.classList.add(animation)
        })
          // Stop observing the element
          observer.unobserve(entry.target);
        }
      }   
  });
}

// Create a new Intersection Observer object
const observer = new IntersectionObserver(handleIntersection);

// Loop through each element and start observing it
elements.forEach(element => 
{
  observer.observe(element)
});
