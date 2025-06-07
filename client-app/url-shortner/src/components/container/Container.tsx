import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import type { UrlData } from '../interface/UrlData';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';
import DataTable from '../DataTable/DataTable';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = (props) => {
  const [data,setData] = React.useState<UrlData>([])
  const [reload,setReload] = React.useState<boolean>(false)
  const updateReloadState = ():void =>{
    setReload(true)
  }
  const fetchDataTable = async() =>{
    const response = await axios.get(`${serverUrl}/shortUrl`)
    // console.log('response from server is',response)
    setData(response.data)
    setReload(false)
    
  }
  React.useEffect(()=>{
    fetchDataTable()
  },[reload])
  return (
   <>
   <FormContainer updateReloadState = {updateReloadState}/>
   <DataTable updateReloadState = {updateReloadState}  data = {data}/>
   </>
    
  );
};

export default Container;
