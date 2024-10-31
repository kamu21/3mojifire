//問題
const question = [
    {
        q: "貝",
        a: ["あ", "さ", "り"]
    },
    {
        q: "動物",
        a: ["ア", "シ", "カ"]
    },
    {
        q: "動物",
        a: ["ア", "ヒ", "ル"]
    },
    {
        q: "動物",
        a: ["イ", "タ", "チ"]
    },
    {
        q: "海の生き物",
        a: ["イ", "ル", "カ"]
    },
    {
        q: "魚",
        a: ["イ", "ワ", "シ"]
    },
    {
        q: "動物",
        a: ["ウ", "サ", "ギ"]
    },
    {
        q: "鳥",
        a: ["オ", "ウ", "ム"]
    },
    {
        q: "動物",
        a: ["カ", "エ", "ル"]
    },
    {
        q: "鳥",
        a: ["カ", "モ", "メ"]
    },
    {
        q: "鳥",
        a: ["カ", "ラ", "ス"]
    },
    {
        q: "動物",
        a: ["キ", "ツ", "ネ"]
    },
    {
        q: "動物",
        a: ["キ", "リ", "ン"]
    },
    {
        q: "海の生き物",
        a: ["ク", "ジ", "ラ"]
    },
    {
        q: "動物",
        a: ["コ", "ア", "ラ"]
    },
    {
        q: "動物",
        a: ["ゴ", "リ", "ラ"]
    },
    {
        q: "砂漠にいるらしい",
        a: ["サ", "ソ", "リ"]
    },
    {
        q: "貝",
        a: ["シ", "ジ", "ミ"]
    },
    {
        q: "鳥",
        a: ["ス", "ズ", "メ"]
    },
    {
        q: "動物",
        a: ["タ", "ヌ", "キ"]
    },
    {
        q: "鳥",
        a: ["ツ", "バ", "メ"]
    },
    {
        q: "爬虫類",
        a: ["ト", "カ", "ゲ"]
    },
    {
        q: "虫",
        a: ["ト", "ン", "ボ"]
    },
    {
        q: "ミッキーマウスのモデル",
        a: ["ネ", "ズ", "ミ"]
    },
    {
        q: "動物",
        a: ["パ", "ン", "ダ"]
    },
    {
        q: "北海道に生息",
        a: ["ヒ", "グ", "マ"]
    },
    {
        q: "動物",
        a: ["ヒ", "ツ", "ジ"]
    },
    {
        q: "動物",
        a: ["モ", "グ", "ラ"]
    },
    {
        q: "動物",
        a: ["ラ", "ク", "ダ"]
    },
    {
        q: "果物",
        a: ["イ", "チ", "ゴ"]
    },
    {
        q: "野菜",
        a: ["キ", "ノ", "コ"]
    },
    {
        q: "野菜",
        a: ["ゴ", "ボ", "ウ"]
    },
    {
        q: "花",
        a: ["サ", "ク", "ラ"]
    },
    {
        q: "果物",
        a: ["ス", "イ", "カ"]
    },
    {
        q: "花",
        a: ["ス", "ミ", "レ"]
    },
    {
        q: "野菜",
        a: ["セ", "ロ", "リ"]
    },
    {
        q: "果物",
        a: ["バ", "ナ", "ナ"]
    },
    {
        q: "果物",
        a: ["パ", "イ", "ン"]
    },
    {
        q: "果物",
        a: ["ブ", "ド", "ウ"]
    },
    {
        q: "果物",
        a: ["み", "か", "ん"]
    },
    {
        q: "秋の葉",
        a: ["も", "み", "じ"]
    },
    {
        q: "果物",
        a: ["り", "ん", "ご"]
    },
    {
        q: "酸っぱい",
        a: ["レ", "モ", "ン"]
    },
    {
        q: "辛い",
        a: ["わ", "さ", "び"]
    },
    {
        q: "身体",
        a: ["あ", "た", "ま"]
    },
    {
        q: "身体",
        a: ["お", "で", "こ"]
    },
    {
        q: "身体",
        a: ["お", "な", "か"]
    },
    {
        q: "身体",
        a: ["せ", "な", "か"]
    },
    {
        q: "身体",
        a: ["て", "く", "び"]
    },
    {
        q: "目のこと",
        a: ["ひ", "と", "み"]
    },
    {
        q: "身体",
        a: ["ほ", "く", "ろ"]
    },
    {
        q: "身体",
        a: ["ま", "つ", "げ"]
    },
    {
        q: "身体",
        a: ["ま", "ゆ", "げ"]
    },
    {
        q: "県",
        a: ["い", "わ", "て"]
    },
    {
        q: "県",
        a: ["み", "や", "ぎ"]
    },
    {
        q: "県",
        a: ["あ", "き", "た"]
    },
    {
        q: "県",
        a: ["と", "ち", "ぎ"]
    },
    {
        q: "県",
        a: ["ぐ", "ん", "ま"]
    },
    {
        q: "県",
        a: ["な", "が", "の"]
    },
    {
        q: "県",
        a: ["あ", "い", "ち"]
    },
    {
        q: "県",
        a: ["と", "や", "ま"]
    },
    {
        q: "県",
        a: ["ふ", "く", "い"]
    },
    {
        q: "県",
        a: ["し", "ま", "ね"]
    },
    {
       q: "県",
        a: ["か", "が", "わ"]
    },
    {
        q: "県",
        a: ["え", "ひ", "め"]
    },
    {
        q: "県",
        a: ["こ", "う", "ち"]
    },
    {
        q: "市",
        a: ["た", "じ", "み"]
    },
    {
        q: "市",
        a: ["な", "ご", "や"]
    },
    {
        q: "市",
        a: ["こ", "う", "べ"]
    },
    {
        q: "豆",
        a: ["あ", "ず", "き"]
    },
    {
        q: "野菜",
        a: ["お", "く", "ら"]
    },
    {
        q: "ダシをとる",
        a: ["こ", "ん", "ぶ"]
    },
    {
        q: "豆",
        a: ["だ", "い", "ず"]
    },
    {
        q: "野菜",
        a: ["ト", "マ", "ト"]
    },
    {
        q: "野菜",
        a: ["な", "す", "び"]
    },
    {
        q: "果物",
        a: ["メ", "ロ", "ン"]
    },
    {
        q: "野菜",
        a: ["も", "や", "し"]
    },
    {
        q: "野菜",
        a: ["レ", "タ", "ス"]
    },
    {
        q: "海藻",
        a: ["わ", "か", "め"]
    },
    {
        q: "小型観賞魚",
        a: ["メ", "ダ", "カ"]
    },
    {
        q: "冬に使う",
        a: ["こ", "た", "つ"]
    },
    {
        q: "写真を撮る",
        a: ["カ", "メ", "ラ"]
    },
    {
        q: "時間を見る",
        a: ["と", "け", "い"]
    },
    {
        q: "離れた人と話す",
        a: ["で", "ん", "わ"]
    },
    {
        q: "布地を縫う",
        a: ["ミ", "シ", "ン"]
    },
    {
        q: "電化製品",
        a: ["ラ", "ジ", "オ"]
    },
    {
        q: "電化製品",
        a: ["テ", "レ", "ビ"]
    },
    {
        q: "作物を育てる",
        a: ["は", "た", "け"]
    },
    {
        q: "冷たい",
        a: ["ア", "イ", "ス"]
    },
    {
        q: "寝具",
        a: ["ま", "く", "ら"]
    },
    {
        q: "寝具",
        a: ["ふ", "と", "ん"]
    },
    {
        q: "泊まる",
        a: ["ホ", "テ", "ル"]
    },
    {
        q: "風邪を引いたら飲む",
        a: ["く", "す", "り"]
    },
    {
        q: "スポーツ",
        a: ["ゴ", "ル", "フ"]
    },
    {
        q: "スポーツ",
        a: ["テ", "ニ", "ス"]
    },
    {
        q: "踊る",
        a: ["ダ", "ン", "ス"]
    },
    {
        q: "土俵の上で組み合う",
        a: ["す", "も", "う"]
    },
    {
        q: "雪山を滑る",
        a: ["ス", "キ", "ー"]
    },
    {
        q: "競走馬が走る",
        a: ["け", "い", "ば"]
    },
    {
        q: "フライパンにひく",
        a: ["あ", "ぶ", "ら"]
    },
    {
        q: "辛い",
        a: ["か", "ら", "し"]
    },
    {
        q: "甘い",
        a: ["さ", "と", "う"]
    },
    {
        q: "乳製品",
        a: ["バ", "タ", "ー"]
    },
    {
        q: "調味料",
        a: ["み", "り", "ん"]
    },
    {
        q: "色をつける",
        a: ["イ", "ン", "ク"]
    },
    {
        q: "絵に色をつける",
        a: ["え", "の", "ぐ"]
    },
    {
        q: "切る",
        a: ["ナ", "イ", "フ"]
    },
    {
        q: "切る",
        a: ["は", "さ", "み"]
    },
    {
        q: "書類に押す",
        a: ["は", "ん", "こ"]
    },
    {
        q: "お金を入れる",
        a: ["さ", "い", "ふ"]
    },
    {
        q: "丸い",
        a: ["タ", "イ", "ヤ"]
    },
    {
        q: "金　銀　銅",
        a: ["メ", "ダ", "ル"]
    },
    {
        q: "クリスマスに登場",
        a: ["サ", "ン", "タ"]
    },
    {
        q: "声を大きくする",
        a: ["マ", "イ", "ク"]
    },
    {
        q: "色",
        a: ["み", "ど", "り"]
    },
    {
        q: "光る",
        a: ["ホ", "タ", "ル"]
    },
    {
        q: "食べ物",
        a: ["カ", "レ", "ー"]
    },
    {
        q: "お菓子",
        a: ["ゼ", "リ", "ー"]
    },
    {
        q: "踊る",
        a: ["バ", "レ", "エ"]
    },
    {
        q: "激しく吹く風",
        a: ["あ", "ら", "し"]
    },
    {
        q: "人工の歯",
        a: ["い", "れ", "ば"]
    },
    {
        q: "あおいで風をおこす",
        a: ["う", "ち", "わ"]
    },
    {
        q: "話せるとかっこいい",
        a: ["え", "い", "ご"]
    },
    {
        q: "王の子",
        a: ["お", "う", "じ"]
    },
    {
        q: "男性",
        a: ["お", "と", "こ"]
    },
    {
        q: "落ちた葉",
        a: ["お", "ち", "ば"]
    },
    {
        q: "成人",
        a: ["お", "と", "な"]
    },
    {
        q: "ダンス",
        a: ["お", "ど", "り"]
    },
    {
        q: "とても怖い",
        a: ["お", "ば", "け"]
    },
    {
        q: "女性",
        a: ["お", "ん", "な"]
    },
    {
        q: "子供を背負う",
        a: ["お", "ん", "ぶ"]
    },
    {
        q: "姿が映る",
        a: ["か", "が", "み"]
    },
    {
        q: "古い地層で発見",
        a: ["か", "せ", "き"]
    },
    {
        q: "花をさす",
        a: ["か", "び", "ん"]
    },
    {
        q: "スギやヒノキ",
        a: ["か", "ふ", "ん"]
    },
    {
        q: "端午の節句",
        a: ["か", "ぶ", "と"]
    },
    {
        q: "札をとる",
        a: ["か", "る", "た"]
    },
    {
        q: "色",
        a: ["き", "い", "ろ"]
    },
    {
        q: "粉",
        a: ["き", "な", "こ"]
    },
    {
        q: "和服",
        a: ["き", "も", "の"]
    },
    {
        q: "問題に答える",
        a: ["ク", "イ", "ズ"]
    },
    {
        q: "無色透明",
        a: ["く", "う", "き"]
    },
    {
        q: "編み物で使う",
        a: ["け", "い", "と"]
    },
    {
        q: "火事やタバコで発生",
        a: ["け", "む", "り"]
    },
    {
        q: "学校の教科",
        a: ["こ", "く", "ご"]
    },
    {
        q: "大人になる前",
        a: ["こ", "ど", "も"]
    },
    {
        q: "耳の中にある",
        a: ["こ", "ま", "く"]
    },
    {
        q: "体の調子がよくて健康なこと",
        a: ["げ", "ん", "き"]
    },
    {
        q: "怪獣",
        a: ["ゴ", "ジ", "ラ"]
    },
    {
        q: "物を入れて運ぶ",
        a: ["カ", "バ", "ン"]
    },
    {
        q: "水中をすみかとする",
        a: ["さ", "か", "な"]
    },
    {
        q: "砂だらけ",
        a: ["さ", "ば", "く"]
    },
    {
        q: "海の生き物",
        a: ["サ", "ン", "ゴ"]
    },
    {
        q: "健康によい",
        a: ["さ", "ん", "ぽ"]
    },
    {
        q: "魚",
        a: ["サ", "ン", "マ"]
    },
    {
        q: "生計を立てる手段",
        a: ["し", "ご", "と"]
    },
    {
        q: "足が痺れる",
        a: ["せ", "い", "ざ"]
    },
    {
        q: "電車が通る道",
        a: ["せ", "ん", "ろ"]
    },
    {
        q: "時計で確認する",
        a: ["じ", "か", "ん"]
    },
    {
        q: "土地の表面",
        a: ["じ", "め", "ん"]
    },
    {
        q: "調べもので使う本",
        a: ["じ", "て", "ん"]
    },
    {
        q: "土地の主",
        a: ["じ", "ぬ", "し"]
    },
    {
        q: "図や写真が載っている本",
        a: ["ず", "か", "ん"]
    },
    {
        q: "頭にかぶる",
        a: ["ず", "き", "ん"]
    },
    {
        q: "洋服",
        a: ["ズ", "ボ", "ン"]
    },
    {
        q: "身体",
        a: ["か", "か", "と"]
    },
    {
        q: "侍が持っている",
        a: ["か", "た", "な"]
    },
    {
        q: "透明で割れやすい",
        a: ["ガ", "ラ", "ス"]
    },
    {
        q: "乗り物",
        a: ["く", "る", "ま"]
    },
    {
        q: "きれいにする",
        a: ["そ", "う", "じ"]
    },
    {
        q: "国",
        a: ["イ", "ラ", "ク"]
    },
    {
        q: "国",
        a: ["イ", "ラ", "ン"]
    },
    {
        q: "国",
        a: ["イ", "ン", "ド"]
    },
    {
        q: "国",
        a: ["カ", "ナ", "ダ"]
    },
    {
        q: "国",
        a: ["ケ", "ニ", "ア"]
    },
    {
        q: "国",
        a: ["ス", "イ", "ス"]
    },
    {
        q: "叩くと音がする",
        a: ["た", "い", "こ"]
    },
    {
        q: "火をたく",
        a: ["た", "き", "び"]
    },
    {
        q: "和室に敷く",
        a: ["た", "た", "み"]
    },
    {
        q: "喫煙",
        a: ["タ", "バ", "コ"]
    },
    {
        q: "ニワトリが産む",
        a: ["た", "ま", "ご"]
    },
    {
        q: "こすって洗う",
        a: ["た", "わ", "し"]
    },
    {
        q: "服をしまう",
        a: ["タ", "ン", "ス"]
    },
    {
        q: "稲を栽培",
        a: ["た", "ん", "ぼ"]
    },
    {
        q: "積んで形をつくる",
        a: ["つ", "み", "き"]
    },
    {
        q: "ポストに入れる",
        a: ["て", "が", "み"]
    },
    {
        q: "夜通し寝ない",
        a: ["て", "つ", "や"]
    },
    {
        q: "晴れ　曇り　雨",
        a: ["て", "ん", "き"]
    },
    {
        q: "髪を切る店",
        a: ["と", "こ", "や"]
    },
    {
        q: "ニワトリの赤い頭",
        a: ["ト", "サ", "カ"]
    },
    {
        q: "山に登ること",
        a: ["と", "ざ", "ん"]
    },
    {
        q: "自動車メーカー",
        a: ["ト", "ヨ", "タ"]
    },
    {
        q: "結婚指輪で贈る",
        a: ["ダ", "イ", "ヤ"]
    },
    {
        q: "入口の反対",
        a: ["で", "ぐ", "ち"]
    },
    {
        q: "国",
        a: ["ド", "イ", "ツ"]
    },
    {
        q: "車が走る",
        a: ["ど", "う", "ろ"]
    },
    {
        q: "目から流れる",
        a: ["な", "み", "だ"]
    },
    {
        q: "魚",
        a: ["ニ", "シ", "ン"]
    },
    {
        q: "国",
        a: ["に", "ほ", "ん"]
    },
    {
        q: "ダシをとる",
        a: ["に", "ぼ", "し"]
    },
    {
        q: "絵を塗る",
        a: ["ぬ", "り", "え"]
    },
    {
        q: "ねばりけのある土",
        a: ["ね", "ん", "ど"]
    },
    {
        q: "寝過ごすこと",
        a: ["ね", "ぼ", "う"]
    },
    {
        q: "昇り降りする",
        a: ["は", "し", "ご"]
    },
    {
        q: "花を見る",
        a: ["は", "な", "み"]
    },
    {
        q: "雪が吹き乱れる",
        a: ["ふ", "ぶ", "き"]
    },
    {
        q: "いざという時の備え",
        a: ["ほ", "け", "ん"]
    },
    {
        q: "二輪車",
        a: ["バ", "イ", "ク"]
    },
    {
        q: "スーパーマーケット",
        a: ["バ", "ロ", "ー"]
    },
    {
        q: "美しい人",
        a: ["び", "じ", "ん"]
    },
    {
        q: "日本最大の湖",
        a: ["び", "わ", "こ"]
    },
    {
        q: "頭にかぶる",
        a: ["ぼ", "う", "し"]
    },
    {
        q: "接着剤",
        a: ["ボ", "ン", "ド"]
    },
    {
        q: "高級車",
        a: ["ベ", "ン", "ツ"]
    },
    {
        q: "耳に穴をあける",
        a: ["ピ", "ア", "ス"]
    },
    {
        q: "楽器",
        a: ["ピ", "ア", "ノ"]
    },
    {
        q: "甘い",
        a: ["プ", "リ", "ン"]
    },
    {
        q: "郵便物を入れる",
        a: ["ポ", "ス", "ト"]
    },
    {
        q: "道に迷う",
        a: ["ま", "い", "ご"]
    },
    {
        q: "ウイルス対策",
        a: ["マ", "ス", "ク"]
    },
    {
        q: "行儀・作法",
        a: ["マ", "ナ", "ー"]
    },
    {
        q: "舟着き場",
        a: ["み", "な", "と"]
    },
    {
        q: "牛乳",
        a: ["ミ", "ル", "ク"]
    },
    {
        q: "ゴールを目指す",
        a: ["め", "い", "ろ"]
    },
    {
        q: "遊び",
        a: ["め", "ん", "こ"]
    },
    {
        q: "楽器",
        a: ["ギ", "タ", "ー"]
    },
    {
        q: "野菜を売っている",
        a: ["や", "お", "や"]
    },
    {
        q: "健康に良い食材",
        a: ["や", "さ", "い"]
    },
    {
        q: "お茶を淹れる陶器",
        a: ["ゆ", "の", "み"]
    },
    {
        q: "指にはめる輪",
        a: ["ゆ", "び", "わ"]
    },
    {
        q: "植物",
        a: ["ヨ", "モ", "ギ"]
    },
    {
        q: "照明",
        a: ["ラ", "ン", "プ"]
    },
    {
        q: "平成の次",
        a: ["れ", "い", "わ"]
    },
    {
        q: "過去のこと",
        a: ["れ", "き", "し"]
    },
    {
        q: "赤茶色の建築素材",
        a: ["レ", "ン", "ガ"]
    },
    {
        q: "建物内の通路",
        a: ["ろ", "う", "か"]
    },
    {
        q: "生え出て間もない葉",
        a: ["わ", "か", "ば"]
    },
    {
        q: "大学が有名",
        a: ["わ", "せ", "だ"]
    },
    {
        q: "輪を投げる",
        a: ["わ", "な", "げ"]
    },
    {
        q: "湯を沸かす",
        a: ["や", "か", "ん"]
    },
];

