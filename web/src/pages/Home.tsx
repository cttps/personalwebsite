
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="place-items-center grid">
            <div className="grid grid-cols-1 max-w-3xl w-full">
                <p className='text-left text-6xl font-semibold'>hey,</p>
                <p className='text-4xl ml-8 text-left font-semibold mb-4'>welcome to my website!</p>
                <div className="flex gap-1">
                    <p className='text-xl'>you can find how to message me from my </p>
                    <Link to="/contact" className="group text-zinc-500 transition-all duration-300 ease-in-out">
                    <span className="bg-left-bottom text-xl bg-gradient-to-r from-zinc-500 to-zinc-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        contact page
                    </span>
                    </Link>
                </div>
            </div>
            <p className='mt-4 p-4 text-6xl ml-8 text-center font-semibold mb-4 bg-yellow-500 text-blue-400 w-full'>why does it look so bad?</p>
            <div className="w-full grid grid-cols-2 place-items-end">
                <div className="grid place-items-center rounded-full p-24 aspect-square bg-zinc-100">
                    <p className="rounded-full text-6xl font-bold">sorry</p>
                </div>
                <div className="grid place-items-left w-full ">
                    <p className='text-xl'>anyway,</p>
                    <p className='text-xl'>you</p>
                    <p className='text-xl'>probably</p>
                    <p className='text-xl'>want</p>
                    <p className='text-xl'>to</p>
                    <p className='text-xl'>check</p>
                    <p className='text-xl'>out</p>
                    <p className='text-xl'>my</p>
                    <Link to="/projects" className="group text-black transition-all duration-300 ease-in-out">
                    <span className="bg-left-bottom text-4xl bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                        projects
                    </span>
                    </Link>
                    <p className='text-xl'>so go ahead!</p>
                </div>
            </div>
        </div>
    );
  }
