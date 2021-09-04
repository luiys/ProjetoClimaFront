export const DayMoment = () => {

    const hour = new Date().getHours()

    if(hour >= 6 && hour < 12) return 'Bom dia'
    if(hour >= 12 && hour < 18) return 'Boa tarde'
    
    return 'Boa noite'

}