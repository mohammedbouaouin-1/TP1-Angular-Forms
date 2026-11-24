export interface Inscription {
  fullname: string;
  age: number | null;
  country: string;
  email: string;
}

export const PAYS_LIST = [
  { code: 'fr', label: 'France' },
  { code: 'be', label: 'Belgique' },
  { code: 'ch', label: 'Suisse' },
  { code: 'ca', label: 'Canada' }
];
