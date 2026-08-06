// Data budaya per provinsi
// Sumber: rangkuman pengetahuan umum kebudayaan Indonesia, disusun ulang untuk keperluan edukasi.
// Catatan: telah dilengkapi menjadi 38 provinsi resmi + "Papua Utara" (bukan provinsi resmi,
// dipertahankan dari data asal — silakan hapus jika tidak diperlukan).
// Bagian "makananTradicional" telah diperbaiki agar sesuai dengan makanan khas tiap daerah
// (sebelumnya banyak yang keliru berisi "Nasi Campur" generik).

export const kategoriList = [
  {
    slug: 'pakaian-adat',
    nama: 'Pakaian Adat',
    deskripsi: 'Busana tradisional yang dikenakan dalam upacara adat, pernikahan, dan perayaan resmi di tiap daerah.',
    ikon: 'pakaian'
  },
  {
    slug: 'bahasa-daerah',
    nama: 'Bahasa Daerah',
    deskripsi: 'Ragam bahasa ibu yang dipakai dalam percakapan sehari-hari masyarakat di berbagai wilayah Nusantara.',
    ikon: 'bahasa'
  },
  {
    slug: 'rumah-adat',
    nama: 'Rumah Adat',
    deskripsi: 'Arsitektur tradisional yang mencerminkan filosofi hidup, iklim, dan struktur sosial masyarakat setempat.',
    ikon: 'rumah'
  },
  {
    slug: 'seni-lukis',
    nama: 'Seni Lukis & Motif',
    deskripsi: 'Karya visual, motif kain, dan lukisan tradisional yang menjadi identitas estetika suatu daerah.',
    ikon: 'lukisan'
  },
  {
    slug: 'alat-musik',
    nama: 'Alat Musik Tradisional',
    deskripsi: 'Instrumen musik khas yang mengiringi upacara adat, tarian, dan pertunjukan seni daerah.',
    ikon: 'musik'
  },
  {
    slug: 'makanan-tradisional',
    nama: 'Makanan Tradisional',
    deskripsi: 'Hidangan khas daerah yang mencerminkan budaya kuliner dan bahan lokal setempat.',
    ikon: 'makanan'
  },
  {
    slug: 'lagu-daerah',
    nama: 'Lagu Daerah',
    deskripsi: 'Lagu rakyat turun-temurun yang menggambarkan nilai hidup, alam, dan kearifan lokal masyarakat tiap provinsi.',
    ikon: 'musik-lagu'
  },
  
  

]

