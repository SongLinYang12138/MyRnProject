/**
 * Created by ysl on 2017/12/14.
 */
import Realm from 'realm';
//最后两个列表是扩展列，暂不填充数据
const AreaInfo = {
    name: 'AreaInfo',
    primaryKey: 'id',
    properties: {
        id: 'int',
        ServerGuid: 'string',
        AreaID: 'string',
        ParId: 'string',
        AreaNo: 'string',
        AreaName: 'string',
        TranId: 'string',
        ShortName: 'string',
        ChooseCount: 'string',
        defaultNet: 'string',

    }
};

const NetInfo = {
    name: 'NetInfo',
    primaryKey: 'id',
    properties: {
        id: 'int',
        ServerGuid: 'string',
        NetDeptID: 'string',
        ParID: 'string',
        NetDeptNo: 'string',
        NetDeptName: 'string',
        NetDeptArea: 'string',
        NetDeptLevel: 'string',
        NetDeptContact: 'string',
        NetDeptTelephone: 'string',
        NetDeptAddress: 'string',
        NetDeptShortName: 'string',
        NetDeptChooseCount: 'string',
    }
};

const DelegationInfo = {
    name: 'Delegation',
    primaryKey: 'id',
    properties: {
        id: 'int',
        DelegationCode: {type: 'string', indexed: true},//单号
        DelegationDate: 'int',
        ReceiveOrderName: 'string',
        StartAdd: 'string',
        EndAdd: 'string',
        ReceiveName: 'string',
        ReceiveTel: 'string',
        ReceiveAdd: 'string',
        SendName: 'string',
        SendTel: 'string',
        SendAdd: 'string',
        GoodsName: 'string',
        Qty: 'string',
        Weight: 'string',
        Volume: 'string',
        Package: 'string',
        ReceiptNum: 'string',
        ReceiptRequireMent: 'string',
        PayModeName: 'string',
        SendModeName: 'string',
        ReceivableTotal: 'string',//应收合计
        CashPayment: 'string',//现付
        UnPayment: 'string',//未付
        Freight: 'string',//运费
        Premium: 'string',//保费
        StorageCharge: 'string',//仓储费
        UnLoadingCharge: 'string',//卸货费
        ReceiveCharge: 'string',//接货费
        SendCharge: 'string',//送货费
        LoanUnLoadingCharge: 'string',//代垫卸车费
        Comment: 'string',
        isUpload:'int',//0 未上传 1 上传成功 2 上传失败
        DelegationTest: 'string',
        DelegationDefault: 'string'
    }
}

const SendInfo = {
    name: 'SendInfo',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: {type: 'string', indexed: true},
        tel: 'string',
        address: 'string',
        startAdd: 'string',
        endAdd: 'string',
    }
}
const ReceiveInfo = {
    name: 'ReceiveInfo',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: {type: 'string', indexed: true},
        tel: 'string',
        address: 'string',
        startAdd: 'string',
        endAdd: 'string',
    }
}

let realm = new Realm({
    path: 'san_fang.realm',
    schema: [DelegationInfo, AreaInfo, NetInfo, SendInfo, ReceiveInfo],
    schemaVersion: 6,
});

export function getRealm() {

    return realm;
}



