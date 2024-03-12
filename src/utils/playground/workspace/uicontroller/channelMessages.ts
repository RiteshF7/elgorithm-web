import {state} from "sucrase/dist/types/parser/traverser/base";

export function moveForward() {
    // @ts-ignore
    window['_elg_pg_comm_channel'].sendMessage('CUBE', {
       motion: 'FORWARD'
    });
}