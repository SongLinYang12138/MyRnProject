/**
 * @FileName: SquareGrid.js
 * @Version: 0.0.3
 * @Author: wuzhibo
 * @Date: 2017.08.21
 * @Description: 九宫格组件
 *
 * 属性：
 *   data - 组件数据，
 *   格式：
 *   {
 *      iconName: "",
 *      title: "",
 *      iconSize: "", //可选，覆盖全局同名设置
 *      iconColor: "", //可选，覆盖全局同名设置
 *      textSize: "", //可选，覆盖全局同名设置
 *      textColor: "" //可选，覆盖全局同名设置
 *   }
 *   columns - 列个数
 *   itemBgColor - 格子背景，默认为白色
 *   hasBorder - 格子是否有边框，默认为true
 *   borderColor - 格子边框颜色，默认为#ddd
 *   borderWidth - 格子边框大小，默认为1
 *   textSize - 文本大小，默认为15
 *   textColor - 文本颜色，默认为#333
 *   iconSize - 图标大小，默认为24
 *   iconColor - 图标颜色，默认为#ccc
 *
 *   2017.09.06 modified by wuzhibo
 *   2017.09.07 modified by wuzhibo 增加hasBorder处理逻辑
 *   2017.09.12 modified by wuzhibo 增加onGridPress回调
 */

//导入组件依赖
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Dimensions,
    TouchableOpacity,
    Alert
} from 'react-native';

import Icon from './CustomIcons';
import Touch from './Touch'

//
const screenWidth = Dimensions.get('window').width;

export default class SquareGrid extends Component{
    //
    static defaultProps = {
        data: [],
        columns: 4,
        itemBgColor: '#fff',
        hasBorder: false,
        borderColor: '#ddd',
        borderWidth: 1,
        textSize: 15,
        textColor: '#333',
        iconSize: 24,
        iconColor: '#ccc',
        onGridPress: function(){}
    }

    //
    constructor(props){
        super(props);
        var data = this.props.data;
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data),
            edge: screenWidth / this.props.columns,
            itemBorderColor: this.props.hasBorder ? this.props.borderColor : undefined,
            itemBorderWidth: this.props.hasBorder ? this.props.borderWidth : undefined
        }
    }

    //
    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                contentContainerStyle={styles.listViewContent}
            />
        );
    }

    //
    _renderRow(rowData, sectionID, rowID, highlightRow){

        //第一行有上边框
        var _borderTopWidth = rowID < this.props.columns ? this.state.itemBorderWidth : undefined;
        //第一列无左边框
        var _borderLeftWidth = (rowID % this.props.columns) === 0 ? undefined : this.state.itemBorderWidth;

        //当为最后一个格子，并且没有完全充满横向屏幕时，有右边框
        var _borderRightWidth = (((rowID * 1 + 1) % this.props.columns) !== 0 && (rowID * 1 + 1) === this.props.data.length) ? this.state.itemBorderWidth : undefined;

        //默认有右下边框
        var _borderBottomWidth = this.state.itemBorderWidth;

        return (
            <Touch
                activeOpacity={0.5}
                myPress={()=>this.props.onGridPress(rowData)}
                style={[styles.touchContainer, {
                    width: this.state.edge,
                    height: this.state.edge,
                    backgroundColor: this.props.itemBgColor}]}>

                <View style={[styles.itemContainer, {
                    width: this.state.edge,
                    height: this.state.edge,
                    borderColor: this.state.itemBorderColor,
                    borderTopWidth: _borderTopWidth,
                    borderLeftWidth: _borderLeftWidth,
                    borderRightWidth: _borderRightWidth,
                    borderBottomWidth: _borderBottomWidth}]}>

                    <View style={styles.iconContainer}>
                        <Icon name={rowData.iconName}
                              size={rowData.iconSize || this.props.iconSize}
                              color={rowData.color || this.props.iconColor}/>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={[styles.textStyle, {
                            fontSize: rowData.textSize || this.props.textSize,
                            color: rowData.textColor || this.props.textColor}]}>
                            {rowData.title}
                        </Text>
                    </View>
                </View>
            </Touch>
        );
    }

    _showDialog(text){
        Alert.alert('share', text, [{
            text: 'share now'
        }, {
            text: 'cancel'
        }]);
    }
}

const styles = StyleSheet.create({
    listViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    touchContainer: {
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    itemContainer: {
        flex: 0
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center'
    },
    textStyle: {
        marginTop: 5,
        fontSize: 15
    }
});