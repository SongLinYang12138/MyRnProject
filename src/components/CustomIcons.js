/**
 * @FileName: CustomIcons.js
 * @Version: 0.0.1
 * @Author: wuzhibo
 * @Date: 2017.08.21
 * @Description: 自定义字体图标集
 *
 *
 * @History:
 *
 * 2017.08.22 by wuzhibo
 * 添加组件支持
 */

import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
import glyphMap from '../assets/fonts/iconfont.json';

const iconSet = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImpageSource = iconSet.getImageSource;