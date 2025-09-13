function _i18n_translate(translations, lang) {
  const result = translations[lang];
  if (result) {
    return result;
  } else {
    return translations['en'];
  }
}

function i18n_load_onlyone_photo_hint(lang) {
  const translations = {
    "en": "Load only 1 photo at a time.",
    "ar": "حمّل صورة واحدة فقط في كل مرة.",
    "cn": "一次仅加载一张照片。",
    "de": "Laden Sie jeweils nur 1 Foto.",
    "es": "Cargue solo 1 foto a la vez.",
    "fr": "Chargez une seule photo à la fois.",
    "id": "Muat hanya 1 foto sekaligus.",
    "it": "Carica solo 1 foto alla volta.",
    "ja": "一度に1枚の写真のみを読み込んでください。",
    "ko": "한 번에 사진 1장만 로드하세요.",
    "pl": "Załaduj tylko 1 zdjęcie naraz.",
    "pt": "Carregue apenas 1 foto de cada vez.",
    "tw": "一次僅加載一張照片。"
  };
  return _i18n_translate(translations, lang);
}

function i18n_couldnot_load_file(lang) {
  const translations = {
    "en": "Could not load the file.",
    "ar": "تعذر تحميل الملف.",
    "cn": "无法加载文件。",
    "de": "Die Datei konnte nicht geladen werden.",
    "es": "No se pudo cargar el archivo.",
    "fr": "Impossible de charger le fichier.",
    "id": "Tidak dapat memuat file.",
    "it": "Impossibile caricare il file.",
    "ja": "ファイルを読み込めませんでした。",
    "ko": "파일을 로드할 수 없습니다.",
    "pl": "Nie można załadować pliku.",
    "pt": "Não foi possível carregar o arquivo.",
    "tw": "無法加載檔案。"
  };
  return _i18n_translate(translations, lang);
}
function i18n_image_cropping_is_turned_off(lang) {
  const translations = {
    "en": "Image cropping is turned off.",
    "ar": "تم إيقاف اقتصاص الصورة.",
    "cn": "已关闭图片裁剪。",
    "de": "Bildzuschnitt ist ausgeschaltet.",
    "es": "El recorte de imágenes está desactivado.",
    "fr": "Le recadrage de l'image est désactivé.",
    "id": "Pemotongan gambar dimatikan.",
    "it": "Il ritaglio delle immagini è disattivato.",
    "ja": "画像のトリミングはオフになっています。",
    "ko": "이미지 자르기가 꺼졌습니다.",
    "pl": "Kadrowanie obrazu jest wyłączone.",
    "pt": "O recorte de imagem está desativado.",
    "tw": "已關閉圖片裁剪。"
  };
  return _i18n_translate(translations, lang);
}
function i18n_unexpected_error(lang) {
  const translations = {
    "en": "Unexpected error happened.",
    "ar": "حدث خطأ غير متوقع.",
    "cn": "发生了意外错误。",
    "de": "Ein unerwarteter Fehler ist aufgetreten.",
    "es": "Ocurrió un error inesperado.",
    "fr": "Une erreur inattendue s'est produite.",
    "id": "Terjadi kesalahan yang tidak terduga.",
    "it": "Si è verificato un errore imprevisto.",
    "ja": "予期しないエラーが発生しました。",
    "ko": "예기치 않은 오류가 발생했습니다.",
    "pl": "Wystąpił nieoczekiwany błąd.",
    "pt": "Ocorreu um erro inesperado.",
    "tw": "發生了意外錯誤。"
  };
  return _i18n_translate(translations, lang);
}
function i18n_batch_job_is_completed(lang) {
  const translations = {
    "en": "Your batch job is completed.",
    "ar": "تم اكتمال وظيفتك الدفعية.",
    "zh-cn": "您的批处理作业已完成。",
    "de": "Ihr Batch-Job ist abgeschlossen.",
    "es": "Su trabajo por lotes ha sido completado.",
    "fr": "Votre tâche par lots est terminée.",
    "id": "Pekerjaan batch Anda telah selesai.",
    "it": "Il tuo lavoro batch è completato.",
    "ja": "バッチジョブが完了しました。",
    "ko": "배치 작업이 완료되었습니다.",
    "pl": "Twoje zadanie wsadowe zostało ukończone.",
    "pt": "Seu trabalho em lote foi concluído.",
    "zh-tw": "您的批次作業已完成。"
  };
  return _i18n_translate(translations, lang);
}
function i18n_higher_resolution_alert(img, lang) {
  const translations = {
    "en": `Please use a photo of a higher resolution.\nPortraitArt works best with high quality photos. Loaded photo's resolution is too low (${img.naturalWidth}x${img.naturalHeight}).`,
    "ar": `تنسيق الصورة غير مدعوم. يرجى استخدام صورة ذات دقة أعلى.\nيعمل PortraitArt بشكل أفضل مع الصور عالية الجودة. دقة الصورة المحملة منخفضة جدًا (${img.naturalWidth}x${img.naturalHeight}).`,
    "cn": `不支持的图像格式。请使用分辨率更高的照片。\nPortraitArt 在高质量照片上效果最佳。加载的照片分辨率太低（${img.naturalWidth}x${img.naturalHeight}）。`,
    "de": `Nicht unterstütztes Bildformat. Bitte verwenden Sie ein Foto mit höherer Auflösung.\nPortraitArt funktioniert am besten mit hochwertigen Fotos. Die Auflösung des geladenen Fotos ist zu niedrig (${img.naturalWidth}x${img.naturalHeight}).`,
    "es": `Formato de imagen no compatible. Por favor, use una foto de mayor resolución.\nPortraitArt funciona mejor con fotos de alta calidad. La resolución de la foto cargada es demasiado baja (${img.naturalWidth}x${img.naturalHeight}).`,
    "fr": `Format d'image non pris en charge. Veuillez utiliser une photo de résolution plus élevée.\nPortraitArt fonctionne mieux avec des photos de haute qualité. La résolution de la photo chargée est trop basse (${img.naturalWidth}x${img.naturalHeight}).`,
    "id": `Format gambar tidak didukung. Harap gunakan foto dengan resolusi lebih tinggi.\nPortraitArt bekerja paling baik dengan foto berkualitas tinggi. Resolusi foto yang dimuat terlalu rendah (${img.naturalWidth}x${img.naturalHeight}).`,
    "it": `Formato immagine non supportato. Si prega di utilizzare una foto con una risoluzione più alta.\nPortraitArt funziona meglio con foto di alta qualità. La risoluzione della foto caricata è troppo bassa (${img.naturalWidth}x${img.naturalHeight}).`,
    "ja": `サポートされていない画像形式です。より高解像度の写真を使用してください。\nPortraitArtは高品質な写真で最適に動作します。読み込んだ写真の解像度が低すぎます（${img.naturalWidth}x${img.naturalHeight}）。`,
    "ko": `지원되지 않는 이미지 형식입니다. 더 높은 해상도의 사진을 사용하세요.\nPortraitArt는 고품질 사진에서 가장 잘 작동합니다. 로드된 사진의 해상도가 너무 낮습니다 (${img.naturalWidth}x${img.naturalHeight})。`,
    "pl": `Nieobsługiwany format obrazu. Proszę użyć zdjęcia o wyższej rozdzielczości.\nPortraitArt najlepiej działa z wysokiej jakości zdjęciami. Rozdzielczość wczytanego zdjęcia jest zbyt niska (${img.naturalWidth}x${img.naturalHeight}).`,
    "pt": `Formato de imagem não suportado. Por favor, use uma foto de maior resolução.\nO PortraitArt funciona melhor com fotos de alta qualidade. A resolução da foto carregada é muito baixa (${img.naturalWidth}x${img.naturalHeight}).`,
    "tw": `不支援的圖像格式。請使用解析度更高的照片。\nPortraitArt 在高品質照片中效果最佳。加載的照片解析度太低（${img.naturalWidth}x${img.naturalHeight}）。`
  }
  return _i18n_translate(translations, lang);
}
function i18n_image_format_alert(lang) {
  const translations = {
    "en": 'Unsupported image format. Please use JPEG/PNG/WEBP images.',
    "ar": "تنسيق الصورة غير مدعوم. يرجى استخدام صور JPEG/PNG/WEBP.",
    "cn": "不支持的图像格式。请使用 JPEG/PNG/WEBP 图像。",
    "de": "Nicht unterstütztes Bildformat. Bitte verwenden Sie JPEG/PNG/WEBP-Bilder.",
    "es": "Formato de imagen no compatible. Por favor, usa imágenes JPEG/PNG/WEBP.",
    "fr": "Format d'image non pris en charge. Veuillez utiliser des images JPEG/PNG/WEBP.",
    "id": "Format gambar tidak didukung. Harap gunakan gambar JPEG/PNG/WEBP.",
    "it": "Formato immagine non supportato. Si prega di utilizzare immagini JPEG/PNG/WEBP.",
    "ja": "サポートされていない画像形式です。JPEG/PNG/WEBP 画像を使用してください。",
    "ko": "지원되지 않는 이미지 형식입니다. JPEG/PNG/WEBP 이미지를 사용하세요.",
    "pl": "Nieobsługiwany format obrazu. Proszę używać obrazów JPEG/PNG/WEBP.",
    "pt": "Formato de imagem não suportado. Por favor, use imagens JPEG/PNG/WEBP.",
    "tw": "不支援的圖像格式。請使用 JPEG/PNG/WEBP 圖像。"
  }
  return _i18n_translate(translations, lang);
}
function i18n_more_actions(lang) {
  const translations = {
    'en': "More actions",
    "ar": "المزيد من الإجراءات",
    "cn": "更多操作",
    "de": "Weitere Aktionen",
    "es": "Más acciones",
    "fr": "Plus d'actions",
    "id": "Tindakan lainnya",
    "it": "Altre azioni",
    "ja": "その他の操作",
    "ko": "추가 작업",
    "pl": "Więcej działań",
    "pt": "Mais ações",
    "tw": "更多操作"
  };
  return _i18n_translate(translations, lang);
}
function i18n_delete_button_text(lang) {
  const translations = {
    "en": 'Delete this photo and associated art pictures',
    "ar": 'احذف هذه الصورة والصور الفنية المرتبطة بها',
    "cn": '删除此照片及相关艺术图片',
    "de": "Löschen Sie dieses Foto und die zugehörigen Kunstbilder",
    "es": "Elimina esta foto y las imágenes artísticas asociadas",
    "fr": "Supprimez cette photo et les images d'art associées",
    "id": "Hapus foto ini dan gambar seni terkait",
    "it": "Elimina questa foto e le immagini artistiche associate",
    "ja": "この写真と関連するアート画像を削除してください",
    "ko": "이 사진과 관련된 예술 사진을 삭제하세요",
    "pl": "Usuń to zdjęcie i powiązane zdjęcia artystyczne",
    "pt": "Exclua esta foto e as imagens de arte associadas",
    "tw": "刪除此照片及相關藝術圖片"
  }
  return _i18n_translate(translations, lang);
}

