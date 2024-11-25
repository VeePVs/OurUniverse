import { StyleSheet } from "react-native";

const colors = {
    primary_color: '#efe9e7',
    secondary_color: '#ffd8be',
    third_color: '#b8b8ff',
    fourth_color: '#ffeedd',
    background: '#1a1a1a',
    font_color: '#efe9e7',
};

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderWidth: 1,
        padding: 10,
        marginTop: 15,
        position: 'relative',
        borderRadius: 5,
        justifyContent: 'center',
        borderColor: colors.primary_color,
        backgroundColor: colors.background,
    },
    date: {
        position: 'absolute',
        top: -11,
        left: 10,
        backgroundColor: colors.background,
        width: 'auto',
        color: colors.font_color,
        borderRadius: 10,
        padding: 2,
    },
    text: {
        fontSize: 19,
        fontWeight: 700,
        color: colors.primary_color,
    },
    explication: {
        color: colors.font_color,
    },
});
