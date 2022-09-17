import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function ConfettiComponent() {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height * 1.6}
      numberOfPieces={150}
      gravity={0.02}
    />
  );
}

export default ConfettiComponent;
