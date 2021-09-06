import { HistoryProps } from "../components/History"

const addToHistory = (CurrentHistory:HistoryProps[], city: string, current: number, max: number, min: number) => {

    if(!!city){

        CurrentHistory.length < 3 ? 
        CurrentHistory.unshift({city,current,max,min}) : 
        (() => {
            CurrentHistory.splice(2,1)
            CurrentHistory.unshift({city,current,max,min})
        })()

    }

}

export default addToHistory