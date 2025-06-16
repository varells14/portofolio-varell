import Squares from '../visuals/Squares';

function Background() {
  return (
    <div className="absolute inset-0 z-0">
      <Squares direction="diagonal" speed={0.5} borderColor="#242424" hoverFillColor="#555" squareSize={50} />
    </div>
  );
}

export default Background;
