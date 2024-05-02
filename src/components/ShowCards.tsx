import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function AccordionDemo({ datatoShow }: { datatoShow: any }) {
  console.table(datatoShow);

  return (
    <div className="h-[100%] overflow-x-auto">
      {Array.isArray(datatoShow) &&
        datatoShow.map((ele: any, i: any) => (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={i + 1}>
              <AccordionTrigger>{ele.qualityLabel}</AccordionTrigger>
              <AccordionContent className="flex flex-row justify-between items-center p-2">
                Download This video
                <a href={ele.url} target="_blank" download className="w-[20%] flex justify-end">
                  <Button name={ele.url} className="w-[100%]">
                    Download
                  </Button>
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
    </div>
  );
}
// approxDurationMs
// :
// "148066"
// averageBitrate
// :
// 1489836
// bitrate
// :
// 2124059
// contentLength
// :
// "27574275"
// fps
// :
// 30
// height
// :
// 720
// indexRange
// :
// {start: '740', end: '1131'}
// initRange
// :
// {start: '0', end: '739'}
// itag
// :
// 136
// lastModified
// :
// "1713738752448652"
// mimeType
// :
// "video/mp4; codecs=\"avc1.4d401f\""
// projectionType
// :
// "RECTANGULAR"
// quality
// :
// "hd720"
// qualityLabel
// :
// "720p"
// url
// :
// "https://rr7---sn-ci5gup-jj0k.googlevideo.com/videoplayback?expire=1714677464&ei=eJIzZuPnEYThs8IP17mAoA8&ip=223.179.159.162&id=o-AGAxqxJgwj_s_rVZdii6drvuC6QoQTMM9PZxQaYWss6y&itag=136&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=vC&mm=31%2C29&mn=sn-ci5gup-jj0k%2Csn-ci5gup-h55d&ms=au%2Crdu&mv=m&mvi=7&pl=22&initcwndbps=911250&bui=AWRWj2TyeZf3vPjGPtH3KbPOwDeXeFdeGkTDkT3wUoZWyzDy2Vv8vrctLUarf9x17Y4vJrzRn4OT_pMg&spc=UWF9f-iN9CPHiuF8-USknw3Se7de_WSiV42PaW0yWJo86aLXzv8ph25HXKLi&vprv=1&svpuc=1&mime=video%2Fmp4&ns=db1x4PfdUZN2sU8Bxb9Z9EcQ&gir=yes&clen=27574275&dur=148.066&lmt=1713738752448652&mt=1714655581&fvip=5&keepalive=yes&c=WEB&sefc=1&txp=5432434&n=yTVLrIX1tl732g&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHWaYeowRQIhAOMT-ib-bSs1CA3p2DPBJuxI8Cdahxm_QXDEp6yfW3XIAiAMAsXTshiDyBtYvy8qN8ygJMjXyyziqFA-j0xeeulBig%3D%3D&sig=AJfQdSswRAIgYMusVKj1NsMn6MPIFxDTNbwewu-2AVf7OGrNX9vTSn0CIAWoOcPAHhYdEf_IQ7g0b1CasnWpA_4IXdbCoiEeEgFg"
// width
// :
// 1280
