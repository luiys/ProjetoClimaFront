import { getWheaterError, getWheaterPending, getWheaterSuccess } from '../../../redux/reducers/homeReducer';

export default async function getWheater(city: string, dispatch: Function) {
    dispatch(getWheaterPending())
    if (!!city) {
        try {
            const response = await fetch(`https://weather.contrateumdev.com.br/api/weather/city/?city=${city}`);
            const data = await response.json();
            if (data.cod === 200) dispatch(getWheaterSuccess(data))
            else dispatch(getWheaterError())
        } catch (error) {
            dispatch(getWheaterError())
        }
    }

    if (!city) dispatch(getWheaterError())
}