import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    color: string;
    border: string;
    postBox: string;
    postBoxBorder: string;
    codeBackground: string;
  }
}

export enum ThemeMode {
  LIGHT,
  DARK
}

export const light = {
  background: "#ffffff",
  color: "#000000",
  border: "#d8d8d8",
  postBox: "#fcfcff",
  postBoxBorder: "#d4daff",
  codeBackground: "#eeeeee",
};

export const dark = {
  background: "#202224",
  color: "#dddddd",
  border: "#777777",
  postBox: "#3089c3",
  postBoxBorder: "#555555",
  codeBackground: "#aaaacc",
}