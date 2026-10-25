import { useEffect, useRef, useState } from 'react';
import styles from './Kilburnazon.module.css';

export default function ProjectGallery({ images, label, children, className = '' }) {
  const [index, setIndex] = useState(0);
  const viewer = useRef(null), originalViewport = useRef(null);
  useEffect(() => { originalViewport.current?.scrollTo(0, 0); }, [index]);
  const image = images[index];
  const src = file => import.meta.env.BASE_URL.replace(/\/$/, '') + '/projects/' + file;
  const select = delta => setIndex(current => (current + delta + images.length) % images.length);
  return <div className={styles.gallery + ' ' + className} style={{ '--gallery-image-count': images.length, '--gallery-image-ratio': image.width / image.height }} role="region" aria-label={label} aria-roledescription="carousel">
    <a className={styles.imageLink} href={src(image.file)} target="_blank" rel="noopener noreferrer" aria-label={'View ' + image.caption + ' at full size'} onClick={event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault(); viewer.current.showModal();
    }}><img className={styles.preview} src={src(image.file)} alt={image.alt} width={image.width} height={image.height} loading="lazy" /></a>
    <div className={styles.controls}>
      <button type="button" aria-label="Previous screenshot" onClick={() => select(-1)}>Previous</button>
      <span className={styles.caption} aria-live="polite" aria-atomic="true">{image.caption} / {index + 1} / {images.length}</span>
      <button type="button" aria-label="Next screenshot" onClick={() => select(1)}>Next</button>
    </div>
    <div className={styles.thumbnails} aria-label="Choose screenshot">{images.map((item, i) => <button type="button" key={item.file} aria-label={item.caption} aria-pressed={index === i} onClick={() => setIndex(i)}><img src={src(item.file)} alt="" width={item.width} height={item.height} loading="lazy" /></button>)}</div>
    {children}
    <dialog onKeyDown={event => { if (event.key === 'Escape') { event.preventDefault(); viewer.current.close(); } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); select(event.key === 'ArrowLeft' ? -1 : 1); } }} ref={viewer} className={styles.imageDialog} aria-label={image.caption + ' at original resolution'} onClick={event => { if (event.target === viewer.current) viewer.current.close(); }}>
      <div className={styles.toolbar}><div className={styles.viewerNavigation}><button type="button" aria-label="Previous enlarged screenshot" onClick={() => select(-1)}>Previous</button><span aria-live="polite">{image.caption} / {index + 1} / {images.length}</span><button type="button" aria-label="Next enlarged screenshot" onClick={() => select(1)}>Next</button></div><a href={src(image.file)} target="_blank" rel="noopener noreferrer">Open original image</a><button type="button" onClick={() => viewer.current.close()}>Close image</button></div>
      <div ref={originalViewport} className={styles.originalViewport} tabIndex="0" role="region" aria-label="Full-resolution screenshot, scroll to inspect"><img src={src(image.file)} alt={image.alt} width={image.width} height={image.height} /></div>
    </dialog>
  </div>;
}
