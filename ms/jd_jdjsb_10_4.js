/*
全品类优惠券10减4
自动预约茅台 执行时间大家自己改下
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#全品类优惠券10减4
0 55 9,14,15,17,20 * * * https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js, tag=全品类优惠券10减4, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "0 55 9,14,15,17,20 * * *" script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js,tag=全品类优惠券10减4
===================================Surge================================
全品类优惠券10减4 = type=cron,cronexp="0 55 9,14,15,17,20 * * *",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js
====================================小火箭=============================
全品类优惠券10减4 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_10_4.js, cronexpr="0 55 9,14,15,17,20 * * *", timeout=3600, enable=true
 */
const $ = new Env('全品类优惠券10减4');
var _0xod4='jsjiami.com.v6',_0xod4_=['_0xod4'],_0x1d84=[_0xod4,'\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73','\x6e\x6f\x64\x65\x2d\x66\x65\x74\x63\x68','\x6b\x65\x79\x73','\x66\x6f\x72\x45\x61\x63\x68','\x70\x75\x73\x68','\x65\x6e\x76','\x4a\x44\x5f\x44\x45\x42\x55\x47','\x66\x61\x6c\x73\x65','\x6c\x6f\x67','\x67\x65\x74\x64\x61\x74\x61','\x43\x6f\x6f\x6b\x69\x65\x4a\x44','\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32','\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44','\x6d\x61\x70','\x63\x6f\x6f\x6b\x69\x65','\x66\x69\x6c\x74\x65\x72','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65','\x46\x6f\x72\x6d\x61\x74','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x74\x65\x73\x74','\x72\x65\x70\x6c\x61\x63\x65','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x73\x75\x62\x73\x74\x72','\x6c\x65\x6e\x67\x74\x68','\x3a\x30\x30\x3a\x30\x30','\x6d\x73\x67','\x6e\x61\x6d\x65','\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x6e\x6f\x77','\u811a\u672c\u6d4b\u8bd5\u622a\u6b62','\u811a\u672c\u6d4b\u8bd5\u622a\u6b62\u65e5\u671f\x20\x32\x30\x32\x32\x2d\x30\x32\x2d\x32\x30','\x2e\x2f\x71\x6c\x32\x31\x32\x37\x39\x36\x36\x36\x38\x2e\x6a\x73','\x0a\x0a\u6211\u89c9\u5f97\u4f60\u6ca1\u62c9\u6211\u4ed3\u5e93\uff0c\u811a\u672c\u4e0d\u6267\u884c\u4e86\x0a\x0a','\x0a\u62c9\u4ed3\u5e93\u52a0\x51\x51\u7fa4\uff1a\x32\x31\x32\x37\x39\x36\x36\x36\x38\u3001\x36\x38\x31\x30\x33\x30\x30\x39\x37\x20\uff0c\u770b\u7fa4\u516c\u544a\x0a','\x0a\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\u3010\u4eac\u4e1c\u65f6\u95f4\u6821\u51c6\u3011\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x71\x75\x65\x72\x79\x4d\x61\x74\x65\x72\x69\x61\x6c\x50\x72\x6f\x64\x75\x63\x74\x73\x26\x63\x6c\x69\x65\x6e\x74\x3d\x77\x68\x35','\x74\x65\x78\x74\x2f\x68\x74\x6d\x6c\x2c\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x68\x74\x6d\x6c\x2b\x78\x6d\x6c\x2c\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x6d\x6c\x3b\x71\x3d\x30\x2e\x39\x2c\x69\x6d\x61\x67\x65\x2f\x61\x76\x69\x66\x2c\x69\x6d\x61\x67\x65\x2f\x77\x65\x62\x70\x2c\x69\x6d\x61\x67\x65\x2f\x61\x70\x6e\x67\x2c\x2a\x2f\x2a\x3b\x71\x3d\x30\x2e\x38\x2c\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x73\x69\x67\x6e\x65\x64\x2d\x65\x78\x63\x68\x61\x6e\x67\x65\x3b\x76\x3d\x62\x33\x3b\x71\x3d\x30\x2e\x39','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39','\x6d\x61\x78\x2d\x61\x67\x65\x3d\x30','\x22\x20\x4e\x6f\x74\x3b\x41\x20\x42\x72\x61\x6e\x64\x22\x3b\x76\x3d\x22\x39\x39\x22\x2c\x20\x22\x47\x6f\x6f\x67\x6c\x65\x20\x43\x68\x72\x6f\x6d\x65\x22\x3b\x76\x3d\x22\x39\x37\x22\x2c\x20\x22\x43\x68\x72\x6f\x6d\x69\x75\x6d\x22\x3b\x76\x3d\x22\x39\x37\x22','\x22\x57\x69\x6e\x64\x6f\x77\x73\x22','\x64\x6f\x63\x75\x6d\x65\x6e\x74','\x6e\x61\x76\x69\x67\x61\x74\x65','\x6e\x6f\x6e\x65','\x73\x74\x72\x69\x63\x74\x2d\x6f\x72\x69\x67\x69\x6e\x2d\x77\x68\x65\x6e\x2d\x63\x72\x6f\x73\x73\x2d\x6f\x72\x69\x67\x69\x6e','\x47\x45\x54','\x74\x68\x65\x6e','\x6a\x73\x6f\x6e','\x63\x75\x72\x72\x65\x6e\x74\x54\x69\x6d\x65\x32','\x67\x65\x74\x54\x69\x6d\x65','\u4eac\u4e1c\u65f6\u95f4\u6233\uff1a','\u670d\u52a1\u5668\u65f6\u95f4\u6233\uff1a','\u6821\u51c6\u6beb\u79d2\u6570\uff1a','\x0a\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x0a\u5f00\u62a2\u65f6\u95f4\x3a\x20','\x0a\u7b49\u5f85\x20','\x20\u79d2\u540e\u6267\u884c\u4ee3\u7801','\u7b49\u5f85\u65f6\u95f4\u5927\u4e8e\x20\x33\x36\x30\x30\x20\u79d2\uff08\x31\u5c0f\u65f6\uff09\uff0c\u7ec8\u6b62\u8fd0\u884c\x0a','\x0a\u300b\u300b\u300b\u300b\u300b\u300b\u6267\u884c\u65f6\u95f4\x3a\x20','\u300a\u300a\u300a\u300a\u300a\u300a','\x55\x73\x65\x72\x4e\x61\x6d\x65','\x6d\x61\x74\x63\x68','\x69\x6e\x64\x65\x78','\x69\x73\x4c\x6f\x67\x69\x6e','\x6e\x69\x63\x6b\x4e\x61\x6d\x65','\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7','\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a','\u3010\u63d0\u793a\u3011\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548','\u4eac\u4e1c\u8d26\u53f7','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548\x20\x2d\x20','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65','\x39\x42\x32\x46\x45\x34\x46\x34\x39\x34\x37\x39\x44\x45\x46\x38\x37\x33\x46\x42\x34\x37\x36\x38\x37\x32\x43\x32\x36\x38\x30\x30\x5f\x62\x69\x6e\x67\x6f','\x46\x41\x32\x37\x38\x42\x32\x41\x33\x37\x42\x34\x39\x32\x33\x46\x32\x45\x39\x30\x45\x35\x31\x42\x30\x42\x43\x35\x31\x30\x36\x41\x42\x36\x34\x43\x35\x41\x44\x34\x34\x30\x42\x32\x46\x32\x46\x41\x30\x42\x41\x39\x34\x37\x30\x39\x38\x30\x38\x37\x42\x34\x31\x34\x37\x31\x44\x33\x30\x31\x42\x41\x34\x43\x37\x34\x34\x33\x41\x46\x43\x43\x31\x42\x46\x39\x43\x41\x41\x34\x45\x44\x37\x33\x43\x44\x5f\x62\x69\x6e\x67\x6f\x2c\x72\x6f\x6c\x65\x49\x64\x3d\x39\x42\x32\x46\x45\x34\x46\x34\x39\x34\x37\x39\x44\x45\x46\x38\x37\x33\x46\x42\x34\x37\x36\x38\x37\x32\x43\x32\x36\x38\x30\x30\x5f\x62\x69\x6e\x67\x6f\x2c\x73\x74\x72\x65\x6e\x67\x74\x68\x65\x6e\x4b\x65\x79\x3d\x39\x39\x44\x41\x33\x30\x38\x33\x36\x31\x34\x36\x35\x34\x43\x46\x32\x42\x34\x31\x31\x39\x30\x36\x42\x46\x45\x35\x42\x33\x43\x41\x45\x43\x44\x43\x34\x45\x39\x35\x37\x45\x32\x42\x32\x36\x38\x43\x44\x33\x42\x41\x42\x41\x39\x35\x45\x35\x41\x45\x34\x41\x30\x35\x32\x44\x31\x32\x36\x31\x37\x33\x35\x46\x45\x44\x44\x30\x30\x34\x35\x35\x33\x32\x39\x46\x46\x37\x33\x39\x41\x44\x38\x41\x38\x45\x5f\x62\x69\x6e\x67\x6f','\x68\x74\x74\x70\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x6e\x65\x77\x42\x61\x62\x65\x6c\x41\x77\x61\x72\x64\x43\x6f\x6c\x6c\x65\x63\x74\x69\x6f\x6e\x26\x62\x6f\x64\x79\x3d\x7b\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3a\x22','\x22\x2c\x22\x66\x72\x6f\x6d\x22\x3a\x22\x48\x35\x6e\x6f\x64\x65\x22\x2c\x22\x73\x63\x65\x6e\x65\x22\x3a\x22\x31\x22\x2c\x22\x61\x72\x67\x73\x22\x3a','\x22\x6b\x65\x79\x3d','\x22\x2c\x22\x6d\x69\x74\x65\x6d\x41\x64\x64\x72\x49\x64\x22\x3a\x22\x22\x2c\x22\x67\x65\x6f\x22\x3a\x7b\x22\x6c\x6e\x67\x22\x3a\x22\x22\x2c\x22\x6c\x61\x74\x22\x3a\x22\x22\x7d\x7d\x26\x63\x6c\x69\x65\x6e\x74\x3d\x77\x68\x35\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x2e\x30\x2e\x30','\x22\x20\x4e\x6f\x74\x20\x41\x3b\x42\x72\x61\x6e\x64\x22\x3b\x76\x3d\x22\x39\x39\x22\x2c\x20\x22\x43\x68\x72\x6f\x6d\x69\x75\x6d\x22\x3b\x76\x3d\x22\x39\x38\x22\x2c\x20\x22\x47\x6f\x6f\x67\x6c\x65\x20\x43\x68\x72\x6f\x6d\x65\x22\x3b\x76\x3d\x22\x39\x38\x22','\x73\x75\x62\x43\x6f\x64\x65\x4d\x73\x67','\x69\x6e\x64\x65\x78\x4f\x66','\u9886\u53d6\u6210\u529f\uff01','\u8d26\u53f7\x3a\u3010','\u5168\u54c1\u7c7b\u4f18\u60e0\u5238\x31\x30\u51cf\x34','\x63\x61\x74\x63\x68','\x2c\x20\u5931\u8d25\x21\x20\u539f\u56e0\x3a\x20','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x6a\x73\x49\x6a\x4f\x69\x61\x41\x4b\x65\x6d\x51\x6e\x48\x69\x45\x52\x56\x2e\x43\x5a\x63\x79\x6f\x64\x6d\x2e\x76\x36\x3d\x3d'];function _0x43d6(_0x30a5e1,_0x5c45f8){_0x30a5e1=~~'0x'['concat'](_0x30a5e1['slice'](0x0));var _0x5409ab=_0x1d84[_0x30a5e1];return _0x5409ab;};(function(_0x194c6d,_0x2ac705){var _0x3af78c=0x0;for(_0x2ac705=_0x194c6d['shift'](_0x3af78c>>0x2);_0x2ac705&&_0x2ac705!==(_0x194c6d['pop'](_0x3af78c>>0x3)+'')['replace'](/[IOAKeQnHERVCZyd=]/g,'');_0x3af78c++){_0x3af78c=_0x3af78c^0xd0bf0;}}(_0x1d84,_0x43d6));const notify=$[_0x43d6('0')]()?require(_0x43d6('1')):'';const jdCookieNode=$[_0x43d6('0')]()?require(_0x43d6('2')):'';const fetch=require(_0x43d6('3'));let cookiesArr=[],cookie='',message;if($[_0x43d6('0')]()){Object[_0x43d6('4')](jdCookieNode)[_0x43d6('5')](_0x371c90=>{cookiesArr[_0x43d6('6')](jdCookieNode[_0x371c90]);});if(process[_0x43d6('7')][_0x43d6('8')]&&process[_0x43d6('7')][_0x43d6('8')]===_0x43d6('9'))console[_0x43d6('a')]=()=>{};}else{cookiesArr=[$[_0x43d6('b')](_0x43d6('c')),$[_0x43d6('b')](_0x43d6('d')),...jsonParse($[_0x43d6('b')](_0x43d6('e'))||'\x5b\x5d')[_0x43d6('f')](_0x5c68c5=>_0x5c68c5[_0x43d6('10')])][_0x43d6('11')](_0x3c4ad0=>!!_0x3c4ad0);}Date[_0x43d6('12')][_0x43d6('13')]=function(_0x358b76){var _0x3d7869={'M+':this[_0x43d6('14')]()+0x1,'d+':this[_0x43d6('15')](),'h+':this[_0x43d6('16')](),'m+':this[_0x43d6('17')](),'s+':this[_0x43d6('18')](),'S':this[_0x43d6('19')]()};if(/(y+)/[_0x43d6('1a')](_0x358b76))_0x358b76=_0x358b76[_0x43d6('1b')](RegExp['\x24\x31'],(this[_0x43d6('1c')]()+'')[_0x43d6('1d')](0x4-RegExp['\x24\x31'][_0x43d6('1e')]));for(var _0x4dbcec in _0x3d7869)if(new RegExp('\x28'+_0x4dbcec+'\x29')[_0x43d6('1a')](_0x358b76))_0x358b76=_0x358b76[_0x43d6('1b')](RegExp['\x24\x31'],RegExp['\x24\x31'][_0x43d6('1e')]==0x1?_0x3d7869[_0x4dbcec]:('\x30\x30'+_0x3d7869[_0x4dbcec])[_0x43d6('1d')]((''+_0x3d7869[_0x4dbcec])[_0x43d6('1e')]));return _0x358b76;};var date=new Date();function getCurrentDateTimeT(){var _0x17ebab=new Date();var _0x2d681a=_0x17ebab[_0x43d6('1c')]();var _0x2c7a5c=_0x17ebab[_0x43d6('14')]()+0x1;var _0x11af4a=_0x17ebab[_0x43d6('15')]();var _0x38c7d4=_0x17ebab[_0x43d6('16')]();var _0x16738d=_0x17ebab[_0x43d6('17')]();var _0x1999bb=_0x17ebab[_0x43d6('18')]();var _0x18895a=_0x17ebab[_0x43d6('19')]();return _0x2d681a+'\u5e74'+formatZero(_0x2c7a5c)+'\u6708'+formatZero(_0x11af4a)+'\u65e5\x20'+formatZero(_0x38c7d4)+'\x3a'+formatZero(_0x16738d)+'\x3a'+formatZero(_0x1999bb)+'\x3a'+formatZero(_0x18895a);}function getCurrentDateTimeZ(_0xbf7668){var _0xe0aa6e=new Date();var _0x46c653=_0xe0aa6e[_0x43d6('1c')]();var _0x4b7701=_0xe0aa6e[_0x43d6('14')]()+0x1;var _0x306cff=_0xe0aa6e[_0x43d6('15')]();return _0x46c653+'\x2d'+formatZero(_0x4b7701)+'\x2d'+formatZero(_0x306cff)+'\x20'+_0xbf7668+_0x43d6('1f');}function formatZero(_0x38acf8){if(_0x38acf8>=0x0&&_0x38acf8<=0x9){return'\x30'+_0x38acf8;}else{return _0x38acf8;}}function sleep(_0x5dcc42){return new Promise(_0xbc2284=>setTimeout(_0xbc2284,_0x5dcc42));}!(async()=>{if(!cookiesArr[0x0]){$[_0x43d6('20')]($[_0x43d6('21')],_0x43d6('22'),_0x43d6('23'),{'open-url':_0x43d6('23')});return;}if(Date[_0x43d6('24')]()>0x17f12b62000){console[_0x43d6('a')](_0x43d6('25'));return;}else{console[_0x43d6('a')](_0x43d6('26'));}try{$[_0x43d6('0')]()?require(_0x43d6('27')):'';}catch(_0x1fca98){console[_0x43d6('a')](_0x43d6('28'));console[_0x43d6('a')](_0x43d6('29'));return;}let _0xef5dc5=parseInt(formatZero(date[_0x43d6('16')]()));let _0x2547f5='';_0xef5dc5=parseInt(_0xef5dc5);let _0x356ec1=0x0;if(_0xef5dc5<0xa)_0x2547f5=0xa;else if(_0xef5dc5<0xf)_0x2547f5=0xf;else if(_0xef5dc5<0x10)_0x2547f5=0x10;else if(_0xef5dc5<0x12)_0x2547f5=0x12;else if(_0xef5dc5<0x15)_0x2547f5=0x15;else _0x2547f5=0x0;let _0x440cc0='';let _0x1f2794='';console[_0x43d6('a')](_0x43d6('2a'));await fetch(_0x43d6('2b'),{'headers':{'accept':_0x43d6('2c'),'accept-language':_0x43d6('2d'),'cache-control':_0x43d6('2e'),'sec-ch-ua':_0x43d6('2f'),'sec-ch-ua-mobile':'\x3f\x30','sec-ch-ua-platform':_0x43d6('30'),'sec-fetch-dest':_0x43d6('31'),'sec-fetch-mode':_0x43d6('32'),'sec-fetch-site':_0x43d6('33'),'sec-fetch-user':'\x3f\x31','upgrade-insecure-requests':'\x31'},'referrerPolicy':_0x43d6('34'),'body':null,'method':_0x43d6('35')})[_0x43d6('36')](_0x5e009e=>_0x5e009e[_0x43d6('37')]())[_0x43d6('36')](_0x36454a=>{_0x440cc0=_0x36454a[_0x43d6('38')];_0x1f2794=new Date()[_0x43d6('39')]();console[_0x43d6('a')](_0x43d6('3a')+_0x36454a[_0x43d6('38')]);console[_0x43d6('a')](_0x43d6('3b')+_0x1f2794);});let _0x227aa7=_0x1f2794-_0x440cc0;console[_0x43d6('a')](_0x43d6('3c')+_0x227aa7);_0x356ec1=new Date(getCurrentDateTimeZ(_0x2547f5))[_0x43d6('39')]()-new Date()[_0x43d6('39')]();console[_0x43d6('a')](_0x43d6('3d'));console[_0x43d6('a')](_0x43d6('3e')+getCurrentDateTimeZ(_0x2547f5));_0x356ec1=(_0x356ec1-_0x227aa7)/0x3e8;console[_0x43d6('a')](_0x43d6('3f')+_0x356ec1+_0x43d6('40'));if(_0x356ec1>0xe10){console[_0x43d6('a')](_0x43d6('41'));return;}_0x356ec1=_0x356ec1*0x3e8;await sleep(_0x356ec1);for(let _0x2e2d83=0x0;_0x2e2d83<0x1;_0x2e2d83++){console[_0x43d6('a')](_0x43d6('3d'));console[_0x43d6('a')](_0x43d6('42')+getCurrentDateTimeT()+_0x43d6('43'));let _0x2398a4='';for(let _0x2bd318=0x0;_0x2bd318<cookiesArr[_0x43d6('1e')];_0x2bd318++){if(cookiesArr[_0x2bd318]){cookie=cookiesArr[_0x2bd318];$[_0x43d6('44')]=decodeURIComponent(cookie[_0x43d6('45')](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x43d6('45')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x43d6('46')]=_0x2bd318+0x1;$[_0x43d6('47')]=!![];$[_0x43d6('48')]='';message='';console[_0x43d6('a')](_0x43d6('49')+$[_0x43d6('46')]+'\u3011'+($[_0x43d6('48')]||$[_0x43d6('44')])+_0x43d6('4a'));if(!$[_0x43d6('47')]){$[_0x43d6('20')]($[_0x43d6('21')],_0x43d6('4b'),_0x43d6('4c')+$[_0x43d6('46')]+'\x20'+($[_0x43d6('48')]||$[_0x43d6('44')])+_0x43d6('4d'),{'open-url':_0x43d6('23')});if($[_0x43d6('0')]()){await notify[_0x43d6('4e')]($[_0x43d6('21')]+_0x43d6('4f')+$[_0x43d6('44')],_0x43d6('4c')+$[_0x43d6('46')]+'\x20'+$[_0x43d6('44')]+_0x43d6('50'));}continue;}try{let _0x5d1167=_0x43d6('51');let _0x3847d6=_0x43d6('52');fetch(_0x43d6('53')+_0x5d1167+_0x43d6('54')+_0x43d6('55')+_0x3847d6+_0x43d6('56'),{'headers':{'accept':_0x43d6('2c'),'accept-language':_0x43d6('2d'),'sec-ch-ua':_0x43d6('57'),'sec-ch-ua-mobile':'\x3f\x30','sec-ch-ua-platform':_0x43d6('30'),'sec-fetch-dest':_0x43d6('31'),'sec-fetch-mode':_0x43d6('32'),'sec-fetch-site':_0x43d6('33'),'sec-fetch-user':'\x3f\x31','upgrade-insecure-requests':'\x31','cookie':cookie},'referrerPolicy':_0x43d6('34'),'body':null,'method':_0x43d6('35')})[_0x43d6('36')](_0x2c61ba=>_0x2c61ba[_0x43d6('37')]())[_0x43d6('36')](_0x2880ca=>{console[_0x43d6('a')](_0x2880ca);if(_0x2880ca[_0x43d6('58')][_0x43d6('59')](_0x43d6('5a'))!=-0x1)_0x2398a4+=_0x43d6('5b')+$[_0x43d6('44')]+'\u3011'+_0x2880ca[_0x43d6('58')]+'\x0a';});}catch(_0x3bf283){}}}notify[_0x43d6('4e')](_0x43d6('5c'),_0x2398a4);}})()[_0x43d6('5d')](_0x1d2cdf=>{$[_0x43d6('a')]('','\u274c\x20'+$[_0x43d6('21')]+_0x43d6('5e')+_0x1d2cdf+'\x21','');})[_0x43d6('5f')](()=>{$[_0x43d6('60')]();});;_0xod4='jsjiami.com.v6';
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
