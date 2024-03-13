export function delay(seconds) {
    window['_elg_pg_comm_channel'].sendMessage('delay', {
        time: seconds * 1000
    });
}