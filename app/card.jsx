import React from "react";
import {Text ,Image, View ,StyleSheet } from 'react-native'

function Card(props){
    return (
      <View style={styles.box}>
        <Image style={styles.Images}source={props.Link}/>
        <Text style={styles.Title}>
          Project:
          <Text
            style={{
              color: "red",
            }}
          >
            {props.project}
          </Text>
        </Text>
        <Text style={styles.Title}>
          Description:
          <Text
            style={{
              color: "red",
            }}
          >
            {props.description}
          </Text>
        </Text>
      </View>
    );
}
const styles = StyleSheet.create({
    box:{
        height:200,
        width:300,
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    Title:{
        color:'white',
        fontStyle:'italic'
    },
    Images:{
        height:150,
        width:'100%',
    }
})

export default Card;