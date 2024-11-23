export type CreateRaceResultsRequest = {
  eventId: number;
  results: string;
  categories: number[];
};

export const mockCreateRaceResultsRequest = {
  eventId: 25,
  categories: ['99999'],
  results:
    'Pl\tName\tSex\tRacing Age\tDiv\tDiv Pl\tCity\tSection 1\tSection 2\tSection 3\tSpeed\tTime\tGap\n1206\tKeith Gerarden\tMen\t45\tM45-54\t1\t\t9:06.76\t6:46.31\t7:47.85\t21.78\t23:40.93\t--\n2182\tKerry Werner Jr.\tMen\t33\tM23-34\t1\tVinton VA\t9:12.37\t6:45.85\t7:47.16\t21.72\t23:45.39\t+0:04.458\n3125\tKelby Hanson\tMen\t21\tM23-\t1\tSalem VA\t9:17.07\t6:53.82\t7:45.36\t21.55\t23:56.26\t+0:15.332\n4163\tBrian Schworm\tMen\t54\tM45-54\t2\tMorehead KY\t9:27.84\t6:52.79\t8:01.50\t21.17\t24:22.14\t+0:41.208',
};
