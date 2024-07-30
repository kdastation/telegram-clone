import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useSetUserId } from '@entities/Session'

export const Login = () => {
  const navigate = useNavigate()
  const setUserIdSession = useSetUserId()

  const [userId, setUserId] = useState<string>('')

  const handleLogin = () => {
    setUserIdSession(userId)
    navigate('/')
  }

  return (
    <div>
      <input type='text' value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button onClick={handleLogin}>login</button>
    </div>
  )
}
