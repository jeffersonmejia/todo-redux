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
					<Route path="/create" element={<TaskForm />} />
					<Route path="/edit/:id" element={<TaskForm />} />
					<Route path="/tasks" element={<TaskList />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}
