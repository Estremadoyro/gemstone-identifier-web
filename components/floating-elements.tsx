export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating gemstone shapes */}
      <div
        className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-blue-400/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-60 left-1/4 w-3 h-3 bg-purple-400/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-80 right-1/3 w-5 h-5 bg-indigo-400/20 rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>

      {/* More floating elements for different sections */}
      <div
        className="absolute top-[400px] left-20 w-4 h-4 bg-primary/15 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-[500px] right-10 w-6 h-6 bg-blue-400/15 rounded-full animate-float"
        style={{ animationDelay: "0.8s" }}
      ></div>

      <div
        className="absolute top-[800px] left-1/3 w-3 h-3 bg-purple-400/15 rounded-full animate-float"
        style={{ animationDelay: "2.2s" }}
      ></div>
      <div
        className="absolute top-[900px] right-1/4 w-5 h-5 bg-indigo-400/15 rounded-full animate-float"
        style={{ animationDelay: "1.2s" }}
      ></div>

      <div
        className="absolute top-[1200px] left-10 w-4 h-4 bg-primary/10 rounded-full animate-float"
        style={{ animationDelay: "0.3s" }}
      ></div>
      <div
        className="absolute top-[1300px] right-20 w-6 h-6 bg-blue-400/10 rounded-full animate-float"
        style={{ animationDelay: "1.8s" }}
      ></div>

      {/* Rotating elements */}
      <div className="absolute top-32 left-1/2 w-8 h-8 border border-primary/20 rounded-full animate-rotate"></div>
      <div
        className="absolute top-[600px] right-1/2 w-6 h-6 border border-blue-400/20 rounded-full animate-rotate"
        style={{ animationDuration: "15s" }}
      ></div>
      <div
        className="absolute top-[1000px] left-1/2 w-10 h-10 border border-purple-400/20 rounded-full animate-rotate"
        style={{ animationDuration: "25s" }}
      ></div>
    </div>
  );
}
