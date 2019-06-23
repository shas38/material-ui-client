import React, {useEffect, useReducer} from 'react';

type IappState = {
  writers?: Array<object>,
  isLoading: boolean,
  isError: boolean,
}
type IappAction = {
  type: string,
  payload?: Array<object>,
}

export default (props: any) => {

  const initialDataFetchReducer = (state: IappState, action: IappAction) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          writers: action.payload,
        };
      case 'FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(initialDataFetchReducer, {
    isLoading: false,
    isError: false,
    writers: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT'});
      try{
        const result = await fetch("http://localhost:5000/writers");
        const writers = await result.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: writers });
      }
      catch(err){
        dispatch({ type: 'FETCH_FAILURE' });
      }
    }

    fetchData();
  }, []);

  return (
    <div>
        {state.isError && <div>Something went wrong ...</div>}
        {state.isLoading?<div>loading...</div>:<ul>
        {
        !state.isError && state.writers!.map((data:any)=>{
            return <li key={data.id}>{data.name}</li>
            })
        }
        </ul>}
    </div>
  );
}
