import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation";
import type { ChangeEvent } from "react";
import styles from './LanguageSwitch.module.css';

export default function LanguageSwitch() {
  const language = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!event)
      return;
    const newLocal = event.target.value;
    router.replace(pathName, {locale: newLocal})
  }
  return (
    <select className={styles.select} onChange={handleChange} value={language}>
      <option className={styles.option} value="en">en</option>
      <option className={styles.option} value="fr">fr</option>
      <option className={styles.option} value="ru">ru</option>
    </select>
  )
}