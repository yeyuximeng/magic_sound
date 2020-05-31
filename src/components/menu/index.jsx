import {Component} from '@tarojs/taro'
import { View, Text } from "@tarojs/components";

import './index.less'

const menus = [
	{
		id: 1,
		name: '关注',
		isActive: false,
	},
	{
		id: 2,
		name: '推荐',
		isActive: true,
	},
	{
		id: 3,
		name: '视频',
		isActive: false,
	},
	{
		id: 4,
		name: '科技',
		isActive: false,
	},
	{
		id: 5,
		name: '星座',
		isActive: false,
	},
	{
		id: 6,
		name: '情感',
		isActive: false,
	},
	{
		id: 7,
		name: '科普',
		isActive: false,
	},
	{
		id: 8,
		name: '科学',
		isActive: false,
	},
];

export default class Menu extends Component {
	constructor() {
		super();
		this.state = {
			menus: menus,
		}
	}
	handleMenuSwitch(curMenu) {
		this.setState(({menus}) => {
			return menus.map((menu) => Object.assign(menu, {isActive: menu.id === curMenu.id}));
		})
	}
	render() {
		const {menus} = this.state
		return (
				<View className='mm-menu-wrap'>
					<View className='mm-menu-scroll'>
						{menus.map((menu) => {
							return (
									<View
											className={`mm-menu__item ${menu.isActive ? 'mm-menu__active' : 'mm-menu__un-active'}`}
											onClick={this.handleMenuSwitch.bind(this, menu)}
									>
										<Text className='mm-menu__item-text'>{menu.name}</Text>
									</View>
							)
						})}
					</View>
					<View className='mm-menu-editor__button'>
						<Text className='mm-icon-menu mm-menu-editor-icon'></Text>
					</View>
				</View>
		)
	}
}
