import { useState } from 'react'
import { User } from '../App'

type Props = {
  users: User[]
}

export function CustomDataList ({ users }: Props) {
  const [userSelected, setUserSelected] = useState('')

  return (
    <div>
      <h2>Which user do you want to talk to? (Custom)</h2>

      <div className='users-input-wrapper'>
        <input
          className='users-input'
          type='text'
          onChange={e => setUserSelected(e.target.value)}
          value={userSelected}
        />

        <ul className='users-list'>
          {users.map(user => (
            <li
              key={user.id}
              className='users-list-item'
              onClick={() => setUserSelected(user.name)}
            >
              <img
                className='users-list-item__image'
                src={`https://picsum.photos/50?id=${user.id}`}
              />{' '}
              <span className='users-list-item__name'>{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
