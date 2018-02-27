/**
 * Created by ysl on 2017/11/7.
 *
 * 组件高度由组件内容决定
 * 属性
 * navigation 用于返回上级页面
 */

import React, { Component } from "react";
import { View, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Touch from "../components/Touch";
import ResourceStyle from "../utils/ResourceStyle";

export function getLeftTitle(navigation,text="返回") {
  return (
    <Touch myPress={() => navigation.goBack(null)}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 10
        }}
      >
        <FontAwesome name="chevron-left" size={16} color="white" />
        <Text
          style={{
            color: "#fff",
            fontSize: ResourceStyle.large_text,
            marginLeft: 5
          }}
        >
            {text}
        </Text>
      </View>
    </Touch>
  );
}
