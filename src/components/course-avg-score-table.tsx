import { getUserAvgData } from "@/lib/const/user-avg-data";
import { DeltaBar, Text } from "@tremor/react";
import {
  TableHeader,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export async function CourseAvgScoreTable() {
  const data = await getUserAvgData();
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Semester</TableHead>
            <TableHead>Avg Grade</TableHead>
            <TableHead>Number of Students</TableHead>
          </TableRow>
        </TableHeader>
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
                <Badge variant="outline">
                  {item.average_grade?.toFixed(2)}
                </Badge>
              </TableCell>
              <TableCell>
                <DeltaBar
                  value={(item.num_students as number) * 2.5}
                  isIncreasePositive
                  className="mt-3"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
