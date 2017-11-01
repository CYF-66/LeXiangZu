'use strict'
import React, {Component} from 'react'
import {View, WebView,StyleSheet} from 'react-native'
import NavigationBar from 'react-native-navigationbar'
import Common from '../util/constants';
export default class WebViewPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    backIconHidden={false}
                    barTintColor={Common.colors.yellow3}
                    barStyle={styles.navbar}
                    title={this.props.title}
                    titleColor={Common.colors.white}
                    backColor={Common.colors.white}
                    backFunc={() => {
                        this.props.navigator.pop()
                    }}
                />
                <WebView
                    source={{uri: this.props.url}}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Common.colors.gray6,
    },
});
