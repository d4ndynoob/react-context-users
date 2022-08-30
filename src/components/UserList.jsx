import { useEffect, useContext } from 'react';
import UserContext from '../context/User/UserContext';

const UserList = () => {

    const { users, getUsers, getProfile } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, []);

    return(
        <div className='w-full flex flex-col justify-center gap-y-6 order-2 md:order-1'>
            {
                users.map(user => (
                    <a href='#!' key={user.id} className='w-4/5 bg-white/10 hover:bg-white/40 flex justify-evenly items-center mx-auto px-3 py-4 rounded-xl text-slate-100 shadow-md hover:scale-105 transition-transform duration-200 hover:shadow-2xl outline-slate-100/5 outline-1' onClick={() => getProfile(user.id)}>
                        <img src={user.avatar} className='rounded-full' width='70'/>
                        <p className='font-semibold'>{`${user.first_name} ${user.last_name}`}</p>
                    </a>
                ))
            }
        </div>
    )
}

export default UserList