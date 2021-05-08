import React from 'react';
import { Bar } from 'react-chartjs-2';

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true,
				},
			},
		],
	},
};

const VerticalBar = ({ data }) => (
	<>
		<Bar data={data} options={options} />
	</>
);

export default VerticalBar;
