import React from 'react'
const initialState = {
    'ABROAD':[],
    'BEACH':[],
    'CAMPING TRIP':[],
    'TRIP TO THE CITY':[],
    'ROAD TRIP':[],
    'CRUISE':[],
}
export const TakeHolidayContext = React.createContext(null)
export default function Context(props) {
    const [state, setState] = React.useState(initialState)
    return (
        <TakeHolidayContext.Provider value={{state,setState}}>
            {props.children}
        </TakeHolidayContext.Provider>
    )
}
