function BgChanger({ setBgClass, className = "" }) {
  const changeBg = (gradientClass) => {
    setBgClass(gradientClass);
  };

  return (
    <div className={`p-2 flex items-center justify-between w-32 h-8 rounded-2xl bg-black/30 backdrop-blur-sm ${className}`}>
      <div 
        onClick={() => changeBg('bg-gradient-to-br from-gray-700 via-gray-800 to-zinc-900')} 
        className="w-5 h-5 rounded-full bg-gray-500 cursor-pointer hover:scale-110 transition" />
      <div 
        onClick={() => changeBg('bg-gradient-to-br from-teal-700 via-teal-800 to-zinc-900')} 
        className="w-5 h-5 rounded-full bg-teal-500 cursor-pointer hover:scale-110 transition" />
      <div 
        onClick={() => changeBg('bg-gradient-to-br from-orange-700 via-orange-800 to-zinc-900')} 
        className="w-5 h-5 rounded-full bg-orange-500 cursor-pointer hover:scale-110 transition" />
      <div 
        onClick={() => changeBg('bg-gradient-to-br from-purple-700 via-purple-800 to-zinc-900')} 
        className="w-5 h-5 rounded-full bg-purple-500 cursor-pointer hover:scale-110 transition" />
    </div>
  );
}

export default BgChanger;
