import {
  CreateResultReturn,
  mockCreateResultReturnValue,
} from '../../results/create-result-return-type';

export type CreateRaceResultsReturnSummary = {
  total: number;
  successful: number;
  failed: number;
};

export type CreateRaceResultsReturnDetails = {
  createdResults: CreateResultReturn;
  errors: string[];
};

export type CreateRaceResultsReturn = {
  summary: CreateRaceResultsReturnSummary;
  details: CreateRaceResultsReturnDetails;
};

export const mockCreateRaceResultsReturnSummary = {
  total: 1,
  successful: 1,
  failed: 0,
};

export const mockCreateRaceResultsReturnSummaryErrors = {
  total: 1,
  successful: 0,
  failed: 1,
};

export const mockCreateRaceResultsReturnDetails = {
  createdResults: [mockCreateResultReturnValue],
  errors: [],
};

export const mockCreateRaceResultsReturnDetailsErrors = {
  createdResults: [],
  errors: [
    'Error processing result for rider Kelby Hanson: \nInvalid `prisma.joinResultCategory.create()` invocation:\n\n\nForeign key constraint violated: `JoinResultCategory_categoryId_fkey (index)`',
  ],
};

export const mockCreateRaceResultsReturn = {
  summary: mockCreateRaceResultsReturnSummary,
  details: mockCreateRaceResultsReturnDetails,
};

export const mockCreateRaceResultsReturnWithErrors = {
  summary: mockCreateRaceResultsReturnSummary,
  details: mockCreateRaceResultsReturnDetailsErrors,
};
