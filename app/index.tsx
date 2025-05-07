import Menu from "@/componanets/Menu";
import ProductsItems from "@/componanets/ProductsItems";
import { ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        <ProductsItems />
        <Menu />
      </ScrollView>
    </View>
  );
}
