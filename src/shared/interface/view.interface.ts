export interface ViewInterface {
  title: string;
  template: () => string;
  data?: any;
}
