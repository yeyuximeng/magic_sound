import Taro, { Component } from '@tarojs/taro'
import {View} from "@tarojs/components"
export default class NewsContent extends Component{
	goBack(e) {
		console.log(e);
		Taro.redirectTo(
				{
					url: '/pages/index/index'
				}
		)

	}
	render() {
		return (
				<View >
					<View className='mm-news-details-back mm-icon-back' onClick={this.goBack.bind(this)}/>
				</View>
		)
	}
}
