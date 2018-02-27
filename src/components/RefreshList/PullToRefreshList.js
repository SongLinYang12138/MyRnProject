/**
 * Created by ysl on 2017/11/15.
 *
 * 封装了flatlist的列表，
 *
 * setData()添加数据源 addData()增加数据源
 * currenState 判断当前状态 renderItem item样式
 * numColumns 每一行item个数 isLoading 判断当前是否在加载
 *onEndReached 到达底部后调用的方法
 */

import React, {Component} from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Modal,
    Dimensions,
    FlatList,
    ActivityIndicator
} from "react-native";
import {ToastUtils} from "../../utils/ToastUtils";
import ResourceStyle from "../../utils/ResourceStyle";

const {height, width} = Dimensions.get("window");
let ITEM_HEIGHT = 100;
let data = [];

export class PullToRefreshList extends Component {
    static defaultProps ={
        numColumns: 1,
        isLoading:false
    }

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            isLoading: false,
            currenState: 0, // 0 可以加载更多 1 加载中，2不能加载更多
            listDatas: []
        };
    }

    componentWillMount() {
    }

    setData(list) {

        if (list.length === 0) {
            this.setState({
                listDatas: [],
                currenState: 2
            });
        } else {
            this.setState({
                listDatas: list,
                currenState: 0
            });
        }
    }

    addData(list) {

        if (list.length === 0) {
            this.setState({
                currenState: 2
            });
        } else {
            this.setState({
                listDatas: this.state.listDatas.concat(list),
                currenState: 0
            });
        }
    }

    _header = () => {
        return (
            <View
                style={{
                    height: 5,
                    backgroundColor: ResourceStyle.lightGray
                }}
            />
        );
    };

    _footer = () => {
        if (this.state.currenState === 2) {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>当前没有更多数据</Text>
                </View>
            );
        } else if (this.state.currenState === 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.text}>加载更多</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <ActivityIndicator
                        animating={true}
                        size="large"
                        color={ResourceStyle.orange}
                    />
                </View>
            );
        }
    };

    _separator = () => {
        return (
            <View
                style={{
                    height: 6,
                    backgroundColor: ResourceStyle.lightGray
                }}
            />
        );
    };

    render() {
        return <View style={{flex: 1}}>{this.getContent()}</View>;
    }

    getContent() {

        if (this.props.isLoading && this.state.currenState !== 1) {
            return (
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <ActivityIndicator
                        animating={true}
                        size="large"
                        color={ResourceStyle.orange}
                    />
                </View>
            );
        } else {
            return (
                <View style={{flex: 1}}>
                    <FlatList

                        ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this.props.renderItem}
                        numColumns={this.props.numColumns}
                        refreshing={this.state.refreshing}
                        getItemLayout={(data, index) => ({
                            length: ITEM_HEIGHT,
                            offset: (ITEM_HEIGHT + 2) * index,
                            index
                        })}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            this.setState({
                                currenState: 1
                            });
                            this.props.onEndReached();
                        }}
                        data={this.state.listDatas}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 40,
        backgroundColor: ResourceStyle.lightGray,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    text: {
        fontSize: ResourceStyle.large_text,
        color: ResourceStyle.moreGray
    }
});
