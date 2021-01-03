import { STAGE_WIDTH, STAGE_HEIGHT } from './constants';

export const createStage = () => (
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )
);
