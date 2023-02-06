import {useState} from 'react'
import styles from '@/styles/Home.module.css'
import TodoList from '../components/TodoList'
import AddList from '../components/AddList'


export interface IState{
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]
}

export default function Home(): JSX.Element {

  const [people, setPeople] = useState<IState['people']>([])

  return (
    <div>
      <div className={styles.App}>
        <h1>People invited to my party</h1>
      </div>
      <TodoList people={people}/>
        <AddList people={people} setPeople={setPeople} />
    </div>
  )
}
