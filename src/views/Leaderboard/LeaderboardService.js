import http from '@/app/Arch/http';

export default {
  getHeaders() {
    return [
      {
        text: 'Nome',
        align: 'center',
        sortable: false,
      },
      {
        text: 'Tempo',
        align: 'center',
        sortable: false,
      },
      {
        text: 'Turnos',
        align: 'center',
        sortable: true,
        value: 'turn',
      },
    ];
  },
  findPlayers() {
    return http.get('/api/player');
  },
  create(payload) {
    return http.post('/api/player', payload);
  },
};
