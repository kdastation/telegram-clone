import { useState } from 'react'

type Props = {
  onSubmit: (message: string) => void
}

export const Form = ({ onSubmit }: Props) => {
  const [text, setText] = useState('')

  const handleSubmit = () => {
    if (text) {
      onSubmit(text)
    }
  }

  return (
    <div>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>create</button>
    </div>
  )
}
