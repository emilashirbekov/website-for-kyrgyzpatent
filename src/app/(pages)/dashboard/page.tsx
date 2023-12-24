import { Card } from "@/entities/Card";
import cls from "./dashboard.module.css";
import { news } from "@/shared/constants/constants";

export default function Home() {
  return (
    <section className={cls.news}>
      <h1 className='text-blue mb-5 text-2xl'>Все новости</h1>
      <ul className={cls.news__list}>
        {news.map((el) => (
          <li className={cls.news__item}>
            <Card text={el.text} date={el.date} key={el.id} image={el.image} />
          </li>
        ))}
      </ul>
    </section>
  );
}
