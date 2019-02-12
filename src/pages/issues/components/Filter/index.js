import React from 'react';
import PropTypes from 'prop-types';

import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Filter = ({ activeFilter, changeFilter }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.buttonContainer} onPress={() => changeFilter('all')}>
      <Text style={[styles.buttonText, activeFilter === 'all' && styles.activeFilter]}>Todas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonContainer} onPress={() => changeFilter('open')}>
      <Text style={[styles.buttonText, activeFilter === 'open' && styles.activeFilter]}>
        Abertas
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonContainer} onPress={() => changeFilter('closed')}>
      <Text style={[styles.buttonText, activeFilter === 'closed' && styles.activeFilter]}>
        Fechadas
      </Text>
    </TouchableOpacity>
  </View>
);

Filter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
