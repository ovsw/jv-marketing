/** Staff read times in the office time zone, whatever the browser's zone is. */
export const receivedTime = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "America/Phoenix",
});
