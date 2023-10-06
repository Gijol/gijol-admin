import { getUserAvgData } from "@/lib/const/user-avg-data";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Badge,
} from "@tremor/react";

export async function CourseContent() {
  const data = await getUserAvgData();
  return (
    <Card>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Code</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Year</TableHeaderCell>
            <TableHeaderCell>Semester</TableHeaderCell>
            <TableHeaderCell>Avg Grade</TableHeaderCell>
            <TableHeaderCell>Number of Students</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.course_name}>
              <TableCell>{item.course_code}</TableCell>
              <TableCell>
                <Text>{item.course_name}</Text>
              </TableCell>
              <TableCell>{item.year}</TableCell>
              <TableCell>{item.semester}</TableCell>
              <TableCell>
                <Badge color="emerald">{item.average_grade?.toFixed(2)}</Badge>
              </TableCell>
              <TableCell>{item.num_students}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
