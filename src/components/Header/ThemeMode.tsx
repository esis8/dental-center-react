import { AppContext } from "../../App";
import { useState, useContext, useEffect } from "react";
import styles from "../../styles/Header.module.scss";
import { SUN, MOON, GEAR } from "../../utils/images";

export default function ThemeMode() {

  const [theme, setTheme] = useState<string>('');
  const [icon, setIcon] = useState<string>('');
  const [isShow, setIsShow] = useState<boolean>(false);

  const appContext = useContext(AppContext);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const { dispatch } = appContext ?? { dispatch: () => {} }

  useEffect(() => {
    const themeMode = localStorage.getItem('themeMode')
    if(themeMode){
      const themeModeObj = JSON.parse(themeMode)
      setTheme(themeModeObj.theme) 
      switch(theme){
        case 'light':
          setIcon(SUN)
          return;
        case 'dark':
          setIcon(MOON)
          return;
        case 'system':
          setIcon(GEAR)
          return;
        default:
          setIcon(SUN)
          return;
      }  
    }
  }, [theme])

  const handleClickThemeMode = () => {
    isShow ? setIsShow(false) : setIsShow(true)
  }


  const handleThemeChange = (newTheme: string) => {
    let theme, dark;
    if (newTheme === "light") {
      dispatch({type: 'THEME_MODE', payload: false})
        theme = 'light';
        dark = false;
    } else if (newTheme === "dark") {
      dispatch({type: 'THEME_MODE', payload: true})
        theme = 'dark';
        dark = true;
    } else {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      dispatch({type: 'THEME_MODE', payload: mediaQuery.matches})
      theme = 'system';
      dark = mediaQuery.matches;
    }
    const themeMode = {theme, dark}
    setTheme(theme)
    localStorage.setItem('themeMode', JSON.stringify(themeMode))
    setIsShow(false)
  };


  return (
    <div className={styles.theme}>
      <div className={styles.themeIcon} onClick={handleClickThemeMode}>
        <svg width="20" height="20" id='icon'>
          <use href={icon}></use>
        </svg>
      </div>
      {
        isShow && 
        <div className={styles.themeOptions}>
        <div onClick={() => handleThemeChange("light")} className={`${styles.option} ${theme === "light" ? `${styles.active}` : ""}`}>
          <svg width="20" height="20" id='icon'>
            <use href={SUN}></use>
          </svg>
          <p>Light</p>
        </div>
        <div onClick={() => handleThemeChange("dark")} className={`${styles.option} ${theme === "dark" ? `${styles.active}` : ""}`}>
          <svg width="20" height="20" id='icon'>
            <use href={MOON}></use>
          </svg>
          <p>Dark</p>
        </div>
        <div onClick={() => handleThemeChange("system")} className={`${styles.option} ${theme === "system" ? `${styles.active}` : ""}`}>
          <svg width="20" height="20" id='icon'>
            <use href={GEAR}></use>
          </svg>
          <p>System</p>
        </div>
        
      </div>
      }

    </div>
  );

}