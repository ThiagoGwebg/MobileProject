import React from "react";

import {
    View,
    Text,
    Image,
    TextInput,
} from "react-native";
import { style } from "./styles"
import Logo from "../../assets/logo_etec.png";



export default function Login() {
    return (
        <View style={style.container} >
            <View style={style.boxTop} >
                <Image
                    source={Logo}
                    resizeMode="contain"
                    style={style.logo}
                />
                <Text style={style.text}>Bem vindo de Volta</Text>
            </View>

            <View style={style.boxMid} >
                <Text>ENDEREÇO DE E-MAIL</Text>
                <TextInput style={style.titleinput} />
                <Text>SENHA</Text>
                <TextInput style={style.titleinput} />
            </View>

            <View style={style.boxBottom} >
                <Text>Bottom</Text>
            </View>


        </View>
    );

}