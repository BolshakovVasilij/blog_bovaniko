//Создание объекта observer
const observer = new IntersectionObserver((entries) => {
	console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-internal__link').forEach((link)=>{
        console.log(link);
        let id = link.getAttribute('href').replace('#','');
        if (id === entry.target.id) {
          link.classList.add('nav-internal__link--active');
      } else {
      link.classList.remove('nav-internal__link--active');
      }
      });
    }
  });
},{
threshold:0.7,
});
//находим все секции, проходим по ним и с каждой секцией применим метод observe объекта observer - дает возможность следить за секциями из консоли
//в консоли в отслеживаемых IntersectionObserverEntry параметр isIntersecting показывает находится ли элемент в зоне видимости true или false, если не находится
document.querySelectorAll('.section').forEach(section => {
observer.observe(section)
} );
