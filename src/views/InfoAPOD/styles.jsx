import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#1a1a1a',
    },
    image: {
        height: '100%',
        width: '80%',
    },
    containerImage: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        position: 'relative'
    },
    containerTitle: {
        height: 'auto',
        backgroundColor: '#ffeedd',
        justifyContent: 'center',
    },
    title: {
        color: "#4d4d4d",
        fontStyle: 'italic',
        fontSize: 24,
        fontWeight: '800',
        alignSelf: 'center',
        padding: 15
    },
    explanationContainer: {
        backgroundColor: '#1a1a1a',
    },
    date: {
        color: "#efe9e7",
        fontSize: 24,
        paddingTop: 10,
        paddingLeft: 10,
        fontStyle: 'italic',
        fontWeight: '800'
    },
    explanation: {
        color: "#ffeedd",
        fontSize: 16,
        textAlign: 'justify',
        padding: 10,
    },
    copyright: {
        color: "#FFF",
        padding: 10,
    },
    buttonHD: {
        backgroundColor: "#52154e",
        height: 50,
        width: 50,
        zIndex:10,
        borderRadius: 25,
        position: 'absolute',
        justifyContent: 'center',
        left: 0,
        bottom: 0,
        margin: 10,
    },
    buttonHDText: {
        color: '#ffeedd',
        fontWeight: '800',
        fontSize: 16,
        textAlign: 'center'
    }
})