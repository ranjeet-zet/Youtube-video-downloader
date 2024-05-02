"use client";
import Image from "next/image";
import { AccordionDemo } from "@/components/ShowCards";
import axios from 'axios'
import { InputWithButton } from "@/components/Search";
import { useEffect, useState } from "react";
import SkeletonDemo from '@/components/Skeleton'
export default function Home() {
  const [url, setUrl] = useState("");
  const [isplay, setisplay] = useState(false);
  const [plyUrl, setPlayUrl] = useState("");
  const [datatoShow,setDataToShow]=useState([]);
  // console.log(plyUrl)

  const fatchData =()=>{
        axios.post('/api',{youtubeurl:plyUrl}).then((res)=>{
          // console.log(res.data)
          setDataToShow(res.data.data)
        }).catch((err:any)=>{
          console.error(err)
          alert("Error happend refresh page")
        })
  }

  const extractVideoId = (varible:any) => {
    // Use URLSearchParams to parse the URL query parameters
    const params = new URLSearchParams(new URL(varible).search);
    // Get the value of the 'v' parameter
    const videoId = params.get("v");
    console.log(videoId)
    return videoId;
  };

  const fatchApi: any = () => {
    const extractId = extractVideoId(url)
    setPlayUrl(`https://www.youtube.com/embed/${extractId}`);
    setisplay(()=>true);
   
  };
  useEffect(()=>{
    if(isplay){

      fatchData();
    }
  },[isplay])
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-[20px] pt-4">
      <InputWithButton url={url} setUrl={setUrl} fatchApi={fatchApi} />
      <div className=" w-[100%] mt-4 h-[60vh] flex gap-2 flex-col md:flex-row">
        <div className=" w-[100%]">
          {isplay && <iframe width="100%" height="450vh" src={plyUrl}></iframe>}
        </div>
        <div className=" w-[100%] h-[100%] p-4">
          {isplay && datatoShow.length==0 && <SkeletonDemo/>}

          {isplay && datatoShow.length!==0 && <AccordionDemo datatoShow={datatoShow}/>}
        </div>
      </div>
    </main>
  );
}
