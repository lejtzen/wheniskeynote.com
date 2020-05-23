let start = new Date(month + '/' + day + '/' + year + ' ' + hour + ':' + minute + ' GMT-0700'),
    end = new Date(month + '/' + day + '/' + year + ' ' + (hour+2) + ':' + minute + ' GMT-0700'),
    now = new Date(),
    distance = start - now,
    _second = 1000,
    _minute = _second * 60,
    _hour = _minute * 60,
    _day = _hour * 24,
    timer;

const stagger = function(str) {
  return String(str).split(' ').map(function (word, index) {
    return '<span class="stagger-wrapper"><span class="stagger" style="animation-delay: ' + (index + 1) * 50 + 'ms;">' + word + '</span></span>';
  }).join(' ');
}

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      eventHtml = '<div class="gradient"><div class="gradient-inner"><h2><a href="https://www.apple.com/apple-events/" title="Apple Special Events" target="_blank">' + stagger(eventName) + '</a></h2></div></div><h3>In your time zone, this event will be held on <a id="localtime" href="#" title="Add to calendar">' + dayNames[start.getDay()] + ', ' + monthNames[start.getMonth()] + ' ' + start.getDate() + ' at ' + ("0" + start.getHours()).slice(-2) + ':' + ("0" + start.getMinutes()).slice(-2) + '</a>. In <span id="days"></span> days, <span id="hours"></span> hours, <span id="minutes"></span> minutes and <span id="seconds"></span> seconds.</h3>';

// 7200000 = 2 hours
if (distance < -7200001) {
  document.getElementById('response').innerHTML += '<div class="gradient"><div class="gradient-inner"><h2>' + stagger('No event confirmed at this time') + '</h2></div></div>';
} else if (distance > -7200000 && distance < 0) {
  document.getElementById('response').innerHTML += eventHtml;
  document.getElementById('days').innerText = '00';
  document.getElementById('hours').innerText = '00';
  document.getElementById('minutes').innerText = '00';
  document.getElementById('seconds').innerText = '00';
} else {
  document.getElementById('response').innerHTML += eventHtml;
  showRemaining();
  timer = setInterval(showRemaining, 1000);
  createCalendar(eventName, start, end);
}

function showRemaining() {
  let now = new Date(),
      distance = start - now;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById('days').innerText = "0";
    document.getElementById('hours').innerText = "0";
    document.getElementById('minutes').innerText = "0";
    document.getElementById('seconds').innerText = "0";

    return;
  }

  let days = Math.floor(distance / _day),
      hours = Math.floor((distance % _day) / _hour),
      minutes = Math.floor((distance % _hour) / _minute),
      seconds = Math.floor((distance % _minute) / _second);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}

function createCalendar(title, startDate, endDate) {
  let startTime = startDate.toISOString().replace(/-|:|\.\d+/g, '');
  let endTime = endDate.toISOString().replace(/-|:|\.\d+/g, '');
  let href = encodeURI(
    'data:text/calendar;charset=utf8,' + [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      'URL:' + document.URL,
      'DTSTART:' + (startTime || ''),
      'DTEND:' + (endTime),
      'SUMMARY:' + (title || ''),
      'DESCRIPTION:' + (''),
      'LOCATION:' + (''),
      'END:VEVENT',
      'END:VCALENDAR'].join('\n')
  );

  document.getElementById('localtime').href = href;
}

document.getElementById('year').innerText += new Date().getFullYear();
