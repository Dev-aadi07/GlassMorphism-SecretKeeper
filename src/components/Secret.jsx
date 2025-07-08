import  { useState, useEffect } from "react";
import Display from "./Display";
import 'lord-icon-element';

function Secret() {
  const [thought, setThought] = useState('');
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [loaded, setLoaded] = useState(null);

  const addSecret = () => {
    if (thought.trim() === '') return;

    const currentDate = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "2-digit"
    });

    const updatedSecret = {
      id: Date.now(),
      thought,
      date: currentDate
    };

    setList(prev =>
      editIndex !== null
        ? [updatedSecret, ...prev.filter((_, index) => index !== editIndex)]
        : [updatedSecret, ...prev]
    );

    setThought('');
    setEditIndex(null);
  };

  useEffect(()=>{
    const saved = localStorage.getItem('list');
    if(saved) {
      setList(JSON.parse(saved));
    }
    setLoaded(true);
  },[]);

  useEffect(()=>{
    if(loaded){
      localStorage.setItem("list", JSON.stringify(list));
    }
  }, [list, loaded]);

  return (
     <div className="
      w-full sm:w-3/4 lg:w-1/3
      p-4 flex flex-col items-center gap-4 
      rounded-3xl 
      bg-white/5 
      backdrop-blur-xl 
      border-4 border-white/50 
      shadow-[inset_0_0_0.5px_rgba(255,255,255,0.3)] 
    ">
      <h1 className="font-mono text-3xl font-bold text-white tracking-wide">Secrets</h1>

      <div className="
        w-full flex justify-between items-center 
        rounded-3xl 
        bg-black/70
        backdrop-blur-xl 
        border-4 border-white/50 
        shadow-[inset_0_0_0.5px_rgba(255,255,255,0.3)] 
      ">
        <textarea
          placeholder="Keep your secret here..."
          name="area"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
          className="
            p-4 h-16 w-full 
            text-lg text-white 
            bg-transparent 
            outline-none resize-none 
            scrollbar-none scroll-smooth
            placeholder:text-zinc-400
          "
        />
        <button
          onClick={addSecret}
          className="
            m-2 w-16 h-14 
            flex items-center justify-center 
            rounded-2xl 
            bg-gray-700 
            border border-white/20 
            hover:bg-black/50 
            transition-all duration-150
            text-white
          "
        >
          <lord-icon
            src="https://cdn.lordicon.com/exymduqj.json"
            trigger="hover"
            state="hover-line"
            colors="primary:#ffffff,secondary:#ffffff"
            style={{width:"26px",height:"26px"}}>
        </lord-icon>
        </button>
      </div>

      <div className="w-full max-h-72 overflow-y-auto scrollbar-none scroll-smooth">
        {list.map((item, index) => (
          <Display
            key={item.id}
            index={index}
            text={item.thought}
            date={item.date}
            setList={setList}
            list={list}
            setThought={setThought}
            setEditIndex={setEditIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default Secret;
