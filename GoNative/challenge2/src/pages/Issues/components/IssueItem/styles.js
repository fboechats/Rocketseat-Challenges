import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },

  info: {
    flex: 1,
    marginHorizontal: metrics.baseMargin
  },

  user: {
    marginTop: 3,
    color: colors.regular,
    fontSize: 14
  },

  image: {
    width: 50,
    height: 50
  },

  icon: {
    color: colors.light
  }
});

export default styles;
