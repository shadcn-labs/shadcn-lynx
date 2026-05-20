export type StyleType = Record<string, string | number | undefined>;

export interface ViewProps {
  className?: string;
  style?: StyleType;
  children?: React.ReactNode;
  bindtap?: () => void;
  id?: string;
}

export interface TextProps {
  className?: string;
  style?: StyleType;
  children?: React.ReactNode;
  id?: string;
}

export interface ImageProps {
  className?: string;
  style?: StyleType;
  src: string;
  id?: string;
}
