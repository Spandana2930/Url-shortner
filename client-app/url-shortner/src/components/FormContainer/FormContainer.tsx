import * as React from "react";
import axios from 'axios'
import { serverUrl } from "../../helpers/Constants";
import bannerImg from '../../assets/blue-background.jpg'
interface FormContainerProps {
  updateReloadState:()=>void
}

const FormContainer: React.FunctionComponent<FormContainerProps> = (props) => {
   const { updateReloadState } = props;
  const [fullUrl,setUrl] = React.useState<string>("")
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
try{
await axios.post(`${serverUrl}/shorturl`,{
  fullUrl:fullUrl
});
setUrl('')
updateReloadState()
}catch(error){
  console.log(error)
}
  }
  return (
    <div className="container mx-auto p-2">
      <div className=" my-8 rounded-xl bg-center" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="w-full h-full rounded-xl p-20 ">
          <h2 className="text-white text-4xl text-center pb-4">Url shortner</h2>
          <p className="text-white text-center pb-2 text-xl font-extralight">
            Paste your untidy link to shortner
          </p>
          <p className="text-white text-center pb-4 text-sm">
            free tool to shorten a URL or reduce link, use my URL shortner to
            create a shortened & neat link making it easy
          </p>
          <form onSubmit={handleSubmit}> 
            <div className="flex">
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
                  url shortner.link/
                </div>
                <input
                  type="text"
                  placeholder="add your link"
                  required
                  value = {fullUrl}
                  className="block w-full p-4  ps-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:borer-blue-500"
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUrl(e.target.value)}
                />
                <button type='submit' className=" absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue">Shorten URL</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
