import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TextComponent, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "lightblue",
        flex: 10,
        padding: 12,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: 500,
          backgroundColor: "white",
          borderRadius: 24,

          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            flex: 5,
            backgroundColor: "white",
            overflow: "hidden",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              flex: 1,
              backgroundColor: "white",
            }}
          >
            <Image
              source={{
                uri: "https://t4.ftcdn.net/jpg/00/42/18/39/360_F_42183969_PGAJzV6PznLlXLSXpRHo5qUeBTdgpVg5.jpg",
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View
            style={{
              width: "100%",
              height: "100%",
              flex: 1,
              backgroundColor: "white",
              borderBottomColor: "lightgray",
              borderBottomWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Salman Alnajdi
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "gray" }}>
                29
              </Text>
            </View>
            <Text style={{ color: "gray" }}>Kuwait, Bayan</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "white",
              position: "absolute",
              borderRadius: 50,
              overflow: "hidden",
            }}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJIwASCJpICHRbFDOQXQ2S-pmikc8vs6K2GA&s",
              }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </View>
        <View
          style={{ flex: 1.5, backgroundColor: "white", flexDirection: "row" }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>10K</Text>
            <Text style={{ color: "gray" }}>Followers</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>240K</Text>
            <Text style={{ color: "gray" }}>Likes</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>2K</Text>
            <Text style={{ color: "gray" }}>Photos</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
