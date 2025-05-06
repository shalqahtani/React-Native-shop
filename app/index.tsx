import ProductsItems from "@/componanets/ProductsItems";
import shops from "@/data/Products";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <ProductsItems />
      <View style={{ flexDirection: "row", padding: 10 }}>
        <View style={{ paddingRight: 10 }}>
          <Text>{shops[0].name}</Text>
          <Text>{shops[0].price}</Text>
          <Image
            source={{ uri: shops[0].image }}
            style={{
              width: 100,
              height: 150,
              borderRadius: 10,
            }}
          />
        </View>
        <View>
          <Text>{shops[1].name}</Text>
          <Text>{shops[1].price}</Text>
          <Image
            source={{ uri: shops[1].image }}
            style={{
              width: 100,
              height: 150,
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
}
