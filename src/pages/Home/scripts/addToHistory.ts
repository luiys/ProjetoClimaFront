import { HistoryProps } from "../components/History"

const addToHistory = (CurrentHistory:HistoryProps[], city: string, current: number, max: number, min: number) => {

    if(!!city){

        if(CurrentHistory.some(data => data.city === city)){
            
            let i = CurrentHistory.findIndex(data => data.city === city)

            CurrentHistory.splice(i, 1)
            CurrentHistory.unshift({city,current,max,min})

        }else{

            CurrentHistory.length < 3 ? 
            CurrentHistory.unshift({city,current,max,min}) : 
            (() => {
                CurrentHistory.splice(2,1)
                CurrentHistory.unshift({city,current,max,min})
            })()

        }

    }

}

export default addToHistory