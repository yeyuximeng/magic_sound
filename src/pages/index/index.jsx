import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'
import '../../assets/icons/iconfont.css'

import Header from '../../components/header'
import Menu from '../../components/menu'
import Body from '../../components/body'
import Tabs from '../../components/tabs'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Header />
        <Menu />
        <Body />
        <Tabs />
      </View>
    )
  }
}
