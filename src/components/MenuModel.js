/**
 * Created by ysl on 2017/9/1.
 * @description 下拉菜单栏
 *
 * 属性：
 * isShow 是否显示子dialog
 * childeView 子view样式
 * closeMenu 点击页面外部调用
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    Dimensions,
    TouchableOpacity,
    Alert,
    TouchableWithoutFeedback,
} from 'react-native';
import FlatListExample from './NormalList/FlatListExample';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Touch from "./Touch";

const {height, width} = Dimensions.get('window')

const LEFT = 1, MIDDLE = 2, RIGHT = 3;

export class MenuModel extends Component {

// propTypes用于验证转入的props，当向 props 传入无效数据时，JavaScript 控制台会抛出警告
//     static propTypes = {
//         isShow: React.PropTypes.bool.isRequired,
//         leftText: React.PropTypes.string.isRequired,
//         middleText: React.PropTypes.string.isRequired,
//         rightText: React.PropTypes.string.isRequired,
//         list: React.PropTypes.array.isRequired,
//         leftClick: React.PropTypes.func.isRequired,
//         middleClick: React.PropTypes.func.isRequired,
//         rightClick: React.PropTypes.func.isRequired,
//         renderItem: React.PropTypes.func.isRequired,
//         currnetDirection: React.PropTypes.number.isRequired,
//         mytop: React.PropTypes.number.isRequired,
//     }
    static defaultProps = {
        closeMenu() {}

    }


    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {


        return (


            <Modal
                style={styles.models}
                transparent={true}
                visible={this.props.isShow}
                animationType={'fade'}
                onRequestClose={() => {

                }}
            >
                <TouchableOpacity style={{flex: 1, backgroundColor: 'transparent'}} onPress={() => {
                    this.props.closeMenu()
                }}>
                    {this.props.childeView()}
                </TouchableOpacity>

            </Modal>
        );
    }

    _separator() {
        return <View style={{height: 2, backgroundColor: 'transparent'}}/>;
    }


}

const styles = StyleSheet.create({

    container: {
        justifyContent: "center",
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: 'transparent',
    },
    top: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        position: 'relative',

    },

    listview: {
        width: width - 50,
        marginLeft: 25,
        height: height / 2,
        marginTop: height / 3,
        justifyContent: 'center',
        flexDirection: "column",
    },

    models: {

        flex: 1,
        marginTop: height / 3,
        justifyContent: 'center',
        flexDirection: "column",
    },

    txt: {
        fontSize: 13,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
})


