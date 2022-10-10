import { useState } from "react";
import { scale } from "react-native-size-matters";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import fetchCocktail from "./fetchCocktail.service";
import CockTailPreview from "./CockTailPreview";

const App = () => {
  let arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const [data, setData] = useState([]);
  return (
    <ScrollView style={styles.outContainer}>
      <View style={styles.container}>
        <Button
          onPress={() =>
            fetchCocktail(arr[Math.floor(Math.random() * 26)]).then((res) =>
              setData(res)
            )
          }
          title="fetch cocktail list"
        />
      </View>
      {data !== [] &&
        data.map((item, index) => (
          <CockTailPreview
            key={index}
            strDrink={item.strDrink}
            strCategory={item.strCategory}
            strDrinkThumb={item.strDrinkThumb}
          />
        ))}
      {/* <Text>{JSON.stringify(data)}</Text> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outContainer: {
    padding: scale(10),
    top: scale(20),
    flex: 4,
    color: "black",
    backgroundColor: "#fff",
  },
  container: {
    flex: 2,
    color: "black",
    backgroundColor: "#fff",
  },
});

export default App;
