import { useState } from 'react'

import { useGetDecksQuery } from '@/api/cards-api'
import { Input } from '@/components/ui/input'

import s from './decks.module.scss'

export const Decks = () => {
  const { data, isLoading, error } = useGetDecksQuery()
  const [value, setValue] = useState('')

  console.log('data', data)
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error...</div>
  }
  console.log('value')

  return (
    <div className={s.root}>
      <Input onChange={e => setValue(e.currentTarget.value)} value={value} />
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>cards</th>
            <th>last updated</th>
            <th>created by</th>
          </tr>
        </thead>
        <tbody>
          {data?.items.map(deck => {
            const updated = new Date(deck.updated).toLocaleDateString('ru-RU')

            return (
              <tr key={deck.id}>
                <td>{deck.name}</td>
                <td>{deck.cardsCount}</td>
                <td>{updated}</td>
                <td>{deck.author.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
