function initAIoTApp() {
  // ================= LANGUAGE TOGGLE (EN / AR - Egyptian Colloquial) =================
    const translations = {"brand_title":"نظام متابعة خطر الاكتئاب المبكر","brand_sub":"// بتقنية الذكاء الاصطناعي وإنترنت الأشياء (AIoT)","nav_00":"نبذة عامة","nav_01":"ليه بنعمل ده؟","nav_02":"طريقة عمل النظام","nav_03":"الأجهزة والمجسمات 3D","nav_04":"أدوات البرمجة","nav_05":"خطوات الذكاء الاصطناعي","nav_06":"لوحة التحكم والتطبيق","nav_07":"مميزات النظام","nav_08":"التحديات والمشاكل","nav_09":"خطة التطوير المستقبلية","nav_10":"المراجع والمصادر","nav_11":"مهام التنفيذ والإنتاج","eyebrow_11":"11 مهام التنفيذ والإنتاج","h2_11":"دليل مهام الهندسة والإنتاج","pt_brand":"دليل تنفيذ المشروعات (AIoT)","pt_brand_sub":"// خطوات التنفيذ والإنتاج","pt_back_main":"← الرئيسية","pt_nav_00":"نبذة وإرشادات","pt_nav_01":"الأجهزة والتوصيلات","pt_nav_02":"برمجة الـ ESP32","pt_nav_03":"السحابة وقواعد البيانات","pt_nav_04":"الذكاء الاصطناعي","pt_nav_05":"لوحة التحكم والتطبيق","pt_nav_06":"الأمان والخصوصية","pt_nav_07":"قائمة المهام الكاملة","pt_progress_title":"نسبة الجاهزية للإنتاج","pt_hero_kicker":"دليل مهام التنفيذ والإنتاج · خطوات عملية وشاملة","pt_hero_title":"خطة تنفيذ مشروع متابعة خطر الاكتئاب (AIoT) خطوة بخطوة","pt_hero_lede":"الدليل ده بيشرحلك كل مرحلة وكل مهمة مطلوبة عشان تحول المشروع لمنتج حقيقي وشغال في الواقع. كل مهمة مكتوبة في فقرة واضحة بتوضح: المطلوب منك إيه بالتحديد، إيه الأدوات والتقنيات اللي هتحتاجها، وازاي تنفذ المهمة دي ببساطة بدون تعقيد.","pt_eyebrow_00":"00 نبذة وإرشادات","pt_h2_00":"خطة وطريقة تنفيذ المشروع","pt_lead_00":"المشروع بيعتمد على دمج الحساسات الطبية الملبوسة مع البرمجة والسحابة والذكاء الاصطناعي عشان يعمل متابعة مستمرة وتنبيه مبكر.","pt_eyebrow_01":"01 الأجهزة والتوصيلات","pt_h2_01":"المرحلة الأولى: اختيار الأجهزة وتوصيل الدوائر","pt_t1_1_title":"المهمة 1.1: شراء واختبار المكونات الإلكترونية","pt_t1_1_stack":"الأدوات والمكونات: أفوميتر قياس، مكواة لحام والقصدير، أسلاك ribbon، شريحة ESP32، حساس القلب MAX30102، حساس الحركة MPU6050، حساس الحرارة DHT22، شاشة OLED، شاحن TP4056، بطارية ليثيوم 3.7V، ومقاومات.","pt_t1_1_body":"المطلوب منك: اشتري المكونات الإلكترونية واختبرها قبل اللحام. تأكد بالـ Multimeter إن بطارية الليثيوم شغال فيها الفولت الطبيعي (من 3.7V لـ 4.2V)، واختبر دائرة الشحن TP4056 إنها بتفصل الشحن التلقائي عند 4.2V عشان تحافظ على البطارية. وتأكد إن حساسات القلب والحركة بتشتغل على فولت 3.3V الخاص بشريحة الـ ESP32 وبدون أي مشاكل.","pt_t1_2_title":"المهمة 1.2: توصيل الحساسات والدائرة الكهربائية (I²C Bus)","pt_t1_2_stack":"التقنيات والتوصيل: بروتوكول I²C (بسرعة 400kHz)، مقاومات سحب 4.7kΩ و 10kΩ، مقسم فولتية للمقومات 100kΩ/100kΩ.","pt_t1_2_body":"المطلوب منك: وصل الحساسات مع شريحة ESP32 على مسار I²C مشترك. وصل خط SDA برقم GPIO21 وخط SCL برقم GPIO22، ووصل مقاومات سحب (Pull-up resistors) بقيمة 4.7kΩ بين الخطين وخروج الـ 3.3V عشان الإشارة تكون ناعمة وسريعة. وصل حساس الحرارة DHT22 برقم GPIO4 مع مقاومة 10kΩ. واعمل مقسم فولت من مقاومتين 100kΩ متوصلين بين البطارية و GPIO34 والأرضي عشان تقرأ نسبة البطارية بأمان وبدون ما تحرق الشريحة.","pt_t1_3_title":"المهمة 1.3: إدارة الطاقة وزيادة عمر البطارية","pt_t1_3_stack":"التقنيات المستخدمة: نظام النوم العميق (ESP32 Deep Sleep API)، مؤقت الساعة الداخلية RTC Timer، معادلة تحويل قراءة الـ ADC.","pt_t1_3_body":"المطلوب منك: نزل استهلاك الطاقة عشان الساعة تشتغل أكتر من 12 يوم بالبطارية الـ 500mAh. اعمل دورة تشغيل بحيث الـ ESP32 يشتغل لمدة 30 ثانية بس يجمع القراءات ويحدث الشاشة ويبعتها بالسحابة، وبعدين يدخل في نوم عميق (Deep Sleep) لمدة 15 دقيقة (900 ثانية). واكتب معادلة حساب الفولت في الكود بناءً على مقسم الفولت عشان يعرضلك نسبة البطارية الحقيقية.","pt_t1_4_title":"المهمة 1.4: تصميم البوردة (PCB) وجسم الساعة الـ 3D","pt_t1_4_stack":"البرامج والطباعة: برنامج KiCad أو EasyEDA لتصميم البوردة، طابعة 3D، خامة PETG المقواة، وخامة TPU المرنة للحزام.","pt_t1_4_body":"المطلوب منك: صمم بوردة مطبوعة (PCB) طبقتين بحجم صغير يناسب معصم الإيد (38mm × 42mm). حط مكثفات تنعيم 0.1µF قريبة من كل حساس، وصمم كفر للساعة بطابعة الـ 3D بخامة PETG المتينة مع فتحة أسفل الساعة عشان حساس القلب MAX30102 يلمس الجلد مباشرة، وفتحة للشاشة وفتحة لشاحن الـ USB-C، واعمل الحزام بخامة TPU المرنة.","pt_eyebrow_02":"02 برمجة الـ ESP32","pt_h2_02":"المرحلة الثانية: كود البرمجة وحساب المؤشرات (C++)","pt_t2_1_title":"المهمة 2.1: تجهيز بيئة البرمجة والمكتبات","pt_t2_1_stack":"الأدوات والمكتبات: برنامج VS Code مع PlatformIO أو Arduino IDE، لغة C++17، مكتبات Wire, Adafruit_SSD1306, MAX30105, Adafruit_MPU6050, PubSubClient, ArduinoJson.","pt_t2_1_body":"المطلوب منك: جهز بيئة البرمجة لكتابة كود الـ ESP32 بلغة C++. اضبط سرعة المعالج والسيريال بورت (115200 baud)، وحمل المكتبات الرسمية الخاصة بالتعامل مع الشاشة وحساس القلب وحساس الحركة وشبكة الواي فاي وبروتوكول MQTT وتحويل البيانات لـ JSON.","pt_t2_2_title":"المهمة 2.2: خوارزميات قراءة الحساسات وحساب الحركة والنبض","pt_t2_2_stack":"الخوارزميات: معالجة الإشارات الرقمية DSP، خوارزمية SMA لحساب الحركة، خوارزمية Peak Detection لنبضات القلب، حساب نسبة الأكسجين SpO₂.","pt_t2_2_body":"المطلوب منك: اكتب الكود اللي بيقرا الحساسات أثناء فترة التشغيل. اعمل خوارزمية لحساب متوسط شدة الحركة (SMA) من محاور الأكسليروميتر الثلاثة (|a_x| + |a_y| + |a_z|). واعمل خوارزمية اكتشاف القمم في إشارة الضوء الحمراء والتحت حمراء لحساب نبضات القلب ونسبة الأكسجين في الدم SpO₂، واعرض القراءات دي بشكل واضح على شاشة الـ OLED.","pt_t2_3_title":"المهمة 2.3: تجهيز البيانات وإرسالها للسحابة والنوم العميق","pt_t2_3_stack":"التقنيات: شبكة الواي فاي 802.11 b/g/n، بروتوكول MQTT، تشفير JSON، الذاكرة الداخلية SPIFFS/NVS للتخزين المؤقت.","pt_t2_3_body":"المطلوب منك: اجمع البيانات الحيوية (النبض، الأكسجين، الحركة، الحرارة، رطوبة الجو، نسبة البطارية) في ملف JSON مفصل. اتصل بشبكة الواي فاي وابعث الملف لـ سيرفر الـ MQTT. لو النت قطع، احفظ البيانات مؤقتاً في ذاكرة الـ ESP32 الداخلية عشان مفيش أي قراءة تضيع، وبعد ما تخلص الإرسال شغل مؤقت الـ RTC وادخل في النوم العميق.","pt_eyebrow_03":"03 السحابة وقواعد البيانات","pt_h2_03":"المرحلة الثالثة: السيرفر السحابي وقواعد البيانات والـ API","pt_t3_1_title":"المهمة 3.1: إعداد سيرفر الـ MQTT والتشفير","pt_t3_1_stack":"التقنيات: سيرفر سحابي AWS EC2 أو DigitalOcean (Ubuntu 22.04)، برنامج Mosquitto MQTT، شهادات تشفير TLS 1.3 مع Certbot.","pt_t3_1_body":"المطلوب منك: احجز سيرفر سحابي وثبت عليه برنامج Mosquitto MQTT. شغل التشفير بنظام TLS 1.3 على البورت 8883 مع شهادات أمان مجانية من Certbot. اعمل قنوات إرسال مشفرة (Topics) زي aiot/depression/telemetry واضبط اسم مستخدم وباسورد لكل ساعة عشان محدش يقدر يخترق البيانات.","pt_t3_2_title":"المهمة 3.2: تصميم وبناء قاعدة البيانات (PostgreSQL)","pt_t3_2_stack":"التقنيات: قاعدة بيانات PostgreSQL 15 أو MySQL 8.0، الفهارس المركبة B-Tree Indexes، العلاقات Foreign Keys.","pt_t3_2_body":"المطلوب منك: ابنِ قاعدة بيانات منظمة لتخزين قراءات الساعات والتحليلات. انشئ جدول المستخدمين (users)، وجدول القراءات اللحظية (sensor_telemetry) لتخزين النبض والأكسجين والحركة، وجدول الملخص اليومي (daily_aggregates) لتخزين متوسطات اليوم وساعات النوم ودرجة الخطر. واعمل فهارس سريعة (Indexes) على الـ user_id والـ timestamp عشان الاستعلامات تكون سريعة جداً.","pt_t3_3_title":"المهمة 3.3: بناء خدمة الاستقبال برمجياً (Python REST API)","pt_t3_3_stack":"التقنيات: لغة Python 3.11، إطار عمل Flask أو FastAPI، سيرفر Gunicorn، مكتبة psycopg2 للربط بقاعدة البيانات.","pt_t3_3_body":"المطلوب منك: اعمل برنامج سيرفر بلغة بايثون يستقبل البيانات من الـ MQTT أو الـ HTTP ويفحص صحتها وتنسيقها، وبعدين يحفظها في قاعدة البيانات. واعمل أندبوينتس API لعرض البيانات على شاشة المتابعة واستقبال إجابات الاستبيانات الدورية.","pt_eyebrow_04":"04 الذكاء الاصطناعي","pt_h2_04":"المرحلة الرابعة: خوارزميات الذكاء الاصطناعي وحساب الخطر","pt_t4_1_title":"المهمة 4.1: استخراج الميزات المعبرة والنمط الشخصي","pt_t4_1_stack":"التقنيات: مكتبات Python (Pandas, NumPy, Scikit-Learn)، حساب التغيير عن المعدل الطبيعي Z-score.","pt_t4_1_body":"المطلوب منك: اعمل برنامج بيستخرج 7 مؤشرات رئيسية على مدار 14 يوم: التغيير في ساعات النوم، التذبذب في مواعيد الاستيقاظ، مجموع الحركة والنشاط نهاراً، نبض القلب أثناء النوم، تغير معدل ضربات القلب HRV، التعرض للضوء والحرارة، ونتيجة استبيان PHQ-9. واطرح القراءات دي من المعدل الطبيعي للشخص نفسه عشان تلغي الفروق الفردية بين الناس.","pt_t4_2_title":"المهمة 4.2: تدريب واختيار موديل الذكاء الاصطناعي","pt_t4_2_stack":"التقنيات: خوارزميات Random Forest Classifier, Logistic Regression, Support Vector Machines (SVM), مكتبة Joblib لحفظ الموديل.","pt_t4_2_body":"المطلوب منك: درب موديلات تعلم الآلة على بيانات التغييرات السلوكية وقسم البيانات 80% تدريب و 20% اختبار. اختبر دقة الموديلات وقارن بين نتائج Random Forest و Logistic Regression و SVM. اختار موديل Random Forest لإن دقتها أعلى في كشف التغيرات غير الخطية في النوم والحركة، واحفظ الموديل المدرب في ملف (.pkl).","pt_t4_3_title":"المهمة 4.3: خدمة التوقع التلقائي وإرسال التنبيهات","pt_t4_3_stack":"التقنيات: محرك بايثون للتوقع، مكتبة Joblib، نظام إرسال الإشعارات والرسائل.","pt_t4_3_body":"المطلوب منك: شغل برنامج يعمل تقييم يومي تلقائي لكل مستخدم. الموديل يقرا آخر 14 يوم ويحسب درجة خطر متصلة من 0% لـ 100% ويصنفها: خطر منخفض (0-33%)، خطر متوسط (34-66%)، وخطر مرتفع (67-100%). ولو درجة الخطر فضلت مرتفعة لمدة 3 أيام متتالية، ابعت تنبيه فوري لتطبيق المستخدم والتطبيق الخاص بالطبيب.","pt_eyebrow_05":"05 لوحة التحكم والتطبيق","pt_h2_05":"المرحلة الخامسة: ربط الواجهة وتطبيق الموبايل","pt_t5_1_title":"المهمة 5.1: ربط الشاشة بالبيانات المباشرة والتطبيق","pt_t5_1_stack":"التقنيات: HTML5, CSS3 Glassmorphism, JavaScript ES6+, WebSockets / REST API, Three.js 3D Engine, دعم اللغتين EN/AR.","pt_t5_1_body":"المطلوب منك: اربط شاشة المتابعة (Dashboard) بسيرفر البايثون وقاعدة البيانات. اعرض العدادات المباشرة لنبض القلب والأكسجين والرسومات البيانية لتغيرات النوم والحركة. واربط قراءات الحساسات بمجسم الساعة الـ 3D عشان ينور الجزء الخاص بالحساس النشط فوراً، وتأكد إن زرار تغيير اللغة (إنجليزي / عربي عامي مصري) شغال بسلاسة.","pt_t5_2_title":"المهمة 5.2: نافذة الاستبيان النفسي الدوري (PHQ-9)","pt_t5_2_stack":"التقنيات: نافذة HTML5 Modal تفاعلية، التحكم في الإدخال، إرسال البيانات عبر REST API.","pt_t5_2_body":"المطلوب منك: اعمل شاشة استبيان بسيطة بتظهر للمستخدم كل 3 أيام فيها 4 أسئلة قصيرة وسهلة عن المزاج، الطاقة، جودة النوم، والتركيز بناءً على استبيانات PHQ-9 الطبية المعتمدة. احسب النتيجة وابعثها للسيرفر عشان تضاف لمؤشرات الحساسات وتدي تقييم أشمل.","pt_eyebrow_06":"06 الأمان والخصوصية","pt_h2_06":"المرحلة السادسة: تشفير البيانات والالتزام الطبي","pt_t6_1_title":"المهمة 6.1: التشفير وحماية الخصوصية والاختبارات","pt_t6_1_stack":"التقنيات: تشفير HTTPS / TLS 1.3، تشفير قواعد البيانات AES-256-GCM، إخفاء هوية المستخدم Salted SHA-256 Hashing، سيرفر Nginx.","pt_t6_1_body":"المطلوب منك: طبق أعلى درجات الأمان وحماية الخصوصية للبيانات الصحية. شغل التشفير بنظام TLS 1.3 و HTTPS لمنع اختراق البيانات أثناء الانتقال. شفر البيانات الطبية في قاعدة البيانات بنظام AES-256. اخفِ هوية المستخدمين باستخدام SHA-256 مع الملح (Salt) لضمان الامتثال لقوانين HIPAA و GDPR. واعمل اختبارات للبطارية عند الانخفاض، وتأكد من عرض التنويه الطبي الواضح إن النظام للمتابعة المبكرة وليس للتشخيص الطبي النهائي.","pt_eyebrow_07":"07 قائمة المهام الكاملة","pt_h2_07":"المرحلة السابعة: قائمة المتابعة والجاهزية للإنتاج","hero_kicker":"ذكاء اصطناعي · حساسات ذكية · دعم نفسي مبكر","hero_title":"نظام ذكي للمتابعة المبكرة لخطر الاكتئاب (AIoT)","hero_lede":"النظام ده بيساعد في الاكتشاف المبكر لخطر الاكتئاب عن طريق دمج الذكاء الاصطناعي مع إنترنت الأشياء (AIoT). النظام بيجمع بيانات جسمك ونشاطك اليومي زي ضربات القلب، ساعات النوم، مستوى الحركة، وطريقة استخدام التطبيق من خلال ساعة ذكية وتطبيق موبايل. البيانات دي بتتتبع بأمان وتتبعت للسحابة الإلكترونية، والذكاء الاصطناعي بيحللها عشان يحدد درجة الخطر. ولو اكتشف إن فيه خطر مرتفع، بيبعت تنبيهات فورية ونصايح مخصصة توجهك لمختص لو احتاجت، وده عشان تحسن صحتك النفسية وجودة حياتك.","hero_m1_t":"الحساسات","hero_m1_v":"ضربات القلب، الاكسجين، الحركة","hero_m2_t":"تحديث فوري","hero_m2_v":"ربط بالواي فاي والسحابة","hero_m3_t":"تحليل الذكاء الاصطناعي","hero_m3_v":"توقع دقيق ومستمر","hero_m4_t":"تنبيهات سريعة","hero_m4_v":"إشعارات أول بأول","eyebrow_00":"00 نبذة عامة","h2_00":"أهداف المشروع ومميزاته","h3_obj":"أهداف المشروع","obj_1_t":"1. متابعة مستمرة للبيانات الصحية","obj_1_d":"بنجمع القراءات الحيوية والسلوكية على مدار اليوم باستخدام حساسات وأجهزة ذكية.","obj_2_t":"2. اكتشاف مبكر لخطر الاكتئاب","obj_2_d":"تحليل البيانات بالذكاء الاصطناعي عشان نعرف أي تغييرات أو علامات بدائية للاكتئاب بسرعة.","obj_3_t":"3. تنبيه فوري عند وجود خطر","obj_3_d":"إرسال إشعارات سريعة للمستخدم أو ولي أمره أول ما نلاحظ أي مؤشرات غير طبيعية.","obj_4_t":"4. عرض البيانات وتقارير سهلة","obj_4_d":"توفير شاشة متابعة (Dashboard) وتطبيق يعرض البيانات والنتائج بشكل واضح ومفهوم.","obj_5_t":"5. حفظ البيانات بأمان","obj_5_d":"تخزين البيانات في قاعدة بيانات مشفرة للحفاظ على خصوصية المستخدم وسرية معلوماته.","obj_6_t":"6. مساعدة الأطباء والمختصين","obj_6_d":"تقديم تقارير دقيقة تساعد الأطباء في متابعة الحالات والتدخل في الوقت المناسب.","obj_7_t":"7. تحسين جودة الحياة","obj_7_d":"المساهمة في تحسين الصحة النفسية والدعم المستمر عشان تعيش حياة أفضل.","h3_feat":"مميزات المشروع","feat_1_t":"1. متابعة شاملة ومؤشرات متعددة","feat_1_d":"بيقيس نبضات القلب، جودة النوم، مستوى الحركة، والضغط النفسي لتقييم شامل.","feat_2_t":"2. تحليل ذكي ومتقدم","feat_2_d":"بيستخدم خوارزميات الـ Machine Learning عشان يتوقع خطر الاكتئاب بدقة عالية.","feat_3_t":"3. نظام شغال في الوقت الفعلي (Real-Time)","feat_3_d":"بيجمع البيانات ويحللها ويعرض النتائج لحظة بلحظة عشان نضمن سرعة الاستجابة.","feat_4_t":"4. تطبيق وشاشة عرض سهلة","feat_4_d":"واجهة بسيطة بتعرض رسومات بيانية وتقارير وتنبيهات تقدر تتابعها من أي مكان.","feat_5_t":"5. اتصال لاسلكي وحفظ سحابي","feat_5_d":"بيبعت البيانات بالـ Wi-Fi ويخزنها على السحابة الإلكترونية لسهولة الوصول من أي جهاز.","feat_6_t":"6. قابل للتطوير والتعديل","feat_6_d":"تصميم مرن بيسمح بإضافة حساسات جديدة وتطوير الخوارزميات في أي وقت.","goal_banner":"هدفنا هو تقديم نظام ذكي وآمن يساعد في الاكتشاف المبكر لخطر الاكتئاب، لدعم صحة أفضل وحياة أكثر استقراراً.","eyebrow_01":"01 ليه بنعمل ده؟","h2_01":"المشكلة وازاي بنحلها","rationale_p1":"الاكتئاب في العادة بيتم اكتشافه متأخر عن طريق زيارات متباعدة للدكتور أو استبيانات ورقية، وده بيفوت تغييرات يومية بسيطة في الجسم والسلوك بتحصل قبل ما الحالة تسوء. الأبحاث الحديثة أثبتت إن المتابعة المستمرة للمؤشرات الحيوية زي نبض القلب وجودة النوم والنشاط البدني تقدر تكشف العلامات المبكرة دي قبل ما الشخص نفسه يلاحظها.","rationale_p2":"عن طريق دمج حساسات إنترنت الأشياء (IoT) مع الذكاء الاصطناعي، النظام ده بيعمل إنذار مبكر بيتابع قراءاتك، وبيتعرف على أنماط الخطر، وبيبعت تنبيهات ونصايح فورية لتسهيل التدخل المبكر بدل الانتظار حتى تدهور الحالة.","eyebrow_02":"02 طريقة عمل النظام","h2_02":"خطوات عمل النظام (6 مراحل)","arch_p":"البيانات بتتحرك بسلاسة من المستخدم لحد السحابة الإلكترونية وترجع في شكل نتائج ونصايح مفيدة.","arch_1_t":"1. جمع البيانات (Data Collection)","arch_1_d":"قراءة البيانات من الحساسات (نبض القلب، الاكسجين، الحركة، النوم) مباشرة من المستخدم.","arch_2_t":"2. إرسال البيانات (Data Transmission)","arch_2_d":"إرسال البيانات من شريحة ESP32 عبر الواي فاي باستخدام بروتوكول MQTT/HTTP.","arch_3_t":"3. معالجة البيانات (Data Processing)","arch_3_d":"استقبال البيانات وتنظيفها وتجهيزها للتحليل.","arch_4_t":"4. قاعدة البيانات (Database)","arch_4_d":"حفظ البيانات بشكل آمن ومنظم في قاعدة بيانات Firebase أو MySQL.","arch_5_t":"5. تحليل الذكاء الاصطناعي (AI Analysis)","arch_5_d":"تحليل البيانات بنماذج تعلم الآلة لتقييم وتحديد مستوى خطر الاكتئاب.","arch_6_t":"6. العرض والتنبيهات (Display & Notifications)","arch_6_d":"عرض النتائج على شاشة المتابعة والتطبيق وإرسال إشعارات فورية عند الحاجة.","eyebrow_03":"03 الأجهزة والمجسمات 3D","h2_03":"المكونات الفيزيائية ومجسمات الـ 3D","hw_lead":"تقدر تشوف مجسم المكونات الإلكترونية للتجربة (Breadboard) بالإضافة لمجسم الساعة الذكية بالكامل في الـ 3D تحت.","l_comp":"🔌 مجسم المكونات الإلكترونية — Breadboard Prototype","l_wear":"⌚ مجسم الجهاز بالكامل — الساعة الذكية (AIoT Smartband)","hint_3d":"🖱 اسحب بالماوس للتدوير · سكرول للتقريب · اضغط على أي جزء لمعرفة وظيفته","reset_btn":"إعادة الضبط","tap_part":"اضغط على أي مكون","tap_part_d":"اختر أي جزء من المجسم أو القائمة عشان تعرف بيعمل إيه بلغة بسيطة.","hw_wiring_t":"توصيلات الأجهزة (I²C Bus)","c1_t":"ESP32 - المتحكم الرئيسي","c1_d":"العقل المفكر للنظام — بيقرا بيانات الحساسات، يعالجها، ويبعتها للسحابة بالواي فاي والبلوتوث.","c2_t":"MAX30102 - حساس القلب والأكسجين","c2_d":"حساس ضوئي بيقيس نبضات القلب ونسبة الأكسجين في الدم من الجلد مباشرة.","c3_t":"MPU6050 - حساس الحركة والنشاط","c3_d":"حساس حركة 6 محاور بيحدد خطواتك، نشاطك اليومي، وجودة نومك طول اليوم.","c4_t":"DHT22 - حساس الحرارة والرطوبة","c4_d":"بيقيس درجة الحرارة والرطوبة الجوية المحيطة بيك لمساعدة الذكاء الاصطناعي.","c5_t":"OLED Display - شاشة العرض","c5_d":"شاشة صغيرة على الإيد بتعرض نبضات القلب والأكسجين وحالة الاتصال فوراً.","c6_t":"Battery 3.7V - البطارية والشاحن","c6_d":"بطارية ليثيوم قابلة للشحن بتغذي النظام بالطاقة مع مدخل شحن USB.","eyebrow_04":"04 أدوات البرمجة","h2_04":"الأدوات والتقنيات المستخدمة (Tech Stack)","stack_lead":"النظام بيعتمد على تقنيات ويب حديثة، مع لغة بايثون للذكاء الاصطناعي، وقواعد بيانات سحابية موثوقة.","stack_fe":"الواجهة الأمامية وتصميم الشاشات","stack_fe_d":"HTML5, CSS3, JavaScript, React.js — لتصميم واجهات تفاعلية وسريعة.","stack_be":"الخلفية والبرمجة (Backend)","stack_be_d":"Python, Flask, REST API — لاستقبال البيانات من ESP32 ومعالجتها وإرسال الإشعارات.","stack_db":"قواعد البيانات","stack_db_d":"Firebase أو MySQL — لتخزين بيانات المستخدمين والمؤشرات الصحية بأمان وسرعة.","stack_ai":"نماذج الذكاء الاصطناعي","stack_ai_d":"Python, scikit-learn, Pandas — لتدريب موديلات (Logistic Regression, Random Forest, SVM) وتوقع نسبة الخطر.","stack_tools":"أدوات التطوير المساعدة","stack_tools_d":"VS Code, Git & GitHub, Postman, MQTT Explorer, Figma.","stack_lang":"لغات البرمجة الأساسية","stack_lang_d":"Python للذكاء الاصطناعي والخلفية، JavaScript للواجهة، و HTML/CSS للتنسيق.","eyebrow_05":"05 خطوات الذكاء الاصطناعي","h2_05":"مخطط سير العمل في البرنامج","pipe_1_t":"البداية وقراءة الحساسات","pipe_1_d":"شريحة ESP32 بتجمع القراءات الحيوية لحظة بلحظة.","pipe_2_t":"إرسال البيانات للسيرفر","pipe_2_d":"البيانات بتتبعت بالواي فاي لقاعدة البيانات مباشرة.","pipe_3_t":"تجهيز وتنظيف البيانات","pipe_3_d":"السيرفر بيعالج البيانات ويهيأها للذكاء الاصطناعي.","pipe_4_t":"تحليل الذكاء الاصطناعي","pipe_4_d":"خوارزميات زي (Logistic Regression, Random Forest, SVM) بتقيم مستوى الخطر.","pipe_5_t":"هل فيه خطر مرتفع؟","pipe_5_d":"نعم: عرض النتائج + إرسال تنبيه عاجل.\nلا: عرض النتائج بشكل طبيعي.","score_t":"شكل درجة الخطر (Risk Score)","low_risk":"خطر منخفض · كل حاجة طبيعية، متابعة هادية","mod_risk":"خطر متوسط · فيه تغيير بسيط، محتاج متابعة عن قرب","high_risk":"خطر مرتفع · تغييرات مستمرة، بيتم تنبيه المستخدم ومختص","try_slider":"جرب بنفسك — حرك المؤشر وشوف التطبيق بيتصرف إزاي","eyebrow_06":"06 لوحة التحكم والتطبيق","h2_06":"شاشة متابعة النظام (AIoT Mental Health Dashboard)","dash_m_t":"القراءات الحالية المباشرة","dash_m_d":"نبض القلب: 78 BPM (طبيعي) | الأكسجين: 98% (طبيعي) | النوم: 6.2 ساعات (مقبول) | الحركة: 4,350 خطوة (قليل) | الضغط النفسي: 42/100 (بسيط).","dash_r_t":"نسبة خطر الاكتئاب","dash_r_d":"42% - خطر متوسط: 'استمر في المتابعة. قراءاتك بتظهر مؤشرات بسيطة لخطر الاكتئاب. حافظ على نمط حياة صحي وخد بالك من نفسك.'","dash_u_info":"المستخدم: يقين محمد (ID: AIoT-1024) | حالة النظام: متصل بالإنترنت","dash_c_t":"الرسومات البيانية والاتجاهات","dash_c_d":"رسم بياني يوضح تغيرات نبض القلب، الأكسجين، ساعات النوم، والخطوات على مدار الأسبوع.","dash_h_t":"سجل التغييرات والتنبيهات","dash_h_d":"سجل الأيام السابقة والتنبيهات الأخيرة زي 'ارتفاع الضغط النفسي' أو 'قلة ساعات النوم'.","eyebrow_07":"07 مميزات النظام","h2_07":"المميزات الأساسية للسيستم","f1_t":"متابعة النشاط والحركة","f1_d":"متابعة الخطوات والحركة اليومية لمعرفة مستوى نشاط المستخدم الطبيعي.","f2_t":"متابعة النوم والراحة","f2_d":"تقييم ساعات النوم وجودته، لأن قلة النوم من أهم مؤشرات الاكتئاب.","f3_t":"متابعة نبضات القلب","f3_d":"رصد نبضات القلب ونسبة الأكسجين لمعرفة مستويات الإجهاد والتوتر.","f4_t":"النمط الشخصي الطبيعي","f4_d":"النظام بيتعرف على معدلاتك الطبيعية الخاصة بيك عشان يلاحظ أي تغيير عنها.","f5_t":"أسئلة استبيان دورية","f5_d":"التطبيق بيسأل المستخدم أسئلة بسيطة من وقت للتاني لتكميل صورة التقييم النفسي.","f6_t":"تقييم نسبة الخطر","f6_d":"حساب درجة خطر إجمالية (منخفض، متوسط، مرتفع) باستخدام الذكاء الاصطناعي.","f7_t":"شاشة متابعة ذكية","f7_d":"واجهة ممتازة بتعرض كل المؤشرات والرسومات البيانية والتقارير في مكان واحد.","f8_t":"تنبيهات وإشعارات سريعة","f8_d":"إرسال إشعارات فورية للمستخدم أو المقربين في حالة وجود تغييرات مقلقة.","f9_t":"سجل البيانات السابقة","f9_d":"الاحتفاظ بسجل كامل للبيانات السابقة لمتابعة التطورات على المدى الطويل.","f10_t":"الخصوصية والأمان","f10_d":"تشفير بيانات المستخدم وتأمينها تماماً لضمان السرية التامة.","eyebrow_08":"08 التحديات والمشاكل","h2_08":"10 تحديات وازاي بنتعامل معاها","ch1_t":"جودة ودقة البيانات","ch1_d":"الحساسات ممكن تتأثر بالحركة أو وضعية الإيد، والقراءات الغلط بتأثر على نتيجة الذكاء الاصطناعي.","ch2_t":"خصوصية وأمان البيانات","ch2_d":"التعامل مع بيانات صحية حساسة بيتطلب تشفير قوي لمنع أي تسريب أو وصول غير مصرح بيه.","ch3_t":"الاتصال بالإنترنت","ch3_d":"انقطاع النت ممكن يعطل إرسال البيانات اللحظية، والاعتماد على الواي فاي مش دايماً متاح.","ch4_t":"دقة موديل الذكاء الاصطناعي","ch4_d":"الموديل بيعتمد على كمية وجودة البيانات اللي اتدرب عليها، وفيه احتمال لنتائج غير دقيقة.","ch5_t":"اختلاف طبيعة الأشخاص","ch5_d":"اختلاف الأعمار وأسلوب الحياة بيأثر على التوقعات، ومحتاجين موديل مرن يستوعب كل الناس.","ch6_t":"استهلاك البطارية","ch6_d":"الأجهزة الملبوسة محتاجة تشتغل وقت طويل، وجمع البيانات المستمر بيزود استهلاك البطارية.","ch7_t":"توافق الأجهزة والبرامج","ch7_d":"اختلاف أنواع الساعات والحساسات ممكن يعمل مشاكل توافق محتاجة تجربة على أكتر من جهاز.","ch8_t":"التكلفة المالية","ch8_d":"الحساسات الدقيقة والسيرفرات السحابية ممكن تكلف فلوس كتير في التشغيل والصيانة.","ch9_t":"التزام المستخدم بالارتداء","ch9_d":"نجاح النظام بيعتمد على لبس الساعة باستمرار، والاستخدام غير المنتظم بيأثر على الدقة.","ch10_t":"القوانين واللوائح الطبية","ch10_d":"ضرورة الالتزام بقوانين حماية البيانات الصحية والحصول على الموافقات المطلوبة.","deal_challenges":"ازاي بنتعامل مع التحديات دي؟","deal_ch_d":"✓ اختيار حساسات موثوقة ونعايرها بانتظام\n✓ تطبيق أعلى معايير الأمان والتشفير لحماية البيانات\n✓ تحسين موديل الذكاء الاصطناعي ببيانات متنوعة وكافية\n✓ تصميم واجهة سهلة وجذابة تشجع المستخدم على الاستمرار\n✓ المتابعة المستمرة وتحديث النظام بشكل دوري","eyebrow_09":"09 خطة التطوير المستقبلية","h2_09":"مراحل تطوير المشروع","r1_p":"المرحلة الأولى — النموذج الأول","r1_t":"ربط الحساسات الأساسية","r1_d":"توصيل شريحة ESP32 بالحساسات MAX30102 و MPU6050 لجمع البيانات بدقة.","r2_p":"المرحلة الثانية — الربط السحابي","r2_t":"إرسال البيانات والشاشات","r2_d":"ربط البيانات بالواي فاي وعرضها على واجهة React.js وشاشة المتابعة.","r3_p":"المرحلة الثالثة — الذكاء الاصطناعي","r3_t":"تدريب الموديلات","r3_d":"تدريب خوارزميات تعلم الآلة على البيانات لتوقع نسبة الخطر.","r4_p":"المرحلة الرابعة — التكامل الكامل","r4_t":"نظام متكامل في الوقت الفعلي","r4_d":"دمج الأجهزة والسحابة والذكاء الاصطناعي في حلقة واحدة مع نظام التنبيهات.","r5_p":"المرحلة الخامسة — التحسين والاختبار","r5_t":"معالجة التحديات","r5_d":"تحسين عمر البطارية، رفع دقة الذكاء الاصطناعي، والتأكد من أمان البيانات.","eyebrow_10":"10 المراجع والمصادر","h2_10":"المراجع الطبية والأدوات المستعملة","med_refs":"المراجع الطبية والتعليمية","tools_used":"المواقع والأدوات المستعملة","foot_note":"جميع المراجع والمواقع المذكورة أعلاه موثوقة وموثقة علمياً، وتساهم في بناء نظام دقيق يقتصر على المتابعة والتنبيه المبكر فقط، وليس للتشخيص الطبي الطبيب.","back_top":"↑ للعيون لأعلى"};
  let currentLang = localStorage.getItem('site_lang') || 'en';

  // Cache initial English text into data-i18n-en attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (!el.getAttribute('data-i18n-en')) {
      el.setAttribute('data-i18n-en', el.innerHTML || el.value);
    }
  });

  const langEnBtn = document.getElementById('langBtnEn');
  const langArBtn = document.getElementById('langBtnAr');

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);

    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
      if (langArBtn) langArBtn.classList.add('active');
      if (langEnBtn) langEnBtn.classList.remove('active');
      
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.value = translations[key];
          } else {
            el.innerHTML = translations[key];
          }
        }
      });
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
      if (langEnBtn) langEnBtn.classList.add('active');
      if (langArBtn) langArBtn.classList.remove('active');

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const orig = el.getAttribute('data-i18n-en');
        if (orig) {
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.value = orig;
          } else {
            el.innerHTML = orig;
          }
        }
      });
    }

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }

  if (langEnBtn) {
    langEnBtn.onclick = function() { setLanguage('en'); };
  }
  if (langArBtn) {
    langArBtn.onclick = function() { setLanguage('ar'); };
  }

  // Apply saved language preference
  setLanguage(currentLang);

  // Attempt fetch translations.json for external deployment fallback
  fetch('translations.json').then(r => r.json()).then(data => {
    if (data && data.ar) {
      Object.assign(translations, data.ar);
      if (currentLang === 'ar') setLanguage('ar');
    }
  }).catch(() => {});

  // Mobile sidebar toggle
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('menuToggle');
  const backdrop = document.getElementById('backdrop');

  if (sidebar && toggle && backdrop) {
    function openMenu() {
      sidebar.classList.add('open');
      backdrop.classList.add('show');
      toggle.setAttribute('aria-expanded', 'true');
    }
    function closeMenu() {
      sidebar.classList.remove('open');
      backdrop.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    }
    toggle.addEventListener('click', () => {
      sidebar.classList.contains('open') ? closeMenu() : openMenu();
    });
    backdrop.addEventListener('click', closeMenu);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });
    document.querySelectorAll('.toc a').forEach(a => a.addEventListener('click', closeMenu));
  }

  // Scrollspy via IntersectionObserver
  const links = document.querySelectorAll('.toc a');
  if (links.length > 0) {
    const linkByHref = {};
    links.forEach(l => {
      const href = l.getAttribute('href');
      if (href) linkByHref[href] = l;
    });

    const spySections = Array.from(links)
      .map(a => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const match = linkByHref['#' + entry.target.id];
          if (match) match.classList.add('active');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

    spySections.forEach(sec => spyObserver.observe(sec));
  }

  // Scroll-reveal for content blocks
  const revealTargets = document.querySelectorAll(
    '.card, .hw-card, .hw-comp-card, .stack-col, .feat, .ethic, .road-item, .pstep, .arch-layer, .trend-card, .gauge-interactive, .crisis-box'
  );
  if (revealTargets.length > 0) {
    revealTargets.forEach(el => el.classList.add('reveal'));
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(el => revealObserver.observe(el));
  }

  // Back-to-top button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Citation click → flash the matching reference
  document.querySelectorAll('sup.cite a').forEach(a => {
    a.addEventListener('click', (e) => {
      const targetId = a.getAttribute('href');
      if (!targetId) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      target.classList.remove('flash');
      void target.offsetWidth; // restart animation
      target.classList.add('flash');
    });
  });

  // ================= Interactive risk gauge =================
  (function initGauge() {
    const slider = document.getElementById('riskSlider');
    const valueEl = document.getElementById('giValue');
    const bandEl = document.getElementById('giBand');
    const statusEl = document.getElementById('giStatus');
    if (!slider || !valueEl || !bandEl || !statusEl) return;

    function update() {
      const v = Number(slider.value);
      valueEl.textContent = v + '%';
      let color, band, status;
      if (v < 34) {
        color = '#72E8C6';
        band = 'LOW RISK';
        status = 'The app stays quiet — all indicators are within normal range.';
      } else if (v < 67) {
        color = '#E0AA6C';
        band = 'MODERATE RISK';
        status = 'A gentle nudge and monitoring recommendations appear in the app — keep monitoring.';
      } else {
        color = '#E28B7A';
        band = 'HIGH RISK';
        status = 'If this level holds, a trusted contact or clinician is notified — personalized recommendations are sent.';
      }
      valueEl.style.color = color;
      bandEl.textContent = 'RISK LEVEL · ' + band;
      statusEl.textContent = status;
      statusEl.style.color = color;
    }
    slider.addEventListener('input', update);
    update();
  })();

  // ================= 90-day trend chart =================
  (function initTrendChart() {
    const svg = document.getElementById('trendSvg');
    const linePath = document.getElementById('trendLine');
    const areaPath = document.getElementById('trendArea');
    if (!svg || !linePath || !areaPath) return;

    // Deterministic illustrative series
    const points = [
      22, 20, 24, 21, 25, 23, 27, 26, 30, 29, 33, 31, 35, 38, 41, 39, 44, 47, 45, 50,
      53, 51, 56, 59, 57, 62, 65, 63, 68, 70, 69, 71, 68, 66, 63, 60, 58, 55, 52, 50,
      47, 44, 42, 39, 37, 35, 33, 30, 28, 25, 24, 23
    ];
    const W = 760, H = 220, padL = 26, padR = 10, padT = 10, padB = 30;
    const innerW = W - padL - padR, innerH = H - padT - padB;
    const maxV = 100;

    function xy(i, v) {
      const x = padL + (i / (points.length - 1)) * innerW;
      const y = padT + innerH - (v / maxV) * innerH;
      return [x, y];
    }

    let d = '';
    points.forEach((v, i) => {
      const [x, y] = xy(i, v);
      d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1) + ' ';
    });
    const [lastX] = xy(points.length - 1, points[points.length - 1]);
    const [firstX] = xy(0, points[0]);
    const areaD = d + `L${lastX.toFixed(1)},${(padT + innerH).toFixed(1)} L${firstX.toFixed(1)},${(padT + innerH).toFixed(1)} Z`;

    linePath.setAttribute('d', d.trim());
    areaPath.setAttribute('d', areaD);

    let drawn = false;
    const drawObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !drawn) {
          drawn = true;
          linePath.style.transition = 'stroke-dashoffset 1.6s ease';
          linePath.style.strokeDashoffset = '0';
          areaPath.style.transition = 'opacity 1.2s ease 0.4s';
          areaPath.style.opacity = '1';
          drawObserver.disconnect();
        }
      });
    }, { threshold: 0.25 });
    drawObserver.observe(svg);
  })();

  // ================= 3D HARDWARE MODEL =================
  (function init3DModel() {
    const wrap = document.getElementById('modelCanvasWrap');
    const loadingTag = document.getElementById('modelLoadingTag');
    const infoPanel = document.getElementById('infoPanel');
    const partListEl = document.getElementById('partList');
    const resetBtn = document.getElementById('modelReset');

    if (!wrap || !infoPanel || !partListEl || !resetBtn) return;

    if (typeof THREE === 'undefined') {
      if (loadingTag) loadingTag.textContent = '3D unavailable — check connection';
      return;
    }

    const COLORS = {
      teal: 0x72E8C6,
      amber: 0xE0AA6C,
      dim: 0x2E5C4E,
      dark: 0x223530,
      chip: 0x0E1613,
      board: 0x1B2E28
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, wrap.clientWidth / wrap.clientHeight || 1, 0.1, 100);
    const defaultCamPos = new THREE.Vector3(3.4, 2.4, 6.2);
    camera.position.copy(defaultCamPos);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    wrap.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.65));
    const key = new THREE.DirectionalLight(0xbfffe9, 0.9);
    key.position.set(4, 6, 4);
    scene.add(key);

    const rim = new THREE.DirectionalLight(0xE0AA6C, 0.35);
    rim.position.set(-4, 2, -3);
    scene.add(rim);

    const device = new THREE.Group();
    scene.add(device);

    function connector(y1, y2) {
      const mat = new THREE.LineDashedMaterial({ color: 0x2E5C4E, dashSize: 0.05, gapSize: 0.05, transparent: true, opacity: 0.6 });
      const pts = [];
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * 0.95, y1, Math.sin(a) * 0.55));
        pts.push(new THREE.Vector3(Math.cos(a) * 0.95, y2, Math.sin(a) * 0.55));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const seg = new THREE.LineSegments(geo, mat);
      seg.computeLineDistances();
      device.add(seg);
    }

    const parts = [];
    function addPart(key, name, blurb, mesh, dotColor) {
      const baseEmissive = (mesh.material && mesh.material.emissive) ? mesh.material.emissive.getHex() : 0x000000;
      mesh.userData = { key, name, blurb, baseEmissive };
      device.add(mesh);
      parts.push({ key, name, blurb, mesh, dotColor });
    }

    // Breadboard (لوحة التجميع)
    {
      const g = new THREE.BoxGeometry(1.8, 0.1, 1.1);
      const m = new THREE.MeshStandardMaterial({ color: 0x1A3320, roughness: 0.7, metalness: 0.1, emissive: 0x000000 });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.y = -1.5;
      addPart('breadboard', 'Breadboard (لوحة التجميع)', 'A solderless prototyping board that holds all components together. Makes it easy to connect and test the ESP32, MAX30102, and MPU6050 without soldering.', mesh, COLORS.dim);
    }

    // ESP32 — Main Controller (المتحكم الرئيسي)
    {
      const g = new THREE.BoxGeometry(0.7, 0.15, 0.5);
      const m = new THREE.MeshStandardMaterial({ color: 0x1A1A2E, roughness: 0.4, metalness: 0.5, emissive: 0x001133, emissiveIntensity: 0.6 });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(-0.3, -0.9, 0);
      addPart('esp32', 'ESP32 — Main Controller (المتحكم الرئيسي)', 'The brain of the system. A dual-core microcontroller with built-in Wi-Fi that collects sensor data, processes it, and sends it to the cloud database via Wi-Fi.', mesh, COLORS.teal);
    }

    // MAX30102 — Heart Rate & SpO2 Sensor (حساس ضربات القلب)
    {
      const g = new THREE.BoxGeometry(0.25, 0.08, 0.25);
      const m = new THREE.MeshStandardMaterial({ color: 0xCC2200, roughness: 0.3, metalness: 0.2, emissive: 0x330000, emissiveIntensity: 0.8 });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(0.5, -0.75, -0.2);
      addPart('max30102', 'MAX30102 — Heart Rate & SpO2 Sensor (حساس ضربات القلب)', 'Measures heart rate (pulse) and blood oxygen (SpO2) using optical light. Connected to ESP32 via I2C protocol (SCL/SDA pins).', mesh, COLORS.amber);
    }

    // MPU6050 — Motion & Activity Sensor (حساس الحركة)
    {
      const g = new THREE.BoxGeometry(0.2, 0.07, 0.2);
      const m = new THREE.MeshStandardMaterial({ color: 0x003366, roughness: 0.4, metalness: 0.5, emissive: 0x000033, emissiveIntensity: 0.6 });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(0.5, -0.75, 0.25);
      addPart('mpu6050', 'MPU6050 — Motion & Activity Sensor (حساس الحركة)', 'Contains a 3-axis accelerometer and gyroscope. Tracks daily movement, activity levels, and sleep quality. Connected to ESP32 via I2C protocol.', mesh, COLORS.teal);
    }

    // Wi-Fi Module (اتصال لاسلكي)
    {
      const g = new THREE.BoxGeometry(0.3, 0.02, 0.1);
      const m = new THREE.MeshStandardMaterial({ color: 0x72E8C6, roughness: 0.3, metalness: 0.1, emissive: 0x1A5C48, emissiveIntensity: 1.0 });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(-0.55, -0.82, -0.3);
      addPart('wifi', 'Wi-Fi Module (اتصال لاسلكي)', 'The ESP32 has built-in Wi-Fi. It sends processed sensor data to the cloud server (Firebase/MySQL database) in real-time via the internet.', mesh, COLORS.teal);
    }

    // Draw wires/connectors
    function coloredConnector(x1, y1, z1, x2, y2, z2, colorHex) {
      const mat = new THREE.LineBasicMaterial({ color: colorHex, linewidth: 2 });
      const points = [];
      points.push(new THREE.Vector3(x1, y1, z1));
      points.push(new THREE.Vector3(x1, y1 + 0.1, z1));
      points.push(new THREE.Vector3(x2, y1 + 0.1, z2));
      points.push(new THREE.Vector3(x2, y2, z2));
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geo, mat);
      device.add(line);
    }

    // MAX30102 to ESP32 (red wire)
    coloredConnector(0.5, -0.75, -0.2, -0.2, -0.9, -0.1, 0xCC2200);
    
    // MPU6050 to ESP32 (blue wire)
    coloredConnector(0.5, -0.75, 0.25, -0.2, -0.9, 0.1, 0x003366);

    device.rotation.x = -0.15;

    // Build side list
    partListEl.innerHTML = '';
    parts.forEach(p => {
      const btn = document.createElement('button');
      btn.className = 'part-btn';
      btn.dataset.key = p.key;
      btn.innerHTML = '<span class="dot" style="background:#' + p.dotColor.toString(16).padStart(6, '0') + '"></span>' + p.name;
      btn.addEventListener('click', () => selectPart(p.key));
      partListEl.appendChild(btn);
    });

    let selectedKey = null;
    function selectPart(key) {
      selectedKey = key;
      parts.forEach(p => {
        const isSel = p.key === key;
        if (p.mesh.material && p.mesh.material.emissive) {
          p.mesh.material.emissiveIntensity = isSel ? 1.4 : (p.mesh.userData.baseEmissive > 0 ? 0.6 : 0);
        }
        p.mesh.scale.setScalar(isSel ? 1.12 : 1.0);
      });
      document.querySelectorAll('.part-btn').forEach(b => b.classList.toggle('active', b.dataset.key === key));
      const p = parts.find(p => p.key === key);
      if (p) {
        infoPanel.innerHTML = '<b>' + p.name + '</b>' + p.blurb;
      }
    }

    // Resize handling — use ResizeObserver so it fires once canvas is actually painted
    let initialized = false;
    function resize() {
      const w = wrap.clientWidth, h = wrap.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      if (!initialized) {
        initialized = true;
        if (loadingTag) loadingTag.style.display = 'none';
      }
    }
    window.addEventListener('resize', resize);
    // Observe the canvas wrap so we get real dimensions after layout
    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(resize).observe(wrap);
    } else {
      resize();
      if (loadingTag) loadingTag.style.display = 'none';
    }

    // Manual drag-rotate + wheel-zoom
    let isDragging = false, prevX = 0, prevY = 0, rotY = -0.5, rotX = -0.15;
    device.rotation.y = rotY;
    let autoRotate = true;

    function pointerDown(e) {
      isDragging = true;
      autoRotate = false;
      wrap.classList.add('dragging');
      const t = e.touches ? e.touches[0] : e;
      prevX = t.clientX;
      prevY = t.clientY;
    }
    function pointerMove(e) {
      if (!isDragging) return;
      const t = e.touches ? e.touches[0] : e;
      const dx = t.clientX - prevX, dy = t.clientY - prevY;
      prevX = t.clientX;
      prevY = t.clientY;
      rotY += dx * 0.006;
      rotX = Math.max(-0.6, Math.min(0.6, rotX + dy * 0.006));
      device.rotation.y = rotY;
      device.rotation.x = rotX;
    }
    function pointerUp() {
      isDragging = false;
      wrap.classList.remove('dragging');
    }
    wrap.addEventListener('mousedown', pointerDown);
    wrap.addEventListener('touchstart', pointerDown, { passive: true });
    window.addEventListener('mousemove', pointerMove);
    window.addEventListener('touchmove', pointerMove, { passive: true });
    window.addEventListener('mouseup', pointerUp);
    window.addEventListener('touchend', pointerUp);

    wrap.addEventListener('wheel', (e) => {
      e.preventDefault();
      const dist = camera.position.length();
      const next = Math.max(4.2, Math.min(9.5, dist + e.deltaY * 0.003));
      camera.position.setLength(next);
    }, { passive: false });

    // Click / tap to select a part on the model
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let downX = 0, downY = 0;
    wrap.addEventListener('mousedown', e => { downX = e.clientX; downY = e.clientY; });
    wrap.addEventListener('mouseup', e => {
      if (Math.abs(e.clientX - downX) > 4 || Math.abs(e.clientY - downY) > 4) return;
      handleTap(e.clientX, e.clientY);
    });
    wrap.addEventListener('touchend', e => {
      if (!e.changedTouches || !e.changedTouches[0]) return;
      handleTap(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    });

    function handleTap(cx, cy) {
      const rect = wrap.getBoundingClientRect();
      pointer.x = ((cx - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((cy - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const meshes = parts.map(p => p.mesh);
      const hits = raycaster.intersectObjects(meshes);
      if (hits.length) selectPart(hits[0].object.userData.key);
    }

    resetBtn.addEventListener('click', () => {
      rotY = -0.5;
      rotX = -0.15;
      autoRotate = true;
      camera.position.copy(defaultCamPos);
      selectedKey = null;
      parts.forEach(p => {
        if (p.mesh.material && p.mesh.material.emissive) {
          p.mesh.material.emissiveIntensity = p.mesh.userData.baseEmissive > 0 ? 0.6 : 0;
        }
        p.mesh.scale.setScalar(1.0);
      });
      document.querySelectorAll('.part-btn').forEach(b => b.classList.remove('active'));
      infoPanel.innerHTML = '<b>Tap a part</b>Select any piece — on the model or in this list — to see what it does in plain words.';
    });

    function animate() {
      requestAnimationFrame(animate);
      if (autoRotate && !isDragging) {
        rotY += 0.0022;
        device.rotation.y = rotY;
      }
      renderer.render(scene, camera);
    }
    animate();
  })();

  // ================= 3D WEARABLE DEVICE MODEL =================
  (function init3DWearableModel() {
    const wrap = document.getElementById('wearableCanvasWrap');
    const loadingTag = document.getElementById('wearableLoadingTag');
    const infoPanel = document.getElementById('wearableInfoPanel');
    const partListEl = document.getElementById('wearablePartList');
    const resetBtn = document.getElementById('wearableModelReset');

    if (!wrap || !infoPanel || !partListEl || !resetBtn) return;
    if (typeof THREE === 'undefined') {
      if (loadingTag) loadingTag.textContent = '3D unavailable — check connection';
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, wrap.clientWidth / wrap.clientHeight || 1, 0.1, 100);
    const defaultCamPos = new THREE.Vector3(1.4, 0.3, 6.2);
    camera.position.copy(defaultCamPos);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    wrap.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.DirectionalLight(0xc0ffe9, 1.0);
    key.position.set(3, 6, 5);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xE0AA6C, 0.3);
    rim.position.set(-4, 1, -3);
    scene.add(rim);
    const front = new THREE.DirectionalLight(0x6699ff, 0.35);
    front.position.set(0, 0, 6);
    scene.add(front);

    const device = new THREE.Group();
    scene.add(device);

    const parts = [];
    function addPart(key, name, blurb, mesh, dotColor) {
      const baseEmissive = (mesh.material && mesh.material.emissive) ? mesh.material.emissive.getHex() : 0x000000;
      mesh.userData = { key, name, blurb, baseEmissive };
      device.add(mesh);
      parts.push({ key, name, blurb, mesh, dotColor });
    }

    // ── Main PCB board (green, inside housing)
    {
      const g = new THREE.BoxGeometry(0.76, 1.22, 0.055);
      const m = new THREE.MeshStandardMaterial({ color: 0x1A4020, roughness: 0.55, metalness: 0.25 });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(0, 0, -0.06);
      addPart('pcb_w', 'Main PCB Board', 'The central green circuit board that connects all components together inside the smartband. All sensors, the ESP32, and the display route their signals through this board.', mesh, 0x1A5C20);
    }

    // ── Watch housing (dark, semi-transparent so internals glow through)
    {
      const g = new THREE.BoxGeometry(0.92, 1.54, 0.44);
      const m = new THREE.MeshStandardMaterial({ color: 0x0D0D0D, roughness: 0.55, metalness: 0.35, transparent: true, opacity: 0.72 });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(0, 0, 0);
      addPart('housing', 'Watch Housing (Black Casing)', 'Compact black wearable enclosure housing all 6 components. Designed to sit comfortably on the wrist. All components in the image are integrated inside this casing.', mesh, 0x444444);
    }

    // ── Top strap
    {
      const g = new THREE.BoxGeometry(0.70, 1.64, 0.31);
      const m = new THREE.MeshStandardMaterial({ color: 0x0A0A0A, roughness: 0.92, metalness: 0.0 });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(0, 1.59, 0);
      addPart('strap_top', 'Top Wrist Strap', 'Upper segment of the silicone/rubber band. Wraps around the wrist to keep the sensor housing in stable contact with the skin for consistent readings.', mesh, 0x333333);
    }

    // ── Bottom strap (with buckle notch effect)
    {
      const g = new THREE.BoxGeometry(0.70, 1.64, 0.31);
      const m = new THREE.MeshStandardMaterial({ color: 0x0A0A0A, roughness: 0.92, metalness: 0.0 });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(0, -1.59, 0);
      addPart('strap_bot', 'Bottom Wrist Strap', 'Lower strap segment containing the pin buckle. Holds the device firmly on the wrist. Important for accurate sensor contact, especially for MAX30102 readings.', mesh, 0x333333);
    }

    // ── OLED Display (front face — glowing blue)
    {
      const g = new THREE.BoxGeometry(0.73, 1.16, 0.042);
      const m = new THREE.MeshStandardMaterial({
        color: 0x001a55,
        roughness: 0.15,
        metalness: 0.1,
        emissive: 0x0033aa,
        emissiveIntensity: 0.85,
        transparent: true,
        opacity: 0.92
      });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(0, 0.06, 0.248);
      addPart('display', 'OLED Display Screen', 'Front-facing display showing real-time wrist data:\n❤ Heart Rate: 78 BPM\n💧 SpO₂: 98%\n📶 Wi-Fi Status\nProvides instant feedback without needing to open a phone app.', mesh, 0x72E8C6);
    }

    // ── ESP32 Module (dark blue chip, center of PCB)
    {
      const g = new THREE.BoxGeometry(0.44, 0.36, 0.09);
      const m = new THREE.MeshStandardMaterial({ color: 0x111a2e, roughness: 0.38, metalness: 0.55, emissive: 0x001144, emissiveIntensity: 0.55 });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(0, 0.26, 0.01);
      addPart('esp32_w', 'ESP32 — Main Controller', 'The brain of the entire system. Dual-core microcontroller with built-in Wi-Fi & Bluetooth. It reads all sensor data (MAX30102, MPU6050, DHT22), processes it, and transmits it via Wi-Fi to the cloud server (Firebase/MySQL).', mesh, 0x72E8C6);
    }

    // ── MAX30102 (red glowing optical sensor disc — on back/bottom face)
    {
      const g = new THREE.CylinderGeometry(0.11, 0.11, 0.055, 20);
      const m = new THREE.MeshStandardMaterial({ color: 0xBB1800, roughness: 0.18, metalness: 0.22, emissive: 0x550000, emissiveIntensity: 1.1 });
      const mesh = new THREE.Mesh(g, m);
      mesh.rotation.x = Math.PI / 2;
      mesh.position.set(-0.14, -0.46, -0.24);
      addPart('max30102_w', 'MAX30102 — Heart Rate & SpO₂', 'Optical biosensor on the wrist-contact face (back of the band). Shines Red (660nm) and IR (880nm) light into the skin to measure:\n♥ Heart Rate (BPM)\n💧 Blood Oxygen (SpO₂%)\nData is sent to ESP32 via I²C (SCL/SDA).', mesh, 0xCC2200);
    }

    // ── A second LED aperture for MAX30102
    {
      const g = new THREE.CylinderGeometry(0.065, 0.065, 0.04, 20);
      const m = new THREE.MeshStandardMaterial({ color: 0xFF4422, roughness: 0.1, metalness: 0.1, emissive: 0x882200, emissiveIntensity: 1.4 });
      const mesh = new THREE.Mesh(g, m);
      mesh.rotation.x = Math.PI / 2;
      mesh.position.set(0.06, -0.46, -0.245);
      device.add(mesh); // not interactive — just visual
    }

    // ── MPU6050 (blue chip)
    {
      const g = new THREE.BoxGeometry(0.175, 0.175, 0.075);
      const m = new THREE.MeshStandardMaterial({ color: 0x003388, roughness: 0.38, metalness: 0.55, emissive: 0x000044, emissiveIntensity: 0.55 });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(0.22, -0.12, 0.01);
      addPart('mpu6050_w', 'MPU6050 — Motion Sensor', '6-axis IMU (3-axis accelerometer + 3-axis gyroscope). Continuously tracks:\n🏃 Steps & daily activity\n😴 Sleep duration & quality\n🤚 Wrist movement patterns\nConnected to ESP32 via I²C.', mesh, 0x4499ff);
    }

    // ── DHT22 (white/beige temp & humidity sensor)
    {
      const g = new THREE.BoxGeometry(0.145, 0.29, 0.082);
      const m = new THREE.MeshStandardMaterial({ color: 0xCCCCBB, roughness: 0.65, metalness: 0.05, emissive: 0x001100, emissiveIntensity: 0.08 });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(-0.23, 0.22, 0.01);
      addPart('dht22', 'DHT22 — Temperature & Humidity', 'Environmental sensor measuring:\n🌡 Ambient Temperature (°C)\n💧 Relative Humidity (%)\nEnvironmental context helps improve the AI model\'s depression risk prediction accuracy. Data sent to ESP32 via digital signal.', mesh, 0xE0AA6C);
    }

    // ── Battery (elongated LiPo cell, near bottom)
    {
      const g = new THREE.BoxGeometry(0.34, 0.62, 0.12);
      const m = new THREE.MeshStandardMaterial({ color: 0x1A1A33, roughness: 0.5, metalness: 0.35, emissive: 0x000022, emissiveIntensity: 0.22 });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(0, -0.72, 0.01);
      addPart('battery_w', 'Battery 3.7V LiPo + Charging Module', 'Rechargeable 3.7V lithium-polymer cell providing power to all components:\n🔋 Capacity: ~180mAh\n⚡ Voltage: 3.7V\n🔌 USB-C charging module included\nEfficient power management keeps the device running throughout the day.', mesh, 0x9979DD);
    }

    // ── Colored wires from sensors to ESP32
    function colorWire(x1, y1, z1, x2, y2, z2, col) {
      const mat = new THREE.LineBasicMaterial({ color: col });
      const pts = [
        new THREE.Vector3(x1, y1, z1),
        new THREE.Vector3(x1, (y1 + y2) / 2, z1),
        new THREE.Vector3(x2, (y1 + y2) / 2, z2),
        new THREE.Vector3(x2, y2, z2)
      ];
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      device.add(new THREE.Line(geo, mat));
    }
    colorWire(-0.14, -0.46, -0.24, -0.1, 0.26, 0.01, 0xCC2200); // MAX30102 → ESP32 (red)
    colorWire(0.22, -0.12, 0.01, 0.05, 0.26, 0.01, 0x4499ff);   // MPU6050 → ESP32 (blue)
    colorWire(-0.23, 0.22, 0.01, -0.15, 0.26, 0.01, 0xE0AA6C);  // DHT22 → ESP32 (amber)
    colorWire(0, 0.06, 0.248, 0, 0.44, 0.01, 0x72E8C6);          // OLED → ESP32 (teal)

    device.rotation.x = -0.08;
    device.rotation.y = 0.18; // slight angle showing display

    // Build part list buttons
    partListEl.innerHTML = '';
    parts.forEach(p => {
      const btn = document.createElement('button');
      btn.className = 'part-btn';
      btn.dataset.key = p.key;
      const hex = (typeof p.dotColor === 'number') ? p.dotColor.toString(16).padStart(6, '0') : '444444';
      btn.innerHTML = '<span class="dot" style="background:#' + hex + '"></span>' + p.name;
      btn.addEventListener('click', () => selectWearablePart(p.key));
      partListEl.appendChild(btn);
    });

    let selectedKey = null;
    function selectWearablePart(key) {
      selectedKey = key;
      parts.forEach(p => {
        const isSel = p.key === key;
        if (p.mesh.material && p.mesh.material.emissive) {
          p.mesh.material.emissiveIntensity = isSel ? 1.6 : (p.mesh.userData.baseEmissive > 0 ? 0.55 : 0);
        }
        p.mesh.scale.setScalar(isSel ? 1.13 : 1.0);
      });
      document.querySelectorAll('#wearablePartList .part-btn').forEach(b => b.classList.toggle('active', b.dataset.key === key));
      const p = parts.find(p => p.key === key);
      if (p) infoPanel.innerHTML = '<b>' + p.name + '</b>' + p.blurb;
    }

    // Resize — use ResizeObserver so canvas has real dimensions after layout paint
    let initializedW = false;
    function resize() {
      const w = wrap.clientWidth, h = wrap.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      if (!initializedW) {
        initializedW = true;
        if (loadingTag) loadingTag.style.display = 'none';
      }
    }
    window.addEventListener('resize', resize);
    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(resize).observe(wrap);
    } else {
      resize();
      if (loadingTag) loadingTag.style.display = 'none';
    }

    // Drag / zoom interaction
    let isDraggingW = false, prevXW = 0, prevYW = 0, rotYW = 0.18, rotXW = -0.08;
    device.rotation.y = rotYW;
    let autoRotateW = true;

    function pointerDownW(e) {
      isDraggingW = true; autoRotateW = false;
      wrap.classList.add('dragging');
      const t = e.touches ? e.touches[0] : e;
      prevXW = t.clientX; prevYW = t.clientY;
    }
    function pointerMoveW(e) {
      if (!isDraggingW) return;
      const t = e.touches ? e.touches[0] : e;
      const dx = t.clientX - prevXW, dy = t.clientY - prevYW;
      prevXW = t.clientX; prevYW = t.clientY;
      rotYW += dx * 0.006;
      rotXW = Math.max(-0.65, Math.min(0.65, rotXW + dy * 0.006));
      device.rotation.y = rotYW;
      device.rotation.x = rotXW;
    }
    function pointerUpW() { isDraggingW = false; wrap.classList.remove('dragging'); }

    wrap.addEventListener('mousedown', pointerDownW);
    wrap.addEventListener('touchstart', pointerDownW, { passive: true });
    window.addEventListener('mousemove', pointerMoveW);
    window.addEventListener('touchmove', pointerMoveW, { passive: true });
    window.addEventListener('mouseup', pointerUpW);
    window.addEventListener('touchend', pointerUpW);

    wrap.addEventListener('wheel', (e) => {
      e.preventDefault();
      const dist = camera.position.length();
      const next = Math.max(3.5, Math.min(10.0, dist + e.deltaY * 0.003));
      camera.position.setLength(next);
    }, { passive: false });

    // Tap to select part
    const raycasterW = new THREE.Raycaster();
    const pointerW = new THREE.Vector2();
    let downXW = 0, downYW = 0;
    wrap.addEventListener('mousedown', e => { downXW = e.clientX; downYW = e.clientY; });
    wrap.addEventListener('mouseup', e => {
      if (Math.abs(e.clientX - downXW) > 4 || Math.abs(e.clientY - downYW) > 4) return;
      const rect = wrap.getBoundingClientRect();
      pointerW.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointerW.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycasterW.setFromCamera(pointerW, camera);
      const hits = raycasterW.intersectObjects(parts.map(p => p.mesh));
      if (hits.length) selectWearablePart(hits[0].object.userData.key);
    });
    wrap.addEventListener('touchend', e => {
      if (!e.changedTouches || !e.changedTouches[0]) return;
      const t = e.changedTouches[0];
      const rect = wrap.getBoundingClientRect();
      pointerW.x = ((t.clientX - rect.left) / rect.width) * 2 - 1;
      pointerW.y = -((t.clientY - rect.top) / rect.height) * 2 + 1;
      raycasterW.setFromCamera(pointerW, camera);
      const hits = raycasterW.intersectObjects(parts.map(p => p.mesh));
      if (hits.length) selectWearablePart(hits[0].object.userData.key);
    });

    // Reset button
    resetBtn.addEventListener('click', () => {
      rotYW = 0.18; rotXW = -0.08; autoRotateW = true;
      camera.position.copy(defaultCamPos);
      selectedKey = null;
      parts.forEach(p => {
        if (p.mesh.material && p.mesh.material.emissive)
          p.mesh.material.emissiveIntensity = p.mesh.userData.baseEmissive > 0 ? 0.55 : 0;
        p.mesh.scale.setScalar(1.0);
      });
      document.querySelectorAll('#wearablePartList .part-btn').forEach(b => b.classList.remove('active'));
      infoPanel.innerHTML = '<b>Tap a component</b>Select any part on the wearable model or in this list to learn what it does.';
    });

    // Animate
    function animateW() {
      requestAnimationFrame(animateW);
      if (autoRotateW && !isDraggingW) {
        rotYW += 0.003;
        device.rotation.y = rotYW;
      }
      renderer.render(scene, camera);
    }
    animateW();
  })();

  // Production Tasks Interactive Checklist State Sync
  const idxChks = document.querySelectorAll('.idx-task-chk');
  idxChks.forEach(chk => {
    const key = 'idx_task_' + chk.getAttribute('data-chk');
    if (localStorage.getItem(key) === 'true') {
      chk.checked = true;
    }
    chk.addEventListener('change', () => {
      localStorage.setItem(key, chk.checked);
    });
  });
}

// Immediate & ReadyState Fail-Proof Execution
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAIoTApp);
} else {
  initAIoTApp();
}



