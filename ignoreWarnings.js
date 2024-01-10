import { LogBox } from "react-native";

if (__DEV__) {
    const ignoreWarns = ["In React 18, SSRProvider is not necessary and is a noop.","Each child in a list "];

    const warn = console.warn;
    console.warn = (...arg) => {
        for(const warning of ignoreWarns) {
            if (arg[0].startsWith(warning)) {
                return;
            }
        }
        warn(...arg);
    };
    LogBox.ignoreLogs(ignoreWarns);
}