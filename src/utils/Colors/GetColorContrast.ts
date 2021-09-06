export default function GetContrast(color: string, path: string){

    let mode

    if(color === 'pink' || color === 'orange' || color === 'yellow' || color === 'teal' || color === 'cyan' || color === 'white'){
        mode = 'light-mode'
    }else{
        mode = 'dark-mode'
    }

    //console.table('Cor:',color,'modo:',mode,'path:',path)

    return mode

}