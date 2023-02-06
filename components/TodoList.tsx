import Image from "next/image";
import React from "react";
import styles from '../styles/TodoList.module.css'
import {IState as Props} from '../pages/index'

interface IProps {
	people: Props["people"]
}

const TodoList :React.FC<IProps> =({people}) =>{

	const renderList = () : JSX.Element[] =>{
		return people.map(person => {
			return(
				// eslint-disable-next-line react/jsx-key
				<li className={styles.list}>
					<div className={styles.listHeader}>
						<Image src={person.img} alt='person-img' 
						 className={styles.listImage} width={75} height={75} priority/>
						<h2>{person.name}</h2>
					</div>
					<p>{person.age} years old</p>
					<p className={styles.listNote}>{person.note}</p>
				</li>
			)
		})
	}
   return(
		<ul>
			{renderList()}
		</ul>
	 )
	
}

export default TodoList