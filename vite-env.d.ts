declare module "*.css";
declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  [key: string]: string | boolean | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
