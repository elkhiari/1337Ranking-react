
import {useEffect ,useState} from 'react'
import axios from 'axios';






export default function Test()



{
    const [compus_id,setCompus] = useState('16');
    const [data,setData] = useState([]);
        useEffect(() => {
            var config = {
                method: 'get',
                url: 'https://api.intra.42.fr/v2/cursus_users?filter[campus_id]='+compus_id+'&sort=-level&per_page=300&page=X&access_token=eb1970909d3601733e7145653f06c9b051be0e865f680a4a98364512447698d1',
                headers: { 
                  'Cookie': '_intra_42_session_production=d376d7f338e260792c682ac146ba6d37; _mkra_stck=76c872e3efb1aee4e241b156a75a27f2%3A1672278511.6384468'
                }
              };
              
              axios(config)
              .then(function (response) {
                setData(response.data);
              });
        }, []);


    const changeCompus = (event) => {
      setCompus(event.target.value)
    }
    
    
    return(
        <div class="flex flex-col mb-10  items-center  bg-gradient-to-t from-[#e7e9fe] via-[#c8ebfd] to-[#e7e9fe]  h-screen">
            

            <div className=' w-screen  h-20 flex flex-wrap place-content-center place-items-center'>
                <div class="w-1/2 flex ">
                    <select onChange={changeCompus} disabled  class=" border mr-4 border-green-400 border-3 text-gray-900 text-sm rounded-lg focus:border-4 outline-none duration-150 focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="16" selected>Khouribga</option>
                        <option value="21">Benguerir</option>
                        <option value="55">Tétouan</option>
                    </select>
                    

                </div>
            </div>




    <div class="  mt-10  border-gray-300 border bg-white divide-y rounded-lg flex-none w-full md:w-1/2 lg:w-1/2">
        <div class="  flex w-full h-full  flex-col space-y-2 divide-y">

            {data.map((a,index)=>(
            <div class="flex justify-between space-x-6 items-center p-6">
                <div class="flex items-center space-x-4">
                <div class=" rounded-md flex place-content-center place-items-center font-bold text-2xl  px-2 py-2">
                        {index}
                    </div>
                    <img src={a.user.image.versions.medium} class="rounded-full h-14 w-14" alt=""/>
                    <div class="flex flex-col space-y-2   w-8/12">
                        <span className='font-bold'>{a.user.usual_full_name}</span>
                        <span>{a.user.login}</span>
                    </div>
                    
                </div>
                <div className="flex flex-wrap place-content-end place-items-center">
                    <a href={"https://profile.intra.42.fr/users/"+a.user.login} class="border rounded-md px-4 py-2 cursor-pointer m-2 w-20 place-content-center place-items-center">
                        Intra
                    </a>
                    <div class="bg-green-400 border rounded-md px-4 py-2 m-2 w-20 place-content-center place-items-center">
                        {a.level}
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
</div>
    )
}
