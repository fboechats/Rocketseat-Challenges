import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter
  },
  list: {
    marginTop: metrics.baseMargin * 2
  },

  loading: {
    marginTop: metrics.baseMargin * 2
  },

  empty: {
    color: colors.dark,
    marginTop: metrics.baseMargin * 2,
    textAlign: "center"
  },

  error: {
    marginTop: 10,
    color: colors.danger,
    fontWeight: "bold",
    fontSize: 16
  }
});

export default styles;
