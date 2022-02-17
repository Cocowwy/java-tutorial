/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5f6657d865f3a6e0715162e477c57c98"
  },
  {
    "url": "assets/css/0.styles.da87df69.css",
    "revision": "56fef1422bb4092500ef66b15d069edb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8935b2b5.js",
    "revision": "164630b346a2db728e721a79b2dc3d85"
  },
  {
    "url": "assets/js/11.7c0bd2f9.js",
    "revision": "2a62387d7d41ecb4043e992bc3363e7e"
  },
  {
    "url": "assets/js/12.57320c11.js",
    "revision": "69f49526434db6afef5ed62f9802245b"
  },
  {
    "url": "assets/js/13.b7e13060.js",
    "revision": "c843938b4fbfc5df6ffa5c7583fde066"
  },
  {
    "url": "assets/js/14.05f0819e.js",
    "revision": "c100f25bdbb184dbf0861ea170930dfe"
  },
  {
    "url": "assets/js/15.f5f4408a.js",
    "revision": "48d4fd278208999d2f45fe50d7751c5d"
  },
  {
    "url": "assets/js/16.463dd7fd.js",
    "revision": "0e284a2550235717de7beea642a9d640"
  },
  {
    "url": "assets/js/17.f03a9b39.js",
    "revision": "7de49e16f744848edf46621801fb5ecf"
  },
  {
    "url": "assets/js/18.59a8a48a.js",
    "revision": "d026c891cd4257dccc9f94307e066220"
  },
  {
    "url": "assets/js/19.07123e01.js",
    "revision": "a80d1a80bd4bbe316a3754e05879184c"
  },
  {
    "url": "assets/js/20.564fec95.js",
    "revision": "64cc07a6ef81607ed7712b0bcb6e9828"
  },
  {
    "url": "assets/js/21.3f673700.js",
    "revision": "f6d064f32d364f1044d4858aec69b501"
  },
  {
    "url": "assets/js/22.1d6a4cde.js",
    "revision": "951335354c0bc8b5e3d33485a9c9a827"
  },
  {
    "url": "assets/js/23.53cd28cf.js",
    "revision": "2aed07a4971d80214e358ff57b5bcc5c"
  },
  {
    "url": "assets/js/24.878977aa.js",
    "revision": "4337955d36738aa521e37acef1681a3d"
  },
  {
    "url": "assets/js/25.faa38f97.js",
    "revision": "e6d2d44aff1c6925bd45192a91e6d7f2"
  },
  {
    "url": "assets/js/26.3dbed7ed.js",
    "revision": "3ea9288605791c18fc67371fa11a5780"
  },
  {
    "url": "assets/js/27.a14f290f.js",
    "revision": "1f0f8218c4c82b20f2d1b9e597135f6f"
  },
  {
    "url": "assets/js/28.6f0e59bd.js",
    "revision": "d870ed3a56145680ab00a4dd70451e84"
  },
  {
    "url": "assets/js/29.8557d8c9.js",
    "revision": "24633013a452cacf287d1edeb6eea937"
  },
  {
    "url": "assets/js/30.01008917.js",
    "revision": "a309283497ef8afe77ef8f2c5aa60c45"
  },
  {
    "url": "assets/js/31.b2810cbe.js",
    "revision": "bc56bce649631682341c9fe1ce0d8d33"
  },
  {
    "url": "assets/js/32.587df802.js",
    "revision": "48dbf64252e15405b637c830baffc4b9"
  },
  {
    "url": "assets/js/33.e7c2cea6.js",
    "revision": "4361982261913d63afff5efef729b080"
  },
  {
    "url": "assets/js/34.90156bdb.js",
    "revision": "a523a0b49b1505f9e0d3b33b22b05d33"
  },
  {
    "url": "assets/js/35.c09c2323.js",
    "revision": "9d0e0bc67920820ae375fd477ca4bc62"
  },
  {
    "url": "assets/js/36.c0d02923.js",
    "revision": "2f364724e866eb478b998ec276d96263"
  },
  {
    "url": "assets/js/37.f99f913b.js",
    "revision": "67bab0b06ef3b163c84cb10c4ef7a8f2"
  },
  {
    "url": "assets/js/38.564360d1.js",
    "revision": "18a74c0fac75d8908183f0f959f29ad4"
  },
  {
    "url": "assets/js/39.eefb8645.js",
    "revision": "2a0b2951c2ab146e304e2aadc339525d"
  },
  {
    "url": "assets/js/4.6fb54a7f.js",
    "revision": "a0476d45222e65b90f7c73c090fe2bb4"
  },
  {
    "url": "assets/js/40.b92a3b95.js",
    "revision": "6e072d30a4592f01d4ebae505f20fb54"
  },
  {
    "url": "assets/js/41.4dfdc8e0.js",
    "revision": "aad7b755758b08efc53b25a1dec25734"
  },
  {
    "url": "assets/js/42.0b479316.js",
    "revision": "3f99a34522626cd5bb998cb423937b16"
  },
  {
    "url": "assets/js/43.39d9282b.js",
    "revision": "50d280330e40a486aa692cd2abf52d49"
  },
  {
    "url": "assets/js/44.e500172c.js",
    "revision": "0b3c9da7b96888d138d5cf0f8332242c"
  },
  {
    "url": "assets/js/45.fc9fbf7f.js",
    "revision": "5e83316730be6727e5a2c35af90e0e81"
  },
  {
    "url": "assets/js/46.2f860452.js",
    "revision": "7fc78dd9bc666687010842cbc7ab42d5"
  },
  {
    "url": "assets/js/47.93574ab9.js",
    "revision": "268e09242355a0b526313343b74930bb"
  },
  {
    "url": "assets/js/48.db61126a.js",
    "revision": "2de7e8639f98c32df48edc52757d240e"
  },
  {
    "url": "assets/js/49.5a342df5.js",
    "revision": "49fd5153d64c240795f42a8290622ec9"
  },
  {
    "url": "assets/js/5.9d6e4fe2.js",
    "revision": "a2bc58c7347f5350e17d35436662bf62"
  },
  {
    "url": "assets/js/50.15f0f454.js",
    "revision": "4a22b63a0621a2fa752526e707591b02"
  },
  {
    "url": "assets/js/51.23bf8c30.js",
    "revision": "24fd9d112a243cf0524f07f830e33ebb"
  },
  {
    "url": "assets/js/52.3b1edebb.js",
    "revision": "8b2acc4e6e6c8577bff8e1b175d11d97"
  },
  {
    "url": "assets/js/53.e54a9b3b.js",
    "revision": "fa4bb6263bcebfaefab6b1b0ea7d0b10"
  },
  {
    "url": "assets/js/54.5c7a3938.js",
    "revision": "e474ffa90cf4495d9e0b5f9fc3d420a4"
  },
  {
    "url": "assets/js/55.b41b3923.js",
    "revision": "ebfcc7c78ca22c8bb82f4ac6abf3cbc7"
  },
  {
    "url": "assets/js/56.b51b581f.js",
    "revision": "805454b800d96b6a5c995623835e8788"
  },
  {
    "url": "assets/js/57.58f63516.js",
    "revision": "e026d845ed852901f2bfa874460b43c1"
  },
  {
    "url": "assets/js/58.b8cf03ae.js",
    "revision": "3136c86876afb433132a0528365fd034"
  },
  {
    "url": "assets/js/59.d9d724bd.js",
    "revision": "3949be676dd09bf6d641c071e5086808"
  },
  {
    "url": "assets/js/6.ca3c4b0d.js",
    "revision": "92a84498c41b4bba6603ce10915830be"
  },
  {
    "url": "assets/js/60.ccd96c6c.js",
    "revision": "b4d052617e7f3786033853370c1520c8"
  },
  {
    "url": "assets/js/61.f85e4032.js",
    "revision": "7278fbdf42052aa3b76048711bcf00db"
  },
  {
    "url": "assets/js/62.1c19e686.js",
    "revision": "57c98217fce0892d78401ec3058863f6"
  },
  {
    "url": "assets/js/63.199cb85e.js",
    "revision": "69525fb832ccddcd6a0f15831849d6a5"
  },
  {
    "url": "assets/js/64.d8260b74.js",
    "revision": "1d929afeb1489335a3a6bfb8d2f8134d"
  },
  {
    "url": "assets/js/65.c1e60f84.js",
    "revision": "4cda68fd92b71d29acab26c315e1aaee"
  },
  {
    "url": "assets/js/66.2982af58.js",
    "revision": "1cdc2a7573de2619dbb74bf8a278e746"
  },
  {
    "url": "assets/js/67.e5a6d14a.js",
    "revision": "79b03574a82e5af81bd2574a4e7c6e65"
  },
  {
    "url": "assets/js/68.d8c115ca.js",
    "revision": "74a754dbb088d8b7b64ffe7eae6ac479"
  },
  {
    "url": "assets/js/69.337ac6bf.js",
    "revision": "0c90b854cd6b36de5818d369961fe30b"
  },
  {
    "url": "assets/js/7.d55602d2.js",
    "revision": "e9881f71adea6dd77359b8310af905f0"
  },
  {
    "url": "assets/js/70.66ceda73.js",
    "revision": "1bdd8fb80f01af3c00db57137575ef05"
  },
  {
    "url": "assets/js/71.3ef64046.js",
    "revision": "ea88d062ea433a54a9f8fe65f6dc069d"
  },
  {
    "url": "assets/js/72.9ade03b9.js",
    "revision": "cd01ca43ca690dd5bbbbee1e6e818e41"
  },
  {
    "url": "assets/js/73.84ab6372.js",
    "revision": "9f47219443b43d979e4239b307028ff0"
  },
  {
    "url": "assets/js/74.62dc6a1d.js",
    "revision": "5b6f9b5c0e1c8048d75852184637964e"
  },
  {
    "url": "assets/js/75.8d8d71f0.js",
    "revision": "7aa97b174a107263c98ffd54afcc2ff4"
  },
  {
    "url": "assets/js/76.f5720200.js",
    "revision": "feeb9fc54fa5ecaf48dbbdd2fd7b56af"
  },
  {
    "url": "assets/js/77.1aabe28a.js",
    "revision": "419e025f6a0fb6472a49051473fafc87"
  },
  {
    "url": "assets/js/78.065c9367.js",
    "revision": "f90df2a7e93920f3e95a3bc3f5179c23"
  },
  {
    "url": "assets/js/79.e5536fd1.js",
    "revision": "1a31fc1d11cf278a15629e0c4c82a07a"
  },
  {
    "url": "assets/js/8.89e9ace9.js",
    "revision": "e843420f3219dd959c2e35878c8ff0e0"
  },
  {
    "url": "assets/js/80.8b403c6c.js",
    "revision": "5b3ea77a27d8e498bc035f931de3268e"
  },
  {
    "url": "assets/js/81.1d531e22.js",
    "revision": "088f2cb08b4219c36865700405e4f1a7"
  },
  {
    "url": "assets/js/82.39822c7c.js",
    "revision": "88b9c13334e42e236fc4c4ca1006ebbd"
  },
  {
    "url": "assets/js/83.cbcded4f.js",
    "revision": "11225a3cabfee37a298ee16b4a9920d4"
  },
  {
    "url": "assets/js/84.ed557737.js",
    "revision": "11f6e80c33e3f3371c98b265a92a495f"
  },
  {
    "url": "assets/js/85.b01bb5dc.js",
    "revision": "73bc9098bcf66a7b5e94efce19a16d6a"
  },
  {
    "url": "assets/js/86.e53f2c09.js",
    "revision": "c9f8115c0fff84f4839c5014b10a4938"
  },
  {
    "url": "assets/js/87.790bc6f6.js",
    "revision": "accaf2180e57cc1e8b9b6a4f57313286"
  },
  {
    "url": "assets/js/88.753dcf23.js",
    "revision": "bdbae46a0aff61a28706d7f4d3daffc7"
  },
  {
    "url": "assets/js/89.e8b2ade5.js",
    "revision": "efd9711f56f089e121103b1acd50417c"
  },
  {
    "url": "assets/js/9.0c40eb95.js",
    "revision": "edc7a51fa4467e0ad5ddb6799c64c23e"
  },
  {
    "url": "assets/js/90.b6464ae2.js",
    "revision": "67378f2c75289a042dcd1c6886f22287"
  },
  {
    "url": "assets/js/app.931d7481.js",
    "revision": "b9446f92802aa60eb152e6ca9c9ee562"
  },
  {
    "url": "assets/js/vendors~flowchart.5998caa6.js",
    "revision": "c10f81949701fa78de115e736aff2d77"
  },
  {
    "url": "assets/js/vendors~notification.943e54fe.js",
    "revision": "846de6e5c6f3387c4bbbb661c9b5ddf1"
  },
  {
    "url": "cache/cache-framework.html",
    "revision": "c9e8cfc2c9b007092cfe652b2ac41c6c"
  },
  {
    "url": "cache/cache-interview.html",
    "revision": "a759dbb699ff518b800ea64ef418cd3e"
  },
  {
    "url": "cache/cache-libs.html",
    "revision": "b1d3f6cc69799c815ed8501ba51efba4"
  },
  {
    "url": "cache/ehcache.html",
    "revision": "4282a95edea815529c7e43e50e015884"
  },
  {
    "url": "cache/http-cache.html",
    "revision": "fc94c07f8e39943183a1290a6ad12ed0"
  },
  {
    "url": "cache/index.html",
    "revision": "a973ea9a6762e7b03671476cc0807aed"
  },
  {
    "url": "cache/memcached.html",
    "revision": "2b0766536f91d71804b40c4a48214218"
  },
  {
    "url": "framework/index.html",
    "revision": "7b7aef4cbcb02f0d821c9ba65c435a67"
  },
  {
    "url": "framework/mybatis/index.html",
    "revision": "d0977bacf8ebf9ef66d578b4221b7978"
  },
  {
    "url": "framework/mybatis/Mybatis原理.html",
    "revision": "1ec9f8d596facda3a7974e1b8d6f6549"
  },
  {
    "url": "framework/mybatis/Mybatis应用指南.html",
    "revision": "ab26df62f4e2557865359983a201963e"
  },
  {
    "url": "framework/netty.html",
    "revision": "c2921fcd8209827f99c4ff0c28c132fe"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "384b94d578b6b210fbc9758022b51262"
  },
  {
    "url": "javaee/index.html",
    "revision": "b33ad8fe8273f1a9fb325ca266b1bb52"
  },
  {
    "url": "javaee/javaee-cookie-sesion.html",
    "revision": "aeef6cf65568ee737bb5439f8def7638"
  },
  {
    "url": "javaee/javaee-filter-listener.html",
    "revision": "1606e43e996b71ac02a37d36f05857aa"
  },
  {
    "url": "javaee/javaee-interview.html",
    "revision": "0278720f12e7681b13ca48d599efbc88"
  },
  {
    "url": "javaee/javaee-jsp.html",
    "revision": "6b8a68c5ee5545471b102f106e6b411b"
  },
  {
    "url": "javaee/javaee-servlet.html",
    "revision": "33c0dd1390a69bcbf4d3dd4816cd6a87"
  },
  {
    "url": "lib/bean/dozer.html",
    "revision": "3efe35ba19f01d67865098be8cc5aa8e"
  },
  {
    "url": "lib/bean/lombok.html",
    "revision": "8a2bd4bdaf5ade70e3c4d6f3f421e131"
  },
  {
    "url": "lib/index.html",
    "revision": "ec54b83d519b240942c586e3e515f504"
  },
  {
    "url": "lib/javalib-log.html",
    "revision": "976237fb683681e8276128f201be9519"
  },
  {
    "url": "lib/javalib-util.html",
    "revision": "5eb85eacf7a357bdf1ede942d5d5e00e"
  },
  {
    "url": "lib/javamail.html",
    "revision": "c5092beeefbc5bbdcb5046f6f69a14fa"
  },
  {
    "url": "lib/jsoup.html",
    "revision": "3699175b275ea5736cc817d17000afa4"
  },
  {
    "url": "lib/reflections.html",
    "revision": "d3f53a702748f349192d18c59e9e9e9c"
  },
  {
    "url": "lib/serialized/index.html",
    "revision": "8a4bafa5fcab97aecba4d6357fb58ae7"
  },
  {
    "url": "lib/serialized/javalib-binary.html",
    "revision": "5ea95a992a4f814b13c695ed10550ec1"
  },
  {
    "url": "lib/serialized/javalib-json.html",
    "revision": "6e1c3ca524c0c3702deeb0f661cdc98e"
  },
  {
    "url": "lib/template/freemark.html",
    "revision": "4b118a8998262e45e04264a5d734ec5e"
  },
  {
    "url": "lib/template/index.html",
    "revision": "be69e1eb461e44a63d2b0956fb13fe11"
  },
  {
    "url": "lib/template/thymeleaf.html",
    "revision": "949ef2862601b096aad95167762eedaf"
  },
  {
    "url": "lib/template/velocity.html",
    "revision": "1aadb52e89b1cd6679f3b351f2079d05"
  },
  {
    "url": "lib/thumbnailator.html",
    "revision": "3f6c2b74620efb689ef298ca7c55c000"
  },
  {
    "url": "lib/zxing.html",
    "revision": "54471ae097fdc9077b412d83617b42de"
  },
  {
    "url": "limiting/hystrix.html",
    "revision": "a8027ea5678081fccd9002e2f7d712f0"
  },
  {
    "url": "microservice/dubbo.html",
    "revision": "90c573f86167c260f615189c578be908"
  },
  {
    "url": "microservice/index.html",
    "revision": "88896e53c71539a81d4b2f4237ab10db"
  },
  {
    "url": "mq/activemq.html",
    "revision": "a69d2fc56da2edeaedca0a0007eda120"
  },
  {
    "url": "mq/index.html",
    "revision": "722f8ac5d5e4728f9779b793c46b488b"
  },
  {
    "url": "mq/rocketmq.html",
    "revision": "7593b3031f1e46f940ed9bdd54259c5a"
  },
  {
    "url": "mq/消息队列基本原理.html",
    "revision": "3772a551da634a250c08d247b24c3056"
  },
  {
    "url": "mq/消息队列面试.html",
    "revision": "fb0206034ed9abf3882b3f2d9ed77074"
  },
  {
    "url": "security/index.html",
    "revision": "6fb24b0a6522befe34cff59415760535"
  },
  {
    "url": "security/shiro.html",
    "revision": "4e3daff12469d8ec7669e18c3b97382d"
  },
  {
    "url": "security/spring-security.html",
    "revision": "07132d2a450f51cc614fbb9650265802"
  },
  {
    "url": "server/index.html",
    "revision": "ad03443cf062a4f32a2326abf08c9292"
  },
  {
    "url": "server/jetty.html",
    "revision": "78271105994ec7c082f1d2f73e730347"
  },
  {
    "url": "server/tomcat-and-jetty.html",
    "revision": "7503e1f8480936fa3651b6ff1bd19a83"
  },
  {
    "url": "server/Tomcat优化.html",
    "revision": "c101122cc1acc689a8a7c291648c0843"
  },
  {
    "url": "server/Tomcat容器.html",
    "revision": "aa2ff4a5e8615124ce35adcc9963256f"
  },
  {
    "url": "server/Tomcat应用指南.html",
    "revision": "8ba07994736f637fdb0c763566e63c53"
  },
  {
    "url": "server/Tomcat连接器.html",
    "revision": "736c631f8a470dfdbdb938da95d57cf9"
  },
  {
    "url": "test/index.html",
    "revision": "a639fb41a81a04e006921cef33a1dd73"
  },
  {
    "url": "test/jmeter.html",
    "revision": "30a5035e9de00362d88fd0c97eb2cfb1"
  },
  {
    "url": "test/jmh.html",
    "revision": "3efe393abd3cdcbc226f601cc3e201d6"
  },
  {
    "url": "test/junit.html",
    "revision": "eee136717fa9e40ffc41a0eeef818a2e"
  },
  {
    "url": "test/mockito.html",
    "revision": "bc3371a5ad7599db76b903ca7b5ea05a"
  },
  {
    "url": "tool/build/ant.html",
    "revision": "d9d8ccf1c3744717a05a786d58948754"
  },
  {
    "url": "tool/build/index.html",
    "revision": "e87696a03eb66fe4010c15e11b76c975"
  },
  {
    "url": "tool/build/maven/index.html",
    "revision": "d36b84f0faa60fe24fa75a0ff8dd34e6"
  },
  {
    "url": "tool/build/maven/maven-action.html",
    "revision": "c8dcd65a1937871c86282c1332195fa2"
  },
  {
    "url": "tool/build/maven/maven-checkstyle-plugin.html",
    "revision": "552a9748ec7fc4fc3769204569430aa1"
  },
  {
    "url": "tool/build/maven/maven-deploy.html",
    "revision": "b477977133c3ff22f76969c421aa83eb"
  },
  {
    "url": "tool/build/maven/maven-pom.html",
    "revision": "0330348f7099c3b7299d334f36d436c0"
  },
  {
    "url": "tool/build/maven/maven-quickstart.html",
    "revision": "dc6a988486fde16c3827e813d04feab2"
  },
  {
    "url": "tool/build/maven/maven-settings.html",
    "revision": "14b3f6b8941c5e4a8fe91e1a73a63d6d"
  },
  {
    "url": "tool/build/maven/sidebar.html",
    "revision": "f63e9b78ff97f99332b471428caa3a7c"
  },
  {
    "url": "tool/ide/eclipse.html",
    "revision": "365cc829f1167d13132fc204ed56770a"
  },
  {
    "url": "tool/ide/index.html",
    "revision": "b147a1a886abd4119db8bdf94467aff2"
  },
  {
    "url": "tool/ide/intellij-idea.html",
    "revision": "9219ff263eb0e786462c791dbb9b7f95"
  },
  {
    "url": "tool/ide/vscode.html",
    "revision": "bf4fec9d7c6d48584af0cdba11bf8334"
  },
  {
    "url": "tool/index.html",
    "revision": "3e931e40d0931ddd53bfb2bba7c9a659"
  },
  {
    "url": "tool/monitor/arthas.html",
    "revision": "a3e79e5955000e1babf2896b34a1249a"
  },
  {
    "url": "tool/monitor/cat.html",
    "revision": "e57277541130b563cf57113dedf4edc1"
  },
  {
    "url": "tool/monitor/index.html",
    "revision": "8d8f25404a7bc8da86c99f6e5258ff15"
  },
  {
    "url": "tool/monitor/monitor-summary.html",
    "revision": "c1dc1766301cc24e8805372da4d4bc21"
  },
  {
    "url": "tool/monitor/skywalking.html",
    "revision": "6ffd81f8f3f08803801bab29906dbfad"
  },
  {
    "url": "tool/monitor/zipkin.html",
    "revision": "5a92cba8f484591a3bc88330ea6f784e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
