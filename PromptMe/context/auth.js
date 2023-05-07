import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,
        token: "",
    });

    const navigation = useNavigation();

    const token = state && state.token ? state.token : "";
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios.interceptors.response.use(
        async function (response) {
            return response;
        },
        async function (error) {
            let res = error.response;
            if(res.status === 401 && res.config && !res.config._isRetryRequest) {
                await AsyncStorage.removeItem("auth-rn");
                setState({ user: null, token: "" });
                navigation.navigate("StartScreen");
            }
        }
    );

    
    useEffect(() => {
        const loadFromAsyncStorage = async () => {
            let data = await AsyncStorage.getItem("auth-rn");
            const credentials = JSON.parse(data);
            setState({ ...state, user: credentials.user, token: credentials.token });
        };
    });

    return(
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider }