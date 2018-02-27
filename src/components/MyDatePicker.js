/**
 * Created by ysl on 2017/11/7.
 * 选择开始时间 和 结束时间 的时间选择框根据手机系统调用不同的api
 *
 * 属性
 * onStartChange(start)选择开始时间调用
 * onEndChange(end)选择结束时间调用
 * onSearch(value)点击搜索调用的方法
 * isShowSearch是否显示搜索
 * placeholder 显示搜索关键词
 */
import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
  DatePickerIOS,
  DatePickerAndroid,
  Dimensions,
  StyleSheet,
  TextInput,
  Modal
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ResourceStyle from "../utils/ResourceStyle";
import Touch from "../components/Touch";

const { width, height } = Dimensions.get("window");
const isIOS = Platform.OS === "ios";

export class MyDatePicker extends Component {
  //组件默认属性
  static defaultProps = {
    onSearch(value) {},
    date: new Date(),
    minDate: new Date("2000-01-01"),
    isShowSearch: true, //传入“false”时不显示搜索按钮
    placeholder: "请输入搜索关键词"
  };

  //组件构造函数
  constructor(props) {
    super(props);
    //组件数据状态
    this.state = {
      value: "", //搜索框输入的值
      isVisible: false, //判断是否显示datePicker弹出框
      searchBarIsShow: false, //判断搜索框是否显示
      isStart: false, //判断是否为开始时间
      startDate: this.props.date,
      startPreDate: this.props.date,
      endDate: this.props.date,
      endPreDate: this.props.date,
      startDateText: "开始时间",
      endDateText: "结束时间"
    };
  }

  toggleModal() {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  onMySearch() {
    this.setState({ searchBarIsShow: false });
    this.props.onSearch(this.state.value);
  }

  render() {
    return (
      <View style={{ position: "relative" }}>
        <View style={myDateStyle.container}>
          <View style={myDateStyle.containerRow}>
            <Touch
              style={myDateStyle.containerRow}
              myPress={() => {
                if (isIOS) {
                  this.state.isStart = true;
                  this.toggleModal();
                } else {
                  this.openDate(true);
                }
              }}
            >
              <FontAwesome
                size={14}
                name="calendar"
                color={ResourceStyle.moreGray}
              />
              <Text style={myDateStyle.timeText}>
                {this.state.startDateText}
              </Text>
            </Touch>

            <Touch
              style={myDateStyle.containerRow}
              myPress={() => {
                if (isIOS) {
                  this.state.isStart = false;
                  this.toggleModal();
                } else {
                  this.openDate(false);
                }
              }}
            >
              <FontAwesome
                size={14}
                name="calendar"
                color={ResourceStyle.moreGray}
              />
              <Text style={myDateStyle.timeText}>{this.state.endDateText}</Text>
            </Touch>

            {isIOS && (
              <Modal
                transparent={true}
                visible={this.state.isVisible}
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
                        this.toggleModal();
                        this.setState(
                          this.state.isStart
                            ? { startDate: this.state.startPreDate }
                            : { endDate: this.state.endPreDate }
                        );
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

                    <Text>{this.state.isStart ? "开始时间" : "结束时间"}</Text>

                    <Touch
                      myPress={() => {
                        this.toggleModal();
                        this.setState({
                          startDateText: this.state.startDate
                            .toISOString()
                            .split("T")[0],
                          endDateText: this.state.endDate
                            .toISOString()
                            .split("T")[0],
                          startPreDate: this.state.isStart
                            ? this.state.startDate
                            : this.state.startPreDate,
                          endPreDate: this.state.isStart
                            ? this.state.endPreDate
                            : this.state.endDate
                        });
                        {
                          this.state.isStart
                            ? this.props.onStartChange(this.state.startDateText)
                            : this.props.onEndChange(this.state.endDateText);
                        }
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
                      date={
                        this.state.isStart
                          ? this.state.startDate
                          : this.state.endDate
                      }
                      onDateChange={date => {
                        this.setState(
                          this.state.isStart
                            ? { startDate: date }
                            : { endDate: date }
                        );
                      }}
                    />
                  </View>
                </View>
              </Modal>
            )}
          </View>
          {this.props.isShowSearch && (
            <Touch
              style={{
                width: 40,
                justifyContent: "center",
                alignItems: "center"
              }}
              myPress={() => {
                this.setState({ searchBarIsShow: true });
              }}
            >
              <FontAwesome name="search" color="#f49826" size={20} />
            </Touch>
          )}
        </View>

        {this.state.searchBarIsShow && (
          <View
            style={{
              width: width,
              height: 40,
              position: "absolute",
              zIndex: 200,
              top: 0,
              left: 0
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "#fff",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 10
                }}
              >
                <TextInput
                  style={{
                    padding: 0,
                    margin: 0,
                    borderWidth: 0,
                    fontSize: 14
                  }}
                  placeholder={this.props.placeholder}
                  returnKeyType={"search"}
                  selectTextOnFocus={true}
                  onChangeText={value => {
                    this.setState({ value });
                  }}
                  onSubmitEditing={() => {
                    this.onMySearch();
                  }}
                  underlineColorAndroid="transparent"
                />
              </View>

              <Touch
                style={{
                  width: 40,
                  alignItems: "center"
                }}
                myPress={() => {
                  this.onMySearch();
                }}
              >
                <FontAwesome name="search" size={20} color="#f49826" />
              </Touch>
            </View>
          </View>
        )}
      </View>
    );
  }

  async openDate(_isStart) {
    // async openDate() {
    const { action, year, month, day } = await DatePickerAndroid.open({
      date: new Date(),
      mode: "spinner"
    });

    if (action !== DatePickerAndroid.dismissedAction) {
      let mon = Number(month) + 1;
      if (_isStart) {
        let startDate = year + "-" + mon + "-" + day;
        this.props.onStartChange(startDate);
      } else {
        let endDate = year + "-" + mon + "-" + day;
        this.props.onEndChange(endDate);
      }
    }
  }
}

const myDateStyle = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: ResourceStyle.lightGray,
    backgroundColor: ResourceStyle.white
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  timeText: {
    fontSize: ResourceStyle.large_text,
    marginLeft: 5,
    color: ResourceStyle.moreGray
  }
});
