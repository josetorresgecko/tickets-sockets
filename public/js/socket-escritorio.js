const socket = io();
const searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')){
  window.location('index.html');
  throw new Error('els escritorio es necesario');
}
const escritorio = searchParams.get('escritorio');
$("#escritorio").text(`Escritorio ${escritorio}`);
$("#atenderbtn").on('click',()=>{
  socket.emit('atenderTicket',{escritorio:escritorio},(resp)=>{
    if (resp === 'no hay tickets'){
      $("#atendiendo").text(resp);
    }
    $("#atendiendo").text(resp.numero);
  });
});

