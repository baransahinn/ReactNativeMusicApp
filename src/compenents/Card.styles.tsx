import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container : {
        padding:10,
        flexDirection:'row'
    },
    image :{
        width:100,
        height:100,
        borderRadius:50,
    },
    innerContainer:{
        padding:10,
        flex:1,
        justifyContent:'center',
    },
    title:{
        fontWeight:'bold',
        fontSize:27,
    },
    contentContainer:{
        flexDirection:'row',
    },

    infoContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    year:{
        fontSize:12,
        marginLeft:10,
        color:'gray',
        fontWeight:'bold',
    },
    soldoutContainer:{
        borderWidth:1,
        borderColor:'red', 
        padding:5,
        borderRadius:5

    },
    soldoutTitle:{
        color:'red',
        fontSize:12,

    },
    


})