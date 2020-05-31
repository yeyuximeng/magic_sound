import { Component } from '@tarojs/taro'
import {View, Text, Input} from '@tarojs/components'


import './index.less'

export default class Header extends Component{
	render() {
		const text = '发布'
		const placeholder = '搜你想看的'
		return (
				<View className='mm-header'>
					<View className='mm-header-input__wrap'>
						<View className='mm-header-search mm-icon-search' />
						<Input
								className='mm-header-input'
								type='text'
								placeholder={placeholder}
						/>
					</View>

					<View className='mm-header-publish'>
						<View className='mm-header-publish__button'>
							<View className='mm-header-publish__button_icon mm-icon-publish'/>
						</View>
						<Text className='mm-header-publish_text'>{text}</Text>
					</View>
				</View>
		)
	}
}
