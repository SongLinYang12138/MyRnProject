/**
 * @FileName: FilterBar.js
 * @Version: 0.0.1
 * @Author: wuzhibo
 * @Date: 2017.09.22
 * @Description: 筛选过滤条-组件
 *
 * 属性：
 *   height - 组件高度，默认为40
 *   data - 组件数据，数组，示例：[{ name: '', items: [{ text: 'a', value: 0 }, { text: 'b', value: 1 }], selectedIndex }, ...]
 *
 */

//导入组件依赖
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CommonUtil } from "../utils/CommonUtil";

export default class FilterBar extends Component {
  //默认属性
  static defaultProps = {
    data: [],
    height: 40,
    onItemPress: function() {}
  };

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data.concat(),
      activeIndex: -1,
      activeItem: null
    };
  }

  _onItemPress(item, index, filterItem, filterItemIndex) {
    var data = this.state.data;
    data[filterItemIndex].selectedIndex = index;
    this.setState({
      data: data,
      activeIndex: -1,
      activeItem: null
    });
    this.props.onItemPress(item, index, filterItem, filterItemIndex);
  }

  _setActive(index, item, isActive) {
    if (isActive) {
      this.setState({
        activeIndex: -1,
        activeItem: null
      });
    } else {
      this.setState({
        activeIndex: index,
        activeItem: item
      });
    }
  }

  _renderFilterItems(filterItem, dropDownHeight) {
    var self = this;
    var selectedIndex = filterItem.selectedIndex || 0;

    if (dropDownHeight > 500) dropDownHeight = CommonUtil.getScreenH() - 150;

    return (
      <View style={{ width: "100%", height: dropDownHeight }}>
        <ScrollView
          style={{ width: "100%" }}
          scrollEnabled={true}
          horizontal={false}
        >
          {filterItem.items.map(function(item, index) {
            var selected = selectedIndex === index;
            return (
              <TouchableOpacity
                key={index}
                style={{ flex: 1 }}
                onPress={() =>
                  self._onItemPress(
                    item,
                    index,
                    filterItem,
                    self.state.activeIndex
                  )
                }
              >
                <View
                  style={[styles.itemContainer, { height: self.props.height }]}
                >
                  <View style={styles.itemTextContainer}>
                    <Text
                      style={
                        selected
                          ? styles.selectedItemTextStyle
                          : styles.itemTextStyle
                      }
                    >
                      {filterItem.name == "今天" && index == 3
                        ? "自定义时间"
                        : item.text}
                    </Text>
                  </View>

                  {selected ? (
                    <View style={styles.itemIconContainer}>
                      <FontAwesome
                        name="check"
                        size={12}
                        color="#f49826"
                        style={styles.itemIconStyle}
                      />
                    </View>
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  _renderDropDown() {
    var self = this;
    if (self.state.activeItem) {
      const dropDownHeight =
        self.state.activeItem.items.length * self.props.height;
      return (
        <View
          style={[
            styles.dropDownContainer,
            {
              top: self.props.height,
              height: dropDownHeight
            }
          ]}
        >
          {self._renderFilterItems(self.state.activeItem, dropDownHeight)}
        </View>
      );
    }
    return null;
  }

  _renderFilters() {
    var self = this;
    return this.state.data.map(function(item, index) {
      var isActive = index === self.state.activeIndex;
      var selectedIndex = item.selectedIndex || 0;
      var selectedText = item.items[selectedIndex].text;
      return (
        <TouchableOpacity
          key={index}
          onPress={() => self._setActive(index, item, isActive)}
          style={{ flex: 1 }}
        >
          <View style={styles.filterContainer}>
            <View style={styles.filterTextContainer}>
              <Text
                style={
                  isActive
                    ? styles.selectedFilterTextStyle
                    : styles.filterTextStyle
                }
              >
                {selectedText}
              </Text>
            </View>

            <View style={styles.filterIconContainer}>
              <FontAwesome
                name={isActive ? "caret-down" : "caret-left"}
                size={16}
                color={isActive ? "#f49826" : "#ccc"}
                style={styles.filterIconStyle}
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <View style={[styles.container, { height: this.props.height }]}>
        <View style={styles.barContainer}>{this._renderFilters()}</View>

        {this._renderDropDown()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%"
  },
  barContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#f0eff4"
  },

  filterContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },

  filterTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  filterTextStyle: {
    color: "#333"
  },

  selectedFilterTextStyle: {
    color: "#f49826"
  },

  filterIconContainer: {
    width: 20,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  filterIconStyle: {
    marginRight: 10
  },

  dropDownContainer: {
    position: "absolute",
    left: 0,
    width: "100%",
    backgroundColor: "#ffc",
    flex: 1,
    flexDirection: "column",
    zIndex: 999
  },

  itemContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },

  itemTextContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10
  },

  itemTextStyle: {
    color: "#333"
  },

  selectedItemTextStyle: {
    color: "#f49826"
  },

  itemIconContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  itemIconStyle: {
    marginRight: 10
  }
});
