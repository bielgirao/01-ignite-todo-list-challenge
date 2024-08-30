import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { defaultTheme } from "./styles/themes/default.ts";
import { GlobalStyle } from "./styles/global.ts";

function App() {
    return (
        <ThemeProvider theme={ defaultTheme } >
            <Header />
            <Home />
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
