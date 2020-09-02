const { io } = require('../server');
const {TicketControl} = require('../classes/ticket-control');

const ticketControl = new TicketControl();
io.on('connection', (client) => {

  client.on('siguienteTicket', (data,callback) => {
    const siguienteTicket = ticketControl.siguiente();
    callback(siguienteTicket);
  });
  client.emit('estadoActual', {
    actual: ticketControl.getUltimoTicket(),
    ultimos4:ticketControl.getUltimos4()
  });  
  client.on('atenderTicket',(data,callback)=>{
    if (!data.escritorio){
      return callback({
        err: true,
        message:"el escritorio es necesario"
      });
    }
    const atenderTicket = ticketControl.atenderTicket(data.escritorio);
    client.broadcast.emit('ultimos4', {
      ultimos4:ticketControl.getUltimos4()
    });
    callback(atenderTicket);
  });


});