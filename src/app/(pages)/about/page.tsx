import EventCalendar from "./ui/EventCalendar/EventCalendar";
import EventsList from "./ui/EventList/EventsList";
import cls from "./About.module.scss";
import { news } from "@/shared/constants/constants";
import { Card } from "@/entities/Card";
import Button from "@/shared/ui/Button/Button";

const About = () => {
  return (
    <section className={cls.about}>
      <div className={cls.about__body}>
        <h1 className={cls.about__title}>Мероприятия за неделю</h1>
        <div className={cls.about__events}>
          <EventsList />
          <EventCalendar />
        </div>
      </div>
      <div className={cls.about__news}>
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
    </section>
  );
};

export default About;
