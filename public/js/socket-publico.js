const socket = io();
const lbticket1 = $("#lblTicket1");
const lbticket2 = $("#lblTicket2");
const lbticket3 = $("#lblTicket3");
const lbticket4 = $("#lblTicket4");
const lbescr1 = $("#lblEscritorio1");
const lbescr2 = $("#lblEscritorio2");
const lbescr3 = $("#lblEscritorio3");
const lbescr4 = $("#lblEscritorio4");

const lbTickets =[lbticket1,lbticket2,lbticket3,lbticket4];
const lbEscritorios =[lbescr1,lbescr2,lbescr3,lbescr4];

socket.on('connect', () => {
  console.log('conectado al servidor');
  
});
socket.on('disconnect', () => {
  console.log('perdimos conexión al servidor');
});
socket.on('estadoActual', (data) => {
  actualizarHTML(data.ultimos4);
});
socket.on('ultimos4', (data) => {
  const audio = new Audio('audio/new-ticket.mp3');
  audio.play();
  actualizarHTML(data.ultimos4);
});

function actualizarHTML(ultimos4){
  for (let i = 0;i< ultimos4.length;i++){
    lbTickets[i].text(`Ticket ${ultimos4[i].numero}`);
    lbEscritorios[i].text(`Escritorio ${ultimos4[i].escritorio}`);
  }
   


}