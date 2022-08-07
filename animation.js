const elements = document.querySelectorAll('.animation');

function handleIntersection(entries) {

  entries.map((entry) => {
   
    if (entry.isIntersecting) {
      console.log(entry.target.attributes.data)
      entry.target.attributes.data.value.split(" ").map(attribute => {
        if(attribute !== "animation"){
          console.log(entry.target.classList)
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
