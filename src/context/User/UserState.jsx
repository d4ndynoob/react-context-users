import { useReducer } from 'react'
import UserReducer from './UserReducer'
import UserContext from './UserContext'

const UserState = (props) => {
    // Componente inicial
    const intialState = {
        users: [],
        selectedUser: null 
    }

    // Estados
    const [state, dispatch] = useReducer(UserReducer, intialState)


    // Funciones
    const getUsers = async() => {
        const resp = await fetch('https://reqres.in/api/users')
        const data = await resp.json()

        dispatch({
            type: 'GET_USERS',
            payload: data.data
        })
    }

    const getProfile = async(id) => {
        const resp = await fetch(`https://reqres.in/api/users/${id}`)
        const data = await resp.json()

        dispatch({
            type: 'GET_PROFILE',
            payload: data.data
        })
    }


    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserState