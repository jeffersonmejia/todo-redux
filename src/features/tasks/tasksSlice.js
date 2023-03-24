import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{
		id: '1',
		title: 'Make weather project',
		description: 'React & nodejs',
		completed: false,
	},
	{
		id: '2',
		title: 'Study typescript',
		description: 'Skills improve',
		completed: false,
	},
	{
		id: '3',
		title: 'Read "The boy with the striped pajamas"',
		description: 'React & nodejs',
		completed: false,
	},
	{
		id: '4',
		title: '30 mins of mindfulness',
		description: 'Mental heathl',
		completed: false,
	},
]

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.push(action.payload)
		},
		editTask: (state, action) => {
			const { id, title, description } = action.payload
			const foundTask = state.find((task) => task.id === id)
			if (foundTask) {
				foundTask.title = title
				foundTask.description = description
			}
		},
		deleteTask: (state, action) => {
			const taskFound = state.find((task) => task.id === action.payload)
			if (taskFound) {
				state.splice(state.indexOf(taskFound), 1)
			}
		},
	},
})

export const { addTask, editTask, deleteTask } = tasksSlice.actions
export default tasksSlice.reducer
