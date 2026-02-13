export interface Player {
  x: number;
  y: number;
  vy: number;
  width: number;
  height: number;
  jumping: boolean;
  frame: number;
}

export interface Obstacle {
  x: number;
  width: number;
  height: number;
}

export const CANVAS_WIDTH = 600;
export const CANVAS_HEIGHT = 200;
export const GROUND_Y = 160;
export const GRAVITY = 0.6;
export const JUMP_FORCE = -12;
export const GAME_SPEED_INITIAL = 4;
export const MIN_GAP = 250;
export const MAX_GAP = 500;
