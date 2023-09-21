import {
  ContainerCalendar,
  ContainerDurationCourses,
  ContainerImageNameCourse,
  ContainerItemCourses,
  ContainerNameCourse,
  ContainerTextsNameCourse,
  LogoInstitute,
  TextNameCourse,
} from "./item-courses-style";
import { MdCalendarMonth } from "react-icons/md";

const ItemCourses = ({ date, duration, institute, name_course, image }) => {
  return (
    <ContainerItemCourses>
      <ContainerDurationCourses>
        <ContainerCalendar>
          <MdCalendarMonth size={20} color="#ffffff" />
          <label>{date}</label>
        </ContainerCalendar>
        <label>
          Duração: {duration} {parseInt(duration) !== 1 ? "meses" : "mês"}
        </label>
      </ContainerDurationCourses>

      <ContainerNameCourse>
        <ContainerImageNameCourse>
          <LogoInstitute
            src={require(`../../assets/${image}`)}
            alt="Intituição"
          />
        </ContainerImageNameCourse>
        <ContainerTextsNameCourse>
          <TextNameCourse size="14px" weight="700">
            {institute}
          </TextNameCourse>
          <TextNameCourse size="12px" weight="500">
            {name_course}
          </TextNameCourse>
        </ContainerTextsNameCourse>
      </ContainerNameCourse>
    </ContainerItemCourses>
  );
};

export default ItemCourses;
