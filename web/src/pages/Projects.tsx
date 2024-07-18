
export default function Projects() {
    return (
        <>
            <div className="p-8">
                <h1 className='text-2xl my-2 mb-4'>projects</h1>
                <div className="grid w-11/12 grid-cols-2">
                    <div className="p-2 shadow-lg grid rounded-xl place-items-center border">
                        <h2 className="text-lg my-2">this website</h2>
                        <div className="w-full h-full repo-card" data-repo="cttps/personalwebsite"></div></div>
                </div>
            </div>
        </>
    );
  }