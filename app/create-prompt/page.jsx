'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


import Form from '@components/Form'

const CreatePrompt = () => {

    const [submitting, setSubmitting] = useState(false)

    const [post, setPost] = useState({
        prompt:'',
        tag:'',
    })
  return (
   <Form
   type='Create'
   post={post}
   setPost={setPost}
   submitting={submitting}
   setSubmitting={setSubmitting}

   />
  )
}

export default CreatePrompt 