"use client";

import { useEffect, useRef, useState } from "react";
import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  GROUND_Y,
  GRAVITY,
  JUMP_FORCE,
  GAME_SPEED_INITIAL,
  MIN_GAP,
  MAX_GAP,
} from "@/lib/game-types";
import type { Player, Obstacle } from "@/lib/game-types";
import { drawCat, drawCactus } from "@/lib/game-drawing";

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

      drawCat(ctx, 50, GROUND_Y - 26, 0, false);

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
      const nextGap = MIN_GAP + Math.random() * (MAX_GAP - MIN_GAP);
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