export const provinsiList = [
  {
    slug: 'aceh',
    nama: 'Aceh',
    pulau: 'Sumatera',
    warna: '#0F5C4A',
    ringkasan: 'Provinsi paling barat Indonesia yang dikenal dengan julukan Serambi Mekkah dan tradisi Islam yang kuat.',
    pakaianAdat: {
      nama: 'Ulee Balang',
      deskripsi: 'Busana kebesaran bangsawan Aceh, untuk pria berupa jas tertutup dengan celana panjang dan kain sarung songket, dilengkapi penutup kepala meukeutop. Untuk perempuan berupa baju kurung dengan sulaman benang emas.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Aceh',
      deskripsi: 'Termasuk rumpun bahasa Austronesia, dituturkan mayoritas masyarakat di pesisir dan pedalaman Aceh, memiliki dialek yang bervariasi antar kabupaten.'
    },
    rumahAdat: {
      nama: 'Rumoh Aceh',
      deskripsi: 'Rumah panggung memanjang dari timur ke barat dengan tangga di bagian depan, dibangun tanpa paku menggunakan sistem pasak kayu agar tahan gempa.'
    },
    senilukis: {
      nama: 'Motif Pintu Aceh',
      deskripsi: 'Ornamen ukiran khas berbentuk lengkung dengan pola sulur tumbuhan, banyak diaplikasikan pada gerbang rumah, kain, dan kerajinan logam.'
    },
    alatMusik: {
      nama: 'Serune Kalee',
      deskripsi: 'Alat musik tiup sejenis seruling ganda yang mengiringi tarian Seudati dan Saman dengan nada yang khas dan melengking.'
    },
    makananTradicional: {
      nama: 'Mie Aceh',
      deskripsi: 'Mi tebal berbumbu rempah kari yang dimasak dengan daging sapi, kambing, atau seafood, disajikan pedas dan berkuah kental khas Aceh.'
    },
    laguDaerah: {
      nama: 'Bungong Jeumpa',
      deskripsi: 'Lagu ciptaan Ibrahim Abduh yang menggambarkan keindahan bunga cempaka sebagai lambang keanggunan perempuan Aceh, sering dinyanyikan dalam acara adat dan penyambutan tamu.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Aceh pernah menjadi pusat Kesultanan Aceh Darussalam yang berjaya pada abad ke-16 hingga ke-17 sebagai bandar dagang lada dan pusat penyebaran Islam terkemuka di Nusantara. Setelah perjuangan panjang termasuk konflik bersenjata, Aceh memperoleh status otonomi khusus melalui Nota Kesepahaman Helsinki 2005 yang mengakhiri konflik dengan pemerintah pusat.'
    }
  },
  {
    slug: 'sumatera-utara',
    nama: 'Sumatera Utara',
    pulau: 'Sumatera',
    warna: '#7A2E2E',
    ringkasan: 'Rumah bagi suku Batak dengan tradisi ulos dan danau vulkanik terbesar di Asia Tenggara, Danau Toba.',
    pakaianAdat: {
      nama: 'Ulos',
      deskripsi: 'Kain tenun khas Batak yang dipakai sebagai selendang atau selimut dalam upacara adat, melambangkan restu dan kasih sayang antar generasi.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Batak',
      deskripsi: 'Terdiri dari beberapa sub-dialek seperti Batak Toba, Karo, dan Simalungun, digunakan luas di kawasan sekitar Danau Toba.'
    },
    rumahAdat: {
      nama: 'Rumah Bolon',
      deskripsi: 'Rumah panggung besar berbentuk persegi dengan atap melengkung menyerupai pelana kuda, dihuni bersama oleh beberapa keluarga.'
    },
    senilukis: {
      nama: 'Motif Gorga',
      deskripsi: 'Ukiran khas Batak dengan pola geometris dan simbol flora-fauna yang menghiasi dinding rumah adat, sarat makna filosofis.'
    },
    alatMusik: {
      nama: 'Gondang Sabangunan',
      deskripsi: 'Ansambel musik pukul yang terdiri dari beberapa gendang bernada berbeda, dimainkan dalam upacara adat Batak.'
    },
    makananTradicional: {
      nama: 'Bika Ambon',
      deskripsi: 'Kue basah bertekstur berongga dengan aroma pandan dan daun jeruk, terbuat dari tepung tapioka, telur, dan santan, menjadi oleh-oleh khas Medan.'
    },
    laguDaerah: {
      nama: 'Sinanggar Tulo',
      deskripsi: 'Lagu rakyat Batak Toba yang menceritakan keluh kesah seorang pemuda yang jatuh cinta namun ragu melamar sang gadis, dibawakan dengan iringan gondang yang riang.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Wilayah ini dahulu menjadi pusat berbagai kerajaan Batak serta jalur perkebunan tembakau Deli yang berkembang pesat pada masa kolonial Belanda. Sumatera Utara resmi berdiri sebagai provinsi tersendiri pada tahun 1956 setelah sebelumnya menjadi bagian dari Provinsi Sumatera.'
    }
  },
  {
    slug: 'sumatera-barat',
    nama: 'Sumatera Barat',
    pulau: 'Sumatera',
    warna: '#4A2E1E',
    ringkasan: 'Kampung halaman suku Minangkabau dengan sistem kekerabatan matrilineal dan filosofi alam takambang jadi guru.',
    pakaianAdat: {
      nama: 'Bundo Kanduang',
      deskripsi: 'Busana perempuan dengan penutup kepala tinggi berbentuk tanduk kerbau (tingkuluak), melambangkan kedudukan perempuan dalam adat Minang.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Minangkabau',
      deskripsi: 'Bahasa dengan tradisi tutur pantun dan pepatah-petitih yang kuat, banyak digunakan dalam upacara adat dan musyawarah nagari.'
    },
    rumahAdat: {
      nama: 'Rumah Gadang',
      deskripsi: 'Rumah panggung dengan atap runcing menyerupai tanduk kerbau (gonjong), menjadi pusat kehidupan sosial keluarga besar matrilineal.'
    },
    senilukis: {
      nama: 'Motif Songket Minang',
      deskripsi: 'Kain tenun bersulam benang emas dengan motif flora dan geometris, dipakai dalam upacara adat dan pernikahan.'
    },
    alatMusik: {
      nama: 'Saluang',
      deskripsi: 'Alat musik tiup bambu sejenis suling tanpa lidah getar, menghasilkan nada mendayu yang mengiringi lagu-lagu Minang.'
    },
    makananTradicional: {
      nama: 'Rendang',
      deskripsi: 'Daging sapi yang dimasak perlahan dengan santan dan campuran rempah hingga kering dan berwarna gelap, dikenal luas sebagai salah satu hidangan terlezat di dunia.'
    },
    laguDaerah: {
      nama: 'Kampuang Nan Jauh di Mato',
      deskripsi: 'Lagu ciptaan Oslan Husein yang mengungkapkan kerinduan seorang perantau Minang akan kampung halamannya, menjadi lagu wajib rasa rindu bagi masyarakat rantau.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Sumatera Barat merupakan pusat Kerajaan Pagaruyung dan wilayah pecahnya Perang Padri pada abad ke-19 antara kaum adat dan kaum agama. Provinsi ini juga dikenal sebagai tempat lahirnya banyak tokoh pergerakan nasional dan pemikir Indonesia modern.'
    }
  },
  {
    slug: 'riau',
    nama: 'Riau',
    pulau: 'Sumatera',
    warna: '#2E5C7A',
    ringkasan: 'Provinsi berjuluk Bumi Lancang Kuning dengan warisan Kesultanan Melayu dan budaya sungai yang kuat.',
    pakaianAdat: {
      nama: 'Baju Kurung Cekak Musang',
      deskripsi: 'Busana Melayu Riau dengan kain songket dan penutup kepala tanjak bagi pria, serta baju kurung berhias kain songket bagi perempuan.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Melayu Riau',
      deskripsi: 'Dialek Melayu yang menjadi akar bahasa Indonesia modern, dituturkan luas di sepanjang pesisir dan aliran sungai Riau.'
    },
    rumahAdat: {
      nama: 'Rumah Selaso Jatuh Kembar',
      deskripsi: 'Rumah panggung dengan dua selasar berundak di kiri-kanan bangunan utama, biasa digunakan sebagai balai pertemuan adat.'
    },
    senilukis: {
      nama: 'Motif Selembayung',
      deskripsi: 'Ornamen ukiran berbentuk tanduk pada atap rumah Melayu Riau, melambangkan penolak bala dan kewibawaan pemilik rumah.'
    },
    alatMusik: {
      nama: 'Gambus',
      deskripsi: 'Alat musik petik berdawai yang dipengaruhi budaya Arab-Melayu, mengiringi tarian zapin dalam berbagai perayaan adat.'
    },
    makananTradicional: {
      nama: 'Gulai Ikan Patin',
      deskripsi: 'Ikan patin yang dimasak dalam kuah santan kuning berbumbu asam khas Melayu, biasa disantap bersama nasi hangat.'
    },
    laguDaerah: {
      nama: 'Soleram',
      deskripsi: 'Lagu ciptaan Muhammad Arief berisi nasihat orang tua kepada anak perempuannya agar berhati-hati menjaga diri, dinyanyikan dengan lembut khas budaya Melayu.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Riau pernah menjadi pusat Kesultanan Siak Sri Indrapura yang berpengaruh di jalur perdagangan Selat Malaka. Provinsi ini resmi berdiri sendiri pada tahun 1958 setelah dipisahkan dari Provinsi Sumatera Tengah.'
    }
  },
  {
    slug: 'kepulauan-riau',
    nama: 'Kepulauan Riau',
    pulau: 'Sumatera',
    warna: '#1E6B7A',
    ringkasan: 'Gugusan pulau di jalur perdagangan maritim penting dengan warisan budaya Melayu pesisir yang kental.',
    pakaianAdat: {
      nama: 'Baju Kurung Teluk Belanga',
      deskripsi: 'Busana Melayu dengan potongan longgar dan kain songket, dilengkapi peci atau tanjak sebagai penutup kepala pria.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Melayu Kepulauan Riau',
      deskripsi: 'Dialek Melayu yang dituturkan di kawasan kepulauan, dianggap sebagai salah satu akar penting bahasa Melayu standar.'
    },
    rumahAdat: {
      nama: 'Rumah Melayu Atap Limas',
      deskripsi: 'Rumah panggung kayu dengan atap limas dan ukiran khas Melayu pesisir, biasa dibangun berdekatan dengan garis pantai.'
    },
    senilukis: {
      nama: 'Motif Ukiran Melayu Pesisir',
      deskripsi: 'Ukiran flora dan kaligrafi Islam yang menghiasi rumah dan perahu tradisional masyarakat kepulauan.'
    },
    alatMusik: {
      nama: 'Gambus Kepri',
      deskripsi: 'Alat musik petik berdawai yang mengiringi tarian zapin dan joget dangkung dalam acara adat Melayu kepulauan.'
    },
    makananTradicional: {
      nama: 'Gonggong',
      deskripsi: 'Siput laut rebus yang disantap dengan sambal cocolan, menjadi kuliner khas pesisir terutama di Pulau Bintan.'
    },
    laguDaerah: {
      nama: 'Pulau Bintan',
      deskripsi: 'Lagu daerah yang melukiskan keindahan alam Pulau Bintan sebagai salah satu gugusan pulau utama di kawasan Kepulauan Riau.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Wilayah ini dahulu menjadi pusat Kesultanan Riau-Lingga, kerajaan Melayu yang berperan penting dalam perkembangan bahasa dan sastra Melayu klasik. Kepulauan Riau resmi menjadi provinsi tersendiri pada tahun 2002 setelah dipisahkan dari Provinsi Riau.'
    }
  },
  {
    slug: 'jambi',
    nama: 'Jambi',
    pulau: 'Sumatera',
    warna: '#5C2E4A',
    ringkasan: 'Provinsi dengan warisan Kerajaan Melayu Kuno dan situs Candi Muaro Jambi sebagai pusat peradaban Buddha masa lampau.',
    pakaianAdat: {
      nama: 'Baju Kurung Tanggung',
      deskripsi: 'Busana adat Melayu Jambi dengan kain songket dan hiasan kepala bagi pengantin, melambangkan status sosial pemakainya.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Melayu Jambi',
      deskripsi: 'Dialek Melayu dengan pengaruh bahasa Minangkabau dan Palembang, dituturkan di sepanjang aliran Sungai Batanghari.'
    },
    rumahAdat: {
      nama: 'Rumah Kajang Leko',
      deskripsi: 'Rumah panggung dengan atap melengkung menyerupai perahu terbalik, mencerminkan kedekatan masyarakat Jambi dengan sungai.'
    },
    senilukis: {
      nama: 'Motif Batik Jambi',
      deskripsi: 'Batik dengan motif kembang gambir dan durian pecah yang khas, dipengaruhi budaya Melayu dan Tionghoa.'
    },
    alatMusik: {
      nama: 'Gambus Jambi',
      deskripsi: 'Alat musik petik berdawai yang mengiringi lagu-lagu Melayu dan tarian zapin dalam upacara adat Jambi.'
    },
    makananTradicional: {
      nama: 'Tempoyak',
      deskripsi: 'Olahan durian yang difermentasi lalu dimasak sebagai bumbu gulai ikan, menghasilkan cita rasa asam gurih khas Jambi.'
    },
    laguDaerah: {
      nama: 'Dodoi Si Dodoi',
      deskripsi: 'Lagu pengantar tidur khas Melayu Jambi ciptaan Victor Hutabarat yang berisi ungkapan kasih sayang orang tua kepada anaknya.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Jambi merupakan pusat Kerajaan Melayu Kuno dan menyimpan situs Candi Muaro Jambi, kompleks percandian Buddha terluas di Asia Tenggara yang berkembang pada masa kejayaan Sriwijaya.'
    }
  },
  {
    slug: 'sumatera-selatan',
    nama: 'Sumatera Selatan',
    pulau: 'Sumatera',
    warna: '#6B1E2E',
    ringkasan: 'Bekas pusat Kerajaan Sriwijaya dengan Sungai Musi sebagai urat nadi kehidupan masyarakat Palembang.',
    pakaianAdat: {
      nama: 'Aesan Gede',
      deskripsi: 'Busana pengantin kebesaran Palembang berwarna keemasan lengkap dengan mahkota Paksangkong, melambangkan kejayaan Kesultanan Palembang.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Palembang',
      deskripsi: 'Dialek Melayu yang dituturkan masyarakat di sepanjang Sungai Musi, memiliki kosakata khas yang dipengaruhi budaya Tionghoa dan Arab.'
    },
    rumahAdat: {
      nama: 'Rumah Limas',
      deskripsi: 'Rumah panggung bertingkat dengan atap limas, tiap tingkat melambangkan strata sosial penghuni sesuai adat Palembang.'
    },
    senilukis: {
      nama: 'Motif Songket Palembang',
      deskripsi: 'Kain tenun benang emas dengan motif bunga dan geometris, menjadi simbol kemewahan dalam upacara adat Palembang.'
    },
    alatMusik: {
      nama: 'Accordion Palembang',
      deskripsi: 'Alat musik yang dipadukan dengan gendang dan biola dalam orkes Melayu, mengiringi tarian dan lagu daerah Sumatera Selatan.'
    },
    makananTradicional: {
      nama: 'Pempek',
      deskripsi: 'Olahan ikan dan tepung sagu yang digoreng atau direbus, disajikan dengan kuah cuko asam pedas khas Palembang.'
    },
    laguDaerah: {
      nama: 'Dek Sangke',
      deskripsi: 'Lagu ciptaan Samsudin Sholeh yang mengisahkan rasa cinta dan kerinduan dengan lirik berbahasa Melayu Palembang yang khas.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Sumatera Selatan adalah pusat pemerintahan Kerajaan Sriwijaya, kerajaan maritim terbesar di Nusantara yang menguasai jalur perdagangan Selat Malaka sejak abad ke-7. Wilayahnya kemudian menjadi kesultanan Palembang sebelum berintegrasi ke dalam Republik Indonesia.'
    }
  },
  {
    slug: 'bengkulu',
    nama: 'Bengkulu',
    pulau: 'Sumatera',
    warna: '#2E6B5C',
    ringkasan: 'Provinsi di pesisir barat Sumatera yang menyimpan jejak bunga Rafflesia arnoldi dan sejarah kolonial Inggris.',
    pakaianAdat: {
      nama: 'Baju Kurung Bengkulu',
      deskripsi: 'Busana adat dengan kain songket emas dan hiasan kepala berbentuk burung kuau, dikenakan dalam upacara pernikahan.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Rejang',
      deskripsi: 'Bahasa tertua di Sumatera yang memiliki aksara sendiri (Ka-Ga-Nga), dituturkan oleh suku Rejang di pedalaman Bengkulu.'
    },
    rumahAdat: {
      nama: 'Rumah Bubungan Lima',
      deskripsi: 'Rumah panggung kayu dengan lima bubungan atap, dibangun tinggi dari tanah untuk menghindari banjir dan binatang buas.'
    },
    senilukis: {
      nama: 'Motif Kain Besurek',
      deskripsi: 'Kain khas Bengkulu bermotif kaligrafi Arab yang dipadukan dengan corak bunga Rafflesia dan relung paku.'
    },
    alatMusik: {
      nama: 'Dol',
      deskripsi: 'Gendang besar berbahan kayu dan kulit sapi yang ditabuh dalam perayaan Tabot, tradisi tahunan khas Bengkulu.'
    },
    makananTradicional: {
      nama: 'Pendap',
      deskripsi: 'Ikan yang dibumbui rempah dan kelapa parut, dibungkus daun talas lalu dikukus, menghasilkan rasa gurih pedas khas Bengkulu.'
    },
    laguDaerah: {
      nama: 'Lalan Belek',
      deskripsi: 'Lagu daerah Bengkulu yang menggambarkan kehidupan masyarakat sehari-hari dengan iringan musik tradisional yang khas.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Bengkulu pernah menjadi markas dagang Inggris dengan Benteng Marlborough sebagai peninggalannya sejak abad ke-18, sebelum akhirnya dipertukarkan dengan Belanda melalui Traktat London tahun 1824.'
    }
  },
  {
    slug: 'lampung',
    nama: 'Lampung',
    pulau: 'Sumatera',
    warna: '#7A4A1E',
    ringkasan: 'Gerbang selatan Pulau Sumatera dengan tradisi kain tapis dan filosofi hidup piil pesenggiri suku Lampung.',
    pakaianAdat: {
      nama: 'Tapis Lampung',
      deskripsi: 'Kain tenun benang emas dengan motif geometris dan flora, dipadukan siger (mahkota bertanduk) sebagai busana pengantin.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Lampung',
      deskripsi: 'Bahasa dengan aksara sendiri (Kaganga) dan dua dialek utama, Api dan Nyo, digunakan oleh masyarakat asli Lampung.'
    },
    rumahAdat: {
      nama: 'Nuwo Sesat',
      deskripsi: 'Rumah panggung besar dengan balai adat (sesat) sebagai tempat musyawarah para penyimbang atau pemuka adat.'
    },
    senilukis: {
      nama: 'Motif Kain Tapis',
      deskripsi: 'Sulaman benang emas di atas kain tenun dengan motif pucuk rebung dan flora, melambangkan status sosial pemakainya.'
    },
    alatMusik: {
      nama: 'Bende',
      deskripsi: 'Alat musik pukul sejenis gong kecil dari logam, digunakan sebagai penanda dimulainya upacara adat Lampung.'
    },
    makananTradicional: {
      nama: 'Seruit',
      deskripsi: 'Ikan bakar atau goreng yang dicampur sambal terasi, tempoyak, dan mangga, disantap bersama-sama sebagai simbol kebersamaan masyarakat Lampung.'
    },
    laguDaerah: {
      nama: 'Lipang-Lipang Dang',
      deskripsi: 'Lagu rakyat Lampung yang riang, biasa dinyanyikan dalam suasana gembira dan pertemuan adat masyarakat setempat.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Lampung menjadi gerbang selatan Pulau Sumatera dan wilayahnya pernah dilanda dahsyatnya letusan Gunung Krakatau pada tahun 1883. Provinsi ini kini menjadi rumah bagi masyarakat asli Lampung dan keturunan transmigran asal Jawa.'
    }
  },
  {
    slug: 'kepulauan-bangka-belitung',
    nama: 'Kepulauan Bangka Belitung',
    pulau: 'Sumatera',
    warna: '#4A2E5C',
    ringkasan: 'Provinsi kepulauan penghasil timah dengan pantai berbatu granit dan perpaduan budaya Melayu-Tionghoa yang harmonis.',
    pakaianAdat: {
      nama: 'Paksian',
      deskripsi: 'Busana pengantin dengan mahkota bersusun dan kain songket, memadukan unsur budaya Melayu dan Tionghoa Bangka Belitung.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Melayu Bangka',
      deskripsi: 'Dialek Melayu dengan intonasi khas yang dipengaruhi kosakata Tionghoa, dituturkan di seluruh kepulauan Bangka Belitung.'
    },
    rumahAdat: {
      nama: 'Rumah Rakit',
      deskripsi: 'Rumah panggung yang dahulu dibangun mengapung di atas sungai menggunakan rakit bambu, kini banyak dibangun di daratan.'
    },
    senilukis: {
      nama: 'Motif Cual',
      deskripsi: 'Kain tenun khas dengan motif bunga cengkih dan pucuk rebung, dipengaruhi corak batik pesisir dan budaya Tionghoa.'
    },
    alatMusik: {
      nama: 'Dambus',
      deskripsi: 'Alat musik petik menyerupai gambus dengan ukiran kepala rusa, mengiringi tarian dan lagu daerah Bangka Belitung.'
    },
    makananTradicional: {
      nama: 'Lempah Kuning',
      deskripsi: 'Sup ikan berkuah kuning segar dengan campuran nanas, menjadi hidangan khas masyarakat pesisir Bangka Belitung.'
    },
    laguDaerah: {
      nama: 'Yo Miak',
      deskripsi: 'Lagu daerah Bangka Belitung yang menggambarkan semangat dan keceriaan masyarakat kepulauan penghasil timah ini.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Wilayah ini dahulu menjadi pusat pertambangan timah penting sejak masa kolonial Belanda. Kepulauan Bangka Belitung resmi berdiri sebagai provinsi pada 21 November 2000 setelah dipisahkan dari Provinsi Sumatera Selatan.'
    }
  },
  {
    slug: 'dki-jakarta',
    nama: 'DKI Jakarta',
    pulau: 'Jawa',
    warna: '#1B4B6B',
    ringkasan: 'Ibu kota Indonesia dengan budaya Betawi yang lahir dari percampuran berbagai etnis pendatang.',
    pakaianAdat: {
      nama: 'Baju Sadariah & Kebaya Encim',
      deskripsi: 'Pria mengenakan baju sadariah dengan sarung dan peci, perempuan mengenakan kebaya encim bermotif bunga yang dipengaruhi budaya Tionghoa-Peranakan.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Betawi',
      deskripsi: 'Dialek Melayu kreol yang berkembang dari percampuran bahasa penduduk asli, Tionghoa, Arab, dan Eropa di Batavia.'
    },
    rumahAdat: {
      nama: 'Rumah Kebaya',
      deskripsi: 'Rumah dengan atap berbentuk pelana terlipat yang menyerupai lipatan kebaya, memiliki teras luas untuk menerima tamu.'
    },
    senilukis: {
      nama: 'Ondel-Ondel',
      deskripsi: 'Boneka besar berwajah dekoratif dengan hiasan warna-warni, aslinya digunakan sebagai penolak bala, kini menjadi ikon seni pertunjukan Betawi.'
    },
    alatMusik: {
      nama: 'Tanjidor',
      deskripsi: 'Orkes musik tiup logam yang dipengaruhi budaya Eropa, sering mengiringi arak-arakan pengantin dan perayaan rakyat.'
    },
    makananTradicional: {
      nama: 'Kerak Telor',
      deskripsi: 'Telur ayam atau bebek yang dimasak dengan beras ketan dan ebi di atas tungku arang, ditaburi bawang goreng dan serundeng sebagai kudapan khas Betawi.'
    },
    laguDaerah: {
      nama: 'Kicir-Kicir',
      deskripsi: 'Lagu rakyat Betawi yang riang dengan pantun berisi nasihat hidup, biasa dinyanyikan dalam pertunjukan gambang kromong dan acara pernikahan Betawi.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Jakarta, dahulu bernama Batavia, menjadi pusat pemerintahan VOC dan kolonial Belanda sejak abad ke-17. Kota ini ditetapkan sebagai ibu kota Republik Indonesia dan kini berstatus Daerah Khusus Jakarta dengan kewenangan pemerintahan khusus.'
    }
  },
  {
    slug: 'jawa-barat',
    nama: 'Jawa Barat',
    pulau: 'Jawa',
    warna: '#8A5A1E',
    ringkasan: 'Tanah Pasundan yang menjunjung tinggi kesenian Sunda, dari angklung hingga tari jaipong.',
    pakaianAdat: {
      nama: 'Kebaya Sunda',
      deskripsi: 'Kebaya dengan kain batik motif khas Sunda, dipadukan selendang, sering dikenakan bersama sanggul dan bunga melati.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Sunda',
      deskripsi: 'Bahasa dengan tingkatan kesopanan (undak usuk basa) yang mengatur pilihan kata sesuai lawan bicara, dituturkan luas di tatar Sunda.'
    },
    rumahAdat: {
      nama: 'Rumah Kasepuhan / Julang Ngapak',
      deskripsi: 'Rumah panggung dengan atap menyerupai sayap burung mengepak, dibangun dari bambu dan kayu yang menyatu dengan alam.'
    },
    senilukis: {
      nama: 'Motif Batik Megamendung',
      deskripsi: 'Motif awan bergaris lengkung khas Cirebon dengan gradasi warna, melambangkan kesejukan dan pengendalian emosi.'
    },
    alatMusik: {
      nama: 'Angklung',
      deskripsi: 'Alat musik bambu yang dimainkan dengan cara digoyangkan, telah diakui UNESCO sebagai warisan budaya takbenda dunia.'
    },
    makananTradicional: {
      nama: 'Karedok',
      deskripsi: 'Salad sayuran mentah seperti kacang panjang, tauge, dan terong yang disiram bumbu kacang pedas khas Sunda.'
    },
    laguDaerah: {
      nama: 'Bubuy Bulan',
      deskripsi: 'Lagu Sunda yang puitis menggambarkan kerinduan lewat perumpamaan menjemur bulan dan menjaring bintang, populer dibawakan dengan iringan kacapi suling.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Jawa Barat merupakan pusat Kerajaan Sunda Pajajaran yang berjaya hingga abad ke-16 sebelum runtuh akibat serangan Kesultanan Banten dan Cirebon. Provinsi ini menjadi salah satu provinsi pertama yang dibentuk pada awal kemerdekaan Indonesia.'
    }
  },
  {
    slug: 'banten',
    nama: 'Banten',
    pulau: 'Jawa',
    warna: '#3A5C1E',
    ringkasan: 'Bekas pusat Kesultanan Banten yang berjaya lewat perdagangan lada, kini dikenal dengan tradisi debus dan pesantren.',
    pakaianAdat: {
      nama: 'Pangsi',
      deskripsi: 'Busana sederhana berwarna hitam khas jawara Banten, terdiri dari baju longgar dan celana komprang yang memudahkan gerak silat.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Sunda Banten',
      deskripsi: 'Dialek Sunda dengan pengaruh Jawa dan Betawi, dituturkan masyarakat di wilayah Banten utara dan selatan.'
    },
    rumahAdat: {
      nama: 'Rumah Adat Baduy',
      deskripsi: 'Rumah panggung sederhana berbahan kayu dan bambu tanpa paku, dibangun mengikuti kontur tanah sesuai prinsip masyarakat Baduy.'
    },
    senilukis: {
      nama: 'Motif Batik Banten',
      deskripsi: 'Batik dengan motif terinspirasi nama-nama gerbang dan situs Kesultanan Banten, memiliki warna-warna cerah yang khas.'
    },
    alatMusik: {
      nama: 'Angklung Buhun',
      deskripsi: 'Alat musik bambu tradisi masyarakat Baduy dan Banten Kidul, dimainkan dalam upacara adat menanam padi.'
    },
    makananTradicional: {
      nama: 'Sate Bandeng',
      deskripsi: 'Ikan bandeng tanpa duri yang dibumbui rempah lalu dibakar di atas bara, menjadi hidangan khas keraton Banten sejak masa lampau.'
    },
    laguDaerah: {
      nama: 'Jereh Bu Guru',
      deskripsi: 'Lagu daerah ciptaan A. Syahri Aliman yang bertema pendidikan dan rasa hormat kepada guru, populer diajarkan di sekolah-sekolah Banten.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Banten pernah menjadi pusat Kesultanan Banten, bandar dagang lada yang ramai disinggahi pedagang dari Eropa, Arab, dan Tiongkok pada abad ke-16 hingga ke-17. Provinsi ini resmi berdiri sendiri pada tahun 2000 setelah dipisahkan dari Provinsi Jawa Barat.'
    }
  },
  {
    slug: 'jawa-tengah',
    nama: 'Jawa Tengah',
    pulau: 'Jawa',
    warna: '#5C4A1E',
    ringkasan: 'Pusat kebudayaan Jawa klasik dengan warisan keraton, batik, dan wayang kulit yang mendunia.',
    pakaianAdat: {
      nama: 'Kebaya Jawa & Beskap',
      deskripsi: 'Perempuan mengenakan kebaya dengan kain jarik batik, pria mengenakan beskap tertutup berkerah dengan blangkon di kepala.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Jawa',
      deskripsi: 'Memiliki tingkatan ngoko, krama madya, dan krama inggil yang mencerminkan kesantunan dan strata sosial dalam berkomunikasi.'
    },
    rumahAdat: {
      nama: 'Joglo',
      deskripsi: 'Rumah dengan atap tumpang bersusun dan empat tiang utama (soko guru), melambangkan kosmologi dan keseimbangan hidup Jawa.'
    },
    senilukis: {
      nama: 'Batik Klasik Solo-Yogya',
      deskripsi: 'Batik dengan motif parang, kawung, dan sido mukti yang memiliki makna filosofis dan aturan pemakaian tersendiri di lingkungan keraton.'
    },
    alatMusik: {
      nama: 'Gamelan Jawa',
      deskripsi: 'Ansambel alat musik pukul perunggu seperti saron, bonang, dan gong, membentuk laras slendro dan pelog yang khas.'
    },
    makananTradicional: {
      nama: 'Lumpia Semarang',
      deskripsi: 'Kulit lumpia tipis berisi rebung, telur, dan udang atau ayam, dipengaruhi budaya Tionghoa-Jawa dan menjadi ikon kuliner Semarang.'
    },
    laguDaerah: {
      nama: 'Gundul Pacul',
      deskripsi: 'Lagu dolanan Jawa yang sarat pesan moral tentang kepemimpinan yang harus dijalankan dengan hati-hati dan penuh tanggung jawab.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Jawa Tengah adalah pusat peradaban Kerajaan Mataram Kuno yang membangun Candi Borobudur dan Prambanan, serta kemudian menjadi wilayah inti Kesultanan Mataram Islam sebelum terpecah menjadi beberapa keraton.'
    }
  },
  {
    slug: 'jawa-timur',
    nama: 'Jawa Timur',
    pulau: 'Jawa',
    warna: '#6B4A2E',
    ringkasan: 'Tanah kelahiran kerajaan Majapahit dengan tradisi seni yang beragam, dari ludruk hingga reog Ponorogo.',
    pakaianAdat: {
      nama: 'Kebaya & Beskap Jawa Timur',
      deskripsi: 'Kebaya dengan kain batik motif khas Madura atau Surabaya, pria mengenakan beskap dengan blangkon dan keris sebagai simbol keberanian.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Jawa Dialek Timur',
      deskripsi: 'Varian bahasa Jawa dengan intonasi lebih keras dan kosakata unik, digunakan dalam percakapan sehari-hari di wilayah timur Pulau Jawa.'
    },
    rumahAdat: {
      nama: 'Rumah Limasan',
      deskripsi: 'Rumah panggung dengan atap limas bertingkat, memiliki teras luas dan ruang utama yang digunakan untuk menerima tamu.'
    },
    senilukis: {
      nama: 'Motif Batik Madura',
      deskripsi: 'Batik dengan warna cerah dan motif flora-fauna yang mencerminkan kehidupan masyarakat pesisir, sering dipakai dalam upacara adat dan pernikahan.'
    },
    alatMusik: {
      nama: 'Gamelan Madura',
      deskripsi: 'Ansambel musik tradisional dengan instrumen pukul dan tiup, mengiringi tarian dan pertunjukan rakyat di Madura dan sekitarnya.'
    },
    makananTradicional: {
      nama: 'Rawon',
      deskripsi: 'Sup daging sapi berkuah hitam pekat dari kluwek, disajikan dengan nasi, tauge, dan sambal khas Jawa Timur.'
    },
    laguDaerah: {
      nama: 'Rek Ayo Rek',
      deskripsi: 'Lagu ciptaan Is Haryanto yang menggambarkan semangat dan keramaian kehidupan malam Kota Surabaya, menjadi lagu khas kebanggaan Jawa Timur.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Jawa Timur merupakan pusat Kerajaan Majapahit, kerajaan terbesar dalam sejarah Nusantara yang menguasai wilayah luas Asia Tenggara pada abad ke-13 hingga ke-16 di bawah kepemimpinan Hayam Wuruk dan Patih Gajah Mada.'
    }
  },
  {
    slug: 'di-yogyakarta',
    nama: 'DI Yogyakarta',
    pulau: 'Jawa',
    warna: '#6B2E1A',
    ringkasan: 'Daerah istimewa yang menjadi pusat pelestarian seni tradisi Jawa di bawah naungan Keraton Ngayogyakarta.',
    pakaianAdat: {
      nama: 'Peranakan & Kebaya Yogyakarta',
      deskripsi: 'Busana adat dengan pakem keraton yang ketat, memiliki aturan warna dan motif berbeda untuk tiap acara resmi.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Jawa dialek Yogyakarta',
      deskripsi: 'Varian bahasa Jawa dengan intonasi khas, banyak dipengaruhi tata krama lingkungan keraton dalam penggunaan sehari-hari.'
    },
    rumahAdat: {
      nama: 'Bangsal Kencono',
      deskripsi: 'Bangunan utama keraton berbentuk joglo dengan ukiran dan warna keemasan, menjadi pusat kegiatan seremonial kesultanan.'
    },
    senilukis: {
      nama: 'Wayang Beber',
      deskripsi: 'Lukisan di atas kertas atau kain panjang yang digulung, menceritakan kisah epik dengan cara dibeber sambil didalangi.'
    },
    alatMusik: {
      nama: 'Gamelan Sekaten',
      deskripsi: 'Perangkat gamelan pusaka keraton yang dimainkan khusus saat perayaan Sekaten memperingati kelahiran Nabi Muhammad SAW.'
    },
    makananTradicional: {
      nama: 'Gudeg',
      deskripsi: 'Nangka muda yang dimasak lama dengan santan dan gula aren hingga berwarna cokelat, disajikan dengan ayam, telur, dan sambal krecek.'
    },
    laguDaerah: {
      nama: 'Pitik Tukung',
      deskripsi: 'Lagu dolanan anak khas Yogyakarta yang menceritakan seekor ayam tanpa ekor, dinyanyikan sambil bermain dengan irama ceria berbahasa Jawa.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Yogyakarta berdiri sebagai Kesultanan Ngayogyakarta Hadiningrat sejak Perjanjian Giyanti tahun 1755 yang membagi Kerajaan Mataram Islam. Berkat dukungannya terhadap kemerdekaan Indonesia, Yogyakarta memperoleh status Daerah Istimewa yang dipimpin langsung oleh sultan.'
    }
  },
  {
    slug: 'bali',
    nama: 'Bali',
    pulau: 'Nusa Tenggara',
    warna: '#B5651D',
    ringkasan: 'Pulau Dewata dengan tradisi Hindu yang kental, mewarnai setiap aspek seni dan kehidupan masyarakatnya.',
    pakaianAdat: {
      nama: 'Payas Adat Bali',
      deskripsi: 'Busana upacara dengan kain kamen, selendang, dan udeng (ikat kepala) bagi pria, serta kebaya dan sanggul bunga bagi perempuan.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Bali',
      deskripsi: 'Memiliki tingkatan bahasa halus dan kasar (anggah-ungguhing basa) yang digunakan sesuai konteks sosial dan keagamaan.'
    },
    rumahAdat: {
      nama: 'Rumah Adat Bali (Angkul-angkul)',
      deskripsi: 'Kompleks hunian dengan gerbang angkul-angkul dan pembagian ruang berdasarkan konsep Tri Hita Karana yang menyeimbangkan alam, manusia, dan Tuhan.'
    },
    senilukis: {
      nama: 'Lukisan Gaya Kamasan',
      deskripsi: 'Lukisan klasik Bali dengan pewarnaan alami dan garis tegas, umumnya menggambarkan kisah pewayangan dan mitologi Hindu.'
    },
    alatMusik: {
      nama: 'Gamelan Gong Kebyar',
      deskripsi: 'Ansambel gamelan Bali dengan tempo dinamis dan perubahan dinamika cepat, mengiringi tari-tarian sakral maupun hiburan.'
    },
    makananTradicional: {
      nama: 'Ayam Betutu',
      deskripsi: 'Ayam utuh yang dilumuri bumbu base genep lalu dimasak lama dengan cara dibungkus dan dipanggang, menghasilkan aroma rempah yang khas Bali.'
    },
    laguDaerah: {
      nama: 'Meyong-Meyong',
      deskripsi: 'Lagu dolanan anak Bali yang menirukan suara kucing, dinyanyikan dengan iringan permainan tradisional anak-anak Bali.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Bali telah lama menjadi pusat kerajaan Hindu yang berkembang pesat, terlebih setelah gelombang eksodus bangsawan dan seniman Majapahit pada abad ke-14 yang memperkaya tradisi seni dan keagamaan Hindu di pulau ini.'
    }
  },
  {
    slug: 'nusa-tenggara-barat',
    nama: 'Nusa Tenggara Barat',
    pulau: 'Nusa Tenggara',
    warna: '#7A5C1E',
    ringkasan: 'Provinsi kepulauan yang menaungi budaya Sasak Lombok dan Mbojo Sumbawa dengan tradisi pacuan kuda dan kain tenun.',
    pakaianAdat: {
      nama: 'Lambung & Pegon',
      deskripsi: 'Perempuan Sasak mengenakan baju lambung tanpa lengan, pria mengenakan baju pegon lengkap dengan sapuk (ikat kepala) khas Lombok.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Sasak & Bima',
      deskripsi: 'Bahasa Sasak dituturkan di Lombok, sementara bahasa Bima (Mbojo) dituturkan di Sumbawa bagian timur.'
    },
    rumahAdat: {
      nama: 'Bale Lumbung',
      deskripsi: 'Rumah panggung beratap tinggi menyerupai tudung, awalnya berfungsi sebagai lumbung padi masyarakat Sasak.'
    },
    senilukis: {
      nama: 'Motif Tenun Sasak',
      deskripsi: 'Kain tenun songket dengan motif subahnale dan flora, ditenun dengan teknik tradisional oleh perempuan Sasak.'
    },
    alatMusik: {
      nama: 'Gendang Beleq',
      deskripsi: 'Gendang besar yang dimainkan berpasangan dalam arak-arakan dan penyambutan tamu kehormatan khas Lombok.'
    },
    makananTradicional: {
      nama: 'Ayam Taliwang',
      deskripsi: 'Ayam kampung muda yang dibakar dengan bumbu cabai khas Lombok, disajikan pedas dan menjadi kuliner ikonik Nusa Tenggara Barat.'
    },
    laguDaerah: {
      nama: 'Tutu Koda',
      deskripsi: 'Lagu daerah Sasak yang bercerita tentang nasihat dan kehidupan masyarakat Lombok, dinyanyikan dalam bahasa Sasak dengan irama yang khas.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Wilayah ini dahulu menjadi pusat Kesultanan Bima dan Kerajaan Selaparang. Nusa Tenggara Barat resmi menjadi provinsi tersendiri pada tahun 1958, memisahkan diri dari Provinsi Sunda Kecil.'
    }
  },
  {
    slug: 'kalimantan-selatan',
    nama: 'Kalimantan Selatan',
    pulau: 'Kalimantan',
    warna: '#2E5C4A',
    ringkasan: 'Provinsi dengan tradisi Suku Banjar yang kuat, dikenal dengan pasar terapung dan seni tenun sasirangan.',
    pakaianAdat: {
      nama: 'Baamar Galung Pancar Matahari',
      deskripsi: 'Busana pengantin Banjar dengan mahkota berbentuk pancaran matahari, melambangkan kemuliaan dan harapan hidup bahagia.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Banjar',
      deskripsi: 'Bahasa rumpun Melayik yang menjadi lingua franca di sebagian besar wilayah Kalimantan Selatan dan sekitarnya.'
    },
    rumahAdat: {
      nama: 'Rumah Bubungan Tinggi',
      deskripsi: 'Rumah panggung dengan atap curam menjulang tinggi, dahulu menjadi kediaman bangsawan dan pejabat kesultanan Banjar.'
    },
    senilukis: {
      nama: 'Kain Sasirangan',
      deskripsi: 'Kain celup ikat dengan motif khas yang dahulu dipercaya memiliki nilai penyembuhan, kini menjadi busana khas Kalimantan Selatan.'
    },
    alatMusik: {
      nama: 'Panting',
      deskripsi: 'Alat musik petik mirip gambus berdawai tiga hingga enam, menjadi ciri khas orkes tradisional Banjar.'
    },
    makananTradicional: {
      nama: 'Soto Banjar',
      deskripsi: 'Sup ayam berkuah bening beraroma rempah khas dengan taburan telur dan bihun, disajikan bersama ketupat atau lontong.'
    },
    laguDaerah: {
      nama: 'Ampar-Ampar Pisang',
      deskripsi: 'Lagu ciptaan Hamiedan AC yang populer di seluruh Indonesia, menggambarkan suasana ceria masyarakat Banjar saat menjemur pisang untuk diolah.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Kalimantan Selatan merupakan pusat Kesultanan Banjar yang berdiri sejak abad ke-16 dan sempat terlibat Perang Banjar melawan kolonial Belanda pada abad ke-19. Provinsi ini resmi berdiri sendiri pada tahun 1957.'
    }
  },
  {
    slug: 'kalimantan-tengah',
    nama: 'Kalimantan Tengah',
    pulau: 'Kalimantan',
    warna: '#4A6B4A',
    ringkasan: 'Tanah Dayak dengan tradisi panjang rumah panjang, seni ukir kayu, dan ritual adat yang masih lestari.',
    pakaianAdat: {
      nama: 'Pakaian Adat Dayak',
      deskripsi: 'Busana adat dengan hiasan manik-manik, bulu burung, dan kain tenun khas Dayak yang dipakai dalam upacara adat dan tarian.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Dayak',
      deskripsi: 'Rumpun bahasa Austronesia yang digunakan oleh berbagai sub-suku Dayak di Kalimantan Tengah, memiliki dialek yang beragam.'
    },
    rumahAdat: {
      nama: 'Rumah Panjang',
      deskripsi: 'Bangunan panjang berbentuk panggung yang dihuni oleh beberapa keluarga besar, menjadi pusat kegiatan sosial dan ritual adat Dayak.'
    },
    senilukis: {
      nama: 'Motif Ukiran Dayak',
      deskripsi: 'Ukiran kayu dengan pola geometris dan simbol flora-fauna yang menghiasi rumah panjang, perahu, dan peralatan adat.'
    },
    alatMusik: {
      nama: 'Sape',
      deskripsi: 'Alat musik petik tradisional berbentuk seperti gitar kecil, dimainkan dalam upacara adat dan pertunjukan seni Dayak.'
    },
    makananTradicional: {
      nama: 'Juhu Singkah',
      deskripsi: 'Sayur umbut rotan muda yang dimasak berkuah santan dengan ikan atau daging, hidangan khas masyarakat Dayak Kalimantan Tengah.'
    },
    laguDaerah: {
      nama: 'Kalayar',
      deskripsi: 'Lagu daerah Dayak Kalimantan Tengah yang menggambarkan semangat gotong royong dan kehidupan masyarakat di tepi sungai.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Kalimantan Tengah dihuni mayoritas suku Dayak dengan tradisi rumah panjang yang kuat. Provinsi ini resmi dipisahkan dari Kalimantan Selatan pada tahun 1957 untuk mengakomodasi aspirasi masyarakat Dayak.'
    }
  },
  {
    slug: 'kalimantan-barat',
    nama: 'Kalimantan Barat',
    pulau: 'Kalimantan',
    warna: '#2E6B4A',
    ringkasan: 'Provinsi dengan tradisi Melayu dan Dayak yang kaya, terkenal dengan seni ukir, tenun, dan rumah panggung.',
    pakaianAdat: {
      nama: 'Pakaian Adat Melayu & Dayak',
      deskripsi: 'Busana adat Melayu dengan kain songket dan hiasan kepala, serta busana adat Dayak dengan manik-manik dan bulu burung.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Melayu & Dayak',
      deskripsi: 'Bahasa Melayu sebagai lingua franca, serta berbagai bahasa Dayak yang digunakan oleh suku-suku di Kalimantan Barat.'
    },
    rumahAdat: {
      nama: 'Rumah Betang & Rumah Melayu',
      deskripsi: 'Rumah panjang Dayak (betang) dan rumah panggung Melayu yang mencerminkan arsitektur tradisional dan filosofi hidup masyarakat setempat.'
    },
    senilukis: {
      nama: 'Motif Ukiran Kalimantan Barat',
      deskripsi: 'Ukiran kayu dengan pola geometris dan simbol flora-fauna yang menghiasi rumah panjang, perahu, dan peralatan adat.'
    },
    alatMusik: {
      nama: 'Gendang & Sape',
      deskripsi: 'Alat musik tradisional seperti gendang tabung dan sape yang dimainkan dalam upacara adat dan pertunjukan seni di Kalimantan Barat.'
    },
    makananTradicional: {
      nama: 'Bubur Pedas Sambas',
      deskripsi: 'Bubur beras berisi campuran sayuran dan rempah dengan rasa gurih pedas, hidangan khas masyarakat Sambas, Kalimantan Barat.'
    },
    laguDaerah: {
      nama: 'Cik Cik Periuk',
      deskripsi: 'Lagu rakyat Kalimantan Barat yang riang dan biasa dinyanyikan anak-anak sambil bermain dalam bahasa Melayu setempat.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Kalimantan Barat dahulu menjadi wilayah Kesultanan Pontianak dan Kesultanan Sambas yang berperan penting dalam perdagangan di pesisir barat Kalimantan sejak abad ke-18.'
    }
  },
  {
    slug: 'kalimantan-timur',
    nama: 'Kalimantan Timur',
    pulau: 'Kalimantan',
    warna: '#4A6B6B',
    ringkasan: 'Tanah Dayak dan Kutai dengan tradisi kerajaan, seni ukir, dan ritual adat yang masih dijaga.',
    pakaianAdat: {
      nama: 'Pakaian Adat Dayak & Kutai',
      deskripsi: 'Busana adat dengan hiasan manik-manik, bulu burung, dan kain tenun khas Dayak dan Kutai yang dipakai dalam upacara adat dan tarian.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Dayak & Kutai',
      deskripsi: 'Berbagai bahasa Dayak dan Kutai yang digunakan oleh suku-suku di Kalimantan Timur.'
    },
    rumahAdat: {
      nama: 'Rumah Panjang & Rumah Kutai',
      deskripsi: 'Bangunan panjang berbentuk panggung yang dihuni oleh beberapa keluarga besar, menjadi pusat kegiatan sosial dan ritual adat Dayak dan Kutai.'
    },
    senilukis: {
      nama: 'Motif Ukiran Kalimantan Timur',
      deskripsi: 'Ukiran kayu dengan pola geometris dan simbol flora-fauna yang menghiasi rumah panjang, perahu, dan peralatan adat.'
    },
    alatMusik: {
      nama: 'Gendang & Sape',
      deskripsi: 'Alat musik tradisional seperti gendang tabung dan sape yang dimainkan dalam upacara adat dan pertunjukan seni di Kalimantan Timur.'
    },
    makananTradicional: {
      nama: 'Nasi Bekepor',
      deskripsi: 'Nasi yang dimasak bersama minyak sayur, ikan asin, dan tomat dalam satu wadah, hidangan khas kesultanan Kutai Kalimantan Timur.'
    },
    laguDaerah: {
      nama: 'Indung-Indung',
      deskripsi: 'Lagu daerah Kalimantan Timur bernuansa Melayu yang mengisahkan kasih sayang seorang ibu kepada anaknya.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Kalimantan Timur adalah wilayah Kesultanan Kutai Kartanegara, penerus Kerajaan Kutai Martapura yang diyakini sebagai salah satu kerajaan Hindu tertua di Nusantara berdasarkan prasasti Yupa dari abad ke-4.'
    }
  },
  {
    slug: 'kalimantan-utara',
    nama: 'Kalimantan Utara',
    pulau: 'Kalimantan',
    warna: '#1E4A6B',
    ringkasan: 'Provinsi termuda di Kalimantan yang berbatasan langsung dengan Malaysia, kaya akan budaya Dayak dan Tidung pesisir.',
    pakaianAdat: {
      nama: 'Pakaian Adat Dayak Kenyah',
      deskripsi: 'Busana dengan hiasan manik-manik, bulu enggang, dan kain tenun yang dikenakan dalam upacara adat masyarakat Dayak Kenyah.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Tidung & Dayak Kenyah',
      deskripsi: 'Bahasa Tidung dituturkan masyarakat pesisir, sementara bahasa Dayak Kenyah dan Lundayeh digunakan di kawasan pedalaman.'
    },
    rumahAdat: {
      nama: 'Rumah Baloy',
      deskripsi: 'Rumah panggung besar khas suku Tidung dengan ruang-ruang terbagi menurut fungsi adat, digunakan untuk pertemuan dan upacara.'
    },
    senilukis: {
      nama: 'Motif Ukiran Dayak Kenyah',
      deskripsi: 'Ukiran kayu dan manik-manik dengan motif burung enggang dan naga, sarat makna spiritual dalam budaya Dayak Kenyah.'
    },
    alatMusik: {
      nama: 'Jatung Utang',
      deskripsi: 'Alat musik pukul dari kayu menyerupai xilofon, dimainkan dalam upacara adat dan penyambutan tamu suku Dayak Kenyah.'
    },
    makananTradicional: {
      nama: 'Kepiting Soka',
      deskripsi: 'Kepiting lunak yang digoreng renyah dengan bumbu khas, menjadi hidangan populer di kawasan pesisir Kalimantan Utara.'
    },
    laguDaerah: {
      nama: 'Bebalon',
      deskripsi: 'Lagu daerah yang tumbuh dari tradisi masyarakat pesisir dan pedalaman Kalimantan Utara, dinyanyikan dalam berbagai acara adat setempat.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Kalimantan Utara merupakan provinsi termuda di Pulau Kalimantan, resmi berdiri pada tahun 2013 setelah dipisahkan dari Provinsi Kalimantan Timur untuk mempercepat pembangunan di wilayah perbatasan dengan Malaysia.'
    }
  },
  {
    slug: 'sulawesi-utara',
    nama: 'Sulawesi Utara',
    pulau: 'Sulawesi',
    warna: '#6B4A4A',
    ringkasan: 'Tanah Minahasa dan Gorontalo dengan tradisi maritim, tarian perang, dan kuliner khas yang pedas.',
    pakaianAdat: {
      nama: 'Baju Bodo & Baju Adat Gorontalo',
      deskripsi: 'Busana adat Minahasa dengan baju bodo tipis dan sarung, serta busana adat Gorontalo dengan kain songket dan hiasan kepala.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Minahasa & Gorontalo',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Sulawesi Utara, memiliki kosakata yang kaya akan istilah maritim dan budaya lokal.'
    },
    rumahAdat: {
      nama: 'Rumah Walewangko & Rumah Adat Gorontalo',
      deskripsi: 'Rumah panggung dengan atap melengkung khas Minahasa dan rumah panggung Gorontalo yang mencerminkan arsitektur tradisional dan filosofi hidup masyarakat setempat.'
    },
    senilukis: {
      nama: 'Motif Ukiran Minahasa & Gorontalo',
      deskripsi: 'Ukiran kayu dengan pola geometris dan simbol flora-fauna yang menghiasi rumah panggung, perahu, dan peralatan adat.'
    },
    alatMusik: {
      nama: 'Kolintang & Gendang Gorontalo',
      deskripsi: 'Alat musik tradisional seperti kolintang (alat musik pukul) dan gendang yang dimainkan dalam upacara adat dan pertunjukan seni di Sulawesi Utara.'
    },
    makananTradicional: {
      nama: 'Tinutuan',
      deskripsi: 'Bubur Manado berisi campuran labu, jagung, dan aneka sayuran, disajikan dengan sambal roa sebagai sarapan khas Sulawesi Utara.'
    },
    laguDaerah: {
      nama: 'O Ina Ni Keke',
      deskripsi: 'Lagu rakyat Minahasa yang menceritakan kekhawatiran seorang ibu mencari anaknya yang belum pulang, dinyanyikan dengan melodi yang khas.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Sulawesi Utara dahulu menjadi wilayah persekutuan kerajaan-kerajaan Minahasa serta pusat perdagangan cengkih yang menarik minat Spanyol, Portugis, dan Belanda sejak abad ke-16.'
    }
  },
  {
    slug: 'gorontalo',
    nama: 'Gorontalo',
    pulau: 'Sulawesi',
    warna: '#8A6B1E',
    ringkasan: 'Provinsi dengan julukan Serambi Madinah, kaya akan tradisi adat bersendikan syarak dan seni sastra lisan.',
    pakaianAdat: {
      nama: 'Biliu & Mukuta',
      deskripsi: 'Busana pengantin adat Gorontalo dengan warna ungu dan kuning keemasan, mukuta sebagai mahkota pria dan biliu untuk perempuan.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Gorontalo',
      deskripsi: 'Bahasa dengan pengaruh Melayu dan Arab yang kuat, digunakan luas dalam kehidupan sehari-hari masyarakat Gorontalo.'
    },
    rumahAdat: {
      nama: 'Bandayo Poboide',
      deskripsi: 'Rumah panggung tradisional yang berfungsi sebagai balai pertemuan adat dan musyawarah para pemuka masyarakat Gorontalo.'
    },
    senilukis: {
      nama: 'Motif Sulaman Karawo',
      deskripsi: 'Kain bordir khas dengan teknik menghitung benang, membentuk pola geometris dan flora yang rumit dan halus.'
    },
    alatMusik: {
      nama: 'Polopalo',
      deskripsi: 'Alat musik dari bambu yang dipukulkan ke lutut atau telapak tangan, menghasilkan bunyi khas dalam pertunjukan rakyat Gorontalo.'
    },
    makananTradicional: {
      nama: 'Binte Biluhuta',
      deskripsi: 'Sup jagung manis berkuah bening dengan campuran ikan cakalang, kelapa parut, dan cabai rawit khas Gorontalo.'
    },
    laguDaerah: {
      nama: 'Dabu-Dabu',
      deskripsi: 'Lagu daerah Gorontalo yang menggambarkan keceriaan dan kekayaan kuliner khas daerah dalam liriknya.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Gorontalo dahulu merupakan pusat Kesultanan Gorontalo yang dikenal dengan julukan Serambi Madinah karena kuatnya tradisi Islam. Provinsi ini resmi berdiri sendiri pada tahun 2000 setelah dipisahkan dari Provinsi Sulawesi Utara.'
    }
  },
  {
    slug: 'sulawesi-tengah',
    nama: 'Sulawesi Tengah',
    pulau: 'Sulawesi',
    warna: '#4A6B6B',
    ringkasan: 'Tanah Kaili dan Lore dengan tradisi maritim, tarian perang, dan kuliner khas yang pedas.',
    pakaianAdat: {
      nama: 'Baju Bodo & Baju Adat Lore',
      deskripsi: 'Busana adat Kaili dengan baju bodo tipis dan sarung, serta busana adat Lore dengan kain songket dan hiasan kepala.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Kaili & Lore',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Sulawesi Tengah, memiliki kosakata yang kaya akan istilah maritim dan budaya lokal.'
    },
    rumahAdat: {
      nama: 'Rumah Walewangko & Rumah Adat Lore',
      deskripsi: 'Rumah panggung dengan atap melengkung khas Kaili dan rumah panggung Lore yang mencerminkan arsitektur tradisional dan filosofi hidup masyarakat setempat.'
    },
    senilukis: {
      nama: 'Motif Ukiran Kaili & Lore',
      deskripsi: 'Ukiran kayu dengan pola geometris dan simbol flora-fauna yang menghiasi rumah panggung, perahu, dan peralatan adat.'
    },
    alatMusik: {
      nama: 'Kolintang & Gendang Lore',
      deskripsi: 'Alat musik tradisional seperti kolintang (alat musik pukul) dan gendang yang dimainkan dalam upacara adat dan pertunjukan seni di Sulawesi Tengah.'
    },
    makananTradicional: {
      nama: 'Kaledo',
      deskripsi: 'Sup kaki sapi berkuah asam pedas yang dimasak lama hingga empuk, hidangan khas masyarakat Kaili di Sulawesi Tengah.'
    },
    laguDaerah: {
      nama: 'Tondok Kadadiangku',
      deskripsi: 'Lagu daerah yang mengungkapkan rasa cinta dan kebanggaan terhadap kampung halaman masyarakat Sulawesi Tengah.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Sulawesi Tengah dahulu terdiri dari berbagai kerajaan lokal seperti Kaili dan wilayah dataran tinggi Lore yang menyimpan situs megalitik kuno di Lembah Bada.'
    }
  },
  {
    slug: 'sulawesi-selatan',
    nama: 'Sulawesi Selatan',
    pulau: 'Sulawesi',
    warna: '#7A1E2E',
    ringkasan: 'Tanah para pelaut Bugis-Makassar dengan tradisi maritim dan kapal phinisi yang legendaris.',
    pakaianAdat: {
      nama: 'Baju Bodo',
      deskripsi: 'Busana perempuan berlengan pendek dari kain tipis dengan warna mencolok, salah satu busana tertua di Nusantara.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Bugis & Makassar',
      deskripsi: 'Dua bahasa utama dengan aksara lontara sendiri, digunakan dalam naskah kuno seperti I La Galigo.'
    },
    rumahAdat: {
      nama: 'Rumah Tongkonan / Rumah Panggung Bugis',
      deskripsi: 'Rumah panggung kayu dengan atap pelana melengkung, ruang terbagi berdasarkan fungsi sosial dan spiritual keluarga.'
    },
    senilukis: {
      nama: 'Ukiran Toraja',
      deskripsi: 'Ukiran geometris berwarna hitam, merah, kuning, dan putih yang menghiasi rumah Tongkonan, tiap motif memiliki makna simbolis.'
    },
    alatMusik: {
      nama: 'Kacaping',
      deskripsi: 'Alat musik petik berbentuk perahu kecil yang biasa mengiringi nyanyian dan syair kelong pada acara adat Makassar.'
    },
    makananTradicional: {
      nama: 'Coto Makassar',
      deskripsi: 'Sup jeroan dan daging sapi berkuah kacang tanah yang kaya rempah, disantap bersama ketupat sebagai hidangan khas Makassar.'
    },
    laguDaerah: {
      nama: 'Anging Mamiri',
      deskripsi: 'Lagu Makassar yang menggambarkan kerinduan lewat kiasan angin sepoi-sepoi, menjadi salah satu lagu daerah paling populer dari Sulawesi Selatan.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Sulawesi Selatan adalah pusat Kerajaan Gowa-Tallo dan Kerajaan Bone yang berjaya sebagai kekuatan maritim penting sebelum tunduk kepada VOC melalui Perjanjian Bongaya tahun 1667.'
    }
  },
  {
    slug: 'sulawesi-tenggara',
    nama: 'Sulawesi Tenggara',
    pulau: 'Sulawesi',
    warna: '#6B4A2E',
    ringkasan: 'Tanah Buton dan Muna dengan tradisi maritim, tarian perang, dan kuliner khas yang pedas.',
    pakaianAdat: {
      nama: 'Baju Bodo & Baju Adat Buton',
      deskripsi: 'Busana adat Buton dengan baju bodo tipis dan sarung, serta busana adat Muna dengan kain songket dan hiasan kepala.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Buton & Muna',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Sulawesi Tenggara, memiliki kosakata yang kaya akan istilah maritim dan budaya lokal.'
    },
    rumahAdat: {
      nama: 'Rumah Walewangko & Rumah Adat Muna',
      deskripsi: 'Rumah panggung dengan atap melengkung khas Buton dan rumah panggung Muna yang mencerminkan arsitektur tradisional dan filosofi hidup masyarakat setempat.'
    },
    senilukis: {
      nama: 'Motif Ukiran Buton & Muna',
      deskripsi: 'Ukiran kayu dengan pola geometris dan simbol flora-fauna yang menghiasi rumah panggung, perahu, dan peralatan adat.'
    },
    alatMusik: {
      nama: 'Kolintang & Gendang Muna',
      deskripsi: 'Alat musik tradisional seperti kolintang (alat musik pukul) dan gendang yang dimainkan dalam upacara adat dan pertunjukan seni di Sulawesi Tenggara.'
    },
    makananTradicional: {
      nama: 'Sinonggi',
      deskripsi: 'Makanan pokok dari sagu yang diolah kental menyerupai lem, disantap bersama kuah ikan atau sayur khas suku Tolaki.'
    },
    laguDaerah: {
      nama: 'Peia Tawa-Tawa',
      deskripsi: 'Lagu daerah yang biasa dinyanyikan dalam upacara penyambutan tamu kehormatan masyarakat Sulawesi Tenggara.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Sulawesi Tenggara dahulu menjadi pusat Kesultanan Buton, salah satu kerajaan Islam berpengaruh di kawasan timur Nusantara dengan konstitusi tertulis bernama Martabat Tujuh.'
    }
  },
  {
    slug: 'sulawesi-barat',
    nama: 'Sulawesi Barat',
    pulau: 'Sulawesi',
    warna: '#6B4A4A',
    ringkasan: 'Tanah Mandar dan Toraja dengan tradisi maritim, tarian perang, dan kuliner khas yang pedas.',
    pakaianAdat: {
      nama: 'Baju Bodo & Baju Adat Mandar',
      deskripsi: 'Busana adat Mandar dengan baju bodo tipis dan sarung, serta busana adat Toraja dengan kain songket dan hiasan kepala.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Mandar & Toraja',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Sulawesi Barat, memiliki kosakata yang kaya akan istilah maritim dan budaya lokal.'
    },
    rumahAdat: {
      nama: 'Rumah Walewangko & Rumah Adat Toraja',
      deskripsi: 'Rumah panggung dengan atap melengkung khas Mandar dan rumah panggung Toraja yang mencerminkan arsitektur tradisional dan filosofi hidup masyarakat setempat.'
    },
    senilukis: {
      nama: 'Motif Ukiran Mandar & Toraja',
      deskripsi: 'Ukiran kayu dengan pola geometris dan simbol flora-fauna yang menghiasi rumah panggung, perahu, dan peralatan adat.'
    },
    alatMusik: {
      nama: 'Kolintang & Gendang Toraja',
      deskripsi: 'Alat musik tradisional seperti kolintang (alat musik pukul) dan gendang yang dimainkan dalam upacara adat dan pertunjukan seni di Sulawesi Barat.'
    },
    makananTradicional: {
      nama: 'Jepa',
      deskripsi: 'Roti pipih dari singkong parut yang dipanggang di atas tungku tanah liat, menjadi makanan pokok khas suku Mandar Sulawesi Barat.'
    },
    laguDaerah: {
      nama: 'Tenggang-Tenggang Lopi',
      deskripsi: 'Lagu daerah Mandar yang bertema kelautan, menggambarkan kehidupan masyarakat pelaut Sulawesi Barat.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Sulawesi Barat dahulu menjadi wilayah konfederasi kerajaan-kerajaan Mandar yang dikenal sebagai pelaut ulung. Provinsi ini resmi berdiri sendiri pada tahun 2004 setelah dipisahkan dari Provinsi Sulawesi Selatan.'
    }
  },
  {
    slug: 'nusa-tenggara-timur',
    nama: 'Nusa Tenggara Timur',
    pulau: 'Nusa Tenggara',
    warna: '#8A4A1E',
    ringkasan: 'Gugusan kepulauan dengan tenun ikat khas tiap pulau dan tradisi megalitik yang masih terjaga.',
    pakaianAdat: {
      nama: 'Tenun Ikat NTT',
      deskripsi: 'Kain tenun dengan motif berbeda di tiap pulau seperti Sumba, Flores, dan Timor, ditenun dengan teknik ikat pakan yang rumit.'
    },
    bahasaDaerah: {
      nama: 'Rumpun Bahasa NTT',
      deskripsi: 'Meliputi bahasa Dawan, Manggarai, dan Sumba, mencerminkan keragaman etnis di antara ratusan pulau wilayah ini.'
    },
    rumahAdat: {
      nama: 'Mbaru Niang',
      deskripsi: 'Rumah adat berbentuk kerucut tinggi khas Wae Rebo, Flores, tersusun lima lantai dengan fungsi berbeda tiap tingkatnya.'
    },
    senilukis: {
      nama: 'Motif Tenun Sumba',
      deskripsi: 'Corak tenun dengan gambar kuda, manusia, dan pohon kehidupan, sarat cerita leluhur dan status sosial pemakainya.'
    },
    alatMusik: {
      nama: 'Sasando',
      deskripsi: 'Alat musik petik dari daun lontar dan bambu asal Pulau Rote, menghasilkan suara khas menyerupai gitar akustik.'
    },
    makananTradicional: {
      nama: "Se'i",
      deskripsi: 'Daging sapi atau babi yang diasap dengan kayu khusus hingga matang perlahan, menghasilkan aroma dan rasa smoky khas Pulau Timor.'
    },
    laguDaerah: {
      nama: 'Bolelebo',
      deskripsi: 'Lagu daerah dari Pulau Timor yang dinyanyikan dalam suasana gembira, sering mengiringi tarian pergaulan masyarakat NTT.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Nusa Tenggara Timur dahulu menjadi ajang perebutan pengaruh antara Portugis dan VOC Belanda, terutama di Pulau Flores dan Timor, meninggalkan jejak budaya dan agama Katolik yang kuat hingga kini.'
    }
  },
  {
    slug: 'maluku',
    nama: 'Maluku',
    pulau: 'Maluku',
    warna: '#4A6B2E',
    ringkasan: 'Kepulauan rempah dengan sejarah perdagangan global, kaya akan musik tradisional dan tarian perang.',
    pakaianAdat: {
      nama: 'Baju Cele',
      deskripsi: 'Busana adat Maluku yang dikenakan dalam upacara adat dan pernikahan, biasanya berwarna cerah dengan hiasan manik-manik.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Ambon & Ternate',
      deskripsi: 'Bahasa Melayu Ambon sebagai lingua franca, serta bahasa lokal seperti Ternate dan Tidore yang masih digunakan di pulau-pulau sekitarnya.'
    },
    rumahAdat: {
      nama: 'Rumah Baileo',
      deskripsi: 'Bangunan komunitas besar berbentuk panggung dengan atap tinggi, digunakan untuk pertemuan adat dan upacara keagamaan.'
    },
    senilukis: {
      nama: 'Motif Ukiran Maluku',
      deskripsi: 'Ukiran kayu dengan pola flora-fauna yang menghiasi rumah adat dan perahu tradisional, mencerminkan hubungan masyarakat dengan laut.'
    },
    alatMusik: {
      nama: 'Tifa Maluku',
      deskripsi: 'Gendang tabung yang dimainkan dengan cara dipukul, menjadi pengiring tarian perang dan upacara adat di Maluku.'
    },
    makananTradicional: {
      nama: 'Papeda',
      deskripsi: 'Bubur sagu bertekstur kenyal yang disantap dengan kuah ikan kuning berbumbu asam, menjadi makanan pokok masyarakat Maluku.'
    },
    laguDaerah: {
      nama: 'Rasa Sayange',
      deskripsi: 'Lagu rakyat Maluku yang riang dan penuh kehangatan, menjadi salah satu lagu daerah paling dikenal luas di Indonesia bahkan mancanegara.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Maluku dikenal sebagai Kepulauan Rempah yang menjadi incaran bangsa Portugis, Spanyol, Belanda, dan Inggris sejak abad ke-16 karena kekayaan cengkih dan pala, menjadikannya titik awal kolonialisme Eropa di Nusantara.'
    }
  },
  {
    slug: 'maluku-utara',
    nama: 'Maluku Utara',
    pulau: 'Maluku',
    warna: '#4A6B2E',
    ringkasan: 'Kepulauan rempah dengan sejarah perdagangan global, kaya akan musik tradisional dan tarian perang.',
    pakaianAdat: {
      nama: 'Baju Cele',
      deskripsi: 'Busana adat Maluku yang dikenakan dalam upacara adat dan pernikahan, biasanya berwarna cerah dengan hiasan manik-manik.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Ternate & Tidore',
      deskripsi: 'Bahasa Melayu Ambon sebagai lingua franca, serta bahasa lokal seperti Ternate dan Tidore yang masih digunakan di pulau-pulau sekitarnya.'
    },
    rumahAdat: {
      nama: 'Rumah Baileo',
      deskripsi: 'Bangunan komunitas besar berbentuk panggung dengan atap tinggi, digunakan untuk pertemuan adat dan upacara keagamaan.'
    },
    senilukis: {
      nama: 'Motif Ukiran Maluku',
      deskripsi: 'Ukiran kayu dengan pola flora-fauna yang menghiasi rumah adat dan perahu tradisional, mencerminkan hubungan masyarakat dengan laut.'
    },
    alatMusik: {
      nama: 'Tifa Maluku',
      deskripsi: 'Gendang tabung yang dimainkan dengan cara dipukul, menjadi pengiring tarian perang dan upacara adat di Maluku.'
    },
    makananTradicional: {
      nama: 'Gohu Ikan',
      deskripsi: 'Ikan tuna mentah yang dilumuri bumbu rica dan minyak kelapa panas, sering disebut sebagai versi Ternate dari sashimi.'
    },
    laguDaerah: {
      nama: 'Borero',
      deskripsi: 'Lagu daerah Maluku Utara yang biasa dinyanyikan dalam suasana kebersamaan dan perayaan adat masyarakat Ternate dan sekitarnya.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Maluku Utara dahulu menjadi pusat Kesultanan Ternate dan Kesultanan Tidore, dua kerajaan maritim yang bersaing memperebutkan pengaruh perdagangan cengkih dunia. Provinsi ini resmi berdiri sendiri pada tahun 1999 setelah dipisahkan dari Provinsi Maluku.'
    }
  },
  {
    slug: 'papua',
    nama: 'Papua',
    pulau: 'Papua',
    warna: '#1E4A2E',
    ringkasan: 'Wilayah paling timur Indonesia dengan keragaman suku, bahasa, dan seni ukir yang sangat kaya.',
    pakaianAdat: {
      nama: 'Koteka & Rok Rumbai',
      deskripsi: 'Busana tradisional berbahan alami seperti kulit kayu, daun sagu, dan bulu burung cendrawasih untuk hiasan kepala pada upacara adat.'
    },
    bahasaDaerah: {
      nama: 'Rumpun Bahasa Papua',
      deskripsi: 'Terdiri dari ratusan bahasa daerah berbeda seperti Dani, Biak, dan Asmat yang menjadikan Papua wilayah paling multibahasa di Indonesia.'
    },
    rumahAdat: {
      nama: 'Honai',
      deskripsi: 'Rumah bundar beratap jerami dengan dinding kayu tersusun rapat, dirancang menahan hawa dingin dataran tinggi pegunungan.'
    },
    senilukis: {
      nama: 'Ukiran Asmat',
      deskripsi: 'Ukiran kayu tiga dimensi dengan motif leluhur dan alam, dianggap sebagai media penghubung dunia manusia dan roh nenek moyang.'
    },
    alatMusik: {
      nama: 'Tifa',
      deskripsi: 'Gendang tabung berbahan kayu dan kulit hewan, dimainkan dalam hampir setiap upacara adat dan tarian perang Papua.'
    },
    makananTradicional: {
      nama: 'Papeda',
      deskripsi: 'Bubur sagu kenyal yang disantap dengan kuah ikan kuning berbumbu asam, menjadi makanan pokok masyarakat Papua.'
    },
    laguDaerah: {
      nama: 'Yamko Rambe Yamko',
      deskripsi: 'Lagu daerah Papua yang terkenal luas di seluruh Indonesia, menggambarkan semangat juang dengan irama yang riang dan mudah diingat.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Papua, dahulu dikenal sebagai Nugini Belanda, resmi bergabung dengan wilayah Republik Indonesia setelah pelaksanaan Penentuan Pendapat Rakyat (Pepera) pada tahun 1969.'
    }
  },
  {
    slug: 'papua-pegunungan',
    nama: 'Papua Pegunungan',
    pulau: 'Papua',
    warna: '#2E5C4A',
    ringkasan: 'Wilayah pegunungan tengah Papua yang terkenal dengan suku Dani, Lani, dan Yali serta tradisi perang suku dan festival budaya.',
    pakaianAdat: {
      nama: 'Koteka & Hiasan Bulu',
      deskripsi: 'Pria mengenakan koteka (penutup alat kelamin) dan hiasan bulu burung cendrawasih, perempuan mengenakan rok rumbai dari serat alam.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Dani & Lani',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku pegunungan, memiliki sistem kata kerja yang kompleks dan kosakata yang kaya akan istilah alam.'
    },
    rumahAdat: {
      nama: 'Honai Pegunungan',
      deskripsi: 'Rumah bundar beratap jerami yang dibangun di dataran tinggi, berfungsi sebagai tempat tinggal dan pusat kegiatan sosial.'
    },
    senilukis: {
      nama: 'Ukiran dan Lukisan Tubuh',
      deskripsi: 'Motif ukiran pada peralatan rumah dan lukisan tubuh yang melambangkan status sosial, keberanian, dan identitas suku.'
    },
    alatMusik: {
      nama: 'Tifa Pegunungan',
      deskripsi: 'Gendang tabung yang dimainkan dalam upacara adat, tarian perang, dan festival budaya di wilayah pegunungan Papua.'
    },
    makananTradicional: {
      nama: 'Bakar Batu',
      deskripsi: 'Tradisi memasak daging babi dan umbi-umbian menggunakan batu panas yang dipendam dalam tanah, menjadi ritual syukur masyarakat pegunungan Papua.'
    },
    laguDaerah: {
      nama: 'Jayawijaya Hanorasuok',
      deskripsi: 'Lagu daerah yang menggambarkan kemegahan pegunungan Jayawijaya sebagai identitas alam masyarakat pegunungan tengah Papua.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Papua Pegunungan resmi berdiri sebagai provinsi pada tahun 2022 berdasarkan Undang-Undang Nomor 16 Tahun 2022 hasil pemekaran dari Provinsi Papua. Provinsi ini unik karena menjadi satu-satunya provinsi di Indonesia yang tidak memiliki garis pantai.'
    }
  },
  {
    slug: 'papua-barat',
    nama: 'Papua Barat',
    pulau: 'Papua',
    warna: '#2E4A6B',
    ringkasan: 'Wilayah barat Pulau Papua dengan suku Arfak, Maybrat, dan Manokwari yang memiliki tradisi seni ukir dan tarian perang.',
    pakaianAdat: {
      nama: 'Koteka & Hiasan Kepala',
      deskripsi: 'Pria mengenakan koteka dan hiasan kepala dari bulu burung cendrawasih, perempuan mengenakan rok rumbai dari serat alam.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Arfak & Maybrat',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Papua Barat, memiliki kosakata yang kaya akan istilah alam dan budaya.'
    },
    rumahAdat: {
      nama: 'Rumah Honai Papua Barat',
      deskripsi: 'Rumah bundar beratap jerami yang dibangun di dataran tinggi, berfungsi sebagai tempat tinggal dan pusat kegiatan sosial masyarakat setempat.'
    },
    senilukis: {
      nama: 'Ukiran dan Lukisan Tubuh Papua Barat',
      deskripsi: 'Motif ukiran pada peralatan rumah dan lukisan tubuh yang melambangkan status sosial, keberanian, dan identitas suku di Papua Barat.'
    },
    alatMusik: {
      nama: 'Tifa Papua Barat',
      deskripsi: 'Gendang tabung yang dimainkan dalam upacara adat, tarian perang, dan festival budaya di wilayah Papua Barat.'
    },
    makananTradicional: {
      nama: 'Papeda',
      deskripsi: 'Bubur sagu kenyal yang disantap dengan kuah ikan kuning berbumbu asam, menjadi makanan pokok masyarakat Papua Barat.'
    },
    laguDaerah: {
      nama: 'Apuse',
      deskripsi: 'Lagu daerah Papua yang berisi ucapan perpisahan seorang cucu kepada neneknya, dinyanyikan dalam bahasa Biak dengan melodi yang menyentuh.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Papua Barat, dahulu bernama Irian Jaya Barat, resmi berdiri sebagai provinsi pada tahun 1999 berdasarkan Undang-Undang Nomor 45 Tahun 1999 hasil pemekaran dari Provinsi Papua.'
    }
  },
  {
    slug: 'papua-tengah',
    nama: 'Papua Tengah',
    pulau: 'Papua',
    warna: '#2E4A6B',
    ringkasan: 'Wilayah tengah Pulau Papua dengan suku Mee, Moni, dan Nduga yang memiliki tradisi seni ukir dan tarian perang.',
    pakaianAdat: {
      nama: 'Koteka & Hiasan Kepala',
      deskripsi: 'Pria mengenakan koteka dan hiasan kepala dari bulu burung cendrawasih, perempuan mengenakan rok rumbai dari serat alam.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Mee & Moni',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Papua Tengah, memiliki kosakata yang kaya akan istilah alam dan budaya.'
    },
    rumahAdat: {
      nama: 'Rumah Honai Papua Tengah',
      deskripsi: 'Rumah bundar beratap jerami yang dibangun di dataran tinggi, berfungsi sebagai tempat tinggal dan pusat kegiatan sosial masyarakat setempat.'
    },
    senilukis: {
      nama: 'Ukiran dan Lukisan Tubuh Papua Tengah',
      deskripsi: 'Motif ukiran pada peralatan rumah dan lukisan tubuh yang melambangkan status sosial, keberanian, dan identitas suku di Papua Tengah.'
    },
    alatMusik: {
      nama: 'Tifa Papua Tengah',
      deskripsi: 'Gendang tabung yang dimainkan dalam upacara adat, tarian perang, dan festival budaya di wilayah Papua Tengah.'
    },
    makananTradicional: {
      nama: 'Papeda',
      deskripsi: 'Bubur sagu kenyal yang disantap dengan kuah ikan kuning berbumbu asam, menjadi makanan pokok masyarakat Papua Tengah.'
    },
    laguDaerah: {
      nama: 'Akai Bipa Mare',
      deskripsi: 'Lagu daerah masyarakat Papua Tengah yang mengiringi upacara adat dan kegiatan kebersamaan warga setempat.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Papua Tengah resmi berdiri sebagai provinsi pada tahun 2022 berdasarkan Undang-Undang Nomor 15 Tahun 2022 hasil pemekaran dari Provinsi Papua, meliputi wilayah pertambangan Mimika dan dataran tinggi Paniai.'
    }
  },
  {
    slug: 'papua-selatan',
    nama: 'Papua Selatan',
    pulau: 'Papua',
    warna: '#2E4A6B',
    ringkasan: 'Wilayah selatan Pulau Papua dengan suku Asmat, Marind, dan Sawi yang memiliki tradisi seni ukir dan tarian perang.',
    pakaianAdat: {
      nama: 'Koteka & Hiasan Kepala',
      deskripsi: 'Pria mengenakan koteka dan hiasan kepala dari bulu burung cendrawasih, perempuan mengenakan rok rumbai dari serat alam.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Asmat & Marind',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Papua Selatan, memiliki kosakata yang kaya akan istilah alam dan budaya.'
    },
    rumahAdat: {
      nama: 'Rumah Honai Papua Selatan',
      deskripsi: 'Rumah bundar beratap jerami yang dibangun di dataran tinggi, berfungsi sebagai tempat tinggal dan pusat kegiatan sosial masyarakat setempat.'
    },
    senilukis: {
      nama: 'Ukiran dan Lukisan Tubuh Papua Selatan',
      deskripsi: 'Motif ukiran pada peralatan rumah dan lukisan tubuh yang melambangkan status sosial, keberanian, dan identitas suku di Papua Selatan.'
    },
    alatMusik: {
      nama: 'Tifa Papua Selatan',
      deskripsi: 'Gendang tabung yang dimainkan dalam upacara adat, tarian perang, dan festival budaya di wilayah Papua Selatan.'
    },
    makananTradicional: {
      nama: 'Papeda',
      deskripsi: 'Bubur sagu kenyal yang disantap dengan kuah ikan kuning berbumbu asam, menjadi makanan pokok masyarakat Papua Selatan.'
    },
    laguDaerah: {
      nama: 'Ayua Nok',
      deskripsi: 'Lagu daerah masyarakat Papua Selatan yang mencerminkan kehidupan di kawasan rawa dan hutan sagu wilayah ini.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Papua Selatan resmi berdiri sebagai provinsi pada 25 Juli 2022 berdasarkan Undang-Undang Nomor 14 Tahun 2022, setelah diperjuangkan masyarakat setempat sejak tahun 2002. Wilayahnya kaya akan hutan rawa dan pohon sagu yang menjadi sumber makanan pokok penduduk.'
    }
  },
  {
    slug: 'papua-barat-daya',
    nama: 'Papua Barat Daya',
    pulau: 'Papua',
    warna: '#2E4A6B',
    ringkasan: 'Wilayah barat daya Pulau Papua dengan suku Moi, Maybrat, dan Raja Ampat yang memiliki tradisi seni ukir dan tarian perang.',
    pakaianAdat: {
      nama: 'Koteka & Hiasan Kepala',
      deskripsi: 'Pria mengenakan koteka dan hiasan kepala dari bulu burung cendrawasih, perempuan mengenakan rok rumbai dari serat alam.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Moi & Maybrat',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Papua Barat Daya, memiliki kosakata yang kaya akan istilah alam dan budaya.'
    },
    rumahAdat: {
      nama: 'Rumah Honai Papua Barat Daya',
      deskripsi: 'Rumah bundar beratap jerami yang dibangun di dataran tinggi, berfungsi sebagai tempat tinggal dan pusat kegiatan sosial masyarakat setempat.'
    },
    senilukis: {
      nama: 'Ukiran dan Lukisan Tubuh Papua Barat Daya',
      deskripsi: 'Motif ukiran pada peralatan rumah dan lukisan tubuh yang melambangkan status sosial, keberanian, dan identitas suku di Papua Barat Daya.'
    },
    alatMusik: {
      nama: 'Tifa Papua Barat Daya',
      deskripsi: 'Gendang tabung yang dimainkan dalam upacara adat, tarian perang, dan festival budaya di wilayah Papua Barat Daya.'
    },
    makananTradicional: {
      nama: 'Papeda',
      deskripsi: 'Bubur sagu kenyal yang disantap dengan kuah ikan kuning berbumbu asam, menjadi makanan pokok masyarakat Papua Barat Daya.'
    },
    laguDaerah: {
      nama: 'Apuse',
      deskripsi: 'Lagu daerah rumpun Papua yang juga dikenal luas di wilayah Papua Barat Daya, berisi ucapan perpisahan yang menyentuh dalam bahasa Biak.'
    },
    sejarah: {
      nama: 'Sejarah Singkat',
      deskripsi: 'Papua Barat Daya merupakan provinsi termuda di Indonesia, resmi berdiri pada 17 November 2022 berdasarkan Undang-Undang Nomor 29 Tahun 2022 setelah diperjuangkan sejak deklarasi pertama di Sorong pada tahun 2007.'
    }
  }
]

export function getProvinsiBySlug(slug) {
  return provinsiList.find((p) => p.slug === slug)
}

export function getKategoriBySlug(slug) {
  return kategoriList.find((k) => k.slug === slug)
}