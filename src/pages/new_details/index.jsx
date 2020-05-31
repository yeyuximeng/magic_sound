import { Component } from '@tarojs/taro'
import {ScrollView} from "@tarojs/components"

import NewsHeader from '../../components/new_details/news_header'
import NewsContent from '../../components/new_details/news_content'
import NewsFooter from '../../components/new_details/news_footer'

import './index.less'

export default class NewDetails extends Component {
	constructor() {
		super();
	}

	render() {
		const {params} = this.$router
		console.log(params);
		return (
				<ScrollView>
					<NewsHeader />
					<NewsContent />
					<NewsFooter />
				</ScrollView>
		)
	}
}
