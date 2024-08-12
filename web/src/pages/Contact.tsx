//<![CDATA[
const Email = () => {
    const user = 'tcatnoc';
    const domain = 'cttps.info';
    const email = `${domain.split("").reverse().join("")}@${user}`;

    return (
        <a href={`mailto:${email.split("").reverse().join("")}`}>
        {email.split("").reverse().join("")}
        </a>
    );
};  

export default function Contact() {
    return (
        <div className="p-8 text-justify grid grid-cols-1 gap-3">
            <h1 className='text-2xl my-2'>contact</h1>
            <p className='text-justify'>
                you can contact me at: <Email /> or any of my other socials i guess
            </p>
        </div>
    );
}
//]]>