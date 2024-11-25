import { StyleSheet } from "react-native";

const colors = {
    primary_color: '#9381ff',
    secondary_color: '#efe9e7',
    third_color: '#f9cff2',
    fourth_color: '#ffeedd',
    background: '#1a1a1a',
    font_color: '#4d4d4d',
};

const styles = StyleSheet.create({
    titleContainer: {
        height: 60,
        backgroundColor: '#52154e',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: '#FFF',
        paddingLeft: 20
    },
    searchButton: {
        height: 50,
        backgroundColor: colors.third_color,
        justifyContent: 'center',
    },
    searchButtonText: {
        textAlign: 'center'
    },
    datePickerContainer: {
        alignItems: 'center',
        position: 'absolute',
        zIndex: 20,
        top: 200,
        alignSelf: 'center',
    },
    datePicker: {
        width: 330,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        shadowRadius: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 0 },
      },
      dateTextContainer: {
        backgroundColor: '',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    dateButton: {
        height:40,
        backgroundColor: colors.secondary_color,
        justifyContent: 'center',
        marginBottom: 10,
    },
    dateButtonText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight:600,
        color: colors.font_color
    },
    APODList: {
        position: 'relative',
        height: '100%',
        backgroundColor: colors.background,
    },
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        height: '100%'
    },
    loadingText: {
        color: '#FFF',
        marginTop: 10,
        fontSize: 18,
    },
})

export default styles;
