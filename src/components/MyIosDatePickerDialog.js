/**
 * Created by ysl on 2017/11/13.
 * 下拉菜单的ios时间选择器显示
 *
 * 属性：
 * myVisible:选择时候显示ios时间选择器
 * onStartChange(start)返回开始时间
 */

import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Modal,
  DatePickerIOS,
  DatePickerAndroid,
  Platform
} from "react-native";
import ResourceStyle from "../utils/ResourceStyle";
import Touch from "../components/Touch";

const { width, height } = Dimensions.get("window");
const isIOS = Platform.OS === "ios";

export class MyIosDatePickerDialog extends Component {
  static defaultProps = {
    myVisible: false,
    date: new Date(),
    minDate: new Date("2000-01-01")
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      isVisible: false,
      startDate: this.props.date,
      startPreDate: this.props.date
    };
  }

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.myVisible}
        animationType={"slide"}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0
          }}
        >
          <View
            style={{
              height: 40,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: ResourceStyle.white
            }}
          >
            <Touch
              myPress={() => {
                this.setState({ startDate: this.state.startPreDate });
                this.props.onStartChange("");
              }}
            >
              <Text
                style={{
                  color: ResourceStyle.lightBlue,
                  paddingHorizontal: 15
                }}
              >
                取消
              </Text>
            </Touch>

            <Text>开始日期</Text>

            <Touch
              myPress={() => {
                this.setState({ startPreDate: this.state.startDate });
                this.props.onStartChange(this.state.startDate);
              }}
            >
              <Text
                style={{
                  color: ResourceStyle.lightBlue,
                  paddingHorizontal: 15
                }}
              >
                确定
              </Text>
            </Touch>
          </View>

          <View
            style={{
              height: height / 3,
              backgroundColor: ResourceStyle.lightGray
            }}
          >
            <DatePickerIOS
              mode={"date"}
              minimumDate={this.props.minDate}
              date={this.state.startDate}
              onDateChange={date => {
                this.setState({ startDate: date });
              }}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

/**
 * 下拉菜单显示android时间
 * getDate 将时间返回到传进来的函数中
 * */
export async function getAndroidDate(getDate) {
  try {
    const { action, year, month, day } = await DatePickerAndroid.open({
      date: new Date(),
      mode: "spinner" //设置选择器模式
    });
    if (action !== DatePickerAndroid.dismissedAction) {
      // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
      let mon = month + 1;

      let chooseDate = year + "-" + mon + "-" + day;
      getDate(chooseDate);
    }
  } catch ({ code, message }) {
    console.warn("Cannot open date picker", message);
  }
}
