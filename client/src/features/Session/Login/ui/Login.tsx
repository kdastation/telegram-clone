import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useLogin } from '../api/useLogin'

export const Login = () => {
  const navigate = useNavigate()

  const { mutateAsync: login } = useLogin()

  const [email, setEmail] = useState<string>('')

  const handleLogin = async () => {
    try {
      await login({ email })
      navigate('/')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleLogin}>login</button>
    </div>
  )
}
