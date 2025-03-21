const getIdolName = (idolName, groupName) => {
  if (groupName) groupName = groupName.toLowerCase();
  idolName = idolName.toLowerCase();

  if (
    idolName === `유지민` ||
    idolName === `카리나` ||
    idolName === `カリナ` ||
    idolName === `yu ji-min` ||
    idolName === `yu jimin` ||
    idolName === `yu ji min` ||
    idolName === `yujimin`
  )
    idolName = "karina";
  if (
    idolName === `kim min-jeong` ||
    idolName === `kim minjeong` ||
    idolName === `kim min jeong` ||
    idolName === `kimminjeong` ||
    idolName === `김민정` ||
    idolName === `윈터` ||
    idolName === `ウィンター`
  )
    idolName = "winter";
  if (
    idolName === `ningning` ||
    idolName === `ning yi zhuo` ||
    idolName === `ning yizhuo` ||
    idolName === `ningyizhuo` ||
    idolName === `宁艺卓` ||
    idolName === `宁 艺卓` ||
    idolName === `寧 藝卓` ||
    idolName === `寧藝卓` ||
    idolName === `닝닝` ||
    idolName === `ニンニン` ||
    idolName === `宁宁`
  )
    idolName = "ningning";

  if (
    idolName === `uchinaga eri` ||
    idolName === `uchinagaeri` ||
    idolName === `内永 枝利` ||
    idolName === `内永枝利` ||
    idolName === `kim aeri` ||
    idolName === `김지젤` ||
    idolName === `김애리` ||
    idolName === `지젤` ||
    idolName === `ジゼル`
  )
    idolName = "giselle";

  if (
    idolName === `kawai ruka` ||
    idolName === `kawairuka` ||
    idolName === `루카` ||
    idolName === `河井瑠花` ||
    idolName === `ルカ`
  )
    idolName = "ruka";

  if (
    idolName === `pharitaboonpakdeethaveeyod` ||
    idolName === `boonpakdeethaveeyod` ||
    idolName === `파리타` ||
    idolName === `ภริตา บุญภักดีทวียศ` ||
    idolName === `ภาริตา` ||
    idolName === `パリタ`
  )
    idolName = "pharita";

  if (
    idolName === `enami asa` ||
    idolName === `enamiasa` ||
    idolName === `에나미 아사` ||
    idolName === `榎並 杏紗` ||
    idolName === `榎並 杏紗` ||
    idolName === `아사` ||
    idolName === `アサ`
  )
    idolName = "asa";

  if (
    idolName === `郑雅贤` ||
    idolName === `郑 雅贤` ||
    idolName === `zhèng yǎxián` ||
    idolName === `정아현` ||
    idolName === `jung a-hyeon` ||
    idolName === `jung ahyeon` ||
    idolName === `jung a hyeon` ||
    idolName === `jungahyeon` ||
    idolName === `아현` ||
    idolName === `アヒョン`
  )
    idolName = "ahyeon";

  if (
    idolName === `라미` ||
    idolName === `haram` ||
    idolName === `하람` ||
    idolName === `shin ha-ram` ||
    idolName === `shin haram` ||
    idolName === `shin ha ram` ||
    idolName === `shinharam` ||
    idolName === `신하람` ||
    idolName === `ラミ`
  )
    idolName = "rami";

  if (
    idolName === `ローラ` ||
    idolName === `lǐ chárén` ||
    idolName === `李茶仁` ||
    idolName === `李 茶仁` ||
    idolName === `lee da-in` ||
    idolName === `lee da in` ||
    idolName === `lee dain` ||
    idolName === `leedain` ||
    idolName === `이다인` ||
    idolName === `로라`
  )
    idolName = "rora";

  if (
    idolName === `치키타` ||
    idolName === `チキータ` ||
    idolName === `riracha phondechaphiphat` ||
    idolName === `rirachaphondechaphiphat` ||
    idolName === `ริรชา พรเดชาพิพัฒ` ||
    idolName === `ริรชาพรเดชาพิพัฒ`
  )
    idolName = "chiquita";

  if (
    idolName === `lee sae rom` ||
    idolName === `lee sae-rom` ||
    idolName === `lee saerom` ||
    idolName === `leesaerom` ||
    idolName === `이새롬` ||
    idolName === `새롬`
  )
    idolName = "saerom";
  if (
    idolName === `song ha-young` ||
    idolName === `song ha young` ||
    idolName === `song hayoung` ||
    idolName === `songhayoung` ||
    idolName === `송하영` ||
    idolName === `하영`
  )
    idolName = "hayoung";
  if (
    idolName === `park ji-won` ||
    idolName === `park ji won` ||
    idolName === `park jiwon` ||
    idolName === `parkjiwon` ||
    idolName === `박지원` ||
    idolName === `지원`
  )
    idolName = "jiwon";
  if (
    idolName === `rho ji-sun` ||
    idolName === `rho ji sun` ||
    idolName === `roh jisun` ||
    idolName === `rohjisun` ||
    idolName === `노지선` ||
    idolName === `지선`
  )
    idolName = "jisun";
  if (
    idolName === `lee seo-yeon` ||
    idolName === `lee seoyeon` ||
    idolName === `lee seo yeon` ||
    idolName === `lee seoyeon` ||
    idolName === `이서연` ||
    idolName === `서연`
  )
    idolName = "seoyeon";
  if (
    idolName === `lee chae-young` ||
    idolName === `lee chae young` ||
    idolName === `lee chaeyoung` ||
    idolName === `leechaeyoung` ||
    idolName === `이채영` ||
    idolName === `채영`
  )
    idolName = "chaeyoung";
  if (
    idolName === `lee na-gyung` ||
    idolName === `lee na gyung` ||
    idolName === `lee nagyung` ||
    idolName === `leenagyung` ||
    idolName === `이나경` ||
    idolName === `나경`
  )
    idolName = "nagyung";
  if (
    idolName === `baek ji-heon` ||
    idolName === `baek ji heon` ||
    idolName === `baek jiheon` ||
    idolName === `baekjiheon` ||
    idolName === `백지헌` ||
    idolName === `지헌`
  )
    idolName = "jiheon";
  if (
    idolName === `jang gyu-ri` ||
    idolName === `jang gyu ri` ||
    idolName === `jang gyuri` ||
    idolName === `janggyuri` ||
    idolName === `장규리` ||
    idolName === `규리`
  )
    idolName = "gyuri";

  if (
    idolName === `소연` ||
    idolName === `jeon so-yeon` ||
    idolName === `jeon soyeon` ||
    idolName === `jeon so yeon` ||
    idolName === `jeonsoyeon` ||
    idolName === `전소연` ||
    idolName === `ソヨン`
  )
    idolName = "soyeon";

  if (
    idolName === `kim min-hee` ||
    idolName === `kim minhee` ||
    idolName === `김민희` ||
    idolName === `nicha yontararak` ||
    idolName === `nichayontararak` ||
    idolName === `มินนี่ ณิชา ยนตรรักษ์` ||
    idolName === `มินนี่ณิชายนตรรักษ์` ||
    idolName === `ミンニ` ||
    idolName === `มินนี่` ||
    idolName === `민니`
  )
    idolName = "minnie";
  if (
    idolName === `미연` ||
    idolName === `cho mi-yeon` ||
    idolName === `cho mi yeon` ||
    idolName === `cho miyeon` ||
    idolName === `chomiyeon` ||
    idolName === `조미연` ||
    idolName === `ミヨン`
  )
    idolName = "miyeon";

  if (
    idolName === `우기` ||
    idolName === `ウギ` ||
    idolName === `雨琦` ||
    idolName === `sòng yǔ qí` ||
    idolName === `sòng yǔqí` ||
    idolName === `song yuqi` ||
    idolName === `songyuqi` ||
    idolName === `宋雨琦` ||
    idolName === `宋 雨琦` ||
    idolName === `song woo-gi` ||
    idolName === `song woogi` ||
    idolName === `송우기`
  )
    idolName = "yuqi";

  if (
    idolName === `슈화` ||
    idolName === `シュファ` ||
    idolName === `yoo su-hwa` ||
    idolName === `yoo suhwa` ||
    idolName === `유수화` ||
    idolName === `yè shūhuá` ||
    idolName === `yèshūhuá` ||
    idolName === `yeshuhua` ||
    idolName === `ye shuhua` ||
    idolName === `ye shu hua` ||
    idolName === `yeh shu hua` ||
    idolName === `yehshuhua` ||
    idolName === `yeh shuhua` ||
    idolName === `叶舒华` ||
    idolName === `叶 舒华`
  )
    idolName = "shuhua";

  if (
    idolName === `수진` ||
    idolName === `スジン` ||
    idolName === `seo soo-jin` ||
    idolName === `seo soojin` ||
    idolName === `seosoojin` ||
    idolName === `seo soo jin` ||
    idolName === `서수진`
  )
    idolName = "soojin";

  if (
    idolName === `윤아` ||
    idolName === `盧玧我` ||
    idolName === `盧 玧我` ||
    idolName === `roh yunah` ||
    idolName === `rohyunah` ||
    idolName === `roh yu-nah` ||
    idolName === `roh yu nah` ||
    idolName === `노윤아`
  )
    idolName = "yunah";

  if (
    idolName === `민주` ||
    idolName === `朴慜柱` ||
    idolName === `朴 慜柱` ||
    idolName === `park min-ju` ||
    idolName === `park minju` ||
    idolName === `park min ju` ||
    idolName === `parkminju` ||
    idolName === `박민주`
  )
    idolName = "minju";

  if (
    idolName === `모카` ||
    idolName === `境 萌花` ||
    idolName === `境萌花` ||
    idolName === `sakai moka` ||
    idolName === `sakaimoka` ||
    idolName === `사카이 모카` ||
    idolName === `사카이모카`
  )
    idolName = "moka";

  if (
    idolName === `원희` ||
    idolName === `lee wonhee` ||
    idolName === `leewonhee` ||
    idolName === `lee won-hee` ||
    idolName === `lee won hee` ||
    idolName === `이원희` ||
    idolName === `李沅禧` ||
    idolName === `李 沅禧`
  )
    idolName = "wonhee";

  if (
    idolName === `이로하` ||
    idolName === `hokazono iroha` ||
    idolName === `hokazonoiroha` ||
    idolName === `外薗 彩羽` ||
    idolName === `外薗彩羽` ||
    idolName === `호카조노 이로하` ||
    idolName === `호카조노이로하`
  )
    idolName = "iroha";

  if (
    idolName === `예지` ||
    idolName === `イェジ` ||
    idolName === `黃禮志` ||
    idolName === `黃 禮志` ||
    idolName === `hwangyeji` ||
    idolName === `hwang yeji` ||
    idolName === `hwang ye-ji` ||
    idolName === `hwang ye ji` ||
    idolName === `황예지`
  )
    idolName = "yeji";

  if (
    idolName === `류진` ||
    idolName === `リュジン` ||
    idolName === `申 留眞` ||
    idolName === `申留眞` ||
    idolName === `shin ryu-jin` ||
    idolName === `shin ryu jin` ||
    idolName === `shin ryujin` ||
    idolName === `shinryujin` ||
    idolName === `신류진`
  )
    idolName = "ryujin";

  if (
    idolName === `채령` ||
    idolName === `チェリョン` ||
    idolName === `李彩領` ||
    idolName === `李 彩領` ||
    idolName === `lee chae-ryeong` ||
    idolName === `lee chae ryeong` ||
    idolName === `leechaeryeong` ||
    idolName === `lee chaeryeong` ||
    idolName === `이채령`
  )
    idolName = "chaeryeong";

  if (
    idolName === `유나` ||
    idolName === `ユナ` ||
    idolName === `申有娜` ||
    idolName === `申 有娜` ||
    idolName === `shin yuna` ||
    idolName === `shinyuna` ||
    idolName === `shin yu-na` ||
    idolName === `shin yu na` ||
    idolName === `신유나`
  )
    idolName = "yuna";

  if (
    idolName === `리아` ||
    idolName === `リア` ||
    idolName === `崔智壽` ||
    idolName === `崔 智壽` ||
    idolName === `최지수` ||
    idolName === `choi jisu` ||
    idolName === `choi ji-su` ||
    idolName === `choi ji su` ||
    idolName === `choijisu`
  )
    idolName = "lia";

  if (
    idolName === `jang won-young` ||
    idolName === `jang won young` ||
    idolName === `jang wonyoung` ||
    idolName === `jangwonyoung` ||
    idolName === `wonyoung` ||
    idolName === `장원영` ||
    idolName === `원영` ||
    idolName === `ウォニョン` ||
    idolName === `張員瑛` ||
    idolName === `チャン・ウォニョン` ||
    idolName === `张员瑛` ||
    idolName === `zhāng yuányīng`
  )
    idolName = "wonyoung";

  if (
    (idolName === `an yu-jin` ||
      idolName === `an yu jin` ||
      idolName === `an yujin` ||
      idolName === `anyujin` ||
      idolName === `yujin` ||
      idolName === `안유진` ||
      idolName === `유진` ||
      idolName === `ユジン` ||
      idolName === `安兪眞` ||
      idolName === `安 兪眞` ||
      idolName === `アン・ユジン`) &&
    groupName === `ive`
  )
    idolName = "anyujin";

  if (
    idolName === `gaeul` ||
    idolName === `가을` ||
    idolName === `ガウル` ||
    idolName === `김가을` ||
    idolName === `金가을` ||
    idolName === `kimgaeul` ||
    idolName === `kim gaeul` ||
    idolName === `kim ga-eul` ||
    idolName === `kim ga eul`
  )
    idolName = "gaeul";

  if (
    idolName === `rei` ||
    idolName === `레이` ||
    idolName === `レイ` ||
    idolName === `kim rei` ||
    idolName === `김레이` ||
    idolName === `naoi rei` ||
    idolName === `直井 怜` ||
    idolName === `나오이 레이` ||
    idolName === `나오이레이`
  )
    idolName = "rei";

  if (
    idolName === `liz` ||
    idolName === `리즈` ||
    idolName === `kimjiwon` ||
    idolName === `kim ji-won` ||
    idolName === `kim jiwon` ||
    idolName === `kim ji won` ||
    idolName === `김지원` ||
    idolName === `金志垣`
  )
    idolName = "liz";

  if (
    idolName === `leeseo` ||
    idolName === `이서` ||
    idolName === `イソ` ||
    idolName === `李賢瑞` ||
    idolName === `lee hyunseo` ||
    idolName === `leehyunseo` ||
    idolName === `lee hyun-seo` ||
    idolName === `lee hyun seo` ||
    idolName === `이현서`
  )
    idolName = "leeseo";

  if (
    (idolName === `choiyujin` ||
      idolName === `choi yujin` ||
      idolName === `yujin` ||
      idolName === `최유진` ||
      idolName === `유진` ||
      idolName === `ユジン`) &&
    groupName === `kepler`
  )
    idolName = "choiyujin";
  if (
    idolName === `shen xiaoting` ||
    idolName === `shen xiao ting` ||
    idolName === `shenxiaoting` ||
    idolName === `샤오팅` ||
    idolName === `沈小婷` ||
    idolName === `シャオティン`
  )
    idolName = "xiaoting";
  if (
    idolName === `kim chaehyun` ||
    idolName === `kimchaehyun` ||
    idolName === `kim chae hyun` ||
    idolName === `김채현` ||
    idolName === `채현` ||
    idolName === `チェヒョン`
  )
    idolName = "chaehyun";
  if (
    idolName === `kim dayeon` ||
    idolName === `kimdayeon` ||
    idolName === `kim da yeon` ||
    idolName === `김다연` ||
    idolName === `다연` ||
    idolName === `ダヨン`
  )
    idolName = "dayeon";
  if (idolName === `히카루` || idolName === `ひかる`) idolName = "hikaru";
  if (
    idolName === `huening bahiyyih` ||
    idolName === `휴닝바히에` ||
    idolName === `바히에` ||
    idolName === `ヒュニンバヒエ` ||
    idolName === `バヒエ` ||
    idolName === `bahiyyih`
  )
    idolName = "bahi";
  if (
    idolName === `seo youngeun` ||
    idolName === `seo young eun` ||
    idolName === `seoyoungeun` ||
    idolName === `ヨンウン` ||
    idolName === `서영은` ||
    idolName === `영은`
  )
    idolName = "youngeun";
  if ((idolName === `마시로` || idolName === `舞白`) && groupName === `kepler`)
    idolName = "mashiro";
  if (
    (idolName === `kang yeseo` ||
      idolName === `kang ye seo` ||
      idolName === `kangyeseo` ||
      idolName === `강예서` ||
      idolName === `예서` ||
      idolName === `イェソ`) &&
    groupName === `kepler`
  )
    idolName = "yeseo";

  if (
    idolName === `julie` ||
    idolName === `쥴리` ||
    idolName === `julie han` ||
    idolName === `han julie` ||
    idolName === `쥴리한` ||
    idolName === `한줄리` ||
    idolName === `韓줄리`
  )
    idolName = "julie";

  if (
    idolName === `natty` ||
    idolName === `나띠` ||
    idolName === `นัตตี้` ||
    idolName === `낫띠` ||
    idolName === `อาณัชญา สุพุทธิพงศ์` ||
    idolName === `อาณัชญาสุพุทธิพงศ์` ||
    idolName === `아낫차야 수푸티` ||
    idolName === `아낫차야수푸티` ||
    idolName === `ahnatchaya suputhipong` ||
    idolName === `ahnatchayasuputhipong`
  )
    idolName = "natty";

  if (
    idolName === `belle` ||
    idolName === `벨` ||
    idolName === `shimhyewon` ||
    idolName === `shim hyewon` ||
    idolName === `shim hye won` ||
    idolName === `shim hye-won` ||
    idolName === `심혜원` ||
    idolName === `annabelle shim` ||
    idolName === `애나벨 혜원 심` ||
    idolName === `沈寭園`
  )
    idolName = "belle";

  if (
    idolName === `haneul` ||
    idolName === `하늘` ||
    idolName === `wonhaneul` ||
    idolName === `won haneul` ||
    idolName === `won ha-neul` ||
    idolName === `won ha neul` ||
    idolName === `원하늘` ||
    idolName === `元하늘`
  )
    idolName = "haneul";

  if (
    idolName === `huh yunjin` ||
    idolName === `huhyunjin` ||
    idolName === `yunjin` ||
    idolName === `허윤진` ||
    idolName === `ホ・ユンジン` ||
    idolName === `ユンジン` ||
    idolName === `jennifer huh` ||
    idolName === `jenniferhuh` ||
    idolName === `huh yun-jin` ||
    idolName === `huh yun jin` ||
    idolName === `許允眞` ||
    idolName === `제니퍼 윤진 허`
  )
    idolName = "yunjin";
  if (
    idolName === `hong eunchae` ||
    idolName === `hongeunchae` ||
    idolName === `eunchae` ||
    idolName === `홍은채` ||
    idolName === `ホン・ウンチェ` ||
    idolName === `ウンチェ` ||
    idolName === `hong eun-chae` ||
    idolName === `hong eun chae` ||
    idolName === `洪恩採`
  )
    idolName = "eunchae";
  if (
    idolName === `kim chaewon` ||
    idolName === `kimchaewon` ||
    idolName === `chaewon` ||
    idolName === `김채원` ||
    idolName === `キム・チェウォン` ||
    idolName === `チェウォン` ||
    idolName === `kim chae-won` ||
    idolName === `kim chae won` ||
    idolName === `金采源`
  )
    idolName = "chaewon";
  if (
    idolName === `nakamura kazuha` ||
    idolName === `nakamurakazuha` ||
    idolName === `kazuha` ||
    idolName === `카즈하` ||
    idolName === `一葉/カズハ` ||
    idolName === `カズハ` ||
    idolName === `kang ju-ha` ||
    idolName === `kang juha` ||
    idolName === `강주하` ||
    idolName === `中村一葉` ||
    idolName === `나카무라 카즈하`
  )
    idolName = "kazuha";
  if (
    idolName === `miyawaki sakura` ||
    idolName === `miyawakisakura` ||
    idolName === `sakura` ||
    idolName === `사쿠라` ||
    idolName === `咲良/サクラ` ||
    idolName === `미야와키사쿠라` ||
    idolName === `미야와키 사쿠라` ||
    idolName === `宮脇咲良` ||
    idolName === `宮脇 咲良` ||
    idolName === `サクラ`
  )
    idolName = "sakura";

  if (
    idolName === `minji` ||
    idolName === `민지` ||
    idolName === `김민지` ||
    idolName === `kim min-ji` ||
    idolName === `kim minji` ||
    idolName === `kim min ji` ||
    idolName === `kimminji` ||
    idolName === `金玟池`
  )
    idolName = "minji";
  if (
    idolName === `hanni` ||
    idolName === `하니` ||
    idolName === `hanni pham` ||
    idolName === `하니 팜` ||
    idolName === `하니팜` ||
    idolName === `phạm ngọc hân` ||
    idolName === `范玉欣`
  )
    idolName = "hanni";
  if (
    idolName === `danielle` ||
    idolName === `다니엘` ||
    idolName === `danielle june marsh` ||
    idolName === `다니엘 준 마시` ||
    idolName === `牟智慧` ||
    idolName === `모지혜` ||
    idolName === `mo jihye` ||
    idolName === `mojihye` ||
    idolName === `mo ji-hye` ||
    idolName === `mo ji hye`
  )
    idolName = "danielle";
  if (
    idolName === `haerin` ||
    idolName === `해린` ||
    idolName === `kanghaerin` ||
    idolName === `kang haerin` ||
    idolName === `kang hae-rin` ||
    idolName === `kang hae rin` ||
    idolName === `강해린` ||
    idolName === `姜諧潾`
  )
    idolName = "haerin";
  if (
    idolName === `hyein` ||
    idolName === `혜인` ||
    idolName === `leehyein` ||
    idolName === `lee hyein` ||
    idolName === `lee hye-in` ||
    idolName === `lee hye in` ||
    idolName === `이혜인` ||
    idolName === `李惠仁` ||
    idolName === `li huiren`
  )
    idolName = "hyein";

  if (
    idolName === `lily` ||
    idolName === `릴리` ||
    idolName === `lily morrow` ||
    idolName === `릴리 머로우` ||
    idolName === `lilymorrow` ||
    idolName === `릴리머로우` ||
    idolName === `パク・ジン` ||
    idolName === `朴珍` ||
    idolName === `lily jin park morrow` ||
    idolName === `릴리 진 박 머로우` ||
    idolName === `박진` ||
    idolName === `朴珍`
  )
    idolName = "lily";
  if (
    idolName === `haewon` ||
    idolName === `해원` ||
    idolName === `ohhaewon` ||
    idolName === `oh haewon` ||
    idolName === `oh hae-won` ||
    idolName === `oh hae won` ||
    idolName === `오해원` ||
    idolName === `オ・ヘウォン` ||
    idolName === `吳海嫄`
  )
    idolName = "haewon";
  if (
    idolName === `sullyoon` ||
    idolName === `설윤` ||
    idolName === `seolyoona` ||
    idolName === `seol yoona` ||
    idolName === `seol yoon-a` ||
    idolName === `seol yoon a` ||
    idolName === `설윤아` ||
    idolName === `ソル・ユナ` ||
    idolName === `薛侖娥`
  )
    idolName = "sullyoon";
  if (
    idolName === `bae` ||
    idolName === `배이` ||
    idolName === `배진솔` ||
    idolName === `裵眞率` ||
    idolName === `baejinsol` ||
    idolName === `bae jinsol` ||
    idolName === `bae jin-sol` ||
    idolName === `bae jin sol` ||
    idolName === `ペ・ジンソル`
  )
    idolName = "bae";
  if (
    idolName === `jiwoo` ||
    idolName === `지우` ||
    idolName === `김지우` ||
    idolName === `kimjiwoo` ||
    idolName === `kim jiwoo` ||
    idolName === `kim ji-woo` ||
    idolName === `kim ji woo` ||
    idolName === `キム・ジウ` ||
    idolName === `金智友`
  )
    idolName = "jiwoo";
  if (
    idolName === `kyujin` ||
    idolName === `규진` ||
    idolName === `jangkyujin` ||
    idolName === `jang kyujin` ||
    idolName === `jang kyu-jin` ||
    idolName === `jang kyu jin` ||
    idolName === `장규진` ||
    idolName === `チャン・ギュジン` ||
    idolName === `張圭珍`
  )
    idolName = "kyujin";
  if (
    idolName === `jinni` ||
    idolName === `jini` ||
    idolName === `지니` ||
    idolName === `choiyunjin` ||
    idolName === `choi yunjin` ||
    idolName === `choi yun-jin` ||
    idolName === `choi yun jin` ||
    idolName === `최윤진` ||
    idolName === `チェ・ユンジン` ||
    idolName === `崔允珍`
  )
    idolName = "jinni";

  if (
    idolName === `sumin` ||
    idolName === `수민` ||
    idolName === `baesumin` ||
    idolName === `bae sumin` ||
    idolName === `bae su-min` ||
    idolName === `bae su min` ||
    idolName === `bae soomin` ||
    idolName === `baesoomin` ||
    idolName === `bae soo-min` ||
    idolName === `bae soo min` ||
    idolName === `배수민` ||
    idolName === `裵秀珉`
  )
    idolName = "sumin";
  if (
    idolName === `sieun` ||
    idolName === `시은` ||
    idolName === `parksieun` ||
    idolName === `park sieun` ||
    idolName === `park si-eun` ||
    idolName === `park si eun` ||
    idolName === `박시은` ||
    idolName === `朴蒔恩`
  )
    idolName = "sieun";
  if (
    idolName === `isa` ||
    idolName === `아이사` ||
    idolName === `leechaeyoung` ||
    idolName === `lee chaeyoung` ||
    idolName === `lee chae-young` ||
    idolName === `lee chae young` ||
    idolName === `이채영` ||
    idolName === `李彩煐`
  )
    idolName = "isa";
  if (
    idolName === `seeun` ||
    idolName === `세은` ||
    idolName === `윤세은` ||
    idolName === `yoonseeun` ||
    idolName === `yoon seeun` ||
    idolName === `yoon se-eun` ||
    idolName === `yoon se eun` ||
    idolName === `尹勢銀`
  )
    idolName = "seeun";
  if (
    idolName === `yoon` ||
    idolName === `윤` ||
    idolName === `shim jayoon` ||
    idolName === `shimjayoon` ||
    idolName === `shim ja-yoon` ||
    idolName === `shim ja yoon` ||
    idolName === `심자윤` ||
    idolName === `沈姿潤`
  )
    idolName = "yoon";
  if (
    idolName === `j` ||
    idolName === `재이` ||
    idolName === `jangyeeun` ||
    idolName === `jang yeeun` ||
    idolName === `jang ye-eun` ||
    idolName === `jang ye eun` ||
    idolName === `장예은` ||
    idolName === `張叡恩`
  )
    idolName = "j";

  return idolName;
};
export default getIdolName;
