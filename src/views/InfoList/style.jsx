import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    datePickerContainer: {
        alignItems: 'center',
        position: 'absolute',
        zIndex: 20,
        top: 140,
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
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    dateButton: {
        height:40,
        backgroundColor: '#dd5',
        justifyContent: 'center',
        marginBottom: 10,
    },
    dateButtonText: {
        textAlign: 'center',
    },
    APODList: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

export default styles;
