import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

import ModalDropdown from '../components/ModalDropdown';

const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];
const DEMO_OPTIONS_2 = [
    {"name": "Rex", "age": 30},
    {"name": "Mary", "age": 25},
    {"name": "John", "age": 41},
    {"name": "Jim", "age": 22},
    {"name": "Susan", "age": 52},
    {"name": "Brent", "age": 33},
    {"name": "Alex", "age": 16},
    {"name": "Ian", "age": 20},
    {"name": "Phil", "age": 24},
];

export default class Demo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown_4_options: null,
            dropdown_4_defaultValue: 'loading...',
            dropdown_6_icon_heart: true,
        };
    }

    render() {
        let dropdown_6_icon = this.state.dropdown_6_icon_heart ? require('../images/heart.png') : require('../images/flower.png');
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.cell}>
                        <ModalDropdown style={styles.dropdown_1}
                                       options={DEMO_OPTIONS_1}
                        />
                        {/*<ModalDropdown style={styles.dropdown_6}*/}
                                       {/*options={DEMO_OPTIONS_1}*/}
                                       {/*onSelect={(idx, value) => this._dropdown_6_onSelect(idx, value)}>*/}
                            {/*<Image style={styles.dropdown_6_image}*/}
                                   {/*source={dropdown_6_icon}*/}
                            {/*/>*/}
                        {/*</ModalDropdown>*/}
                    </View>
                    <View style={styles.cell}>
                        <ModalDropdown style={styles.dropdown_2}
                                       textStyle={styles.dropdown_2_text}
                                       dropdownStyle={styles.dropdown_2_dropdown}
                                       options={DEMO_OPTIONS_2}
                                       renderRow={this._dropdown_2_renderRow.bind(this)}
                                       renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                        />
                    </View>
                </View>
            </View>
        );
    }

    _dropdown_2_renderRow(rowData, rowID, highlighted) {
        let icon = highlighted ? require('../images/heart.png') : require('../images/flower.png');
        let evenRow = rowID % 2;
        return (
            <TouchableHighlight underlayColor='cornflowerblue'>
                <View style={[styles.dropdown_2_row, {backgroundColor: evenRow ? 'lemonchiffon' : 'white'}]}>
                    <Image style={styles.dropdown_2_image}
                           mode='stretch'
                           source={icon}
                    />
                    <Text style={[styles.dropdown_2_row_text, highlighted && {color: 'mediumaquamarine'}]}>
                        {`${rowData.name} (${rowData.age})`}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        if (rowID == DEMO_OPTIONS_1.length - 1) return;
        let key = `spr_${rowID}`;
        return (<View style={styles.dropdown_2_separator}
                      key={key}
        />);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
    },
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        height: 500,
        paddingVertical: 100,
        paddingLeft: 20,
    },
    textButton: {
        color: 'deepskyblue',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'deepskyblue',
        margin: 2,
    },

    dropdown_1: {
        flex: 1,
        top: 32,
        left: 8,
    },
    dropdown_2: {
        alignSelf: 'flex-end',
        width: 150,
        top: 32,
        right: 8,
        borderWidth: 0,
        borderRadius: 3,
        backgroundColor: 'cornflowerblue',
    },
    dropdown_2_text: {
        marginVertical: 10,
        marginHorizontal: 6,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    dropdown_2_dropdown: {
        width: 150,
        height: 300,
        borderColor: 'cornflowerblue',
        borderWidth: 2,
        borderRadius: 3,
    },
    dropdown_2_row: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    dropdown_2_image: {
        marginLeft: 4,
        width: 30,
        height: 30,
    },
    dropdown_2_row_text: {
        marginHorizontal: 4,
        fontSize: 16,
        color: 'navy',
        textAlignVertical: 'center',
    },
    dropdown_2_separator: {
        height: 1,
        backgroundColor: 'cornflowerblue',
    },
    dropdown_3: {
        width: 150,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 1,
    },
    dropdown_3_dropdownTextStyle: {
        backgroundColor: '#000',
        color: '#fff'
    },
    dropdown_3_dropdownTextHighlightStyle: {
        backgroundColor: '#fff',
        color: '#000'
    },
    dropdown_4: {
        margin: 8,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 1,
    },
    dropdown_4_dropdown: {
        width: 100,
    },
    dropdown_5: {
        margin: 8,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 1,
    },
    dropdown_6: {
        flex: 1,
        left: 8,
    },
    dropdown_6_image: {
        width: 40,
        height: 40,
    },
});