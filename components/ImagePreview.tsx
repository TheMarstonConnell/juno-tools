import { useEffect, useState } from 'react'

import Image from 'next/Image'
export interface ImagePreviewProps {
    response: any
}

export const ImagePreview = ({ response }: ImagePreviewProps) => {
    const [image, setImage] = useState('');

    useEffect(() => {

        async function getImage()  {
            if (!response) {
                return
            }
            let token = JSON.parse(response.token_uri)
            const findFileUrl = "https://api.jackalprotocol.com/jackal-dao/canine-chain/storage/find_file/"
            let r = await fetch(findFileUrl + token.image)
            let j = await r.json()
            r = await fetch(JSON.parse(j.provider_ips)[0] + "/download/" + token.image)
            let img = await r.blob()
            let b = URL.createObjectURL(img)
            console.log(b)
            setImage(b)
        }

        if (!image) {
            getImage()
        }
    })
    if (!response) return null
    if (!image) return null

    return (
        <img width={300} src={image}></img>
    )

}
