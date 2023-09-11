import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full bg-white">
      <div className="flex flex-col w-screen h-screen pt-6 px-6 gap-5 items-center">
        <div className="md:border md:rounded-xl md:w-[27rem] sm:px-8 sm:py-6 sm:mt-14">
          <div className="flex flex-col gap-4 ">
            <div>
              <img src="./devcha.svg" alt="" />
            </div>
            <h3 className="text-lg font-semibold">
              join thousands of learners from around the world
            </h3>
            <p className="text-base">
              Master web development by making real-life projects. There are
              multiple paths for you to choose
            </p>
          </div>
          <form className="flex flex-col w-full gap-3 pt-5 sm:pt-3" action="metodo_get.php" method="post">
            <div className="flex flex-raw border rounded-md h-11 focus-within:border-2">
              <img src="./sobre.svg" alt="" />
              <input type="email" id="correo" name="email" placeholder="Email" className="border-none outline-none w-full"/>
            </div>
            <div className="flex flex-raw border rounded-md h-11 focus-within:border-2">
              <img src="./candado.svg" alt="" />
              <input type="password" id="pasword" name="pasword" placeholder="Password"
                className="border-none outline-none"/>
            </div>
            <input type="submit" defaultValue="Start coding now" className="bg-blue-600 font-semibold text-lg rounded-md text-white mt-4 sm:mt-2 h-11 cursor-pointer"/>
          </form>
          <div className="flex flex-col items-center w-full gap-6 pt-3">
            <span className="text-[#828282] text-sm font-normal">
              or continue with these social profile
            </span>
            <div className="flex flex-row gap-2 justify-center">
              <a href="https://www.google.com/" className="border-zinc-500 border rounded-full p-2">
                <img src="./google.svg" alt="" />
              </a>
              <a href="https://www.facebook.com" className="border-zinc-500 border rounded-full p-2">
                <img src="./face.svg" alt="" />
              </a>
              <a href="https://www.twiter.com" className="border-zinc-500 border rounded-full p-2">
                <img src="./twit.svg" alt="" />
              </a>
              <a href="https://github.com/myltonxdd/sistmlog_php" className="border-zinc-500 border rounded-full p-2">
                <img src="./github.svg" alt="" />
              </a>
            </div>
            <span className="text-[#828282] text-sm font-normal ">Adready a member? 
              <Link href="/login" className="text-blue-600">Login</Link>
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between font-normal text-sm w-full text-[#BDBDBD] pt-10 sm:pt-0 sm:w-2/6">
          <div>Milton Procel</div>
          <div>devchallenges.io</div>
        </div>
      </div>
    </main>
  );
}