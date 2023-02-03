import { useRouteError,Link } from "react-router-dom";

const Error = () => {
    const { status, statusText, data } = useRouteError();

    // console.log(error);
    return (
        <div className="p-10 bg-blue-400  h-full">
            <h1 className="text-2xl font-bold mb-2">{status} - {statusText} 🦥🦥</h1>
            <h2 className="text-2xl font-bold mb-2">{data}</h2>
            <Link to="/"><span className="text-xl text-white  font-bold underline    mb-2 hover:text-gray-900">Go to Homepage</span> </Link>
        </div>
    )
}

export default Error;