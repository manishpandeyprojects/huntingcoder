import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import PostImage from "../../../public/blogpost.avif";


const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <style jsx>
        {`
      .container{
        max-width: 850px;
        margin: 0 auto;  
        padding: 0 1rem
      }
      .date{
        display: block;
        color: #999;
      }
      p, .date{
        margin-bottom: 12px;
      }
      .content{
        margin-top:20px;
      }
      .imagewrapper{
        margin: 20px 0;
      }
      `}
      </style>
      <div className='container'>
        <h1>Thik is the title of a Blog - {slug}</h1>
        <hr />
        <div className="content">
          <span className="date">12 / 03/ 2023</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptates dolor quisquam quae laudantium, quis reprehenderit tenetur deserunt aut ducimus saepe doloribus enim sunt vitae modi temporibus dolore. Quasi nostrum dolores totam, nam quibusdam iste eos, nemo explicabo velit aperiam provident aliquam minima corrupti rem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptates dolor quisquam quae laudantium, quis reprehenderit tenetur deserunt aut ducimus saepe doloribus enim sunt vitae modi temporibus dolore. Quasi nostrum dolores totam, nam quibusdam iste eos, nemo explicabo velit aperiam provident aliquam minima corrupti rem.</p>

          <div className="imagewrapper">
            <Image src={PostImage} className='image' />
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptates dolor quisquam quae laudantium, quis reprehenderit tenetur deserunt aut ducimus saepe doloribus enim sunt vitae modi temporibus dolore. Quasi nostrum dolores totam, nam quibusdam iste eos, nemo explicabo velit aperiam provident aliquam minima corrupti rem.</p>

        </div>
      </div>
    </>
  )
}

export default Post
