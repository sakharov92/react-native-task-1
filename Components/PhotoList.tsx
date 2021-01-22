import React, {useEffect, useState} from "react";
import {ListItem} from "../Interfaces/ILIstItem";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';

const Photos: React.FC = () => {
    const url = "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=14";
    const [dataList, setDataList] = useState<ListItem[]>([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json: []) => {
                setDataList(json);
            });
    }, []);

    const loadMorePhotos = () => {
        fetch(url)
            .then((response) => response.json())
            .then((json: []) => {
                let newDataList = [...dataList, ...json]
                setDataList(newDataList);
            });
    }

    const openPicture = (eventTarget: EventTarget) => {
        console.log("Event target shuold've been appeared here  O_o")
    }

    return(
        <View style={styles.container}>
            {/*<Text style={styles.title}>Photo List</Text>*/}
            {dataList &&
            <FlatList
                onEndReached={loadMorePhotos}
                numColumns={2}
                contentContainerStyle={styles.list}
                data={dataList}
                keyExtractor={(item, index) => new Date().toString() + index}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={(event)=>openPicture(event)}>
                            <Image source={{uri: item.url}} style={styles.image}/>
                        </TouchableOpacity>
                    )
                }
                }
            />}
        </View>
    )
}

export const PhotosList: React.FC = () => {
    const Stack = createStackNavigator();
       return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Photo List"
                    component={Photos}
                    // options={{title: 'Welcome'}}
                />
                {/*<Stack.Screen name="Profile" component={ProfileScreen}/>*/}
            </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: '#fff',

    },
    image: {
        width: 170,
        height: 100,
        margin: 5,
    },
    list: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    title: {
        textAlign: "center",
        fontSize: 25,
        marginTop: 20,
        marginBottom: 10
    }
});
