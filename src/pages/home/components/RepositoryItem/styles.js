import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  author: {
    color: colors.regular,
    fontSize: 14,
  },

  avatar: {
    height: 50,
    width: 50,
  },

  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    marginBottom: metrics.baseMargin,
    padding: metrics.basePadding,
  },

  icon: {
    color: colors.light,
  },

  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: metrics.baseMargin,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
});

export default styles;
