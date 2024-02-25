
export default function turnLed(state){
    if (state=='1'){
        document.getElementById('led').style.backgroundColor = 'green'
    }
    else{
        document.getElementById('led').style.backgroundColor = 'white'
    }

}