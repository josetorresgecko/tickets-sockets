const socket = io();
const labelNt = $("#lblNuevoTicket");
socket.on('connect', () => {
  console.log('conectado al servidor');
  
});
socket.on('disconnect', () => {
  console.log('perdimos conexión al servidor');
});
socket.on('estadoActual', (message) => {
  labelNt.html(message.actual); 
});

$("#newTicket").on('click',()=>{
  socket.emit('siguienteTicket',null,(siguienteTicket)=>{
    labelNt.html(siguienteTicket); 
  });
});