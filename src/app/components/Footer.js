export default function Footer() {
  return (
    <footer>
      <div
        className="flex justify-center bg-slate-gray-flat"
        style={{
          width: "100%",
          height: "30vh",
        }}
      >
        <div className="flex flex-row justify-between text-text-flat-inverted mt-2">
          <div className="flex-1">
            <h1>Karriereflyt AS</h1>
            <p>Org. nr: 930 011 428 </p>
          </div>
          <div className="flex-1">
            <h1>Kontakt oss</h1>
            <p>Org. nr: 930 011 428 </p>
          </div>
          <div className="flex-1">
            <h1>Sider</h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
