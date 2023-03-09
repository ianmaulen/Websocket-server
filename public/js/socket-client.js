const socket = io();

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMsg = document.querySelector('#txtMsg');
const btnEnviar = document.querySelector('#btnEnviar');

socket.on('connect', () => {
  console.log('Conectado');
  lblOffline.style.display = 'none';
  lblOnline.style.display = '';
});
socket.on('disconnect', () => {
  console.log('Desconectado del servidor');
  lblOffline.style.display = '';
  lblOnline.style.display = 'none';
});

btnEnviar.addEventListener('click', () => {
  const msg = txtMsg.value;
  const payload = {
    mensaje: msg,
    id: '123ABC',
    fecha: new Date().getTime()
  }
  socket.emit('enviar-msg', payload, (id) => {
    console.log('Desde el server', id)
  });
})

socket.on('enviar-msg', (msg) => {
  console.log(msg)
})