import { useNavigate } from 'react-router-dom'
import note from '../assets/note_list.svg'

export function Home() {
	const navigate = useNavigate()
	const handleClick = () => navigate('/tasks')
	return (
		<>
			<div className="home">
				<img src={note} alt={note} />
				<h1>Take notes easily</h1>
				<button onClick={handleClick}>Get started</button>
			</div>
		</>
	)
}
