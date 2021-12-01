import 'styled-components/native';

declare module 'styled-components/native' {
    export interface DefaultTheme {
        maxWidth:string,
        maxWidthPercent:string,
        colors: {
            background: string,
            card: string,
            primaryColor: string,
            secondaryColor: string,
            primaryTextColor: string,
            secondaryTextColor: string,
        };
    }
}
