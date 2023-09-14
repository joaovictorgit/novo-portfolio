import {
  ContainerCalendar,
  ContainerDurationCourses,
  ContainerImageNameCourse,
  ContainerItemCourses,
  ContainerNameCourse,
  ContainerTextsNameCourse,
  TextNameCourse,
} from "./item-courses-style";
import { MdCalendarMonth } from "react-icons/md";

const ItemCourses = () => {
  return (
    <ContainerItemCourses>
      <ContainerDurationCourses>
        <ContainerCalendar>
          <MdCalendarMonth size={20} color="#000" />
          <label>06/2022</label>
        </ContainerCalendar>
        <label>Duração: 2 meses</label>
      </ContainerDurationCourses>

      <ContainerNameCourse>
        <ContainerImageNameCourse></ContainerImageNameCourse>
        <ContainerTextsNameCourse>
          <TextNameCourse size="14px" weight="700">
            Instituto Atlântico
          </TextNameCourse>
          <TextNameCourse size="12px" weight="500">
            Desenvolvimento FullStack
          </TextNameCourse>
        </ContainerTextsNameCourse>
      </ContainerNameCourse>
    </ContainerItemCourses>
  );
};

export default ItemCourses;
