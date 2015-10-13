/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict'

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} = React;

class TabBarDemo extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      selectedTab: 'history'
    }
  }
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item 
          title="history"
          selected={this.state.selectedTab === 'history'}
          systemIcon="history"
          onPress={() => {
            this.setState({
              selectedTab: 'history'
            })
          }}>
          <View style={styles.tabContent}>
            <Text style={styles.tabText}> Tab one </Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item 
          title="bookmarks"
          selected={this.state.selectedTab === 'bookmarks'}
          systemIcon="bookmarks"
          onPress={() => {
            this.setState({
              selectedTab: 'bookmarks'
            })
          }}>
          <View style={styles.tabContent}>
            <Text style={styles.tabText}> Tab two </Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    margin: 50,
    fontSize: 45
  }
});

AppRegistry.registerComponent('TabBarDemo', () => TabBarDemo);
