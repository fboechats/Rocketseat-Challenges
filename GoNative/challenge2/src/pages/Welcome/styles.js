import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter
  },

  header: {
    flexDirection: "row",
    backgroundColor: colors.white,
    height: 54 + getStatusBarHeight(),
    justifyContent: "space-between",
    alignItems: "center",
    padding: metrics.basePadding
  },

  title: {
    flex: 1,
    textAlign: "center",
    color: colors.darker,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: metrics.baseMargin * 2
  },

  form: {
    padding: metrics.basePadding,
    borderBottomWidth: 1,
    borderBottomColor: colors.light
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },

  input: {
    flex: 1,
    height: 35,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding / 2
  },

  button: {
    marginLeft: metrics.baseMargin * 2
  },

  buttonLoading: {
    marginLeft: metrics.baseMargin * 1.6
  },

  list: {
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
    fontSize: 16,
    textAlign: "center"
  },

  clear: {
    color: colors.danger,
    fontWeight: "bold",
    fontSize: 14
  }
});

export default styles;
