
	import React from 'react'
	import ReactDOM from 'react-dom'
	import Example from './example'
	import { DndProvider } from 'react-dnd'
	import Backend from 'react-dnd-html5-backend'
  import './style.css';

	function App() {
		return (
			<div className="App">
      <h2 style={{fontFamily: 'Arial'}}>Drag and Drop Example</h2>
				<DndProvider backend={Backend}>
					<Example />
				</DndProvider>
			</div>
		)
	}

	const rootElement = document.getElementById('root')
	ReactDOM.render(<App />, rootElement)
