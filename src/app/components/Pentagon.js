export default function Pentagon() {
  return (
    <div className="relative" style={{ width: '400px', height: '400px' }}>
      {/* Center square */}
      <div className="absolute bg-blue-500" style={{ width: '20%', height: '20%', top: '40%', left: '40%' }}></div>
      
      {/* Pentagon squares rotated 45 degrees */}
      <div className="absolute bg-blue-500" style={{ width: '20%', height: '20%', top: '0', left: '40%', transform: 'rotate(45deg)' }}></div>
      <div className="absolute bg-blue-500" style={{ width: '20%', height: '20%', bottom: '10%', left: '0', transform: 'rotate(45deg)' }}></div>
      <div className="absolute bg-blue-500" style={{ width: '20%', height: '20%', bottom: '10%', right: '0', transform: 'rotate(45deg)' }}></div>
      <div className="absolute bg-blue-500" style={{ width: '20%', height: '20%', top: '20%', left: '0', transform: 'rotate(45deg)' }}></div>
      <div className="absolute bg-blue-500" style={{ width: '20%', height: '20%', top: '20%', right: '0', transform: 'rotate(45deg)' }}></div>
    </div>
  );
}
