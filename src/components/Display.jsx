
function Display({ index, text, date, setList, list, setThought, setEditIndex }) {
  const handleDelete = () => {
    const updated = list.filter((_, i) => i !== index);
    setList(updated);
  };

  const handleEdit = () => {
    setThought(list[index].thought);
    setEditIndex(index);
  };

  return (
    <div className="
      flex flex-col gap-2 p-4 mb-4
      w-full min-h-44 
      rounded-3xl 
      bg-black/70 
      backdrop-blur-xl 
      text-zinc-100 
      border-4 border-white/40 
      shadow-[inset_0_0_0.5px_rgba(255,255,255,0.3)] 
    ">
      <div className="text-xs font-semibold inline-block text-zinc-500">
        <span className="text-sm mr-1 text-orange-400">●</span> {date}
      </div>

      <p className="text-base leading-relaxed text-white break-words">{text}</p>

      <div className="ml-auto flex gap-2 mt-auto">
        <button
          onClick={handleEdit}
          className="
            w-10 h-10
            flex items-center justify-center 
            rounded-full 
            bg-gray-700 
            border border-white/20 
            hover:bg-black/50 
            transition-all duration-150
            text-white
          "
        >
          <lord-icon
            src="https://cdn.lordicon.com/fikcyfpp.json"
            trigger="hover"

            colors="primary:#ffffff,secondary:#ffffff"
            style={{width:"24px",height:"24px"}}>
        </lord-icon>
        </button>
        <button
          onClick={handleDelete}
          className="
            w-10 h-10
            flex items-center justify-center 
            rounded-full 
            bg-gray-700 
            border border-white/20 
            hover:bg-black/50 
            transition-all duration-150
            text-white
          "
        >
          <lord-icon
            src="https://cdn.lordicon.com/jzinekkv.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff"
            style={{width:"22px",height:"22px"}}>
        </lord-icon>
        </button>
      </div>
    </div>
  );
}

export default Display;
