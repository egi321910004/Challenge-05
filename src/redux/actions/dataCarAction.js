import axios from 'axios';

export const dataCarAction = () => {
    return async (dispatch) => {
        const { data } = await axios('https://rent-cars-api.herokuapp.com/admin/car')
        dispatch({ type: 'SET_LIST_CAR', payload: data })
    }
}
