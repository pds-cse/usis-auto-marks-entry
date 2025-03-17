# usis-auto-marks-entry

## Overview
This script automates the process of entering marks into the USIS system. Unlike previous approaches, the order of student IDs does not matter. The script compares student IDs against those in USIS to ensure accurate mark assignment, preventing errors where a student might receive another's marks.

## Features
- Automatically detects and matches student IDs from the grade sheet with those in USIS.
- Ensures marks are assigned correctly by comparing IDs.
- Provides an option to clear existing marks if needed.
- Simple execution process (watch the attached demonstration video for guidance).

## Usage

### Step 1: Generate Student IDs with Grades
Use the following formula in your gradesheet to generate a list of student IDs and their corresponding grades. Modify the `J``:J` column name to indicate the `Total (100.00)` column.

```excel
="var student_ids_with_grades = [" & TEXTJOIN(", ", TRUE, FILTER(FLATTEN({B11:B, J11:J}), LEN(FLATTEN({B11:B, J11:J})) > 0)) & "];"
```

Copy the cell of this formula and paste it into the script as shown in the next step.

### Step 2: Execute the Script
Copy and paste the script into the browser console while on the USIS marks entry page.

```js
// Paste below the cell output copied from the grade sheet (see the video)

var x = document.getElementsByTagName('td');
var student_ids_usis = [];
var m = 28;

// Uncomment this block to clear all marks
// var k = 31;
// for (let i = 0; i < Math.floor(x.length/13)-1; i++) {
//     x[k].textContent = '';
//     k += 13;
// }

//// Comment the following block and uncomment the above one to clear marks for all

var k = 31;
for (let i = 0; i < Math.floor(x.length/13)-1; i++) {
    student_ids_usis.push(x[m].textContent);
    for (let j = 0; j < student_ids_with_grades.length; j += 2) {
        if(student_ids_usis[i] == student_ids_with_grades[j]) {
            x[k].textContent = student_ids_with_grades[j+1];
            break;
        }
    }
    k += 13;
    m += 13;
}
```

## Notes
- Ensure that you are on the correct USIS marks entry page before running the script.
- The script modifies the page dynamically; verify the results before final submission.
- If you need to clear all marks, follow the instructions within the script comments.

## License
This project is open-source and available for use and modification as needed.

## Disclaimer
Use at your own risk. The author is not responsible for any issues arising from misuse of the script.

Refer to this [video](https://youtu.be/pFDlC6ly6kU) if you need help.
---
