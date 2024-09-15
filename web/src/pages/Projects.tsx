
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <>
            <div className="p-8 grid text-justify w-full">
                <h1 className='text-2xl my-2 mb-4'>projects</h1>
                <div className="grid gap-2 w-full">
                    <div className="p-2 shadow-lg grid rounded-xl place-items-center border">
                        <h2 className="text-xl my-2">cheatseat</h2>
                        <div className="grid text-justify w-full p-4 max-w-3xl overflow-scroll">
                            <p>
                                A website for university students to get email notifications for courses they select so that
                                they can find a spot when its full. this was a pretty huge project to take on alone, but yeah it was like
                                the most fun ive had in a while lol
                            </p>
                        </div>
                        <div className="grid place-items-center grid-cols-2 w-full text-center">
                            <a className="px-3 py-1 bg-blue-50 rounded-xl shadow hover:px-[500px] hover:py-[300px] transition-all ease-out duration-[5s]">no github </a>
                            <a className="px-3 py-1 bg-blue-50 rounded-xl shadow hover:px-[500px] hover:py-[300px] transition-all ease-out duration-[5s]" href="https://cheatseat.ca">link</a>
                        </div>
                    </div>
                    <div className="p-2 shadow-lg grid rounded-xl place-items-center border">
                        <h2 className="text-xl my-2">quickdraw vs</h2>
                        <div className="grid text-justify w-full p-4 max-w-3xl overflow-scroll">
                            <p>
                                A project a friend and I started. Essentially it's a game where you compete to see who's drawing can get classified by
                                a NN first. It was my first time training any NN, so I learned a lot. I used pytorch for this one.
                                We went with fastAPI for a few reasons, but it was pretty easy to pick up. I mostly focused on the model,
                                frontend drawing, and system design, but I think both of us touched all areas of the project since we were working together.
                                We used redis and websockets, and it sort of inspired me to make my own project using them later down the line in Go.
                                Overall great experience
                            </p>
                        </div>
                        <div className="grid place-items-center grid-cols-2 w-full text-center mt-2">
                            <a className="px-3 py-1 bg-blue-50 rounded-xl shadow hover:px-[500px] hover:py-[300px] transition-all ease-out duration-[5s]" href="https://github.com/mxpph/quickdraw-vs"> github </a>
                            <a className="px-3 py-1 bg-blue-50 rounded-xl shadow hover:px-[500px] hover:py-[300px] transition-all ease-out duration-[5s]" href="https://quickdraw-vs.com">link</a>
                        </div>
                    </div>
                    <div className="p-2 shadow-lg grid rounded-xl place-items-center border">
                        <h2 className="text-xl my-2">this website</h2>
                        <div className="grid text-justify w-full p-4 max-w-3xl overflow-scroll">
                            <p>
                                This is my personal website. Not much special about it. It's using react tsx, tailwind, and go for the backend.
                                Its pretty basic and ugly. The <Link to="/omTimer" className="underline underline-offset-1">timer</Link> page was pretty cool to make though.
                                The hardest part was probably figuring out how to convert a percentage back into seconds relative to the start/current/end time.
                            </p>
                        </div>
                        <div className="grid place-items-center grid-cols-2 w-full text-center">
                            <a className="px-3 py-1 bg-blue-50 rounded-xl shadow hover:px-[500px] hover:py-[300px] transition-all ease-out duration-[5s]" href="https://github.com/cttps/personalwebsite"> github </a>
                            <a className="px-3 py-1 bg-blue-50 rounded-xl shadow hover:px-[500px] hover:py-[300px] transition-all ease-out duration-[5s]" href="./">recursion?</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
