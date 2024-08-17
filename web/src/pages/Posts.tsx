import Post from "../components/Post";


export default function Posts() {
    return (
        <div className="p-8 text-justify grid grid-cols-1 gap-3">
            <h1 className='text-2xl my-2'>posts</h1>
            <p className='text-justify'>
                this is wher i want to write little posts about stuff im interested in. basically longer x threads, though i might quote some eventually...
            </p>
            <Post />
        </div>
    );
  }