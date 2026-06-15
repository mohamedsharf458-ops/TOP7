import React, { useState } from 'react';

function App() {
  const [activeCategory, setActiveCategory] = useState('hot');
  const [searchTerm, setSearchTerm] = useState('');

  const menu = {
    hot: [
      { name: 'تركيه', price: '8/5', desc: 'قهوة تركي غنية ومعدة على الأصول بالطعم التقليدي الأصيل.' },
      { name: 'كابتشينو', price: '10/8', desc: 'مزيج متوازن من الإسبريسو المركز والحليب المبخر مع رغوة كريمية غنية.' },
      { name: 'هوت شوكليت', price: '10/8', desc: 'شوكولاتة ساخنة فاخرة تذوب مع الحليب الدافئ لتجربة شتوية دافئة.' },
      { name: 'حليب زنجبيل', price: '5/3', desc: 'مشروب طبيعي دافئ ومثالي يعطيك طاقة ونشاط ويناسب الأجواء الباردة.' },
      { name: 'كوراتادو', price: '7', desc: 'جرعة إسبريسو مزدوجة مقطوعة بكمية مساوية من الحليب المبخر الناعم.' },
      { name: 'فلات وايت', price: '7', desc: 'طعم إسبريسو قوي وقوام حليب مخملي ناعم لعشاق القهوة المتوازنة.' },
      { name: 'سحلب', price: '8', desc: 'المشروب الشتوي التقليدي بالهيل والمكسرات والقوام الغني المفضّل.' },
      { name: 'شاي كرك', price: '7/5', desc: 'شاي مطبوخ على نار هادئة مع الحليب والهيل والزعفران على الطريقة الأصلية.' },
      { name: 'تسكافيه', price: '6/4', desc: 'قهوة سريعة التحضير ناعمة وخفيفة لضبط مزاجك في أي وقت.' },
      { name: 'ميكاتو', price: '10/8', desc: 'إسبريسو مركز مع بقعة صغيرة من رغوة الحليب الكثيفة لعشاق الطعم القوي.' },
      { name: 'اسبريسو حار', price: '11/9', desc: 'جرعة مركزة من القهوة النقية المستخلصة من أجود حبات البن العالمية.' },
      { name: 'كرم كابتشينو', price: '11/9', desc: 'كابتشينو مميز مضاف إليه لمسة من الكراميل السائل اللذيذ.' },
    ],
    cold: [
      { name: 'Oreo شيك', price: '14/12', desc: 'ميلك شيك بارد غني بقطع بسكويت الأوريو المطحون والكريمة.' },
      { name: 'شيك سينكر', price: '14/12', desc: 'مزيج رائع من شيك الحليب البارد مع نكهة الفول السوداني وشوكولاتة سنكرز.' },
      { name: 'كودرد', price: '11', desc: 'مشروب طاقة بارد ومنعش يقدم مع اختيارك من النكهات الصيفية الحيوية.' },
      { name: 'موهيتو', price: '8', desc: 'مزيج صيفي فائق الانتعاش من الليمون، النعناع الطازج، الثلج والسفن أب.' },
      { name: 'موكا بارد', price: '12/10', desc: 'تناغم فريد بين الإسبريسو، الشوكولاتة، والحليب البارد مع الثلج.' },
      { name: '60 بارد', price: '10', desc: 'قهوة مقطرة باردة تتميز بإيحاءاتها الغنية الصافية والمنعشة.' },
      { name: 'أيس أمريكاني', price: '10', desc: 'إسبريسو ممدد بالماء البارد والثلج لعشاق طعم القهوة الأسود النقي.' },
      { name: 'أيس سينسس لاتيه', price: '10/8', desc: 'لاتيه بارد مميز بخلطة ونكهة "سينسس" الخاصة والسرية للكافيه.' },
      { name: 'أيس لاتيه', price: '10/8', desc: 'إسبريسو مثالي يمتزج مع الحليب البارد والثلج لقوام خفيف ومنعش.' },
      { name: 'أيس كراميل لاتيه', price: '10/8', desc: 'إسبريسو وحليب بارد مع لمسة حالية وفخمة من سيرب الكراميل المميز.' },
      { name: 'قهوة البوم بارد', price: '5', desc: 'قهوة سوداء باردة قوية وسريعة ومثالية لبداية يوم حافل بالنشاط.' },
      { name: 'كركيه بارد', price: '6', desc: 'مشروب الكركديه الطبيعي البارد والمحلى لترطيب وانتعاش لا يقاوم.' },
      { name: 'توي بارد', price: '12/10', desc: 'مشروب منعش ومبتكر بنكهة التوت البري المنعشة مع الثلج.' },
      { name: 'شوكولاتة بارد', price: '12/10', desc: 'حليب بارد ممزوج بصوص الشوكولاتة الغنية واللذيذة لعشاق الحلى.' },
      { name: 'ملك شيك كيكات', price: '14/12', desc: 'ميلك شيك كريمي يجمع بين الحليب والآيس كريم وأصابع الكيت كات المقرمشة.' },
      { name: 'ملك شيك مارس', price: '14/12', desc: 'شيك بارد فخم بنكهة شوكولاتة مارس والكراميل الغني.' },
      { name: 'ملك شيك كيندر', price: '14/12', desc: 'ميلك شيك كريمي بطعم شوكولاتة كيندر اللطيفة والمحببة للجميع.' },
      { name: 'ملك شيك لونش', price: '14/12', desc: 'خلطة ميلك شيك خاصة ومنعشة تمنحك إحساس الحيوية والنشاط.' },
      { name: 'ملك شيك نوتيلا', price: '14/12', desc: 'عشاق النوتيلا! شيك مكثف ومخفوق بعناية مع شوكولاتة النوتيلا الأصلية.' },
    ],
    tea: [
      { name: 'شاي سادة', price: '4/2', desc: 'كوب من الشاي الأحمر الكلاسيكي الساخن والمحضر بروقان.' },
      { name: 'شاي كمون', price: '5/3', desc: 'مشروب ساخن مهدئ ومريح للمعدة بنكهة الكمون الطبيعي المصفى.' },
      { name: 'شاي بالونج', price: '5/3', desc: 'شاي دافئ بنكهة أزهار البابونج الطبيعية للمساعدة على الاسترخاء والهدوء.' },
      { name: 'شاي بالحليب', price: '5/3', desc: 'الشاي الأحمر التقليدي الممزوج بالحليب المبخر لطعم متوازن.' },
      { name: 'شاي أخضر', price: '4/2', desc: 'شاي أخضر طبيعي وصحي غني بمضادات الأكسدة ومثالي بعد الوجبات.' },
      { name: 'شاي بالنعناع', price: '5/3', desc: 'شاي أحمر ساخن ومنعش مع أوراق النعناع المغسولة والطازجة.' },
      { name: 'شاي انجليزي', price: '5/3', desc: 'شاي إنجليزي فاخر يتميز بنكهته القوية والمركزة ورائحته الذكية.' },
      { name: 'شاي بنسيون', price: '5/3', desc: 'توليفة شاي عشبية دافئة ومميزة تمنحك شعوراً بالراحة التامة.' },
    ],
    sweets: [
      { name: 'بان شيك نوتيلا', price: '8', desc: 'قطع ميني بان كيك هشة وطرية مغطاة بطبقة وافرة من شوكولاتة النوتيلا.' },
      { name: 'بان شيك مكس', price: '10', desc: 'بان كيك مميز يجمع بين صوصات الشوكولاتة البيضاء والداكنة لتناغم مذهل.' },
      { name: 'كريب نوتيلا', price: '8', desc: 'عجينة الكريب الفرنسية الرقيقة المحشوة والمزينة بالنوتيلا الغنية.' },
      { name: 'كريب مكس', price: '10', desc: 'كريب فاخر مقطع ومزين بتشكيلة مكس رائعة من الصوصات الفاخرة.' },
      { name: 'كيك بارد', price: '6', desc: 'طبقات من الكيك البارد والخفيف مع الكريمة الناعمة لتقلية مثالية مع القهوة.' },
      { name: 'حلاصديق', price: '8', desc: 'حلى الكافيه الخاص والمبتكر، مثالي للمشاركة مع الأصدقاء المقربين.' },
      { name: 'حلا بيسطاشو', price: '8', desc: 'حلى فاخر ومميز لعشاق الفستق، مغطى بصوص البيستاشو الغني.' },
      { name: 'كراميل', price: '10', desc: 'حلى كريمي ناعم يذوب في الفم مع طبقة غنية من الكراميل الذهبي السائل.' },
      { name: 'بليجكي', price: '12', desc: 'حلى بلجيكي فاخر ومعد من أجود أنواع الشوكولاتة البلجيكية الأصلية.' },
      { name: 'حلا بارد', price: '12', desc: 'حلى الجلسات المنعش بطبقاته المبردة الغنية بالنكهة اللذيذة.' },
      { name: 'كوكيز', price: '6', desc: 'قطعة كوكيز مقرمشة من الخارج وطرية من الداخل، مليئة بحبيبات الشوكولاتة الذائبة.' },
    ],
  };

  const categories = [
    { key: 'hot', label: 'الساخنة', icon: '☕' },
    { key: 'cold', label: 'الباردة', icon: '🧊' },
    { key: 'tea', label: 'الشاي', icon: '🍵' },
    { key: 'sweets', label: 'الحلويات', icon: '🍰' },
  ];

  const currentItems = menu[activeCategory].filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.appWrapper}>
      {/* استدعاء خط Cairo وتصفير الهوامش لضمان تماسك العناصر */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Cairo', sans-serif; -webkit-tap-highlight-color: transparent; }
        body { background-color: #f8fafc; }
        .category-scrollbar::-webkit-scrollbar { height: 0px; }
      `}</style>

      {/* الهيدر وغلاف الصفحة العلوي */}
      <div style={styles.menuHeader}>
        <div style={styles.overlay}></div>
        <div style={styles.headerContent}>
          <div style={styles.restaurantLogo}>
            {activeCategory === 'hot' && '☕'}
            {activeCategory === 'cold' && '🧊'}
            {activeCategory === 'tea' && '🍵'}
            {activeCategory === 'sweets' && '🍰'}
          </div>
          <h1 style={styles.headerTitle}>TOP7 COFFEE</h1>
          <p style={styles.headerSubtitle}>قائمة المشروبات والحلويات الفاخرة</p>
        </div>
      </div>

      {/* صندوق البحث الذكي */}
      <div style={styles.searchContainer}>
        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="ابحث عن مشروبك أو حلاك المفضّل..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          <span style={styles.searchIcon}>🔍</span>
        </div>
      </div>

      {/* شريط الأقسام الدائري السلس */}
      <div className="category-scrollbar" style={styles.categoriesBar}>
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => { setActiveCategory(cat.key); setSearchTerm(''); }}
            style={{
              ...styles.categoryBtn,
              ...(activeCategory === cat.key ? styles.categoryBtnActive : {})
            }}
          >
            <span style={styles.catIcon}>{cat.icon}</span> {cat.label}
          </button>
        ))}
      </div>

      {/* حاوية بطاقات وعناصر القائمة */}
      <div style={styles.menuContainer}>
        {currentItems.length > 0 ? (
          currentItems.map((item, idx) => (
            <div key={idx} style={styles.menuItem}>
              <div style={styles.itemImageBox}>
                {activeCategory === 'hot' && '☕'}
                {activeCategory === 'cold' && '🧊'}
                {activeCategory === 'tea' && '🍵'}
                {activeCategory === 'sweets' && '🍰'}
              </div>
              <div style={styles.itemDetails}>
                <div style={styles.itemTitleRow}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <span style={styles.price}>{item.price} <small style={styles.currency}>ر.س</small></span>
                </div>
                {item.desc && <p style={styles.description}>{item.desc}</p>}
              </div>
            </div>
          ))
        ) : (
          <div style={styles.noResults}>لا توجد أصناف تطابق بحثك حالياً ☕</div>
        )}
      </div>

      {/* زر الواتساب العائم الثابت بالأسفل */}
      <div style={styles.whatsappContainer}>
        <a href="https://wa.me/966556077416" target="_blank" rel="noopener noreferrer" style={styles.whatsappBtn}>
          💬 اطلب الآن عبر الواتساب
        </a>
      </div>
    </div>
  );
}

// كائنات التنسيق فائقة القوة Inline Styles لحماية المحاذاة على الهواتف
const styles = {
  appWrapper: {
    direction: 'rtl',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    color: '#2d2d2d',
    paddingBottom: '40px',
  },
  menuHeader: {
    position: 'relative',
    backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    padding: '55px 20px',
    color: 'white',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.65)',
    zIndex: 1,
  },
  headerContent: {
    position: 'relative',
    zIndex: 2,
  },
  restaurantLogo: {
    fontSize: '36px',
    background: 'white',
    width: '75px',
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    justify-content: 'center',
    borderRadius: '50%',
    margin: '0 auto 12px auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  headerTitle: {
    fontSize: '26px',
    fontWeight: '800',
    marginBottom: '4px',
  },
  headerSubtitle: {
    fontSize: '13px',
    opacity: 0.9,
    fontWeight: '300',
  },
  searchContainer: {
    padding: '0 16px',
    marginTop: '-22px',
    position: 'relative',
    zIndex: 10,
  },
  searchBox: {
    maxWidth: '500px',
    margin: '0 auto',
    position: 'relative',
    background: 'white',
    borderRadius: '30px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    overflow: 'hidden',
  },
  searchInput: {
    width: '100%',
    padding: '14px 20px 14px 50px',
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    direction: 'rtl',
    textAlign: 'right',
  },
  searchIcon: {
    position: 'absolute',
    left: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '16px',
    color: '#94a3b8',
  },
  categoriesBar: {
    display: 'flex',
    justify-content: 'center',
    gap: '10px',
    padding: '25px 16px 15px 16px',
    maxWidth: '500px',
    margin: '0 auto',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
  },
  categoryBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '10px 18px',
    border: '1px solid #e2e8f0',
    backgroundColor: 'white',
    borderRadius: '25px',
    fontSize: '13.5px',
    fontWeight: '700',
    color: '#475569',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
    transition: 'all 0.2s ease',
  },
  categoryBtnActive: {
    backgroundColor: '#1e1b4b',
    color: 'white',
    borderColor: '#1e1b4b',
    boxShadow: '0 4px 12px rgba(30, 27, 75, 0.25)',
  },
  catIcon: {
    fontSize: '15px',
  },
  menuContainer: {
    maxWidth: '500px',
    margin: '5px auto 90px auto',
    padding: '0 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: '14px',
    borderRadius: '16px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.02)',
    gap: '14px',
    border: '1px solid #f1f5f9',
  },
  itemImageBox: {
    width: '55px',
    height: '55px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justify-content: 'center',
    fontSize: '24px',
    flexShrink: 0,
    border: '1px solid #e2e8f0',
  },
  itemDetails: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  itemTitleRow: {
    display: 'flex',
    justify-content: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#111827',
  },
  price: {
    fontWeight: '800',
    color: '#b45309',
    fontSize: '15px',
    whiteSpace: 'nowrap',
  },
  currency: {
    fontSize: '10px',
    fontWeight: '600',
    color: '#6b7280',
  },
  description: {
    fontSize: '12px',
    color: '#6b7280',
    lineHeight: '1.5',
    textAlign: 'right',
  },
  noResults: {
    textAlign: 'center',
    padding: '40px',
    color: '#6b7280',
    fontSize: '14px',
    fontWeight: '600',
  },
  whatsappContainer: {
    position: 'fixed',
    bottom: '20px',
    left: '0',
    right: '0',
    zIndex: 1000,
    display: 'flex',
    justify-content: 'center',
    padding: '0 20px',
  },
  whatsappBtn: {
    width: '100%',
    maxWidth: '468px',
    backgroundColor: '#25D366',
    color: 'white',
    textAlign: 'center',
    padding: '13px',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '15px',
    textDecoration: 'none',
    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.35)',
  },
};

export default App;
