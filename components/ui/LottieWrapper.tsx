'use client'

import { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from "@/data/confetti.json";

interface LottieWrapperProps {
  isPlaying: boolean;
}

const LottieWrapper: React.FC<LottieWrapperProps> = ({ isPlaying }) => {
  const [isStopped, setIsStopped] = useState(!isPlaying);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsStopped(!isPlaying);
    setIsPaused(false);
  }, [isPlaying]);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      height={200}
      width={400}
      isStopped={isStopped}
      isPaused={isPaused}
    />
  );
};

export default LottieWrapper;
