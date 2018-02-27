/**
 * Created by ysl on 2017/9/22.
 * 常用方法
 */
import React, {Component} from 'react';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export class CommonUtil {

    static getScreenW() {
        return width;
    }

    static getScreenH() {
        return height;
    }

    static isEmpty(str) {

        if (str == null || str == undefined || str == "") {
            return true;
        } else return false;
    }

    static isNotEmpty(str) {

        if (str == null && str == undefined && str == "") {
            return false;
        } else return true;

    }

    static spiltTime(date) {
        var time = "";
        try {
            if (CommonUtil.isNotEmpty(date)) {

                if (date.toString().includes("T")) {
                    time = date.split("T")[0] + " " + date.split("T")[1];
                }
                // else time = date.split(" ")[0];
                return time;
            } else {
                return ""
            }
        } catch (e) {

            return "";
        }
    }

    static getYMDHMS(time) {


        let date = new Date(time);

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        const hour = date.getHours();
        const miniutes = date.getMinutes();
        const seconds = date.getSeconds();

        return year + "-" + month + "-" + day + " " + hour + ":" + miniutes + ":" + seconds;
    }


}