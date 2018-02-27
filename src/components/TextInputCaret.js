/**
 * Created by ysl on 2017/12/13.
 *
 * 带下拉图标的输入框
 *
 * placeholderTextColor 提示文字颜色 placeholder 提示文字
 * defaultValue 默认文字 onChange
 */
import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import CommonStyle from "../utils/PublicStyles";
import ResourceStyle from '../utils/ResourceStyle'
import Touch from './Touch'
import {ToastUtils} from "../utils/ToastUtils";


export class TextInputCaret extends Component {

    static defaultProps = {
        style: {alignItems: 'center'},
        placeholderTextColor: ResourceStyle.moreGray,
        placeholder: '请输入',
        defaultValue: '',
        editable:true,
            onChange(txt) {
        },
        iconSize:18,
        iconColor:ResourceStyle.black,
        onPress(){},
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {isShow: false};
    }

    render() {


        return (


            <Touch style={{flexDirection: 'row',alignItems:'center',width:'100%'}} myPress = {() => {
                this.setState({
                    isShow:!this.state.isShow
                })
                this.props.onPress();
            }}>
                <TextInput
                style={[CommonStyle.txtSmallBlack, this.props.style]}
                placeholderTextColor={this.props.placeholderTextColor}
                placeholder={this.props.placeholder+""}
                defaultValue={this.props.defaultValue+""}
                onChangeText={(this.props.onChange.bind(this))}
                underlineColorAndroid='transparent'
                editable={this.props.editable}
            />
            <FontAwsome style={{marginLeft: ResourceStyle.top_margin}}
                        name={this.state.isShow ? "caret-down" : 'caret-left'} size={this.props.iconSize}
                        color={this.props.iconColor}/>
            </Touch>
        )
    }

}