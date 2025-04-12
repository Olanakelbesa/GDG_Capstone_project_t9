export default function TipCard(props) {
    return (
      <div className={`${props.size} shadow-md transition-transform duration-400 hover:-translate-y-1.5`}>
  <img className={`${props.class} w-full max-h-[679px] object-contain rounded-t-[10px]`} src={props.image} alt="" />
  <div className={`p-7 text-left flex flex-col m-0 gap-4 ${props.contentSize}`}>
    <h3 className="text-[24px] font-normal mb-[20px] vsm:text-[20px]">{props.topic}</h3>
    <h2 className="text-[36px] font-medium leading-[51px] vsm:text-[30px]">{props.title}</h2>
    <p className="text-[18px] font-light leading-[33px] text-[#343434] mt-0 max-h-[179px] flex-[1.2] vsm:text-[15px]">{props.discription}</p>
    <div className="">
    <button className="w-[213px] h-[60px] text-[22px] rounded-full font-semibold text-white bg-black transition-all duration-300 hover:scale-105 hover:shadow-lg vsm:w-[160px] vsm:h-[40px] vsm:text-[14px]">
      Read More
    </button>
    </div>
   
  </div>
</div>

    );
  }