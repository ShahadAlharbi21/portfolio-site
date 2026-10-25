import { useRef } from 'react';
import { kilburnazonImages } from './kilburnazon-images';
import KilburnazonSchema from './KilburnazonSchema';
import ProjectGallery from './ProjectGallery';
import styles from './Kilburnazon.module.css';

const images = kilburnazonImages.map(image => ({ ...image, file: 'kilburnazon/' + image.file }));

export default function KilburnazonGallery() {
  const schema = useRef(null);
  return <>
    <ProjectGallery images={images} label="Kilburnazon application screenshots">
      <a className={styles.schemaLink} href="#kilburnazon-schema" onClick={event => { event.preventDefault(); schema.current.showModal(); }}>View Database Schema</a>
    </ProjectGallery>
    <KilburnazonSchema dialogRef={schema} />
  </>;
}
