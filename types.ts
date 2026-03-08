export interface Metric {
  value: string;
  label: string;
  subLabel?: string;
}

export interface Service {
  id: string;
  title: string;
  description?: string;
}

export interface NavItem {
  label: string;
  path: string;
}