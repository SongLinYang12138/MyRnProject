/**
 * @FileName: SearchBox.js
 * @Version: 0.0.1
 * @Author: wuzhibo
 * @Date: 2017.08.17
 * @Description: 搜索框组件
 *
 * 属性：
 *   height - 组件高度，默认为30
 *   margin - 组件外边距，默认为10
 *   borderColor - 组件边框颜色，默认为#ccc
 *   borderWidth - 组件边框宽度，默认为1
 *   borderRadius - 组件边框圆角，默认为3
 *   bgColor - 组件背景颜色
 *   color - 组件颜色，默认为#333
 *   fontSize - 组件字体大小，默认为14
 *   searchButtonText - 组件"搜索"按钮文本，默认为"搜索"
 *   searchButtonColor - 组件"搜索"按钮文本颜色，默认为#333
 *   cancelButtonText - 组件"取消"按钮文本，默认为"取消"
 *   cancelButtonColor - 组件"取消"按钮文本颜色，默认为#333
 *   onSearch - 搜索事件，点击组件"搜索"按钮或键盘"搜索"按键时发生，参数为当前搜索框的文本值
 *   继承所有TextInput组件的属性
 *
 * 更新：
 *   2017.09.08 wuzhibo 修改backgroundColor为bgColor，解决android报错
 */

//导入组件依赖
import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

//定义组件
export default class SearchBox extends Component{

    //组件默认属性
    static defaultProps = {
        searchButtonText: '搜索',
        cancelButtonText: '取消',
        onSearch: function (value) {},
        height: 30,
        margin: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 3,
        fontSize: 14,
        color: '#333',
        searchButtonColor: '#333',
        cancelButtonColor: '#333'
    }

    //组件属性类型校验
    /*static propTypes: {
        searchButtonText: View.propTypes.string,
        cancelButtonText: View.propTypes.string,
        onSearch: View.propTypes.func
    }*/

    //组件构造函数
    constructor(props){
        super(props);

        //组件数据状态
        this.state = {
            value: '',
            showCancelButton: false
        }
    }

    _getCancelButton(){
        if(this.state.showCancelButton){
            return (
                <Text style={[styles.cancelBtn, {
                    fontSize: this.props.fontSize + 2,
                    color: this.props.cancelButtonColor}]}
                      onPress={() => (
                          this.setState({showCancelButton: false}),
                              this.refs.textbox.blur(),
                              this.refs.textbox.clear()
                      )}>
                    {this.props.cancelButtonText}
                </Text>
            )
        }
        else{
            return null;
        }
    }

    //组件结构输出
    render(){
        return(

            <View style={[styles.container, {
                height: this.props.height,
                margin: this.props.margin}]}>

                <View style={[styles.searchContainer, {
                    borderColor: this.props.borderColor,
                    borderWidth: this.props.borderWidth,
                    borderRadius: this.props.borderRadius,
                    backgroundColor: this.props.bgColor}]}>

                    <View style={[styles.inputContainer, {
                        borderRightColor: this.props.borderColor,
                        borderRightWidth: this.props.borderWidth}]}>

                        <TextInput
                            {...this.props}
                            style={[styles.textbox, {
                                fontSize: this.props.fontSize,
                                color: this.props.color}]}
                            returnKeyType={"search"}
                            selectTextOnFocus={true}
                            clearButtonMode={"while-editing"}
                            onChangeText={ (value) => this.setState({value}) }
                            onSubmitEditing={ () => this.props.onSearch(this.state.value) }
                            onFocus={ () => this.setState({showCancelButton: true}) }
                            ref="textbox"
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <Text
                        style={[styles.searchBtn, {
                            fontSize: this.props.fontSize,
                            color: this.props.searchButtonColor}]}
                        onPress={ () => this.props.onSearch(this.state.value) }>
                        {this.props.searchButtonText}
                    </Text>
                </View>

                {this._getCancelButton()}
            </View>
        );
    }
}

//定义组件样式
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    searchContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },

    inputContainer: {
        flex: 1
    },

    textbox: {
        height: '100%',
        padding: 0,
        paddingLeft: 10,
        margin: 0,
        borderWidth: 0
    },

    searchBtn: {
        paddingLeft: 10,
        paddingRight: 10
    },

    cancelBtn: {
        paddingLeft: 10,
        paddingRight: 10
    }
});