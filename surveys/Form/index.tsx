import React, { FormEvent, useState } from 'react'
import { surveysContainer } from '../hooks/useSurveys'

const SurveyForm: React.FC = () => {
  const [name, setName] = useState('')
  const [pet, setPet] = useState('')

  const { createSurvey } = surveysContainer.useContainer()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await createSurvey({ name, pet })

    setName('')
    setPet('')
  }

  return (
    <div>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text"
            name='name'
            placeholder='Your name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="pet">Pet</label>
          <input type="text"
            name='pet'
            placeholder='Your favorite pet type'
            value={pet}
            onChange={e => setPet(e.target.value)}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default SurveyForm;