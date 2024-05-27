import { StyleSheet, View, Text, Dimensions } from "react-native";
import PagerView from "react-native-pager-view";

const ITEM_WIDTH = Dimensions.get("window").width * 0.7;
const ITEM_HEIGHT = Dimensions.get("window").height * 0.3;

const MyPager = () => {
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
          <Text>First Item</Text>
          <Text>Swipe</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Second Item</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third Item</Text>
        </View>
      </PagerView>
    </View>
  );
};

export default MyPager;

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignContent: "center",
    backgroundColor: "#fff",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "skyblue",
    borderRadius: 10,
    margin: 5,
    borderColor: "black",
  },
});
