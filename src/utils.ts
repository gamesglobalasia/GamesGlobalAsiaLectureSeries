export function getSecondTuesday(year: number, month: number): Date {
  // month is 0-indexed (0 = Jan, 11 = Dec)
  const firstDay = new Date(year, month, 1);
  const dayOfWeek = firstDay.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, ...
  
  // Days until first Tuesday (2)
  let daysToFirstTuesday = 2 - dayOfWeek;
  if (daysToFirstTuesday < 0) {
    daysToFirstTuesday += 7;
  }
  const firstTuesdayDate = 1 + daysToFirstTuesday;
  const secondTuesdayDate = firstTuesdayDate + 7;
  
  // Return the date object representing the second Tuesday
  return new Date(year, month, secondTuesdayDate);
}

export function getNextSecondTuesday(fromDate: Date): Date {
  let year = fromDate.getFullYear();
  let month = fromDate.getMonth();
  
  // Calculate second Tuesday of current month
  let secondTuesday = getSecondTuesday(year, month);
  
  // Create comparable dates (just year, month, date)
  const startOfToday = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
  const startOfSecondTuesday = new Date(secondTuesday.getFullYear(), secondTuesday.getMonth(), secondTuesday.getDate());
  
  if (startOfToday > startOfSecondTuesday) {
    month += 1;
    if (month > 11) {
      month = 0;
      year += 1;
    }
    secondTuesday = getSecondTuesday(year, month);
  }
  return secondTuesday;
}

export function formatEventDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function downloadIcsFile(title: string, description: string, date: Date) {
  // Set start to 10:00 AM on that day (e.g. UTC, but we'll export standard date)
  const start = new Date(date);
  start.setHours(10, 0, 0, 0); // 10:00 AM
  const end = new Date(date);
  end.setHours(12, 0, 0, 0); // 12:00 PM (2 hours duration)

  const formatDate = (d: Date) => {
    return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Games and Global Asia//NONSGML Lecture Series//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `DTSTART:${formatDate(start)}`,
    `DTEND:${formatDate(end)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
    'LOCATION:Online (Virtual Link TBA)',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${title.toLowerCase().replace(/\s+/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
