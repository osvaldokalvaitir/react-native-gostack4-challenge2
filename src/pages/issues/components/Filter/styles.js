import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  activeFilter: {
    color: colors.dark,
    fontSize: 15,
    fontWeight: 'bold',
  },

  buttonContainer: {
    alignItems: 'center',
    flex: 1,
  },

  buttonText: {
    color: colors.regular,
    fontSize: 14,
  },

  container: {
    backgroundColor: colors.light,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    marginBottom: metrics.basePadding / 2,
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.basePadding,
    padding: metrics.basePadding / 2,
  },
});

export default styles;