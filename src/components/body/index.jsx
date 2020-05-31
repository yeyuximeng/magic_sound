import Taro, { Component } from '@tarojs/taro'
import { ScrollView } from '@tarojs/components'

import NewItem from '../new_item'

import './index.less'

const newsList = [
	{
		id: 1,
		title: '不再相遇，就此别过',
		account: '中国知网',
		account_type: 'group',
		comment_count: 23,
		publish_time: '3天前',
		src: require('../../assets/images/1.jpg'),
	},
	{
		id: 2,
		title: '不再相遇，就此别过不再相遇，就此别过不再相遇，就此别过不再相遇，就此别过不再相遇，就此别过',
		account: '中国知网',
		account_type: 'group',
		comment_count: 23,
		publish_time: '3天前',
		src: require('../../assets/images/2.jpg'),
	},
	{
		id: 3,
		title: '不再相遇，就此别过',
		account: '中国知网',
		account_type: 'group',
		comment_count: 23,
		publish_time: '3天前',
		src: require('../../assets/images/3.jpg'),
	},
	{
		id: 4,
		title: '不再相遇，就此别过',
		account: '中国知网',
		account_type: 'group',
		comment_count: 23,
		publish_time: '3天前',
		src: require('../../assets/images/3.jpg'),
	},
	{
		id: 5,
		title: '不再相遇，就此别过',
		account: '中国知网',
		account_type: 'group',
		comment_count: 23,
		publish_time: '3天前',
		src: require('../../assets/images/3.jpg'),
	},
	{
		id: 6,
		title: '不再相遇，就此别过',
		account: '中国知网',
		account_type: 'group',
		comment_count: 23,
		publish_time: '3天前',
		src: require('../../assets/images/3.jpg'),
	},
]

export default class extends Component{
	constructor() {
		super();
		this.state = {
			newsList: newsList
		}
	}
	handleNewItemClick(item) {
		console.log(item);
		Taro.redirectTo({
			url: `/pages/new_details/index?id=${item.id}`
		})
	}
	handleCloseItem(item) {
		const { newsList } = this.state;
		const index = newsList.findIndex(i => i.id === item.id);
		if(index >= 0) {
			newsList.splice(index, 1)
		}
		this.setState(({newsList}) => newsList)
	}
	render() {
		const { newsList } = this.state
		return (
				<ScrollView className='mm-body__vertical_scroll'>
					{
						newsList.map((item) => (
								<NewItem
										data={item}
										handleNewItemClick={this.handleNewItemClick.bind(this)}
										handleCloseItem={this.handleCloseItem.bind(this)}
								/>
						))
					}
				</ScrollView>
		)
	}
}
