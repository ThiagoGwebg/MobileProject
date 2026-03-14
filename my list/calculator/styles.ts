import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        gap: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 10,
    },
    input:{
        borderWidth: 1,
        borderColor: "#aaa",
        borderRadius: 0,
        padding:10,
        backgroundColor: "#f8f8ff"

    },
    box:{
        borderWidth: 1,
        borderColor: "#aaa",
        borderRadius: 8,
        overflow: "hidden"
    },
    resultado: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 700,
        textAlign: "center"
    }  
});