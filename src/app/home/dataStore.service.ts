import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const overviewsJson = {
  bestCamera: 103,
  mostAdmired: 101,
  bestBudget: 12,
  bestPerformer: 3,
  mostPopular: 7
};

const phonesJson = [
  {
    id: 1,
    reviewScore: 4.5,
    performanceScore: 4.5,
    cameraScore: 4,
    popularityScore: 3,
    valueScore: 4,
    brand: 'OnePlus',
    model: '6S',
    network_technology: 'GSM / HSPA / LTE',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
    '3G_bands': 'HSDPA 850 / 1900 / 2100',
    '4G_bands': 'LTE band 1(2100)| 3(1800)| 7(2600)| 8(900)| 20(800)',
    network_speed: 'HSPA 42.2/11.5 Mbps  LTE Cat4 150/50 Mbps',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2016  August',
    status: 'Available. Released 2016  October',
    dimentions: '191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)',
    weight_g: 260,
    weight_oz: 9.17,
    SIM: 'Dual SIM (Micro-SIM/Nano-SIM)',
    display_type: 'IPS LCD capacitive touchscreen  16M colors',
    display_resolution: '7.0 inches (~69.8% screen-to-body ratio)',
    display_size: '720 x 1280 pixels (~210 ppi pixel density)',
    OS: 'Android 6.0 (Marshmallow)',
    CPU: 'Quad-core 1.3 GHz Cortex-A53',
    Chipset: 'Mediatek MT8735',
    GPU: 'Mali-T720MP2',
    memory_card: 'microSD  up to 128 GB (dedicated slot)',
    internal_memory: '16/32 GB',
    RAM: '2 GB RAM',
    primary_camera: '13 MP| autofocus',
    secondary_camera: '2 MP| 720p',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: 'Wi-Fi 802.11 a/b/g/n| Wi-Fi Direct| hotspot',
    bluetooth: '4.0| A2DP',
    GPS: 'Yes with A-GPS GLONASS',
    NFC: '',
    radio: 'FM radio',
    USB: 'microUSB 2.0',
    sensors: 'Accelerometer| proximity',
    battery: 'Non-removable Li-Ion 3400 mAh battery (12.92 Wh)',
    colors: 'Black',
    approx_price_USD: 439,
    reviews: [
      {
        rating: 4,
        type: 'text',
        source: 'GSMArena',
        content:
          'nice phone, nice up grade from my pantach revue. Very clean set up and easy set up. never had an android phone but they are fantastic to say the least. perfect size for surfing and social media.'
      },
      {
        rating: 3,
        type: 'text',
        source: 'CNET',
        content:
          'These guys are the best! I had a little situation with my item but they quickly fixed the issue. I was pleased and will definitely be buying another phon from them if I need one.'
      }
    ],
    prices: [
      {
        rating: 5,
        source: 'amazon',
        price: 600,
        shipping: '4 Days',
        url:
          'https://www.amazon.com/OnePlus-Dual-SIM-Unlocked-Smartphone-Midnight/dp/B07DFYM9RC/ref=sr_1_3?keywords=oneplus+6&qid=1551046851&s=gateway&sr=8-3'
      },
      {
        rating: 4,
        source: 'ebay',
        price: 384,
        shipping: '7 days',
        url:
          'https://www.ebay.com/itm/OnePlus-6T-128GB-A6010-FACTORY-UNLOCKED-6-41-8GB-RAM-Mirror-Midnight-Black/192756206953?epid=20026599434&hash=item2ce12a4d69:m:moAD_9NYbfPFFI--DoaqAvQ:rk:1:pf:0'
      }
    ],
    img_url: 'https://m.media-amazon.com/images/I/51U3RHsaqfL._AC_UL436_.jpg'
  },
  {
    id: 2,
    reviewScore: 4,
    performanceScore: 3,
    cameraScore: 4,
    popularityScore: 3,
    valueScore: 4,
    brand: 'OnePlus',
    model: '5T',
    network_technology: 'GSM / HSPA / LTE',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
    '3G_bands': 'HSDPA',
    '4G_bands': 'LTE',
    network_speed: 'HSPA 42.2/5.76 Mbps  LTE Cat4 150/50 Mbps',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2016  August',
    status: 'Available. Released 2016  December',
    dimentions: '153.8 x 75.6 x 8.5 mm (6.06 x 2.98 x 0.33 in)',
    weight_g: 169,
    weight_oz: 5.96,
    SIM: 'Single SIM (Micro-SIM) or Dual SIM (Micro-SIM| dual stand-by)',
    display_type: 'IPS LCD capacitive touchscreen  16M colors',
    display_resolution: '5.5 inches (~71.7% screen-to-body ratio)',
    display_size: '1080 x 1920 pixels (~401 ppi pixel density)',
    OS: 'Android 6.0 (Marshmallow)',
    CPU: 'Octa-core 1.3 GHz Cortex-A53',
    Chipset: 'Mediatek MT6753',
    GPU: 'Mali-T720MP3',
    memory_card: 'microSD  up to 256 GB (uses SIM 2 slot)',
    internal_memory: '32 GB',
    RAM: '3 GB RAM',
    primary_camera: '13 MP| autofocus| LED flash',
    secondary_camera: '5 MP',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: 'Wi-Fi 802.11 b/g/n| Wi-Fi Direct| hotspot',
    bluetooth: '4.0| A2DP',
    GPS: 'Yes with A-GPS',
    NFC: '',
    radio: 'FM radio',
    USB: 'microUSB 2.0',
    sensors: 'Fingerprint (front-mounted)| accelerometer| proximity',
    battery: 'Removable Li-Po 4080 mAh battery',
    colors: 'Black| White',
    approx_price_USD: 250,
    reviews: [
      {
        rating: 5,
        type: 'text',
        source: 'GSMArena',
        content:
          "I love the phone. It does everything I need and works great. I purchased four of these phones through a seller that shipped from Amazon's warehouse. My only problem is that the phone didn't have back camera."
      },
      {
        rating: 4,
        type: 'text',
        source: 'CNET',
        content:
          'pros-beautiful screen,capable of running chrome,take good pictures,the keyboard is comfy,fits in my pocket and fit my hands,plays really good videos and gamescons-no Bluetooth,came late,'
      }
    ],
    prices: [
      {
        rating: 4,
        source: 'amazon',
        price: 400,
        shipping: '4 Days',
        url: 'https://www.amazon.com/OnePlus-5T-A5010-64GB-International/dp/B0787NNSK9'
      },
      {
        rating: 3,
        source: 'ebay',
        price: 300,
        shipping: 'Out of Stock',
        url:
          'https://www.ebay.com/itm/OnePlus-5T-128GB-Midnight-Black-A5010-FACTORY-UNLOCKED-6-0-16MP-8GB-RAM/222747039182'
      }
    ],
    img_url: 'https://cdn1.smartprix.com/rx-iMRK2tPAg-w103-h125/oneplus-5.webp'
  },
  {
    id: 3,
    reviewScore: 4.5,
    performanceScore: 5,
    cameraScore: 4,
    popularityScore: 3,
    valueScore: 4,
    brand: 'OnePlus',
    model: '7',
    network_technology: 'GSM / HSPA / LTE',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
    '3G_bands': 'HSDPA',
    '4G_bands': 'LTE',
    network_speed: 'HSPA  LTE',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2016  August',
    status: 'Available. Released 2016  December',
    dimentions: '-',
    weight_g: '',
    weight_oz: '',
    SIM: 'Single SIM (Micro-SIM) or Dual SIM (Micro-SIM| dual stand-by)',
    display_type: 'IPS LCD capacitive touchscreen  16M colors',
    display_resolution: '5.0 inches',
    display_size: '720 x 1280 pixels (~294 ppi pixel density)',
    OS: 'Android 6.0 (Marshmallow)',
    CPU: 'Quad-core 1.25 GHz Cortex-A53',
    Chipset: 'Mediatek MT6737',
    GPU: 'Mali-T720MP2',
    memory_card: 'microSD  up to 256 GB',
    internal_memory: '8 GB',
    RAM: '1 GB RAM',
    primary_camera: '8 MP| autofocus| LED flash',
    secondary_camera: '2 MP',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: 'Yes',
    bluetooth: 'Yes',
    GPS: 'Yes with A-GPS',
    NFC: '',
    radio: 'FM radio',
    USB: 'microUSB 2.0',
    sensors: 'Accelerometer| proximity',
    battery: 'Removable Li-Ion 2000 mAh battery',
    colors: 'Black| White',
    approx_price_USD: 799,
    reviews: [
      {
        rating: 3,
        type: 'text',
        source: 'GSMArena',
        content:
          " Phone's speaker little low. Overall very happy with the phone. I would purchase another cell phone from Chubbietech. I am satisfied."
      },
      {
        rating: 5,
        type: 'text',
        source: 'CNET',
        content:
          'The phone was great but it had gotten old so it was time for a replacement.it was great while it lasted.'
      }
    ],
    prices: [
      {
        rating: 5,
        source: 'amazon',
        price: 780,
        shipping: '2 Days',
        url:
          'https://www.amazon.com/OnePlus-Storage-Factory-Unlocked-Display/dp/B07K76LBLZ/ref=sr_1_2?keywords=oneplus+7&qid=1551047047&s=gateway&sr=8-2'
      },
      {
        rating: 5,
        source: 'ebay',
        price: 880,
        shipping: 'Out of Stock',
        url:
          'https://www.ebay.com/itm/OnePlus-5T-128GB-Midnight-Black-A5010-FACTORY-UNLOCKED-6-0-16MP-8GB-RAM/222747039182'
      }
    ],
    img_url: 'https://i.imgur.com/bS06CTq.png'
  },
  {
    id: 4,
    reviewScore: 4,
    performanceScore: 3,
    cameraScore: 4,
    popularityScore: 3,
    valueScore: 4,
    brand: 'OnePlus',
    model: 'Iconia 5T Plus',
    network_technology: 'No cellular connectivity',
    '2G_bands': 'N/A',
    '3G_bands': '',
    '4G_bands': '',
    network_speed: '',
    GPRS: 'No',
    EDGE: 'No',
    announced: '2016  April',
    status: 'Available. Released 2016  June',
    dimentions: '259 x 167 x 8.9 mm (10.20 x 6.57 x 0.35 in)',
    weight_g: '',
    weight_oz: '',
    SIM: 'No',
    display_type: 'IPS LCD capacitive touchscreen  16M colors',
    display_resolution: '10.1 inches (~68.4% screen-to-body ratio)',
    display_size: '1920 x 1200 pixels (~224 ppi pixel density)',
    OS: 'Android 6.0 (Marshmallow)',
    CPU: 'Quad-core 1.3 GHz Cortex-A53',
    Chipset: 'Mediatek MT8163A',
    GPU: 'Mali-T720 MP2',
    memory_card: 'microSD  up to 256 GB (dedicated slot)',
    internal_memory: '16/32/64 GB',
    RAM: '2 GB RAM',
    primary_camera: '5 MP',
    secondary_camera: '2 MP',
    loud_speaker: 'Yes with stereo speakers (4 speakers)',
    audio_jack: 'Yes',
    WLAN: 'Wi-Fi 802.11 a/b/g/n/ac| dual-band| hotspot',
    bluetooth: 'Yes',
    GPS: '',
    NFC: '',
    radio: 'No',
    USB: 'microUSB 2.0',
    sensors: 'Accelerometer',
    battery: 'Non-removable Li-Ion battery',
    colors: 'Black',
    approx_price_USD: 300,
    reviews: [
      {
        rating: 4,
        type: 'text',
        source: 'GSMArena',
        content:
          ' Freezes alot. But i bought primarily for playing back my music instead of my BB. Its a great phone for SMS and rings really loud. The body is strong and neat'
      },
      {
        rating: 4,
        type: 'text',
        source: 'CNET',
        content:
          'Preface: This is not what would be considered a smartphone in the United States (Nothing on the par of Android, iPhone, or Windows Phone), it is basically a feature phone. Also, although it says.'
      }
    ],
    prices: [
      {
        rating: 5,
        source: 'amazon',
        price: 450,
        shipping: '2 Days',
        url:
          'https://www.amazon.com/OnePlus-5T-A5010-64GB-International/dp/B0787NNSK9/ref=sr_1_1?keywords=oneplus+5t&qid=1551047183&s=gateway&sr=8-1'
      },
      {
        rating: 3,
        source: 'oneplus',
        price: 466,
        shipping: '3 days',
        url: 'https://www.oneplus.com/5t'
      }
    ],
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/41MPcJuHSZL.jpg'
  },
  {
    id: 5,
    reviewScore: 4,
    performanceScore: 2,
    cameraScore: 3,
    popularityScore: 3,
    valueScore: 4.5,
    brand: 'OnePlus',
    model: '3T',
    network_technology: 'GSM / HSPA / LTE',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900',
    '3G_bands': 'HSDPA 900 / 1900 / 2100 - Europe| Taiwan',
    '4G_bands': 'LTE 800 / 1800 / 2100 / 2600 - Europe',
    network_speed: 'HSPA 42.2/5.76 Mbps  LTE Cat4 150/50 Mbps',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2015  April',
    status: 'Available. Released 2016  February',
    dimentions: '153.3 x 78.8 x 8.5 mm (6.04 x 3.10 x 0.33 in)',
    weight_g: 166,
    weight_oz: 5.86,
    SIM: 'Triple SIM (Micro-SIM)',
    display_type: 'IPS LCD capacitive touchscreen  16M colors',
    display_resolution: '5.5 inches (~69.0% screen-to-body ratio)',
    display_size: '720 x 1280 pixels (~267 ppi pixel density)',
    OS: 'Android 5.1 (Lollipop)',
    CPU: 'Octa-core 1.3 GHz Cortex-A53',
    Chipset: 'Mediatek MT6753',
    GPU: 'Mali-T720MP4',
    memory_card: 'microSD  up to 32 GB (dedicated slot)',
    internal_memory: '32 GB',
    RAM: '3 GB RAM',
    primary_camera: '13 MP| f/1.8| autofocus| LED flash|',
    secondary_camera: '13 MP| f/1.8| autofocus| LED flash',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: 'Wi-Fi 802.11 b/g/n| hotspot',
    bluetooth: '4.0| A2DP| LE',
    GPS: 'Yes with A-GPS',
    NFC: '',
    radio: 'FM radio',
    USB: 'microUSB 2.0',
    sensors: 'Accelerometer| proximity| compass',
    battery: 'Removable Li-Po 4020 mAh battery',
    colors: 'Black| Gold',
    approx_price_USD: 230,
    reviews: [
      {
        rating: 4,
        type: 'text',
        source: 'TechRadar',
        content:
          "This is a good phone although it seems to have a small screen. However, it's capable of performing all the basic functions such as calling, messaging, web browsing, social networking and it also has a...  1"
      },
      {
        rating: 5,
        type: 'text',
        source: 'CNET',
        content:
          'Incredible! This phone does not have Splaniish Language, I dont understand how can it be a international version, lost money!'
      }
    ],
    prices: [
      {
        rating: 3,
        source: 'amazon',
        price: 200,
        shipping: '4 Days',
        url:
          'https://www.amazon.com/OnePlus-A3003-Gray-International-Version/dp/B01MXSXHF3/ref=sr_1_1?keywords=oneplus+3&qid=1551047293&s=gateway&sr=8-1'
      },
      {
        rating: 2,
        source: 'oneplus',
        price: 250,
        shipping: '7 days',
        url: 'https://www.oneplus.com/3t'
      }
    ],
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/61BWuWvjW9L._SX569_.jpg'
  },
  {
    id: 6,
    reviewScore: 4,
    performanceScore: 3,
    cameraScore: 3,
    popularityScore: 4.5,
    valueScore: 3,
    brand: 'Apple',
    model: 'iPhone 6S',
    network_technology: 'GSM / HSPA',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900',
    '3G_bands': 'HSDPA 900 / 2100',
    '4G_bands': '',
    network_speed: 'HSPA 21.1/5.76 Mbps',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2016  January',
    status: 'Available. Released 2016  Q3',
    dimentions: '121.3 x 64.4 x 9.7 mm (4.78 x 2.54 x 0.38 in)',
    weight_g: '',
    weight_oz: '',
    SIM: 'Micro-SIM',
    display_type: 'TFT capacitive touchscreen  16M colors',
    display_resolution: '4.0 inches (~58.3% screen-to-body ratio)',
    display_size: '480 x 800 pixels (~233 ppi pixel density)',
    OS: 'Android 6.0 (Marshmallow)',
    CPU: 'Quad-core 1.3 GHz Cortex-A7',
    Chipset: 'Mediatek MT6580M',
    GPU: 'Mali-400MP2',
    memory_card: 'microSD  up to 32 GB (dedicated slot)',
    internal_memory: '4 GB',
    RAM: '512 MB RAM',
    primary_camera: '2 MP or 5 MP| LED flash',
    secondary_camera: 'VGA or 2 MP',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: 'Wi-Fi 802.11 b/g/n| Wi-Fi Direct| hotspot',
    bluetooth: '4.0| A2DP',
    GPS: 'Yes with A-GPS',
    NFC: '',
    radio: 'FM radio',
    USB: 'microUSB 2.0',
    sensors: 'Accelerometer',
    battery: 'Removable Li-Ion 1500 mAh battery',
    colors: 'Various',
    approx_price_USD: 150,
    reviews: [
      {
        rating: 5,
        type: 'text',
        source: 'TechRadar',
        content:
          "This cell phone exceeded my expectations, it's user friendly & everything works like they said it would. The price is amazingly cheap. The features are enormous & helpful."
      },
      {
        rating: 2,
        type: 'text',
        source: 'CNET',
        content:
          'pros.. it works fine, its easy to use, not too heavy.cons .. most of the apps are for android iphone and bb'
      }
    ],
    prices: [
      {
        rating: 4,
        source: 'amazon',
        price: 200,
        shipping: '4 Days',
        url:
          'https://www.amazon.com/Apple-iPhone-6S-Unlocked-64GB/dp/B01CR1FQMG/ref=sr_1_3?keywords=apple+iphone&qid=1551047465&s=gateway&sr=8-3'
      },
      {
        rating: 2,
        source: 'bestbuy',
        price: 150,
        shipping: '4 days',
        url:
          'https://www.bestbuy.com/site/apple-pre-owned-iphone-6s-4g-lte-with-64gb-cell-phone-unlocked-space-gray/5872531.p?skuId=5872531'
      }
    ],
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/41jUosGQiDL.jpg'
  },
  {
    id: 7,
    reviewScore: 4.5,
    performanceScore: 4.5,
    cameraScore: 4.5,
    popularityScore: 5,
    valueScore: 2,
    brand: 'Apple',
    model: 'iPhone X',
    network_technology: 'GSM / HSPA',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900',
    '3G_bands': 'HSDPA 900 / 2100',
    '4G_bands': '',
    network_speed: 'HSPA 21.1/5.76 Mbps',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2016  January',
    status: 'Available. Released 2016  Q3',
    dimentions: '116 x 62 x 10 mm (4.57 x 2.44 x 0.39 in)',
    weight_g: '',
    weight_oz: '',
    SIM: 'Micro-SIM',
    display_type: 'TFT capacitive touchscreen  16M colors',
    display_resolution: '3.5 inches (~50.7% screen-to-body ratio)',
    display_size: '320 x 480 pixels (~165 ppi pixel density)',
    OS: 'Android 5.1 (Lollipop)',
    CPU: 'Dual-core 1.0 GHz Cortex-A7',
    Chipset: 'Mediatek MT6572M',
    GPU: 'Mali-400',
    memory_card: 'microSD  up to 32 GB (dedicated slot)',
    internal_memory: '4 GB',
    RAM: '512 MB RAM',
    primary_camera: '2 MP| LED flash',
    secondary_camera: 'VGA',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: 'Wi-Fi 802.11 b/g/n| Wi-Fi Direct| hotspot',
    bluetooth: '4.0| A2DP',
    GPS: 'Yes with A-GPS (optional)',
    NFC: '',
    radio: 'FM radio',
    USB: 'microUSB 2.0',
    sensors: 'Accelerometer',
    battery: 'Removable Li-Ion 1300 mAh battery',
    colors: 'Various',
    approx_price_USD: 230,
    reviews: [
      {
        rating: 3,
        type: 'text',
        source: 'TechRadar',
        content:
          ' The phone works great but my charger outlet on phone is having to be fixed and the one they sent falls out and my phone doesnt charge with it. It will cost 55 dollars to have charger fixed before it m.'
      },
      {
        rating: 3,
        type: 'text',
        source: 'CNET',
        content:
          'When I got new Phone. I loved this phone. but with Android 4.2.2 it very small limited and would not let you set in SD Card where you want it. So may have to upgrade new Android 4.4 I heard they '
      }
    ],
    prices: [
      {
        rating: 3,
        source: 'amazon',
        price: 799,
        shipping: '4 Days',
        url:
          'https://www.amazon.com/Apple-iPhone-GSM-Unlocked-256GB/dp/B077596D7L/ref=sr_1_3?keywords=apple+iphone+X&qid=1551048083&s=gateway&sr=8-3'
      },
      {
        rating: 4,
        source: 'bestbuy',
        price: 799,
        shipping: '4 days',
        url:
          'https://www.bestbuy.com/site/apple-iphone-x-with-64gb-memory-cell-phone-unlocked-space-gray/6316064.p?skuId=6316064'
      }
    ],
    img_url:
      'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/apple-iphone-x/space-gray/Apple-iPhoneX-SpaceGray-1-3x.jpg'
  },
  {
    id: 8,
    reviewScore: 4,
    performanceScore: 3,
    cameraScore: 4,
    popularityScore: 4.5,
    valueScore: 2,
    brand: 'Apple',
    model: 'iPhone 8',
    network_technology: 'GSM / HSPA / LTE',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900',
    '3G_bands': 'HSDPA 900 / 2100',
    '4G_bands': 'LTE band 1(2100)| 3(1800)| 7(2600)| 8(900)| 20(800)',
    network_speed: 'HSPA  LTE',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2016  February',
    status: 'Available',
    dimentions: '209 x 124.9 x 8.3 mm (8.23 x 4.92 x 0.33 in)',
    weight_g: '',
    weight_oz: '',
    SIM: 'Micro-SIM',
    display_type: 'IPS LCD capacitive touchscreen  16M colors',
    display_resolution: '8.0 inches (~71.1% screen-to-body ratio)',
    display_size: '800 x 1280 pixels (~189 ppi pixel density)',
    OS: 'Microsoft Windows 10',
    CPU: 'Quad-core 1.3 GHz Cortex-A7',
    Chipset: 'Qualcomm MSM8909 Snapdragon 210',
    GPU: 'Adreno 304',
    memory_card: 'microSD  up to 32 GB (dedicated slot)',
    internal_memory: '8 GB',
    RAM: '1 GB RAM',
    primary_camera: '5 MP',
    secondary_camera: '2 MP',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: 'Wi-Fi 802.11 b/g/n| Wi-Fi Direct| hotspot',
    bluetooth: '4.1| A2DP| LE',
    GPS: 'Yes with A-GPS',
    NFC: '',
    radio: 'No',
    USB: 'microUSB 2.0',
    sensors: 'Accelerometer',
    battery: 'Non-removable Li-Ion 4060 mAh battery',
    colors: 'Smoky Grey| Soft Gold| White',
    approx_price_USD: 870,
    reviews: [
      {
        rating: 4,
        type: 'text',
        source: 'TechRadar',
        content:
          'Screen size is good and easy to read. Sound could be a little louder but is okay. Settings are a little cryptic but get the job done with a few extra key stokes than really needed.'
      },
      {
        rating: 5,
        type: 'text',
        source: 'CNET',
        content:
          'This is a really great phone. I am visually impaired and have no problem with it. Will be getting another one for my partner.'
      }
    ],
    prices: [
      {
        rating: 3,
        source: 'amazon',
        price: 700,
        shipping: '4 Days',
        url:
          'https://www.amazon.com/Apple-iPhone-Fully-Unlocked-64GB/dp/B0775717ZP/ref=sr_1_3?keywords=apple+iphone+8&qid=1551047933&s=gateway&sr=8-3'
      },
      {
        rating: 4,
        source: 'bestbuy',
        price: 650,
        shipping: '4 days',
        url: 'https://www.bestbuy.com/site/iphone/iphone-8-shop-by-carrier/pcmcat1504816672256.c?id=pcmcat1504816672256'
      }
    ],
    img_url: 'https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/SOL-45242-shop-iphone8-64841.jpg'
  },
  {
    id: 9,
    reviewScore: 4,
    performanceScore: 3,
    cameraScore: 4,
    popularityScore: 4.5,
    valueScore: 2,
    brand: 'Apple',
    model: 'iPhone 7',
    network_technology: 'GSM / CDMA / HSPA / EVDO / LTE',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900 - A1661| A1784',
    '3G_bands': 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 - A1661| A1784',
    '4G_bands':
      'LTE band 1(2100)| 2(1900)| 3(1800)| 4(1700/2100)| 5(850)| 7(2600)| 8(900)| 12(700)| 13(700)| 17(700)| 18(800)| 19(800)| 20(800)| 25(1900)| 26(850)| 27(800)| 28(700)| 29(700)| 30(2300)| 38(2600)| 39(1900)| 40(2300)| 41(2500) - A1661| A1784',
    network_speed: 'HSPA 42.2/5.76 Mbps  LTE-A (3CA) Cat9 450/50 Mbps  EV-DO Rev.A 3.1 Mbps',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2016  September',
    status: 'Available. Released 2016  September',
    dimentions: '158.2 x 77.9 x 7.3 mm (6.23 x 3.07 x 0.29 in)',
    weight_g: 188,
    weight_oz: 6.63,
    SIM: 'Nano-SIM',
    display_type: 'LED-backlit IPS LCD  capacitive touchscreen  16M colors',
    display_resolution: '5.5 inches (~67.7% screen-to-body ratio)',
    display_size: '1080 x 1920 pixels (~401 ppi pixel density)',
    OS: 'iOS 10.0.1| upgradable to iOS 10.3.2',
    CPU: 'Quad-core 2.34 GHz (2x Hurricane + 2x Zephyr)',
    Chipset: 'Apple A10 Fusion',
    GPU: 'PowerVR Series7XT Plus (six-core graphics)',
    memory_card: 'No',
    internal_memory: '32/128/256 GB',
    RAM: '3 GB RAM',
    primary_camera: 'Dual 12 MP| (28mm| f/1.8| OIS & 56mm| f/2.8)| phase detection autofocus|',
    secondary_camera: '7 MP| f/2.2| 32mm| 1080p@30fps| 720p@240fps| face detection| HDR| panorama',
    loud_speaker: 'Yes with stereo speakers',
    audio_jack: 'No',
    WLAN: 'Wi-Fi 802.11 a/b/g/n/ac| dual-band| hotspot',
    bluetooth: '4.2| A2DP| LE',
    GPS: 'Yes with A-GPS GLONASS',
    NFC: 'Yes (Apple Pay only)',
    radio: 'No',
    USB: '2.0| reversible connector',
    sensors: 'Fingerprint (front-mounted)| accelerometer| gyro| proximity| compass| barometer',
    battery: 'Non-removable Li-Ion 2900 mAh battery (11.1 Wh)',
    colors: 'Jet Black| Black| Silver| Gold| Rose Gold| Red',
    approx_price_USD: 250,
    reviews: [
      {
        rating: 5,
        type: 'text',
        source: 'TechRadar',
        content:
          'Nice phone. Easy to read screen. I am a senior and not a tech so the learning curve was steep. The support at Jethro, however, made it easy. They were knowledgeable, easy to understand, patient'
      },
      {
        rating: 4,
        type: 'text',
        source: 'CNET',
        content:
          'Even the instruction book is better than any I have ever had, but as a senior we need BIG print with the phone, not for your website as page 1 clearly tells us because seniors take instructions with t...'
      }
    ],
    prices: [
      {
        rating: 3,
        source: 'amazon',
        price: 200,
        shipping: '4 Days',
        url:
          'https://www.amazon.com/Apple-iPhone-Unlocked-Certified-Refurbished/dp/B01N9YOF3R/ref=sr_1_5?keywords=apple+iphone&qid=1551047465&s=gateway&sr=8-5'
      },
      {
        rating: 5,
        source: 'bestbuy',
        price: 150,
        shipping: '4 days',
        url: 'https://www.bestbuy.com/site/apple-iphone-7-32gb-rose-gold-sprint/5580713.p?skuId=5580713'
      }
    ],
    img_url: 'https://ss7.vzw.com/is/image/VerizonWireless/iphone7-front-rsgld?$device-lg$'
  },
  {
    id: 10,
    reviewScore: 4,
    performanceScore: 3,
    cameraScore: 4,
    popularityScore: 4.5,
    valueScore: 2,
    brand: 'Apple',
    model: 'iPhone 7 Plus',
    network_technology: 'GSM / CDMA / HSPA / EVDO / LTE',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900 - A1660| A1778',
    '3G_bands': 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100 - A1660| A1778',
    '4G_bands':
      'LTE band 1(2100)| 2(1900)| 3(1800)| 4(1700/2100)| 5(850)| 7(2600)| 8(900)| 12(700)| 13(700)| 17(700)| 18(800)| 19(800)| 20(800)| 25(1900)| 26(850)| 27(800)| 28(700)| 29(700)| 30(2300)| 38(2600)| 39(1900)| 40(2300)| 41(2500) - A1660| A1778',
    network_speed: 'HSPA 42.2/5.76 Mbps  LTE-A (3CA) Cat9 450/50 Mbps  EV-DO Rev.A 3.1 Mbps',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2016  September',
    status: 'Available. Released 2016  September',
    dimentions: '138.3 x 67.1 x 7.1 mm (5.44 x 2.64 x 0.28 in)',
    weight_g: 138,
    weight_oz: 4.87,
    SIM: 'Nano-SIM',
    display_type: 'LED-backlit IPS LCD  capacitive touchscreen  16M colors',
    display_resolution: '4.7 inches (~65.6% screen-to-body ratio)',
    display_size: '750 x 1334 pixels (~326 ppi pixel density)',
    OS: 'iOS 10.0.1| upgradable to iOS 10.3.2',
    CPU: 'Quad-core 2.34 GHz (2x Hurricane + 2x Zephyr)',
    Chipset: 'Apple A10 Fusion',
    GPU: 'PowerVR Series7XT Plus (six-core graphics)',
    memory_card: 'No',
    internal_memory: '32/128/256 GB',
    RAM: 'GB| 2 GB RAM',
    primary_camera: '12 MP| f/1.8| 28mm| phase detection autofocus| OIS| quad-LED (dual tone) flash|',
    secondary_camera: '7 MP| f/2.2| 32mm| 1080p@30fps| 720p@240fps| face detection| HDR| panorama',
    loud_speaker: 'Yes with stereo speakers',
    audio_jack: 'No',
    WLAN: 'Wi-Fi 802.11 a/b/g/n/ac| dual-band| hotspot',
    bluetooth: '4.2| A2DP| LE',
    GPS: 'Yes with A-GPS GLONASS',
    NFC: 'Yes (Apple Pay only)',
    radio: 'No',
    USB: '2.0| reversible connector',
    sensors: 'Fingerprint (front-mounted)| accelerometer| gyro| proximity| compass| barometer',
    battery: 'Non-removable Li-Ion 1960 mAh battery (7.45 Wh)',
    colors: 'Jet Black| Black| Silver| Gold| Rose Gold| Red',
    approx_price_USD: 360,
    reviews: [
      {
        rating: 5,
        type: 'text',
        source: 'TechRadar',
        content:
          ' I am a computer programmer, but I have to admit that I never made the transition to smartphone, mainly because I sit in from of a computer everyday anyway. If I need access to all those smartphone '
      },
      {
        rating: 5,
        type: 'text',
        source: 'CNET',
        content: 'this phone met all our expectations, my dad loved it and is enjoying it!'
      }
    ],
    prices: [
      {
        rating: 4,
        source: 'amazon',
        price: 375,
        shipping: '4 Days',
        url:
          'https://www.amazon.com/Apple-iPhone-Plus-Unlocked-32GB/dp/B01N6ZAR0D/ref=sr_1_9?keywords=apple+iphone&qid=1551047465&s=gateway&sr=8-9'
      },
      {
        rating: 4,
        source: 'bestbuy',
        price: 350,
        shipping: '4 days',
        url: 'https://www.bestbuy.com/site/total-wireless-iphone-7-plus-black/6318677.p?skuId=6318677'
      }
    ],
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/81gS9Sx0g7L._SL1500_.jpg'
  },
  {
    id: 11,
    reviewScore: 4,
    performanceScore: 3,
    cameraScore: 2,
    popularityScore: 2,
    valueScore: 2,
    brand: 'Xiaomi',
    model: 'Note 5',
    network_technology: 'GSM / CDMA / HSPA / EVDO / LTE',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900',
    '3G_bands': 'HSDPA 800 / 850 / 900 / 1700(AWS) / 1900 / 2100',
    '4G_bands':
      'LTE band 1(2100)| 2(1900)| 3(1800)| 4(1700/2100)| 5(850)| 7(2600)| 8(900)| 12(700)| 13(700)| 17(700)| 18(800)| 19(800)| 20(800)| 25(1900)| 26(850)| 27(800)| 28(700)| 29(700)| 30(2300)| 38(2600)| 39(1900)| 40(2300)| 41(2500)',
    network_speed: 'HSPA 42.2/5.76 Mbps  LTE-A Cat4 150/50 Mbps  EV-DO Rev.A 3.1 Mbps',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2016  March',
    status: 'Available. Released 2016  March',
    dimentions: '240 x 169.5 x 6.1 mm (9.45 x 6.67 x 0.24 in)',
    weight_g: 437,
    weight_oz: 'Wi-Fi)',
    SIM: 'Nano-SIM/ Electronic SIM card (e-SIM)',
    display_type: 'LED-backlit IPS LCD  capacitive touchscreen  16M colors',
    display_resolution: '9.7 inches (~71.6% screen-to-body ratio)',
    display_size: '1536 x 2048 pixels (~264 ppi pixel density)',
    OS: 'iOS 9.3.2| upgradable to iOS 10.3.2',
    CPU: 'Dual-core 2.16 GHz (Twister)',
    Chipset: 'Apple A9X',
    GPU: 'PowerVR Series 7 (12-core graphics)',
    memory_card: 'No',
    internal_memory: '32/128/256 GB',
    RAM: '2 GB RAM',
    primary_camera: '12 MP| f/2.2| 29mm| phase detection autofocus| dual-LED (dual tone) flash',
    secondary_camera: '5 MP| f/2.2| 31mm| 1080p@30fps| 720p@240fps| face detection| HDR| panorama',
    loud_speaker: 'Yes with stereo speakers (4 speakers)',
    audio_jack: 'Yes',
    WLAN: 'Wi-Fi 802.11 a/b/g/n/ac| dual-band| hotspot',
    bluetooth: '4.2| A2DP| EDR',
    GPS: 'Yes with A-GPS GLONASS (Wi&#8209;Fi + Cellular model only)',
    NFC: 'NFC',
    radio: 'No',
    USB: '2.0| reversible connector; magnetic connector',
    sensors: 'Fingerprint (front-mounted)| accelerometer| gyro| compass| barometer',
    battery: 'Non-removable Li-Ion battery (27.9 Wh)',
    colors: 'Silver| Gold| Space Gray| Rose Gold',
    approx_price_USD: 300,
    reviews: [
      {
        rating: 4,
        type: 'text',
        source: 'TechRadar',
        content:
          "I bought it for my elderly grandfather which is very vocal about everything we get him whether we like it or not. He likes the phone it's loud and it's simple. He doesn't need his glasse"
      },
      {
        rating: 2,
        type: 'text',
        source: 'CNET',
        content:
          'The charging port was loose. I got that soldered in. Then needed a new battery as well. $100 later (not including cost of purchase) I have a usable phone. The phone should not have been sold i'
      }
    ],
    prices: [
      {
        rating: 3,
        source: 'amazon',
        price: 200,
        shipping: '3 Days',
        url:
          'https://www.amazon.com/Xiaomi-Unlocked-Global-Version-Warranty/dp/B07D82MTZL/ref=sr_1_2?keywords=redmi+note+5&qid=1551048759&s=gateway&sr=8-2'
      },
      {
        rating: 3,
        source: 'mi',
        price: 225,
        shipping: '2 days',
        url: 'hhttps://www.mi.com/global/redmi-note-5/'
      }
    ],
    img_url:
      'https://image2.geekbuying.com/ggo_pic/2018-04-25/Global-Version-Xiaomi-Redmi-Note-5-5-99-Inch-4GB-64GB-Smartphone-Gold-628321-.jpg'
  },
  {
    id: 12,
    reviewScore: 4,
    performanceScore: 3,
    cameraScore: 2,
    popularityScore: 2,
    valueScore: 5,
    brand: 'Xiaomi',
    model: 'Redmi 6',
    network_technology: 'GSM / HSPA / LTE',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2',
    '3G_bands': 'HSDPA 850 / 900 / 1900 / 2100',
    '4G_bands': 'LTE',
    network_speed: 'HSPA 42.2/5.76 Mbps  LTE-A (2CA) Cat6 300/50 Mbps',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2017  June',
    status: 'Coming soon. Exp. release 2017  July',
    dimentions: '152.4 x 74.7 x 7.9 mm (6.00 x 2.94 x 0.31 in)',
    weight_g: '',
    weight_oz: '',
    SIM: 'Dual SIM (Nano-SIM| dual stand-by)',
    display_type: 'Super AMOLED capacitive touchscreen  16M colors',
    display_resolution: '5.5 inches (~73.3% screen-to-body ratio)',
    display_size: '1080 x 1920 pixels (~401 ppi pixel density)',
    OS: 'Android 7.0 (Nougat)',
    CPU: 'Octa-core 1.6 GHz Cortex-A53',
    Chipset: 'Exynos 7870 Octa',
    GPU: 'Mali-T830 MP2',
    memory_card: 'microSD  up to 256 GB',
    internal_memory: '64 GB',
    RAM: '3 GB RAM',
    primary_camera: '13 MP| f/1.7| autofocus| LED flash',
    secondary_camera: '13 MP| f/1.9| LED flash',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: 'Wi-Fi 802.11 b/g/n| Wi-Fi Direct| hotspot',
    bluetooth: '4.1| A2DP| LE',
    GPS: 'Yes with A-GPS GLONASS',
    NFC: '',
    radio: 'To be confirmed',
    USB: 'microUSB 2.0| USB On-The-Go',
    sensors: 'Fingerprint (front-mounted)| accelerometer| gyro| proximity| compass',
    battery: 'Non-removable Li-Ion 3600 mAh battery',
    colors: 'Black| Gold',
    approx_price_USD: 160,
    reviews: [
      {
        rating: 3,
        type: 'text',
        source: 'TechRadar',
        content:
          "It's battery life is great. It's very responsive to touch. The only issue is that sometimes the screen goes black and you have to press the top button several times to get the screen to re-illuminate."
      },
      {
        rating: 5,
        type: 'text',
        source: 'GSMArena',
        content:
          "My fiance had this phone previously, but caused many problems. So, of course, we decided to browse amazon for a replacement til' our contract is up! & so far so good!"
      }
    ],
    prices: [
      {
        rating: 3,
        source: 'amazon',
        price: 160,
        shipping: '3 Days',
        url:
          'https://www.amazon.com/Xiaomi-Camera-Factory-Unlocked-Smartphone/dp/B07G5JD5ZT/ref=asc_df_B07G5JD5ZT/?tag=hyprod-20&linkCode=df0&hvadid=242488490571&hvpos=1o1&hvnetw=g&hvrand=14493763213428994597&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9027902&hvtargid=pla-525644137097&psc=1'
      },
      {
        rating: 3,
        source: 'flipkart',
        price: 199,
        shipping: '2 days',
        url: 'https://www.flipkart.com/redmi-6-gold-32-gb/p/itmf8gyqx7hkszpf'
      }
    ],
    img_url:
      'https://rukminim1.flixcart.com/image/704/704/jlo1tow0/mobile/g/v/x/mi-redmi-6-na-original-imaf8qtkgh6qhs3p.jpeg?q=70'
  },
  {
    id: 13,
    reviewScore: 1,
    performanceScore: 2,
    cameraScore: 2,
    popularityScore: 4,
    valueScore: 2,
    brand: 'Samsung',
    model: 'Galaxy J7',
    network_technology: 'GSM / HSPA / LTE',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
    '3G_bands': 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
    '4G_bands': 'LTE band 1(2100)| 3(1800)| 5(850)| 7(2600)| 8(900)| 20(800)| 28(700)| 38(2600)| 40(2300)| 41(2500)',
    network_speed: 'HSPA 42.2/5.76 Mbps  LTE-A (2CA) Cat6 300/50 Mbps',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2017  June',
    status: 'Coming soon. Exp. release 2017  July',
    dimentions: '152.4 x 74.7 x 7.9 mm (6.00 x 2.94 x 0.31 in)',
    weight_g: '',
    weight_oz: '',
    SIM: 'Single SIM (Nano-SIM) or Dual SIM (Nano-SIM| dual stand-by)',
    display_type: 'Super AMOLED capacitive touchscreen  16M colors',
    display_resolution: '5.5 inches (~73.3% screen-to-body ratio)',
    display_size: '1080 x 1920 pixels (~401 ppi pixel density)',
    OS: 'Android 7.1 (Nougat)',
    CPU: 'Octa-core 1.6 GHz Cortex-A53',
    Chipset: 'Exynos 7870 Octa',
    GPU: 'Mali-T830MP2',
    memory_card: 'microSD  up to 256 GB (dedicated slot)',
    internal_memory: '16 GB',
    RAM: '3 GB RAM - Global',
    primary_camera: '13 MP| f/1.7| autofocus| LED flash',
    secondary_camera: '13 MP| f/1.9| LED flash| 1080p',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: 'Wi-Fi 802.11 a/b/g/n/ac| dual-band| WiFi Direct| hotspot',
    bluetooth: '4.2| A2DP',
    GPS: 'Yes with A-GPS GLONASS BDS',
    NFC: 'Yes',
    radio: 'FM radio',
    USB: 'microUSB 2.0',
    sensors: 'Fingerprint (front-mounted)| accelerometer| gyro| proximity| compass',
    battery: 'Non-removable Li-Ion 3600 mAh battery',
    colors: 'Blue| Pink| Gold| Black',
    approx_price_USD: 340,
    reviews: [
      {
        rating: 3,
        type: 'text',
        source: 'TechRadar',
        content: "Small phone, isn't compatible with most us services but has nice color and amazing storage."
      },
      {
        rating: 3,
        type: 'text',
        source: 'GSMArena',
        content:
          "SLOW, SLOW, SLOW....I'm on my home network and my Nokia 635 has already loaded the weather channel local forecast. This phone is still loading....To restate other reviews: terrible viewing angle, desp..."
      }
    ],
    prices: [
      {
        rating: 5,
        source: 'amazon',
        price: 325,
        shipping: '3 Days',
        url:
          'https://www.amazon.com/Samsung-Galaxy-Prime-G610F-DS/dp/B01N4WGN48/ref=sr_1_3?keywords=samsung+galaxy+j7&qid=1551048791&s=gateway&sr=8-3'
      },
      {
        rating: 1,
        source: 'bestbuy',
        price: 349,
        shipping: '2 days',
        url:
          'https://www.bestbuy.com/site/samsung-galaxy-s7-4g-lte-with-32gb-memory-cell-phone-unlocked-black-onyx/5286503.p?skuId=5286503'
      }
    ],
    img_url: 'http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j7-2017-sm-j730f.jpg'
  },
  {
    id: 14,
    reviewScore: 1,
    performanceScore: 2,
    cameraScore: 2,
    popularityScore: 4,
    valueScore: 2,
    brand: 'Samsung',
    model: 'Galaxy J3',
    network_technology: 'GSM / HSPA / LTE',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
    '3G_bands': 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
    '4G_bands': 'LTE band 1(2100)| 3(1800)| 5(850)| 7(2600)| 8(900)| 20(800)| 28(700)| 38(2600)| 40(2300)| 41(2500)',
    network_speed: 'HSPA 42.2/5.76 Mbps  LTE-A (2CA) Cat6 300/50 Mbps',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2017  June',
    status: 'Coming soon. Exp. release 2017  June',
    dimentions: '146.2 x 71.3 x 7.9 mm (5.76 x 2.81 x 0.31 in)',
    weight_g: '',
    weight_oz: '',
    SIM: 'Single SIM (Nano-SIM) or Dual SIM (Nano-SIM| dual stand-by)',
    display_type: 'Super AMOLED capacitive touchscreen  16M colors',
    display_resolution: '5.2 inches (~71.5% screen-to-body ratio)',
    display_size: '720 x 1280 pixels (~282 ppi pixel density)',
    OS: 'Android 7.1 (Nougat)',
    CPU: 'Octa-core 1.6 GHz Cortex-A53',
    Chipset: 'Exynos 7870 Octa',
    GPU: 'Mali-T830MP2',
    memory_card: 'microSD  up to 256 GB (dedicated slot)',
    internal_memory: '16 GB',
    RAM: '2 GB RAM - Global',
    primary_camera: '13 MP| f/1.7| autofocus| LED flash',
    secondary_camera: '13 MP| f/1.9',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: 'Wi-Fi 802.11 a/b/g/n/ac| dual-band| WiFi Direct| hotspot',
    bluetooth: '4.2| A2DP',
    GPS: 'Yes with A-GPS GLONASS BDS',
    NFC: 'Yes',
    radio: 'FM radio',
    USB: 'microUSB 2.0',
    sensors: 'Fingerprint (front-mounted)| accelerometer| gyro| proximity| compass',
    battery: 'Non-removable Li-Ion 3000 mAh battery',
    colors: 'Blue| Pink| Gold| Black',
    approx_price_USD: 200,
    reviews: [
      {
        rating: 4,
        type: 'text',
        source: 'TechRadar',
        content:
          "I'm not a fan of touchscreen phones but when my trusted Nokia E71 gave up the ghost, I had to make that transition. This phone meets my needs. Nothing fancy, very nice size - fits perfectly in my palm...."
      },
      {
        rating: 3,
        type: 'text',
        source: 'GSMArena',
        content:
          'No the phone done have Bluetooth on it, which is so bad for my son.. This phone is still loading....To restate other reviews: terrible viewing angle, desp...'
      }
    ],
    prices: [
      {
        rating: 2,
        source: 'amazon',
        price: 149,
        shipping: '7 Days',
        url:
          'https://www.amazon.com/Samsung-J3-Factory-Unlocked-Phone/dp/B072KPG9PN/ref=sr_1_3?keywords=samsung+galaxy+j3&qid=1551048980&s=gateway&sr=8-3'
      },
      {
        rating: 3,
        source: 'bestbuy',
        price: 145,
        shipping: '7 days',
        url:
          'https://www.bestbuy.com/site/samsung-galaxy-j3-top-with-16gb-memory-cell-phone-unlocked-black/6267019.p?skuId=6267019'
      }
    ],
    img_url: 'http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-j5-2017-sm-j530.jpg'
  },
  {
    id: 15,
    reviewScore: 4.5,
    performanceScore: 4.5,
    cameraScore: 4.5,
    popularityScore: 4,
    valueScore: 4,
    brand: 'Samsung',
    model: 'Galaxy S9',
    network_technology: 'GSM / HSPA / LTE',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
    '3G_bands': 'HSDPA 850 / 900 / 1900 / 2100',
    '4G_bands': 'LTE band 1(2100)| 3(1800)| 5(850)| 7(2600)| 8(900)| 20(800)| 38(2600)| 40(2300)',
    network_speed: 'HSPA 42.2/5.76 Mbps  LTE Cat4 150/50 Mbps',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2017  June',
    status: 'Coming soon. Exp. release 2017  August',
    dimentions: '143.2 x 70.3 x 7.9 mm (5.64 x 2.77 x 0.31 in)',
    weight_g: 148,
    weight_oz: 5.22,
    SIM: 'Single SIM (Nano-SIM) or Dual SIM (Nano-SIM| dual stand-by)',
    display_type: 'Super AMOLED capacitive touchscreen  16M colors',
    display_resolution: '5.0 inches (~68.5% screen-to-body ratio)',
    display_size: '720 x 1280 pixels (~294 ppi pixel density)',
    OS: 'Android 7.0 (Nougat)',
    CPU: 'Quad-core 1.4 GHz Cortex-A53',
    Chipset: 'Exynos 7570 Quad',
    GPU: '',
    memory_card: 'microSD  up to 256 GB (dedicated slot)',
    internal_memory: '16 GB',
    RAM: '2 GB RAM',
    primary_camera: '13 MP| f/1.9| autofocus| LED flash',
    secondary_camera: '5 MP| f/2.2| LED flash',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: 'Wi-Fi 802.11 b/g/n| Wi-Fi Direct| hotspot',
    bluetooth: '4.2| A2DP| LE',
    GPS: 'Yes with A-GPS GLONASS BDS',
    NFC: 'Yes (Europe only)',
    radio: 'FM radio',
    USB: 'microUSB 2.0| USB On-The-Go',
    sensors: 'Accelerometer| proximity',
    battery: 'Removable Li-Ion 2400 mAh battery',
    colors: 'White| Black| Gold',
    approx_price_USD: 620,
    reviews: [
      {
        rating: 5,
        type: 'video',
        source: 'TechRadar',
        content: 'https://www.youtube.com/embed/t9R7xx0joOU'
      },
      {
        rating: 2,
        type: 'text',
        source: 'GSMArena',
        content:
          'This product is expensive for the quality. At $20 it might be worth it...maybe. You are better off adding a little extra and getting a used second or third generation galaxy or iphone. It will definit.'
      }
    ],
    prices: [
      {
        rating: 5,
        source: 'amazon',
        price: 590,
        shipping: '3 Days',
        url:
          'https://www.amazon.com/Samsung-Galaxy-S9-Unlocked-Smartphone/dp/B079H6RLKQ/ref=sr_1_3?keywords=galaxy+s9&qid=1551049170&s=gateway&sr=8-3'
      },
      {
        rating: 4,
        source: 'bestbuy',
        price: 675,
        shipping: '3 days',
        url: 'https://www.bestbuy.com/site/samsung-galaxy-s9-64gb-unlocked-midnight-black/6191423.p?skuId=6191423'
      }
    ],
    img_url: 'https://img.scoop.it/EvknZrobaqHeVqFrdVaE04XXXL4j3HpexhjNOf_P3YmryPKwJ94QGRtDb3Sbc6KY'
  },
  {
    id: 16,
    reviewScore: 1,
    performanceScore: 2,
    cameraScore: 2,
    popularityScore: 4,
    valueScore: 2,
    brand: 'Samsung',
    model: 'Z4',
    network_technology: 'GSM / HSPA / LTE',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
    '3G_bands': 'HSDPA 900 / 2100',
    '4G_bands': 'LTE',
    network_speed: 'HSPA  LTE Cat4 150/50 Mbps',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2017  May',
    status: 'Available. Released 2017  June',
    dimentions: '132.9 x 69.2 x 10.3 mm (5.23 x 2.72 x 0.41 in)',
    weight_g: 143,
    weight_oz: 5.04,
    SIM: 'Single SIM (Micro-SIM) or Dual SIM (Micro-SIM| dual stand-by)',
    display_type: 'Capacitive touchscreen  16M colors',
    display_resolution: '4.5 inches (~62.7% screen-to-body ratio)',
    display_size: '480 x 800 pixels (~207 ppi pixel density)',
    OS: 'Tizen 3.0',
    CPU: 'Quad-core 1.5 GHz',
    Chipset: '',
    GPU: '',
    memory_card: 'microSD  up to 128 GB (uses SIM 2 slot)',
    internal_memory: '8 GB',
    RAM: '1 GB RAM',
    primary_camera: '5 MP| f/2.2| dual-LED flash',
    secondary_camera: '5 MP| f/2.2| LED flash',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: 'Wi-Fi 802.11 b/g/n| Wi-Fi Direct',
    bluetooth: '4.0| A2DP| LE',
    GPS: 'Yes with A-GPS GLONASS',
    NFC: '',
    radio: 'FM radio',
    USB: 'microUSB 2.0| USB On-The-Go',
    sensors: 'Accelerometer| proximity',
    battery: 'Removable Li-Ion 2050 mAh battery',
    colors: 'Black| Gold',
    approx_price_USD: 530,
    reviews: [
      {
        rating: 2,
        type: 'text',
        source: 'TechRadar',
        content:
          "it says T-Mobile compatible; however my sim card once inserted didn't connect at all. it would say sim not connecting to network. great price but I couldn't do nothing more then use the phone when "
      },
      {
        rating: 2,
        type: 'video',
        source: 'GSMArena',
        content: 'https://www.youtube.com/embed/nNlTNE1y9DM'
      }
    ],
    prices: [
      {
        rating: 5,
        source: 'amazon',
        price: 130,
        shipping: 'out of stock',
        url: 'https://www.amazon.in/Samsung-SM-Z400FZDDINS-Z4-Gold-8GB/dp/B072BZ2C8C'
      },
      {
        rating: 4,
        source: 'fonearena',
        price: 175,
        shipping: '10 days',
        url: 'https://www.fonearena.com/samsung-z4_8387.html'
      }
    ],
    img_url: 'http://cdn2.gsmarena.com/vv/bigpic/samsung-z4.jpg'
  },
  {
    id: 17,
    reviewScore: 4,
    performanceScore: 4,
    cameraScore: 3,
    popularityScore: 4,
    valueScore: 2,
    brand: 'Samsung',
    model: 'Galaxy S8',
    network_technology: 'GSM / HSPA / LTE',
    '2G_bands': 'GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM model only)',
    '3G_bands': 'HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100',
    '4G_bands':
      'LTE band 1(2100)| 2(1900)| 3(1800)| 4(1700/2100)| 5(850)| 7(2600)| 8(900)| 12(700)| 13(700)| 17(700)| 18(800)| 19(800)| 20(800)| 25(1900)| 26(850)| 28(700)| 32(1500)| 66(1700/2100)| 38(2600)| 39(1900)| 40(2300)| 41(2500)',
    network_speed: 'HSPA 42.2/5.76 Mbps  LTE-A (4CA) Cat16 1024/150 Mbps',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '2017  March',
    status: 'Available. Released 2017  April',
    dimentions: '148.9 x 68.1 x 8 mm (5.86 x 2.68 x 0.31 in)',
    weight_g: 155,
    weight_oz: 5.47,
    SIM: 'Single SIM (Nano-SIM) or Dual SIM (Nano-SIM| dual stand-by)',
    display_type: 'Super AMOLED capacitive touchscreen  16M colors',
    display_resolution: '5.8 inches (~83.6% screen-to-body ratio)',
    display_size: '1440 x 2960 pixels (~570 ppi pixel density)',
    OS: 'Android 7.0 (Nougat)',
    CPU: 'Octa-core (4x2.3 GHz & 4x1.7 GHz) - EMEA',
    Chipset: 'Exynos 8895 Octa - EMEA',
    GPU: 'Mali-G71 MP20 - EMEA',
    memory_card: 'microSD  up to 256 GB (dedicated slot) - single-SIM model',
    internal_memory: '64 GB',
    RAM: '4 GB RAM',
    primary_camera: '12 MP| f/1.7| 26mm| phase detection autofocus| OIS| LED flash|',
    secondary_camera: '8 MP| f/1.7| autofocus| 1440p@30fps| dual video call| Auto HDR',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: 'Wi-Fi 802.11 a/b/g/n/ac| dual-band| Wi-Fi Direct| hotspot',
    bluetooth: '5.0| A2DP| LE| aptX',
    GPS: 'Yes with A-GPS GLONASS BDS GALILEO',
    NFC: 'Yes',
    radio: 'No',
    USB: '3.1| Type-C 1.0 reversible connector',
    sensors:
      'Iris scanner| fingerprint (rear-mounted)| accelerometer| gyro| proximity| compass| barometer| heart rate| SpO2',
    battery: 'Non-removable Li-Ion 3000 mAh battery',
    colors: 'Midnight Black| Orchid Gray| Arctic Silver| Coral Blue| Maple Gold',
    approx_price_USD: 600,
    reviews: [
      {
        rating: 2,
        type: 'text',
        source: 'TechRadar',
        content:
          "Its a cheap phone, but I thought I gave it a try. I guess for what I wanted it, wasn't good. It has very low Internal memory and lots of Ads thrown at you! It also freezes quite a bit."
      },
      {
        rating: 4,
        type: 'video',
        source: 'GSMArena',
        content: 'https://www.youtube.com/embed/OvVKnC6gGtg'
      }
    ],
    prices: [
      {
        rating: 5,
        source: 'amazon',
        price: 630,
        shipping: '3 days',
        url:
          'https://www.amazon.com/Samsung-Galaxy-S8-Unlocked-64GB/dp/B06Y14T5YW/ref=sr_1_2?keywords=s8&qid=1551049684&s=gateway&sr=8-2'
      },
      {
        rating: 4,
        source: 'samsung',
        price: 675,
        shipping: '3 days',
        url: 'https://www.samsung.com/us/mobile/phones/galaxy-s/galaxy-s8-64gb--unlocked--sm-g950uzkaxaa/'
      }
    ],
    img_url: 'http://cdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s8-.jpg'
  },
  {
    id: 101,
    reviewScore: 5,
    performanceScore: 4.5,
    cameraScore: 4.5,
    popularityScore: 4,
    valueScore: 4,
    brand: 'Google',
    model: 'Pixel 3',
    network_technology: '',
    '2G_bands': '',
    '3G_bands': 'Yes',
    '4G_bands': 'Yes',
    network_speed: '',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '',
    status: '',
    dimentions: '',
    weight_g: '',
    weight_oz: '',
    SIM: '',
    display_type: '',
    display_resolution: '',
    display_size: '',
    OS: '',
    CPU: '',
    Chipset: '',
    GPU: '',
    memory_card: '',
    internal_memory: '',
    RAM: '',
    primary_camera: '',
    secondary_camera: '',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: '',
    bluetooth: '',
    GPS: '',
    NFC: '',
    radio: '',
    USB: '',
    sensors: '',
    battery: '',
    colors: '',
    approx_price_USD: '',
    reviews: [
      {
        rating: 5,
        type: 'text',
        source: 'smartprix',
        content:
          "Buy this mobile for software and camera also excellent performance. It is the world's best camera mobile.it beats Samsung note 9,iphone x"
      }
    ],
    prices: [
      {
        rating: 5,
        source: 'amazon',
        price: 915.04,
        shipping: '4-6 Business Days',
        url: 'https://www.amazon.in/dp/B07L3SV833/?tag=smartprix-21&ascsubtag=RJ2QDVd001u1LiT'
      },
      {
        rating: 4,
        source: 'flipkart',
        price: 999.5,
        shipping: '2-5 Business Days',
        url:
          'https://www.flipkart.com/google-pixel-3-not-pink-64-gb/p/itmf9gaqgdfshhpn?pid=MOBF9GAPSKYZQFGY&affid=adminsmart1&affExtParam1=RJ2QUnm001F1TgI'
      },
      {
        rating: 3,
        source: 'paytm_mall',
        price: 900.93,
        shipping: '4-7 Business Days',
        url:
          'https://paytmmall.com/google-pixel-3-64-gb-black-CMPLXMOBGOOGLE-PIXELDUMM141313C3DF9-pdp?product_id=219883902&utm_source=admitad&utm_medium=affiliate&utm_campaign=admitad_547492_RJ2QTCu001VRxqB_e3f7f6cdcd6c26158f6caef103f3caae&utm_term=CPS&utm_content=banner'
      }
    ],
    img_url:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6303/6303042_sd.jpg;maxHeight=1000;maxWidth=1000'
  },
  {
    id: 102,
    reviewScore: 4.5,
    performanceScore: 4.5,
    cameraScore: 4.5,
    popularityScore: 4,
    valueScore: 4,
    brand: 'Google',
    model: 'Pixel XL',
    network_technology: '',
    '2G_bands': '',
    '3G_bands': '',
    '4G_bands': '',
    network_speed: '',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: '',
    status: '',
    dimentions: '',
    weight_g: '',
    weight_oz: '',
    SIM: '',
    display_type: '',
    display_resolution: '',
    display_size: '',
    OS: '',
    CPU: '',
    Chipset: '',
    GPU: '',
    memory_card: '',
    internal_memory: '',
    RAM: '',
    primary_camera: '',
    secondary_camera: '',
    loud_speaker: 'Yes',
    audio_jack: 'Yes',
    WLAN: '',
    bluetooth: '',
    GPS: '',
    NFC: '',
    radio: '',
    USB: '',
    sensors: '',
    battery: '',
    colors: '',
    approx_price_USD: '',
    reviews: [
      {
        rating: 5,
        type: 'text',
        source: 'smartprix',
        content:
          'Firstly i would like to request Everyone to ignore all the negative comments in here. I use every phone in real depth and i give all the feedbacks after the benchmark results of the devices. Comparing this device with iPhones is completely rubbish.'
      },
      {
        rating: 3,
        type: 'text',
        source: 'amazon',
        content: 'I was a big fan of Google as I had used Nexus and it was brilliant. But pixel is no way near that .'
      },
      {
        rating: 5,
        type: 'text',
        source: 'amazon',
        content:
          "Google has proved it's class once again by making this phone. It's just amazing. Camera is simply too Good"
      }
    ],
    prices: [
      {
        rating: 5,
        source: 'amazon',
        price: 520.73,
        shipping: 'Out of Stock',
        url: 'https://www.amazon.in/dp/B01MXHYFGM/?tag=smartprix-21&ascsubtag=RJ2T2Rc001C2kaN'
      },
      {
        rating: 3,
        source: 'shopclues',
        price: 562.96,
        shipping: 'Out of Stock',
        url:
          'https://www.shopclues.com/google-pixel-xl-very-silver-32-gb-136775339.html?ty=0&id=181454165&mcid=aff&tid=nh&utm_source=Smartprix&OfferId=15&utm_keyword='
      },
      {
        rating: 3,
        source: 'paytm_mall',
        price: 520.85,
        shipping: 'Out of Stock',
        url:
          'https://paytmmall.com/google-pixel-xl-32-gb-very-silver-CMPLXMOBGOOGLE-PIXELDUMM141BAD01E42-pdp?product_id=198769533&utm_source=admitad&utm_medium=affiliate&utm_campaign=admitad_547492_RJ2TLXK001n5Etu_9e6bc5563622df7c1f5eee1698d96593&utm_term=CPS&utm_content=banner'
      }
    ],
    img_url:
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTkuviUVOp-ReYVCHb3iI0a7bIEEi0LRlU992-5FZIsGovMOKH4OrA&usqp=CAc'
  },
  {
    id: 103,
    reviewScore: 4.5,
    performanceScore: 4.5,
    cameraScore: 5,
    popularityScore: 4,
    valueScore: 4,
    brand: 'Google',
    model: 'Pixel 2 XL (64GB)',
    network_technology: '',
    '2G_bands': '',
    '3G_bands': 'Yes',
    '4G_bands': 'Yes',
    network_speed: '',
    GPRS: 'Yes',
    EDGE: 'Yes',
    announced: 'October, 2017',
    status: '',
    dimentions: '157.9 x 76.7 x 7.9 mm',
    weight_g: 175,
    weight_oz: '',
    SIM: 'Single Sim, GSM',
    display_type: '',
    display_resolution: '',
    display_size: '',
    OS: '',
    CPU: '',
    Chipset: '',
    GPU: '',
    memory_card: '',
    internal_memory: '',
    RAM: '',
    primary_camera: '',
    secondary_camera: '',
    loud_speaker: 'Yes',
    audio_jack: 'No 3.5mm Headphone Jack',
    WLAN: '',
    bluetooth: '',
    GPS: 'Yes, with A-GPS Support',
    NFC: 'Yes',
    radio: '',
    USB: '',
    sensors: 'Accelerometer, Gyroscope, Compass',
    battery: '',
    colors: '',
    approx_price_USD: '',
    reviews: [
      {
        rating: 5,
        type: 'text',
        source: 'smartprix',
        content: 'Amazing picture quality.'
      },
      {
        rating: 2,
        type: 'text',
        source: 'flipkart',
        content:
          'The phone is amazing, great battery backup easily fits in your pocket, camera quality is amazing, but Flipkart cart cheated me, i never got the 10k cashback from Hdfc,and also seller doesnt accept returns,be careful while buying with Flipkart'
      },
      {
        rating: 5,
        type: 'text',
        source: 'amazon',
        content:
          'I am using Google phones from Nexus days. Believe me by every passing year Google has improved their phones. Pixel 2XL is no exception. One of the best pure android phone till date.'
      }
    ],
    prices: [
      {
        rating: 5,
        source: 'flipkart',
        price: 534.93,
        shipping: '2-5 Business Days',
        url:
          'https://www.flipkart.com/google-pixel-2-xl-just-black-64-gb/p/itmfykvdhgxr3tbd?pid=MOBEYEQGG8PCVY23&affid=adminsmart1&affExtParam1=RJ2VsQt001LcZI3'
      },
      {
        rating: 5,
        source: 'amazon',
        price: 640.51,
        shipping: '4-6 Business Days',
        url: 'https://www.amazon.in/dp/B077XGCZKL/?tag=smartprix-21&ascsubtag=RJ2W6Tx001Js8wt'
      },
      {
        rating: 3,
        source: 'paytm_mall',
        price: 548.53,
        shipping: '4-7 Business Days',
        url:
          'https://paytmmall.com/google-pixel-2-xl-64-gb-just-black-CMPLXMOBGOOGLE-PIXELDUMM141530A14D8-pdp?product_id=144886533&utm_source=admitad&utm_medium=affiliate&utm_campaign=admitad_547492_RJ2WDXZ001qJQPF_b9157b5e4063565d2f5e5bf33e18f46d&utm_term=CPS&utm_content=banner'
      }
    ],
    img_url:
      'https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBGOOGLE-PIXELDEAL23206530A14D8/a_0..jpeg?imwidth=320&impolicy=hq'
  }
];

