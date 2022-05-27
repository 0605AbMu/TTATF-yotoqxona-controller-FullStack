import * as jfs from "jsonfile";
import { TStudentArray } from "../types/studentTypes";
export const students: TStudentArray = jfs.readFileSync("DATA/student-databases.json");



