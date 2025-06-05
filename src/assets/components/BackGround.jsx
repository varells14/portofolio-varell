import Squares from './Squares';

function Background() {
  return (
    <div className="absolute inset-0 z-0">
      <Squares
        direction="diagonal" // Contoh: arah diagonal
        speed={0.5} // Contoh: kecepatan
        borderColor="#242424" // Contoh: warna garis kotak
        hoverFillColor="#555" // Contoh: warna hover kotak
        squareSize={50} // Contoh: ukuran kotak
      />
    </div>
  );
}

export default Background;
