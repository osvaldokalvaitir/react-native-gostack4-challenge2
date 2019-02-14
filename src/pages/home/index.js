import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, StatusBar, TextInput, FlatList, ActivityIndicator, Text, AsyncStorage, TouchableOpacity,
} from 'react-native';

import api from '~/services/api';

import Icon from 'react-native-vector-icons/FontAwesome';

import RepositoryItem from './components/RepositoryItem';

import styles from './styles';
import { colors } from '~/styles';

export default class Home extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    repositoryInput: '',
    repositories: [],
    loadingList: true,
    loadingButton: false,
    error: '',
    refreshing: false,
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const repositories = JSON.parse(await AsyncStorage.getItem('@GitIssues:repositories'));

    this.setState({ repositories: repositories || [], loadingList: false, refreshing: false });
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  renderList = () => {
    const { repositories, refreshing } = this.state;

    return !repositories.length ? (
      <Text style={styles.empty}>Nenhum repositório adicionado</Text>
    ) : (
      <View style={styles.listContainer}>
        <FlatList
          data={repositories}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          onRefresh={this.loadRepositories}
          refreshing={refreshing}
          // style={styles.listContainer} O style dentro no componente não está funcionando
        />
      </View>
    );
  };

  addRepository = async () => {
    const { repositoryInput, repositories, loadingList } = this.state;

    if (loadingList) return;

    this.setState({ loadingButton: true });

    if (!repositoryInput) {
      this.setState({ error: 'Preencha o repositório para continuar', loadingButton: false });
      return;
    }

    if (repositories.find(repository => repository.full_name === repositoryInput)) {
      this.setState({ error: 'Repositório duplicado', loadingButton: false });
      return;
    }

    try {
      const { data } = await api.get(`/repos/${repositoryInput}`);

      this.setState({ repositoryInput: '', error: '', repositories: [...repositories, data] });

      await AsyncStorage.setItem(
        '@GitIssues:repositories',
        JSON.stringify([...repositories, data]),
      );
    } catch (_err) {
      this.setState({ repositoryInput: '', error: 'Repositório inexistente' });
    } finally {
      this.setState({ loadingButton: false });
    }
  };

  render() {
    const {
      repositoryInput, loadingList, loadingButton, error,
    } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Adicionar novo repositório"
              style={styles.formInput}
              placeholderTextColor={styles.placeholderColor.color}
              value={repositoryInput}
              onChangeText={text => this.setState({ repositoryInput: text })}
            />
            <TouchableOpacity onPress={this.addRepository}>
              {loadingButton ? (
                <ActivityIndicator size="small" style={styles.formLoading} />
              ) : (
                <Icon name="plus" size={20} style={styles.formIcon} />
              )}
            </TouchableOpacity>
          </View>
          {!!error && <Text style={styles.error}>{error}</Text>}
        </View>
        {loadingList ? (
          <ActivityIndicator size="large" style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