function oilpainting_i18n_stylename(lang='en') {
  const translations = {
    "en": "Oil Painting",
    "ar": "لوحة زيتية",
    "cn": "油画",
    "de": "Ölgemälde",
    "es": "Pintura al óleo",
    "fr": "Peinture à l'huile",
    "id": "Lukisan Minyak",
    "it": "Dipinto a olio",
    "ja": "油絵",
    "ko": "유화",
    "pl": "Obraz olejny",
    "pt": "Pintura a óleo",
    "tw": "油畫"
  };
  return _i18n_translate(translations, lang);
}
function watercolor_i18n_stylename(lang="en") {
  const translations = {
    "ar": "لوحة بالألوان المائية",
    "cn": "水彩画",
    "de": "Aquarellmalerei",
    "es": "Pintura en acuarela",
    "fr": "Peinture à l'aquarelle",
    "id": "Lukisan cat air",
    "it": "Pittura ad acquerello",
    "ja": "水彩画",
    "ko": "수채화",
    "pl": "Malarstwo akwarelowe",
    "pt": "Pintura em aquarela",
    "tw": "水彩畫"
  };
  return _i18n_translate(translations, lang);
}
function illustration_i18n_stylename(lang="en") {
  const translations = {
    "en": "Illustration",
    "ar": "توضيح",
    "cn": "插图",
    "de": "Illustration",
    "es": "Ilustración",
    "fr": "Illustration",
    "id": "Ilustrasi",
    "it": "Illustrazione",
    "ja": "イラスト",
    "ko": "일러스트",
    "pl": "Ilustracja",
    "pt": "Ilustração",
    "tw": "插圖"
  };
  return _i18n_translate(translations, lang);
}
function lineart_i18n_stylename(lang="en") {
  const translations = {
    "en": "Line Art",
    "ar": "فن الخط",
    "cn": "线条艺术",
    "de": "Linienkunst",
    "es": "Arte lineal",
    "fr": "Art linéaire",
    "id": "Seni Garis",
    "it": "Arte a Linee",
    "ja": "ラインアート",
    "ko": "선 아트",
    "pl": "Sztuka linii",
    "pt": "Arte em Linhas",
    "tw": "線條藝術"
  };
  return _i18n_translate(translations, lang);
}
function pencilsketch_i18n_stylename(lang="en") {
  const translations = {
    "en": "Pencil Sketch",
    "ar": "رسم قلم رصاص",
    "cn": "铅笔素描",
    "de": "Bleistiftskizze",
    "es": "Dibujo a lápiz",
    "fr": "Croquis au crayon",
    "id": "Sketsa Pensil",
    "it": "Schizzo a matita",
    "ja": "鉛筆スケッチ",
    "ko": "연필 스케치",
    "pl": "Szkic ołówkiem",
    "pt": "Esboço a lápis",
    "tw": "鉛筆素描"
  };
  return _i18n_translate(translations, lang);
}
function linesketch_i18n_stylename(lang="en") {
  const translations = {
    "en": "Line Sketch",
    "ar": "رسم خطي",
    "cn": "线条素描",
    "de": "Linienzeichnung",
    "es": "Boceto de línea",
    "fr": "Esquisse de ligne",
    "id": "Sketsa Garis",
    "it": "Schizzo a linee",
    "ja": "ラインスケッチ",
    "ko": "선 스케치",
    "pl": "Szkic liniowy",
    "pt": "Esboço de linha",
    "tw": "線條素描"
  };
  return _i18n_translate(translations, lang);
}
function vintage_i18n_stylename(lang="en") {
  const translations = {
    "en": "Vintage",
    "ar": "عتيق",
    "cn": "复古",
    "de": "Vintage",
    "es": "Vintage",
    "fr": "Vintage",
    "id": "Vintage",
    "it": "Vintage",
    "ja": "ビンテージ",
    "ko": "빈티지",
    "pl": "Vintage",
    "pt": "Vintage",
    "tw": "復古"
  };
  return _i18n_translate(translations, lang);
}
function vibrant_i18n_stylename(lang="en") {
  const translations = {
    "en": "Vibrant",
    "ar": "مفعم بالحيوية",
    "cn": "生机勃勃",
    "de": "lebhaft",
    "es": "vibrante",
    "fr": "vibrant",
    "id": "bersemangat",
    "it": "vivace",
    "ja": "活気に満ちた",
    "ko": "활기찬",
    "pl": "żywotny",
    "pt": "vibrante",
    "tw": "生機勃勃"
  };
  return _i18n_translate(translations, lang);
}
function cartoon3d_i18n_stylename(lang="en") {
  const translations = {
    "en": "Cartoon 3D",
    "ar": "كرتون ثلاثي الأبعاد",
    "cn": "卡通 3D",
    "de": "Cartoon 3D",
    "es": "Caricatura 3D",
    "fr": "Dessin animé 3D",
    "id": "Kartun 3D",
    "it": "Cartone 3D",
    "ja": "3Dアニメーション",
    "ko": "3D 만화",
    "pl": "Kreskówka 3D",
    "pt": "Desenho animado 3D",
    "tw": "卡通 3D"
  };
  return _i18n_translate(translations, lang);
}
function cartoon2d_i18n_stylename(lang="en") {
  const translations = {
    "en": "Cartoon 2D",
    "ar": "كرتون ثنائي الأبعاد",
    "cn": "卡通画",
    "de": "2D-Zeichentrick",
    "es": "Caricatura 2D",
    "fr": "Dessins animés 2D",
    "id": "Kartun 2D",
    "it": "Cartone 2D",
    "ja": "2Dアニメーション",
    "ko": "2D 만화",
    "pl": "Karton 2D",
    "pt": "Desenho animado 2D",
    "zh-tw": "卡通畫"
  };
  return _i18n_translate(translations, lang);
}
function popart_i18n_stylename(lang="en") {
  const translations = {
    "en": "Pop Art",
    "ar": "فن البوب",
    "cn": "波普艺术",
    "de": "Pop-Art",
    "es": "Arte Pop",
    "fr": "Art Pop",
    "id": "Seni Pop",
    "it": "Pop Art",
    "ja": "ポップアート",
    "ko": "팝 아트",
    "pl": "Pop-art",
    "pt": "Arte Pop",
    "tw": "波普藝術"
  };
  return _i18n_translate(translations, lang);
}
function caricature_i18n_stylename(lang="en") {
  const translations = {
    "en": "Caricature",
    "ar": "كاريكاتير",
    "cn": "漫画",
    "de": "Karikatur",
    "es": "Caricatura",
    "fr": "Caricature",
    "id": "Karikatur",
    "it": "Caricatura",
    "ja": "風刺画",
    "ko": "캐리커처",
    "pl": "Karykatura",
    "pt": "Caricatura",
    "tw": "漫畫"
  };
  return _i18n_translate(translations, lang);
}
function chineseink_i18n_stylename(lang="en") {
  const translations = {
    "en": "Chinese Ink",
    "ar": "الرسم الصيني",
    "cn": "中国画",
    "de": "Chinesische Malerei",
    "es": "Pintura china",
    "fr": "Peinture chinoise",
    "id": "Lukisan Tiongkok",
    "it": "Pittura cinese",
    "ja": "中国画",
    "ko": "중국화",
    "pl": "Malarstwo chińskie",
    "pt": "Pintura chinesa",
    "tw": "中國畫"
  };
  return _i18n_translate(translations, lang);
}
function sculpture_i18n_stylename(lang="en") {
  const translations = {
    "en": "Sculpture",
    "ar": "تمثال",
    "cn": "雕塑",
    "de": "Skulptur",
    "es": "Escultura",
    "fr": "Sculpture",
    "id": "Patung",
    "it": "Scultura",
    "ja": "彫刻",
    "ko": "조각",
    "pl": "Rzeźba",
    "pt": "Escultura",
    "tw": "雕塑"
  };
  return _i18n_translate(translations, lang);
}
function coloringpage_bold_i18n_stylename(lang="en") {
  const translations = {
    "en": "Coloring Page (bold, sketchy)",
    "ar": "صفحة تلوين (خط عريض)",
    "cn": "着色页（粗线）",
    "de": "Ausmalbild (fette Linie)",
    "es": "Página para colorear (línea gruesa)",
    "fr": "Page à colorier (ligne épaisse)",
    "id": "Halaman mewarnai (garis tebal)",
    "it": "Pagina da colorare (linea spessa)",
    "ja": "塗り絵ページ（太い線）",
    "ko": "색칠 페이지 (굵은 선)",
    "pl": "Strona do kolorowania (gruba linia)",
    "pt": "Página para colorir (linha grossa)",
    "tw": "著色頁（粗線）"
  };
  return _i18n_translate(translations, lang);
}
function coloringpage_thin_i18n_stylename(lang="en") {
  const translations = {
    "en": "Coloring Page (thin, detailed)",
    "ar": "صفحة تلوين (خط رقيق)",
    "cn": "着色页（细线）",
    "de": "Ausmalbild (dünne Linie)",
    "es": "Página para colorear (línea fina)",
    "fr": "Page à colorier (ligne fine)",
    "id": "Halaman mewarnai (garis tipis)",
    "it": "Pagina da colorare (linea sottile)",
    "ja": "塗り絵ページ（細い線）",
    "ko": "색칠 페이지 (얇은 선)",
    "pl": "Strona do kolorowania (cienka linia)",
    "pt": "Página para colorir (linha fina)",
    "tw": "著色頁（細線）"
  };
  return _i18n_translate(translations, lang);
}

