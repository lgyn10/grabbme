import { StackData } from '@/features/home/model/stack.model';

export const getTopFiveStack = async (): Promise<StackData[] | undefined> => {
  try {
    const response: Response = await fetch('/data/topFiveStacks.json', {
      method: 'GET',
    });

    const data: StackData[] = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error: ', error);
  }
};
