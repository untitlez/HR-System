const randomValue = (min, max) => Math.random() * (max - min) + min;
const colors = ["#4285F4", "#EA4335", "#6A1B9A", "#34A853"];

export const Background = ({ count = 4 }) => {
  const circles = Array.from({ length: count }).map((_, i) => {
    const size = randomValue(200, 400);
    const style = {
      position: "absolute",
      top: `${randomValue(0, 100)}%`,
      left: `${randomValue(0, 100)}%`,
      width: size,
      height: size,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      borderRadius: "50%",
      filter: "blur(100px)",
      opacity: 0.3,
      transform: "translate(-50%, -50%)",
      zIndex: -1,
    };
    return <div key={i} style={style} />;
  });

  return <div className="fixed inset-0 overflow-hidden">{circles}</div>;
};
