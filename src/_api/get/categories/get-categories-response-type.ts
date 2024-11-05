export interface GetCategoriesResponse {
  id: number;
  disicpline: string;
  name: string;
  description?: string;
}

export const mockGetCategoriesResponse = [
  {
    id: 3,
    disicpline: 'Gran Fondo',
    name: 'Men 19-24',
    description: 'Gran Fondo age group from 19 to 24 for Men',
  },
];
