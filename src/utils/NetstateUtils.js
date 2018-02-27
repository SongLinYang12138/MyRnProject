/**
 * Created by ysl on 2017/11/1.
 * 获取网络状态
 */
import {NetInfo} from 'react-native';

var isConnect = false;

export function addNetInfoListener() {
    NetInfo.isConnected.addEventListener(
        'connectionChange',
        handleFirstConnectivityChange
    );

}


export function removeNetInfoListener() {

    NetInfo.isConnected.removeEventListener(
        'connectionChange',
        handleFirstConnectivityChange
    );

}

function handleFirstConnectivityChange(isConnected) {

    console.log("handle  " + isConnected);
    isConnect = isConnected;
}


export function isNetInfoConnected() {

    return NetInfo.isConnected.fetch();
}