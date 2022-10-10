import { View, Image, StyleSheet, Text } from "react-native";
import { scale } from "react-native-size-matters";

const CockTailPreview = ({ strDrink, strCategory, strDrinkThumb }) => {
  console.log("I am updating");
  return (
    <View style={styles.container}>
      <Image source={{ uri: strDrinkThumb }} style={styles.imageStyle} />
      <Text style={styles.drinkName}>{strDrink}</Text>
      <Text>{strCategory}</Text>
      {/* <Text>
        Hello I am {firstName} {lastName}. I am from {city}. you can mail me at
        {email}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignContent: "center",
    alignItems: "center",
    padding: scale(10),
    margin: scale(10),
    borderColor: "black",
    borderRadius: 2,
  },
  imageStyle: {
    padding: 10,
    margin: 10,
    width: 200,
    height: 200,
  },
  drinkName: {
    fontSize: 20,
    fontWeight: "900",
  },
});

export default CockTailPreview;
