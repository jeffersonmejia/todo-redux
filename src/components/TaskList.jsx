import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/tasks/tasksSlice'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'

export function TaskList() {
	const tasks = useSelector((state) => state.tasks)
	const dispatch = useDispatch()

	const handleDelete = (id) => {
		dispatch(deleteTask(id))
	}
	return (
		<>
			<div className="tasks">
				<div className="tasks-title">
					<h1>Daily tasks · {tasks.length}</h1>
					<Link to="/create">
						<button>Create</button>
					</Link>
				</div>
				{tasks.map((task) => (
					<figure key={task.id} className="task-card">
						<div className="group-btn">
							<Link to={`/edit/${task.id}`}>
								<button>Edit</button>
							</Link>
							<button onClick={() => handleDelete(task.id)}>Delete</button>
						</div>
						<figcaption>
							<h3>{task.title}</h3>
							<small>{task.description}</small>
						</figcaption>
					</figure>
				))}
				<button className="link-home">
					<Link to="/">Home</Link>
				</button>
			</div>
			<Footer />
		</>
	)
}
