import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import logo from 'C:/Users/Regis/meudeus/assets/rewards.png'



class Meio extends React.Component {
    render () {
        return (
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <View style={styles.primeira}>
                    <View style={{flexDirection: "row"}}>
                        <AntDesign name="creditcard" size={24} color="#A2A2A2" style={{marginTop:10, marginLeft:10}} />
                        <Text style={styles.textoTopo}>Cartão de Crédito</Text>
                    </View>
                    <View style={{marginBottom: 2}}>
                        <Text style={{fontSize: 13, marginLeft: 10, color: "#666"}}>Fatura atual</Text>
                        <Text style={{fontSize: 25, marginLeft: 10, marginTop:8, fontWeight: "bold", color:"#29A7D9"}}>R$ 280,40</Text>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize: 13, marginLeft: 10, marginTop:3}}>Limite disponível</Text>
                            <Text style={{fontSize: 13, marginLeft: 10, marginTop:3, fontWeight:"bold", color:"green"}}>R$ 342.783,82</Text>
                        </View>
                    </View>
                </View >

                <View style={styles.segunda}>
                    <View style={{flexDirection: "row"}}>
                        <FontAwesome5 name="coins" size={24} color="#A2A2A2" style={{marginTop:10, marginLeft:10}} />
                        <Text style={styles.textoTopo}>Cartão de Crédito</Text>
                    </View>
                    <View style={{marginBottom: 5}}>
                        <Text style={{fontSize: 13, marginLeft: 10, color: "#666"}}>Saldo disponível</Text>
                        <Text style={{fontSize: 25, marginLeft: 10, marginTop:8, fontWeight: "bold"}}>R$ 3.227.430,66</Text>
                    </View>
                </View>

                <View style={styles.terceira}>
                    <View style={{flexDirection: "row"}}>
                        <FontAwesome5 name="hand-holding-usd" size={24} color="#A2A2A2" style={{marginTop:10, marginLeft:10}} />
                        <Text style={styles.textoTopo}>Empréstimo</Text>
                    </View>
                    <View style={{marginBottom:10}}>
                        <Text style={{fontSize: 13, marginLeft: 10, color: "#000"}}>Valor disponível de até</Text>
                        <Text style={{fontSize: 13, marginLeft: 10, marginTop:0, fontWeight: "bold"}}>R$ 780.000,00</Text>
                        <View style={styles.botao}>
                            <Text style={{fontSize:13, fontWeight:"bold", color:"#9824C7"}}>SIMULAR EMPRÉSTIMO</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.quarta}>
                    <View style={{flexDirection: "row"}}>
                        <Image source={logo} style={{ width: 36, height: 36, marginTop:5, marginLeft:10 }} /> 
                        <Text style={styles.textoTopoRewards}>Rewards</Text>
                    </View>
                    <View style={{marginBottom:10}}>
                        <Text style={{fontSize: 13, marginLeft: 10, marginTop:0}}>Apague compras com pontos que nunca expiram.</Text>
                        <View style={styles.botao}>
                            <Text style={{fontSize:13, fontWeight:"bold", color:"#9824C7"}}>CONHECER</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Meio;

const styles = StyleSheet.create({
    primeira:{
        height: 163,
        width: 360,
        backgroundColor: "#FFF",
        borderRadius: 3,
        marginBottom: 16,
        padding: 15,
        justifyContent: 'space-between',
    },
    segunda:{
        height: 145,
        width: 360,
        backgroundColor: "#FFF",
        borderRadius: 3,
        marginBottom: 16,
        padding: 15,
        justifyContent: 'space-between',
    },
    terceira:{
        height: 206,
        width: 360,
        backgroundColor: "#FFF",
        borderRadius: 3,
        marginBottom: 16,
        padding: 15,
        justifyContent: 'space-between',
    },
    quarta:{
        height: 201,
        width: 360,
        backgroundColor: "#FFF",
        borderRadius: 3,
        marginBottom: 10,
        padding: 15,
        justifyContent: 'space-between',
    },
    textoTopo: {
        color: "#666",
        marginTop: 12,
        marginLeft: 20
    },
    botao:{
        backgroundColor: "#FFF",
        borderWidth: 0.5,
        borderColor: "#9824C7",
        borderRadius: 5,
        height: 40,
        width:  200,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 10,
    },
    textoTopoRewards: {
        color: "#9824C7",
        marginTop: 12,
        marginLeft: 15,
        fontSize: 22
    },
});
