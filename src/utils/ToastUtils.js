/**
 * Created by ysl on 2017/9/22.
 * 显示Toast信息
 */

import React, {Component} from 'react';
import {ToastAndroid, AlertIOS} from 'react-native';
import Toast from 'react-native-root-toast';
import {CommonUtil} from "./CommonUtil";
export class ToastUtils {

    static show(msg) {

        if(CommonUtil.isNotEmpty(msg)){


            this.toast = Toast.show(msg, {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
                onShow: () => {
                    // calls on toast\`s appear animation start
                },
                onShown: () => {
                    // calls on toast\`s appear animation end.
                },
                onHide: () => {
                    // calls on toast\`s hide animation start.
                },
                onHidden: () => {
                    // calls on toast\`s hide animation end.
                }
            });
        }
        // if (require("Platform").OS == 'android')
        //     ToastAndroid.show(msg, ToastAndroid.SHORT);
        // else AlertIOS.alert("提示", msg, []);
    }
}