import React from "react";
import {
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Jadwal = [
  {
    id: "1",
    departureCity: "Jakarta",
    arrivalCity: "Seoul",
    airline: "EVA Air",
    departureDate: "17 Mar 2023, 14:20",
    arrivalDate: "18 Mar 2023, 10:20",
  },
  {
    id: "2",
    departureCity: "Jakarta",
    arrivalCity: "Seoul",
    airline: "EVA Air",
    departureDate: "17 Mar 2023, 14:20",
    arrivalDate: "18 Mar 2023, 18:45",
  },
  {
    id: "3",
    departureCity: "Jakarta",
    arrivalCity: "Seoul",
    airline: "Royal Airlines",
    departureDate: "17 Mar 2023, 13:15",
    arrivalDate: "18 Mar 2023, 21:45",
  },
  {
    id: "4",
    departureCity: "Jakarta",
    arrivalCity: "Seoul",
    airline: "Vietnam Airlines",
    departureDate: "17 Mar 2023, 14:40",
    arrivalDate: "18 Mar 2023, 06.30",
  },
  {
    id: "5",
    departureCity: "Jakarta",
    arrivalCity: "Seoul",
    airline: "Garuda Airlines",
    departureDate: "17 Mar 2023, 23:25",
    arrivalDate: "18 Mar 2023, 08.30",
  },
  {
    id: "6",
    departureCity: "Jakarta",
    arrivalCity: "Seoul",
    airline: "Asiana Airlines",
    departureDate: "17 Mar 2023, 22:30",
    arrivalDate: "18 Mar 2023, 07.40",
  },
];

const MainScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>
        {item.departureCity} - {item.arrivalCity}
      </Text>
      <View style={styles.detailContainer}>
        <View style={styles.airlineContainer}>
          <FontAwesome name="plane" size={28} color="black" />
          <Text style={styles.airline}>{item.airline}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            <FontAwesome5 name="plane-departure" size={15} color="black" />
            {item.departureDate}
          </Text>
          <Text style={styles.date}>
            <FontAwesome5 name="plane-arrival" size={15} color="black" />
            {item.arrivalDate}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.pop()}
          >
            <AntDesign name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Healing Kuy</Text>
          <Feather name="user" size={30} color="black" />
        </View>
        <Text style={styles.subTitle}>Hasil Pencarian Penerbangan</Text>
      </View>
      <FlatList
        data={Jadwal}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.copyright}>
        Copyright Noviana Gresita Br. Perangin-Angin - 120140239
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf2fb",
    marginTop: 20,
  },
  header: {
    width: "100%",
    backgroundColor: "#edf2fb",
    padding: 20,
    marginBottom: 10,
  },
  title: {
    color: "black",
    fontSize: 30,
  },
  subTitle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#d7e3fc",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flex: 1,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  airlineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    alignItems: "space-between",
  },
  airline: {
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  date: {
    color: "#black",
  },
  copyright: {
    color: "#00203FFF",
    marginBottom: 5,
    padding: 10,
    marginTop: 5,
    textAlign: "center",
  },
});

export default MainScreen;