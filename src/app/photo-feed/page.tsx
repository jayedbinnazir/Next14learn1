import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import wondersImages, { WonderImage } from './wonders';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Image from 'next/image';
import Link from 'next/link';
import "./styles.css";



const Allphotos= () => {
  return (
    
      <ImageList sx={{ width: 800, height: 550, mx:'auto' }}  >
        <ImageListItem key="Subheader" >
        <ListSubheader component="div">Wonder Of the Worlds</ListSubheader>
      </ImageListItem>
      {
        wondersImages.map(({id,src,name,photographer,location}:WonderImage)=>{
          return <ImageListItem key={id} >
              <Link href={`photo-feed/${id}`} >
              <Image
                alt={name}
                src={src}
                className="w-full object-cover aspect-square"
            />
              </Link>
              <ImageListItemBar
            title={name}
            subtitle={<span>{location}</span>}
            position="below"
          />
          </ImageListItem>
        })
      }
      </ImageList>
    
  )
}

export default Allphotos;