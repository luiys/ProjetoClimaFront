export default function GetContrast(color: string, path: string){

    let mode

    if(color === 'orange' || color === 'yellow' || color === 'teal' || color === 'white'){
        mode = 'light-mode'
    }else{
        mode = 'dark-mode'
    }

    //console.table({color, path})

    return mode

}