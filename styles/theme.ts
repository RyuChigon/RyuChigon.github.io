import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    color: string;
    border: string;
    postBox: string;
    postBoxBorder: string;
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
};

export const dark = {
  background: "#080808",
  color: "#dddddd",
  border: "#777777",
  postBox: "#fcfcff",
  postBoxBorder: "#555555",
}