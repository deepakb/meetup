import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ data }) => (
	<>
		<Pie data={data} width={100} height={50} />
	</>
);

export default PieChart;
