import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from "@react-navigation/native-stack"
import {RootStackParamList} from "../App"

// import components

import ProductItem from "../components/ProductItem"
import Separator from '../components/Separator'

// importing data
import {PRODUCTS_LIST} from "../contants"

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">

const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container} >
        <FlatList
            data={PRODUCTS_LIST}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
            <ProductItem 
                product={item}
                //onPress={()=>navigation.navigate('Details',{product:item})}
            />
            )}
            ItemSeparatorComponent={()=><Separator/>}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center',
        padding:10,
        backgroundColor:'#fff'
    }
})