const elements = document.querySelectorAll('.intersection');

function handleIntersection(entries) {

  entries.map((entry) => {
   
    if (entry.isIntersecting) {
      if(entry.target.attributes.animation){
        entry.target.attributes.animation.value.split(" ").map(animation => {
            entry.target.classList.remove("intersection")
            entry.target.classList.add(animation)
        })
          observer.unobserve(entry.target);
        }
      }   
  });
}

const observer = new IntersectionObserver(handleIntersection);

elements.forEach(element => 
{
  observer.observe(element)
});
