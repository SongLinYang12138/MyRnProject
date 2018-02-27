/**
 * Created by ysl on 2017/10/9.
 */
import {fetch} from 'fetch';
import {CommonUtil} from "./CommonUtil";
import {ToastUtils} from "./ToastUtils";
import getNavi from "../App";


let LoginInfo = require("../bean/LoginInfo");
const UserInfo = require("../bean/UserInfo")

function parseJSON(data) {

    if (CommonUtil.isEmpty(data)) {


        return {Code: 0, Message: "连接失败"}
    }
    return data;
}

function checkStatus(response) {

    if (response.ok) {

        return response.json().catch(() => {

            return {Code: 0, Message: response._bodyText};

        });

    } else {

        return {Code: 0, Message: response._bodyText.Message};
    }

}

function isHttpConnect() {

}


/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 *
 */
let token = '';

export const token_get = () => {
        //console.log(token);
        return ({
            method: 'get',
            headers: {'Authorization': 'token ' + token},
        })
    }
;


export function http_login(url, options) {


    var json = {
        method: "POST",

        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: options

    };
    // NetInfo.isConnected.fetch().done((isConnected) => {
    //
    //     if(!isConnected){
    //
    //         ToastUtils.show("当前没有网络");
    //     }
    //
    // });


    return fetch(url, json).then(checkStatus).then(parseJSON)
        .then((data) => ({data}));


}

export function http_post(url, options,) {

    url = LoginInfo.httpUrl + "/" + url;
    if (CommonUtil.isNotEmpty(options))
        options = options + "&ClientStamp=" + encodeURIComponent(LoginInfo.clientStamp) + "&Identity=" + LoginInfo.Identity;
    else
        options = "ClientStamp=" + encodeURIComponent(LoginInfo.clientStamp) + "&Identity=" + LoginInfo.Identity;
    var json = {
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: options

    }
    return fetch(url, json).then(checkStatus).then(parseJSON)
        .then((data) => ({data}));

}

export function http_get(url) {

    url = LoginInfo.httpUrl + "/" + url+"&ClientStamp=" + encodeURIComponent(LoginInfo.clientStamp) + "&Identity=" + LoginInfo.Identity;

    var json = {
        method: "GET",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    }
    return fetch(url, json).then(checkStatus).then(parseJSON)
        .then((data) => ({data}));

}

export function http_post_login(url, options) {

    url = LoginInfo.httpUrl + "/" + url;
    var json = {
        method: "POST",
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: options
    }

    return fetch(url, json).then(checkStatus).then(parseJSON)
        .then((data) => ({data}));

}

export function http_register(url, options) {
    let urls = "http://register.5156360.cn/Probation/" + url;
    var json = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: options
    }
    console.log("register  " + urls + "     \n " + options)

    return fetch(urls, json).then(checkStatus).then(parseJSON)
        .then((data) => ({data}))

}

export function http_uploadImage(url, formData) {

    let urls = LoginInfo.httpUrl + "/" + url;
    formData.append("ClientStamp", LoginInfo.clientStamp);
    formData.append("Identity", LoginInfo.Identity)
    // formData = formData + "&ClientStamp=" + encodeURIComponent(LoginInfo.clientStamp) + "&Identity=" + LoginInfo.Identity;
    console.log("url   " + urls + " \n formdata  " + formData)
    var json = {
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formData

    }
    return fetch(urls, json).then(checkStatus).then(parseJSON)
        .then((data) => ({data}));

}