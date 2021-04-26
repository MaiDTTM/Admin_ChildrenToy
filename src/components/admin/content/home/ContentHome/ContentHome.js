import React from 'react';
import { Calendar, Badge, Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
// import PropTypes from 'prop-types';
import { Line, Pie } from 'react-chartjs-2';
import style from './styles.module.css';
const { TabPane } = Tabs;
const data = {
	labels: [
		'01/01/2021',
		'02/01/2021',
		'03/01/2021',
		'04/01/2021',
		'05/01/2021',
		'06/01/2021',
		'07/01/2021',
	],
	//backgroundColor: ['rgba(255,0,0,1)'],
	//lineTension: 1,
	datasets: [
		{
			label: 'HSN',
			fill: false,
			borderColor: 'rgba(255, 0, 0, 0.3)',
			borderWidth: 1,
			pointRadius: 2,
			data: [65, 59, 80, 81, 56, 55, 40],
		},
		{
			label: 'CPX',
			fill: false,
			borderColor: 'rgba(0, 255, 0, 0.3)',
			borderWidth: 1,
			pointRadius: 2,
			data: [70, 32, 45, 65, 87, 92, 99],
		},
		{
			label: 'Total',
			fill: false,
			borderColor: 'blue',
			borderWidth: 2,
			pointRadius: 2,
			data: [135, 91, 125, 144, 143, 143, 139],
		},
	],
};
var options = {
	legend: {
		position: 'right',
		labels: {
			boxWidth: 10,
		},
	},
	scales: {
		xAxes: [
			{
				ticks: { display: false },
			},
		],
	},
};
const pieData = {
	labels: ['Lượt truy cập', 'Đơn hàng', 'Doanh thu'],
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: ['rgba(255,0,0, 1)', '#36A2EB', '#FFCE56'],
		},
	],
};
function ContentHome() {
	function getListData(value) {
		let listData;
		switch (value.date()) {
			case 8:
				listData = [
					{ type: 'warning', content: 'This is warning event.' },
					{ type: 'success', content: 'This is usual event.' },
				];
				break;
			case 10:
				listData = [
					{ type: 'warning', content: 'This is warning event.' },
					{ type: 'success', content: 'This is usual event.' },
					{ type: 'error', content: 'This is error event.' },
				];
				break;
			case 15:
				listData = [
					{ type: 'warning', content: 'This is warning event' },
					{ type: 'success', content: 'This is very long usual event。。....' },
					{ type: 'error', content: 'This is error event 1.' },
					{ type: 'error', content: 'This is error event 2.' },
					{ type: 'error', content: 'This is error event 3.' },
					{ type: 'error', content: 'This is error event 4.' },
				];
				break;
			default:
		}
		return listData || [];
	}
	function dateCellRender(value) {
		const listData = getListData(value);
		return (
			<ul className="events">
				{listData.map((item) => (
					<li key={item.content}>
						<Badge status={item.type} text={item.content} />
					</li>
				))}
			</ul>
		);
	}
	function getMonthData(value) {
		if (value.month() === 8) {
			return 1394;
		}
	}
	function monthCellRender(value) {
		const num = getMonthData(value);
		return num ? (
			<div className="notes-month">
				<section>{num}</section>
				<span>Backlog number</span>
			</div>
		) : null;
	}
	return (
		<div className={style.app_main}>
			<Tabs defaultActiveKey="1">
				<TabPane
					tab={
						<span>
							<AppleOutlined />
							Biểu đồ
						</span>
					}
					key="1"
				>
					<div className={style.app_header}>
						<div className={style.app_main_item} style={{ marginLeft: '50px' }}>
							<Line data={data} options={options} />
						</div>
						<div
							className={style.app_main_item}
							style={{ width: '500px', marginLeft: '150px' }}
						>
							<Pie data={pieData} options={options} />
						</div>
					</div>
				</TabPane>
				<TabPane
					tab={
						<span>
							<AndroidOutlined />
							Lịch
						</span>
					}
					key="2"
				>
					<div className={style.lich}>
						<Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
					</div>
				</TabPane>
			</Tabs>
		</div>
	);
}

ContentHome.propTypes = {};

ContentHome.defaultProps = {};

export default ContentHome;
