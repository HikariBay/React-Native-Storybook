import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TableContent} from '../../stories/Button/contentStrings';
import {mColor, mStyle} from '../../helpers/appStyle';

const PropsTable = ({typeValue, defaultValue, requiredValue, description}) => {
  return (
    <View>
      <View style={Style.tablerow}>
        <View style={Style.tableTitleColumn}>
          <Text style={Style.tableTitleText}>{TableContent.TITLE_TYPE}</Text>
        </View>

        <View style={Style.tableValueColumn}>
          <Text style={Style.tableValueText}>{typeValue}</Text>
        </View>
      </View>

      <View style={Style.tableHairline} />

      <View style={Style.tablerow}>
        <View style={Style.tableTitleColumn}>
          <Text style={Style.tableTitleText}>{TableContent.TITLE_DEFAULT}</Text>
        </View>

        <View style={Style.tableValueColumn}>
          <Text style={Style.tableValueText}>{defaultValue}</Text>
        </View>
      </View>

      <View style={Style.tableHairline} />

      <View style={Style.tablerow}>
        <View style={Style.tableTitleColumn}>
          <Text style={Style.tableTitleText}>
            {TableContent.TITLE_REQUIRED}
          </Text>
        </View>

        <View style={Style.tableValueColumn}>
          <Text style={Style.tableValueText}>{requiredValue}</Text>
        </View>
      </View>

      <View style={Style.tableHairline} />

      <View style={Style.spacingBottom} />

      <View style={Style.tablerow}>
        <View style={Style.tableTitleColumn}>
          <Text style={Style.tableTitleText}>
            {TableContent.TITLE_DESCRIPTION}
          </Text>
        </View>
      </View>

      <View style={Style.tableHairline} />

      <View style={Style.spacing} />
      <View style={Style.tableRequiredTable}>
        <Text style={Style.tableRequiredText}>{description}</Text>
      </View>
      <View style={Style.tableHairline} />

      <View style={Style.spacingBottom} />
      <View style={Style.spacingBottom} />
    </View>
  );
};

export default PropsTable;

const Style = StyleSheet.create({
  tablerow: {
    flex: 1,
    flexDirection: 'row',
  },

  tableTitleColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 0.4,
    paddingHorizontal: 18,
    marginTop: 18,
  },

  tableTitleText: {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 'bold',
    color: mColor.CoolGrey040,
  },

  tableValueColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 18,
    marginTop: 18,
  },

  tableValueText: {
    ...mStyle.smallText,
    textAlign: 'left',
    fontSize: 14,
  },

  tableRequiredTable: {
    paddingHorizontal: 18,
  },

  tableRequiredText: {
    ...mStyle.smallText,
    lineHeight: 20,
    textAlign: 'left',
    fontSize: 14,
  },

  tableHairline: {
    marginTop: 20,
    height: 0.8,
    width: '100%',
    backgroundColor: mColor.lightgray,
  },

  spacing: {
    paddingVertical: 10,
  },

  spacingBottom: {
    paddingBottom: 30,
  },

  hairline: {
    marginVertical: 20,
    height: 5,
    width: '100%',
    backgroundColor: mColor.gray,
  },
});
