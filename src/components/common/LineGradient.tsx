interface propTypes {
  width?: string;
}

function LineGradient({ width = "w-full" }: propTypes) {
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`}></div>;
}

export default LineGradient;
