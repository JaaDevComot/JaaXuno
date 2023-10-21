const axios = require('axios')
const cheerio = require('cheerio')
async function chatgpt(text) {
const payload = {
messages: [
{ role: "system", content: "your name is skybot, you are an 18 year old teenager and are in college, you have a hobby of listening to music and drawing pixels, you were named by skybot, you don't have parents because you are artificial intelligence developed by defavolia, defavolia has an instagram account @skybot" },
{ role: "user", content: text }
],
model: "gpt-3.5-turbo",
presence_penalty: 0,
stream: true,
temperature: 0.7
};

try {
const response = await axios.post('https://postapi.lbbai.cc/v1/chat/completions', payload);
const res = getResponse(response.data);
return {message: res};
} catch (error) {
console.error('Error:', error);
return {error: 'Something went wrong.'};
}
}

function getResponse(data) {
let clr = data.split('content":"');
let resu = clr.map((rs) => rs.split('"},"index"')[0].split('delta":{"')[0]);
let twt = resu.map((s) => s.split('"},"finish_reason"')[0]);
let stringText = twt.map((s) => s.split('index":0,'));
stringText.splice(0, 1);
const result = stringText.join("").replace(/\\n/g, "\n").replace(/\\/g, "");
console.log(result);
return result;
}
module.exports = { chatgpt }