import { useState } from "react";
import slack from "./assets/slack.png";
import github from "./assets/social icon.png";
import planet from "./assets/planet.png";
import icon from "./assets/icon.png";
import more from "./assets/more.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[95%] md:w-5/6 mx-auto text-center my-8 p-8 capitalize">
      <div className="relative">
        <img
          className="mx-auto my-5 w-[88px] h-[88px] rounded-full"
          id="profile__img"
          src="https://ca.slack-edge.com/T042F7V19Q8-U048FLHJEQ6-669b323c0482-512"
          alt=""
        />
        <img
          className="hidden md:block absolute top-0 right-[15%]"
          src={icon}
          alt=""
        />
        <img
          className="absolute top-0 right-[15%] md:hidden"
          src={more}
          alt=""
        />
      </div>
      <h2 className="font-bold text-xl mb-10" id="slack">
        mustapha jamil
      </h2>
      <ul>
        <a href="https://twitter.com/Mustaphajay2Jay">
          <li className="links">twitter link</li>
        </a>
        <a href="https://training.zuri.team">
          <li className="links" id="btn__zuri">
            zuri teams
          </li>
        </a>
        <a href="https://books.zuri.team">
          <li className="links" id="books">
            zuri books
          </li>
        </a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=mustapha jamil ">
          <li className="links" id="book__python">
            python books
          </li>
        </a>
        <a href="https://background.zuri.team">
          <li className="links" id="pitch">
            background check for coders
          </li>
        </a>
        <a href="https://books.zuri.team/design-rules">
          <li className="links" id="book__design">
            design books
          </li>
        </a>
      </ul>
      <div className="flex justify-center items-center gap-6 py-7">
        <img src={slack} alt="" />
        <img src={github} alt="" />
      </div>
      <hr className="mt-10" />
      <div className="grid gap-2 md:flex justify-between my-7 items-center">
        <h3 className="text-2xl font-semibold flex items-baseline">
          Zuri{" "}
          <div className="w-[7px] h-[7px] rounded-full bg-[#E7332B] mx-1"></div>{" "}
          Internship
        </h3>
        <h3 className="text-[#667085] text-start">
          HNG Internship 9 Frontend Task
        </h3>
        <img src={planet} alt="" />
      </div>
    </div>
  );
}

export default App;
