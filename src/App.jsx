import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { TaskList } from './components/TaskList'
import { TaskForm } from './components/TaskForm'
import './App.css'

export default function App() {
	return (
		<div className="main">
			<BrowserRouter>
				<Routes>
					<Route path="/todo-redux/create" element={<TaskForm />} />
					<Route path="/todo-redux/edit/:id" element={<TaskForm />} />
					<Route path="/todo-redux/tasks" element={<TaskList />} />
					<Route path="/todo-redux/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}
