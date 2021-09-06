
import { AsyncGetPattern } from "../../../redux/types/types"
import { Wheater } from "../../../redux/types/wheaterApi"

export default function ConditionalRender(apiData: AsyncGetPattern<Wheater>) {

    const SHOW_LOADING = apiData.loading
    const SHOW_ERROR = apiData.error && !apiData.loading
    const SHOW_DATA = !!apiData.data && !apiData.loading
    const SHOW_NO_DATA = !apiData.data && !apiData.loading && !apiData.error

    return {
        SHOW_LOADING, SHOW_ERROR, SHOW_DATA, SHOW_NO_DATA
    }


}