######远程订阅写入本地1
eval(readStr("QJS"));
var filename = '资源采集远程索引.txt';
var 记录 = "";
if (getVar("rurl") != 'null' && getVar("rurl").indexOf(",http") > 1) {
  记录 = getVar("rurl").match(/.+?,http.+/g);
  if (_.read(filename)) {
    var 旧记录 = _.read(filename).match(/.+?,http.+/g);
    var 新记录 = 记录.concat(旧记录.filter(item=>item!=记录[0]));
  } else {
    var 新记录 = 记录;
  }
  _.write(新记录.join("\n"), filename);
  _.read(filename);
} else {
  "请输入正确格式(支持批量):名称,地址";
}
######读取远程订阅2
eval(readStr("QJS"));
var filename = '资源采集远程索引.txt';
if (_.read(filename)) {
  var code = _.read(filename).match(/.+?,.+/g);
} else {
  var data = "内置,https://gitcode.net/egwang186/iptv/-/raw/master/zywcj/资源网采集.txt";
  _.write(data, filename);
  var code = _.read(filename).match(/.+?,.+/g);
}
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:资源采集首页?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######单一搜索读取远程订阅3
eval(readStr("QJS"));
var filename = '资源采集远程索引.txt';
var code = _.read(filename).match(/.+?,.+/g);
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:单一搜索?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######侧边栏搜索读取远程订阅4
eval(readStr("QJS"));
var filename = '资源采集远程索引.txt';
var code = _.read(filename).match(/.+?,.+/g);
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:侧边栏引导?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######管理订阅5
eval(readStr("QJS"));
var filename='资源采集远程索引.txt';
var code=_.read(filename).match(/.+?,.+/g);
var items=[];
for(var i in code){
var title=code[i].split(",")[0];
var url="q:管理订阅按钮?url="+code[i];
items.push({title:title,url:url});
}
JSON.stringify(items);
######QJS6
ZXZhbChmdW5jdGlvbihwLGEsYyxrLGUsZCl7ZT1mdW5jdGlvbihjKXtyZXR1cm4oYzxhPycnOmUocGFyc2VJbnQoYy9hKSkpKygoYz1jJWEpPjM1P1N0cmluZy5mcm9tQ2hhckNvZGUoYysyOSk6Yy50b1N0cmluZygzNikpfTtpZighJycucmVwbGFjZSgvXi8sU3RyaW5nKSl7d2hpbGUoYy0tKWRbZShjKV09a1tjXXx8ZShjKTtrPVtmdW5jdGlvbihlKXtyZXR1cm4gZFtlXX1dO2U9ZnVuY3Rpb24oKXtyZXR1cm4nXFx3Kyd9O2M9MX07d2hpbGUoYy0tKWlmKGtbY10pcD1wLnJlcGxhY2UobmV3IFJlZ0V4cCgnXFxiJytlKGMpKydcXGInLCdnJyksa1tjXSk7cmV0dXJuIHB9KCcoMTkoKXsyTyAyTT17fTsyTyAxUj0xLjA7Mk8gMmU9MlYuMjYuRi4xZSgpOzJPIDJsPTJWLjJSLjFWLjFoKCk7Mk8gMng9MUguMUM7Mk8gMko9MUguMU07Mk8gMk09MnguVy4ybzsyTyAyUT0yOSgpKzJNK1wnQS8yZFwnKzJNKzFCKCkuMnEuMncoMCwzKStcJyQkJFwnKzFCKCkuMVcrMk07MUU9KDJOKT0+MkkgMk49PT1cJzJ1XCc7MTkgMUQoMlEpe1AgMkg9MkkgMlE7MmsgMlEhPTIxJiYoMkg9PVwnMjRcJ3x8Mkg9PVwnMTlcJyl9Mk8gMlY9MUguMkwuTjsyTyAyVz0xWCAyVi5ULjFZKCk7MTkgMnooMlEpezIzPXtHOjE5KCl7MmsgMlEoKX0sfTsyTyBBPTFYIDJWLjF3KDIzKTsyVy4ydihBKTsyayBBfTE5IEooMlEsQSl7MVAgMUE9MDsxUCAyaj1bXTsyUygxQTwyUS4xTyl7MmouMmMoMlEuMnMoMUEsMUErQSkpOzFBKz1BfTJrIDJqLjE1KCgyMik9PjIyLjFPPjApfTE5IDJ2KDFMLDFWKXtGPVtdOzFRPUooMUwsMUwuMU8vMVYpOzJPIDFWPTA7MlMoMVY8MVEuMU8pezE5IDFMKDJVKXsyayAxOSAyMigpezJPIDJRPVtdOzE4KDFQIDF3PTA7MXc8MVFbMlVdLjFPOzF3KyspezJRLjJjKDFRWzJVXVsxd10oKSl9MmsgMlF9fUYuMmMoMnooMUwoMVYpKSk7MVYrK30yayBGfTE5IDFVKDEzKXsyTyAyUT0xMy4xZygpOzF4KCEyUS4xMigpKTJRLjFVKCl9MTkgMlQoMlEsQSl7Mk8gRj0xWCAyeC5XKDJRK1wn5pWw5o2uXCcrMk0rQSk7MVUoRik7Mk8gVD0xWCAyeC4xayhGLDE0KTtULjJUKDJRKTtULk0oKX0xOSAyZygyUSl7Mk8gQT0xWCAyeC5XKDJRK1wn5pWw5o2uXCcrMk0rMlEpOzJPIEY9MDsxeCghQS4xMigpfHwoRj1BLjFPKCkpPT0wKTJrXCdcJzsyTyBUPTJKLjJoLjYuMVooMkouOC4ybCxGKTsyTyBXPTFYIDJ4LjEzKEEpO1cuMmcoVCk7Vy5NKCk7MmsgMVggMkouMmUoVCl9Mk8gNT0yNy4yNS4xSjsyTyA3PTUuMlEuMVI7MTkgMXEoMjIpezFQezJLLDFvLDI4LDFJLEksMVQsMmZ9PTIyOzJPIDJRPTUuMUwuTygySyk7MlEuMXkoMkYpOzJRLjJiKEkpOzJRLjFTKDIpOzJmPT09MTQ/MlEuMTcoMmYpOjJRLjE3KDJGKTsxeCgxRCgxbykpMTgoMlUgMXogMW8pMlEuMW8oMlUsMW9bMlVdKTsxeCgxRCgyOCkpezF4KDFJPT09MkYpMlEuMmkoMjgpO1kgMTgoMjcgMXogMjgpMlEuVSgyNywyOFsyN10pfTJPIEE7MXgoMUk9PT0yRnx8MVQ9PVwnMmFcJylBPTJRLjFUKDcuMjIpLjExKCk7WSBBPTJRLjFUKDcuMUcpLjExKCk7MmsgQX0xOSAxcigyUSxBKXsyUS5JKEEpOzJrIDJRLkQoKX0xOSAxcygyUSxBKXsyayBBK1wnPVwnKzJRLlIoQSl9MTkgMXQoMlEpezJPIEE9XCdcJzsyTyBGPTJRLlMoKS5aKCkuMUYoKTsyUyhGLjFsKCkpezJPIFQ9Ri4yMCgpO0ErPVQuMWYoKStcJz1cJytULjFpKCkrXCc7XCd9MmsgQX0xOSAxdSgyUSxBKXsyayAyUS4xbyhBKX0xOSAxdigyUSl7Mk8gQT1cJ1wnOzJPIEY9MlEuMXAoKS5aKCkuMUYoKTsyUyhGLjFsKCkpezJPIFQ9Ri4yMCgpO0ErPVQuMWYoKStcJz1cJytULjFpKCkrXCc7XCd9MmsgQX0xOSAyRSgyUSl7Mk8gQT0yUS4xTihcJy9cJyk7MXgoMlEuMU8oKT09QSsxKXsyUT0yUS4ydygwLEEpOzJrIDJFKDJRKX0yayAyUS4ydygwLDJRLjFOKFwnLlwnKSl9MTkgVigyMil7Mkd7MVB7MnAsMkF9PTIyOzJPIDJRPTFxKDIyKTsyTyBBPTJFKDJRLjJLKCkuMkMoKSk7Mk8gRj0ybC4xZCgyUS5RKCkuMnQoXCc7XCcpWzBdKTsyTyBUPUEuMncoQS4xTihcJy9cJykrMSkrXCcuXCcrRjsybT0xRSgycCk/MnArMk0rVDoyUStcJ+S4i+i9vVwnKzJNK1Q7Mk8gMTM9MlEuRSgpOzJPIDFhPTFYIDJKLjJoLjYuMVooMkouOC4ybCw0KTsyTyAxaz0wOzJPIDF3PTFYIDJ4LjkoKTsyUygoMWs9MTMuMmcoMWEpKSE9LTEpezF3LjJUKDFhLDAsMWspfTJPIDFHPTFYIDJ4LlcoMm0pOzFVKDFHKTsyTyAxSz0xWCAyeC4xYSgxRyk7MUsuMlQoMXcuMkIoKSk7MXgoMkE9PT0xNCkyayAybTsyRChcJ+S4i+i9veaIkOWKn++8jOi3r+W+hDpcJysybSk7MmsgMm19SChXKXsxMChXKTsyRChcJ+S4i+i9veWksei0pSzor7fmiZPlvIDosIPor5Xlj7Dmn6XnnIvlhbfkvZPlvILluLjkv6Hmga9cJyl9MTZ7MXgoMXchPTIxKTF3Lk0oKTsxeCgxSyE9MjEpMUsuTSgpOzF4KDEzIT0yMSkxMy5NKCl9fTE5IDEwKFcpezFFKFcpP+aKpemUmShXKTrmiqXplJkoVy4yQygpKX0xOSAyRCgyUSl7MlUoMlEpfTE5IEIoKXsxWCAyNy4yVi4yVy4xSygpLjJuKDMpfTE5IDI5KCl7MmsgMmUuMWMoKS4yQygpfTE5IDJyKDJRKXsxSC4xTS4yeC4ycigyUSl9MTkgMUIoKXsyMj17fTsyMi4ycT1YKDFqKFwncVwnKSxcJy4xYigycSkuMngoKVwnKTsyMi4yUD1YKDFqKFwncVwnKSxcJy4xYigyUCkuMngoKVwnKTsyMi4xVz1YKDFqKFwncVwnKSxcJy4xYigxVykuMngoKVwnKTsyayAyMn0yTS4ySj0xUjsyTS4yZz0yZzsyTS4yVD0yVDsyTS4ycj0ycjsyTS4yej0yejsyTS4ydj0ydjsyTS5KPUo7Mk0uQj1COzJNLjFFPTFFOzJNLjFxPTFxOzJNLkM9MXI7Mk0uSz0xczsyTS5MPTF0OzJNLjFtPTF1OzJNLjFuPTF2OzJNLlY9VjsyTS4xQj0xQjsyTS4yRD0yRDsyTS4xMD0xMDsyeS4yTT0yTX0uRygyeSkpOycsNjIsMTgzLCd8fDEwNDg1NzYwMDB8NHw0MDk2fEF8QXJyYXl8QnxCeXRlfEJ5dGVBcnJheU91dHB1dFN0cmVhbXxDb25uZWN0aW9ufERvd25sb2FkfEVudmlyb25tZW50fEV4ZWN1dG9yc3xGaWxlfEZpbGVJbnB1dFN0cmVhbXxGaWxlT3V0cHV0U3RyZWFtfEZpbGVXcml0ZXJ8RnV0dXJlVGFza3xHRVR8SW5zdHJ1bWVudGF0aW9ufEpzb3VwfE1ldGhvZHxNaW1lVHlwZU1hcHxQT1NUfFBhY2thZ2VzfFFNSU5GT3xTdHJpbmd8VFlQRXxUaHJlYWR8VkVSU0lPTnxffGF8YWxlcnR8YW5kcm9pZHxhcHB8YnxiYWNrfGJkfGJvZHl8Ym9keVN0cmVhbXxjfGNhbGx8Y2F0Y2h8Y2hhcnNldHxjaHVua3xja3xja3N8Y2xvc2V8Y29uY3VycmVudHxjb25uZWN0fGNvbnN0fGNvbnRlbnRUeXBlfGNvb2tpZXxjb29raWVzfGR8ZGF0YXxkb3dubG9hZHxlfGUyUmV4fGVsc2V8ZW50cnlTZXR8ZXJyb3J8ZXhlY3V0ZXxleGlzdHN8ZnxmYWxzZXxmaWx0ZXJ8ZmluYWxseXxmb2xsb3dSZWRpcmVjdHN8Zm9yfGZ1bmN0aW9ufGd8Z2V0fGdldEFic29sdXRlUGF0aHxnZXRFeHRlbnNpb25Gcm9tTWltZVR5cGV8Z2V0RXh0ZXJuYWxTdG9yYWdlRGlyZWN0b3J5fGdldEtleXxnZXRQYXJlbnRGaWxlfGdldFNpbmdsZXRvbnxnZXRWYWx1ZXxnZXRWYXJ8aHxoYXNOZXh0fGhkfGhkc3xoZWFkZXJ8aGVhZGVyc3xodHRwfGh0dHBCb2R5fGh0dHBDb29raWV8aHR0cENvb2tpZXN8aHR0cEhlYWRlcnxodHRwSGVhZGVyc3xpfGlmfGlnbm9yZUNvbnRlbnRUeXBlfGlufGluZGV4fGluZm98aW98aXNPYmplY3R8aXNTdHJpbmd8aXRlcmF0b3J8anxqYXZhfGpzb258anNvdXB8a3xsfGxhbmd8bGFzdEluZGV4T2Z8bGVuZ3RofGxldHxsaXN0fG18bWF4Qm9keVNpemV8bWV0aG9kfG1rZGlyc3xufG5hbWV8bmV3fG5ld0NhY2hlZFRocmVhZFBvb2x8bmV3SW5zdGFuY2V8bmV4dHxudWxsfG98b2JqfG9iamVjdHxvcmd8b3N8cHxwYXJhbXN8cGF0aHxwb3N0fHBvc3REYXRhQ2hhcnNldHxwdXNofHFtfHJ8cmV8cmVhZHxyZWZsZWN0fHJlcXVlc3RCb2R5fHJlc3xyZXR1cm58c3xzYXZlcGF0aHxzZW5kS2V5RG93blVwU3luY3xzZXBhcmF0b3J8c2V0cGF0aHxzaWdufHNsZWVwfHNsaWNlfHNwbGl0fHN0cmluZ3xzdWJtaXR8c3Vic3RyaW5nfHR8dGhpc3x0aHJlYWR8dGlwc3x0b0J5dGVBcnJheXx0b1N0cmluZ3x0b2FzdHx0cmltVXx0cnVlfHRyeXx0eXBlfHR5cGVvZnx1fHVybHx1dGlsfHZ8dmFsfHZhcnx2ZXJzaW9ufHd8d2Via2l0fHdoaWxlfHdyaXRlfHh8eXx6Jy5zcGxpdCgnfCcpLDAse30pKQ==
