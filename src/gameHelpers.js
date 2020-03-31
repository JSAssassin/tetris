export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  // [
  // [[0, cleared]]
  // [[0, cleared]]
  // [[0, cleared]]
  // x20
  // ]

  return Array.from(Array(STAGE_HEIGHT), () => {
    return Array(STAGE_WIDTH).fill([0, 'clear']);
  });
};
