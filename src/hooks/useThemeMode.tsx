import { Action } from "../types/reducer";
import { useEffect } from "react";
 
const useThemeMode = (dispatch: React.Dispatch<Action>, darkMode: boolean) => {
  useEffect(() => {
    const body = document.body;
    const themeMode = localStorage.getItem('themeMode');
    if (themeMode) {
      const theme = JSON.parse(themeMode);
      if (theme.dark) {
        dispatch({ type: "THEME_MODE", payload: true });
        body.classList.add("dark");
      } else {
        dispatch({ type: "THEME_MODE", payload: false });
        body.classList.remove("dark");
      }
    } else{
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      dispatch({ type: "THEME_MODE", payload: mediaQuery.matches });
      const theme = { theme: "system", dark: mediaQuery.matches };
      localStorage.setItem("themeMode", JSON.stringify(theme));
    }
  }, [darkMode, dispatch])
  
}

export default useThemeMode;