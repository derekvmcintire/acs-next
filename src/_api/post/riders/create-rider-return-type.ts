export interface CreateRiderReturn {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  country: string;
  hometown: string;
  photo: string;
  strava: string;
  insta: string;
  about: string;
}

export const mockCreateRiderReturnValue = {
  id: 139,
  firstName: 'Mipper',
  lastName: 'Mopperson',
  dob: '1990-01-01',
  country: 'USA',
  hometown: 'New York, NY',
  photo: 'https://www.procyclingstats.com/images/riders/bp/bf/julian-alaphilippe-2024.jpeg',
  strava: '87935790234',
  insta: 'portamip',
  about: 'It reaaaallly bothered me.',
};
