import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
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
    marginRight: metrics.baseMargin
  },

  filter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: metrics.baseMargin * 2,
    marginHorizontal: metrics.baseMargin * 2,
    height: 35,
    borderRadius: metrics.baseRadius * 2,
    backgroundColor: colors.light
  },

  active: {
    color: colors.dark,
    fontSize: 15,
    fontWeight: "bold"
  },

  buttonContainer: {
    alignItems: "center",
    flex: 1
  },

  buttonText: {
    color: colors.regular,
    fontSize: 14
  },

  list: {
    marginTop: metrics.baseMargin * 2
  }
});

export default styles;
