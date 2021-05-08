import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Row, Col, Button, Spinner, Card } from 'react-bootstrap';

import { users } from '../configs/config';
import PieChart from './charts/Pie';
import VerticalBar from './charts/VarticalBar';

export default function Report() {
	const [loading, setLoading] = useState(false);
	const [averageAgeOfUsers, setAverageAgeOfUsers] = useState(0);
	const [chartDataByProfession, setChartDataByProfession] = useState(null);
	const [chartDataByAgeGroup, setChartDataByAgeGroup] = useState(null);
	const [chartDataByLocation, setChartDataByLocation] = useState(null);

	const getAverageAgeRangeOfUsers = (age) => {
		if (age >= 13 && age <= 18) return '13-18';
		if (age >= 18 && age <= 25) return '18-25';
		if (age >= 25) return '25+';
	};

	const genarateRGBA = () => {
		var o = Math.round,
			r = Math.random,
			s = 255;
		return (
			'rgba(' +
			o(r() * s) +
			',' +
			o(r() * s) +
			',' +
			o(r() * s) +
			',' +
			r().toFixed(1) +
			')'
		);
	};

	useEffect(() => {
		setLoading(true);
		// setTimeout is not required here. Added just to fake an API call process
		// When we fetch data from real API this is not required
		setTimeout(() => {
			// set chart data for user count by profession
			const userByProfession = _.countBy(
				users,
				(obj) => obj.profession !== 'Employed'
			);
			const cDataByProfession = {
				labels: ['Employed', 'Student'],
				datasets: [
					{
						label: 'Participants by Profession',
						data: [userByProfession.true, userByProfession.false],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
						],
						borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
						borderWidth: 1,
					},
				],
			};
			setChartDataByProfession(cDataByProfession);

			// set average age users
			setAverageAgeOfUsers(_.meanBy(users, 'age'));

			//set chart data for users group by locality
			const groupedUserByLocality = _.countBy(users, 'locality');
			const data = {
				labels: Object.keys(groupedUserByLocality),
				datasets: [
					{
						label: '# of Participants',
						data: Object.keys(groupedUserByLocality).map(
							(locality) => groupedUserByLocality[locality]
						),
						backgroundColor: Object.keys(groupedUserByLocality).map(() =>
							genarateRGBA()
						),
						borderColor: Object.keys(groupedUserByLocality).map(() =>
							genarateRGBA()
						),
						borderWidth: 1,
					},
				],
			};
			setChartDataByLocation(data);

			//set chart data for users group by age range
			const ageGroupUsers = _.countBy(users, 'age');
			const usersGroupByAge = { '13-18': 0, '18-25': 0, '25+': 0 };
			Object.keys(ageGroupUsers).forEach((age) => {
				let groupKey = getAverageAgeRangeOfUsers(age);
				usersGroupByAge[groupKey] =
					usersGroupByAge[groupKey] + ageGroupUsers[age];
			});
			const cDataByAgeGroup = {
				labels: ['13-18', '18-25', '25+'],
				datasets: [
					{
						label: 'Participants by Age Group',
						data: [
							usersGroupByAge['13-18'],
							usersGroupByAge['18-25'],
							usersGroupByAge['25+'],
						],
						backgroundColor: [genarateRGBA(), genarateRGBA(), genarateRGBA()],
						borderColor: [genarateRGBA(), genarateRGBA(), genarateRGBA()],
						borderWidth: 1,
					},
				],
			};
			setChartDataByAgeGroup(cDataByAgeGroup);

			setLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			{!loading ? (
				<div className="col-md-12">
					<Row>
						<Col sm={3}>
							<Card>
								<Card.Header>
									<h3>Participants by Profession</h3>
								</Card.Header>
								<Card.Body>
									<PieChart data={chartDataByProfession} />
								</Card.Body>
							</Card>
						</Col>
						<Col sm={3}>
							<Card>
								<Card.Header>
									<h3>Participants by Age Group range</h3>
								</Card.Header>
								<Card.Body>
									<PieChart data={chartDataByAgeGroup} />
								</Card.Body>
							</Card>
						</Col>
						<Col sm={6}>
							<Card>
								<Card.Header>
									<h3>Participants by Locality</h3>
								</Card.Header>
								<Card.Body>
									<VerticalBar data={chartDataByLocation} />
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col sm={3}>
							<div className="smlCountCard">
								<Card>
									<Card.Header>
										<h3>Average Age of Participants</h3>
									</Card.Header>
									<Card.Body>
										<Card.Title>
											<div className="title">
												<h1>{Math.round(averageAgeOfUsers)}</h1>
											</div>
										</Card.Title>
									</Card.Body>
								</Card>
							</div>
						</Col>
						<Col sm={3}>
							<div className="smlCountCard">
								<Card>
									<Card.Header>
										<h3>Average Group Age of Participants</h3>
									</Card.Header>
									<Card.Body>
										<Card.Title>
											<div className="title">
												<h1>
													{getAverageAgeRangeOfUsers(
														Math.round(averageAgeOfUsers)
													)}
												</h1>
											</div>
										</Card.Title>
									</Card.Body>
								</Card>
							</div>
						</Col>
					</Row>
				</div>
			) : (
				<div className="centerSpinner">
					<Button variant="primary" disabled>
						<Spinner
							as="span"
							animation="border"
							size="sm"
							role="status"
							aria-hidden="true"
						/>
						<span className="sr-only">Loading Charts...</span>
					</Button>{' '}
				</div>
			)}
		</>
	);
}
