describe("Basic tests",() => {
  Test.assertEquals(getCommonDirectoryPath(['/dream/images/image1.png', '/dream/images/image2.png']), '/dream/images/');
  Test.assertEquals(getCommonDirectoryPath(['/http/assets/style.css', '/https/scripts/app.js',  'home/setting.conf']), '');
  Test.assertEquals(getCommonDirectoryPath(['/web/assets/style.css', '/.bin/mocha',  '/read.me']), '/');
  Test.assertEquals(getCommonDirectoryPath(['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs']), '/');
});