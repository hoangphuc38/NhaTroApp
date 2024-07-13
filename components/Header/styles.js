import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
    taskbar: {
        width: "100%",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#38bdf8"
    },

    text: {
        fontSize: 20,
        fontWeight: "600"
    },

    button: {
        backgroundColor: "white",
        padding: 2,
        borderRadius: 5,
    },
})