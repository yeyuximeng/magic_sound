import { Component } from '@tarojs/taro'
import {View, Text} from '@tarojs/components'

import './index.less'

const tabs = [
	{
		id: 1,
		text: '首页',
		icon: 'mm-icon-home',
		isActive: true,
	},
	{
		id: 2,
		text: '西瓜视频',
		icon: 'mm-icon-video',
		isActive: false,
	},
	{
		id: 3,
		text: '热榜',
		icon: 'mm-icon-hots',
		isActive: false,
	},
	{
		id: 4,
		text: '放映厅',
		icon: 'mm-icon-moving',
		isActive: false,
	},
	{
		id: 5,
		text: '我的',
		icon: 'mm-icon-mine',
		isActive: false,
	},
];

export default class extends Component{
	constructor() {
		super();
		this.state = {
			tabs: tabs,
		}
	}
	handleTabClick (curTab) {
		const switchTabStyle = () => {
			this.setState(({tabs}) => tabs.map((tab) => Object.assign(tab, {isActive: curTab.id === tab.id})));
		}
		switchTabStyle();
	}
	render() {
		return (
				<View className='mm-tabs'>
					{
						tabs.map((tab) => (
								<View
										className={`mm-tabs__tab ${tab.isActive ? 'active' : 'un-active'}`}
										onClick={this.handleTabClick.bind(this, tab)}
								>
									<View className={`mm-tabs__tab-icon ${tab.icon}`}/>
									<Text className='mm-tabs__tab-text'>{tab.text}</Text>
								</View>
						))
					}
				</View>
		);
	}
}
