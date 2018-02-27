/**
 * Created by ysl on 2017/12/15.
 * callBack(kind,item)
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, ScrollView, BackHandler} from 'react-native'
import {getLeftTitle} from "../components/Title";
import CommonStyle from './PublicStyles'
import Touch from '../components/Touch'
import ResourceStyle from './ResourceStyle'
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import NetDeptInfos from '../bean/NetDept'

let NetDeptList = [];
let AreaList = [];
let myNavigation = null;

export class ChooseCity extends Component {

    static navigationOptions = ({navigation}) => ({
        title: '选择' + (navigation.state.params.kind == 0 ? "到站地区" : "到站网点"),
        headerLeft: (getLeftTitle(navigation))
    })

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {refresh: false};
    }

    componentWillMount() {

        myNavigation = this.props.navigation;
        this.checkAll();
    }

    async checkAll() {

        const isAdd = await this.addList();


    }

    addList() {
        // if (myNavigation.state.params.kind == 0) {
        //
        //     // AreaList = getRealm().objects('AreaInfo')
        //     // AreaList = [{AreaName:'1'},{AreaName:'1'},{AreaName:'1'},{AreaName:'1'},{AreaName:'1'}]
        //     AreaList = NetDeptInfos.NetDept;
        //     return true;
        // } else {
        //     // NetDeptList = getRealm().objects('NetInfo');
        //     // AreaList = [{NetDeptName:'1'},{NetDeptName:'1'},{NetDeptName:'1'},{NetDeptName:'1'},{NetDeptName:'1'}]
        //
        //
        //     return true;
        // }


        NetDeptList = NetDeptInfos.NetDept
    }

    render() {


        return (<View style={{width: "100%", flexDirection: 'column', backgroundColor: ResourceStyle.white}}>
                <View style={[CommonStyle.horizontal_match, {
                    alignSelf: 'center',
                    width: '80%',
                    marginHorizontal: ResourceStyle.left_margin,
                    marginVertical: ResourceStyle.top_margin,
                    borderColor: ResourceStyle.lightGray,
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: ResourceStyle.lightGray
                }]}>
                    <FontAwsome name="search" size={20} color={ResourceStyle.moreGray}/>
                    <TextInput style={CommonStyle.txtInputMatch}
                               placeholder='请输入要查找的站点名称'
                               placeholderTextColor={ResourceStyle.moreGray}
                               underlineColorAndroid='transparent'
                               onChangeText={(txt) => {

                               }}
                    />
                </View>
                <ScrollView
                    style={{width: "100%", flexDirection: 'column', backgroundColor: ResourceStyle.white}}
                    scrollEnabled={true}
                    horizontal={false}
                >
                    <View style={[CommonStyle.horizontal_match, {
                        flexWrap: 'wrap',
                        backgroundColor: ResourceStyle.white
                    }]}>

                        {this._renderItem()}

                    </View>
                </ScrollView>
            </View>
        )
    }

    _renderItem() {


        return NetDeptList.map(function (item, index) {

            return (<Touch style={{
                flexWrap: 'wrap',
                paddingHorizontal: ResourceStyle.left_margin,
                paddingTop: ResourceStyle.top_margin * 2,
                flexDirection: 'row'
            }}
                           myPress={() => {
                               myNavigation.state.params.callBack(myNavigation.state.params.kind, item)
                               myNavigation.goBack(null);

                           }}
            >
                <Text style={[CommonStyle.txtNormalBlack, {
                    paddingVertical: ResourceStyle.top_margin,
                    paddingHorizontal: ResourceStyle.top_margin * 2,
                    borderColor: ResourceStyle.black,
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: ResourceStyle.white
                }]}>{item.NetDeptName}</Text>
            </Touch>)
        });

    }


}