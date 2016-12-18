import React from 'react'
import { connect } from 'react-redux'
//bring data from sql div in a list 

const Data = props => {

//rough .. how do i map over sql data with multiple columns ?
	return (
		<div className="data">
			{props.data.map((d, i) =>
			<thead>
	            <tr>
	                <th>Name</th>
	                <th>Position</th>
	                <th>Office</th>
	                <th>Age</th>
	                <th>Start date</th>
	                <th>Salary</th>
	            </tr>
       		</thead>
				)}


		</div>

		)


}