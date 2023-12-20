import { news, sideNews } from "@/shared/constants/constants";
import cls from "./MainNews.module.scss";
import { Card } from "@/entities/Card";
import Button from "@/shared/ui/Button/Button";
import { Sidebar } from "@/widgets/SidebarNews";

export const MainNews = () => {
  return (
    <section className={cls.main}>
      <div className={cls.main__body}>
        <div className={cls.main__news}>
          {news.map((el, index) => (
            <Card
              text={el.text}
              image={el.image}
              alt=''
              date={el.date}
              key={index}
            />
          ))}
        </div>
        <Button className={cls.main__button}>Загрузить еще</Button>
      </div>

      <div className={cls.sidebar__news}>
        {sideNews.map((el, index) => (
          <Sidebar text={el.text} date={el.date} key={index} />
        ))}
      </div>
    </section>
  );
};
