export default function turnLed(state) {
    window['_elg_pg_comm_channel'].sendMessage('LED', {
        active: !!state,
        color: 'red'
    });
}
