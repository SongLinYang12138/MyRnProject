/**
 * Created by ysl on 2017/11/27
 *
 * 属性:
 * 选择按钮
 * onChange 当选择状态改变时调用的方法 mySize 传进来的CheckBox的大小
 * myColor CheckBox的颜色 isShow clickEnabled 是否可被点击
 */
import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ResourceStyle from "../utils/ResourceStyle";
import Touch from "../components/Touch";

export class MyCheckBox extends Component {
    static defaultProps = {
        onChange(isSelected) {
        },
        mySize: 20,
        myColor: ResourceStyle.orange,
        isShow: 2,//2时默认不取props值 1 是选中,0是未选中,
        clickEnabled: true
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {isChecked: false};
    }

    isShow() {

        if (this.props.isShow == 2) {
            this.setState({
                isChecked: !this.state.isChecked
            });
        } else {

            this.setState({
                isChecked: this.props.isShow == 1 ? true : false
            })
        }

    }

    render() {

        let isSelected = false;
        if (this.props.isShow == 2) {
            isSelected = this.state.isChecked;
        } else {
            isSelected = this.props.isShow == 1 ? true:false
        }
        return (
            <Touch
                myPress={() => {
                    if (!this.props.clickEnabled) {
                        return;
                    }
                    this.isShow();
                    this.props.onChange(!this.state.isChecked);
                }}
            >
                <FontAwesome
                    name={isSelected ? "check-circle-o" : "circle-o"}
                    size={this.props.mySize}
                    color={this.props.myColor}
                />
            </Touch>
        );
    }
}
