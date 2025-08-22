import { useCallback, useEffect, useState } from "react";

function useTimer(
  initialTime: number = 5,
  isOpen: boolean = false,
  onClose?: () => void
) {
  const [timer, setTimer] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<boolean>(isOpen);

  const restart = useCallback(() => {
    setTimer(initialTime);
    setIsRunning(true);
  }, [initialTime]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isRunning && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && isRunning) {
      setIsRunning(false);
      onClose?.();
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [timer, isRunning, onClose]);

  useEffect(() => {
    if (isOpen) {
      restart();
    }
  }, [isOpen, restart]);

  return {
    timer,
    restart,
  };
}

export default useTimer;
