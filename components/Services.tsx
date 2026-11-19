
import { MonitorSmartphone, AppWindow, Bot, Wrench, LucideIcon } from 'lucide-react'
import style from './Services.module.css';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');
  const items = [
    {
      id: 1,
      sector: "items.business",
      icon: MonitorSmartphone
    },
    {
      id: 2,
      sector: "items.apps",
      icon: AppWindow
    },
    {
      id: 3,
      sector: "items.ai",
      icon: Bot
    },
    {
      id: 4,
      sector: "items.maintenance",
      icon: Wrench
    }
  ]
  return (
    <section className="section" id="services">
      <h2 className="section-title">{t('title')}</h2>
      <div className={style.services}>
        {items.map((item) => {
          const Icon = item.icon;
          return(
            <div className={style.service}>
              <Icon/>
              <h3 className={style.serviceTitle}>{t(`${item.sector}.title`)}</h3>
              <p className={style.serviceText}>{t(`${item.sector}.description`)}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}