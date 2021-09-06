export default function GetContrast(color: string, path: string){

    let mode

    if(color === 'orange' || color === 'yellow' || color === 'teal' || color === 'white'){
        mode = 'light-mode'
    }else{
        mode = 'dark-mode'
    }

    let table = {color, path}

    console.table(table)

    return mode

}