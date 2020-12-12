import React from 'react'
import {BiGitRepoForked} from 'react-icons/bi'
import {RiGitRepositoryPrivateFill} from 'react-icons/ri'

export default function GithubRepo({repo_data}) {
    const {id,name,owner,html_url:repo_url, description:repo_desc,created_at, fork,private:isPrivate_repo} = repo_data
    const {html_url:owner_html_url,avatar_url:owner_avatar_url,} = owner
    return (
        <div className='p-2 mt-4 w-full md:w-2/3 border-2 border-gray-400 rounded-lg hover:bg-gray-100 hover:shadow-md'>
            <a href={repo_url} target='_blank'>
                <div>
                    <h4 className='font-semibold'>{name}</h4>
                    <p className='mt-2'>{repo_desc}</p>
                    <div className='repo-footer mt-4 flex justify-between items-center'>
                        <a href={owner_html_url} target='_blank'>
                            <div>
                                <img className='h-8 w-8 rounded-full' src={owner_avatar_url} alt='user image' />
                            </div>
                        </a>
                        <div className='fork-created flex justify-center items-center'>
                            {isPrivate_repo&& <div className='p-2 bg-gray-200 rounded-lg' ><RiGitRepositoryPrivateFill /></div> }
                            {fork&& <div className='p-2 ml-2 bg-gray-200 rounded-lg'> <BiGitRepoForked /></div>}
                            <p className='ml-2'>{created_at.split('T')[0]}</p>
                        </div>


                    </div>

                </div>
            </a>

        </div>
    )
}
