import { User } from '../App'

type Props = {
  users: User[]
}

export function NativeDataList ({ users }: Props) {
  return (
    <div>
      <h2>Which user do you want to talk to? (Native)</h2>
      <input className='users-input' type='text' list='users-list' />

      <datalist id='users-list'>
        {users.map(user => (
          <option key={user.id}>{user.name}</option>
        ))}
      </datalist>
    </div>
  )
}
