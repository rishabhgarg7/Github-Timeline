import React, {useState} from 'react'
import classNames from "classnames";
import { useQuery } from 'react-query';
import UserGithubRepos from './UserGithubRepos';

export default function SearchUser() {
    const [userName, setUserName] = useState('')
    const handleUserNameChange = (evt) => {
        setUserName(evt.target.value)
      }

    const fetchRepos = async () => {

        const response = await fetch(`https://api.github.com/users/${userName}/repos?sort=created`, )
        if (!response.ok){
            const errorMessage = (response && response.message) || response.statusText;
            throw new Error(errorMessage)
        }
        const data = await response.json();
        // console.log(data)
        return data
 
   };
   const {data:repos, refetch,  isLoading, isSuccess, isError} = useQuery(['user/repos',userName],fetchRepos, {
       enabled:false,
       retry:1
   })

   
    const handleSubmit = (evt) => {
      evt.preventDefault()
      refetch()
    }

    const formClassnames = classNames({
        "bg-gray-100 border-gray-100": isLoading,
        'flex flex-col md:flex-row justify-center items-center': true,
    })

    const inputClassnames = classNames({
        "cursor-not-allowed ": isLoading,
        "w-64 md:w-80 p-2 border-2 border-gray-200 appearance-none rounded-lg focus:outline-none focus:border-black": true

    })

    const buttonClassname = classNames({
        'cursor-not-allowed opacity-50': isLoading,
        'mt-2 md:mt-0 md:ml-2 p-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white focus:outline-none focus:bg-black focus:text-white':true
    })

    return (
    <div className='mt-8 flex flex-col justify-center items-center'>
        <form className={formClassnames}  onSubmit={handleSubmit}>
            <input value={userName} onChange={handleUserNameChange} name="userName" disabled={isLoading} className={inputClassnames} type="text" id="username" placeholder="Enter username (@rishabhgrg77)" />
            <button type='submit' disabled={isLoading} className={buttonClassname}>
                {
                    isLoading? 'Processing..': 'Search'
                }
            </button>
        </form>
        {isError&&<p className='mt-1 text-red-500 text-sm font-normal'>No such username exists. Try another one.</p>}
        {
            repos && <UserGithubRepos repos={repos}/>
        }
    </div>
    )
}