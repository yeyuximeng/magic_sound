import { Component } from '@tarojs/taro'
import {View, Text, Image} from '@tarojs/components'

import './index.less'

export default class NewItem extends Component {
	constructor(props) {
		super(props);
	}
	handleNewItemClick(e, item) {
		e.nativeEvent.stopImmediatePropagation();
		this.props.handleNewItemClick(item);
	}
	handleCloseItem(e, item) {
		e.nativeEvent.stopImmediatePropagation();
		this.props.handleCloseItem(item);
	}
	render() {
		const {data} = this.props
		return (
				<View className='mm-new-item__wrap' onClick={(e) => this.handleNewItemClick(e, data)}>
					<View className='mm-new-item__left'>
						<Text className='mm-new-item__title'>{data.title}</Text>
						<View className='mm-new-item__info__wrap'>
							<View className='mm-new-item__info'>
								<Text className='mm-new-item__info-item'>{data.account}</Text>
								<Text className='mm-new-item__info-item'>{data.comment_count}评论</Text>
								<Text className='mm-new-item__info-item'>{data.publish_time}</Text>
							</View>
							<View className='mm-new-item__close mm-icon-close' onClick={(e) => this.handleCloseItem(e, data)}/>
						</View>
					</View>
					<View className='mm-new-item__right'>
						<Image mode='center' className='mm-new-item__image' src={data.src}/>
					</View>
				</View>
		)
	}
}
