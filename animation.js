const elements = document.querySelectorAll('.animation');

function handleIntersection(entries) {

  entries.map((entry) => {
   
    if (entry.isIntersecting) {
      entry.target.attributes.data.value.split(" ").map(attribute => {
        if(attribute !== "animation"){
          entry.target.classList.remove("intersection")
          entry.target.classList.add(attribute)
        }
      })
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);

elements.forEach(element => 
{
  observer.observe(element)
});
