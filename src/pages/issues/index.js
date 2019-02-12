import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, StatusBar, FlatList, ActivityIndicator, Text,
} from 'react-native';

import api from '~/services/api';

import IssueItem from './components/IssueItem';
import Filter from './components/Filter';

import styles from './styles';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  });

  state = {
    activeFilter: 'all',
    issues: [],
    loading: true,
    error: '',
    refreshing: false,
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const { navigation } = this.props;
    const { activeFilter } = this.state;

    try {
      const { data } = await api.get(`/repos/${navigation.getParam('full_name')}/issues?state=${activeFilter}`);

      this.setState({ issues: data });
    } catch (_err) {
      this.setState({ error: 'Erro ao recuperar as Issues' });
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  renderListItem = ({ item }) => <IssueItem issue={item} />;

  renderList = () => {
    const { issues, refreshing } = this.state;

    return !issues.length ? (
      <Text style={styles.empty}>Nenhuma issue encontrada</Text>
    ) : (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssues}
        refreshing={refreshing}
        style={styles.listContainer}
      />
    );
  };

  changeFilter = async (value) => {
    this.setState({ activeFilter: value });

    const { navigation } = this.props;

    try {
      const { data } = await api.get(`/repos/${navigation.getParam('full_name')}/issues?state=${value}`);

      this.setState({ issues: data });
    } catch (_err) {
      this.setState({ error: 'Erro ao recuperar as Issues' });
    }
  };

  render() {
    const { loading, error, activeFilter } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {!!error && <Text style={styles.error}>{error}</Text>}
        <Filter activeFilter={activeFilter} changeFilter={this.changeFilter} />
        {loading ? <ActivityIndicator size="large" style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
