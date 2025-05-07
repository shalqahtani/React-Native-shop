import products from "@/data/Products";
import React from "react";
import { StyleSheet } from "react-native";
import ProductsItems2 from "./ProductsItem2";

const Menu = () => {
  return (
    <view>
      {products.map((product) => {
        return (
          <ProductsItems2
            name={product.name}
            price={product.price}
            image={product.image}
          />
        );
      })}

      {/* <View style={{ padding: 10 }}>
        <View style={{ flexDirection: "row" }}>
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
        <View style={{ flexDirection: "row" }}>
          <View style={{ paddingRight: 50 }}>
            <Text>{shops[2].name}</Text>
            <Text>{shops[2].price}</Text>
            <Image
              source={{ uri: shops[2].image }}
              style={{
                width: 100,
                height: 150,
                borderRadius: 10,
              }}
            />
          </View>
          <View>
            <Text>{shops[3].name}</Text>
            <Text>{shops[3].price}</Text>
            <Image
              source={{ uri: shops[3].image }}
              style={{
                width: 100,
                height: 150,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
      </View> */}
    </view>
  );
};

export default Menu;

const styles = StyleSheet.create({});
