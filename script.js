// Encontra a data atual
const today = new Date();

// Encontra todos os elementos com a classe "event"
const events = document.querySelectorAll('.event');

// Encontra o evento mais próximo com uma data futura
let closestEvent = null;
let closestDate = Infinity;
events.forEach(event => {
  const dateString = event.querySelector('.date h2').textContent + ' ' + event.querySelector('.date p').textContent;
  const eventDate = new Date(dateString);
  if (eventDate >= today && eventDate < closestDate) {
    closestEvent = event;
    closestDate = eventDate;
  }
});

// Adiciona a classe "alert" ao evento mais próximo
if (closestEvent) {
  closestEvent.classList.add('alert');
}
