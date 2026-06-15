import React, { useState, useEffect } from 'react';

function App() {
  const [activeCategory, setActiveCategory] = useState('hot');
  const [searchTerm, setSearchTerm] = useState('');

  // كود إجباري لتنظيف المتصفح وتغيير اسم الصفحة فوق في التبويب
  useEffect(() => {
    document.title = "TOP 7 COFFEE";
    const styleElements = document.querySelectorAll('style, link[rel="stylesheet"]');
    styleElements.forEach(el => {
      if (!el.innerText.includes('Cairo')) { el.remove(); }
    });
  }, []);

  // المنيو المستخرج بالكامل وبدقة من الصورة 19964cad-b49a-4ddc-8ff7-e91b6cec7364.jpg
  const menu = {
    hot: [
      { name: 'تركية', price: '8/5', hasSizes: true },
      { name: 'كابتشينو', price: '10/8', hasSizes: true },
      { name: 'هوت شوكليت', price: '10/8', hasSizes: true },
      { name: 'حليب زنجبيل', price: '5/3', hasSizes: true },
      { name: 'كورتادو', price: '7', hasSizes: false },
      { name: 'فلات وايت', price: '7', hasSizes: false },
      { name: 'سحلب', price: '8', hasSizes: false },
      { name: 'شاي كرك', price: '7/5', hasSizes: true },
      { name: 'نسكافيه', price: '6/4', hasSizes: true },
      { name: 'ميكاتو', price: '10/8', hasSizes: true },
      { name: 'أسبانيش حار', price: '11/9', hasSizes: true },
      { name: 'كرمل كابتشينو', price: '11/9', hasSizes: true },
      { name: 'ماتشا', price: '12', hasSizes: false },
      { name: 'توي حار', price: '10/8', hasSizes: true },
      { name: 'موكا حار', price: '10/8', hasSizes: true },
      { name: 'لاتيه', price: '10/8', hasSizes: true },
      { name: 'إسبريسو', price: '8/5', hasSizes: true },
      { name: 'قهوة إيطالي', price: '10/8', hasSizes: true },
      { name: 'توي', price: '10/8', hasSizes: true },
      { name: 'قهوة فرنسي', price: '10/8', hasSizes: true },
      { name: 'قهوة اليوم حار', price: '5', hasSizes: false },
      { name: 'قهوة أمريكية', price: '8', hasSizes: false },
      { name: 'v60 حار', price: '8', hasSizes: false }
    ],
    cold: [
      { name: 'كودرد', price: '11', hasSizes: false },
      { name: 'موهيتو', price: '8', hasSizes: false },
      { name: 'موكا بارد', price: '12/10', hasSizes: true },
      { name: 'أيس أمريكاني', price: '10', hasSizes: false },
      { name: 'شوكولاته بارد', price: '12/10', hasSizes: true },
      { name: 'ملك شيك كتكات', price: '14/12', hasSizes: true },
      { name: 'ملك شيك مارس', price: '14/12', hasSizes: true },
      { name: 'ملك شيك كندر', price: '14/12', hasSizes: true },
      { name: 'ملك شيك نوتيلا', price: '14/12', hasSizes: true },
      { name: 'ملك شيك لوتس', price: '14/12', hasSizes: true },
      { name: 'ملك شيك OREO', price: '14/12', hasSizes: true },
      { name: 'ملك شيك سنيكرز', price: '14/12', hasSizes: true },
      { name: 'v60 بارد', price: '10', hasSizes: false },
      { name: 'أيس أسبنيس لاتيه', price: '10/8', hasSizes: true },
      { name: 'أيس لاتيه', price: '10/8', hasSizes: true },
      { name: 'أيس كراميل لاتيه', price: '10/8', hasSizes: true },
      { name: 'قهوة اليوم بارد', price: '5', hasSizes: false },
      { name: 'كركديه بارد', price: '6', hasSizes: false },
      { name: 'توي بارد', price: '12/10', hasSizes: true }
    ],
    tea: [
      { name: 'شاي سادة', price: '4/2', hasSizes: true },
      { name: 'شاي كمون', price: '5/3', hasSizes: true },
      { name: 'شاي بابونج', price: '5/3', hasSizes: true },
      { name: 'شاي بالحليب', price: '5/3', hasSizes: true },
      { name: 'شاي أخضر', price: '5/3', hasSizes: true },
      { name: 'شاي بالنعناع', price: '4/2', hasSizes: true },
      { name: 'شاي إنجليزي', price: '5/3', hasSizes: true },
      { name: 'شاي ينسون', price: '5/3', hasSizes: true }
    ],
    sweets: [
      { name: 'بان كيك نوتيلا', price: '8', hasSizes: false },
      { name: 'بان كيك مكس', price: '10', hasSizes: false },
      { name: 'كريب نوتيلا', price: '8', hasSizes: false },
      { name: 'كريب مكس', price: '10', hasSizes: false },
      { name: 'كيك بارد', price: '12', hasSizes: false },
      { name: 'كوكيز', price: '6', hasSizes: false },
      { name: 'حلا تمر', price: '6', hasSizes: false },
      { name: 'حلا بندق', price: '8', hasSizes: false },
      { name: 'حلا بستاشيو', price: '8', hasSizes: false },
      { name: 'كرمل', price: '10', hasSizes: false },
      { name: 'بلجيكي', price: '12', hasSizes: false },
      { name: 'حلا بارد', price: '12', hasSizes: false }
    ]
  };

  const categories = [
    { key: 'hot', label: 'المشروبات الساخنة', icon: '☕' },
    { key: 'cold', label: 'المشروبات الباردة', icon: '🧊' },
    { key: 'tea', label: 'الشاي', icon: '🍵' },
    { key: 'sweets', label: 'الحلويات', icon: '🍰' },
  ];

  const currentItems = menu[activeCategory].filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderPrice = (item) => {
    if (item.hasSizes) {
      const [medium, small] = item.price.split('/');
      return (
        <div style={styles.priceContainer}>
          <div style={styles.sizeRow}><span style={styles.sizeLabel}>سمول:</span> <span style={styles.sizePrice}>{small} ر.س</span></div>
          <div style={styles.sizeRow}><span style={styles.sizeLabel}>ميديام:</span> <span style={styles.sizePrice}>{medium} ر.س</span></div>
        </div>
      );
    }
    return <span style={styles.singlePrice}>{item.price} <small style={styles.currency}>ر.س</small></span>;
  };

  return (
    <div style={styles.appWrapper}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box !important; margin: 0 !important; padding: 0 !important; font-family: 'Cairo', sans-serif !important; }
        body { background-color: #f8fafc !important; }
      `}</style>

      {/* الهيدر المعدل إجبارياً */}
      <div style={styles.menuHeader}>
        <div style={styles.overlay}></div>
        <div style={styles.headerContent}>
          <div style={styles.restaurantLogo}>☕</div>
          <h1 style={styles.headerTitle}>TOP 7 COFFEE</h1>
          <p style={styles.headerSubtitle}>القائمة الرسمية والأسعار الدقيقة</p>
        </div>
      </div>

      {/* صندوق البحث */}
      <div style={styles.searchContainer}>
        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="ابحث عن طلبك..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          <span style={styles.searchIcon}>🔍</span>
        </div>
      </div>

      {/* الأقسام */}
      <div style={styles.categoriesBar}>
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => { setActiveCategory(cat.key); setSearchTerm(''); }}
            style={{
              ...styles.categoryBtn,
              ...(activeCategory === cat.key ? styles.categoryBtnActive : {})
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* الأصناف */}
      <div style={styles.menuContainer}>
        {currentItems.map((item, idx) => (
          <div key={idx} style={styles.menuItem}>
            <div style={styles.itemTitleRow}>
              <h3 style={styles.itemName}>{item.name}</h3>
              {renderPrice(item)}
            </div>
          </div>
        ))}
      </div>

      {/* الواتساب */}
      <div style={styles.whatsappContainer}>
        <a href="https://wa.me/966556077416" target="_blank" rel="noopener noreferrer" style={styles.whatsappBtn}>
          💬 اطلب الآن عبر الواتساب
        </a>
      </div>
    </div>
  );
}

const styles = {
  appWrapper: { direction: 'rtl', backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' },
  menuHeader: { position: 'relative', backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000')", backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'center', padding: '50px 20px', color: 'white' },
  overlay: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.75)' },
  headerContent: { position: 'relative', zIndex: 2 },
  restaurantLogo: { fontSize: '32px', background: 'white', width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', margin: '0 auto 10px auto' },
  headerTitle: { fontSize: '28px', fontWeight: '800', color: 'white' },
  headerSubtitle: { fontSize: '13px', color: '#e2e8f0' },
  searchContainer: { padding: '0 16px', marginTop: '-22px', position: 'relative', zIndex: 10 },
  searchBox: { maxWidth: '500px', margin: '0 auto', position: 'relative', background: 'white', borderRadius: '30px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', border: '1px solid #e2e8f0' },
  searchInput: { width: '100%', padding: '14px 20px 14px 50px', border: 'none', outline: 'none', fontSize: '14px', textAlign: 'right' },
  searchIcon: { position: 'absolute', left: '20px', color: '#94a3b8' },
  categoriesBar: { display: 'flex', gap: '8px', padding: '20px 16px 10px 16px', maxWidth: '500px', margin: '0 auto', overflowX: 'auto' },
  categoryBtn: { padding: '10px 16px', border: '1px solid #e2e8f0', backgroundColor: 'white', borderRadius: '25px', fontSize: '13px', fontWeight: '700', color: '#475569', cursor: 'pointer', whiteSpace: 'nowrap' },
  categoryBtnActive: { backgroundColor: '#1e1b4b', color: 'white', borderColor: '#1e1b4b' },
  menuContainer: { maxWidth: '500px', margin: '10px auto 90px auto', padding: '0 16px', display: 'flex', flexDirection: 'column', gap: '10px' },
  menuItem: { backgroundColor: '#ffffff', padding: '16px', borderRadius: '14px', border: '1px solid #f1f5f9', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' },
  itemTitleRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' },
  itemName: { fontSize: '15px', fontWeight: '700', color: '#111827' },
  singlePrice: { fontWeight: '800', color: '#b45309', fontSize: '16px' },
  currency: { fontSize: '11px', color: '#6b7280' },
  priceContainer: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' },
  sizeRow: { display: 'flex', gap: '4px', fontSize: '12px' },
  sizeLabel: { color: '#6b7280' },
  sizePrice: { fontWeight: '700', color: '#b45309' },
  whatsappContainer: { position: 'fixed', bottom: '20px', left: '0', right: '0', zIndex: 1000, display: 'flex', justifyContent: 'center', padding: '0 20px' },
  whatsappBtn: { width: '100%', maxWidth: '468px', backgroundColor: '#25D366', color: 'white', textAlign: 'center', padding: '13px', borderRadius: '30px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', display: 'block' }
};

export default App;
