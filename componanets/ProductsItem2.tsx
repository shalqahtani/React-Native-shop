import React from "react";
import { Image, Text, View } from "react-native";
interface shop {
  name: string;
  price: string;
  image: string;
}
const ProductsItems2 = ({ name, price, image }: shop) => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
        <Text>{price}</Text>
        <Image
          source={{
            uri: image,
          }}
          style={{
            height: 150,
            width: 100,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
};

export default ProductsItems2;
