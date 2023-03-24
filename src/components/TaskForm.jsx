import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, editTask } from '../features/tasks/tasksSlice'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export function TaskForm() {
	const [task, setTask] = useState(null)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const params = useParams()
	const tasks = useSelector((state) => state.tasks)
	const handleSubmit = (e) => {
		e.preventDefault()
		if (params.id) {
			dispatch(editTask(task))
		} else {
			dispatch(addTask({ ...task, id: uuid() }))
		}
		navigate('/tasks')
	}

	const handleChange = (e) => {
		setTask({ ...task, [e.target.name]: e.target.value })
	}

	useEffect(() => {
		setTask(tasks.find((task) => task.id === params.id))
	}, [])

	return (
		<form onSubmit={handleSubmit} className="task-form">
			<fieldset>
				<legend>
					<h2>Add task</h2>
				</legend>
				<input
					type="text"
					name="title"
					placeholder="Title"
					value={task && task.title}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="description"
					placeholder="Description"
					value={task && task.description}
					onChange={handleChange}
				/>
				<button>Save</button>

				<Link to="/tasks">
					<small>Cancel</small>
				</Link>
			</fieldset>
		</form>
	)
}
