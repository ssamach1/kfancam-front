import { getFormattedForSearchString } from "./getFormattedForSearchString";

const getSongName = (songName) => {
  songName = songName.toLowerCase();
  if (songName === `mirotic (tvxq!)`) songName = `mirotic`;
  if (songName === `블랙맘바`) songName = "black mamba";
  if (
    songName === `드림스컴트루` ||
    songName === `드림스 컴 트루` ||
    songName === `dream come true`
  )
    songName = "dreams come true";
  if (songName === `세비지`) songName = "savage";
  if (songName === `ænergy`) songName = "aenergy";
  if (songName === `i'll make you cry`) songName = "i’ll make you cry";
  if (songName === `예삐예삐`) songName = "yeppi yeppi";
  if (songName === `자각몽`) songName = "lucid dream";
  if (songName === `도깨비불` || songName === `lllusion`) songName = "illusion";
  if (songName === `life’s too short` || songName === `life is too short`)
    songName = "life's too short";
  if (songName === `쉬어가도 돼`) songName = "icu";
  if (songName === `salty and sweet`) songName = "salty & sweet";
  if (songName === `thirtsy`) songName = "thirsty";
  if (songName === `i’m unhappy`) songName = "i'm unhappy";
  if (songName === `'till we meet again` || songName === `‘till we meet again`)
    songName = "till we meet again";
  if (songName === `약속`) songName = "forever";
  if (songName === `don’t blink`) songName = "don't blink";
  if (songName === `hot air ballon`) songName = "hot air balloon";
  if (
    songName === `regret of the times` ||
    songName === `時代遺憾` ||
    songName === `시대유감`
  )
    songName = "regret of the times";
  if (songName === `armagendon`) songName = "armageddon";
  if (songName === `목소리`) songName = "live my life";

  if (songName === `love maybe`) songName = "love, maybe";
  if (songName === `woke up in tokyo (ruka & asa)`)
    songName = "woke up in tokyo";

  if (songName === `유리구두`) songName = "glass shoes";
  if (songName === `나에게로 오는 길`) songName = "the way to me";
  if (songName === `환상속의 그대`) songName = "miracle";
  if (songName === `다가가고 싶어`) songName = "close to you";
  if (songName === `너를 따라, 너에게`) songName = "think of you";
  if (
    songName === `pit-a-pat` ||
    songName === `두근두근` ||
    songName === `pitapat`
  )
    songName = "dkdk";
  if (songName === `secret code`) songName = "feel good";
  if (songName === `22 세기 소녀`) songName = "22century girl";
  if (songName === `22세기 소녀`) songName = "22century girl";
  if (songName === `물들어`) songName = "coloring";
  if (songName === `fun`) songName = "fun!";
  if (songName === `rumpumpum`) songName = "love rumpumpum";
  if (songName === `별의 밤`) songName = "starry night";
  if (songName === `물고기`) songName = "mulgogi";
  if (songName === `별`) songName = "star";
  if (songName === `달빛바다`) songName = "sea of moonlight";
  if (songName === `#menow` || songName === `menow`) songName = "menow";
  if (songName === `don't care`) songName = "don’t care";
  if (songName === `눈맞춤`) songName = "eye contact";

  if (
    songName === `pop/star` ||
    songName === `pop/stars` ||
    songName === `popstars`
  )
    songName = "pop/stars";
  if (songName === `señorita` || songName === `sanorita`) songName = "senorita";
  if (songName === `dahlia` || songName === `달리아` || songName === `dahlia`)
    songName = "dahlia";
  if (songName === `like a dream` || songName === `꿈결같아서`)
    songName = "like a dream";
  if (
    songName === `is this bad bitch number` ||
    songName === `is this bad b number`
  )
    songName = `is this bad b`;
  if (
    songName === `beam beam (삠삠)` ||
    songName === `beam beam` ||
    songName === `삠삠`
  )
    songName = "beam beam";
  if (
    songName === `소나기 (rain)` ||
    songName === `소나기` ||
    songName === `rain`
  )
    songName = "rain";
  if (songName === `달라`) songName = `dollar`;
  if (songName === `알고 싶어`) songName = `what’s in your house`;
  if (songName === `들어줘요`) songName = `hear me`;
  if (songName === `put it straight` || songName === `싫다고 말해`)
    songName = "put it straight";
  if (songName === `give me your` || songName === `주세요`)
    songName = "give me your";
  if (songName === `uh oh` || songName === `uhoh`) songName = "uh-oh";
  if (songName === `luv u` || songName === `사랑해`) songName = "luv u";
  if (songName === `dumdi dumdi` || songName === `덤디덤디`)
    songName = "dumdi dumdi";
  if (songName === `tung-tung (empty)` || songName === `empty`)
    songName = `tung-tung`;
  if (songName === `한(一)` || songName === `hann (alone)` || songName === `一`)
    songName = "hann";
  if (
    songName === `hann (alone in winter)` ||
    songName === `alone in winter` ||
    songName === `한(寒)` ||
    songName === `寒`
  )
    songName = "hann alone in winter";
  if (songName === `hwaa` || songName === `화` || songName === `火花`)
    songName = "hwaa";
  if (songName === `never stop me` || songName === `말리지 마`)
    songName = "never stop me";
  if (songName === `reset” – 3:0` || songName === `reset`) songName = "reset";
  if (songName === `조각품` || songName === `sculpture`) songName = "sculpture";
  if (
    songName === `dark (x-file)` ||
    songName === `dark` ||
    songName === `x-file`
  )
    songName = "x-file";
  if (songName === `퀸카 (queencard)` || songName === `퀸카`)
    songName = "queencard";
  if (songName === `peter pan` || songName === `어린 어른`)
    songName = "peter pan";
  if (
    songName === `나는 아픈 건 딱 질색이니까 (fate)` ||
    songName === `나는 아픈 건 딱 질색이니까`
  )
    songName = "fate";
  if (songName === `클락션 (klaxon)` || songName === `클락션`)
    songName = "klaxon";

  if (songName === `i'll like you` || songName === `i’ll like you`)
    songName = "i'll like you";
  if (songName === `cherish (my love)` || songName === `cherish`)
    songName = "cherish";
  if (songName === `iykyk (if you know you know)` || songName === `iykyk`)
    songName = "iykyk";
  if (
    songName === `tick tack` ||
    songName === `tick-tack` ||
    songName === `tick - tack`
  )
    songName = "tick tack";

  if (songName === `blood line`) songName = "bloodline";
  if (songName === `달라달라`) songName = "dalla dalla";

  if (songName === `마.피.아.` || songName === "마.피.아. in the morning")
    songName = `in the morning`;
  if (songName === `#twenty`) songName = `twenty`;
  if (songName === `b [00] m-boxx` || songName === `b[oo]m-boxx`)
    songName = "b[oo]m-boxx";
  if (songName === "bratty (나쁜 애)" || songName === `나쁜 애`)
    songName = `bratty`;
  if (songName === "crown on my head (yeji)") songName = `crown on my head`;
  if (songName === "blossom (lia)") songName = `blossom`;
  if (songName === "run away (ryujin)") songName = `run away`;
  if (songName === "mine (chaeryeong)") songName = `mine`;
  if (songName === "yet, but (yuna)") songName = `yet, but`;
  if (songName === `bad girls are us`) songName = "bad girls r us";

  if (songName === `섬찟 (hypnosis)` || songName === `hypnosis`)
    songName = "hypnosis";
  if (
    songName === `궁금해 (next page)` ||
    songName === `궁금해` ||
    songName === `next page`
  )
    songName = "next page";
  if (songName === `해야 (heya)` || songName === `해야` || songName === `heya`)
    songName = "heya";

  if (songName === `쉿 (shhh)` || songName === `쉿` || songName === `shhh`)
    songName = "shhh";
  if (
    songName === `안녕,네버랜드 (bye my neverland)` ||
    songName === `안녕,네버랜드` ||
    songName === `안녕, 네버랜드` ||
    songName === `bye my neverland`
  )
    songName = "bye my neverland";
  if (songName === `sugarcoat (natty solo)` || songName === `sugarcoat`)
    songName = "sugarcoat";
  if (songName === `countdown (belle solo)` || songName === `countdown`)
    songName = "countdown";
  if (songName === `kitty cat (julie solo)` || songName === `kitty cat`)
    songName = "kitty cat";
  if (
    songName === `play love games (haneul solo)` ||
    songName === `play love games`
  )
    songName = "play love games";
  if (songName === `igloo` || songName === `lgloo`) songName = "igloo";

  if (songName === `raise y_our glass` || songName === `raise your glass`)
    songName = "raise y_our glass";
  if (
    songName === `good parts (when the quality is bad but i am)` ||
    songName === `good parts`
  )
    songName = "good parts";
  if (
    songName === `no return (into the unknown)` ||
    songName === `no return` ||
    songName === `no-return` ||
    songName === `no-return (into the unknown)`
  )
    songName = "no return";
  if (
    songName === `eve, psyche & the bluebeard’s wife` ||
    songName === `eve, psyche` ||
    songName === `eptbw` ||
    songName === `이브, 프시케 그리고 푸른 수염의 아내` ||
    songName === `이브, 프시케 그리고 푸른수염의 아내` ||
    songName === `이브 프시케 그리고 푸른수염의 아내` ||
    songName === `이브, 프시케, 그리고 푸른 수염의 아내`
  )
    songName = "eve, psyche & the bluebeard’s wife";
  if (
    songName === `fearnot` ||
    songName === `fearnot (between you, me and the lamppost)` ||
    songName === `between you, me and the lamppost` ||
    songName === `피어나`
  )
    songName = "fearnot";
  if (songName === `ジュエリー` || songName === `jewelry`) songName = "jewelry";
  if (songName === `ドレスコード` || songName === `dresscode`)
    songName = "dresscode";
  if (
    songName === `1-800-hot-n-fun` ||
    songName === `1-800-hot n fun` ||
    songName === `1-800-hot & fun` ||
    songName === `hot n fun`
  )
    songName = "1-800-hot-n-fun";
  if (
    songName === `미치지 못하는 이유 (why i can’t go crazy)` ||
    songName === `미치지 못하는 이유`
  )
    songName = "why i can’t go crazy";
  if (songName === `So Cynical (Badum)` || songName === `Badum`)
    songName = `socynical`;

  if (
    songName === `'青い珊瑚礁` ||
    songName === `푸른 산호초` ||
    songName === `푸른산호초` ||
    songName === `青い珊瑚礁`
  )
    songName = "青い珊瑚礁";
  if (songName === `odoriko` || songName === `踊り子`) songName = "odoriko";
  if (songName === `butterfly` || songName === `butterflies`)
    songName = "butterfly";
  if (songName === `supernatural` || songName === `super natural`)
    songName = "supernatural";

  if (songName === `占`) songName = `tank`;
  if (songName === `hey gabby!` || songName === `안녕 개비!`)
    songName = "hey gabby!";
  if (songName === `sprinkle party` || songName === `스프링클 파티`)
    songName = "sprinkle party";
  if (songName === `cool (your rainbow)` || songName === `cool`)
    songName = "cool";
  if (songName === `Young Dumb Stupid`) songName = `Young, Dumb, Stupid`;
  if (songName === `party o’clock` || songName === `party o'clock`)
    songName = "party o’clock";
  if (
    songName === `soñar (breaker)` ||
    songName === `soñar` ||
    songName === `breaker` ||
    songName === `sonar`
  )
    songName = "sonar";
  if (
    songName === `see that? (별별별)` ||
    songName === `see that?` ||
    songName === `별별별`
  )
    songName = "see that?";
  if (songName === `蜚蜚` || songName === `feifei`) songName = "feifei";

  if (songName === `사랑은 원래 이렇게 아픈 건가요`) songName = "love fool";
  if (songName === `색안경`) songName = "stereotype";
  if (songName === `find (sieun, seeun, & j)`) songName = "find";
  if (songName === `fakin’ (sumin & yoon)`) songName = "fakin’";
  if (songName === `roses (isa)`) songName = "roses";

  return getFormattedForSearchString(songName);
};
export default getSongName;
