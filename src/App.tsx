import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { styled } from "nativewind";
const StyledView = styled(View);
const StyledText = styled(Text);
export default function App() {
    const [text, setText] = React.useState("Hello, world! 🌍");
    return (
        <StyledView className="flex-items-center justify-center">
            <StyledText className="text-slate-800">
                Try editing me! 🎉
            </StyledText>
        </StyledView>
    );
}
