import { IoIosStar } from "react-icons/io";

export default function Booking(props) {
    return (
      <div className="max-w-[444px] h-[621px] shadow-md transition-transform duration-400 hover:-translate-y-1.5">
        <img className="w-full h-[319px] rounded-t-[10px] object-cover vsm:h-[280px]" src={props.image} alt="images" />
        <div className="mt-4 mx-[30px] vsm:mx-[20px] vsm:my-[24px]">
          <div className="flex justify-between items-center text-[24px] mb-[20px]">
            <p className="font-semibold">{props.country}</p>
            <p className="font-normal">${props.price} <span className="font-light">/{props.day}days</span></p>
          </div>
          <p className="text-[14px] text-left text-[#878787] mb-8 vsm:text-[15px]">{props.description}</p>
          <div className="flex justify-between items-center text-[24px]">
            <ul className="flex m-0 p-0 list-none">
              {[...Array(5)].map((_, i) => (
                <li key={i}><IoIosStar className="fill-[#F4BC61] text-[25px] vsm:text-[20px]" /></li>
              ))}
            </ul>
            <button className="w-[198px] h-[60px] text-[22px] rounded-full font-semibold text-white bg-black transition-all duration-300 hover:scale-105 hover:shadow-lg  vsm:w-[160px] vsm:h-[40px] vsm:text-[14px]">Booking Now</button>
          </div>
        </div>
      </div>
    );
  }