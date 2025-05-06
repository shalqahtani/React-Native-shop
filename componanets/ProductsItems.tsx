import React from "react";
import { Image, Text, View } from "react-native";

const ProductsItems = () => {
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
          Cookies & Beyond
        </Text>
        <Text>Wher cookies manics gathar</Text>
        <Image
          source={{
            uri: "https://cdn.vox-cdn.com/thumbor/BzH9VpFKbcpqhc7FFJP3UboWTZw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23230007/Cookies_with_Tiffany_Photo.jpg",
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

export default ProductsItems;
