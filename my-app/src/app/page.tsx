import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main id='container'>
      <div className='wrapper'>
        <div className='box' id='weekday'>
          <div dir='auto' className='box_header'>
            זמנים לחול
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              6:30
            </span>
            <span className='name' dir='auto'>
              שחרית א (יום ב-ו)
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              7:30
            </span>
            <span className='name' dir='auto'>
              שחרית ב (יום ב-ו)
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              8:00
            </span>
            <span className='name' dir='auto'>
              שחרית (יום א)
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              8:45
            </span>
            <span className='name' dir='auto'>
              מעריב (א)
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              9:00
            </span>
            <span className='name' dir='auto'>
              סדר לילה
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              10:00
            </span>
            <span className='name' dir='auto'>
              מעריב (ב)
            </span>
          </div>
        </div>
        <div className='box' id='shabbos'>
          <div dir='auto' className='box_header'>
            זמנים לשבת
          </div>
          <div className='box_line'>
            <span dir='auto' className='subheader'>
              פרשת בהעלתך
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              6:55
            </span>
            <span className='name' dir='auto'>
              מנחה (א)
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              8:07
            </span>
            <span className='name' dir='auto'>
              הדלקת נרות
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              8:10
            </span>
            <span className='name' dir='auto'>
              מנחה (ב)
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='text'></span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              8:30
            </span>
            <span className='name' dir='auto'>
              שחרית
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              1:40
            </span>
            <span className='name' dir='auto'>
              מנחה (א)
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              5:45
            </span>
            <span className='name' dir='auto'>
              דף היומי
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              6:30
            </span>
            <span className='name' dir='auto'>
              מנחה (ב)
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              9:25
            </span>
            <span className='name' dir='auto'>
              מעריב מוצ״ש
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              8:10
            </span>
            <span className='name' dir='auto'>
              הדלקת נרות פרשת שלח לך
            </span>
          </div>
        </div>
        <div className='box' id='kollel'>
          <div dir='auto' className='box_header'>
            שיעורים
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              8:45
            </span>
            <span className='name' dir='auto'>
              דף היומי (יום א)
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              7:15
            </span>
            <span className='name' dir='auto'>
              דף היומי (יום ב-ו)
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              8:15
            </span>
            <span className='name' dir='auto'>
              שיעור על אוהחה“ק שבת בבוקר מאת הרב שליט״א
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              6:00
            </span>
            <span className='name' dir='auto'>
              שיעור הלכה בשבת
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              9:30
            </span>
            <span className='name' dir='auto'>
              שיעור על הפרשה ליל שישי
            </span>
          </div>
        </div>
        <div className='box zmanimBox' id='zmanim'>
          <div dir='auto' className='box_header'>
            זמני היום
          </div>
          <div
            data-time='2023-06-04T07:44:21.000Z'
            className='box_line daily_zman'
            style={{ color: 'black', fontWeight: 'normal' }}
          >
            <span className='time'>3:44</span>
            <span className='name'>עלות השחר</span>
          </div>
          <div
            data-time='2023-06-04T08:38:50.000Z'
            className='box_line daily_zman'
            style={{ color: 'black', fontWeight: 'normal' }}
          >
            <span className='time'>4:38</span>
            <span className='name'>משיכיר</span>
          </div>
          <div
            data-time='2023-06-04T09:28:50.000Z'
            className='box_line daily_zman'
            style={{ color: 'black', fontWeight: 'normal' }}
          >
            <span className='time'>5:28</span>
            <span className='name'>נץ החמה</span>
          </div>
          <div
            data-time='2023-06-04T12:36:11.000Z'
            className='box_line daily_zman'
            style={{ color: 'black', fontWeight: 'normal' }}
          >
            <span className='time'>8:36</span>
            <span className='name'>סוף זמן ק''ש מג''א</span>
          </div>
          <div
            data-time='2023-06-04T13:12:11.000Z'
            className='box_line daily_zman'
            style={{ color: 'black', fontWeight: 'normal' }}
          >
            <span className='time'>9:12</span>
            <span className='name'>סוף זמן ק''ש גר''א</span>
          </div>
          <div
            data-time='2023-06-04T13:51:54.000Z'
            className='box_line daily_zman'
            style={{ color: 'black', fontWeight: 'normal' }}
          >
            <span className='time'>9:51</span>
            <span className='name'>סוף זמן תפילה מג''א</span>
          </div>
          <div
            data-time='2023-06-04T14:26:38.000Z'
            className='box_line daily_zman'
            style={{ color: 'black', fontWeight: 'normal' }}
          >
            <span className='time'>10:26</span>
            <span className='name'>סוף זמן תפילה גר''א</span>
          </div>
          <div
            data-time='2023-06-04T16:55:31.000Z'
            className='box_line daily_zman'
            style={{ color: 'black', fontWeight: 'normal' }}
          >
            <span className='time'>12:55</span>
            <span className='name'>חצות</span>
          </div>
          <div
            data-time='2023-06-04T17:32:45.000Z'
            className='box_line daily_zman'
            style={{ color: 'black', fontWeight: 'normal' }}
          >
            <span className='time'>1:32</span>
            <span className='name'>מנחה גדולה</span>
          </div>
          <div
            data-time='2023-06-04T23:13:42.000Z'
            className='box_line daily_zman'
            style={{ color: 'black', fontWeight: 'normal' }}
          >
            <span className='time'>7:13</span>
            <span className='name'>פלג המנחה</span>
          </div>
          <div data-time='2023-06-05T00:22:13.000Z' className='box_line daily_zman'>
            <span className='time'>8:22</span>
            <span className='name'>שקיעת החמה</span>
          </div>
          <div data-time='2023-06-05T01:34:13.000Z' className='box_line daily_zman'>
            <span className='time'>9:34</span>
            <span className='name'>צאת הכוכבים ר''ת</span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'>
              גיטין י״ט
            </span>
            <span className='name' dir='auto'>
              דף היומי
            </span>
          </div>
        </div>
        <div className='box shul-posts' id='announcements'>
          <div dir='auto' className='box_header'>
            Sponsorships
          </div>
          <div className='box_line'>
            <span dir='auto' className='text'>
              Thank you to R’ Shmuli Rosenthal for sponsoring the avos ubanim!
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='text'>
              Thank you to those that sponsored the refreshments served over Yom Tov!
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='text'>
              For more sponsorship opportunities please see one of the gaboim.
            </span>
          </div>
        </div>
        <div className='box shul-posts' id='shiurim'>
          <div dir='auto' className='box_header'>
            Announcements
          </div>
          <div className='box_line'>
            <span dir='auto' className='text'>
              Anyone seeking a chavrusa for night seder (or any other time), for gemara, mishna berura etc. can contact
              Chaim Fleischer 718-799-4734
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='text'>
              Avos Ubanim throughout the summer - learn 25 minutes during Shabbos afternoon and receive a treat!
            </span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='text'>
              Naso: The Eruv is Up (all zones)
            </span>
          </div>
        </div>
        <div className='box eruvMapWrap has-images' id='mazel_tov'>
          <div dir='auto' className='box_header'></div>
          <img data-duration='5' className='custom_image' src='/eruv-map.png' />
        </div>
        <div className='box' id='sudas_shlishis' style={{ display: 'none' }}>
          <div dir='auto' className='box_header'>
            נר תמיד
          </div>
          <div className='box_line'>
            <span dir='auto' className='text'></span>
          </div>
        </div>
        <div className='box' id='coffee' style={{ display: 'none' }}>
          <div dir='auto' className='box_header'>
            פרנס היום
          </div>
          <div className='box_line'>
            <span dir='auto' className='text'></span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='text'></span>
          </div>
        </div>
        <div className='box' id='parnas_hayom' style={{ display: 'none' }}>
          <div dir='auto' className='box_header'></div>
          <div className='box_line'>
            <span dir='auto' className='text'></span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='text'></span>
          </div>
          <div className='box_line'>
            <span dir='auto' className='time'></span>
            <span className='name' dir='auto'></span>
          </div>
        </div>
        <div id='hayom' className='box hayomBox'>
          <div id='hayomText'>
            <div className='box_header'>היום</div>
            <div className='hayomTextWrap'>
              <div id='clock' className='clock'>
                3:12:04 PM
              </div>
              <div>
                <span className='hebrew_date'>יום ראשון, ט״ו סיון תשפ״ג, פרשת בהעלתך</span>
                <span className='english_date'>Sunday, June 4, 2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className='box donations'>
          <span style={{ width: '300px' }}>
            Donations can be made via Zelle at
            <a href='info@bmoj.org'>info@bmoj.org</a> or by scanning the QR code
          </span>
          <img src='./bmoj-qr.png' alt='QR Code' className='qrCode' />
          <div className='dedication'>
            <div>Screen dedicated לז״נ חיה בת חיים יחיאל</div>
            <div>System dedicated as a זכות לרפואה שלימה for אליהו זאב בן בריינדל</div>
          </div>
        </div>
        <div className='box overlay' id='overlay' style={{ display: 'none' }}>
          <div dir='auto' className='box_header'>
            זמנים לחג הסוכות תשפ"ג
          </div>
        </div>
      </div>
    </main>
  );
}
