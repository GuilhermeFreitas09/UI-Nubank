import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { MaterialCommunityIcons, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons'


class Barras extends React.Component {
    render () {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                <View style = {styles.colunas}>
                    <View style={styles.box}>
                        <MaterialCommunityIcons name="clover" size={24} color="#FFF" style={{marginLeft: -5, marginTop:-5}} />
                        <Text style={{color: "#FFF", marginLeft: -5, marginTop:-5}}>Pix</Text>
                    </View>
                    <View style={styles.box}>
                        <FontAwesome name="barcode" size={24} color="#FFF" style={{marginLeft: -5, marginTop:-5}} />
                        <Text style={{color: "#FFF", marginLeft: -5, marginTop:-5}}>Pagar</Text>
                    </View>
                    <View style={styles.box}>
                        <FontAwesome5 name="user-friends" size={24} color="#FFF" style={{marginLeft: -5, marginTop:-5}} />
                        <Text style={{color: "#FFF", marginLeft: -5, marginTop:-5}}>Indicar amigos</Text>
                    </View>
                    <View style={styles.box}>
                        <MaterialIcons name="attach-money" size={24} color="#FFF" style={{marginLeft: -5, marginTop:-5}} />
                        <Text style={{color: "#FFF", marginLeft: -5, marginTop:-5}}>Transferir</Text>
                    </View>
                    <View style={styles.box}>
                        <MaterialCommunityIcons name="clover" size={24} color="#FFF" style={{marginLeft: -5, marginTop:-5}} />
                        <Text style={{color: "#FFF", marginLeft: -5, marginTop:-5}}>Pix</Text>
                    </View>
                    <View style={styles.box}>
                        <MaterialCommunityIcons name="clover" size={24} color="#FFF" style={{marginLeft: -5, marginTop:-5}} />
                        <Text style={{color: "#FFF", marginLeft: -5, marginTop:-5}}>Pix</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Barras;

const styles = StyleSheet.create({
    box: {
        height: 95,
        width: 90,
        backgroundColor: "#9824C7",
        borderRadius: 3,
        marginLeft: 8,
        padding: 15,
        justifyContent: 'space-between',
    },
    colunas: {
        flexDirection: 'row',
    },
    scrollView:{
        marginTop: 10,
        backgroundColor: "#8806BF",
        marginLeft: 5,
        marginRight:5,
        marginBottom: 15,
        position: 'absolute', 
        bottom: 0, 
    }
});
