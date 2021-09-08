import { StyleSheet } from "react-native";
import { RWidth, RHeight, RFSize } from "easy-responsive-dimensions";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
  },
  nextButton: {
    backgroundColor: "black",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 10,
    bottom: 20,
    right: 20,
  },
  textStyle: {
    color: "white",
  },
  backButton: {
    backgroundColor: "gray",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 10,
    bottom: 20,
    left: 20,
  },
  componentStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  componentImage: {
    resizeMode: "contain",
    width: RWidth(50),
    height: RHeight(40),
    paddingVertical: RHeight(5),
  },
  componentText: {
    fontSize: RFSize(10),
    textAlign: "center",
    color: "grey",
  },
  indicatorStyle: {
    width: RWidth(2),
    height: RWidth(2),
    borderRadius: RWidth(2),
    backgroundColor: "grey",
    marginHorizontal: RWidth(0.5),
  },
  selectedIndicatorStyle: {
    width: RWidth(4),
    height: RWidth(4),
    borderRadius: RWidth(4),
    backgroundColor: "black",
    marginHorizontal: RWidth(0.5),
  },
  indicatorRowStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: RHeight(2),
    alignSelf: "center",
  },
});

export default styles;
