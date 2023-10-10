import { DialogContent } from "@/components/ui/dialog";
import { CourseMacro } from "@/lib/validations/course";
import { Badge } from "@/components/ui/badge";

export default function CourseMacroContent({
  course,
}: {
  course: CourseMacro;
}) {
  return (
    <DialogContent>
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Course Info</h4>
          <p className="text-sm text-muted-foreground">
            Following are course info.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid grid-cols-4 items-center">
            <span className="text-gray-500 row-span-1">id</span>
            <span className="col-span-3">{course.id}</span>
          </div>
          <div className="grid grid-cols-4 items-center">
            <span className="text-gray-500 row-span-1">code</span>
            <span className="col-span-3">{course.courseCode}</span>
          </div>
          <div className="grid grid-cols-4 items-center">
            <span className="text-gray-500 row-span-1">name</span>
            <span className="col-span-3">{course.courseName}</span>
          </div>
          <div className="grid grid-cols-4 items-center">
            <span className="text-gray-500 col-span-1">tags</span>
            <div className="col-span-3">
              {course.courseTags.map((t) => (
                <Badge key={t} className="mr-1">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center">
            <span className="text-gray-500 col-span-1">credit</span>
            <div className="col-span-3">
              <Badge className="bg-blue-400">{course.courseCredit}학점</Badge>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center">
            <span className="text-gray-500 col-span-1">pre-requisite</span>
            <div className="col-span-3">
              {course.prerequisite.trim().length !== 0 ? (
                <span>{course.prerequisite}</span>
              ) : (
                <span className="text-gray-500">No pre-requisite</span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center">
            <span className="text-gray-500 col-span-1">description</span>
            <div className="col-span-3">
              {course.description ?? (
                <span className="col-span-2 text-gray-500">No description</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
