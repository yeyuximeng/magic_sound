import { Component } from '@tarojs/taro'
import {ScrollView, RichText} from "@tarojs/components"
export default class NewsContent extends Component{
	state = {
		nodes: [{
			name: 'div',
			attrs: {
				class: 'div_class',
				style: 'line-height: 60px; color: orange;'
			},
			children: [{
				type: 'text',
				text: 'Hello World!'
			}]
		}]
	}
	render() {
		return (
				<ScrollView>
					<RichText nodes={this.state.nodes} />
				</ScrollView>
		)
	}
}
