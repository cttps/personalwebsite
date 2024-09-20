
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="place-items-center grid">
            <div className="grid grid-cols-1 max-w-3xl w-full">
                <p className='text-left text-6xl font-semibold'>hey,</p>
                <p className='text-4xl ml-8 text-left font-semibold mb-4'>welcome to my website!</p>
                <div className="grid place-items-start gap-3">
                    <p className='text-xl'>not much here. im trying to keep it welcoming </p>
                    <div className="flex gap-3">
                        <p className='text-xl'>you can find how to message me from my </p>
                        <Link to="/contact" className="group text-zinc-500 transition-all duration-300 ease-in-out">
                        <span className="bg-left-bottom text-xl bg-gradient-to-r from-zinc-500 to-zinc-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            contact page
                        </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }
