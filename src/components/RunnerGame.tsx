"use client";

import { useEffect, useRef, useState } from "react";

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 200;
const GROUND_Y = 160;
const GRAVITY = 0.6;
const JUMP_FORCE = -12;
const GAME_SPEED_INITIAL = 4;
const OBSTACLE_GAP = 200;

interface Player {
  x: number;
  y: number;
  vy: number;
  width: number;
  height: number;
  jumping: boolean;
  frame: number;
}

interface Obstacle {
  x: number;
  width: number;
  height: number;
}

function drawCat(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  frame: number,
  jumping: boolean
) {
  const bodyW = 28;
  const bodyH = 18;
  const headSize = 14;

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
    // Legs tucked
    ctx.fillRect(x + 4, y + bodyH - 2, 5, 6);
    ctx.fillRect(x + 18, y + bodyH - 2, 5, 6);
  } else {
    // Running animation
    const legOffset1 = Math.sin(frame * 0.3) * 3;
    const legOffset2 = Math.sin(frame * 0.3 + Math.PI) * 3;
    ctx.fillRect(x + 4, y + bodyH - 2, 5, 8 + legOffset1);
    ctx.fillRect(x + 18, y + bodyH - 2, 5, 8 + legOffset2);
    // Paws
    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(x + 3, y + bodyH + 5 + legOffset1, 7, 3);
    ctx.fillRect(x + 17, y + bodyH + 5 + legOffset2, 7, 3);
  }

  // Head
  ctx.fillStyle = "#f59e0b";
  ctx.beginPath();
  ctx.arc(x + bodyW + 2, y + 4, headSize / 2, 0, Math.PI * 2);
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

function drawCactus(
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

    // Left arm
    ctx.fillStyle = "#22c55e";
    ctx.beginPath();
    ctx.roundRect(trunkX - armW, baseY - height * 0.7, armW, armH, 2);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(trunkX - armW, baseY - height * 0.7 - armH * 0.5, armW * 0.6, armH * 0.6, 2);
    ctx.fill();

    // Right arm
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

export default function RunnerGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<{
    player: Player;
    obstacles: Obstacle[];
    score: number;
    gameOver: boolean;
    speed: number;
    frameId: number;
  } | null>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  const initGame = () => {
    gameRef.current = {
      player: {
        x: 50,
        y: GROUND_Y - 30,
        vy: 0,
        width: 32,
        height: 28,
        jumping: false,
        frame: 0,
      },
      obstacles: [],
      score: 0,
      gameOver: false,
      speed: GAME_SPEED_INITIAL,
      frameId: 0,
    };
    setScore(0);
    setGameOver(false);
    setStarted(true);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        if (!started) {
          initGame();
          return;
        }
        if (gameOver) {
          initGame();
          return;
        }
        const game = gameRef.current;
        if (game && !game.player.jumping) {
          game.player.vy = JUMP_FORCE;
          game.player.jumping = true;
        }
      }
    };

    const handleTouch = () => {
      if (!started) {
        initGame();
        return;
      }
      if (gameOver) {
        initGame();
        return;
      }
      const game = gameRef.current;
      if (game && !game.player.jumping) {
        game.player.vy = JUMP_FORCE;
        game.player.jumping = true;
      }
    };

    window.addEventListener("keydown", handleKey);
    canvas.addEventListener("touchstart", handleTouch);

    const drawGround = () => {
      // Sandy ground line
      ctx.strokeStyle = "#a3a3a3";
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y);
      ctx.lineTo(CANVAS_WIDTH, GROUND_Y);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const drawIdle = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      drawGround();

      // Idle cat
      drawCat(ctx, 50, GROUND_Y - 26, 0, false);

      // Prompt
      ctx.fillStyle = "#a3a3a3";
      ctx.font = "14px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Press SPACE or tap to start", CANVAS_WIDTH / 2, 100);
    };

    const gameLoop = () => {
      const game = gameRef.current;
      if (!game || game.gameOver) return;

      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Update player
      game.player.vy += GRAVITY;
      game.player.y += game.player.vy;
      if (game.player.y >= GROUND_Y - game.player.height) {
        game.player.y = GROUND_Y - game.player.height;
        game.player.vy = 0;
        game.player.jumping = false;
      }
      game.player.frame++;

      // Spawn obstacles with random spacing
      const lastObs = game.obstacles[game.obstacles.length - 1];
      const minGap = 250;
      const maxGap = 500;
      const nextGap = minGap + Math.random() * (maxGap - minGap);
      if (!lastObs || lastObs.x < CANVAS_WIDTH - nextGap) {
        game.obstacles.push({
          x: CANVAS_WIDTH,
          width: 18 + Math.random() * 14,
          height: 25 + Math.random() * 35,
        });
      }

      // Update obstacles
      game.obstacles = game.obstacles.filter((o) => o.x + o.width > -10);
      game.obstacles.forEach((o) => {
        o.x -= game.speed;
      });

      // Collision detection (slightly forgiving hitbox)
      for (const o of game.obstacles) {
        const catLeft = game.player.x + 4;
        const catRight = game.player.x + game.player.width - 4;
        const catBottom = game.player.y + game.player.height + 8;
        if (
          catRight > o.x + 2 &&
          catLeft < o.x + o.width - 2 &&
          catBottom > GROUND_Y - o.height
        ) {
          game.gameOver = true;
          setGameOver(true);
          return;
        }
      }

      // Score
      game.score += 1;
      game.speed = GAME_SPEED_INITIAL + Math.floor(game.score / 200) * 0.5;
      if (game.score % 3 === 0) setScore(Math.floor(game.score / 10));

      // Draw
      drawGround();

      // Draw obstacles (cacti)
      game.obstacles.forEach((o) => {
        drawCactus(ctx, o.x, o.height, o.width);
      });

      // Draw cat
      drawCat(
        ctx,
        game.player.x,
        game.player.y,
        game.player.frame,
        game.player.jumping
      );

      // Draw score
      ctx.fillStyle = "#a3a3a3";
      ctx.font = "14px monospace";
      ctx.textAlign = "right";
      ctx.fillText(`${Math.floor(game.score / 10)}`, CANVAS_WIDTH - 10, 30);

      game.frameId = requestAnimationFrame(gameLoop);
    };

    if (!started) {
      drawIdle();
    }

    if (started && !gameOver) {
      gameRef.current!.frameId = requestAnimationFrame(gameLoop);
    }

    if (gameOver) {
      const game = gameRef.current!;
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      drawGround();

      game.obstacles.forEach((o) => {
        drawCactus(ctx, o.x, o.height, o.width);
      });

      drawCat(
        ctx,
        game.player.x,
        game.player.y,
        game.player.frame,
        game.player.jumping
      );

      ctx.fillStyle = "#a3a3a3";
      ctx.font = "16px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Game Over! Press SPACE to restart", CANVAS_WIDTH / 2, 80);
      ctx.font = "14px monospace";
      ctx.fillText(`Score: ${Math.floor(game.score / 10)}`, CANVAS_WIDTH / 2, 110);
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
      canvas.removeEventListener("touchstart", handleTouch);
      if (gameRef.current) {
        cancelAnimationFrame(gameRef.current.frameId);
      }
    };
  }, [started, gameOver]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative overflow-hidden rounded-lg border border-border">
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="max-w-full bg-background"
          style={{ touchAction: "none" }}
        />
      </div>
      {started && (
        <p className="text-xs text-muted">
          Score: {score}
        </p>
      )}
    </div>
  );
}