//top画面
const scenetop = document.querySelector("#start");
//game画面
const scecegame = document.querySelector("#game");
//正解不正解表示画面
const next = document.querySelector("#next");
const field = document.querySelector("#field");
const select = document.querySelectorAll(".select");
const answer = document.querySelectorAll(".answer");

//選択された答えを順番に格納
let answers = [];
//問題番号を管理
let questionnum = 0;


init();
function init() {
    changescene(scecegame, scenetop);
    scenetop.addEventListener('click', gamestart, false);
}

function changescene(hiddenscene, visiblescene) {
    hiddenscene.classList.add("is-hidden");
    hiddenscene.classList.remove("is-visible");
    visiblescene.classList.add("is-visible");
}

function gamestart() {
    changescene(scenetop, scecegame);
    showQuestion()
}

// 【JavaScript】配列の要素をランダムに表示する(ブックマーク)を応用して追加
function shuffle(array) {
    for(let i = (question.length - 1); i > 0; i--) {
        const j = Math.floor(Math.random() * (i - 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// クイズ開始時に選択肢をシャッフル
shuffle(question);

//並べ替えクイズの処理
function showQuestion() {
    //答えを格納している配列を初期化
    answers.length = 0; 
    for (let i = 0; i < 3; i++) {
        answer[i].textContent = i + 1;
    }

    //問題の解答シャッフル Fisher–Yatesアルゴリズムを用いる
    //値渡しコピーで配列に代入
    let shufflea = question[questionnum].a.concat(); 
    for (let i = shufflea.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = shufflea[i];
        shufflea[i] = shufflea[r];
        shufflea[r] = tmp;
    }

    //問題文挿入
    document.querySelector("h1").textContent = question[questionnum].q;
    //回答選択肢挿入
    for (let i = 0; i < shufflea.length; i++) {
        select[i].classList.remove('is-hidden');
        select[i].textContent = shufflea[i];
    }

    let count = 0;
    //選択された答えを消す 
    for (let i = 0; i < shufflea.length; i++) {
        select[i].onclick = () => {
            console.log(count);
            select[i].classList.add('is-hidden');
            //選択された答えを移動
            answer[count].textContent = select[i].textContent;
            answers.push(answer[count].textContent);
            count += 1;
            if (count == shufflea.length) {
                count = 0;
                Judgment();
            }
        }
    }
}

//正解かどうか判定
function Judgment() {
    changescene(scecegame, next);
    if (JSON.stringify(question[questionnum].a) == JSON.stringify(answers)) {
        next.innerHTML = "<p style='font-size:3em;color:#008000;'>バッチリ😊　です！</p><button onclick='nextquestion()'>次に進みます　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　！！！！！</button>";

    } else {
        next.innerHTML = "<p style='font-size:3em;color:#008080;'>ナイスです！</p><button onclick='nextquestion()'>次に進みます　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　！！！！！</button>";
    }
}

//次の問題ボタンが押された時の処理
function nextquestion() {
    questionnum++
    if (Object.keys(question).length > questionnum) {
        changescene(next, scecegame);
        showQuestion();
    } else {
        questionnum = 0;
        changescene(next, scecegame);
        showQuestion();
    }
}
