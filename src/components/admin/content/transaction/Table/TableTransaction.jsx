import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import style from '../Style/styles.module.css';
import { Tabs, List, Avatar, Button, message, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import reqwest from 'reqwest';
const { TabPane } = Tabs;
const fakeDataUrl =
	'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
function TableTransaction() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [hasMore, setHasMore] = useState(true);
	const fetchData = (callback) => {
		reqwest({
			url: fakeDataUrl,
			type: 'json',
			method: 'get',
			contentType: 'application/json',
			success: (res) => {
				callback(res);
			},
		});
	};
	const handleInfiniteOnLoad = () => {
		setLoading(true);
		if (data.length > 14) {
			message.warning('Infinite List loaded all');
			setHasMore(false);
			setLoading(false);
			return;
		}
		fetchData((res) => {
			const dataNew = data.concat(res.results);
			setData(dataNew);
			setLoading(false);
		});
	};
	useEffect(() => {
		fetchData((res) => {
			setData(res.results);
		});
	},[]);
	return (
		<div className={style.purchase_list_page__tabs_container}>
			<div className={style.card_container}>
				<Tabs type="card" className={style.tab_ant}>
					<TabPane tab="Tất cả" key="1" className={style.panel}>
						<div className={style.panel_item}>
							<InfiniteScroll
								initialLoad={false}
								pageStart={0}
								loadMore={() => handleInfiniteOnLoad}
								hasMore={!loading.loading && hasMore.hasMore}
								useWindow={false}
							>
								<List
									header={<div className={style.header_panel_item}>ĐƠN HÀNG SỐ 1</div>}
									footer={
										<div className={style.footer_panel_item}>
											<div className={style.item_panel_item}>
												<div style={{ marginRight: '15px' }}>
													<b>Tổng tiền đơn hàng :</b>
												</div>
												<div style={{ color: 'red' }}>100.000 VNĐ</div>
											</div>
											<div>
												<Button style={{ marginRight: '25px' }}>Xem chi tiết</Button>
											</div>
										</div>
									}
									itemLayout="horizontal"
									dataSource={data}
									renderItem={(item) => (
										<List.Item
											actions={[
												<div style={{ display: 'flex' }}>
													<div style={{ width: 200 }}>
														<div>
															<b>Giá 1 sản phẩm :</b> 100.000 VNĐ
														</div>
													</div>
													<div style={{ width: 150 }}>
														<div>
															<b>Số lượng :</b> 2
														</div>
													</div>
													<div style={{ width: 200 }}>
														<div>
															<b>Tổng tiền :</b> 100.000 VNĐ
														</div>
													</div>
													<div style={{ width: 200 }}>
														<div>
															<b>Trạng thái :</b> Chờ lấy hàng
														</div>
													</div>
												</div>,
											]}
										>
											<List.Item.Meta
												avatar={
													<Avatar
														src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
														style={{ width: '50px', height: '50px' }}
													/>
												}
												title={
													<div style={{ paddingTop: '15px', fontSize: '16px' }}>
														{item.name.last}
													</div>
												}
											/>
										</List.Item>
									)}
								>
									{loading.loading && hasMore.hasMore && (
										<div className="demo-loading-container">
											<Spin />
										</div>
									)}
								</List>
							</InfiniteScroll>
						</div>
						<div className={style.panel_item}>
							<InfiniteScroll
								initialLoad={false}
								pageStart={0}
								loadMore={() => handleInfiniteOnLoad}
								hasMore={!loading.loading && hasMore.hasMore}
								useWindow={false}
							>
								<List
									header={<div className={style.header_panel_item}>ĐƠN HÀNG SỐ 2</div>}
									footer={
										<div className={style.footer_panel_item}>
											<div className={style.item_panel_item}>
												<div style={{ marginRight: '15px' }}>
													<b>Tổng tiền đơn hàng :</b>
												</div>
												<div style={{ color: 'red' }}>100.000 VNĐ</div>
											</div>
											<div>
												<Button style={{ marginRight: '25px' }}>Xem chi tiết</Button>
											</div>
										</div>
									}
									itemLayout="horizontal"
									dataSource={data}
									renderItem={(item) => (
										<List.Item
											actions={[
												<div style={{ display: 'flex' }}>
													<div style={{ width: 200 }}>
														<div>
															<b>Giá 1 sản phẩm :</b> 100.000 VNĐ
														</div>
													</div>
													<div style={{ width: 150 }}>
														<div>
															<b>Số lượng :</b> 2
														</div>
													</div>
													<div style={{ width: 200 }}>
														<div>
															<b>Tổng tiền :</b> 100.000 VNĐ
														</div>
													</div>
													<div style={{ width: 200 }}>
														<div>
															<b>Trạng thái :</b> Chờ lấy hàng
														</div>
													</div>
												</div>,
											]}
										>
											<List.Item.Meta
												avatar={
													<Avatar
														src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
														style={{ width: '50px', height: '50px' }}
													/>
												}
												title={
													<div style={{ paddingTop: '15px', fontSize: '16px' }}>
														{item.name.last}
													</div>
												}
											/>
										</List.Item>
									)}
								>
									{loading.loading && hasMore.hasMore && (
										<div className="demo-loading-container">
											<Spin />
										</div>
									)}
								</List>
							</InfiniteScroll>
						</div>
					</TabPane>
					<TabPane tab="Chờ xác nhận" key="2">
						<div className={style.panel_item}>
							<InfiniteScroll
								initialLoad={false}
								pageStart={0}
								loadMore={() => handleInfiniteOnLoad}
								hasMore={!loading.loading && hasMore.hasMore}
								useWindow={false}
							>
								<List
									header={<div className={style.header_panel_item}>ĐƠN HÀNG SỐ 1</div>}
									footer={
										<div className={style.footer_panel_item}>
											<div className={style.item_panel_item}>
												<div style={{ marginRight: '15px' }}>
													<b>Tổng tiền đơn hàng :</b>
												</div>
												<div style={{ color: 'red' }}>100.000 VNĐ</div>
											</div>
											<div>
												<Button style={{ marginRight: '25px' }}>Xác nhận đơn hàng</Button>
											</div>
										</div>
									}
									itemLayout="horizontal"
									dataSource={data}
									renderItem={(item) => (
										<List.Item
											actions={[
												<div style={{ display: 'flex' }}>
													<div style={{ width: 200 }}>
														<div>
															<b>Giá 1 sản phẩm :</b> 100.000 VNĐ
														</div>
													</div>
													<div style={{ width: 150 }}>
														<div>
															<b>Số lượng :</b> 2
														</div>
													</div>
													<div style={{ width: 200 }}>
														<div>
															<b>Tổng tiền :</b> 100.000 VNĐ
														</div>
													</div>
													<div style={{ width: 200 }}>
														<div>
															<b>Trạng thái :</b> Chờ xác nhận
														</div>
													</div>
												</div>,
											]}
										>
											<List.Item.Meta
												avatar={
													<Avatar
														src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
														style={{ width: '50px', height: '50px' }}
													/>
												}
												title={
													<div style={{ paddingTop: '15px', fontSize: '16px' }}>
														{item.name.last}
													</div>
												}
											/>
										</List.Item>
									)}
								>
									{loading.loading && hasMore.hasMore && (
										<div className="demo-loading-container">
											<Spin />
										</div>
									)}
								</List>
							</InfiniteScroll>
						</div>
					</TabPane>
					<TabPane tab="Chờ lấy hàng" key="3">
						<div className={style.panel_item}>
							<InfiniteScroll
								initialLoad={false}
								pageStart={0}
								loadMore={() => handleInfiniteOnLoad}
								hasMore={!loading.loading && hasMore.hasMore}
								useWindow={false}
							>
								<List
									header={<div className={style.header_panel_item}>ĐƠN HÀNG SỐ 1</div>}
									footer={
										<div className={style.footer_panel_item}>
											<div className={style.item_panel_item}>
												<div style={{ marginRight: '15px' }}>
													<b>Tổng tiền đơn hàng :</b>
												</div>
												<div style={{ color: 'red' }}>100.000 VNĐ</div>
											</div>
											<div>
												<Button style={{ marginRight: '25px' }}>Xác nhận gửi hàng</Button>
											</div>
										</div>
									}
									itemLayout="horizontal"
									dataSource={data}
									renderItem={(item) => (
										<List.Item
											actions={[
												<div style={{ display: 'flex' }}>
													<div style={{ width: 200 }}>
														<div>
															<b>Giá 1 sản phẩm :</b> 100.000 VNĐ
														</div>
													</div>
													<div style={{ width: 150 }}>
														<div>
															<b>Số lượng :</b> 2
														</div>
													</div>
													<div style={{ width: 200 }}>
														<div>
															<b>Tổng tiền :</b> 100.000 VNĐ
														</div>
													</div>
													<div style={{ width: 200 }}>
														<div>
															<b>Trạng thái :</b> Đang giao
														</div>
													</div>
												</div>,
											]}
										>
											<List.Item.Meta
												avatar={
													<Avatar
														src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
														style={{ width: '50px', height: '50px' }}
													/>
												}
												title={
													<div style={{ paddingTop: '15px', fontSize: '16px' }}>
														{item.name.last}
													</div>
												}
											/>
										</List.Item>
									)}
								>
									{loading.loading && hasMore.hasMore && (
										<div className="demo-loading-container">
											<Spin />
										</div>
									)}
								</List>
							</InfiniteScroll>
						</div>
					</TabPane>
					<TabPane tab="Đang giao" key="4">
						<div className={style.panel_item}>
							<InfiniteScroll
								initialLoad={false}
								pageStart={0}
								loadMore={() => handleInfiniteOnLoad}
								hasMore={!loading.loading && hasMore.hasMore}
								useWindow={false}
							>
								<List
									header={<div className={style.header_panel_item}>ĐƠN HÀNG SỐ 1</div>}
									footer={
										<div className={style.footer_panel_item}>
											<div className={style.item_panel_item}>
												<div style={{ marginRight: '15px' }}>
													<b>Tổng tiền đơn hàng :</b>
												</div>
												<div style={{ color: 'red' }}>100.000 VNĐ</div>
											</div>
											<div>
												<Button style={{ marginRight: '25px' }}>Xác nhận đã giao hàng thành công</Button>
											</div>
										</div>
									}
									itemLayout="horizontal"
									dataSource={data}
									renderItem={(item) => (
										<List.Item
											actions={[
												<div style={{ display: 'flex' }}>
													<div style={{ width: 200 }}>
														<div>
															<b>Giá 1 sản phẩm :</b> 100.000 VNĐ
														</div>
													</div>
													<div style={{ width: 150 }}>
														<div>
															<b>Số lượng :</b> 2
														</div>
													</div>
													<div style={{ width: 200 }}>
														<div>
															<b>Tổng tiền :</b> 100.000 VNĐ
														</div>
													</div>
													<div style={{ width: 200 }}>
														<div>
															<b>Trạng thái :</b> Đã giao
														</div>
													</div>
												</div>,
											]}
										>
											<List.Item.Meta
												avatar={
													<Avatar
														src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
														style={{ width: '50px', height: '50px' }}
													/>
												}
												title={
													<div style={{ paddingTop: '15px', fontSize: '16px' }}>
														{item.name.last}
													</div>
												}
											/>
										</List.Item>
									)}
								>
									{loading.loading && hasMore.hasMore && (
										<div className="demo-loading-container">
											<Spin />
										</div>
									)}
								</List>
							</InfiniteScroll>
						</div>
					</TabPane>
					<TabPane tab="Đã giao" key="5">
						<div className={style.panel_item}>
							<InfiniteScroll
								initialLoad={false}
								pageStart={0}
								loadMore={() => handleInfiniteOnLoad}
								hasMore={!loading.loading && hasMore.hasMore}
								useWindow={false}
							>
								<List
									header={<div className={style.header_panel_item}>ĐƠN HÀNG SỐ 1</div>}
									footer={
										<div className={style.footer_panel_item}>
											<div className={style.item_panel_item}>
												<div style={{ marginRight: '15px' }}>
													<b>Tổng tiền đơn hàng :</b>
												</div>
												<div style={{ color: 'red' }}>100.000 VNĐ</div>
											</div>

										</div>
									}
									itemLayout="horizontal"
									dataSource={data}
									renderItem={(item) => (
										<List.Item
											actions={[
												<div style={{ display: 'flex' }}>
													<div style={{ width: 200 }}>
														<div>
															<b>Giá 1 sản phẩm :</b> 100.000 VNĐ
														</div>
													</div>
													<div style={{ width: 150 }}>
														<div>
															<b>Số lượng :</b> 2
														</div>
													</div>
													<div style={{ width: 200 }}>
														<div>
															<b>Tổng tiền :</b> 100.000 VNĐ
														</div>
													</div>
													<div style={{ width: 200 }}>
														<div>
															<b>Trạng thái :</b> Đã giao
														</div>
													</div>
												</div>,
											]}
										>
											<List.Item.Meta
												avatar={
													<Avatar
														src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
														style={{ width: '50px', height: '50px' }}
													/>
												}
												title={
													<div style={{ paddingTop: '15px', fontSize: '16px' }}>
														{item.name.last}
													</div>
												}
											/>
										</List.Item>
									)}
								>
									{loading.loading && hasMore.hasMore && (
										<div className="demo-loading-container">
											<Spin />
										</div>
									)}
								</List>
							</InfiniteScroll>
						</div>
					</TabPane>
						<TabPane tab="Đã hủy" key="6">
							<div className={style.panel_item}>
								<InfiniteScroll
									initialLoad={false}
									pageStart={0}
									loadMore={() => handleInfiniteOnLoad}
									hasMore={!loading.loading && hasMore.hasMore}
									useWindow={false}
								>
									<List
										header={<div className={style.header_panel_item}>ĐƠN HÀNG SỐ 1</div>}
										footer={
											<div className={style.footer_panel_item}>
												<div className={style.item_panel_item}>
													<div style={{ marginRight: '15px' }}>
														<b>Tổng tiền đơn hàng :</b>
													</div>
													<div style={{ color: 'red' }}>100.000 VNĐ</div>
												</div>

											</div>
										}
										itemLayout="horizontal"
										dataSource={data}
										renderItem={(item) => (
											<List.Item
												actions={[
													<div style={{ display: 'flex' }}>
														<div style={{ width: 200 }}>
															<div>
																<b>Giá 1 sản phẩm :</b> 100.000 VNĐ
															</div>
														</div>
														<div style={{ width: 150 }}>
															<div>
																<b>Số lượng :</b> 2
															</div>
														</div>
														<div style={{ width: 200 }}>
															<div>
																<b>Tổng tiền :</b> 100.000 VNĐ
															</div>
														</div>
														<div style={{ width: 200 }}>
															<div>
																<b>Trạng thái :</b> Đã giao
															</div>
														</div>
													</div>,
												]}
											>
												<List.Item.Meta
													avatar={
														<Avatar
															src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
															style={{ width: '50px', height: '50px' }}
														/>
													}
													title={
														<div style={{ paddingTop: '15px', fontSize: '16px' }}>
															{item.name.last}
														</div>
													}
												/>
											</List.Item>
										)}
									>
										{loading.loading && hasMore.hasMore && (
											<div className="demo-loading-container">
												<Spin />
											</div>
										)}
									</List>
								</InfiniteScroll>
							</div>
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
}

TableTransaction.propTypes = {};

TableTransaction.defaultProps = {};

export default TableTransaction;
