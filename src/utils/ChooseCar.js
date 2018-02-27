/**
 * Created by ysl on 2018/1/5.
 */
import React, {Component} from 'react'
import {View, Text} from 'react-native';
import Touch from '../components/Touch'
import PublicStyle from './PublicStyles'
import ResourceStyle from './ResourceStyle'
import FlatListExample from '../components/NormalList/FlatListExample'
import {getLeftTitle} from "../components/Title";
import {http_get, http_post} from "./HttpUtil";
import {ToastUtils} from "./ToastUtils";

let listData = new Array();

export class ChooseCar extends Component {

    static navigationOptions = ({navigation}) => ({
        title: '选择车辆',
        headerLeft: (getLeftTitle(navigation))
    })

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isLoading: false
        };

    }

    componentWillMount() {

        this.getHttpData();
    }


    getHttpData() {

        this.setState({
            isLoading: true
        })
        http_get("api/truckinfo/SearchDropGridList?sidx=&page=1&sord=&rows=10&searchTerm=")
            .then((data) => {

                const jsonData = data.data;
                listData = jsonData.rows;

                this.setState({
                    isLoading: false
                })
            }).catch((e) => {

            this.setState({
                isLoading: false
            })
            ToastUtils.show(e.toString());
        })
    }

    render() {


        return (<View style={PublicStyle.container}>
            <View style={PublicStyle.horizontal_match}>
                <FlatListExample
                    list={listData}
                    renderItem={this._renderItem.bind(this)}
                    isLoading={this.state.isLoading}
                />

            </View>

        </View>)
    }

    _renderItem(value) {

        const item = value.item;

        return (<Touch style={{width: '100%'}} myPress={() => {

            this.props.navigation.state.params.callBack(item);
            this.props.navigation.goBack(null);
        }}>
            <View style={[PublicStyle.horizontal_match, {
                justifyContent: 'space-between',
                paddingHorizontal: ResourceStyle.left_margin,
                paddingVertical: ResourceStyle.top_margin
            }]}>
                <View style={PublicStyle.horizontal_wrap}>
                    <Text style={PublicStyle.txtNormalBlack}>车牌号: </Text>
                    <Text style={PublicStyle.txtNormalGray}>{item.Number}</Text>
                </View>
                <Text>驾驶员:{item.DriverName}</Text>
            </View>
            <View style={[PublicStyle.horizontal_match, {
                justifyContent: 'space-between',
                paddingHorizontal: ResourceStyle.left_margin,
                paddingVertical: ResourceStyle.top_margin
            }]}>
                <Text style={PublicStyle.txtNormalBlack}>电话号码:{item.MasterTelephone}</Text>

            </View>

        </Touch>)
    }
}