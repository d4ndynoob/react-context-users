import Profile from './components/Profile'
import UserList from './components/UserList'
import UserState from './context/User/UserState';

function App() {
  return (
    <UserState>
      <div className='bg-indigo-900 h-full'>
        <main className='container mx-auto py-8'>
          <h1 className='text-6xl font-semibold text-center mb-12 text-slate-100 capitalize'>usuarios</h1>
          <div className='flex flex-col items-center gap-y-12 md:flex-row md:items-start'>
            <UserList />
            <Profile />
          </div>
        </main>
      </div>
    </UserState>
  )
}

export default App
