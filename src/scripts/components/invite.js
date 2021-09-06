export default class Invite {
  constructor(node) {
    this.node = node

    console.log(this)
  }
}

function createCalendar(title, startDate, endDate) {
  let startTime = startDate.toISOString().replace(/-|:|\.\d+/g, '')
  let endTime = endDate.toISOString().replace(/-|:|\.\d+/g, '')
  let href = encodeURI(
    'data:text/calendar;charset=utf8,' +
      [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'BEGIN:VEVENT',
        'URL:' + document.URL,
        'DTSTART:' + (startTime || ''),
        'DTEND:' + endTime,
        'SUMMARY:' + (title || ''),
        'DESCRIPTION:' + '',
        'LOCATION:' + '',
        'END:VEVENT',
        'END:VCALENDAR',
      ].join('\n'),
  )

  document.getElementById('localtime').href = href
}
