/**
 * Created by ysl on 2017/12/13.
 * 下拉菜单
 * 具体属性
 * https://github.com/sohobloo/react-native-modal-dropdown
 * options 下拉数组，元素是String字符 defaultValue 默认显示的值
 * textStyle默认显示的字体样式  style 默认显示的View样式
 * dropdownStyle下拉View的显示样式  dropdownTextStyle 下拉字体样式
 * onSelect 选中的数组下标
 */
import React, {Component} from 'react';
import {
    Text, Dimensions,
    View,
    Image, StyleSheet
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown'
import ResourceStyle from '../utils/ResourceStyle'
import CommonStyle from '../utils/PublicStyles'
import {ToastUtils} from "../utils/ToastUtils";
import FontAwsome from 'react-native-vector-icons/FontAwesome'

export class DropDownMenu extends Component {

  static  defaultProps = {
        iconSize: 20,
        iconColor: ResourceStyle.black,
        onSelects(index){},
        options: ['option 1', 'option 2'],
        defaultValue: ''
    }


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {isShow: false};
    }


    render() {
        // {{width: '20%', backgroundColor: ResourceStyle.white,}}
        // {{paddingLeft: 15}}


        return ( <View style={[{flexDirection: 'row',width:'100%', alignItems: 'center'}]}>
            <ModalDropdown
                options={this.props.options}
                defaultValue={this.props.defaultValue}
                animated={true}
                style={[{width: '20%', backgroundColor: ResourceStyle.white}, this.props.style]}
                textStyle={[CommonStyle.txtNormalBlack, this.props.textStyle]}
                dropdownStyle={[{width: '20%', backgroundColor: ResourceStyle.white}, this.props.dropdownStyle]}
                dropdownTextStyle={[CommonStyle.txtNormalBlack, this.props.dropdownTextStyle]}
                onSelect={(index) => {
                  this.props.onSelects(index)
                }}
                onDropdownWillShow={() => {
                    this.setState({
                        isShow: true
                    });
                }}
                onDropdownWillHide={() => {
                    this.setState({
                        isShow: false
                    });
                }}
            />
            <FontAwsome style={{marginLeft: ResourceStyle.top_margin}}
                        name={this.state.isShow ? "caret-down" : 'caret-left'} size={this.props.iconSize}
                        color={this.props.iconColor}/>
        </View>)
    }


}
