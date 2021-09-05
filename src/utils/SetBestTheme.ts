export default function SetBestTheme(theme: string, path: string){

    let mode

    if(theme === 'pink' || theme === 'orange' || theme === 'yellow' || theme === 'teal' || theme === 'cyan' || theme === 'white'){
        mode = 'light-mode'
    }else{
        mode = 'dark-mode'
    }

    //console.table('tema:',theme,'modo:',mode,'path:',path)

    return mode

}