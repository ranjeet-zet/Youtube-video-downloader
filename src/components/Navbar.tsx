import { ModeToggle } from "@/components/Modetogel";

export  function Navbar(){
    return (
        <nav className="p-3 flex justify-between">
            <h1 className="text-[30px] dark:text-amber-500 text-black">YouTube Video Downloader</h1>
            <ModeToggle/>
        </nav>
    )
}