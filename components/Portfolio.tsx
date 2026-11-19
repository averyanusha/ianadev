"use client"

import { useState, useEffect } from 'react';
import styles from './Portfolio.module.css';
import Link from 'next/link';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import { portfolioProject } from './data/portfolioProjects';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('portfolio');

  useEffect(() => {
    if(!emblaApi)
      return;
    const update = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    update();
    emblaApi.on('select', update)
  }, [emblaApi])

  return (
    <section id="portfolio" className="section">
      <h2 className="section-title">{t('title')}</h2>
      <p className={styles.description}>{t('intro')}</p>
      <div className={styles.carousel} ref={emblaRef}>
        <div className={styles.carouselContainer}>
          {portfolioProject.map((project) => {
            return (
              <Link href={`/portfolio/${project.id}`} key={project.id} className={styles.carouselSlide}>
                <img
                  src={project.image}
                  alt={t(`projects.${project.id}.title`)}
                  className={styles.carouselSlideImg}
                />
                <h3>{t(`projects.${project.id}.title`)}</h3>
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