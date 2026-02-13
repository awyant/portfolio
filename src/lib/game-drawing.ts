import { GROUND_Y } from "./game-types";

export function drawCat(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  frame: number,
  jumping: boolean
) {
  const bodyW = 28;
  const bodyH = 18;

  // Tail
  ctx.strokeStyle = "#e8851e";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x - 2, y + bodyH - 4);
  const tailWag = Math.sin(frame * 0.15) * 5;
  ctx.quadraticCurveTo(x - 10, y + tailWag, x - 12, y - 4 + tailWag);
  ctx.stroke();
  ctx.lineWidth = 1;

  // Body
  ctx.fillStyle = "#f59e0b";
  ctx.beginPath();
  ctx.ellipse(x + bodyW / 2, y + bodyH / 2, bodyW / 2, bodyH / 2, 0, 0, Math.PI * 2);
  ctx.fill();

  // Tabby stripes
  ctx.strokeStyle = "#d97706";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(x + 8, y + 2);
  ctx.lineTo(x + 10, y + bodyH - 2);
  ctx.moveTo(x + 14, y + 1);
  ctx.lineTo(x + 16, y + bodyH - 1);
  ctx.moveTo(x + 20, y + 2);
  ctx.lineTo(x + 22, y + bodyH - 2);
  ctx.stroke();
  ctx.lineWidth = 1;

  // Legs
  ctx.fillStyle = "#f59e0b";
  if (jumping) {
    ctx.fillRect(x + 4, y + bodyH - 2, 5, 6);
    ctx.fillRect(x + 18, y + bodyH - 2, 5, 6);
  } else {
    const legOffset1 = Math.sin(frame * 0.3) * 3;
    const legOffset2 = Math.sin(frame * 0.3 + Math.PI) * 3;
    ctx.fillRect(x + 4, y + bodyH - 2, 5, 8 + legOffset1);
    ctx.fillRect(x + 18, y + bodyH - 2, 5, 8 + legOffset2);
    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(x + 3, y + bodyH + 5 + legOffset1, 7, 3);
    ctx.fillRect(x + 17, y + bodyH + 5 + legOffset2, 7, 3);
  }

  // Head
  ctx.fillStyle = "#f59e0b";
  ctx.beginPath();
  ctx.arc(x + bodyW + 2, y + 4, 7, 0, Math.PI * 2);
  ctx.fill();

  // Ears
  ctx.fillStyle = "#f59e0b";
  ctx.beginPath();
  ctx.moveTo(x + bodyW - 4, y - 6);
  ctx.lineTo(x + bodyW - 1, y + 1);
  ctx.lineTo(x + bodyW + 3, y - 2);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(x + bodyW + 5, y - 7);
  ctx.lineTo(x + bodyW + 2, y + 0);
  ctx.lineTo(x + bodyW + 8, y - 1);
  ctx.fill();
}

export function drawCactus(
  ctx: CanvasRenderingContext2D,
  x: number,
  height: number,
  width: number
) {
  const baseY = GROUND_Y;
  const trunkW = width * 0.5;
  const trunkX = x + (width - trunkW) / 2;

  // Main trunk
  ctx.fillStyle = "#22c55e";
  ctx.beginPath();
  ctx.roundRect(trunkX, baseY - height, trunkW, height, 3);
  ctx.fill();

  // Darker stripes
  ctx.strokeStyle = "#16a34a";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(trunkX + trunkW * 0.3, baseY - height + 4);
  ctx.lineTo(trunkX + trunkW * 0.3, baseY - 2);
  ctx.moveTo(trunkX + trunkW * 0.7, baseY - height + 4);
  ctx.lineTo(trunkX + trunkW * 0.7, baseY - 2);
  ctx.stroke();

  // Arms (only on taller cacti)
  if (height > 30) {
    const armW = trunkW * 0.7;
    const armH = height * 0.3;

    ctx.fillStyle = "#22c55e";
    ctx.beginPath();
    ctx.roundRect(trunkX - armW, baseY - height * 0.7, armW, armH, 2);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(trunkX - armW, baseY - height * 0.7 - armH * 0.5, armW * 0.6, armH * 0.6, 2);
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(trunkX + trunkW, baseY - height * 0.55, armW, armH, 2);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(trunkX + trunkW + armW * 0.3, baseY - height * 0.55 - armH * 0.5, armW * 0.6, armH * 0.6, 2);
    ctx.fill();
  }

  // Spines
  ctx.strokeStyle = "#15803d";
  ctx.lineWidth = 0.5;
  const spineCount = Math.floor(height / 12);
  for (let i = 0; i < spineCount; i++) {
    const sy = baseY - height + 8 + i * 12;
    ctx.beginPath();
    ctx.moveTo(trunkX, sy);
    ctx.lineTo(trunkX - 3, sy - 2);
    ctx.moveTo(trunkX + trunkW, sy);
    ctx.lineTo(trunkX + trunkW + 3, sy - 2);
    ctx.stroke();
  }
  ctx.lineWidth = 1;
}
