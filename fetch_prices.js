import https from 'https';
import fs from 'fs';

https.get('https://nattslashesnm.glossgenius.com/services', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
      const servicesMatch = data.match(/<script id="__NEXT_DATA__" type="application\/json">(.*?)<\/script>/);
      if (servicesMatch) {
         fs.writeFileSync('next_data.json', servicesMatch[1]);
         console.log("Written to next_data.json");
      } else {
         console.log("No NEXT_DATA found");
      }
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
