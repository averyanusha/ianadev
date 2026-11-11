"use client"

import { useState, useEffect } from 'react';
import styles from './Portfolio.module.css';
import Link from 'next/link';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import { portfolioProject } from './data/portfolioProjects';

type PropType = {
  slides: number[],
  options?: EmblaOptionsType
}

type DotButtonType = {
  selectedIndex: number,
  scrollSnaps: number[],
  onDotButtonClick: (index: number) => void
}


export default function Portfolio(props: PropType) {
  const { slides, options } = props;
  const [ emblaRef, emblaApi ] = useEmblaCarousel({loop: true}, [ClassNames({ snapped: styles.isSnapped })]);
  const [ selectedIndex, setSelectedIndex ] = useState(0);
  const [ scrollSnaps, setScrollSnaps ] = useState<number[]>([]);

  useEffect(() => {
    if(!emblaApi)
      return;
    const update = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    update();
    emblaApi.on('select', update)
  }, [emblaApi])

  return (
    <section id="portfolio" className="section">
      <h2 className="section-title">Portfolio</h2>
      <p className={styles.description}> The world of web Design and Development is constantly evolving and so I am,  every project i am taking is unique and teaching me something new
      </p>
      <div className={styles.carousel} ref={emblaRef}>
        <div className={styles.carouselContainer}>
          {portfolioProject.map((project) => {
            return (
              <Link href={`/portfolio/${project.id}`} key={project.id} className={styles.carouselSlide}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.carouselSlideImg}
                />
                <h3>{project.title}</h3>
              </Link>
            )
          })}
        </div>
      </div>
      <div className={styles.carouselButtons}>
        <div className={styles.carouselDots}>
          {portfolioProject.map((_, i) => {
            return (
              <button key={i} className={`${styles.carouselDot} ${i === selectedIndex ? styles.carouselDotSelected : ''}`} onClick={() => emblaApi?.scrollTo(i)}></button>
            )
          })}
        </div>
      </div>
    </section>
  )
}