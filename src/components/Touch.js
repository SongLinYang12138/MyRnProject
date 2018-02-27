import React, { Component } from "react";
import { TouchableOpacity } from "react-native";

export default class Touch extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      isDisable: false //是否被禁用
    };
  }

  myPress = async () => {
    const { myPress } = this.props;
    myPress && myPress();
    await this.setState({ isDisable: true }); //防重复点击
    setTimeout(async () => {
      await this.setState({ isDisable: false }); //0.5秒后可点击
    }, 500);
  };

  render() {
    const { style, ...attr } = this.props;
    return (
      <TouchableOpacity
        disabled={this.state.isDisable}
        // activeOpacity={0.85}
        style={style ? style : {}}
        onPress={this.myPress}
        {...this.props}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
