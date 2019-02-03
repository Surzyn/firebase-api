const beer = JSON.parse(`[
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-a-nanasy-bottle-file-for-internet-0x370-t.jpg",
        "name": "PINTA A Nanasy? 16,5°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-final-call-bottle-file-for-internet-0x370-t.jpg",
        "name": "PINTA Final Call 18,0°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-amarcord-piga-bottle-file-for-internet-0x370-t.jpg",
        "name": "PINTA & Amarcord PIGA",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-grape-ale-red-bottle-file-for-internet-1-0x370-t.jpg",
        "name": "PINTA Grape Ale Red 18,0°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-hazy-morning-botle-file-for-internet-0x370-t.jpg",
        "name": "PINTA Hazy Morning 12,0°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-kwas-my-bottle-file-for-internet-0x370-t.jpg",
        "name": "PINTA Kwas My 16,5°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-bakunin-warsaw-express-ba-bottle-file-for-printing-1-0x370-t.jpg",
        "name": "PINTA / Bakunin Warsaw Express 24,7° Bourbon BA",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-dozynki-bottle-file-for-internet-0x370-t.jpg",
        "name": "PINTA Dożynki",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-christmas-porter-2018-bottle-file-for-internet-0x370-t.jpg",
        "name": "PINTA Wesołych Świąt 2018",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-tool-kwas-ny-bottle-file-for-internet-0x370-t.jpg",
        "name": "Browar PINTA & To Øl - Kwas Ny 18°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/wba-0x370-t.png",
        "name": "PINTA Kwas Epsilon WBA 18°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-jumbo-bottle-0x370-t.jpg",
        "name": "PINTA Jumbo",
        "IBU": "83"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-risfactor-bourbon-bottle-file-for-internet-0x370-t.jpg",
        "name": "PINTA RISFACTOR BBA 30°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-table-brett-bottle-0x370-t.jpg",
        "name": "PINTA Table Brett 9,0°",
        "IBU": "19"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-eiksizdorg-bottle-for-internet-0x370-t.jpg",
        "name": "PINTA eiksizdorG 7,8°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-sangriale-bottle-file-for-internet-0x370-t.jpg",
        "name": "PINTA SangriAle 13,1°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-bakunin-warsaw-express-bottle-file-for-internet-0x370-t.jpg",
        "name": "PINTA / Bakunin Warsaw Express 24,7°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-shakalaka-ipa-bottlle-file-for-internet-0x370-t.jpg",
        "name": "PINTA Shakalaka IPA 16,5°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-lublin-to-dublin-turkish-coffee-stout-2018-butelka-0x370-t.jpg",
        "name": "O'Hara's Lublin to Dublin 2018 18,5°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-risfactor-dba-bottle-0x370-t.jpg",
        "name": "PINTA RISFACTOR DBA 30°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-risfactor-bottle-0x370-t.jpg",
        "name": "PINTA RISFACTOR 30°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-iippaa-bottle-0x370-t.jpg",
        "name": "PINTA IIPPAA 18,0°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-kwas-jota-bottle-file-for-internet-0x370-t.jpg",
        "name": "PINTA Kwas Jota 11,5°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-takahaka-0x370-t.jpg",
        "name": "PINTA takAHaka 18,0°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-hopby-butelka-0x370-t.jpg",
        "name": "PINTA Hopby 9,0°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-bawarka-butelka-0x370-t.jpg",
        "name": "PINTA Bawarka 13,1°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-havana-stout-bottle-file-for-internet-0x370-t.jpg",
        "name": "PINTA Havana Stout 16,5°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-express-ipa-bottle-0x370-t.jpg",
        "name": "PINTA Express IPA 15,5°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-vermont-ipa-file-for-internet_201612212148-0x370-t.jpg",
        "name": "PINTA Vermont IPA 15,5°",
        "IBU": "54"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-kwas-theta_201612200916-0x370-t.jpg",
        "name": "PINTA Kwas Theta 24,7°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-brett-ipa-bottle_201605191111-0x370-t.jpg",
        "name": "PINTA Brett IPA 15,1°",
        "IBU": "70"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-american-black-bottle_201605131237-0x370-t.jpg",
        "name": "PINTA American Black 12°",
        "IBU": "45"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-kwas-epsilon-butelka_201604130856-0x370-t.jpg",
        "name": "PINTA Kwas Epsilon 18°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-farmhouse-bottle_201604130852-0x370-t.jpg",
        "name": "PINTA FarmHouse 13,1°",
        "IBU": "31"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-hoplaaga-wizualizacja-internet-2016-01-14_201602011756-0x370-t.jpg",
        "name": "PINTA Hoplaaga 15,5°",
        "IBU": "70"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-modern-drinking-butelka-2015_201511281730-0x370-t.jpg",
        "name": "PINTA Modern Drinking 15,5°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-son-of-a-birch-20150623-preview_201511172045-0x370-t.jpg",
        "name": "PINTA Son of a Birch 9,0°",
        "IBU": "20"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-kwas-gamma-butelka-2015_201511170925-0x370-t.jpg",
        "name": "PINTA Kwas Gamma 13,1°",
        "IBU": "22"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-krol-lata-2015-butelka_201507301724-0x370-t.jpg",
        "name": "PINTA / BdPF Król Lata - le Roi de l'Eté 11,5°",
        "IBU": "38"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/4a12b789e4288452fc9e916980400b63194e9491_201410061115-0x370-t.jpg",
        "name": "PINTA Atak Chmielu 15,1°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-raj-z-rajs_201505250906-0x370-t.jpg",
        "name": "PINTA Raj z rajs 19,1°",
        "IBU": "89"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-i-m-so-horny_201506110901-0x370-t.jpg",
        "name": "PINTA I'm so horny! 18,0°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-sanrajza-2014-10-29-preview_201411181931-0x370-t.jpg",
        "name": "PINTA Sanrajza 13,1°",
        "IBU": "34"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-hop-pokus-2017-1-0x370-t.jpg",
        "name": "PINTA Hop Pokus 16,5°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-quatro-2014_201412151705-0x370-t.jpg",
        "name": "PINTA Quatro 24,7°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-pierwsza-pomoc-2016-bottle_201604040942-0x370-t.jpg",
        "name": "PINTA Pierwsza Pomoc 10,5°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-a-ja-pale-ale-2014-10-29-preview_201411181924-0x370-t.jpg",
        "name": "PINTA a ja pale ale 12,0°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/a50e7d0cdc03713eaf8dec6938cac0f0aa32d4a8_201410061210-0x370-t.jpg",
        "name": "PINTA Viva la Wita! 16,5°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-dobry-wieczor-butelka-2014_201612211958-0x370-t.jpg",
        "name": "PINTA Dobry Wieczór 13,1°",
        "IBU": "32"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/f23f83c7d2d186a86f148356755ce78b831872e3_201410061410-0x370-t.jpg",
        "name": "PINTA Angielskie Śniadanie 14,0°",
        "IBU": "33"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/728171fadbc8fc21d50f84c1efcae9e7b52c5b0b_201410061113-0x370-t.jpg",
        "name": "PINTA Apetyt na Życie 13,1°",
        "IBU": "18"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/3db2a7da239d2df3dab293c1e6a2116611d38de2_201410061411-0x370-t.jpg",
        "name": "PINTA Czarna Dziura 11,5°",
        "IBU": "38"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/a05199c4bc0bdf90e94bf8dbd9206417bef08424_201410061411-0x370-t.jpg",
        "name": "PINTA Dymy Marcowe 13,1°",
        "IBU": "22"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/908e1024b3873995e07bcb702b9d743d7113c6a7_201410061134-0x370-t.jpg",
        "name": "PINTA Dyniamit 16,5°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/af085ca011fa737e816c1e9f9f5270433e3e5643_201410061156-0x370-t.jpg",
        "name": "PINTA Ognie Szczęścia 11,5°",
        "IBU": "25"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-imperator-baltycki-bottle_201612212210-0x370-t.jpg",
        "name": "PINTA Imperator Bałtycki 24,7°",
        "IBU": "83"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/pinta-oki-doki-wizualziacja-butelki-internet-0x370-t.jpg",
        "name": "PINTA Oki Doki 12°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/e0357a6312d3ba620644f479e07d36f7a2bb3335_201410061144-0x370-t.jpg",
        "name": "PINTA Imperium Atakuje 19,1°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/3b699c76c984bfb0a3d6285ad417ad15b69be20d_201410061203-0x370-t.jpg",
        "name": "PINTA Oto Mata IPA 14°",
        "IBU": "b.d."
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/dd2baa52df32b5246998f1a78cdc542cca12a9bb_201410061145-0x370-t.jpg",
        "name": "PINTA Jak w Dym 16,5°",
        "IBU": "28"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/8a2e084713df5c6999dda68072259afa3c1652bb_201410061148-0x370-t.jpg",
        "name": "PINTA Koniec Świata 19,1°",
        "IBU": "0"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/293c0107ca99b4149c9368ddee1b695ab386c3c6_201410061212-0x370-t.jpg",
        "name": "PINTA Żytorillo 14,0°",
        "IBU": "68"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/90e9ed178cc104427da0fcfe43cdfbf5c76e91ca_201410061206-0x370-t.jpg",
        "name": "PINTA Stare ALE Jare 14,0°",
        "IBU": "48"
    },
    {
        "imgSrc": "http://www.browarpinta.pl/zdjecia/piwa/thumbs/cache/bf558cdf4a15f31bdafda3c395409e1df1d35a56_201410061154-0x370-t.jpg",
        "name": "PINTA Odsiecz Wiedeńska 13,1°",
        "IBU": "24"
    }
]`);
module.exports = beer;