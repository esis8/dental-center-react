export interface State {
  darkMode: boolean;
}

export type Action = {type: 'THEME_MODE'; payload: boolean};