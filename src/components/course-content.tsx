import { getUserAvgData } from "@/lib/const/user-avg-data";

export async function CourseContent() {
  const data = await getUserAvgData();
  return (
    <div>
      {data.map((course, idx) => (
        <div key={idx}>
          <div>
            <span>{course.course_code}</span>
            <span>{course.course_name}</span>
            <span>{course.year}</span>
          </div>
          <div>평균 성적 : {course.average_grade}</div>
        </div>
      ))}
    </div>
  );
}
