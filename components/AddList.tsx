import React, {useState} from 'react'
import styles from '../styles/AddList.module.css'
import {IState as Props} from '../pages/index'

interface IProps {
	setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
	people: Props['people']
}

const AddList: React.FC<IProps> = ({setPeople, people}) =>{

	const [input, setInput] = useState({
		name: '',
		age: '',
		note: '',
		img: '',
	})

	const handleChange =(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>{
		setInput({
			...input,
			[e.target.name]: e.target.value 
		})
	}

	const handleClick =(): void =>{
		if(
			!input.name ||
			!input.age ||
			!input.img 
		) {
			return 
		}
		setPeople([
			...people,
			{
				name:input.name,
				age: parseInt(input.age),
				img: input.img,
				note: input.note
			}
		])
		setInput({
			name: '',
			age: '',
			note: '',
			img: ''
		})
	}

	return(
		<div className={styles.addList}>
			<input 
			 name='name'
			 type='text'
			 placeholder='Name'
			 className={styles.addListInput}
			 value={input.name}
			 onChange={handleChange} />
			 <input 
			 name='age'
			 type='number'
			 placeholder='Age'
			 className={styles.addListInput}
			 value={input.age}
			 onChange={handleChange} />
			 <input 
			 name='img'
			 type='text'
			 placeholder='Image Url'
			 className={styles.addListInput}
			 value={input.img} 
			 onChange={handleChange} />
			 <textarea
			 name='note'
			 placeholder='Notes'
			 className={styles.addListInput}
			 value={input.note}
			 onChange={handleChange}
			 />
			 <button className={styles.addListBtn} onClick={handleClick}>Add to List</button>
		</div>
	)
}

export default AddList