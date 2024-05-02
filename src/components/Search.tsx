import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton({url,setUrl,fatchApi}: {
    url: any;
    setUrl: any;
    fatchApi:any
}) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2 ">
      <Input type="YouTube" onChange={(e)=>{
        setUrl(e.target.value)
      }} placeholder="Youtube Video Link" value={url}  />
      <Button type="submit" onClick={fatchApi}>Download</Button>
    </div>
  )
}
