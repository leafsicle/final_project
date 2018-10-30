import React, { Component } from 'react'
import Header from './Header'
import './App.css'

class App extends Component {
	render() {
		return (
			<div class="container">
				<Header />
				{/* this will be the main area for the app. see drawing 1 in notebook for now. */}
				{/* I needed to add code for my commit */}
				{/* On the main page I will have the overall difference,
          the income, and the expenses. The bills will be low as roughly follows*/}
				<body>
					<section class="section">
						<div class="container">
							<h1 class="title">Hello World</h1>
							<p class="subtitle" />
						</div>
					</section>
				</body>
				{/* <div class="main">
					<p class="diff">+/- $XXX</p>
					<p class="income">$xxx</p>
					<p class="expenses">$xxx</p>
				</div> */}
				{/* In this section tall of the bills and 
      income will be listed with income on top and expenses 
      listed below */}
				<table />
			</div>
		)
	}
}

export default App
