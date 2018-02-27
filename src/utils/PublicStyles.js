import { StyleSheet, Dimensions, Platform } from "react-native";
import ResourceStyle from "./ResourceStyle";

const isIOS = Platform.OS === "ios";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  //    李洋已修改添加
  container: {
    backgroundColor: ResourceStyle.lightGray,
    flex: 1
  },
  bg_white: {
    backgroundColor: ResourceStyle.white
  },
  item_box: {
    backgroundColor: ResourceStyle.white,
    paddingVertical: ResourceStyle.top_margin,
    paddingHorizontal: ResourceStyle.left_margin
  },
  item_row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: ResourceStyle.top_margin
  },
  item_row_between: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
    // paddingVertical: ResourceStyle.top_margin
  },
  list_footer: {
    height: 40,
    marginVertical: ResourceStyle.top_margin,
    backgroundColor: ResourceStyle.lightGray,
    alignItems: "center",
    justifyContent: "center"
  },
  activityIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  //   字体
  txtLargeBlack: {
    fontSize: ResourceStyle.large_text,
    color: ResourceStyle.black
  },
  txtLargeGray: {
    fontSize: ResourceStyle.large_text,
    color: ResourceStyle.gray
  },
  txtLargeLightGray: {
    fontSize: ResourceStyle.large_text,
    color: ResourceStyle.lightGray
  },
  txtLargeMoreGray: {
    fontSize: ResourceStyle.large_text,
    color: ResourceStyle.moreGray
  },
  txtLargeOra: {
    fontSize: ResourceStyle.large_text,
    color: ResourceStyle.orange
  },
  txtLargeWhite: {
    fontSize: ResourceStyle.large_text,
    color: ResourceStyle.white
  },
  txtNormalBlack: {
    fontSize: ResourceStyle.normal_text,
    color: ResourceStyle.black
  },
  txtNormalGray: {
    fontSize: ResourceStyle.normal_text,
    color: ResourceStyle.gray
  },
  txtNormalLightGray: {
    fontSize: ResourceStyle.normal_text,
    color: ResourceStyle.lightGray
  },
  txtNormalMoreGray: {
    fontSize: ResourceStyle.normal_text,
    color: ResourceStyle.moreGray
  },
  txtNormalOra: {
    fontSize: ResourceStyle.normal_text,
    color: ResourceStyle.orange
  },
  txtNormalWhite: {
    fontSize: ResourceStyle.normal_text,
    color: ResourceStyle.white
  },
  txtSmallBlack: {
    fontSize: ResourceStyle.small_text,
    color: ResourceStyle.black
  },
  txtSmallGray: {
    fontSize: ResourceStyle.small_text,
    color: ResourceStyle.gray
  },
  txtSmallLightGray: {
    fontSize: ResourceStyle.small_text,
    color: ResourceStyle.lightGray
  },
  txtSmallMoreGray: {
    fontSize: ResourceStyle.small_text,
    color: ResourceStyle.moreGray
  },
  txtSmallOra: {
    fontSize: ResourceStyle.small_text,
    color: ResourceStyle.orange
  },
  txtSmallWhite: {
    fontSize: ResourceStyle.small_text,
    color: ResourceStyle.white
  },
  //   按钮
  btn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: ResourceStyle.normal_text,
    borderWidth: 1,
    borderRadius: 5
  },
  btn_default: {
    backgroundColor: ResourceStyle.white,
    borderColor: ResourceStyle.red_title,
    color: ResourceStyle.red_title
  },
  btn_danger: {
    backgroundColor: ResourceStyle.red_title,
    overflow: "hidden",
    borderColor: ResourceStyle.red_title,
    color: ResourceStyle.white
  },
  btn_warring: {
    backgroundColor: ResourceStyle.orange,
    overflow: "hidden",
    borderColor: ResourceStyle.orange,
    color: ResourceStyle.white
  },

  horizontal_match: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: ResourceStyle.top_margin,
    paddingHorizontal: ResourceStyle.left_margin
  },
  horizontal_wrap: {
    flexDirection: "row",
    alignItems: "center"
  },

  vertical_wrap: {
    flexDirection: "column"
  },
  leftBorderView: {
    marginVertical: ResourceStyle.top_margin,
    marginLeft: ResourceStyle.left_margin,
    borderLeftColor: ResourceStyle.red_title,
    paddingLeft: ResourceStyle.top_margin * 2,
    borderLeftWidth: 2
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: ResourceStyle.lightGray
  },
  lineHigher: {
    width: "100%",
    height: 5,
    backgroundColor: ResourceStyle.lightGray
  },
  txtInputMatch: {
    fontSize: ResourceStyle.small_text,
    height: 35,
    width: "80%",
    textAlign: "center"
  },
  txtInputHalf: {
    fontSize: ResourceStyle.small_text,
    height: 35,
    width: "45%",
    textAlign: "center"
  },
  txtInputHalfSmall: {
    fontSize: ResourceStyle.small_text,
    height: 35,
    width: "35%",
    textAlign: "center"
  },
  txtInputMiddle: {
    fontSize: ResourceStyle.small_text,
    height: 35,
    width: "20%",
    textAlign: "center"
  },
  txtInputSmall: {
    fontSize: ResourceStyle.small_text,
    height: 35,
    width: "10%",
    textAlign: "center"
  },
  buttonStyle: {
    paddingVertical: ResourceStyle.top_margin - 2,
    paddingHorizontal: ResourceStyle.top_margin * 2,
    borderWidth: 1,
    borderRadius: 2,
    fontSize: ResourceStyle.normal_text,
    color: ResourceStyle.white
  }
});
