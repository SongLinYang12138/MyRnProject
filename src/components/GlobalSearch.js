//导入组件依赖
import React, { Component } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "./CustomIcons";
import Touch from "./Touch";

//定义组件
export default class GlobalSearch extends Component {
  //组件默认属性
  static defaultProps = {
    onSearch: function(value) {},
    onScanning: function() {}
  };

  //组件构造函数
  constructor(props) {
    super(props);

    //组件数据状态
    this.state = {
      value: ""
    };
  }

  //组件结构输出
  render() {
    let viewHeiht = this.props.viewHeight ? this.props.viewHeight : 40;
    return (
      <View style={{ height: viewHeiht, margin: 10 }}>
        <View style={styles.container}>
          <View style={{ marginLeft: 10 }}>
            <Touch myPress={() => this.props.onSearch(this.state.value)}>
              <FontAwesome name="search" size={16} color="#ccc" />
            </Touch>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              {...this.props}
              style={styles.inputStyle}
              returnKeyType={"search"}
              selectTextOnFocus={true}
              clearButtonMode={"while-editing"}
              onChangeText={value => this.setState({ value })}
              onSubmitEditing={() => this.props.onSearch(this.state.value)}
              ref="refTextBox"
              underlineColorAndroid="transparent"
            />
          </View>
          <Touch
            myPress={() => this.props.onScanning()}
            style={{ marginRight: 10 }}
          >
            <Icon name="icon-saoma1" size={16} color="#999" />
          </Touch>
        </View>
      </View>
    );
  }
}

//定义组件样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 3,
    alignItems: "center"
  },
  inputContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  inputStyle: {
    padding: 0,
    margin: 0,
    borderWidth: 0,
    fontSize: 14
  }
});
