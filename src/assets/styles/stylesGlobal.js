import { StyleSheet } from 'react-native'

export const stylesGlobal = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : 'white'
    },
    input:{
        marginHorizontal: 15,
        marginBottom: 10,
        padding: 10,
        color: '#000',
        borderRadius:10,
        borderColor:"rgba(78,78,78, 0.5)",
        borderWidth:1
    },
    inputActive:{
        marginHorizontal: 15,
        marginBottom: 10,
        padding: 10,
        color: '#000',
        borderRadius:10,
        borderColor:"#00D163",
        borderWidth:1
    },
    title:{
        marginHorizontal:15,
        marginVertical:10,
        fontSize:25,
        fontWeight:"bold"
    },
})