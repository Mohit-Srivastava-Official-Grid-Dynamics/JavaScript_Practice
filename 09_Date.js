// dateTimeDemo.js

// 1. Current Date and Time
const now = new Date();
console.log("Current Date and Time:", now);

// 2. Date from string
const specificDate = new Date("2026-03-11");
console.log("Specific Date:", specificDate);

// 3. Date from numbers (year, month, day, hours, minutes, seconds)
// Month starts from 0 (0 = January, 1 = February)
const customDate = new Date(2026, 2, 11, 10, 30, 15);
console.log("Custom Date:", customDate);

// 4. Convert date to different formats
console.log("toString():", now.toString());
console.log("toDateString():", now.toDateString());
console.log("toISOString():", now.toISOString());
console.log("toLocaleString():", now.toLocaleString());
console.log("toLocaleDateString():", now.toLocaleDateString());
console.log("toLocaleTimeString():", now.toLocaleTimeString());

// 5. Get individual date components
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day (0=Sunday):", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());

// 6. Timestamp (milliseconds since Jan 1, 1970)
console.log("Timestamp:", Date.now());

// 7. Convert timestamp to Date
const timestamp = Date.now();
const dateFromTimestamp = new Date(timestamp);
console.log("Date from timestamp:", dateFromTimestamp);

// 8. Modify date values
const modifiedDate = new Date();
modifiedDate.setFullYear(2030);
modifiedDate.setMonth(5); // June
modifiedDate.setDate(15);
console.log("Modified Date:", modifiedDate);

// 9. Compare dates
const date1 = new Date("2025-01-01");
const date2 = new Date("2026-01-01");

if (date1 < date2) {
    console.log("date1 is earlier than date2");
}

// 10. Calculate difference between two dates
const diffMs = date2 - date1;
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log("Difference in days:", diffDays);