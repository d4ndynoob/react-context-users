import { useContext } from 'react';
import UserContext from '../context/User/UserContext'

const Profile = () => {
  const { selectedUser } = useContext(UserContext)
  return (
    <div className='w-full flex justify-center order-1 md:order-2'>
      {selectedUser ? (<div className='bg-white/10 hover:bg-white/40 w-min h-fit rounded-md p-8 flex flex-col justify-evenly items-center text-slate-100 shadow-2xl transition-transform duration-200 hover:scale-105 cursor-pointer'>
        <img src={selectedUser.avatar} className='rounded-full' width='130'/>
        <div className='flex flex-col items-center'>
          <h1 className='text-lg font-semibold'>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
          <h3>{selectedUser.email}</h3>
        </div>
      </div>) : (<h1 className='text-2xl sm:text-3xl md:text-4xl text-slate-100 italic font-medium mt-8'>No se ha seleccionado {<br/>}ningún usuario</h1>)}
    </div>
  )
}

export default Profile