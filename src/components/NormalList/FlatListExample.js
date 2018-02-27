/**
 * Created by ysl on 2017/8/24.
 *
 * 属性：
 * list 数组 renderItem 列表Item样式 numColumns 每行显示的裂数
 * itemHight item高度 ItemSeparatorComponent 分割线样式 isLoading 是否加载中
 */
import React, { Component } from "react";
import { View, FlatList, Dimensions, ActivityIndicator } from "react-native";
import ResourceStyle from "../../utils/ResourceStyle";
import PublicStyles from "../../utils/PublicStyles";

export default class FlatListExample extends Component {
  static defaultProps = {
    ItemSeparatorComponent() {
      return <View style={{ height: 6 }} />;
    },
    numColumns: 1,
    itemHight: 120,
    isLoading: false
  };

  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  _separator = () => {
    return this.props.ItemSeparatorComponent;
  };

  setMyList(myList) {
    if (myList != null) {
      this.setState({
        list: myList
      });
    }
  }

  render() {
    return <View style={{ flex: 1 }}>{this.getContent()}</View>;
  }

  getContent() {
    if (this.props.isLoading) {
      return (
        <View style={PublicStyles.activityIndicator}>
          <ActivityIndicator
            animating={true}
            size="large"
            color={ResourceStyle.orange}
          />
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <FlatList
            ItemSeparatorComponent={this._separator()} //设置item的分割线
            renderItem={this.props.renderItem} //设置item
            numColumns={this.props.numColumns} //设置每行item的个数
            getItemLayout={(data, index) =>
              //如果我们知道行高可以用此方法节省动态计算行高的开销。
              ({
                length: this.props.itemHight,
                offset: (this.props.itemHight + 2) * index,
                index
              })
            }
            data={this.props.list}
          />
        </View>
      );
    }
  }
}
