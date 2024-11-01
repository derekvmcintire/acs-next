export interface FullName {
  firstName: string;
  lastName: string;
}

export const splitName = (name: string): FullName => {
  const lastSpaceIndex = name.lastIndexOf(' ');
  if (lastSpaceIndex === -1) return { firstName: '', lastName: name };
  const firstName = name.slice(0, lastSpaceIndex);
  const lastName = name.slice(lastSpaceIndex + 1);
  return {
    firstName,
    lastName,
  };
};