@Injectable()
export class DataStoreService {
  phonesObservable: Observable<object>;
  phones: Array<any>;
  overviewObservable: Observable<object>;
  overview: object;

  constructor(private httpClient: HttpClient) {
    this.loadOverview();
    this.loadPhones();
    this.phones = [];
    this.overview = {};
  }

  loadOverview() {
    this.overviewObservable = of(overviewsJson).pipe(
      map((body: any) => {
        return body;
      }),
      catchError(() => of('Error, could not load overviewObservable!'))
    );
    this.overviewObservable.subscribe((overview: object) => {
      this.overview = overview;
    });
  }

  loadPhones() {
    this.phonesObservable = of(phonesJson).pipe(
      map((body: any) => {
        return body;
      }),
      catchError(() => of('Error, could not load phones!'))
    );
    this.phonesObservable.subscribe((phones: Array<any>) => {
      this.phones = phones;
    });
  }

  getPhonesObservable(): Observable<object> {
    return this.phonesObservable;
  }

  getPhones(): Array<object> {
    // careful! this will return empty array if called before API request has been completed
    return this.phones;
  }

  getPhoneById(id: any): object {
    if (!this.phones) {
      return null;
    }
    return this.phones.filter(phone => phone.id === id)[0];
  }

  getOverviewObservable(): Observable<object> {
    return this.overviewObservable;
  }

  getOverview(): object {
    // careful! this will return empty object if called before API request has been completed
    return this.overview;
  }
}
