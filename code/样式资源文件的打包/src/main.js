require('./style.css');
require('./style.less');
const common = require('./common');
const utils = require('./utils');
common.info('Hello world!' + utils.add(100, 200));
