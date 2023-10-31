import { Link, useNavigate } from "react-router-dom";
import { FaArrowCircleUp, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <header className="bg-blue-200 sticky top-0  z-10">
      <div className="flex justify-between items-center max-w-4xl mx-auto p-2">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-800">rentbuy</span>
            <span className="text-slate-800 text-opacity-50">254</span>
          </h1>
        </Link>
        <form
          onSubmit={submit}
          className="bg-slate-100 p-2 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-400 " />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-800 hover:text-blue-400">
              Home
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-6 w-6 object-cover"
                src={currentUser.avatar}
                alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7WjONaOfilXR3bebrfe_zcjl58ZdAzJHYw&usqp=CAU"
              />
            ) : (
              <li className="sm:inline text-slate-800 hover:text-blue-400 ">
                Login
              </li>
            )}
          </Link>
        </ul>
        <FaArrowCircleUp
          onClick={topFunction}
          className="fixed bottom-2 right-4  z-50 "
        />
      </div>
    </header>
  );
}
