import './App.css';
import { useGetAllPostQuery } from './Api/post ';
import { useGetPostByIdQuery } from './Api/post ';
import { useGetPostByLimitQuery } from './Api/post ';

import { useDeletePostByIdMutation } from './Api/post ';
import { useCreatePostMutation } from './Api/post ';

function App() {
  //Here we fetch all the data without passing any argument
  const responseInfo=useGetAllPostQuery();
  // const [data, isError, isLoading, isSuccess]=useGetAllPostQuery();

  //Here we fetch perticular data by passing id 
  const responsein=useGetPostByIdQuery(5);

  //here we fetch only 6 data from API by passing limit
  const response=useGetPostByLimitQuery(6);

  const [deletePost, resInfo]=useDeletePostByIdMutation();

  const [createPost, resInfom]=useCreatePostMutation();


  // console.log("Response Information:", responseInfo);
  // console.log("Response Information:", responsein);
  // console.log("Response Information:",resInfom);


  // if(loading)
  // {
  //   console.log("Loading...............");
  // }

 //............ creating object to pass it in useCreatePostMutation..............
  // const create={
  //   title:"This is new title",
  //   body:"This is new body",
  //   userId:1,
  // }
  return (
    <div>
      {/* ............................................fetch data.......................... */}
    <div>
      <h1>Information</h1>
        {
          responseInfo.data.map((element, index)=>
            <div key={index}>
               <h3>Title : {element.title}</h3>
            </div>
          )
        }
    </div>

    {/* <div>
      <h1>{responsein.data.id}</h1>
      <h1>{responsein.data.title}</h1>
      <h1>{responsein.data.body}</h1>

    </div> */}

{/* <div>
      <h1>Information</h1>
        {
          response.data.map((element, index)=>
            <div key={index}>
               <h3>Title : {element.title}</h3>
            </div>
          )
        }
    </div> */}

{/* ............................................Delete Data...................................... */}

    {/* <div>
      <button onClick={()=>{deletePost(2)}}>Delete</button>
    </div> */}

{/* ..............................................Create Data................................... */}
{/* <div>
<button onClick={()=>{createPost(create)}}>Create Post</button>
</div> */}

    </div>
  );
}

export default App;
